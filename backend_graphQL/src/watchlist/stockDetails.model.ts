export interface StockData {
    details: StockDetails;
    detailsLastUpdate: Date;
    financialReportsLastUpdate: Date
    newsLastDelete: Date
    newsLastUpdate: Date
    overViewLastUpdate: Date
}

export interface StockDetails {
    id: string;
    basicInfo: BasicInfo;
    chartInfo: ChartInfo;
    dividend: Dividend;
    analysis: Analysis;
    balanceSheet: BalanceSheet;
    cashFlow: CashFlow;
    overview: OverView;
    perShare: PerShare;
    valuation: Valuation;
    financialStrength: FinancialStrength;
    financialReports: FinancialReportNames[];
    financialStrengthRatio: FinancialStrengthRatio;
    incomeStatement: IncomeStatement;
    recommendation: Recommendations[];
    stockNewsSnippets: NewsArticle[];
}

export interface PerShare{
    bookValuePerShareMRQ?: number;
    cashFlowPerShareAnnual?: number;
    cashFlowPerShareTTM?: number;
    cashPerSharePerShareAnnual?: number;
    cashPerSharePerShareQuarterly?: number;
    ebitdPerShareTTM?: number;
    freeCashFlowPerShareTTM?: number;
    revenuePerShareTTM?: number;
    tangibleBookValuePerShareQuarterly?: number;
    totalCashPerShareMRQ?: number;
}

export interface FinancialStrengthRatio {
    currentRatioQuarterly?: number;
    freeOperatingCashFlowToRevenue5Y?: number;
    longTermDebtToEquityQuarterly?: number;
    quickRatioQuarterly?: number;
    totalDebtToEquityAnnual?: number;
    totalDebtToEquityQuarterly: number;
}

export interface FinancialStrength {
    ebitda: string;
    grossProfitTTM?: string;
    leveredFreeCashFlowTTM?: string;
    marketCap: string;
    netIncomeAvitoCommonTTM?: string;
    operatingCashFlowTTM?: string;
    revenueTTM?: string;
    totalCashMRQ?: string;
    totalDebtMRQ?: string;
}

export interface FinancialReportNames {
    collection: string;
    name: string;
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




export interface ChartInfo {
    assetsToDebtInfo: AssetsToDebtInfo;
    equityToAssets: EquityToAssets;
    effectiveness: Effectiveness;
    margin: Margin;
    otherGrowthInformation: OtherGrowthInformation;
    profitMargin: ProfitMargin;
}

export interface ProfitMargin {
    expenseTTM: number;
    netProfitMarginTTM: number;
}

export interface OtherGrowthInformation {
    bookValueShareGrowth5Y?: number;
    capitalSpendingGrowth5Y?: number;
    dividendGrowthRate5Y?: number;
    epsGrowth5Y?: number;
    epsGrowthQuarterlyYOY?: number;
    quarterlyRevenueGrowthYOY?: number;
    revenueGrowthTTMYoy?: number;
    revenueShareGrowth5Y?: number;
}

export interface Margin {
    grossMarginTTM: number;
    netMarginGrowth5Y: number;
    netProfitMargin5Y: number;
    netProfitMarginTTM: number;
    operatingMarginTTM: number;
    pretaxMarginTTM: number;
}

export interface Effectiveness {
    returnOnAssetsTTM: number;
    returnOnEquityTTM: number;
    returnOnInvestmentsTTM: number;
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

export interface Valuation {
    currentEvToFreeCashFlowAnnual?: number;
    currentEvToFreeCashFlowTTM?: number;
    enterpriseValueToEBITDA?: number;
    enterpriseValueToRevenue?: number;
    forwardPE?: number;
    customPE?: number;
    peRatioTTM?: number;
    pegRatioFiveYearExpected?: number;
    priceToBookMRQ?: number;
    priceToSalesTTM?: number;
    trailingPE?: number;
}



export interface OverView {
    currentPrice: number;
    currentPriceChange: number;
    previousClose: number;
    weekHigh52: number;
    weekLow52: number;
    symbol: string;
    earningsDate: string;
    exDividendDate: string;
    forwardDividendAndYield: string;
    targetEst1y?: number;
    targetEst1yPercent?: number;
}


export interface Dividend {
    dividendDate?: string;
    dividendPerShare5Y?: number;
    dividendPerShareAnnual?: number;
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
    netIncomeEmployeeAnnual: number;
    revenueEmployeeAnnual: number;
    sharesOutstanding: number;
    summary: string;
    symbol: string;
    logoUrl: string;
}


export interface NewsArticle {
    datetime: string;
    headline: string;
    image: string;
    sourceName: string;
    summary: string;
    url: string;
}
