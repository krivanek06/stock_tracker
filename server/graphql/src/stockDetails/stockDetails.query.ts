import {stockDataAPI} from './../enviroment';
import {ApolloError} from 'apollo-server';
import * as api from 'stock-tracker-common-interfaces';
import * as admin from "firebase-admin";
import {getCurrentIOSDate} from "../st-shared/st-shared.functions";


// check if details already exists in firestore, else fetch form api and save them
export const queryStockDetails = async (symbol: string): Promise<api.StockDetails> => {
    try {
        const stockDetailsDocs = await admin.firestore().collection(`${api.ST_STOCK_DATA_COLLECTION}`).doc(symbol).get();
        const data = stockDetailsDocs.data() as api.StockDetailsWrapper | undefined;

        return !!data ? data.details : await getAndSaveStockDetailsFromApi(symbol);
    } catch (error) {
        throw new ApolloError(error);
    }
}

export const queryStockSummary = async (symbol: string): Promise<api.Summary> => {
    try {
        const details = await queryStockDetails(symbol);
        return details.summary;
    } catch (error) {
        throw new ApolloError(error);
    }
}


// PRIVATE FUNCTIONS
const getAndSaveStockDetailsFromApi = async (symbol: string): Promise<api.StockDetails> => {
    const resolverPromise = await global.fetch(`${stockDataAPI}/fundamentals/all?symbol=${symbol}`);
    const response = await resolverPromise.json() as api.StockDetails;

    // save details
    admin.firestore().collection(`${api.ST_STOCK_DATA_COLLECTION}`).doc(symbol).set({
        details: response,
        detailsLastUpdate: getCurrentIOSDate(),
        summaryLastUpdate: getCurrentIOSDate(),
        newsLastUpdate: getCurrentIOSDate(),
    });

    for (let i = 0; i < response.financialReports.length; i++) {
        admin.firestore()
            .collection(`${api.ST_STOCK_DATA_COLLECTION}`)
            .doc(symbol)
            .collection(api.ST_STOCK_DATA_COLLECTION_MORE_INFORMATION)
            .doc(api.ST_STOCK_DATA_DOCUMENT_FINACIAL_REPORTS)
            .set({
                reports: response.financialReports,
            });
    }
    delete response.financialReports;

    return response;
};
