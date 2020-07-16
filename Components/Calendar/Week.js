import Cell from './Cell';
import moment from 'moment';
import { DAYS_ARRAY, WEEKS_ARRAY } from 'lib/constants';

export default ({ month, year }) => {
	let date = 1;

	const today = moment();
	const formattedMonth = moment(`${month + 1}/${year}`, 'M/YYYY');

	const daysInMonth = formattedMonth.daysInMonth();
	const firstDay = formattedMonth.startOf('month').day();

	const prevMonth = formattedMonth.subtract(1, 'month');
	const prevMonthDays = prevMonth.daysInMonth();

	return WEEKS_ARRAY.map((week) => {
		return DAYS_ARRAY.map((day) => {
			if (week === 0 && day < firstDay) {
				const prevMonthDay = prevMonthDays + 1 - (prevMonthDays - day);
				return <Cell key={`${day}-${week}-${month}-${year}`}>{prevMonthDay}</Cell>;
			} else if (date > daysInMonth) {
				const nextMonthDay = date++ - daysInMonth;

				return <Cell key={`${day}-${week}-${month}-${year}`}>{nextMonthDay}</Cell>;
			}

			const isToday = month === today.month() && year === today.year() && date === today.day();
			return (
				<Cell active selected={isToday} key={`${day}-${week}-${month}-${year}`}>
					{date++}
				</Cell>
			);
		});
	});
};
