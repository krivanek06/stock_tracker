import { getOnlyPartialData } from './../functions/st-market.funcion';
import { STMarketSP500AllCategory } from '../model/st-market/st-sp500.model';
import { stockDataAPI } from './../../environments';
import { takeRight } from 'lodash';

export class ST_MARKET_FETCH_SP500_FETCH {
    private static API = `${stockDataAPI}/chart_data/sp500_statistics`;
    static async FETCH_DATA_FROM_ALL_CATEGORY(): Promise<STMarketSP500AllCategory> {
        const dataPromise = await global.fetch(`${this.API}/dataFromAllCategory`);
        return dataPromise.json(); 
    }

    static MODIFY_DATA_FROM_ALL_CATEGORY_PARTIAL(data:STMarketSP500AllCategory, dataNumber = 30): STMarketSP500AllCategory {
        const result: STMarketSP500AllCategory = {
            bookValue: getOnlyPartialData(data.bookValue, dataNumber),
            dividendGrowth: getOnlyPartialData(data.dividendGrowth, dataNumber),
            dividendYield: getOnlyPartialData(data.dividendYield, dataNumber),
            dividends: getOnlyPartialData(data.dividends, dataNumber),
            earnings: getOnlyPartialData(data.earnings, dataNumber),
            earningsGrowth: getOnlyPartialData(data.earningsGrowth, dataNumber),
            earningsYield: getOnlyPartialData(data.earningsYield, dataNumber),
            peRatio: getOnlyPartialData(data.peRatio, dataNumber),
            priceToBook: getOnlyPartialData(data.priceToBook, dataNumber),
            priceToSale: getOnlyPartialData(data.priceToSale, dataNumber),
            sales: getOnlyPartialData(data.sales, dataNumber),
            salesGrowth: getOnlyPartialData(data.salesGrowth, dataNumber),
            shillerPE: getOnlyPartialData(data.shillerPE, dataNumber),
            timestamp: takeRight(data.timestamp, dataNumber)
        }

        return result;
    }
}