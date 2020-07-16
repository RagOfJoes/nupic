import { InMemoryCacheConfig } from '@apollo/client';

/**
 * @type {InMemoryCacheConfig}
 */
const config = {
	typePolicies: {
		User: {
			keyFields: ['sub'],
		},
		Entry: {
			keyFields: ['id'],
		},

		Query: {
			fields: {
				getEntries: cursorPagination(['month', 'year']),
			},
		},
	},
};

/**
 *
 * @param {Boolean|Array<String>} keyArgs
 */
export function cursorPagination(keyArgs = false) {
	return {
		keyArgs,

		merge(existing = makeEmptyData(), incoming, { args }) {
			if (!args) return existing;

			const incomingEdges = incoming.edges.slice(0);

			const edges = [...incomingEdges];

			const pageInfo = {
				...existing.pageInfo,
				...incoming.pageInfo,
			};

			return {
				...existing,
				...incoming,
				edges,
				pageInfo,
			};
		},
	};
}

function makeEmptyData() {
	return {
		edges: [],
		pageInfo: {
			cursor: '',
			hasNextPage: false,
		},
	};
}

export default config;
