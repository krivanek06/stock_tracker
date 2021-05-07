import { STSeries } from "./st-chart.model";

export interface STTradingStrategyData {
  interval: string;
  period: string;
  series: STSeries[];
  timestamp: number[];
}

export interface STTradingStrategySearch {
  data: STTradingStrategySearch[];
}

export interface STTradingStrategySearchData {
  description: string;
  name: string;
  symbol: string;
  url: string;
}
