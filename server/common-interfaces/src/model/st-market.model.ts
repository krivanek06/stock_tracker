
export interface STMarketOverviewPartialData {
    sp500: STMarketChartDataResultContainer;
    bonds: STMarketChartDataResultContainer;
    social_security: STMarketChartDataResultContainer;
    consumer_price_index_states: STMarketChartDataResultContainer;
    consumer_us_price_index: STMarketChartDataResultContainer;
    producer_us_price_index: STMarketChartDataResultContainer;
    inflation_rate: STMarketChartDataResultContainer;
    employment: STMarketChartDataResultContainer;
    manufacturing: STMarketChartDataResultContainer;
    exports: STMarketChartDataResultContainer;
    misery_index: STMarketChartDataResultContainer;
    treasury_yield: STMarketChartDataResultContainer;
    investor_sentiment: STMarketChartDataResultContainer;
    bitcoin: STMarketChartDataResultContainer;
}


export interface STMarketChartDataResultContainer {
    result: STMarketChartDataResult[];
    timestamp: number[];
    keyName: string;
}

interface STMarketChartDataResultAbs {
    currentDate: string;
    currentValue: number;
    documentKey: string;
    name: string;
    parentName: string;
    quandalKey: string;
    lastUpdate?: string;
}

export interface STMarketChartDataResult extends STMarketChartDataResultAbs {
    data: number[];
}

export interface STMarketChartDataResultCombined extends STMarketChartDataResultAbs {
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
}

export interface STMarketDatasetKey {
    documentKey: string; // ex. qundal_sp_500_dividend_growth_by_quarter_value
    name: string; // ex. S&P 500 - Dividend growth
}

