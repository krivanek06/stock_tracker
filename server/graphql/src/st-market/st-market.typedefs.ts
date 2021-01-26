import {gql} from 'apollo-server';


const STMarketSharedTypeDefs = gql`

    #type
    type STMarketOverviewPartialData {
        sp500Stats: STMarketSP500AllCategory
        bonds: STMarketBonds
        exports: STMarketExports
        investorSentiment: STMarketChartData
        treasuryYield: STMarketChartData
    }
    
    type STMarketChartData {
        currentDate: String
        currentValue: Float
        description: String
        multipleData: Float
        name: String
        result: [STMarketChartDataResult]
        timestamp: [Float]
        lastUpdate: String
    }

    type STMarketChartDataResult {
        currentValue: Float
        data: [Float]
        name: String
    }

    enum ST_MARKET_FIREBASE_DOCUMENTS_ENUM {
        market_overview
        market_sp500_all_category_data
        market_bonds_all_data
        market_exports_all_data
    }

    enum ST_MARKET_FIREBASE_DOCUMENTS_CHART_DATA_ENUM {
        market_investor_sentiment_data
        market_trasury_yield_curve_rates_data
    }

`;


const STMarketSP500TypeDef = gql`
    type STMarketSP500AllCategory {
        priceToSale: STMarketChartData
        priceToBook: STMarketChartData
        bookValue: STMarketChartData
        salesGrowth: STMarketChartData
        sales: STMarketChartData
        dividends: STMarketChartData
        dividendYield: STMarketChartData
        dividendGrowth: STMarketChartData
        earnings: STMarketChartData
        earningsYield: STMarketChartData
        earningsGrowth: STMarketChartData
        peRatio: STMarketChartData
        shillerPE: STMarketChartData
        timestamp: [Float]
    }
`;

const STMarketTypeDef = gql`
    type STMarketExports {
        asia: STMarketChartData
        europe: STMarketChartData
        europeanUnion: STMarketChartData
        france: STMarketChartData
        unitedkingdom: STMarketChartData
        latinAmerica: STMarketChartData
        germany: STMarketChartData
        japan: STMarketChartData
        china: STMarketChartData
        canada: STMarketChartData
        timestamp: [Float]
    }
`;

const STMarketBondsTypeDef = gql`
    type STMarketBonds {
        AAA: STMarketChartData
        AA: STMarketChartData
        A: STMarketChartData
        BB: STMarketChartData
        B: STMarketChartData
        CCC: STMarketChartData
        CorporateBondIndexYield: STMarketChartData
        CorporateBondHighYieldIndexYield: STMarketChartData
        CorporateBondHighYieldEmergingMarketIndexYield: STMarketChartData
        CorporateBondEuroEmergingMarketIndexYield: STMarketChartData
        timestamp: [Float]
    }
`;

export const STMarketTypeDefs = [
    STMarketSharedTypeDefs,
    STMarketSP500TypeDef,
    STMarketTypeDef,
    STMarketBondsTypeDef
];
