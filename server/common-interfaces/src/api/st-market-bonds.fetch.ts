import { takeRight } from 'lodash';
import { getOnlyPartialData } from './../functions/st-market.funcion';
import { STMarketBonds } from './../model/st-market/st-bonds.model';
import { stockDataAPI } from './../../environments';

export class ST_MARKET_FETCH_BONDS_FETCH {
    private static API = `${stockDataAPI}/chart_data/bond`;
    static async FETCH_DATA_FROM_ALL_CATEGORY(): Promise<STMarketBonds> {
        const dataPromise = await global.fetch(`${this.API}/dataFromAllCategory`);
        return dataPromise.json(); 
    }

    static MODIFY_DATA_FROM_ALL_CATEGORY_PARTIAL(data:STMarketBonds, dataNumber = 30): STMarketBonds {
        const result: STMarketBonds = {
            A: getOnlyPartialData(data.A, dataNumber),
            AA: getOnlyPartialData(data.AA, dataNumber),
            AAA: getOnlyPartialData(data.AAA, dataNumber),
            B: getOnlyPartialData(data.B, dataNumber),
            BB: getOnlyPartialData(data.BB, dataNumber),
            CCC: getOnlyPartialData(data.CCC, dataNumber),
            CorporateBondEuroEmergingMarketIndexYield: getOnlyPartialData(data.CorporateBondEuroEmergingMarketIndexYield, dataNumber),
            CorporateBondHighYieldEmergingMarketIndexYield: getOnlyPartialData(data.CorporateBondHighYieldEmergingMarketIndexYield, dataNumber),
            CorporateBondHighYieldIndexYield: getOnlyPartialData(data.CorporateBondHighYieldIndexYield, dataNumber),
            CorporateBondIndexYield: getOnlyPartialData(data.CorporateBondIndexYield, dataNumber),
            timestamp: takeRight(data.timestamp, dataNumber)
        }

        return result
    }
}