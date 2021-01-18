import {stockDataAPI} from './../enviroment';
import {ApolloError} from 'apollo-server';
import * as api from 'stock-tracker-common-interfaces';
import * as admin from "firebase-admin";
import {getCurrentIOSDate, stRandomSlice} from "../st-shared/st-shared.functions";
import {tmpSuggestionSymbols} from "./st-stock.model";
import {getStockHistoricalClosedData} from "./st-stock.fetch";
import {createNewSTStockDailyInformations} from "./st-stock.utils";


// check if details already exists in firestore, else fetch form api and save them
export const queryStockDetails = async (symbol: string): Promise<api.StockDetails> => {
    try {
        const upperSymbol = symbol.toUpperCase();
        const stockDetailsDocs = await admin.firestore().collection(`${api.ST_STOCK_DATA_COLLECTION}`).doc(upperSymbol).get();
        const data = stockDetailsDocs.data() as api.StockDetailsWrapper | undefined;

        return !!data ? data.details : await getAndSaveStockDetailsFromApi(upperSymbol);
    } catch (error) {
        throw new ApolloError(error);
    }
}

export const queryStockSummary = async (symbol: string): Promise<api.Summary> => {
    try {
        const upperSymbol = symbol.toUpperCase();
        const details = await queryStockDetails(upperSymbol);

        if (!!details && !!details.summary) {
            details.summary.id = symbol;
            return details.summary;
        }

        return null
    } catch (error) {
        throw new ApolloError(error);
    }
}

export const queryStockSummaries = async (symbolPrefix: string): Promise<api.SearchStockSummaries> => {
    try {
        if (!symbolPrefix) {
            return {summaries: []};
        }
        const upperSymbol = symbolPrefix.toUpperCase();
        console.time();
        const symbolsDocRef = admin.firestore()
            .collection(api.ST_STOCK_DATA_COLLECTION)
            .doc(api.ST_STOCK_DATA_SHARED_DOCUMENT)
            .collection(api.ST_STOCK_DATA_COLLECTION_MORE_INFORMATION)
            .doc(api.ST_STOCK_DATA_DOCUMENT_SEARCH_SYMBOL);

        console.log('symbolPrefix', symbolPrefix)
        const symbolsDoc = await symbolsDocRef.get();
        let searchSymbols = symbolsDoc.data() as api.SearchStockSymbol;

        // first fetch -> no data, get from API
        if (!symbolsDoc.data()) {
            const symbolsPromise = await global.fetch(`${stockDataAPI}/search/search_all_symbols`);
            searchSymbols = await symbolsPromise.json() as api.SearchStockSymbol;
            symbolsDocRef.set(searchSymbols);
        }
        // filter out only which start with same prefix
        const searchingSymbols = [
            searchSymbols.data.find(s => s === upperSymbol),  // stock with same name
            ...searchSymbols.data.filter(s => s !== upperSymbol && s.startsWith(upperSymbol)).slice(0, 4)
        ].filter(x => !!x); // filter out [undefined, X , X ]

        console.log('searchingSymbols', searchingSymbols)
        // get summaries for symbols
        const summaries = await Promise.all(searchingSymbols.map(x => queryStockSummary(x))) as api.Summary[];

        const notNullSummaries = summaries.filter(x => !!x);
        console.log('return symbols', notNullSummaries.map(x => x.symbol));

        console.timeEnd();
        console.log('----')
        return {summaries: notNullSummaries} as api.SearchStockSummaries;
    } catch (error) {
        throw new ApolloError(error);
    }
};

export const queryStockDailyInformation = async (): Promise<api.STStockDailyInformations> => {
    try {
        const dailyInfoDoc = await admin.firestore()
            .collection(api.ST_SHARED_ENUM.ST_STATIC_DATA)
            .doc(api.ST_SHARED_ENUM.ST_STOCK_DAILY_INFORMATION)
            .get();

        // const oneDayTimestamp = 1000/*ms*/ * 60/*s*/ * 60/*min*/ * 24/*h*/;
        const today = new Date();
        const dailyInfo = dailyInfoDoc.data() as api.STStockDailyInformations || createNewSTStockDailyInformations();
        let isUpdated = false;

        console.time(); // TODO DELETE
        // update suggestions
        if (!dailyInfo.dailySuggestonsLastUpdatedDate || new Date(dailyInfo.dailySuggestonsLastUpdatedDate).getDay() !== today.getDay()) {
            const randomSymbols = stRandomSlice(tmpSuggestionSymbols, 8);
            console.log('randomSymbols', randomSymbols) // TODO DELETE
            const randomSummaries = await Promise.all(randomSymbols.map(x => queryStockSummary(x)));
            const randomHistoricalData = await Promise.all(randomSymbols.map(x => getStockHistoricalClosedData(x, '1d')));

            const suggestions: api.STStockDailyInformationsData[] = randomSymbols.map(x => {
                const result: api.STStockDailyInformationsData = {
                    summary: randomSummaries.find(s => s.symbol === x),
                    historicalData: randomHistoricalData.find(s => s.symbol === x)
                };
                return result;
            });

            dailyInfo.dailySuggestions = suggestions;
            dailyInfo.dailySuggestonsLastUpdatedDate = getCurrentIOSDate();
            isUpdated = true;
        }

        // save updated data
        if (isUpdated) {
            await admin.firestore()
                .collection(api.ST_SHARED_ENUM.ST_STATIC_DATA)
                .doc(api.ST_SHARED_ENUM.ST_STOCK_DAILY_INFORMATION)
                .set(dailyInfo, {merge: true});
        }
        console.timeEnd(); // TODO DELETE
        console.log('----'); // TODO DELETE

        return dailyInfo;
    } catch (error) {
        throw new ApolloError(error);
    }
};


// ------------------------------------------------
// PRIVATE FUNCTIONS
const getAndSaveStockDetailsFromApi = async (symbol: string): Promise<api.StockDetails> => {
    const resolverPromise = await global.fetch(`${stockDataAPI}/fundamentals/all?symbol=${symbol}`);
    const response = await resolverPromise.json() as api.StockDetails;

    // no data has been found
    const isNull = !response.summary.symbol || !response.summary.marketPrice;

    // save details
    admin.firestore().collection(`${api.ST_STOCK_DATA_COLLECTION}`).doc(symbol).set({
        details: isNull ? null : response,
        detailsLastUpdate: getCurrentIOSDate(),
        summaryLastUpdate: getCurrentIOSDate(),
        newsLastUpdate: getCurrentIOSDate(),
    });

    if (isNull) {
        return null;
    }

    /*for (let i = 0; i < response.financialReports.length; i++) {
        admin.firestore()
            .collection(`${api.ST_STOCK_DATA_COLLECTION}`)
            .doc(symbol)
            .collection(api.ST_STOCK_DATA_COLLECTION_MORE_INFORMATION)
            .doc(api.ST_STOCK_DATA_DOCUMENT_FINACIAL_REPORTS)
            .set({
                reports: response.financialReports,
            });
    }
    delete response.financialReports;*/

    return response;
};
