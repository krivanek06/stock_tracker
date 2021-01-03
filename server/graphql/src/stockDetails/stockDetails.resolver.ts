import {ApolloError} from 'apollo-server';
import * as api from "stock-tracker-common-interfaces";
import * as admin from "firebase-admin";
import {queryStockSummary} from "./stockDetails.query";


export const resolveStockSummaryForSymbols = async (symbols: string[]) => {
    try {
        return await Promise.all(symbols.map(symbol => queryStockSummary(symbol)));
    } catch (error) {
        throw new ApolloError(error);
    }
}

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
