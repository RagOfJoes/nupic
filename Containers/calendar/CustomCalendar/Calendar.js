import { memo } from 'react';
import CustomRender from './CustomRender';
import Calendar from 'Components/Calendar';
import { useCalendar } from 'lib/Providers/CalendarProvider';

export default memo(({ onCellClick, onDateChange }) => {
	const { data, month, setMonth, year, setYear } = useCalendar();
	return (
		<Calendar
			month={month}
			setMonth={setMonth}
			year={year}
			setYear={setYear}
			onDateChange={onDateChange}
			render={() => <CustomRender data={data} month={month + 1} year={year} onCellClick={onCellClick} />}
		/>
	);
});
