import * as api from "stock-tracker-common-interfaces";
import {resolveStockSummaryForSymbols} from "../stockDetails/stockDetails.resolver";



export const stStockWatchlistResolvers = {
    STStockWatchlist: {
        summaries: async (stockWatchlist: api.STStockWatchlist) => await resolveStockSummaryForSymbols(stockWatchlist.symbols)
    }
};
