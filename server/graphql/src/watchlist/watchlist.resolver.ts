import * as admin from "firebase-admin";
import {ApolloError} from "apollo-server";
import { StockWatchlist } from "./watchList.model";
import { resolveStockSummaryForStockWatchList } from "../stockDetails/stockDetails.resolver";



export const watchlistResolvers = {
    StockWatchlist: {
        summary: async (stockWatchList: StockWatchlist) => await resolveStockSummaryForStockWatchList(stockWatchList),
    },
   
};

