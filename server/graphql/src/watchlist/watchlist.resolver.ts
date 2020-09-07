import * as admin from "firebase-admin";
import {ApolloError} from "apollo-server";
import { StockWatchlist } from "./watchList.model";
import { StockData, OverView, StockDetails } from "./stockDetails.model";

export const resolveStockDetailsForStockWatchList = async (stockWatchList: StockWatchlist) => {
    try {
        let result: StockDetails[] = [];
        for (const stockName of stockWatchList.stocks) {
            const document = await admin.firestore().collection('stockData').doc(stockName).get();
            const details = (document.data() as StockData).details;
            result = [...result, details];
        }

        return result;
    } catch (error) {
        throw new ApolloError(error);
    }
}

export const watchlistResolvers = {
    StockWatchlist: {
        stocksDetails: async (stockWatchList: StockWatchlist) => await resolveStockDetailsForStockWatchList(stockWatchList),
    },
   
};

