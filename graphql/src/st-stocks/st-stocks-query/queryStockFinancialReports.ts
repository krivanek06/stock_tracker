import {ApolloError} from 'apollo-server';
import * as api from 'stock-tracker-common-interfaces';
import * as admin from "firebase-admin";

export const queryStockFinancialReports = async(symbol: string): Promise<api.StockDetailsFinancialReports> => {
    try {
        const doc = await admin.firestore().collection(api.ST_STOCK_DATA_COLLECTION)
                    .doc(symbol)
                    .collection(api.ST_STOCK_DATA_COLLECTION_MORE_INFORMATION)
                    .doc(api.ST_STOCK_DATA_DOCUMENT_FINACIAL_REPORTS)
                    .get();
        const data = doc.data() as api.StockDetailsFinancialReports;

        return {...data, id: symbol};

    } catch (error) {
        throw new ApolloError(error);
    }

}