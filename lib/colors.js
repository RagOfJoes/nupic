import Color from 'color';
import theme from 'lib/theme';

export const getNeumorph = ({ spread = 3.2, darken = 0.2, blurLength = 7.4, bgColor = theme.palette.background.default }) => {
	const lightColor = Color(bgColor).rotate(-6).lighten(0.2).hex();
	const contrastColor = Color(bgColor).rotate(4).desaturate(0.1).darken(darken).hex();
	const borderColor = Color(bgColor).alpha(0.2).rgb();
	return {
		backgroundColor: 'transparent',
		border: `1px solid rgba(${borderColor.red()}, ${borderColor.green()}, ${borderColor.blue()}, 0.20)`,
		boxShadow: `-${spread}px -${spread}px ${
			blurLength > 20 ? blurLength - 10 : blurLength
		}px 0 ${lightColor}, ${spread}px ${spread}px ${blurLength}px 0 ${contrastColor}`,
	};
};

export const getInsetNeumorph = ({
	spread = 3.2,
	darken = 0.2,
	blurLength = 9.4,
	bgColor = theme.palette.background.default,
}) => {
	const lightColor = Color(bgColor).rotate(-6).lighten(0.05).hex();
	const contrastColor = Color(bgColor).rotate(4).desaturate(0.1).darken(darken).hex();
	const borderColor = Color(bgColor).alpha(0.2).rgb();
	return {
		backgroundColor: 'transparent',
		border: `1px solid rgba(${borderColor.red()}, ${borderColor.green()}, ${borderColor.blue()}, 0.20)`,
		boxShadow: `inset -${spread}px -${spread}px ${
			blurLength > 20 ? blurLength - 10 : blurLength
		}px 0 ${lightColor}, inset ${spread}px ${spread}px ${blurLength}px 0 ${contrastColor}`,
	};
};
