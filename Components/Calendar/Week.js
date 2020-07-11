import moment from 'moment';
import useWeekStyles from './Week.style';
import Grid from '@material-ui/core/Grid';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { DAYS_ARRAY, WEEKS_ARRAY } from 'lib/constants';

export default ({ month, year }) => {
	let date = 1;

	const styles = useWeekStyles();
	const formattedMonth = moment(`${month + 1}/${year}`, 'M/YYYY');

	const daysInMonth = formattedMonth.daysInMonth();
	const firstDay = formattedMonth.startOf('month').day();

	const prevMonth = formattedMonth.subtract(1, 'month');
	const prevMonthDays = prevMonth.daysInMonth();

	return WEEKS_ARRAY.map((week) => {
		return DAYS_ARRAY.map((day) => {
			if (week === 0 && day < firstDay) {
				const prevMonthDay = prevMonthDays + 1 - (prevMonthDays - day);
				return (
					<TableCell
						align="center"
						variant="body"
						padding="default"
						className={styles.cell}
						key={`${day}-${week}-${month}-${year}`}
					>
						<Grid
							container
							color="primary"
							justify="center"
							direction="column"
							alignItems="center"
							component={ButtonBase}
							className={styles.grid}
						>
							<Grid item>
								<Typography variant="subtitle2">{prevMonthDay}</Typography>
							</Grid>
						</Grid>
					</TableCell>
				);
			} else if (date > daysInMonth) {
				const nextMonthDay = date++ - daysInMonth;

				return (
					<TableCell
						align="center"
						variant="body"
						padding="default"
						className={styles.cell}
						key={`${day}-${week}-${month}-${year}`}
					>
						<Grid
							container
							color="primary"
							justify="center"
							direction="column"
							alignItems="center"
							component={ButtonBase}
							className={styles.grid}
						>
							<Grid item>
								<Typography variant="subtitle2">{nextMonthDay}</Typography>
							</Grid>
						</Grid>
					</TableCell>
				);
			}

			return (
				<TableCell
					align="center"
					variant="body"
					padding="default"
					className={styles.day}
					key={`${day}-${week}-${month}-${year}`}
				>
					<Grid
						container
						color="primary"
						justify="center"
						direction="column"
						alignItems="center"
						component={ButtonBase}
						className={styles.activeGrid}
					>
						<Grid item>
							<Typography variant="subtitle2">{date++}</Typography>
						</Grid>
					</Grid>
				</TableCell>
			);
		});
	});
};
