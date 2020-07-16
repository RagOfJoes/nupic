import moment from 'moment';
import EntryForm from 'Components/EntryForm';
import Dialog from '@material-ui/core/Dialog';
import { GetEntries } from 'lib/graphql/Queries';
import { CreateEntry } from 'lib/graphql/Mutations';
import DialogTitle from '@material-ui/core/DialogTitle';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DialogContent from '@material-ui/core/DialogContent';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useCalendar } from 'lib/Providers/CalendarProvider';
import { useMutation, useApolloClient } from '@apollo/client';

const useStyles = makeStyles(({ palette }) => ({
	root: {
		backgroundColor: palette.background.default,
	},
}));

export default ({}) => {
	const theme = useTheme();
	const styles = useStyles();
	const client = useApolloClient();
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const { selectedDate, entryModalOpen, toggleEntryModal } = useCalendar();

	const [createEntry] = useMutation(CreateEntry, {
		onCompleted: async ({ createEntry }) => {
			try {
				const variables = { month: selectedDate.getMonth() + 1, year: selectedDate.getFullYear() };
				const { getEntries } = client.readQuery({
					variables,
					query: GetEntries,
				});

				// Concat Created Entry to Edges
				const concatEdges = getEntries?.edges.concat([createEntry]) || [];

				// Sort to via Creation Date (ASC)
				const edges = concatEdges.sort((a, b) => b.date.creation - a.date.creation);

				// Update Cache
				client.writeQuery({
					query: GetEntries,
					variables,
					data: {
						getEntries: {
							...getEntries,
							edges,
						},
					},
				});
			} catch (e) {}
		},
	});

	return (
		<Dialog
			fullWidth
			maxWidth="sm"
			scroll="body"
			open={entryModalOpen}
			fullScreen={fullScreen}
			onClose={() => toggleEntryModal(false)}
			PaperProps={{ elevation: 0, className: styles.root }}
		>
			<DialogTitle>New Entry for {moment(selectedDate).startOf('d').format('MMM D, YYYY')}</DialogTitle>

			<DialogContent dividers>
				<EntryForm
					onCancel={() => toggleEntryModal(false)}
					onSubmitted={() => toggleEntryModal(false)}
					initialValues={{ date: moment(selectedDate).startOf('d').toJSON() }}
					onSubmit={async (v) => await createEntry({ variables: { entry: v } })}
				/>
			</DialogContent>
		</Dialog>
	);
};
