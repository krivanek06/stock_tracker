import * as api from "stock-tracker-common-interfaces";
import {resolveStockSummaryForSymbols} from "../st-stocks/st-stock.resolver";



export const stStockWatchlistResolvers = {
    STStockWatchlist: {
        summaries: async (stockWatchlist: api.STStockWatchlist) => await resolveStockSummaryForSymbols(stockWatchlist.symbols)
    }
};
