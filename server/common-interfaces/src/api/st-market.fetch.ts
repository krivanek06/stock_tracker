import fetch from "node-fetch";
import { stockDataAPI } from "./../../environments";
import {
  STMarketDailyOverview,
  STMarketDatasetKeyCategories,
  STMarketChartDataResultCombined,
} from "../model/st-market/index";

const SEARCH_ENDPOINT = `${stockDataAPI}/search`;
const QUNDAL_ENDPOINT = `${SEARCH_ENDPOINT}/quandl`;

export const getStMarketTopTables = async (): Promise<STMarketDailyOverview> => {
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


export const getStMarketAllCategories = async (onlyMain: boolean = false): Promise<STMarketDatasetKeyCategories> => {
  const res = await fetch(`${QUNDAL_ENDPOINT}/categories?onlyMain=${onlyMain}`);
  return res.json();
};

export const searchStMarketData = async (key: string): Promise<STMarketChartDataResultCombined> => {
  const res = await fetch(`${QUNDAL_ENDPOINT}?documentKey=${key}`);
  return res.json();
};
