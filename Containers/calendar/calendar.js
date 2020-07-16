import Modal from './Modal';
import { NextSeo } from 'next-seo';
import Layout from 'Components/Layout';
import Header from 'Components/Header';
import EntryDetail from './EntryDetail';
import Calendar from './CustomCalendar';
import Grid from '@material-ui/core/Grid';
import { useCalendar } from 'lib/Providers/CalendarProvider';

export default () => {
	const { toggleEntryModal, setSelectedDate, setSelectedEntry } = useCalendar();

	return (
		<>
			<NextSeo title="Calendar" />

			<Header />
			<Layout>
				<Grid container>
					<Grid item xs={12}>
						<Calendar
							onDateChange={() => setSelectedEntry(null)}
							onCellClick={(d, cell) => {
								if (cell && cell.id) {
									setSelectedDate(d);
									setSelectedEntry(cell);
									return;
								}
								setSelectedDate(d);
								toggleEntryModal(true);
							}}
						/>
					</Grid>
				</Grid>

				<Modal />
				<EntryDetail />
			</Layout>
		</>
	);
};
