import auth from 'lib/auth';
import { ApolloClient } from '@apollo/client';
import CalendarPage from 'Containers/calendar';
import { GetEntries } from 'lib/graphql/Queries';
import { initializeApollo } from 'lib/apolloClient';

/**
 *
 * @param {GetServerSidePropsContext} ctx
 */
export async function getServerSideProps({ req, query }) {
	/**
	 * @type {ApolloClient}
	 */
	const apolloClient = initializeApollo();

	try {
		const session = await auth.getSession(req);
		await apolloClient.query({
			query: GetEntries,
			// skip: !Boolean(session.user),
			variables: { month: new Date().getMonth() + 1, year: new Date().getFullYear() },
			// context: {
			// 	headers: {
			// 		authorization: `Bearer ${session.accessToken}`,
			// 	},
			// },
		});
	} catch (e) {}

	return {
		props: {
			initialApolloState: apolloClient.cache.extract(),
		},
	};
}

export default CalendarPage;
