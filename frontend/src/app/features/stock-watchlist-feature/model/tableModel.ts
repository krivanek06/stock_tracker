import {OverView} from '../../stock-details-feature/model/stockDetails';

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

// ------------------------
export interface StockWatchlistIdentifier {
  id: string;
  userId: string;
  documentId?: string;
  stockName?: string;
}

export interface StockWatchlist {
  id: string;
  documentId: string;
  stocks: string[];
  stocksOverview: OverView[];
  timestamp: number;
}

