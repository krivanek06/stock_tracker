export interface TimelineChartDataWrapper {
  chartData: TimelineChartData;
}

export interface TimelineChartData {
  currentPercentReturn: number[];
  currentPrice: number[];
  currentTime: string[];
  currentVolumeInMillion: number[];
  totalReturn: number;
  livePrice: number;
  livePriceDiff: number;
}


export interface ChartDataIdentification {
  symbol: string;
  name: string;
}
