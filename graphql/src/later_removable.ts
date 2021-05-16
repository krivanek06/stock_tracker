/*import { tmpSuggestionSymbols } from './st-stocks/st-stock.model';
import { getStockHistoricalClosedData } from './st-stocks/st-stock.fetch';
import { queryStockSummary } from './st-stocks/st-stock.query';
import { getCurrentIOSDate } from './st-shared/st-shared.functions';
import * as admin from "firebase-admin";
import * as api from 'stock-tracker-common-interfaces';
import {stockDataAPI} from "./environment";

const SEARCH_ENDPOINT = `${stockDataAPI}/search`;*/
/*
export const updateStMarketTopTablesLocal = async (): Promise<api.STMarketDailyOverview> => {
    const dailyInfoDoc = await admin.firestore()
            .collection(api.ST_SHARED_ENUM.ST_COLLECTION)
            .doc(api.ST_SHARED_ENUM.MARKET_DAILY_OVERVIEW)
            .get();

    let dailyInfoData = dailyInfoDoc.data() as api.STMarketDailyOverview;

    const promises = await Promise.all([
        fetch(`${SEARCH_ENDPOINT}/news`),
        fetch(`${SEARCH_ENDPOINT}/calendar_events`),
        fetch(`${SEARCH_ENDPOINT}/top_crypto`),
        fetch(`${SEARCH_ENDPOINT}/stocks_day_gainers`),
        fetch(`${SEARCH_ENDPOINT}/stocks_day_losers`),
        fetch(`${SEARCH_ENDPOINT}/stocks_day_active`),
        fetch(`${SEARCH_ENDPOINT}/stocks_undervalued_growth_stocks`),
        fetch(`${SEARCH_ENDPOINT}/stocks_growth_technology_stocks`),
        fetch(`${SEARCH_ENDPOINT}/stocks_undervalued_large_caps`),
        fetch(`${SEARCH_ENDPOINT}/stocks_aggressive_small_caps`),
        fetch(`${SEARCH_ENDPOINT}/stocks_small_cap_gainers`),
        fetch(`${SEARCH_ENDPOINT}/calendar_events_earnings`),
    ]);

    const dataPromises = promises.map(async (p) => (await p.json()));

    // black magic
    const result: any = {};
    for await (const data of dataPromises) {
        // example, keys is : 'stocks_aggressive_small_caps'
        for (const [key, value] of Object.entries(data)) {
            if (key !== "status") {
                result[key] = value;
            }
        }
    }

    const randomSymbols = stRandomSlice(tmpSuggestionSymbols, 8);

    // copy external functions here
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
    const resultFromApi: api.STMarketDailyOverview = {...result};
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
    await admin.firestore().collection(api.ST_SHARED_ENUM.ST_COLLECTION).doc(api.ST_SHARED_ENUM.MARKET_DAILY_OVERVIEW).set(dailyInfoData, {merge: true});


    return result;
};
*/
/*
export const updateStMarketOverview = async(): Promise<void> => {
    const res = await fetch(`${SEARCH_ENDPOINT}/market_history_overview`);
    const data = await res.json() as api.STMarketHistoryOverview;

    data['lastUpdate'] = getCurrentIOSDate();

    admin.firestore().collection(api.ST_SHARED_ENUM.ST_COLLECTION).doc(api.ST_SHARED_ENUM.MARKET_HISTORY_OVERVIEW).set(data);
}
*/