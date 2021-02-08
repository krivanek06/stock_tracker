export interface STMarketHistoryOverview {
  sp500?: STMarketChartDataResultAPI[];
  bonds?: STMarketChartDataResultAPI[];
  social_security?: STMarketChartDataResultAPI[];
  consumer_price_index_states?: STMarketChartDataResultAPI[];
  consumer_us_price_index?: STMarketChartDataResultAPI[];
  producer_us_price_index?: STMarketChartDataResultAPI[];
  inflation_rate?: STMarketChartDataResultAPI[];
  employment?: STMarketChartDataResultAPI[];
  manufacturing?: STMarketChartDataResultAPI[];
  exports?: STMarketChartDataResultAPI[];
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
  result: STMarketChartDataResultCombined[];
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
