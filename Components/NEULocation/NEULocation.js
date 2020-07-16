import React from 'react';
import { parse } from './utils';
import { getNeumorph } from 'lib/colors';
import Grid from '@material-ui/core/Grid';
import NEUInput from 'Components/NEUInput';
import Popper from '@material-ui/core/Popper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Autocomplete from '@material-ui/lab/Autocomplete';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import usePlacesAutocomplete, { getLatLng, getGeocode } from 'use-places-autocomplete';

const useStyles = makeStyles(({ palette, spacing }) => ({
	paper: {
		...getNeumorph({ darken: 0.17, spread: 2.2, blurLength: 5.2 }),
		backgroundColor: palette.background.default,
	},
}));

const NEULocation = ({ onSelectLocation, ...props }) => {
	const classes = useStyles();
	const {
		value,
		setValue,
		clearSuggestions,
		suggestions: { status, data },
	} = usePlacesAutocomplete({
		debounce: 300,
	});

	return (
		<Autocomplete
			value={value}
			classes={{ paper: classes.paper }}
			options={(status === 'OK' && data) || []}
			onInputChange={(event, newInputValue) => {
				setValue(newInputValue);
			}}
			onChange={async (event, newValue) => {
				const hasOnSelect = onSelectLocation && typeof onSelectLocation === 'function';

				setValue(newValue, false);

				if (!newValue || !newValue.description) return;

				const { description } = newValue;

				try {
					const geoCode = await getGeocode({ address: description });

					const { lat, lng } = await getLatLng(geoCode[0]);

					if (hasOnSelect) onSelectLocation({ ...newValue, lat, lng });
					return;
				} catch (e) {}

				if (hasOnSelect) onSelectLocation(null);
				clearSuggestions();
			}}
			{...props}
		/>
	);
};

NEULocation.defaultProps = {
	fullWidth: true,
	popupIcon: null,
	autoComplete: true,
	onSelectLocation: null,
	disableClearable: true,
	filterOptions: (x) => x,
	includeInputInList: true,
	filterSelectedOptions: true,
	renderInput: (params) => <NEUInput {...params} label="Add a location" fullWidth />,
	getOptionLabel: (option) => (typeof option === 'string' ? option : option.description),
	PopperComponent: (p) => {
		return (
			<Popper placement="top-start" {...p}>
				{p.children}
			</Popper>
		);
	},
	renderOption: (option) => {
		const matches = option.structured_formatting.main_text_matched_substrings;
		const parts = parse(
			option.structured_formatting.main_text,
			matches.map((match) => [match.offset, match.offset + match.length])
		);

		return (
			<Grid container alignItems="center">
				<Grid item>
					<LocationOnIcon style={{ marginRight: 8 }} />
				</Grid>
				<Grid item xs>
					{parts.map((part, index) => (
						<span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
							{part.text}
						</span>
					))}

					<Typography variant="body2" color="textPrimary">
						{option.structured_formatting.secondary_text}
					</Typography>
				</Grid>
			</Grid>
		);
	},
};

export default NEULocation;
