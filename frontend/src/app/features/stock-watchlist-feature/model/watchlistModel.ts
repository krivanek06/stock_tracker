import {OverView} from '../../stock-details-feature/model/stockDetails';


// ------------------------
export interface StockWatchlistIdentifier {
  id: string;
  userId: string;
  additionalData?: string;
}

export interface StockWatchlist {
  id: string;
  documentId: string;
  stocks: string[];
  stocksOverview: OverView[];
  timestamp: number;
}

