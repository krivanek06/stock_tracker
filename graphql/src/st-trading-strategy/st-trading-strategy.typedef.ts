import {gql} from 'apollo-server';


export const STTraingStrategyTypeDefs = gql`

    type STTradingStrategyData {
        interval: String!
        period: String!
        series: [STSeries]!
        timestamp: [Float]!
    }

    type STTradingStrategySearch {
        data: [STTradingStrategySearchData]!
    }

    type STTradingStrategySearchData {
        description: String
        name: String!
        symbol: String!
        url: String
    }

    enum STTradingStrategyEnum {
        RED_WHITE_BLUE
        GREEN_LINE_BREAKOUT
        RESISTANCE_PIVOT_POINTS
        EXTENDED_MARKER_VERIFICATION
        RISK_MANAGEMENT_CALCULATOR
    }

`;