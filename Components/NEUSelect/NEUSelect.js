import { getNeumorph } from 'lib/colors';
import Select from '@material-ui/core/Select';
import makeStyles from '@material-ui/core/styles/makeStyles';
import withStyles from '@material-ui/core/styles/withStyles';

export const styles = ({ palette }) => ({
	select: {
		'&:focus': {
			backgroundColor: 'transparent',
		},
	},
	icon: {
		color: palette.primary.main,
	},
});

export const useSelectMenu = makeStyles(
	({ palette, spacing }) => ({
		paper: {
			marginTop: spacing(1),
			...getNeumorph({ darken: 0.17, spread: 2.2, blurLength: 5.2 }),
			backgroundColor: palette.background.default,
		},
	}),
	{ name: 'NEUSelectMenu' }
);

export default withStyles(styles, { name: 'NEUSelect' })((props) => {
	const menuStyles = useSelectMenu();
	return (
		<Select
			displayEmpty
			MenuProps={{
				elevation: 0,
				getContentAnchorEl: null,
				anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
				transformOrigin: { vertical: 'top', horizontal: 'left' },
				classes: {
					paper: menuStyles.paper,
				},
			}}
			{...props}
		/>
	);
});
