import {
  STMarketChartDataResultSearch,
  STMarketChartDataResultCombined,
  STMarketDailyOverview,
  STMarketHistoryOverview,
  STMarketChartDataResultContainer,
  STMarketDatasetKeyCategories,
} from "./../model/st-market.model";
import fetch from "node-fetch";
import { stockDataAPI } from "./../../environments";

const QUNDAL_ENDPOINT = `${stockDataAPI}/quandl`;
const SEARCH_ENDPOINT = `${stockDataAPI}/search`;

export const getStMarketTopTables = async (): Promise<STMarketDailyOverview> => {
  // TODO refactor into Promise.all()
  const p1 = await fetch(`${SEARCH_ENDPOINT}/news`);
  const p2 = await fetch(`${SEARCH_ENDPOINT}/calendar_events`);
  const p3 = await fetch(`${SEARCH_ENDPOINT}/top_crypto`);
  const p4 = await fetch(`${SEARCH_ENDPOINT}/stocks_day_gainers`);
  const p5 = await fetch(`${SEARCH_ENDPOINT}/stocks_day_losers`);
  const p6 = await fetch(`${SEARCH_ENDPOINT}/stocks_day_active`);
  const p7 = await fetch(`${SEARCH_ENDPOINT}/stocks_undervalued_growth_stocks`);
  const p8 = await fetch(`${SEARCH_ENDPOINT}/stocks_growth_technology_stocks`);
  const p9 = await fetch(`${SEARCH_ENDPOINT}/stocks_undervalued_large_caps`);
  const p10 = await fetch(`${SEARCH_ENDPOINT}/stocks_aggressive_small_caps`);
  const p11 = await fetch(`${SEARCH_ENDPOINT}/stocks_small_cap_gainers`);

  const promises = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11];
  const dataPromises = promises.map(async (p) => await p.json());

  // black magic
  const result: any = {};
  for await (const data of dataPromises) {
    // example, keys is : 'stocks_aggressive_small_caps'
    for (const [key, value] of Object.entries(data)) {
        if(key !== 'status'){
            result[key] = value;
        }
      }
    
  }
  return result;
};

export const getStMarketOverview = async (): Promise<STMarketHistoryOverview> => {
  // TODO try this on production build, when WSGI will be used
  // FLASK cannot handle concurent requests
  /*const social_security = fetch(`${QUNDAL_ENDPOINT}/social_security`);
    const investor_sentiment = fetch(`${QUNDAL_ENDPOINT}/investor_sentiment`);
    const employment = fetch(`${QUNDAL_ENDPOINT}/employment`);
    const exports = fetch(`${QUNDAL_ENDPOINT}/exports`);
    const manufacturing = fetch(`${QUNDAL_ENDPOINT}/manufacturing`);
    const sp500 = fetch(`${QUNDAL_ENDPOINT}/sp500`);
    const inflation_rate = fetch(`${QUNDAL_ENDPOINT}/inflation_rate`);
    const consumer_price_index_states = fetch(`${QUNDAL_ENDPOINT}/consumer_price_index_states`);
    const consumer_us_price_index = fetch(`${QUNDAL_ENDPOINT}/consumer_us_price_index`);
    const producer_us_price_index = fetch(`${QUNDAL_ENDPOINT}/producer_us_price_index`);
    const misery_index = fetch(`${QUNDAL_ENDPOINT}/misery_index`);
    const treasury_yield = fetch(`${QUNDAL_ENDPOINT}/treasury_yield`);
    const bonds = fetch(`${QUNDAL_ENDPOINT}/bonds`);
    const bitcoin = fetch(`${QUNDAL_ENDPOINT}/bitcoin`);

    const promises = await Promise.all([investor_sentiment, social_security, employment, exports,
        manufacturing, sp500, inflation_rate, consumer_price_index_states, consumer_us_price_index,
        producer_us_price_index, misery_index, treasury_yield, bonds, bitcoin]);

    const dataPromises = promises.map(async p => await p.json() as STMarketChartDataResultContainer);*/

  // TODO delete later, uncomment above
  const social_security = await fetch(`${QUNDAL_ENDPOINT}/social_security`);
  const investor_sentiment = await fetch(`${QUNDAL_ENDPOINT}/investor_sentiment`);
  const employment = await fetch(`${QUNDAL_ENDPOINT}/employment`);
  const exports = await fetch(`${QUNDAL_ENDPOINT}/exports`);
  const manufacturing = await fetch(`${QUNDAL_ENDPOINT}/manufacturing`);
  const sp500 = await fetch(`${QUNDAL_ENDPOINT}/sp500`);
  const inflation_rate = await fetch(`${QUNDAL_ENDPOINT}/inflation_rate`);
  const consumer_price_index_states = await fetch( `${QUNDAL_ENDPOINT}/consumer_price_index_states`);
  const consumer_us_price_index = await fetch( `${QUNDAL_ENDPOINT}/consumer_us_price_index` );
  const producer_us_price_index = await fetch(`${QUNDAL_ENDPOINT}/producer_us_price_index` );
  const misery_index = await fetch(`${QUNDAL_ENDPOINT}/misery_index`);
  const treasury_yield = await fetch(`${QUNDAL_ENDPOINT}/treasury_yield`);
  const bonds = await fetch(`${QUNDAL_ENDPOINT}/bonds`);
  const bitcoin = await fetch(`${QUNDAL_ENDPOINT}/bitcoin`);

  const promises = [
    investor_sentiment,
    social_security,
    employment,
    exports,
    manufacturing,
    sp500,
    inflation_rate,
    consumer_price_index_states,
    consumer_us_price_index,
    producer_us_price_index,
    misery_index,
    treasury_yield,
    bonds,
    bitcoin
  ];

  const dataPromises = promises.map(
    async (p) => (await p.json()) as STMarketChartDataResultContainer
  );

  // black magic
  const result: any = {};
  for await (const data of dataPromises) {
    result[data.keyName] = data;
  }

  return result;
};

export const getStMarketAllCategories = async (): Promise<STMarketDatasetKeyCategories> => {
  const res = await fetch(`${QUNDAL_ENDPOINT}/categories`);
  return res.json();
};

export const searchMultilpleStMarketData = async (
  key: string
): Promise<STMarketChartDataResultSearch> => {
  const res = await fetch(`${QUNDAL_ENDPOINT}/search?quandlKey=${key}`);
  return res.json();
};

export const searchStMarketData = async (
  key: string
): Promise<STMarketChartDataResultCombined> => {
  const res = await fetch(`${QUNDAL_ENDPOINT}/search?quandlKey=${key}`);
  return res.json();
};
