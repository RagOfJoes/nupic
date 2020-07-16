import { memo } from 'react';
import Images from './Images';
import { NextSeo } from 'next-seo';
// import { useUser } from 'lib/user';
import { useSnackbar } from 'notistack';
import Grid from '@material-ui/core/Grid';
import { useQuery } from '@apollo/client';
import { fade } from '@material-ui/core/styles';
import { GetEntryDetail } from 'lib/graphql/Queries';
import Typography from '@material-ui/core/Typography';
import { handleAuthError } from 'lib/graphql/handlers';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(
	(theme) => ({
		container: { overflow: 'hidden', borderRadius: theme.shape.borderRadius },
		content: {
			overflow: 'hidden',
			padding: theme.spacing(2),
		},
		editButton: {
			position: 'absolute',
			right: theme.spacing(1),
			bottom: theme.spacing(0.5),
			color: theme.palette.text.primary,
			transition: theme.transitions.create('background-color'),
			backgroundColor: fade(theme.palette.background.paper, 0.8),

			'&:hover': {
				backgroundColor: fade(theme.palette.background.paper, 1),
			},
		},
	}),
	{ name: 'CreationDetailContent' }
);

export default memo((props) => {
	// const { user } = useUser();
	const { id, onError } = props;

	const classes = useStyles();
	const { enqueueSnackbar } = useSnackbar();

	const { data } = useQuery(GetEntryDetail, {
		skip: !id,
		variables: { id },
		onError: async (e) => {
			if (onError && typeof onError === 'function') await onError(e);

			await handleAuthError(e, null, enqueueSnackbar);
		},
	});

	if (data && data.getEntryDetail) {
		const { title, images } = data.getEntryDetail;
		return (
			<Grid container direction="column" alignItems="center" className={classes.container}>
				<Images title={title} images={images} />

				<Grid item container>
					<Typography variant="h6">{title}</Typography>
				</Grid>
			</Grid>
		);
	}

	return (
		<Grid container direction="column" alignItems="center" className={classes.container}>
			Loading...
		</Grid>
	);
});
