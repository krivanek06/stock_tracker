import {stockDataAPI, IS_PRODUCTION} from '../environment';
import {ApolloError} from 'apollo-server';
import * as api from 'stock-tracker-common-interfaces';
import * as admin from "firebase-admin";
import * as moment from 'moment';
import {getCurrentIOSDate, stRandomSlice} from "../st-shared/st-shared.functions";
import {tmpSuggestionSymbols} from "./st-stock.model";
import {getStockHistoricalClosedData} from "./st-stock.fetch";
import {getStMarketTopTablesLocal} from "../later_removable";


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
        const details = await queryStockDetails(upperSymbol);
        console.log(`Summary for ${symbol}`);
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

        // const oneDayTimestamp = 1000/*ms*/ * 60/*s*/ * 60/*min*/ * 24/*h*/;
        const today = new Date();
        let dailyInfoData = await dailyInfoDoc.data() as api.STMarketDailyOverview;

        console.time(); // TODO DELETE

        // update suggestions
        if (!dailyInfoData) { //  || new Date(dailyInfoData.lastUpdate).getDay() !== today.getDay()
            const randomSymbols = stRandomSlice(tmpSuggestionSymbols, 8);

            const randomSummaries = await Promise.all(randomSymbols.map(x => queryStockSummary(x)));
            const randomHistoricalData = await Promise.all(randomSymbols.map(x => getStockHistoricalClosedData(x, '1d')));

            const suggestions: api.STStockSuggestion[] = randomSymbols.map(x => {
                const result: api.STStockSuggestion = {
                    summary: randomSummaries.find(s => s.symbol === x),
                    historicalData: randomHistoricalData.find(s => s.symbol === x)
                };
                return result;
            });

            // may return empty array because cannot make too much request on yahoo finance
            const resultFromApi = await getStMarketTopTablesLocal();
            dailyInfoData = {
                news: resultFromApi.news.length > 0 ? resultFromApi.news : dailyInfoData.news,
                events: resultFromApi.events.length > 0 ? resultFromApi.events : dailyInfoData.events,
                earnings: resultFromApi.earnings.length > 0 ? resultFromApi.earnings : dailyInfoData.earnings,
                top_crypto: resultFromApi.top_crypto.length > 0 ? resultFromApi.top_crypto : dailyInfoData.top_crypto,
                stocks_undervalued_large_caps: resultFromApi.stocks_undervalued_large_caps.length > 0 ? resultFromApi.stocks_undervalued_large_caps : dailyInfoData.stocks_undervalued_large_caps,
                stocks_undervalued_growth_stocks: resultFromApi.stocks_undervalued_growth_stocks.length > 0 ? resultFromApi.stocks_undervalued_growth_stocks : dailyInfoData.stocks_undervalued_growth_stocks,
                stocks_growth_technology_stocks: resultFromApi.stocks_growth_technology_stocks.length > 0 ? resultFromApi.stocks_growth_technology_stocks : dailyInfoData.stocks_growth_technology_stocks,
                stocks_day_losers: resultFromApi.stocks_day_losers.length > 0 ? resultFromApi.stocks_day_losers : dailyInfoData.stocks_day_losers,
                stocks_day_gainers: resultFromApi.stocks_day_gainers.length > 0 ? resultFromApi.stocks_day_gainers : dailyInfoData.stocks_day_gainers,
                stocks_day_active: resultFromApi.stocks_day_active.length > 0 ? resultFromApi.stocks_day_active : dailyInfoData.stocks_day_active,
                stocks_aggressive_small_caps: resultFromApi.stocks_aggressive_small_caps.length > 0 ? resultFromApi.stocks_aggressive_small_caps : dailyInfoData.stocks_aggressive_small_caps,
                stocks_small_cap_gainers: resultFromApi.stocks_small_cap_gainers.length > 0 ? resultFromApi.stocks_small_cap_gainers : dailyInfoData.stocks_small_cap_gainers,
                stock_suggestions: suggestions,
                lastUpdate: getCurrentIOSDate()
            };

            // save updated data
            await admin.firestore()
                .collection(api.ST_SHARED_ENUM.ST_COLLECTION)
                .doc(api.ST_SHARED_ENUM.MARKET_DAILY_OVERVIEW)
                .set(dailyInfoData, {merge: true});
        }

        console.timeEnd(); // TODO DELETE

        return dailyInfoData;
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