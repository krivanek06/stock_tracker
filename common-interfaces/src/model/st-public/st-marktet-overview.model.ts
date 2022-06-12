import {
  STFMCalendarEarnings, STFMCalendarEconomic, STFMCalendarIpo, STFMCompanyQuote, STFMEtfCountryWeight, STFMEtfHolder, STFMEtfSectorWeight, STFMExchangeIndustryPE,
  STFMExchangeSectorPE, STFMSectorPerformance, STFMSplitHistory, STFMStockDividend, STFMStockNew, STFMStockScreenerResult
} from "../st-financal-modeling-api.model";
import { STSummary } from "../st-stockDetails.model";

export interface STMarketDailyOverview {
  id: string;
  dailyGainers: STFMCompanyQuote[];
  dailyLosers: STFMCompanyQuote[];
  mostActive: STFMCompanyQuote[];
  stockSuggestions: STStockSuggestion[];
  topCrypto: STMarketTopTableCryptoData[];
  news: STFMStockNew[];
  calendar: STMarketCalendar;
  mutulaFunds: STFMCompanyQuote[];
  etfs: STFMCompanyQuote[];
  commodities: STFMCompanyQuote[];
  exchange: STMarketExchange;
  sectorPerformance: STFMSectorPerformance[];
  stockScreener: STFMStockScreenerResult[];
  lastUpdate?: string;
  lastUpdateTopStocks?: string;
}

export interface STMarketExchange {
  id: string;
  exchangeIndustryPE: STFMExchangeIndustryPE[];
  exchangeSectorPE: STFMExchangeSectorPE[];
}

export interface STMarketCalendar {
  calendarEconomic: STFMCalendarEconomic[];
  calendarDividend: STFMStockDividend[];
  calendarSplit: STFMSplitHistory[];
  calendarIpo: STFMCalendarIpo[];
  calendarEarnings: STFMCalendarEarnings[];
}

export interface STStockSuggestion {
  historicalData: number[];
  summary: STSummary;
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


export interface STMarketEtfDocument {
  id: string;
  etfHolders: STFMEtfHolder[];
  etfSectorWeight: STFMEtfSectorWeight[];
  etfCountryWeight: STFMEtfCountryWeight[];
  lastUpdate: string;
}