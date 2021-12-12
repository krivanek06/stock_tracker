import { gql } from 'apollo-server';

export const STAdminTypeDefs = gql`
	# type
	type STAdminMainInformations {
		lastStockDetailsReload: String
		usersRegistrated: Float!
		usersActive: Float!
		usersRegistrationSnippets: [STUserIndetificationBase!]!
		usersWeeklyRegistrated: [STSeriesNumber!]!
		tickets: [STTicket!]!
	}
`;
