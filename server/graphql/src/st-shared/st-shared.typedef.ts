import { gql } from "apollo-server";



export const STSharedTypeDefs = gql`
    type STGeographic {
        longitude: String
        latitude: String
    }

    type STLog {
        date: String!
        logText: String!
    }

    type STSimpleChart {
        date: String!
        data: Float!
        label: String
    }

    type STStockHistoricalClosedDataWithPeriod {
        livePrice: Float
        price: [Float]
        symbol: String
        period: String
    }

    type STStockHistoricalDataWithPeriod {
        livePrice: Float
        price: [[Float]]
        symbol: String
        period: String
    }
    
    #input
    input STInputLog {
        date: String!
        logText: String!
    }

    input STInputSimpleChart {
        date: String!
        data: Float!
        label: String
    }

    input STInputFielChange {
        inputFiel: String!
    }

    

`;
