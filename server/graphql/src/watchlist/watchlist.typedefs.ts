import { gql } from "apollo-server";

export const watchlistTypeDefs = gql`

    ##### TYPES
    type StockWatchlist {
        id: String!
        name: String!
        timestamp: Float!
        userId: String!
        stocks: [String]!
        summary: [Summary]!
    }

    ##----------------------
    ##### INTPUS

    input StockWatchlistIdentifier {
        userId: String!
        id: String
        additionalData: String
    }

    
    
`;
