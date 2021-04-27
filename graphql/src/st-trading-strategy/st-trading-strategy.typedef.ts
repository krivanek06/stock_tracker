import {gql} from 'apollo-server';


export const STTraingStrategyTypeDefs = gql`
    type STTradingStrategyData {
        interval: String!
        period: string!
        series: [STSeries]!
        timestamp: [float]!
    }

    type STTradingStrategySearch {
        data: [STTradingStrategySearch]!
    }

    type STTradingStrategySearchData {
        description: String
        name: String!
        symbol: String!
        url: String
    }

`;