export interface StockDetails {
    fundamentals: Fundamentals;
    analysis: Analysis;
    balanceSheet: BalanceSheet;
    cashFlow: CashFlow;
    incomeStatement: IncomeStatement;
    recommendation: Recommendations[];
    stockNewsSnippets: StockArticle[];
}

export interface Recommendations {
    buy: number;
    hold: number;
    period: string;
    sell: number;
    strongBuy: number;
    strongSell: number;
    symbol: string;
}

export interface IncomeStatement {
    Basic_Average_Shares: number[];
    Basic_EPS: number[];
    Cost_of_Revenue: number[];
    Diluted_Average_Shares: number[];
    Diluted_EPS: number[];
    Diluted_NI_Available_to_Com_Stockholders: number[];
    Gross_Profit: number[];
    Interest_Expense: number[];
    Net_Income_Common_Stockholders: number[];
    Net_Income_from_Continuing_And_Discontinued_Operation: number[];
    Net_Income_from_Continuing_Operation_Net_Minority_Interest: number[];
    Net_Interest_Income: number[];
    Net_Non_Operating_Interest_Income_Expense: number[];
    Normalized_EBITDA: number[];
    Normalized_Income: number[];
    Operating_Expense: number[];
    Operating_Income: number[];
    Other_Income_Expense: number[];
    Pretax_Income: number[];
    Reconciled_Cost_of_Revenue: number[];
    Reconciled_Depreciation: number[];
    Tax_Effect_of_Unusual_Items: number[];
    Tax_Provision: number[];
    Tax_Rate_for_Calcs: number[];
    Total_Expenses: number[];
    Total_Operating_Income_as_Reported: number[];
    Total_Revenue: number[];
    Total_Unusual_Items: number[];
    Total_Unusual_Items_Excluding_Goodwill: number[];
    date: string[];
}

export interface CashFlow {
    Capital_Expenditure: number[];
    End_Cash_Position: number[];
    Financing_Cash_Flow: number[];
    Free_Cash_Flow: number[];
    Investing_Cash_Flow: number[];
    Issuance_of_Capital_Stock: number[];
    Issuance_of_Debt: number[];
    Operating_Cash_Flow: number[];
    Repayment_of_Debt: number[];
    Repurchase_of_Capital_Stock: number[];
    date: string[];
}

export interface BalanceSheet {
    Capital_Lease_Obligations: number[];
    Common_Stock_Equity: number[];
    Invested_Capital: number[];
    Net_Debt: number[];
    Net_Tangible_Assets: number[];
    Ordinary_Shares_Number: number[];
    Share_Issued: number[];
    Tangible_Book_Value: number[];
    Total_Assets: number[];
    Total_Capitalization: number[];
    Total_Debt: number[];
    Total_Equity_Gross_Minority_Interest: number[];
    Total_Liabilities_Net_Minority_Interest: number[];
    Working_Capital: number[];
    date: string[];
}

export interface RevenueEstimate {
    currentQuarter: RevenueEstimateData;
    currentYear: RevenueEstimateData;
    nextQuarter: RevenueEstimateData;
    nextYear: RevenueEstimateData;
}

export interface RevenueEstimateData {
    average: number;
    high?: number;
    low?: number;
    growthPercent: number;
    average_string: string;
    high_string?: string;
    low_string?: string;
    numberOfAnalysis: number;
    timeEstimation: string;
    yearAgo: string;
}

export interface GrowthEstimatesPercent {
    fiveYear: GrowthEstimatesPercentData;
    quarter: GrowthEstimatesPercentData;
    year: GrowthEstimatesPercentData;
}

export interface GrowthEstimatesPercentData {
    current: number;
    next: number;
}

export interface Earnings {
    dates: string[];
    epsActual: number[];
    epsEst: number[];
}

export interface Analysis {
    growthEstimatesPercent: GrowthEstimatesPercent;
    revenueEstimate: RevenueEstimate;
    earnings: Earnings;
}

export interface Fundamentals {
    basicInfo: BasicInfo;
    chartInfo: ChartInfo;
    dividendInfo: DividendInfo;
    moneyInfo: MoneyInfo;
    percentageInfo: PercentageInfo;
    ratioInfo: RatioInfo;
    overview: OverView;
}


export interface ChartInfo {
    assetsToDebtInfo: AssetsToDebtInfo;
    equityToAssets: EquityToAssets;
}

export interface AssetsToDebtInfo {
    totalAssets?: number;
    totalDebt?: number;
    prctDiff?: number;
}

export interface EquityToAssets {
    totalAssets: number;
    totalEquity: number;
    prctDiff?: number;
}

export interface RatioInfo {
    bookValuePerShareMRQ?: number;
    enterpriseValueToEBITDA?: number;
    enterpriseValueToRevenue?: number;
    forwardPE?: number;
    customPE?: number;
    pegRatioFiveYearExpected?: number;
    priceToBookMRQ?: number;
    priceToSalesTTM?: number;
    revenuePerShareTTM?: number;
    totalCashPerShareMRQ?: number;
    totalDebtToEquityMRQ?: number;
    trailingPE?: number;
}

export interface PercentageInfo {
    operatingMarginTTM: string;
    profitMargin: string;
    quarterlyEarningsGrowthYOY: string;
    quarterlyRevenueGrowthYOY: string;
    returnOnAssetsTTM: string;
    returnOnEquityTTM: string;

    operatingMarginTTMNumber: number;
    profitMarginNumber: number;
    quarterlyEarningsGrowthYOYNumber: number;
    quarterlyRevenueGrowthYOYNumber: number;
    returnOnAssetsTTMNumber: number;
    returnOnEquityTTMNumber: number;
}

export interface OverView {
    currentPrice: number;
    currentPriceChange: number;
    logoUrl?: string;
    previousClose: number;
    summary?: string;
    weekHigh52: number;
    weekLow52: number;
    symbol: string;
    volume?: number;
    averageVolume: number;
    volumePercent: number;
    earningsDate: string;
    exDividendDate: string;
    forwardDividendAndYield: string;
    peRatioTTM?: number;
    targetEst1y?: number;
    targetEst1yPercent?: number;
}

export interface MoneyInfo {
    ebitda?: string;
    grossProfitTTM?: string;
    leveredFreeCashFlowTTM?: string;
    marketCap?: string;
    netIncomeAvitoCommonTTM?: string;
    operatingCashFlowTTM?: string;
    revenueTTM?: string;
    totalCashMRQ?: string;
    totalDebtMRQ?: string;
}

export interface DividendInfo {
    dividendDate?: string;
    exDividendDate?: string;
    fiveYearAverageDividendYield?: string;
    forwardAnnualDividendRate?: string;
    forwardAnnualDividendYield?: string;
    payoutRatio?: string;
    trailingAnnualDividendRate?: string;
    trailingAnnualDividendYield?: string;
}

export interface BasicInfo {
    address1: string;
    city: string;
    country: string;
    exchangeTimezoneName: string;
    fullTimeEmployees: number;
    industry: string;
    sector: string;
    shortName: string;
    state?: string;
    website: string;
    zip: string;
}


export interface StockArticleWrapper {
    stockNews: StockArticle[];
}

export interface StockArticle {
    datetime: string;
    headline: string;
    image: string;
    related: string;
    source: string;
    sourceName: string;
    summary: string;
    url: string;
}
