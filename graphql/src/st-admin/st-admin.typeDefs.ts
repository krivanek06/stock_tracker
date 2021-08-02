import {gql} from 'apollo-server';


export const STAdminTypeDefs = gql`
    # type 
    type STAdminMainInformations {
        lastStockDetailsReload: String
        usersRegistrated: Float!
        usersActive: Float!
        usersRegistrationSnippets: [STUserIndetification]!
        usersWeeklyRegistrated: [STSeriesNumber]!
    }

`;