import { STMarketChartData } from './st-market.model';
export interface STMarketBonds {
    AAA: STMarketChartData;
    AA: STMarketChartData;
    A: STMarketChartData;
    BB: STMarketChartData;
    B: STMarketChartData;
    CCC: STMarketChartData;
    CorporateBondIndexYield: STMarketChartData;
    CorporateBondHighYieldIndexYield: STMarketChartData;
    CorporateBondHighYieldEmergingMarketIndexYield: STMarketChartData;
    CorporateBondEuroEmergingMarketIndexYield: STMarketChartData;
    timestamp: number[];
}