import gql from 'graphql-tag';

export const GetEntries = gql`
	query GetEntries($month: Int!, $year: Int!) {
		getEntries(month: $month, year: $year) {
			edges {
				id
				mood
				title

				date {
					creation
				}
			}

			pageInfo {
				cursor
				hasNextPage
			}
		}
	}
`;

export const GetEntryDetail = gql`
	query GetEntryDetail($id: ObjectId!) {
		getEntryDetail(id: $id) {
			id
			mood
			title

			location {
				main
				placeId
				latitude
				longitude
			}

			images {
				url
				name
			}

			date {
				creation
			}
		}
	}
`;
