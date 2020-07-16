import Calendar from './calendar';
import CalendarProvider from 'lib/Providers/CalendarProvider';

export default () => {
	return (
		<CalendarProvider>
			<Calendar />
		</CalendarProvider>
	);
};
