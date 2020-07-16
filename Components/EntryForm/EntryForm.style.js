import { Theme } from '@material-ui/core/styles';
import makeStyles from '@material-ui/core/styles/makeStyles';

/**
 *
 * @param {Theme} theme
 */
const entryFormStyles = (theme) => ({
	content: {
		height: '100%',
	},
	dropzone: {},
});

const useEntryFormStyles = makeStyles(entryFormStyles, { name: 'EntryForm' });

export { entryFormStyles, useEntryFormStyles };
