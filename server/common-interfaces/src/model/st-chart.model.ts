import { Summary } from './stockDetails.model';
export interface STStockHistoricalClosedDataWithPeriod {
    livePrice: number;
    price: number[];
    symbol: string;
    period: string;
}

export interface STStockHistoricalDataWithPeriod {
    livePrice: number;
    price: number[][];  // [[timestamp, open, high, low, close], [timestamp, open, high, low, close], ... ]
    symbol: string;
    period: string;
}


export interface STStockDailyInformationsData {
    summary: Summary;
    historicalData: STStockHistoricalClosedDataWithPeriod;
}


export interface STStockDailyInformations {
    dailySuggestions: STStockDailyInformationsData[];
    dailyTopGains: STStockDailyInformationsData[];
    dailyTopLosers: STStockDailyInformationsData[];
    dailyToplastUpdatedDate: string;
    dailySuggestonsLastUpdatedDate: string;
}