import {stockDataAPI} from './../enviroment';
import {ApolloError} from 'apollo-server';
import {ST_STOCK_DATA_COLLECTION, StockDetails, StockDetailsWrapper, Summary} from "./stockDetails.model";
import * as admin from "firebase-admin";
import {getCurrentIOSDate} from "../st-shared/st-shared.functions";


// check if details already exists in firestore, else fetch form api and save them
export const queryStockDetails = async (symbol: string): Promise<StockDetails> => {
    try {
        const stockDetailsDocs = await admin.firestore().collection(`${ST_STOCK_DATA_COLLECTION}`).doc(symbol).get();
        const data = stockDetailsDocs.data() as StockDetailsWrapper | undefined;

        return !!data ? data.details : await getAndSaveStockDetailsFromApi(symbol);
    } catch (error) {
        throw new ApolloError(error);
    }
}

export const queryStockSummary = async (symbol: string): Promise<Summary> => {
    try {
        const details = await queryStockDetails(symbol);
        return details.summary;
    } catch (error) {
        throw new ApolloError(error);
    }
}


// PRIVATE FUNCTIONS
const getAndSaveStockDetailsFromApi = async (symbol: string): Promise<StockDetails> => {
    const resolverPromise = await global.fetch(`${stockDataAPI}/fundamentals/all?symbol=${symbol}`);
    const response = await resolverPromise.json() as StockDetails;

    // save details
    admin.firestore().collection(`${ST_STOCK_DATA_COLLECTION}`).doc(symbol).set({
        details: response,
        detailsLastUpdate: getCurrentIOSDate(),
        summaryLastUpdate: getCurrentIOSDate(),
        newsLastUpdate: getCurrentIOSDate(),
    });

    return response
};
