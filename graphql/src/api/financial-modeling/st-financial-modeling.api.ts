
import { financialModelingAPI, financialModelingAPIKey } from "../../environment";
import * as api from 'stock-tracker-common-interfaces';
import * as moment from 'moment';



// example: https://financialmodelingprep.com/api/v3/historical-chart/5min/AAPL?apikey=795742ba1ec2f519ffa9ea50967d2240
export const getHistoricalPricesAPI = async(symbol: string, timeInterval: string): Promise<api.STFMHistoricalPrices[]> => {
    try{
        if (!['1min', '5min', '15min', '30min', '1hour', '4hour'].includes(timeInterval)){
            return new Promise([] as any);
        }
        const promise = await global.fetch(`${financialModelingAPI}/api/v3/historical-chart/${timeInterval}/${symbol}?apikey=${financialModelingAPIKey}`);
        const respose = await promise.json() as api.STFMHistoricalPrices[];
        return respose;
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

        timeInterval = timeInterval === 'all' ? '100y' : timeInterval;
        timeInterval = timeInterval.slice(0, -1); // remove 'y'

        const today = moment().format('YYYY-MM-DD');
        const start = moment().subtract(Number(timeInterval), 'years').format('YYYY-MM-DD');

        const promise = await global.fetch(`${financialModelingAPI}/api/v3/historical-price-full/${symbol}?from=${start}&to=${today}&apikey=${financialModelingAPIKey}`);
        const respose = await promise.json() 
        const result = respose['historical'] as api.STFMHistoricalDailyPrices[];
        return result;
    } catch {
        return [];
    }
}

export const getLivePriceAPI = async(symbol: string): Promise<api.STFMLivePrice> => {
    try{
        const promise = await global.fetch(`${financialModelingAPI}/api/v3/quote-short/${symbol}?apikey=${financialModelingAPIKey}`);
        const respose = await promise.json() as api.STFMLivePrice[];
        return respose[0];
    } catch {
        return null;
    }
}