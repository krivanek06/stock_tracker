import { Summary } from "../stockDetails/stockDetails.model";

export interface StockWatchlistCommonData {
  userId: string;
  id?: string; // documentID for stockWatchlist
}

export interface STStockWatchlist extends StockWatchlistCommonData {
  name: string;
  summaries: Summary[];
  date: Date;
}

export interface STStockWatchlistIdentifier extends StockWatchlistCommonData {
  additionalData: string;
}
