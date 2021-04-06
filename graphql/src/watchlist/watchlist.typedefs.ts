import { gql } from "apollo-server";

export const watchlistTypeDefs = gql`

    ##### TYPES
    type STStockWatchlist {
        id: String!
        name: String!
        date: String
        userId: String!
        summaries: [Summary]
    }

    ##----------------------
    ##### INTPUS

    input STStockWatchInputlistIdentifier {
        userId: String!
        id: String
        additionalData: String
    }

    
    
`;
