import { gql } from 'apollo-server';

export const watchlistTypeDefs = gql`
	##### TYPES
	type STStockWatchlist {
		id: String!
		name: String!
		date: String
		userId: String!
		symbols: [String!]!
		summaries: [Summary!]!
	}

	##----------------------
	##### INTPUS

	input STStockWatchInputlistIdentifier {
		id: String
		additionalData: String
	}
`;
