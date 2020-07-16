import moment from 'moment';
import { memo } from 'react';
import useDaysLabelStyle from './DaysLabel.style';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

export default memo(() => {
	const today = moment().day();
	const styles = useDaysLabelStyle();

	return (
		<>
			<TableCell align="center" variant="head" className={`${styles.root} ${today === 0 && styles.today}`}>
				<Typography variant="body2" className={styles.text}>
					Sun
				</Typography>
			</TableCell>

			<TableCell align="center" variant="head" className={`${styles.root} ${today === 1 && styles.today}`}>
				<Typography variant="body2" className={styles.text}>
					Mon
				</Typography>
			</TableCell>

			<TableCell align="center" variant="head" className={`${styles.root} ${today === 2 && styles.today}`}>
				<Typography variant="body2" className={styles.text}>
					Tue
				</Typography>
			</TableCell>

			<TableCell align="center" variant="head" className={`${styles.root} ${today === 3 && styles.today}`}>
				<Typography variant="body2" className={styles.text}>
					Wed
				</Typography>
			</TableCell>

			<TableCell align="center" variant="head" className={`${styles.root} ${today === 4 && styles.today}`}>
				<Typography variant="body2" className={styles.text}>
					Thu
				</Typography>
			</TableCell>

			<TableCell align="center" variant="head" className={`${styles.root} ${today === 5 && styles.today}`}>
				<Typography variant="body2" className={styles.text}>
					Fri
				</Typography>
			</TableCell>

			<TableCell align="center" variant="head" className={`${styles.root} ${today === 6 && styles.today}`}>
				<Typography variant="body2" className={styles.text}>
					Sat
				</Typography>
			</TableCell>
		</>
	);
});
