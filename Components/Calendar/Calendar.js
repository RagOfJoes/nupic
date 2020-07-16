import Week from './Week';
import moment from 'moment';
import Select from './Select';
import DaysLabel from './DaysLabel';
import Table from '@material-ui/core/Table';
import useCalendarStyles from './Calendar.style';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { useState, useEffect, memo, useCallback } from 'react';

export default memo(({ month, setMonth, year, setYear, render, onDateChange, disableToday }) => {
	const styles = useCalendarStyles();

	const [mounted, setMounted] = useState(false);

	// Make sure that appropriate Setter Functions are provided
	// if Calendar is a Controlled Component
	if ((month && !setMonth) || (year && !setYear)) throw new Error('You must provide a setter fn for a Controlled Component!');

	// Default State Setter
	const [_month, _setMonth] = useState(moment().month());
	const [_year, _setYear] = useState(moment().year());

	const gatedSetMonth = useCallback((v) => {
		if (setMonth && typeof setMonth === 'function') return setMonth(v);

		_setMonth(v);
	}, []);

	const gatedSetYear = useCallback((v) => {
		if (setMonth && typeof setYear === 'function') return setYear(v);

		_setYear(v);
	}, []);

	// Run onDateChange callback
	useEffect(() => {
		if (mounted && onDateChange && typeof onDateChange === 'function') onDateChange(month || _month, year || _year);
	}, [month ?? _month, year ?? _year]);

	// Run on Mount
	useEffect(() => {
		setMounted(true);

		return () => setMounted(false);
	}, []);

	return (
		<Table className={styles.root}>
			<TableHead>
				<TableRow className={styles.titleRow}>
					<TableCell className={styles.titleCell}>
						<Select
							year={year ?? _year}
							setYear={gatedSetYear}
							month={month ?? _month}
							setMonth={gatedSetMonth}
							disableToday={disableToday}
						/>
					</TableCell>
				</TableRow>
			</TableHead>

			<TableBody className={styles.body}>
				<TableRow className={`${styles.row} ${styles.head}`}>
					<DaysLabel />
				</TableRow>

				<TableRow className={styles.row}>
					{/* Allow for a custom Render fn */}
					{render && typeof render === 'function' ? (
						render(month || _month, year || _year)
					) : (
						<Week year={year || _year} month={month || _month} />
					)}
				</TableRow>
			</TableBody>
		</Table>
	);
});
