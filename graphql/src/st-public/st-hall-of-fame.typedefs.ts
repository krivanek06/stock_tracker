import { gql } from 'apollo-server';

export const SThallOfFameTypeDefs = gql`
	type STHallOfFame {
		users: STHallOfFameUsers!
		groups: STHallOfFameGroups!
	}

	type STHallOfFameUsers {
		highestPortfolio: [STUserIdentification!]!
		weeklyBestGainsPrct: [STUserIdentification!]!
		weeklyWorstGainsPrct: [STUserIdentification!]!
		lastUpdateDate: String!
		total: Float!
	}

	type STHallOfFameGroups {
		highestPortfolio: [STGroupIdentification!]!
		weeklyBestGainsPrct: [STGroupIdentification!]!
		weeklyWorstGainsPrct: [STGroupIdentification!]!
		lastUpdateDate: String!
		total: Float!
	}
`;
