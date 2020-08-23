/* ----- SYMBOL MOVEMENT ---------- */
export interface SymbolMovementWrapper {
    data: SymbolMovementData[];
}

export interface SymbolMovementData {
    currentPrice: number;
    currentPriceChange: number;
    name: string;
    symbol: string;
}

/* ------- CHART DATA ----------------- */

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
}


export interface TreasuryYieldCurveRatesData {
    '6_MO': number[][];
    '1_YR': number[][];
    '5_YR': number[][];
    '10_YR': number[][];
    '20_YR': number[][];
    '30_YR': number[][];
}

export interface InvestorSentimentData {
    Bullish: number[][];
    Neutral: number[][];
    Bearish: number[][];
}

// [ [timestamp, value], [timestamp, value].. ]
export interface ChartData {
    chartData: number[][];
}

export interface ChartDataArray {
    name: string;
    data: number[][];
}

export interface SP500PartialData {
    priceToSale: ChartData;
    bookValue: ChartData;
    salesGrowth: ChartData;
    dividends: ChartData;
    priceToBook: ChartData;
    earningsYield: ChartData;
    dividendYield: ChartData;
    peRatio: ChartData;
}

export interface EmploymentPartialData {
    governmentIndustry: ChartData;
    serviceProvidingIndustry: ChartData;
    goodProducingIndustry: ChartData;
    privateIndustry: ChartData;
}

export interface BitcoinPartialData {
    transactionFees: ChartData;
    transactionTime: ChartData;
    marketCap: ChartData;
    costPerTransaction: ChartData;
    transactionsPerDay: ChartData;
    tradingVolume: ChartData;
    marketPrice: ChartData;
}
/* --------- EARNINGS CALENDAR ----------- */

export interface EarningsCalendarWrapper {
    earnings: EarningsCalendar[];
}

export interface EarningsCalendar {
    date: string;
    symbol: string;
}

