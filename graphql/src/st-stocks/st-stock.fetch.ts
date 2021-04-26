import {stockDataAPI} from "../environment";
import * as api from "stock-tracker-common-interfaces";

export const getStockHistoricalClosedData = async (symbol: string, period: string): Promise<api.STStockHistoricalClosedDataWithPeriod> => {
    const dataPromise = await global.fetch(`${stockDataAPI}/chart_data/historical_data?symbol=${symbol}&period=${period}&onlyClosed=True`);
    return await dataPromise.json() || {livePrice: 0, price: [], period, symbol};
};
