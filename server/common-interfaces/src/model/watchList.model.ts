import { Summary } from './stockDetails.model';


export interface StockWatchlistCommonData {
  userId: string;
  id?: string; // documentID for stockWatchlist
}

export interface STStockWatchlist extends StockWatchlistCommonData {
  name: string;
  summaries: Summary[];
  date: string;
}

export interface STStockWatchlistIdentifier extends StockWatchlistCommonData {
  additionalData: string;
}



export const ST_WATCHLIST_COLLECTION = 'stockWatchlist';
