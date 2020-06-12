import {EntityState} from '@ngrx/entity';

export interface TopLosers {
  topLosers: TopStockTableData[];
}

export interface TopGains {
  topGains: TopStockTableData[];
}

export interface TopActive {
  mostActive: TopStockTableData[];
}

export interface TopCrypto {
  topCrypto: TopTableData[];
}

export interface TopTableData {
  currentPrice: number;
  currentPriceChange: number;
  name: string;
  symbol: string;
}


export interface TopStockTableData extends TopTableData{
  peRatio: number;
  volumeChange: number;
}


// -----------------------------------------
// Firebase stockWatchlist
export interface StockWatchListTable {
  id?: string;
  name: string;
  stocks?: StockTableData[];
  timestamp: number;
  userId: string;
}


export interface StockTableData {
  TargetEst1y: number;
  TargetEstChange1y: number;
  WeekRange52: string;
  currentPrice: number;
  currentPriceChange: number;
  earningsDate: string;
  exDividendDate: string;
  forwardDividendAndYield: string;
  symbol: string;
}

