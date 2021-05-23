import {gql} from 'apollo-server';


export const STAdminTypeDefs = gql`
    # type 
    type STUserRegistrationDoc {
        totalRegistratedUsers: Float!
        totalActiveUsers: Float!
        userRegistrationSnippets: [STUserIndetification]
        weeklyRegistratedUsers: [STSeriesNumber]
    }

`;