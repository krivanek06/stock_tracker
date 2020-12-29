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
        return details?.summary;
    } catch (error) {
        throw new ApolloError(error);
    }
}

export const queryStockSummaries = async (symbolPrefix: string) => {
    try {
        console.time();
        const symbolsDoc = await admin.firestore()
            .collection(api.ST_STATIC_DATA_COLLECTION)
            .doc(api.ST_SHARED_COLLECTON.ST_STOCK_SYMBOLS)
            .get();

        const symbols = symbolsDoc.data() as api.SearchStockSymbol;
        //console.log(symbols.data.length);

        const searchingSymbols = symbols.data.filter(s => s.startsWith(symbolPrefix)).slice(0, 5);
        console.log('symbols', searchingSymbols);

        const summaries = await Promise.all(searchingSymbols.map(x => queryStockSummary(x)));
        console.timeEnd();
        console.log('----')
        const notNullSummaries = summaries.filter(x => !!x);

        return {'summaries': notNullSummaries};
    } catch (error) {
        throw new ApolloError(error);
    }
}


// PRIVATE FUNCTIONS
const getAndSaveStockDetailsFromApi = async (symbol: string): Promise<api.StockDetails> => {
    const resolverPromise = await global.fetch(`${stockDataAPI}/fundamentals/all?symbol=${symbol}`);
    const response = await resolverPromise.json() as api.StockDetails;

    if(!response.summary.symbol || !response.summary.marketPrice){
        return null;
    }

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
