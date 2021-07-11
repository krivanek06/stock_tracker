import { STStockHistoricalClosedDataWithPeriod } from "../st-chart.model";
import { NewsArticle, STSummary } from "../st-stockDetails.model";

export interface STMarketDailyOverview {
    stocks_day_gainers: STMarketTopTableSymbolData[];
    stocks_day_losers: STMarketTopTableSymbolData[];
    stocks_day_active: STMarketTopTableSymbolData[];
    stocks_undervalued_growth_stocks: STMarketTopTableSymbolData[];
    stocks_growth_technology_stocks: STMarketTopTableSymbolData[];
    stocks_undervalued_large_caps: STMarketTopTableSymbolData[];
    stocks_aggressive_small_caps: STMarketTopTableSymbolData[];
    stocks_small_cap_gainers: STMarketTopTableSymbolData[];
    stock_suggestions?: STStockSuggestion[];
    top_crypto: STMarketTopTableCryptoData[];
    news: NewsArticle[];
    events: STEventCalendarData[];
    earnings: STEventCalendarEarningsData[];
    lastUpdate?: string;
  }
  
  export interface StMarketCalendarEvents {
    events: STEventCalendarData[];
  }

  export interface StMarketCalendarEventsEarnings {
    earnings: STEventCalendarEarningsData[];
  }
  
  
export interface STStockSuggestion {
    historicalData: STStockHistoricalClosedDataWithPeriod;
    summary: STSummary;
  }
  
  export interface STEventCalendarData {
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
  
  export interface STEventCalendarEarningsData {
    companyshortname: string;
    epsactual: number;
    epsestimate: number;
    epssurprisepct: number;
    gmtOffsetMilliSeconds: number;
    quoteType: string;
    startdatetime: string;
    startdatetimetype: string;
    ticker: string;
    timeZoneShortName: string;
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