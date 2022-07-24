import { gql } from 'apollo-server';

export const STMarketSharedTypeDefs = gql`
	# Market daily overview
	type STMarketDailyOverview {
		id: String
		dailyGainers: [STFMCompanyQuote!]!
		dailyLosers: [STFMCompanyQuote!]!
		mostActive: [STFMCompanyQuote!]!
		stockSuggestions: [STStockSuggestion!]!
		topCrypto: [STMarketTopTableCryptoData!]!
		news: [STFMStockNew!]!
		calendar: STMarketCalendar!
		mutulaFunds: [STFMCompanyQuote!]!
		etfs: [STFMCompanyQuote!]!
		commodities: [STFMCompanyQuote!]!
		exchange: STMarketExchange!
		sectorPerformance: [STFMSectorPerformance!]!
		lastUpdate: String!
		lastUpdateTopStocks: String!
	}

	type STMarketExchange {
		id: String
		exchangeIndustryPE: [STFMExchangeIndustryPE!]!
		exchangeSectorPE: [STFMExchangeSectorPE!]!
	}

	type STMarketCalendar {
		calendarEconomic: [STFMCalendarEconomic!]!
		calendarDividend: [STFMStockDividend!]!
		calendarSplit: [STFMSplitHistory!]!
		calendarIpo: [STFMCalendarIpo!]!
		calendarEarnings: [STFMCalendarEarnings!]!
	}

	type STStockSuggestion {
		historicalData: [Float!]!
		summary: Summary!
	}

	type STMarketEtfDocument {
		id: String
		etfHolders: [STFMEtfHolder!]!
		etfSectorWeight: [STFMEtfSectorWeight!]!
		etfCountryWeight: [STFMEtfCountryWeight!]!
		lastUpdate: String
	}

	# Market history overview
	type STMarketOverviewPartialData {
		sp500: [STMarketChartDataResultCombined!]!
		bonds: [STMarketChartDataResultCombined!]!
		inflation_rate: [STMarketChartDataResultCombined!]!
		misery_index: [STMarketChartDataResultCombined!]!
		treasury_yield: [STMarketChartDataResultCombined!]!
		investor_sentiment: [STMarketChartDataResultCombined!]!
		bitcoin: [STMarketChartDataResultCombined!]!
		lastUpdate: String
	}

	type STMarketTopTableCryptoData {
		circulatingSupply: Float
		coinImageUrl: String
		currency: String
		fiftyTwoWeekHigh: Float!
		fiftyTwoWeekLow: Float!
		marketCap: Float!
		quoteType: String
		regularMarketChange: Float!
		regularMarketChangePercent: Float
		regularMarketClosed: Float!
		regularMarketOpen: Float
		regularMarketPrice: Float!
		regularMarketVolume: Float!
		shortName: String!
		symbol: String!
		volume24Hr: Float
		volumeAllCurrencies: Float
	}

	type STMarketChartDataResultCombined {
		currentDate: String!
		currentValue: Float!
		documentKey: String!
		name: String!
		parentName: String!
		lastUpdate: String!
		data: [[Float]]!
	}

	type STMarketDatasetKeyCategories {
		categories: [STMarketDatasetKeyCategory!]!
	}

	type STMarketDatasetKeyCategory {
		data: [STMarketDatasetKey!]!
		name: String!
	}

	type STMarketDatasetKey {
		documentKey: String!
		name: String!
	}
`;
