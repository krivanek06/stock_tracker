import { STMarketExports } from './st-exports.model';
import { STMarketBonds } from './st-bonds.model';
import { STMarketSP500AllCategory } from './st-sp500.model';
export interface STMarketOverviewPartialData {
    sp500Stats: STMarketSP500AllCategory;
    bonds: STMarketBonds;
    exports: STMarketExports;
    investorSentiment: STMarketChartData;
    treasuryYield: STMarketChartData;
}

export interface STMarketChartData {
    currentDate: string;
    currentValue: number;
    description: string;
    multipleData: boolean;
    name: string;
    result: STMarketChartDataResult[];
    timestamp: number[];
    lastUpdate: string;
}

export interface STMarketChartDataResult {
    currentValue: number;
    data: number[] | number[][];
    name: string;
    visible?: boolean;
}

export enum ST_MARKET_FIREBASE_DOCUMENTS_ENUM {
    market_overview = 'market_overview',    // contains partial data from mutliple documents
    market_sp500_all_category_data = 'market_sp500_all_category_data',
    market_bonds_all_data = 'market_bonds_all_data',
    market_exports_all_data = 'market_exports_all_data',
}

export enum ST_MARKET_FIREBASE_DOCUMENTS_CHART_DATA_ENUM {
    market_investor_sentiment_data = 'market_investor_sentiment_data',
    market_trasury_yield_curve_rates_data = 'market_trasury_yield_curve_rates_data'
}


