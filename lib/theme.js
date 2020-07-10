import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes';

export default responsiveFontSizes(
	createMuiTheme({
		typography: {
			fontFamily: ['Nunito', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
		},
		overrides: {
			MuiCssBaseline: {
				'@global': {
					'@font-face': 'Nunito',
				},
			},
		},
		palette: {
			type: 'light',

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
				default: '#fefefe',
			},
		},
	})
);
