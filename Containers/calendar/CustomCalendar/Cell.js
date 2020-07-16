import Grid from '@material-ui/core/Grid';
import { MOODS_PROPS } from 'lib/constants';
import Cell from 'Components/Calendar/Cell';
import Badge from '@material-ui/core/Badge';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(({}) => ({
	badge: ({ mood }) => {
		return {
			backgroundColor: MOODS_PROPS[mood]?.color || 'transparent',
		};
	},
}));

export default ({ mood, active, onClick, selected, children, badgeContent, badgeInvisible }) => {
	const styles = useStyles({ mood });

	return (
		<Cell
			active={active}
			selected={selected}
			onClick={() => {
				if (onClick && typeof onClick === 'function') onClick();
			}}
		>
			<Grid item>
				<Badge variant="dot" classes={{ dot: styles.badge }} invisible={badgeInvisible}>
					{badgeContent}
				</Badge>
			</Grid>

			<Grid item container justify="center">
				{children}
			</Grid>
		</Cell>
	);
};
