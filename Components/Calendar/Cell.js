import { memo } from 'react';
import useCellStyles from './Cell.style';
import Grid from '@material-ui/core/Grid';
import TableCell from '@material-ui/core/TableCell';
import ButtonBase from '@material-ui/core/ButtonBase';

/**
 *
 * @param {Object} styles
 * @param {Boolean} active
 */
const getCellClass = (styles, active) => {
	if (active) {
		return styles.activeCell;
	}

	return styles.inactiveCell;
};

/**
 *
 * @param {Object} styles
 * @param {Boolean} active
 * @param {Boolean} selected
 */
const getGridClass = (styles, active, selected) => {
	if (active && selected) {
		return `${styles.activeGrid} ${styles.selected}`;
	} else if (active) {
		return styles.activeGrid;
	}

	return styles.inactiveGrid;
};

export default memo(({ active, selected, children, onClick }) => {
	const styles = useCellStyles();
	return (
		<TableCell
			align="center"
			variant="body"
			padding="default"
			className={getCellClass(styles, active)}
			onClick={() => {
				if (onClick && typeof onClick === 'function') onClick();
			}}
		>
			<Grid
				container
				color="primary"
				justify="center"
				direction="column"
				alignItems="center"
				component={ButtonBase}
				disableRipple={!active && !selected}
				className={getGridClass(styles, active, selected)}
			>
				{children}
			</Grid>
		</TableCell>
	);
});
