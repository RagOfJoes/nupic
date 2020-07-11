import Week from './Week';
import DaysLabel from './DaysLabel';
import { MONTHS } from 'lib/constants';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import useCalendarStyles from './Calendar.style';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

export default ({ month, year }) => {
	const styles = useCalendarStyles();
	const _month = MONTHS[month ];

	return (
		<Table className={styles.root}>
			<TableHead>
				<TableRow className={styles.titleRow}>
					<TableCell className={styles.titleCell}>
						<Grid container spacing={2} justify="center" alignItems="center">
							<Grid item>
								<Typography variant="h3" className={styles.title}>{_month.displayName}</Typography>
							</Grid>

							<Grid item>
								<Typography variant="h6">{year}</Typography>
							</Grid>
						</Grid>
					</TableCell>
				</TableRow>
			</TableHead>

			<TableBody className={styles.body}>
				<TableRow className={`${styles.row} ${styles.head}`}>
					<DaysLabel />
				</TableRow>

				<TableRow className={styles.row}>
					<Week year={year} month={month} />
				</TableRow>
			</TableBody>
		</Table>
	);
};
