export interface ChartDataWrapper {
    chartData: any;
}

/* --------------------------- */
interface TimeIntervalData{
    interval: number; // seconds between two interval
    startingDate: Date;

}

export interface HistoricalChartData {
    livePrice: number;
    change: any[];
    price: any[];
    volume: any[];
}

export interface MiseryIndexData {
    Unemployment_Rate: number[];
    Inflation_Rate: number[];
    Misery_Index: number[];
    timestamp: string[];
}

export interface BitcoinData {
    marketPrice: number[];
    exchangeTradingVolume: number[];
    numberOfTransactionsPerDay: number[];
    costPerTransaction: number[];
    marketCap: number[];
    transactionTime: number[];
    transactionFeesUSD: number[];
    timestamp: string[];
}

export interface TreasuryYieldCurveRatesData {
    '6_MO': number[];
    '1_YR': number[];
    '5_YR': number[];
    '10_YR': number[];
    '20_YR': number[];
    '30_YR': number[];
    timestamp: string[];
}

export interface InvestorSentimentData extends TimeIntervalData{
    Bullish: number[];
    Neutral: number[];
    Bearish: number[];
    timestamp: string[];
}

export interface SP500StatisticsData {
    dividendYieldMonth: number[];
    peRatioMonth: number[];
    earningsYieldMonth: number[];
    priceToBookQrt: number[];
    dividendPerMonth: number[];
    salesGrowthQrt: number[];
    bookValueQrt: number[];
    priceToSaleQrt: number[];
    timestamp: string[];
}

export interface EmploymentData {
    governmentIndustry: number[];
    serviceProvidingIndustry: number[];
    goodsProducingIndustry: number[];
    privateIndustry: number[];
    timestamp: string[];
}

/* -------------------- */
export interface ChartDataIdentification {
    symbol: string;
    name: string;
}

export interface DocumentIdentification {
    documentId: string;
    additionalInfo: string;
}


