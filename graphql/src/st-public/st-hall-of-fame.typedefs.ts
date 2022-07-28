import { gql } from 'apollo-server';

export const SThallOfFameTypeDefs = gql`
	type STHallOfFame {
		users: STHallOfFameUsers!
		groups: STHallOfFameGroups!
	}

	type STHallOfFameUsers {
		highestPortfolio: [STUserIdentification!]!
		bestGainers: STHallOfFameEntityGainsUsers!
		wortGainers: STHallOfFameEntityGainsUsers!
		lastUpdateDate: String!
		total: Float!
	}

	type STHallOfFameGroups {
		highestPortfolio: [STGroupIdentification!]!
		lastUpdateDate: String!
		total: Float!
	}

	type STHallOfFameEntityGainsUsers {
		day_1_change_prct: [STUserIdentification!]!
		day_1_change_number: [STUserIdentification!]!
		week_1_change_prct: [STUserIdentification!]!
		week_1_change_number: [STUserIdentification!]!
		week_2_change_prct: [STUserIdentification!]!
		week_2_change_number: [STUserIdentification!]!
		week_3_change_prct: [STUserIdentification!]!
		week_3_change_number: [STUserIdentification!]!
		month_1_change_prct: [STUserIdentification!]!
		month_1_change_number: [STUserIdentification!]!
	}
`;
