import { gql } from "apollo-server";

export const watchlistTypeDefs = gql`

    ##### TYPES
    type StockWatchlist {
        id: String!
        documentId: String!
        timestamp: Float!
        userId: String!
        stocks: [String]!
        stocksOverview: [OverView]!
    }

    type OverView {
        currentPrice: Float!
        currentPriceChange: Float
        previousClose: Float
        weekHigh52: Float
        weekLow52: Float
        id: String!
        symbol: String!
        earningsDate: String
        exDividendDate: String
        forwardDividendAndYield: String
        targetEst1y: Float
        targetEst1yPercent: Float
    }

    
    ##### INTPUS
    input StockWatchlistCommonData {
        id: String!
        userId: String!
    }

    input StockWatchlistIdentifier {
        id: String!
        userId: String!
        documentId: String
        stockName: String
    }

    
    
`;
