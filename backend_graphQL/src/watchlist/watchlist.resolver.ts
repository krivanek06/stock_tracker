import * as admin from "firebase-admin";
import {ApolloError} from "apollo-server";
import { StockWatchlist } from "./watchList.model";
import { StockData, OverView } from "./stockDetails.model";

export const resolveOverviewForStockWatchList = async (stockWatchList: StockWatchlist) => {
    try {
        let result: OverView[] = [];
        for (const stockName of stockWatchList.stocks) {
            const document = await admin.firestore().collection('stockData').doc(stockName).get();
            const overview = (document.data() as StockData).details.overview;
            result = [...result, overview];
        }

        return result;
    } catch (error) {
        throw new ApolloError(error);
    }
}

export const watchlistResolvers = {
    StockWatchlist: {
        stocksOverview: async (stockWatchList: StockWatchlist) => await resolveOverviewForStockWatchList(stockWatchList),
    },
   
};

