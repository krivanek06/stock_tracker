
import { takeRight } from 'lodash';
import { STMarketChartData, STMarketChartDataResult } from '../model/st-market/st-market.model';

export const getOnlyPartialData = (marketData: STMarketChartData, dataNumber = 40): STMarketChartData => {
    const partialDataRes: STMarketChartData = {
        ...marketData,
        timestamp: takeRight(marketData.timestamp, dataNumber),
        result: marketData.result.map(res => {
            const data: STMarketChartDataResult = {
                ...res,
                data: takeRight(res.data, dataNumber)
            }
            return data;
        })
    }
    return partialDataRes;
}