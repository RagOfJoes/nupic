import gql from 'graphql-tag';

export const SignS3SingleMutation = gql`
	mutation SignS3SingleMutation($file: FileUpload!) {
		signS3Single(file: $file) {
			fileUrl
			signedUrl
		}
	}
`;

export const SignS3MultipleMutation = gql`
	mutation SignS3MultipleMutation($files: [FileUpload!]!) {
		signS3Multiple(files: $files) {
			fileUrl
			signedUrl
		}
	}
`;

export const CreateEntry = gql`
	mutation CreateEntry($entry: EntryInput!) {
		createEntry(entry: $entry) {
			id
			mood
			title

			date {
				creation
			}
		}
	}
`;
