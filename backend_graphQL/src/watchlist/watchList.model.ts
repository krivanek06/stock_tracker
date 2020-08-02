export interface StockWatchlistCommonData {
  userId: string;
  id?: string; // documentID for stockWatchlist
}

export interface StockWatchlist extends StockWatchlistCommonData {
  name: string;
  stocks: string[];
  timestamp: number;
}

export interface StockWatchlistIdentifier extends StockWatchlistCommonData {
  additionalData: string;
}
