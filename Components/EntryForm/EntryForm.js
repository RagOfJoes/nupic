import Grid from '@material-ui/core/Grid';
import profaneScan from 'lib/profaneScan';
import { useMutation } from '@apollo/client';
import Button from '@material-ui/core/Button';
import FormikField from 'Components/FormikField';
import NEULocation from 'Components/NEULocation';
import MenuItem from '@material-ui/core/MenuItem';
import { formatEntries } from 'lib/formatFileName';
import { MOODS, MOODS_PROPS } from 'lib/constants';
import LargeDropzone from 'Components/LargeDropzone';
import { useEntryFormStyles } from './EntryForm.style';
import React, { memo, useState, useEffect } from 'react';
import { init, schema, handleImageUpload } from './helpers';
import { SignS3MultipleMutation } from 'lib/graphql/Mutations';
import { Form, Field, useFormik, FormikProvider } from 'formik';

export default memo(
	({ Header, onError, onCancel, onSubmit, onSubmitted, onSubmitting, initialValues = { ...initialValues, ...init } }) => {
		const classes = useEntryFormStyles();

		const [progress, setProgress] = useState([]);
		const [uploadSize, setUploadSize] = useState(0);
		const [isMounted, toggleMounted] = useState(false);
		const [files, setFiles] = useState(() => (initialValues?.images?.length > 0 ? initialValues.images : []));

		const [signS3Mutation] = useMutation(SignS3MultipleMutation);

		useEffect(() => {
			toggleMounted(true);

			return () => {
				toggleMounted(false);
			};
		}, []);

		const formik = useFormik({
			initialValues,
			validationSchema: schema,
			onSubmit: async (values, actions) => {
				if (!isMounted) return;
				actions.setSubmitting(true);

				try {
					if (typeof onSubmitting === 'function') await onSubmitting();

					// Clean Images
					let cleanedImages = [];
					if (files && files.length > 0) {
						cleanedImages = await handleImageUpload(
							files,
							setFiles,
							signS3Mutation,
							isMounted,
							values,
							initialValues
						);
					}

					if (values.mood?.__typename) delete values.mood?.__typename;
					if (values.location?.__typename) delete values.location?.__typename;

					await onSubmit({ ...values, images: cleanedImages });

					actions.resetForm();
					setFiles([]);
					setProgress([]);
					setUploadSize(0);
					if (typeof onSubmitted === 'function') onSubmitted();
				} catch (e) {
					typeof onError === 'function' && (await onError(e));
				}
				actions.setSubmitting(false);
			},
		});

		const { values, setFieldValue, isSubmitting } = formik;

		return (
			<FormikProvider value={formik}>
				<Grid container wrap="nowrap" direction="column" className={classes.content}>
					{Header}
					<Grid item container spacing={1} wrap="nowrap" component={Form} direction="column">
						<Field type="hidden" name="date" />
						<Grid item className={classes.dropzone}>
							<LargeDropzone
								files={files}
								multiple={true}
								progress={progress}
								maxSize={1000000 * 5}
								format={formatEntries}
								uploadSize={uploadSize}
								setUploadSize={setUploadSize}
								setFiles={(images) => {
									setProgress([]);
									setFiles(images);
								}}
							/>
						</Grid>

						<Grid item>
							<Field
								name="title"
								label="Title"
								component={FormikField}
								validate={(value) => {
									if (profaneScan.profane(value)) {
										return 'Contains invalid words';
									}

									return undefined;
								}}
							/>
						</Grid>

						<Grid item>
							<Field select label="Mood" name="mood" component={FormikField}>
								{MOODS.map((mood, index) => {
									const { displayName } = MOODS_PROPS[mood];

									return (
										<MenuItem key={mood} value={mood}>
											{displayName}
										</MenuItem>
									);
								})}
							</Field>
						</Grid>

						<Grid item>
							<NEULocation
								onSelectLocation={(p) => {
									try {
										const { lat, lng, place_id, description } = p;
										setFieldValue('location.latitude', lat);
										setFieldValue('location.longitude', lng);
										setFieldValue('location.main', description);
										setFieldValue('location.placeId', place_id);
										return;
									} catch (e) {
										console.log(e);
									}

									setFieldValue('location', null);
								}}
							/>
						</Grid>

						<Grid item>
							<Field multiline name="description" label="Description" component={FormikField} />
						</Grid>

						<Grid item container justify="flex-end">
							<Grid item>
								<Button
									type="reset"
									color="primary"
									disabled={isSubmitting}
									onClick={() => {
										if (onCancel && typeof onCancel === 'function') onCancel();
									}}
								>
									Cancel
								</Button>
							</Grid>

							<Grid item>
								<Button type="submit" color="primary" disabled={isSubmitting}>
									Submit
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</FormikProvider>
		);
	}
);
