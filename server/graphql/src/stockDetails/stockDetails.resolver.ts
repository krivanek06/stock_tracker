import { stockDataAPI } from '../enviroment';
import { ApolloError } from 'apollo-server';
import * as api from "stock-tracker-common-interfaces";
import {resolveUserPrivateData} from "../user/user.resolver";
import * as admin from "firebase-admin";

const fetch = require("node-fetch");

/*
export const resolveStockSummaryForStockWatchList = async (stockWatchList: STStockWatchlist) => {
    try {
        const promises = stockWatchList.stocks.map(symbol => fetch(`${stockDataAPI}/fundamentals/summary?symbol=${symbol}`));
        const resolved = await Promise.all(promises);
        const summary = resolved.map(async data => await data.json() as Summary);

        return summary;
    } catch (error) {
        throw new ApolloError(error);
    }
}*/

export const resolveFinancialReports = async(symbol: string) => {
    try {
        const reportDoc = await admin.firestore()
            .collection(`${api.ST_STOCK_DATA_COLLECTION}`)
            .doc(symbol)
            .collection(api.ST_STOCK_DATA_COLLECTION_MORE_INFORMATION)
            .doc(api.ST_STOCK_DATA_DOCUMENT_FINACIAL_REPORTS)
            .get();

        return reportDoc.data();
    } catch (error) {
        throw new ApolloError(error);
    }
}

export const stockDetailsResolvers = {
    StockDetails: {
        financialReports: async (stockDetails: api.StockDetails) => await resolveFinancialReports(stockDetails.id)
    }
};
