import { LodashFuntions } from './../util/lodash.functions';
import { financialModelingAPI, financialModelingAPIKey } from "../environment";
import { URLSearchParams } from "url";
import * as api from 'stock-tracker-common-interfaces';
import * as moment from 'moment';

const fetch = require("node-fetch");

// example: https://financialmodelingprep.com/api/v3/historical-chart/5min/AAPL?apikey=795742ba1ec2f519ffa9ea50967d2240
export const getHistoricalPricesAPI = async(symbol: string, timeInterval: string): Promise<api.STFMHistoricalPrices[]> => {
    try{
        if (!['1min', '5min', '15min', '30min', '1hour', '4hour'].includes(timeInterval)){
            return new Promise([] as any);
        }
        const promise = await fetch(`${financialModelingAPI}/api/v3/historical-chart/${timeInterval}/${symbol}?apikey=${financialModelingAPIKey}`);
        const respose = await promise.json() as api.STFMHistoricalPrices[];
        return respose.reverse();
    } catch {
        return [];
    }
}

// example: https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?from=2018-03-12&to=2019-03-12&apikey=795742ba1ec2f519ffa9ea50967d2240
export const getHistoricalDailyPricesAPI = async(symbol: string, timeInterval: string): Promise<api.STFMHistoricalDailyPrices[]> => {
    try{
        if (!['1y', '5y', 'all'].includes(timeInterval)){
            return new Promise([] as any);
        }

        const startTimeInterval = (timeInterval === 'all' ? '100y' : timeInterval).slice(0, -1); // remove 'y'

        const today = moment().format('YYYY-MM-DD');
        const start = moment().subtract(Number(startTimeInterval), 'years').format('YYYY-MM-DD');

        const promise = await fetch(`${financialModelingAPI}/api/v3/historical-price-full/${symbol}?from=${start}&to=${today}&apikey=${financialModelingAPIKey}`);
        const respose = await promise.json() 
        const result = respose['historical'] as api.STFMHistoricalDailyPrices[];
        return result.reverse();
    } catch {
        return [];
    }
}

export const getLivePriceAPI = async(symbol: string): Promise<api.STFMLivePrice> => {
    try{
        const promise = await fetch(`${financialModelingAPI}/api/v3/quote-short/${symbol}?apikey=${financialModelingAPIKey}`);
        const respose = await promise.json() as api.STFMLivePrice[];
        return respose[0];
    } catch {
        return null as any;
    }
}

export const getCompanyQuoteBatch = async(symbols: string[] = []): Promise<api.STFMCompanyQuote[]> => {
    try{
        if(symbols.length === 0 || symbols.length > 25){
            return [];
        }
        
        const promise = await fetch(`${financialModelingAPI}/api/v3/quote/${symbols.join(',')}?apikey=${financialModelingAPIKey}`);
        const respose = await promise.json() as api.STFMCompanyQuote[];

        respose.forEach(company => company.image = `https://financialmodelingprep.com/image-stock/${company.symbol}.png`);
        
        return respose;
    } catch {
        return [];
    }
}


export const getMostActiveStocks = async(): Promise<api.STFMTopStocks[]> => {
    try{
        const promise = await fetch(`${financialModelingAPI}/api/v3/actives?apikey=${financialModelingAPIKey}`);
        const respose = await promise.json() as api.STFMTopStocks[];
        return respose;
    } catch {
        return [];
    }
}

export const getTopGainersStocks = async(): Promise<api.STFMTopStocks[]> => {
    try{
        const promise = await fetch(`${financialModelingAPI}/api/v3/gainers?apikey=${financialModelingAPIKey}`);
        const respose = await promise.json() as api.STFMTopStocks[];
        return respose;
    } catch {
        return [];
    }
}


export const getTopLosersStocks = async(): Promise<api.STFMTopStocks[]> => {
    try{
        const promise = await fetch(`${financialModelingAPI}/api/v3/losers?apikey=${financialModelingAPIKey}`);
        const respose = await promise.json() as api.STFMTopStocks[];
        return respose;
    } catch {
        return [];
    }
}


export const getNews = async(): Promise<api.STFMStockNew[]> => {
    try{
        const promise = await fetch(`${financialModelingAPI}/api/v3/stock_news?limit=50&apikey=${financialModelingAPIKey}`);
        const respose = await promise.json() as api.STFMStockNew[];
        return respose;
    } catch {
        return [];
    }
}

export const getExchangeSectorPE = async(exchange: string = 'NYSE'): Promise<api.STFMExchangeSectorPE[]> => {
    try{
        const today = moment().format('YYYY-MM-DD');
        const promise = await fetch(`${financialModelingAPI}/api/v4/sector_price_earning_ratio?date=${today}&exchange=${exchange}&apikey=${financialModelingAPIKey}`);
        const respose = await promise.json() as api.STFMExchangeSectorPE[];
        return respose;
    } catch {
        return [];
    }
}

export const getExchangeIndustryPE = async(exchange: string = 'NYSE'): Promise<api.STFMExchangeIndustryPE[]> => {
    try{
        const today = moment().format('YYYY-MM-DD');
        const promise = await fetch(`${financialModelingAPI}/api/v4/industry_price_earning_ratio?date=${today}&exchange=${exchange}&apikey=${financialModelingAPIKey}`);
        const respose = await promise.json() as api.STFMExchangeIndustryPE[];
        return respose;
    } catch {
        return [];
    }
}

export const getCommodity = async(): Promise<api.STFMCompanyQuote[]> => {
    try{
        const promise = await fetch(`${financialModelingAPI}/api/v3/quotes/commodity?apikey=${financialModelingAPIKey}`);
        const respose = await promise.json() as api.STFMCompanyQuote[];
        return respose;
    } catch {
        return [];
    }
}

export const getEtf = async(): Promise<api.STFMCompanyQuote[]> => {
    try{
        const promise = await fetch(`${financialModelingAPI}/api/v3/quotes/etf?apikey=${financialModelingAPIKey}`);
        const respose = await promise.json() as api.STFMCompanyQuote[];
        return respose;
    } catch {
        return [];
    }
}

export const getMutualFund = async(): Promise<api.STFMCompanyQuote[]> => {
    try{
        const promise = await fetch(`${financialModelingAPI}/api/v3/quotes/mutual_fund?apikey=${financialModelingAPIKey}`);
        const respose = await promise.json() as api.STFMCompanyQuote[];
        return respose;
    } catch {
        return [];
    }
}

export const getCalendarEarnings = async(): Promise<api.STFMCalendarEarnings[]> => {
    try{
        const promise = await fetch(`${financialModelingAPI}/api/v3/earning_calendar?apikey=${financialModelingAPIKey}`);
        const respose = await promise.json() as api.STFMCalendarEarnings[];
        return respose;
    } catch {
        return [];
    }
}

export const getCalendarIpo = async(): Promise<api.STFMCalendarIpo[]> => {
    try{
        const promise = await fetch(`${financialModelingAPI}/api/v3/ipo_calendar?apikey=${financialModelingAPIKey}`);
        const respose = await promise.json() as api.STFMCalendarIpo[];
        return respose;
    } catch {
        return [];
    }
}

export const getCalendarSplit = async(startDate: string = ''): Promise<api.STFMSplitHistory[]> => {
    try{
        const today = moment().format('YYYY-MM-DD');
        const start = startDate || moment().subtract(1, 'years').format('YYYY-MM-DD');

        const promise = await fetch(`${financialModelingAPI}/api/v3/stock_split_calendar?from=${start}&to=${today}apikey=${financialModelingAPIKey}`);
        const respose = await promise.json() as api.STFMSplitHistory[];
        return respose;
    } catch {
        return [];
    }
}

export const getCalendarDividend = async(): Promise<api.STFMStockDividend[]> => {
    try{
        const promise = await fetch(`${financialModelingAPI}/api/v3/stock_dividend_calendar?apikey=${financialModelingAPIKey}`);
        const respose = await promise.json() as api.STFMStockDividend[];
        return respose;
    } catch {
        return [];
    }
}

export const getCalendarEconomic = async(): Promise<api.STFMCalendarEconomic[]> => {
    try{
        const today = moment().format('YYYY-MM-DD');
        const start = moment().subtract(1, 'weeks').format('YYYY-MM-DD');

        const promise = await fetch(`${financialModelingAPI}/api/v3/economic_calendar?from=${start}&to=${today}&apikey=${financialModelingAPIKey}`);
        const respose = await promise.json() as api.STFMCalendarEconomic[];
        return respose;
    } catch {
        return [];
    }
}

export const getEtfHolders = async(etfSymbol: string): Promise<api.STFMEtfHolder[]> => {
    try{
        const promise = await fetch(`${financialModelingAPI}/api/v3/etf-holder/${etfSymbol}?apikey=${financialModelingAPIKey}`);
        const respose = await promise.json() as api.STFMEtfHolder[];
        return respose;
    } catch {
        return [];
    }
}

export const getEtfSectorWeight = async(etfSymbol: string): Promise<api.STFMEtfSectorWeight[]> => {
    try{
        const promise = await fetch(`${financialModelingAPI}/api/v3/etf-sector-weightings/${etfSymbol}?apikey=${financialModelingAPIKey}`);
        const respose = await promise.json() as api.STFMEtfSectorWeight[];
        return respose;
    } catch {
        return [];
    }
}

export const getEtfCountryWeight = async(etfSymbol: string): Promise<api.STFMEtfCountryWeight[]> => {
    try{
        const promise = await fetch(`${financialModelingAPI}/api/v3/etf-country-weightings/${etfSymbol}?apikey=${financialModelingAPIKey}`);
        const respose = await promise.json() as api.STFMEtfCountryWeight[];
        return respose;
    } catch {
        return [];
    }
}

export const getSectorPerformance = async(): Promise<api.STFMSectorPerformance[]> => {
    try{
        const promise = await fetch(`${financialModelingAPI}/api/v3/sectors-performance?apikey=${financialModelingAPIKey}`);
        const respose = await promise.json() as api.STFMSectorPerformance[];
        return respose;
    } catch {
        return [];
    }
}

export const stockScreenerAPI = async (stockScreener: api.STFMStockScreener): Promise<api.STFMStockScreenerResult[]> => {
    try{
        const urlParams = new URLSearchParams(Object.entries(stockScreener));
        const promise = await fetch(`${financialModelingAPI}/api/v3/stock-screener?${urlParams}&apikey=${financialModelingAPIKey}`);
        const respose = await promise.json() as api.STFMStockScreenerResult[];
        return respose;
    } catch {
        return [];
    }
}


export const queryStockScreener = async (stockScreenerInput: api.STFMStockScreener): Promise<api.STFMStockScreenerResult[]> => {
    try {
        const stockScreeners =  await stockScreenerAPI(stockScreenerInput);

        // load additional data
        const symbols = LodashFuntions.createChunks(stockScreeners.map(data => data.symbol), 20) as string[][];
        const companyQuotesPromises = LodashFuntions.flattenArray(await Promise.all([...symbols.map(d => getCompanyQuoteBatch(d))]));
        const stockScreenersWithCompanYQuotes = stockScreeners.map(screener => {
            return {...screener, companyQuote: companyQuotesPromises.find(d => d.symbol === screener.symbol) || null} as api.STFMStockScreenerResult
        });

        return stockScreenersWithCompanYQuotes;
    } catch (error) {
        return [];
    }
}