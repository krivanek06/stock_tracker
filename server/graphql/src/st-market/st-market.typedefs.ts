import {gql} from 'apollo-server';


export const STMarketSharedTypeDefs = gql`

    #type
    type STMarketOverviewPartialData {
        sp500: STMarketChartDataResultContainer
        bonds: STMarketChartDataResultContainer
        social_security: STMarketChartDataResultContainer
        consumer_price_index_states: STMarketChartDataResultContainer
        consumer_us_price_index: STMarketChartDataResultContainer
        producer_us_price_index: STMarketChartDataResultContainer
        inflation_rate: STMarketChartDataResultContainer
        employment: STMarketChartDataResultContainer
        manufacturing: STMarketChartDataResultContainer
        exports: STMarketChartDataResultContainer
        misery_index: STMarketChartDataResultContainer
        treasury_yield: STMarketChartDataResultContainer
        investor_sentiment: STMarketChartDataResultContainer
        bitcoin: STMarketChartDataResultContainer
    }


    type STMarketChartDataResultContainer {
        result: [STMarketChartDataResult]
        timestamp: [Float]
        keyName: String
    }

    type STMarketChartDataResult {
        currentDate: String
        currentValue: Float
        documentKey: String
        name: String
        parentName: String
        quandalKey: String
        lastUpdate: String
        data: [Float]
    }

    type STMarketChartDataResultCombined {
        currentDate: String
        currentValue: Float
        documentKey: String
        name: String
        parentName: String
        quandalKey: String
        lastUpdate: String
        data: [[Float]]
    }

    type STMarketChartDataResultSearch {
        result: [STMarketChartDataResultCombined]
    }

    type STMarketDatasetKeyCategories {
        categories: [STMarketDatasetKeyCategory]!
    }

    type STMarketDatasetKeyCategory {
        data: [STMarketDatasetKey]!
        name: String!
    }

    type STMarketDatasetKey {
        documentKey: String!
        name: String!
    }

`;
