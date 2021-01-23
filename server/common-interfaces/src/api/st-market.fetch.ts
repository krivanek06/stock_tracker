import { STMarketChartData } from '../model/st-market/st-market.model';
import { stockDataAPI } from './../../environments';
export class ST_MARKET_FETCH {
    static async FETCH_TREASURY_YIELD_CURVE_RATES(): Promise<STMarketChartData> {
        const dataPromise = await global.fetch(`${stockDataAPI}/chart_data/treasury_yield_curve_rates`);
        return dataPromise.json(); 
    }

    static async FETCH_INVESTOR_SENTIMENT(): Promise<STMarketChartData> {
        const dataPromise = await global.fetch(`${stockDataAPI}/chart_data/investor_sentiment`);
        return dataPromise.json(); 
    }

    static async FETCH_MISERY_INDEX(): Promise<STMarketChartData> {
        const dataPromise = await global.fetch(`${stockDataAPI}/chart_data/investor_sentiment`);
        return dataPromise.json(); 
    }
}