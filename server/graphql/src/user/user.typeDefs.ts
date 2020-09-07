import {gql} from 'apollo-server';


export const userTypeDefs = gql`
    type User {
        uid: ID!
        displayName: String
        email: String
        photoURL: String
        providerId: String
        nickname: String
        locale: String
        stockWatchlist: [StockWatchlist]!
        userPrivateData: UserPrivateData
    } 

    type UserPrivateData {
        finnhubKey: String
    }


    input UserInput {
        uid: ID!
        displayName: String
        email: String
        photoURL: String
        providerId: String
        nickname: String
        locale: String
    }   


    input UserPrivateDataInput {
        finnhubKey: String
    }

`;

