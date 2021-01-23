import { takeRight } from 'lodash';
import { getOnlyPartialData } from './../functions/st-market.funcion';
import { STMarketExports } from './../model/st-market/st-exports.model';
import { stockDataAPI } from './../../environments';

export class ST_MARKET_IMPORT_EXPORT_FETCH {
    private static API = `${stockDataAPI}/chart_data/import_export`;
    static async FETCH_DATA_FROM_ALL_EXPORTS(): Promise<STMarketExports> {
        const dataPromise = await global.fetch(`${this.API}/dataFromAllExports`);
        return dataPromise.json(); 
    }

    static MODIFY_DATA_FROM_ALL_EXPORTS_PARTIAL(data:STMarketExports, dataNumber = 30): STMarketExports {
        const result: STMarketExports = {
            asia: getOnlyPartialData(data.asia, dataNumber),
            canada: getOnlyPartialData(data.canada, dataNumber),
            china: getOnlyPartialData(data.china, dataNumber),
            europe: getOnlyPartialData(data.europe, dataNumber),
            europeanUnion: getOnlyPartialData(data.europeanUnion, dataNumber),
            france: getOnlyPartialData(data.france, dataNumber),
            germany: getOnlyPartialData(data.germany, dataNumber),
            japan: getOnlyPartialData(data.japan, dataNumber),
            latinAmerica: getOnlyPartialData(data.latinAmerica, dataNumber),
            unitedkingdom: getOnlyPartialData(data.unitedkingdom, dataNumber),
            timestamp: takeRight(data.timestamp, dataNumber)
        }

        return result;
    }
}