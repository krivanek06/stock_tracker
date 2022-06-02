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
		bestGainers: STHallOfFameEntityGainsGroups!
		wortGainers: STHallOfFameEntityGainsGroups!
		lastUpdateDate: String!
		total: Float!
	}

	type STHallOfFameEntityGainsGroups {
		day_1_change_prct: [STGroupIdentification!]!
		day_1_change_number: [STGroupIdentification!]!
		week_1_change_prct: [STGroupIdentification!]!
		week_1_change_number: [STGroupIdentification!]!
		week_2_change_prct: [STGroupIdentification!]!
		week_2_change_number: [STGroupIdentification!]!
		week_3_change_prct: [STGroupIdentification!]!
		week_3_change_number: [STGroupIdentification!]!
		month_1_change_prct: [STGroupIdentification!]!
		month_1_change_number: [STGroupIdentification!]!
		month_2_change_prct: [STGroupIdentification!]!
		month_2_change_number: [STGroupIdentification!]!
		month_3_change_prct: [STGroupIdentification!]!
		month_3_change_number: [STGroupIdentification!]!
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
		month_2_change_prct: [STUserIdentification!]!
		month_2_change_number: [STUserIdentification!]!
		month_3_change_prct: [STUserIdentification!]!
		month_3_change_number: [STUserIdentification!]!
	}
`;
