import { useMemo } from 'react';

import cacheOpt from './apollo.cache';
import { HttpLink, ApolloClient, InMemoryCache } from '@apollo/client';

let apolloClient;

/**
 * @returns {ApolloClient}
 */
const createApolloClient = () => {
	const serverURL = typeof window === 'undefined' ? process.env.GRAPHQL_SERVER : `${window.location.origin}/api/graphql`;
	return new ApolloClient({
		cache: new InMemoryCache(cacheOpt),
		ssrMode: typeof window === 'undefined',
		link: new HttpLink({
			uri: serverURL, // Server URL (must be absolute)
			credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
		}),
	});
};

export const initializeApollo = (initialState = null) => {
	/**
	 * @type {ApolloClient}
	 */
	const _apolloClient = apolloClient ? apolloClient : createApolloClient();

	// On First render and if we have SSG or SSR then we hydrate the cache here
	if (initialState && !apolloClient) _apolloClient.cache.restore(initialState);

	// For SSG and SSR always create a new Apollo Client
	if (typeof window === 'undefined') return _apolloClient;
	// Create the Apollo Client once in the client
	if (!apolloClient) apolloClient = _apolloClient;

	return _apolloClient;
};

export const useApollo = (initialState) => {
	const store = useMemo(() => initializeApollo(initialState), [initialState]);
	return store;
};
