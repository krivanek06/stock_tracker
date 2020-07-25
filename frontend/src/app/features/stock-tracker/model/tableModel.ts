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


export interface TopStockTableData extends TopTableData {
  volumeChange: number;
}


// -----------------------------------------
// Stock summary into tables

export interface StockWatchTableDataWrapper {
  stockTableData: StockTableData;
}

export interface StockWatchListTable {
  id?: string;
  name: string;
  stocks?: StockTableData[];
  timestamp: number;
  userId: string;
}


export interface StockTableData {
  targetEst1y: number;
  targetEstChange1y: number;
  weekRange52: string;
  currentPrice: number;
  currentPriceChange: number;
  earningsDate: string;
  exDividendDate: string;
  forwardDividendAndYield: string;
  symbol: string;
  name?: string;
}

