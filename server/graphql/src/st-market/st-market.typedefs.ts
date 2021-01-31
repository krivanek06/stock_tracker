import {gql} from 'apollo-server';


export const STMarketSharedTypeDefs = gql`

    # Market daily overview
    type STMarketDailyOverview {
        stocks_day_gainers: [STMarketTopTableSymbolData]
        stocks_day_losers: [STMarketTopTableSymbolData]
        stocks_day_active: [STMarketTopTableSymbolData]
        stocks_undervalued_growth_stocks: [STMarketTopTableSymbolData]
        stocks_growth_technology_stocks: [STMarketTopTableSymbolData]
        stocks_undervalued_large_caps: [STMarketTopTableSymbolData]
        stocks_aggressive_small_caps: [STMarketTopTableSymbolData]
        stocks_small_cap_gainers: [STMarketTopTableSymbolData]
        stock_suggestions: [STStockSuggestion]
        top_crypto: [STMarketTopTableCryptoData]
        news: [NewsArticle]
        events: [STEventCalendarData]
        earnings: [STEventCalendarEarningsData]
        lastUpdate: String
    }
    
    type StMarketCalendarEvents {
        events: [STEventCalendarData]
    }

    type StMarketCalendarEventsEarnings {
        earnings: [STEventCalendarEarningsData]
    }

    # Market history overview
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
        lastUpdate: String
    }
    
    type STStockSuggestion {
        summary: Summary
        historicalData: STStockHistoricalClosedDataWithPeriod
    }

    type STEventCalendarData  {
        date: Float
        day: Float
        month: Float
        startdatetime: String
        year: Float
        earningscount: Float
        economiceventcount: Float
        ipoinfocount: Float
        splitscount: Float
    }

    type STEventCalendarEarningsData {
        companyshortname: String
        epsactual: Float
        epsestimate: Float
        epssurprisepct: Float
        gmtOffsetMilliSeconds: Float
        quoteType: String
        startdatetime: String
        startdatetimetype: String
        ticker: String
        timeZoneShortName: String
    }

    type STMarketTopTableSymbolData {
        averageDailyVolume3Month: Float
        currency: String
        fiftyTwoWeekHigh: Float
        fiftyTwoWeekLow: Float
        logo_url: String
        longName: String
        marketCap: Float
        quoteType: String
        recommendationKey: String
        recommendationMean: Float
        regularMarketChange: Float
        regularMarketChangePercent: Float
        regularMarketOpen: Float
        regularMarketPreviousClose: Float
        regularMarketPrice: Float
        regularMarketVolume: Float
        shortName: String
        symbol: String
        trailingPE: String
    }

    type STMarketTopTableCryptoData {
        circulatingSupply: Float
        coinImageUrl: String
        currency: String
        fiftyTwoWeekHigh: Float
        fiftyTwoWeekLow: Float
        marketCap: Float
        quoteType: String
        regularMarketChange: Float
        regularMarketChangePercent: Float
        regularMarketClosed: Float
        regularMarketOpen: Float
        regularMarketPrice: Float
        regularMarketVolume: Float
        shortName: String
        symbol: String
        volume24Hr: Float
        volumeAllCurrencies: Float
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
