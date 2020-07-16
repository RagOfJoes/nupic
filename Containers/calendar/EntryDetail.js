import Dialog from '@material-ui/core/Dialog';
import EntryDetail from 'Components/EntryDetail';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useCalendar } from 'lib/Providers/CalendarProvider';

const useStyles = makeStyles(({ spacing }) => ({
	paper: {
		padding: spacing(2),
	},
}));

export default () => {
	const classes = useStyles();
	const { selectedEntry, setSelectedEntry } = useCalendar();

	return (
		<Dialog
			fullWidth
			maxWidth="md"
			open={!!selectedEntry}
			onClose={() => setSelectedEntry(undefined)}
			PaperProps={{ elevation: 0, className: classes.paper }}
		>
			{selectedEntry && selectedEntry.id && <EntryDetail id={selectedEntry?.id} />}
		</Dialog>
	);
};
