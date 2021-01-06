export interface StockWatchlistCommonData {
  userId: string;
  id?: string; // documentID for stockWatchlist
}

export interface STStockWatchlist extends StockWatchlistCommonData {
  name: string;
  symbols: string[];
  date: string;
}

export interface STStockWatchlistIdentifier extends StockWatchlistCommonData {
  additionalData: string;
}



export const ST_WATCHLIST_COLLECTION = 'stock_watchlist';
