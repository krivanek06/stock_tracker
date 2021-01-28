import { STStockHistoricalClosedDataWithPeriod } from "./st-chart.model";
import { NewsArticle, Summary } from "./stockDetails.model";

export interface STMarketDailyOverview {
  stocks_day_gainers: STMarketTopTableSymbolData[];
  stocks_day_losers: STMarketTopTableSymbolData[];
  stocks_day_active: STMarketTopTableSymbolData[];
  stocks_undervalued_growth_stocks: STMarketTopTableSymbolData[];
  stocks_growth_technology_stocks: STMarketTopTableSymbolData[];
  stocks_undervalued_large_caps: STMarketTopTableSymbolData[];
  stocks_aggressive_small_caps: STMarketTopTableSymbolData[];
  stock_small_cap_gainers: STMarketTopTableSymbolData[];
  stock_suggestions?: STStockSuggestion[];
  top_crypto: STMarketTopTableCryptoData[];
  news: NewsArticle[];
  events_calendar: EventCalendarData[];
  lastUpdate?: string;
}

export interface STStockSuggestion {
  historicalData: STStockHistoricalClosedDataWithPeriod;
  summary: Summary;
}

export interface EventCalendarData  {
  date: number;
  day: number;
  month: number;
  startdatetime: string;
  year: number;
  earningscount: number;
  economiceventcount: number;
  ipoinfocount: number;
  splitscount: number;
}


export interface STMarketHistoryOverview {
  sp500: STMarketChartDataResultContainer;
  bonds: STMarketChartDataResultContainer;
  social_security: STMarketChartDataResultContainer;
  consumer_price_index_states: STMarketChartDataResultContainer;
  consumer_us_price_index: STMarketChartDataResultContainer;
  producer_us_price_index: STMarketChartDataResultContainer;
  inflation_rate: STMarketChartDataResultContainer;
  employment: STMarketChartDataResultContainer;
  manufacturing: STMarketChartDataResultContainer;
  exports: STMarketChartDataResultContainer;
  misery_index: STMarketChartDataResultContainer;
  treasury_yield: STMarketChartDataResultContainer;
  investor_sentiment: STMarketChartDataResultContainer;
  bitcoin: STMarketChartDataResultContainer;
  lastUpdate?: string;
}

export interface STMarketChartDataResultContainer {
  result: STMarketChartDataResult[];
  timestamp: number[];
  keyName: string;
}

interface STMarketChartDataResultAbs {
  currentDate: string;
  currentValue: number;
  documentKey: string;
  name: string;
  parentName: string;
  quandalKey: string;
  lastUpdate?: string;
}

export interface STMarketChartDataResult extends STMarketChartDataResultAbs {
  data: number[];
}

export interface STMarketChartDataResultCombined
  extends STMarketChartDataResultAbs {
  data: number[][];
}

export interface STMarketChartDataResultSearch {
  result: STMarketChartDataResultCombined[];
}

export interface STMarketDatasetKeyCategories {
  categories: STMarketDatasetKeyCategory[];
}

export interface STMarketDatasetKeyCategory {
  data: STMarketDatasetKey[];
  name: string; // ex. S&P 500
}

export interface STMarketDatasetKey {
  documentKey: string; // ex. qundal_sp_500_dividend_growth_by_quarter_value
  name: string; // ex. S&P 500 - Dividend growth
}

export interface STMarketTopTableSymbolData {
  averageDailyVolume3Month: number;
  currency: string;
  fiftyTwoWeekHigh: number;
  fiftyTwoWeekLow: number;
  logo_url: string;
  longName: string;
  marketCap: number;
  quoteType: string;
  recommendationKey: string;
  recommendationMean: number;
  regularMarketChange: number;
  regularMarketChangePercent: number;
  regularMarketOpen: number;
  regularMarketPreviousClose: number;
  regularMarketPrice: number;
  regularMarketVolume: number;
  shortName: string;
  symbol: string;
  trailingPE: string;
}

export interface STMarketTopTableCryptoData {
  circulatingSupply: number;
  coinImageUrl: string;
  currency: string;
  fiftyTwoWeekHigh: number;
  fiftyTwoWeekLow: number;
  marketCap: number;
  quoteType: string;
  regularMarketChange: number;
  regularMarketChangePercent: number;
  regularMarketClosed: number;
  regularMarketOpen: number;
  regularMarketPrice: number;
  regularMarketVolume: number;
  shortName: string;
  symbol: string;
  volume24Hr: number;
  volumeAllCurrencies: number;
}
