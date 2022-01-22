

export interface STStockWatchlist  {
  userId: string;
  id?: string; // documentID for stockWatchlist
  name: string;
  symbols: string[];
  date: string;
}

export interface STStockWatchlistIdentifier  {
  id?: string; // documentID for stockWatchlist
  additionalData: string;
}



export const ST_WATCHLIST_COLLECTION = 'stock_watchlist';
