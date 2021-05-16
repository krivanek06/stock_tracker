import { getCurrentIOSDate } from './st-shared/st-shared.functions';
import * as admin from "firebase-admin";
import * as api from 'stock-tracker-common-interfaces';
import {stockDataAPI} from "./environment";

const SEARCH_ENDPOINT = `${stockDataAPI}/search`;
const CHART_DATA_ENDPOINT = `${stockDataAPI}/chart_data`;

export const getStMarketTopTablesLocal = async (): Promise<api.STMarketDailyOverview> => {
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
    return result;
};


export const updateStMarketOverview = async(): Promise<void> => {
    const res = await fetch(`${SEARCH_ENDPOINT}/market_history_overview`);
    const data = await res.json() as api.STMarketHistoryOverview;

    data['lastUpdate'] = getCurrentIOSDate();

    admin.firestore().collection(api.ST_SHARED_ENUM.ST_COLLECTION).doc(api.ST_SHARED_ENUM.MARKET_HISTORY_OVERVIEW).set(data);
}
/*
export const searchStMarketDataLocal = async (key: string): Promise<api.STMarketChartDataResultCombined> => {
    const resPromise = await fetch(`${CHART_DATA_ENDPOINT}/quandl?documentKey=${key}`);
    const res = await resPromise.json() as api.STMarketChartDataResultSearch;

    return res.result.find(r => r.documentKey === key);
};

export const searchStMarketDatas = async (key: string): Promise<api.STMarketChartDataResultCombined[]> => {
    const resPromise = await fetch(`${CHART_DATA_ENDPOINT}/quandl?documentKey=${key}`);
    const res = await resPromise.json() as api.STMarketChartDataResultSearch;

    return res.result;
};*/