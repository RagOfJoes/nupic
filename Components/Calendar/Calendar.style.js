import { getInsetNeumorph } from 'lib/colors';
import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

/**
 *
 * @param {Theme} theme
 */
export const calendarStyle = ({ shape, palette, spacing, breakpoints, typography }) => ({
	root: {
		overflow: 'hidden',
		borderRadius: shape.borderRadius,
		...getInsetNeumorph({ darken: 0.2, spread: 2.6, blurLength: 18, bgColor: palette.background.paper }),
	},
	titleRow: {
		borderBottom: 'none',
	},
	titleCell: {
		borderBottom: 'none',
		borderTopLeftRadius: shape.borderRadius,
		borderTopRightRadius: shape.borderRadius,
	},
	title: {
		textTransform: 'uppercase',
		fontWeight: typography.fontWeightMedium,
	},
	body: {
		width: '100%',
		display: 'grid',
		overflow: 'hidden',
		padding: spacing(3),
		gridColumn: '1 / -1',
		gridTemplateColumns: 'repeat(7, 1fr)',

		[breakpoints.down('xs')]: {
			gridTemplateColumns: '1fr',
		},
	},
	row: {
		width: '100%',
		display: 'grid',
		gridColumn: '1 / -1',
		gridTemplateColumns: 'repeat(7, 1fr)',

		[breakpoints.down('xs')]: {
			gridColumn: '1 / 2',
			gridTemplateColumns: '1fr',
		},
	},
	head: {
		overflow: 'hidden',
		borderBottom: 'none',

		[breakpoints.down('xs')]: {
			display: 'none',
		},
	},
});

const useCalendarStyles = makeStyles(calendarStyle, { name: 'Calendar', index: 20 });

export default useCalendarStyles;
