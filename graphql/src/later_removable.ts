import * as api from 'stock-tracker-common-interfaces';
import {stockDataAPI} from "./environment";

const SEARCH_ENDPOINT = `${stockDataAPI}/search`;
const CHART_DATA_ENDPOINT = `${SEARCH_ENDPOINT}/chart_data`;

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


export const getStMarketAllCategoriesLocal = async (onlyMain: boolean = false): Promise<api.STMarketDatasetKeyCategories> => {
    const res = await fetch(`${SEARCH_ENDPOINT}/quandl_categories?onlyMain=${onlyMain}`);
    return res.json();
};

export const searchStMarketDataLocal = async (key: string): Promise<api.STMarketChartDataResultCombined> => {
    const res = await fetch(`${CHART_DATA_ENDPOINT}/quandl?documentKey=${key}`);
    return res.json();
};
