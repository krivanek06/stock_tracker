import {gql} from 'apollo-server';


export const userTypeDefs = gql`
    # type 
    type User {
        uid: ID!
        displayName: String!
        email: String!
        photoURL: String
        providerId: String
        nickname: String
        locale: String
        activity: String!
        status: String!
        stockWatchlist: [StockWatchlist]!
        userPrivateData: UserPrivateData
    } 

    type UserPrivateData {
        finnhubKey: String
        roles: [String]
    }

    # Input
    input UserInput {
        uid: ID!
        displayName: String
        email: String
        photoURL: String
        providerId: String
        nickname: String
        locale: String
        activity: String
    }   


    input UserPrivateDataInput {
        finnhubKey: String
    }

`;

