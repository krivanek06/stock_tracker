
export interface TimelineChartDataWrapper {
  chartData: TimelineChartData;
}

export interface TimelineChartData {
  /*currentPercentReturn: number[];
  currentPrice: number[];
  currentTime: string[];
  currentVolumeInMillion: number[];
  totalReturn: number;
  livePriceDiff: number;*/
  livePrice: number;
  change: any[];
  price: any[];
  volume: any;
}


export interface ChartDataIdentification {
  symbol: string;
  name: string;
}

export interface PriceRangeData {
  priceRangeFirst: number;
  priceRangeLast: number;
}

