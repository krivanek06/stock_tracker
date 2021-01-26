import { ST_MARKET_FIREBASE_DOCUMENTS_CHART_DATA_ENUM } from './../model/st-market/st-market.model';
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


export const getSTMarketChartDataAPIFromDocumentEnum = (data: ST_MARKET_FIREBASE_DOCUMENTS_CHART_DATA_ENUM): string => {
    switch(data){
        case ST_MARKET_FIREBASE_DOCUMENTS_CHART_DATA_ENUM.market_investor_sentiment_data:
            return 'investor_sentiment'
        case ST_MARKET_FIREBASE_DOCUMENTS_CHART_DATA_ENUM.market_trasury_yield_curve_rates_data:
            return 'treasury_yield_curve_rates'
        default:
            return '';
    }
}

