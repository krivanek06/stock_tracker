import * as admin from "firebase-admin";
import * as functions from 'firebase-functions';
import * as api from 'stock-tracker-common-interfaces';
import { stockDataAPI } from './../../environment';

const fetch = require('node-fetch');
const SEARCH_ENDPOINT = `${stockDataAPI}/search`;

export const updateMarketDailyOverview = functions.pubsub.topic('updateMarketDailyOverview').onPublish(async () => {
    console.log(`Started updating at ${admin.firestore.Timestamp.now().toDate()}`)
    const oldOverview = await getCurrentDataFromFirestore();
    console.log('Fetched old overview')

    const newOverview = await fetchDailyOverviewFromApi();
    console.log('Fetched new overview')
    const suggestions = await fetchSuggestions();
    console.log('Fetched suggestions')

    await updateMarketOverviewCollection(oldOverview, newOverview, suggestions);
    console.log(`Completed updating at ${admin.firestore.Timestamp.now().toDate()}`)
});


const getCurrentDataFromFirestore = async (): Promise<api.STMarketDailyOverview> => {
    const dailyInfoDoc = await admin.firestore()
    .collection(api.ST_SHARED_ENUM.ST_COLLECTION)
    .doc(api.ST_SHARED_ENUM.MARKET_DAILY_OVERVIEW)
    .get();

    return dailyInfoDoc.data() as api.STMarketDailyOverview;
}

const fetchDailyOverviewFromApi = async() :Promise<api.STMarketDailyOverview> => {
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

    // execute promises 
    const dataPromises = promises.map(async (p) => (await p.json()));

    // black magic - format array into object
    const result: any = {};
    for await (const data of dataPromises) {
        // example, keys is : 'stocks_aggressive_small_caps'
        for (const [key, value] of Object.entries(data)) {
            if (key !== "status") {
                result[key] = value;
            }
        }
    }

    return result as api.STMarketDailyOverview;
}

const fetchSuggestions = async(): Promise<api.STStockSuggestion[]> => {
    const randomDetailDocs = await admin.firestore()
                                .collection('stock_data')
                                .where('details.summary.id', '>=', '')
                                .orderBy('details.summary.id', 'desc')
                                .orderBy('summaryLastUpdate', 'desc')
                                .limit(8)
                                .get();

    const randomSummaries = randomDetailDocs.docs.map(d => d.data() as api.StockDetailsWrapper)
                                                .filter(d => !!d.details)
                                                .map(d => d.details.summary);

    const randomHistoricalData = await Promise.all(randomSummaries.map(summary => getStockHistoricalClosedData(summary.symbol, '1d')));

    const suggestions: api.STStockSuggestion[] = randomSummaries.map(summary => {
        const result: api.STStockSuggestion = {
            summary: summary,
            historicalData: randomHistoricalData.find(s => s.symbol === summary.symbol) as api.STStockHistoricalClosedDataWithPeriod
        };
        return result;
    });

    return suggestions;
}


const updateMarketOverviewCollection = async(oldOverview: api.STMarketDailyOverview, 
                                            newOverview: api.STMarketDailyOverview,
                                            suggestions:  api.STStockSuggestion[]): Promise<void> => {
    // may return empty array because cannot make too much request on yahoo finance
    const updatedDailyInfoData: api.STMarketDailyOverview = {
        news: newOverview.news.length > 0 ? newOverview.news : oldOverview.news,
        events: newOverview.events.length > 0 ? newOverview.events : oldOverview.events,
        earnings: newOverview.earnings.length > 0 ? newOverview.earnings : oldOverview.earnings,
        top_crypto: newOverview.top_crypto.length > 0 ? newOverview.top_crypto : oldOverview.top_crypto,
        stocks_undervalued_large_caps: newOverview.stocks_undervalued_large_caps.length > 0 ? newOverview.stocks_undervalued_large_caps : oldOverview.stocks_undervalued_large_caps,
        stocks_undervalued_growth_stocks: newOverview.stocks_undervalued_growth_stocks.length > 0 ? newOverview.stocks_undervalued_growth_stocks : oldOverview.stocks_undervalued_growth_stocks,
        stocks_growth_technology_stocks: newOverview.stocks_growth_technology_stocks.length > 0 ? newOverview.stocks_growth_technology_stocks : oldOverview.stocks_growth_technology_stocks,
        stocks_day_losers: newOverview.stocks_day_losers.length > 0 ? newOverview.stocks_day_losers : oldOverview.stocks_day_losers,
        stocks_day_gainers: newOverview.stocks_day_gainers.length > 0 ? newOverview.stocks_day_gainers : oldOverview.stocks_day_gainers,
        stocks_day_active: newOverview.stocks_day_active.length > 0 ? newOverview.stocks_day_active : oldOverview.stocks_day_active,
        stocks_aggressive_small_caps: newOverview.stocks_aggressive_small_caps.length > 0 ? newOverview.stocks_aggressive_small_caps : oldOverview.stocks_aggressive_small_caps,
        stocks_small_cap_gainers: newOverview.stocks_small_cap_gainers.length > 0 ? newOverview.stocks_small_cap_gainers : oldOverview.stocks_small_cap_gainers,
        stock_suggestions: suggestions,
        lastUpdate: admin.firestore.Timestamp.now().toDate().toISOString()
    };

    // save updated data
    await admin.firestore()
        .collection(api.ST_SHARED_ENUM.ST_COLLECTION)
        .doc(api.ST_SHARED_ENUM.MARKET_DAILY_OVERVIEW)
        .set(updatedDailyInfoData, {merge: true});
};


const getStockHistoricalClosedData = async (symbol: string, period: string): Promise<api.STStockHistoricalClosedDataWithPeriod> => {
    const dataPromise = await fetch(`${stockDataAPI}/chart_data/historical_data?symbol=${symbol}&period=${period}&onlyClosed=True`);
    const result =  await dataPromise.json();
    return result || {livePrice: 0, price: [], period, symbol};
};
