import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes';

export default responsiveFontSizes(
	createMuiTheme({
		shape: {
			borderRadius: 8,
		},
		typography: {
			fontFamily: ['Nunito', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
		},
		overrides: {
			MuiCssBaseline: {
				'@global': {
					'@font-face': 'Nunito',
				},
			},
			MuiChip: {
				root: {
					backgroundColor: 'transparent',
				},
			},
			MuiFormLabel: {
				root: {
					fontWeight: '500',
				},
			},
		},
		palette: {
			type: 'light',

			text: {
				primary: '#4C364D',
				// secondary: '#F7A992',
			},

			primary: {
				main: '#4C364D',
				dark: '#171017',
				light: '#78517A',
				contrastText: '#fefefe',
			},

			secondary: {
				main: '#F7A992',
				dark: '#CC8B78',
				light: '#FEC8B8',
				contrastText: '#4C364D',
			},

			background: {
				paper: '#f5f5f5',
				default: '#EFEEEE',
			},
		},
	})
);
