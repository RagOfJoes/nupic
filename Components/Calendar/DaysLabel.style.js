import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

/**
 *
 * @param {Theme} theme
 */
export const daysLabelStyle = ({ shape, palette, typography, breakpoints }) => ({
	root: {
		borderBottom: 'none',
		// color: palette.background.default,
		// backgroundColor: palette.primary.main,

		[breakpoints.down('xs')]: {
			display: 'none',
		},
	},
	text: {
		fontWeight: typography.fontWeightMedium,
	},
});

const useDaysLabelStyle = makeStyles(daysLabelStyle, { name: 'CalendarDaysLabel', index: 20 });

export default useDaysLabelStyle;
