import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

/**
 *
 * @param {Theme} theme
 */
export const selectStyle = ({ palette, typography }) => ({
	underline: {
		'&:before': {},
	},
	title: {
		textTransform: 'uppercase',
		fontWeight: typography.fontWeightMedium,
	},
	icon: {
		color: palette.primary.main,
	},
});

const useSelectStyles = makeStyles(selectStyle, { name: 'CalendarSelect', index: 20 });

export default useSelectStyles;
