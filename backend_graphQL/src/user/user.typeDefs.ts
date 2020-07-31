import {gql} from 'apollo-server';


export const userTypeDefs = gql`
    type User {
        uid: ID!
        displayName: String
        email: String
        photoURL: String
        providerId: String
        stockWatchlist: [StockWatchlist]!
    }    

`;

