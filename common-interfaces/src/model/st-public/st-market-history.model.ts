export interface STMarketHistoryOverview {
  sp500?: STMarketChartDataResultAPI[];
  bonds?: STMarketChartDataResultAPI[];
  inflation_rate?: STMarketChartDataResultAPI[];
  misery_index?: STMarketChartDataResultAPI[];
  treasury_yield?: STMarketChartDataResultAPI[];
  investor_sentiment?: STMarketChartDataResultAPI[];
  bitcoin?: STMarketChartDataResultAPI[];
  lastUpdate?: string;
}

interface STMarketChartDataResultABS {
  currentDate: string;
  currentValue: number;
  documentKey: string;
  name: string;
  parentName: string;
  lastUpdate?: string;
}

export interface STMarketChartDataResultAPI extends STMarketChartDataResultABS {
  data: number[];
  timestamp: number[];
}

export interface STMarketChartDataResultCombined extends STMarketChartDataResultABS {
  data: number[][];
}

export interface STMarketChartDataResultSearch {
  result: STMarketChartDataResultAPI[];
}

export interface STMarketDatasetKeyCategories {
  categories: STMarketDatasetKeyCategory[];
}

export interface STMarketDatasetKeyCategory {
  data: STMarketDatasetKey[];
  name: string; // ex. S&P 500
  key: string; // ex sp500
}

export interface STMarketDatasetKey {
  documentKey: string; // ex. qundal_sp_500_dividend_growth_by_quarter_value
  name: string; // ex. S&P 500 - Dividend growth
}
