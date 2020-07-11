import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

/**
 *
 * @param {Theme} theme
 */
const headerStyle = ({ palette, ...theme }) => ({
	root: {
		borderLeft: 'none',
		borderRight: 'none',
		zIndex: theme.zIndex.drawer + 1,
		backgroundColor: palette.background.default,
	},
	logo: {
		width: '100%',
		height: '100%',
		maxWidth: 125,

		'& > svg': {
			cursor: 'pointer',
			userSelect: 'none',
		},
	},
});

const useHeaderStyle = makeStyles(headerStyle, { index: 20, name: 'Header' });

export { headerStyle, useHeaderStyle };

export default { headerStyle, useHeaderStyle };
