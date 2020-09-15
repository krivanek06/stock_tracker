
export interface SearchStocks {
    displayName: string;
    symbol: string;
}

/* ----- SYMBOL MOVEMENT ---------- */
export interface SymbolMovementWrapper {
    data: SymbolMovementData[];
}

export interface SymbolMovementData {
    AvgVolThreemonth: string;
    Change: string;
    FiveTwoWeekRange: string;
    MarketCap: string;
    Name: string;
    PERatioTTM: string;
    PctChange: string;
    PriceIntraday: string;
    Symbol: string;
    Volume: string;
}

/* ------- CHART DATA ----------------- */

export interface HistoricalChartData {
    livePrice: number;
    change: any[];
    price: any[];
    volume: any[];
}


export interface ChartData {
    result: ChartDataArray[];
}

export interface ChartDataArray {
    name: string;
    data: number[][]; // [ [timestamp, value], [timestamp, value].. ]
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

