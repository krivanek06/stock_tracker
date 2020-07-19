
export interface TimelineChartDataWrapper {
  chartData: TimelineChartData;
}

export interface TimelineChartData {
  livePrice: number;
  change: any[];
  price: any[];
  volume: any[];
}


export interface ChartDataIdentification {
  symbol: string;
  name: string;
}

export interface PriceRangeData {
  priceRangeFirst: number;
  priceRangeLast: number;
}

