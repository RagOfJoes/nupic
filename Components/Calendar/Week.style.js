import { Theme } from '@material-ui/core/styles';
import { getNeumorph, getInsetNeumorph } from 'lib/colors';
import makeStyles from '@material-ui/core/styles/makeStyles';

/**
 *
 * @param {Theme} theme
 */
export const weekStyle = ({ shape, spacing, palette, transitions, breakpoints }) => ({
	cell: {
		height: '100%',
		minHeight: 160,
		overflow: 'hidden',
		padding: spacing(0.8),
		borderBottom: 'none',

		[breakpoints.down('sm')]: {
			minHeight: 100,
		},

		[breakpoints.down('xs')]: {
			display: 'none',
		},
	},
	day: {
		height: '100%',
		minHeight: 160,
		overflow: 'hidden',
		borderBottom: 'none',
		padding: spacing(0.8),

		[breakpoints.down('sm')]: {
			minHeight: 100,
		},
	},
	grid: {
		height: '100%',
		borderRadius: shape.borderRadius * 3,
		backgroundColor: palette.background.default,
	},
	activeGrid: {
		height: '100%',
		transition: transitions.create(),
		borderRadius: shape.borderRadius * 3,
		...getNeumorph({ darken: 0.17, spread: 2.2, blurLength: 5.2 }),

		'&:hover': {
			...getInsetNeumorph({ darken: 0.17, spread: 2.2, blurLength: 5.2 }),
		},
	},
	today: {
		// backgroundColor: palette.secondary.main,
	},
});

const useWeekStyles = makeStyles(weekStyle, { name: 'CalendarWeek', index: 20 });

export default useWeekStyles;
