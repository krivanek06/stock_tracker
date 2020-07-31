
export interface StockWatchlistCommonData {
  id: string; // watchlist name
  userId: string;
  documentId?: string;
}

export interface StockWatchlist extends StockWatchlistCommonData{
    stocks: string[];
    timestamp: number;
  }



export interface StockWatchlistIdentifier extends StockWatchlistCommonData{
    stockName: string;
}