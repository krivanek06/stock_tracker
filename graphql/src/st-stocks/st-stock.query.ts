import {stockDataAPI, IS_PRODUCTION} from '../environment';
import {ApolloError} from 'apollo-server';
import * as api from 'stock-tracker-common-interfaces';
import * as admin from "firebase-admin";
import * as moment from 'moment';
import {getCurrentIOSDate} from "../st-shared/st-shared.functions";

// check if details already exists in firestore, else fetch from api and save
export const queryStockDetails = async (symbol: string): Promise<api.StockDetails> => {
    try {
        const upperSymbol = symbol.toUpperCase();
        const stockDetailsDocs = await admin.firestore().collection(`${api.ST_STOCK_DATA_COLLECTION}`).doc(upperSymbol).get();
        const data = stockDetailsDocs.data() as api.StockDetailsWrapper | undefined;
        
        // first fetch or older than 7 days
        if(!data || (Math.abs(moment(data.detailsLastUpdate).diff(new Date(), 'days')) > 7 && IS_PRODUCTION)){
            console.log(`Query all stock details for symbol: ${upperSymbol}`)
            return await getAndSaveStockDetailsFromApi(upperSymbol);
        } 
        // fetch fresh news
        if(!!data.details && Math.abs(moment(data.newsLastUpdate).diff(new Date(), "hours")) > 8){
            console.log(`Query stock news for symbol: ${upperSymbol}`)
            const news = await getAndSaveStockNewsFromApi(upperSymbol, data);
            data.details.stockNews = news;
        }
        
        return data.details;
    } catch (error) {
        throw new ApolloError(error);
    }
}

export const queryStockSummary = async (symbol: string): Promise<api.Summary> => {
    try {
        const upperSymbol = symbol.toUpperCase();
        
        console.log(`Summary for ${symbol}`);

        const stockDetailsDocs = await admin.firestore().collection(`${api.ST_STOCK_DATA_COLLECTION}`).doc(upperSymbol).get();
        const wrapper = stockDetailsDocs.data() as api.StockDetailsWrapper | undefined;
        const details = !!wrapper ? wrapper.details : await queryStockDetails(upperSymbol);
        
        return details?.summary;
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

        console.log('symbolPrefix', symbolPrefix);
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
        const notNullSummaries = summaries.filter(x => !!x && !!x.symbol);

        console.log('return symbols', notNullSummaries.map(x => x.symbol));

        console.timeEnd();
        console.log('----')
        return {summaries: notNullSummaries} as api.SearchStockSummaries;
    } catch (error) {
        throw new ApolloError(error);
    }
};

export const queryMarketDailyOverview = async (): Promise<api.STMarketDailyOverview> => {
    try {
        const dailyInfoDoc = await admin.firestore()
            .collection(api.ST_SHARED_ENUM.ST_COLLECTION)
            .doc(api.ST_SHARED_ENUM.MARKET_DAILY_OVERVIEW)
            .get();

        const dailyInfoData = dailyInfoDoc.data() as api.STMarketDailyOverview;

        return dailyInfoData;
    } catch (error) {
        throw new ApolloError(error);
    }
};


export const queryStockLivePrice = async (symbol: string): Promise<api.STSymbolPrice> => {
    try{
        const upperSymbol = symbol.toUpperCase();
        const resolverPromise = await global.fetch(`${stockDataAPI}/chart_data/live_price?symbol=${upperSymbol}`);
        const response = await resolverPromise.json() as api.STSymbolPrice;
        return response;
    } catch (error) {
        throw new ApolloError(error);
    }
}

// ------------------------------------------------
// PRIVATE FUNCTIONS
const getAndSaveStockDetailsFromApi = async (symbol: string): Promise<api.StockDetails> => {
    const resolverPromise = await global.fetch(`${stockDataAPI}/fundamentals/all?symbol=${symbol}`);
    const response = await resolverPromise.json() as api.StockDetails;

    // no data has been found
    const isNull = !response || !response.summary;

    // save details
    admin.firestore().collection(`${api.ST_STOCK_DATA_COLLECTION}`).doc(symbol).set({
        details: isNull ? null : response,
        detailsLastUpdate: getCurrentIOSDate(),
        summaryLastUpdate: getCurrentIOSDate(),
        newsLastUpdate: getCurrentIOSDate(),
    });

    return isNull ? null : response;
};

const getAndSaveStockNewsFromApi = async (symbol: string, data: api.StockDetailsWrapper): Promise<api.NewsArticle[]> => {
    const resolverPromise = await global.fetch(`${stockDataAPI}/fundamentals/stock_news?symbol=${symbol}`);
    const response = (await resolverPromise.json())['data'] as api.NewsArticle[];

    // save details
    admin.firestore().collection(`${api.ST_STOCK_DATA_COLLECTION}`).doc(symbol).set({
        details: {
            ...data.details,
            stockNews: response
        },
        newsLastUpdate: getCurrentIOSDate(),
    }, {merge: true});

    return response;
}