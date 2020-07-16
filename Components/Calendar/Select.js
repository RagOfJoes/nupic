import { useState, memo } from 'react';
import { MONTHS } from 'lib/constants';
import SelectDialog from './SelectDialog';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import TodayIcon from '@material-ui/icons/Today';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

export default memo(({ month, setMonth, year, setYear, disableToday }) => {
	const [open, toggleOpen] = useState(false);

	const today = new Date();
	const hideTodayButton = disableToday || (today.getMonth() === month && today.getFullYear() === year);

	return (
		<Grid container spacing={2} justify="center" alignItems="center">
			{!hideTodayButton && (
				<Grid item>
					<Tooltip title="Jump to Today">
						<IconButton
							aria-label="jump to today"
							onClick={() => {
								setMonth(today.getMonth());
								setYear(today.getFullYear());
							}}
						>
							<TodayIcon color="primary" />
						</IconButton>
					</Tooltip>
				</Grid>
			)}
			<Grid item style={{ cursor: 'pointer' }} onClick={() => toggleOpen(true)}>
				<Typography variant="h5">
					{MONTHS[month].displayName} {year}
				</Typography>
			</Grid>

			<SelectDialog
				open={open}
				initYear={year}
				initMonth={month}
				toggleOpen={toggleOpen}
				onSave={(m, y) => {
					setYear(y);
					setMonth(m);
					toggleOpen(false);
				}}
			/>
		</Grid>
	);
});
