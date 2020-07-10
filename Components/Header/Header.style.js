import makeStyles from '@material-ui/core/styles/makeStyles';

const headerStyle = (theme) => ({
	root: {
		border: 'none',
		zIndex: theme.zIndex.drawer + 1,
		color: theme.palette.text.primary,
		borderBottom: theme.palette.type === 'light' ? '1px solid rgba(0, 0, 0, 0.12)' : '1px solid rgba(255, 255, 255, 0.12)',
	},
	logo: {
		width: '100%',
		height: '100%',
		cursor: 'pointer',
		backgroundColor: 'transparent',
		userSelect: 'none',
	},
});

const useHeaderStyle = makeStyles(headerStyle, { index: 20, name: 'Header' });

export { headerStyle, useHeaderStyle };

export default { headerStyle, useHeaderStyle };
