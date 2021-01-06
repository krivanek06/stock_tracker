export interface StockDetailsWrapper {
    details: StockDetails;
    detailsLastUpdate: string;
    summaryLastUpdate: string;
    newsLastUpdate: string;
}

export interface SearchStockSummaries {
    summaries: Summary[];
}

export interface SearchStockSymbol {
    data: string[]
}

export interface StockFinancialReports {
    reports: FinancialReport[];
}

export interface StockDetails {
    id: string;
    analysis: Analysis;
    balanceSheet: BalanceSheet;
    cashFlow: CashFlow;
    incomeStatement: IncomeStatement;
    financialReports: any[];
    financialReportSnippets: string[];
    stats: Stats;
    recommendation: Recommendations[];
    stockNews: NewsArticle[];
    companyData: CompanyData;
    summary: Summary;
    metric: Metric;
    dividends: Dividens;
}

export interface FinancialReport {
    acceptedDate: string;
    accessNumber: string;
    cik: string;
    endDate: string;
    filedDate: string;
    form: string;
    quarter: number;
    report: {
        bs: FinancialReportItems[];
        cf: FinancialReportItems[];
        ic: FinancialReportItems[];
    }
    source: string;
    startDate: string;
    symbol: string;
    year: number;
}

export interface FinancialReportItems {
    concept: number;
    label: number;
    unit: number;
    value: number;
}

export interface NewsArticle {
    datetime: number;
    headline: string;
    image: string;
    sourceName: string;
    summary: string;
    url: string;
}

export interface CompanyData {
    defaultKeyStatistics: DefaultKeyStatistics;
    earnings: Earnings;
    esgScores: EsgScores;
    financialData: FinancialData;
    pageViews: PageViews;
    summaryProfile: SummaryProfile;
    upgradeDowngradeHistory: UpgradeDowngradeHistory;
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
    incomeStatementHistoryQuarterly: IncomeStatementData[];
    incomeStatementHistoryYearly: IncomeStatementData[];
}


export interface IncomeStatementData {
    costOfRevenue: number;
    discontinuedOperations?: number;
    ebit: number;
    effectOfAccountingCharges?: number;
    endDate: number;
    extraordinaryItems: number;
    grossProfit: number;
    incomeBeforeTax: number;
    incomeTaxExpense: number;
    interestExpense: number;
    netIncome: number;
    netIncomeApplicableToCommonShares: number;
    netIncomeFromContinuingOps: number;
    operatingIncome: number;
    otherOperatingExpenses: number;
    researchDevelopment?: number;
    sellingGeneralAdministrative: number;
    totalOperatingExpenses: number;
    totalOtherIncomeExpenseNet: number;
    totalRevenue: number;
}

export interface CashFlow {
    cashflowStatementHistoryQuarterly: CashFlowData[];
    cashflowStatementHistoryYearly: CashFlowData[];
}

export interface CashFlowData {
    capitalExpenditures: number;
    changeInCash: number;
    changeToAccountReceivables: number;
    changeToInventory: number;
    changeToLiabilities: number;
    changeToNetincome: number;
    changeToOperatingActivities: number;
    depreciation: number;
    dividendsPaid: number;
    endDate: number;
    investments: number;
    maxAge: number;
    netBorrowings: number;
    netIncome: number;
    otherCashflowsFromFinancingActivities: number;
    otherCashflowsFromInvestingActivities: number;
    repurchaseOfStock: number;
    totalCashFromFinancingActivities: number;
    totalCashFromOperatingActivities: number;
    totalCashflowsFromInvestingActivities: number;
}

export interface BalanceSheet {
    balanceSheetHistoryQuarterly: BalanceSheetData[];
    balanceSheetHistoryYearly: BalanceSheetData[];
}

export interface BalanceSheetData {
    accountsPayable: number;
    cash: number;
    commonStock: number;
    endDate: number;
    inventory: number;
    longTermDebt: number;
    longTermInvestments: number;
    maxAge: number;
    netReceivables: number;
    netTangibleAssets: number;
    otherAssets: number;
    otherCurrentAssets: number;
    otherCurrentLiab: number;
    otherLiab: number;
    otherStockholderEquity: number;
    propertyPlantEquipment: number;
    retainedEarnings: number;
    shortLongTermDebt: number;
    shortTermInvestments: number;
    totalAssets: number;
    totalCurrentAssets: number;
    totalCurrentLiabilities: number;
    totalLiab: number;
    totalStockholderEquity: number;
    treasuryStock: number;
}

export interface RevenueEstimate {
    AvgEstimate: string;
    AvgEstimateNumber: number;
    HighEstimate: string;
    HighEstimateNumber: number;
    LowEstimate: string;
    LowEstimateNumber: number;
    NoofAnalysts: number;
    SalesGrowthyearest: string;
    SalesGrowthyearestNumber: number;
    YearAgoSales: string;
    name: string;
}


export interface GrowthEstimates {
    CurrentQtr: string;
    CurrentQtrPrct: number;
    CurrentYear: string;
    CurrentYearPrct: number;
    NextFiveYearsperannum: string;
    NextFiveYearsperannumPrct: number;
    NextQtr: string;
    NextQtrPrct: number;
    NextYear: string;
    NextYearPrct: number;
    PastFiveYearsperannum: string;
    PastFiveYearsperannumPrct: number;
    name: string;
}

export interface Analysis {
    GrowthEstimates: GrowthEstimates;
    RevenueEstimate: RevenueEstimate[];
}

export interface DefaultKeyStatistics {
    FiveTwoWeekChange: number; // *100
    SandPFiveTwoWeekChange: number; // *100
    // annualHoldingsTurnover?: number;
    // annualReportExpenseRatio?: number;
    // beta": 1.284838,
    // betaThreeYear": null,
    bookValue: number;
    // category": null,
    dateShortInterest: number;
    earningsQuarterlyGrowth: number; // *100
    enterpriseToEbitda: number;
    enterpriseToRevenue: number;
    enterpriseValue: number;
    fiveYearAverageReturn?: number;
    floatShares: number;
    forwardEps: number;
    forwardPE: number;
    // fundFamily?: number;
    // fundInceptionDate?: number;
    heldPercentInsiders: number; // *100
    heldPercentInstitutions: number; // *100
    // lastCapGain?: number;
    // lastDividendValue?: number;
    lastFiscalYearEnd: number;
    lastSplitDate: number;
    lastSplitFactor: string;
    // legalType": null,
    // morningStarOverallRating": null,
    // morningStarRiskRating": null,
    mostRecentQuarter: number;
    netIncomeToCommon: number;
    nextFiscalYearEnd: number;
    pegRatio: number;
    priceHint: number;
    priceToBook: number;
    // priceToSalesTrailingOneTwoMonths": null,
    profitMargins: number; // *100
    // revenueQuarterlyGrowth": null,
    sharesOutstanding: number;
    // sharesPercentSharesOut": 0.0055,
    sharesShort: number;
    sharesShortPreviousMonthDate: number;
    sharesShortPriorMonth: number;
    // shortPercentOfFloat": 0.0055,
    shortRatio: number;
    // threeYearAverageReturn": null,
    // totalAssets": null,
    trailingEps: number;
    // yield": null,
    // ytdReturn": null
}

export interface Earnings {
    earningsChart: EarningsChart;
    financialCurrency: string;
    financialsChart: FinancialsChart;
}

export interface EarningsChart {
    currentQuarterEstimate: number;
    currentQuarterEstimateDate: string;
    currentQuarterEstimateYear: number;
    earningsDate: number[];
    quarterly: EarningsChartData[];
}

export interface EarningsChartData {
    actual: number;
    date: string;
    estimate: number;
}

export interface FinancialsChart {
    quarterly: FinancialsChartData;
    yearly: FinancialsChartData;
}

export interface FinancialsChartData {
    categories: string[];
    series: Series[];
}

export interface Series {
    data: number[];
    name: string;
}

export interface EsgScores {
    adult: boolean;
    alcoholic: boolean;
    animalTesting: boolean;
    catholic: boolean;
    coal: boolean;
    controversialWeapons: boolean;
    // environmentPercentile": null,
    environmentScore: number;
    esgPerformance: string;
    furLeather: boolean;
    gambling: boolean;
    gmo: boolean;
    // governancePercentile": null,
    governanceScore: number;
    highestControversy: number;
    maxAge: number;
    militaryContract: boolean;
    nuclear: boolean;
    palmOil: boolean;
    peerCount: number;
    peerEnvironmentPerformance: Calculation;
    peerEsgScorePerformance: Calculation;
    peerGovernancePerformance: Calculation;
    peerGroup: string;
    peerHighestControversyPerformance: Calculation;
    peerSocialPerformance: Calculation;
    percentile: number;
    pesticides: boolean;
    ratingMonth: number;
    ratingYear: number;
    relatedControversy: string[];
    smallArms: boolean;
    // socialPercentile": null,
    socialScore: number;
    tobacco: boolean;
    totalEsg: number;
}

export interface Calculation {
    avg: number;
    max: number;
    min: number;
}

export interface FinancialData {
    currentPrice: number;
    currentRatio: number;
    debtToEquity: number;
    ebitda: number;
    ebitdaMargins: number; // *100
    financialCurrency: string;
    freeCashflow: number;
    grossMargins: number; // *100
    grossProfits: number;
    numberOfAnalystOpinions: number;
    operatingCashflow: number;
    operatingMargins: number; // *100
    profitMargins: number; // *100
    quickRatio: number;
    recommendationKey: string;
    recommendationMean: number;
    returnOnAssets: number; // *100
    returnOnEquity: number; // *100
    revenueGrowth: number; // *100
    revenuePerShare: number;
    targetHighPrice: number;
    targetLowPrice: number;
    targetMeanPrice: number;
    targetMedianPrice: number;
    totalCash: number;
    totalCashPerShare: number;
    totalDebt: number;
    totalRevenue: number;
}

export interface PageViews {
    longTermTrend: string;
    midTermTrend: string;
    shortTermTrend: string;
}


export interface SummaryProfile {
    address1: string;
    city: string;
    country: string;
    fax: string;
    fullTimeEmployees: number;
    industry: string;
    logo_url: string;
    longBusinessSummary: string;
    phone: string;
    sector: string;
    state: string;
    website: string;
    zip: string;
}

export interface UpgradeDowngradeHistory {
    history: UpgradeDowngradeHistoryData[];
}

export interface UpgradeDowngradeHistoryData {
    action: string;
    epochGradeDate: number;
    firm: string;
    fromGrade: string;
    toGrade: string;
}

export interface Stats {
    AvgVolOnedayThree: string;
    BookValuePerSharemrq: string;
    CurrentRatiomrq: string;
    DilutedEPSttm: string;
    DividendDateThree: string;
    EBITDA: string;
    EnterpriseValueEBITDASix: string[];
    EnterpriseValueRevenueThree: string[];
    EnterpriseValueThree: string[];
    FiveDayMovingAverageThree: string;
    FiveTwoWeekChangeThree: string;
    FiveTwoWeekHighThree: string;
    FiveTwoWeekLowThree: string;
    FiveYearAverageDividendYieldFour: string;
    Float: string;
    ForwardAnnualDividendYieldFour: string;
    ForwardPEOne: string[];
    GrossProfitttm: string;
    LastSplitDateThree: string;
    LastSplitFactorTwo: string;
    LeveredFreeCashFlowttm: string;
    MarketCapintradayFive: string[];
    MostRecentQuartermrq: string;
    NetIncomeAvitoCommonttm: string;
    OperatingMarginttm: string;
    PEGRatioFiveyrexpectedOne: string[];
    PayoutRatioFour: string;
    PctHeldbyInsidersOne: string;
    PctHeldbyInstitutionsOne: string;
    PriceBookmrq: string[];
    PriceSalesttm: string[];
    QuarterlyEarningsGrowthyoy: string;
    QuarterlyRevenueGrowthyoy: string;
    ReturnonEquityttm: string;
    RevenuePerSharettm: string;
    SPFiveFiveTwoWeekChangeThree: string;
    SharesOutstandingFive: string;
    SharesShortAugOneThreeTwoTwoFour: string;
    SharesShortpriormonthJulOneFourTwoTwoFour: string;
    ShortPctofFloatAugOneThreeTwoTwoFour: string;
    ShortPctofSharesOutstandingAugOneThreeTwoTwoFour: string;
    ShortRatioAugOneThreeTwoTwoFour: string;
    TotalCashPerSharemrq: string;
    TotalDebtEquitymrq: string;
    TotalDebtmrq: string;
    TrailingPE: string[];
    TwoDayMovingAverageThree: string;
    dateTime: string[];
}

export interface Summary {
    sandPFiveTwoWeekChange: number;
    fiveTwoWeekChange: number;
    lastSplitFactor: string;
    lastSplitDate: number;
    fullTimeEmployees: number;
    netIncomeEmployeeAnnual: number;
    revenueEmployeeAnnual: number;
    website: string;
    residance: {
        city: string;
        state: string;
        country: string;
        addressOne: string;
        zip: string;
    }
    avgVolume: string;
    ePSTTM: string;
    earningsDate: string;
    exDividendDate: string;
    fiveTwoWeekRange: string;
    forwardDividendYield: string;
    oneyTargetEst: number;
    open: string;
    pERatioTTM: string;
    volume: string;
    currency: string;
    industry: string;
    logo_url: string;
    marketPrice: number;
    previousClose: number;
    recommendationKey: string;
    recommendationMean: number;
    sector: string;
    symbol: string;
    targetEstOneyPercent: number;
    weekRangeFiveTwoMax: number;
    weekRangeFiveTwoMin: number;
    currencySymbol: string;
    shortName: string;
    longName: string;
    marketCap: number;
    sharesOutstanding: number;
    longBusinessSummary: string;
}


export interface Dividens {
    currentDividendYieldTTM: number;
    dividendGrowthRateFiveY: number;
    dividendPerShareAnnual: number;
    dividendPerShareFiveY: number;
    dividendYieldFiveY: number;
    dividendYieldIndicatedAnnual: number;
    dividendsPerShareTTM: number;
    exDividendDate: string;
    trailingAnnualDividendRate: string;
    trailingAnnualDividendYield: string;
    ForwardDividendYield: string;
}

export interface Metric {
    FiveDayPriceReturnDaily: number;
    FiveTwoWeekHigh: number;
    FiveTwoWeekHighDate: string;
    FiveTwoWeekLow: number;
    FiveTwoWeekLowDate: string;
    FiveTwoWeekPriceReturnDaily: number;
    OneDayAverageTradingVolume: number;
    OneThreeWeekPriceReturnDaily: number;
    ThreeMonthAverageTradingVolume: number;
    TwoSixWeekPriceReturnDaily: number;
    assetTurnoverAnnual: number;
    assetTurnoverTTM: number;
    beta: number;
    bookValuePerShareAnnual: number;
    bookValuePerShareQuarterly: number;
    bookValueShareGrowthFiveY: number;
    capitalSpendingGrowthFiveY: number;
    cashFlowPerShareAnnual: number;
    cashFlowPerShareTTM: number;
    cashPerSharePerShareAnnual: number;
    cashPerSharePerShareQuarterly: number;
    currentEvfreeCashFlowAnnual: number;
    currentEvfreeCashFlowTTM: number;
    currentRatioAnnual: number;
    currentRatioQuarterly: number;
    ebitdPerShareTTM: number;
    ebitdaCagrFiveY: number;
    ebitdaInterimCagrFiveY: number;
    epsBasicExclExtraItemsAnnual: number;
    epsBasicExclExtraItemsTTM: number;
    epsExclExtraItemsAnnual: number;
    epsExclExtraItemsTTM: number;
    epsGrowthFiveY: number;
    epsGrowthQuarterlyYoy: number;
    epsGrowthTTMYoy: number;
    epsGrowthThreeY: number;
    epsInclExtraItemsAnnual: number;
    epsInclExtraItemsTTM: number;
    epsNormalizedAnnual: number;
    focfCagrFiveY: number;
    freeCashFlowAnnual: number;
    freeCashFlowPerShareTTM: number;
    freeCashFlowTTM: number;
    freeOperatingCashFlowrevenueFiveY: number;
    freeOperatingCashFlowrevenueTTM: number;
    grossMarginAnnual: number;
    grossMarginFiveY: number;
    grossMarginTTM: number;
    inventoryTurnoverAnnual: number;
    inventoryTurnoverTTM: number;
    longTermDebtequityAnnual: number;
    longTermDebtequityQuarterly: number;
    marketCapitalization: number;
    monthToDatePriceReturnDaily: number;
    netDebtAnnual: number;
    netDebtInterim: number;
    netIncomeEmployeeAnnual: number;
    netIncomeEmployeeTTM: number;
    netInterestCoverageAnnual: number;
    netInterestCoverageTTM: number;
    netMarginGrowthFiveY: number;
    netProfitMarginAnnual: number;
    netProfitMarginFiveY: number;
    netProfitMarginTTM: number;
    operatingMarginAnnual: number;
    operatingMarginFiveY: number;
    operatingMarginTTM: number;
    payoutRatioAnnual: number;
    payoutRatioTTM: number;
    pbAnnual: number;
    pbQuarterly: number;
    pcfShareTTM: number;
    peBasicExclExtraTTM: number;
    peExclExtraAnnual: number;
    peExclExtraHighTTM: number;
    peExclExtraTTM: number;
    peExclLowTTM: number;
    peInclExtraTTM: number;
    peNormalizedAnnual: number;
    pfcfShareAnnual: number;
    pfcfShareTTM: number;
    pretaxMarginAnnual: number;
    pretaxMarginFiveY: number;
    pretaxMarginTTM: number;
    priceRelativeToSPFiveFiveTwoWeek: number;
    priceRelativeToSPFiveFourWeek: number;
    priceRelativeToSPFiveOneThreeWeek: number;
    priceRelativeToSPFiveTwoSixWeek: number;
    priceRelativeToSPFiveYtd: number;
    psAnnual: number;
    psTTM: number;
    ptbvAnnual: number;
    ptbvQuarterly: number;
    quickRatioAnnual: number;
    quickRatioQuarterly: number;
    receivablesTurnoverAnnual: number;
    receivablesTurnoverTTM: number;
    revenueEmployeeAnnual: number;
    revenueEmployeeTTM: number;
    revenueGrowthFiveY: number;
    revenueGrowthQuarterlyYoy: number;
    revenueGrowthTTMYoy: number;
    revenueGrowthThreeY: number;
    revenuePerShareAnnual: number;
    revenuePerShareTTM: number;
    revenueShareGrowthFiveY: number;
    roaRfy: number;
    roaaFiveY: number;
    roaeFiveY: number;
    roaeTTM: number;
    roeRfy: number;
    roeTTM: number;
    roiAnnual: number;
    roiFiveY: number;
    roiTTM: number;
    tangibleBookValuePerShareAnnual: number;
    tangibleBookValuePerShareQuarterly: number;
    tbvCagrFiveY: number;
    totalDebtCagrFiveY: number;
    totalDebttotalEquityAnnual: number;
    totalDebttotalEquityQuarterly: number;
    yearToDatePriceReturnDaily: number;
}


export const ST_STOCK_DATA_COLLECTION = 'stock_data';
export const ST_STOCK_DATA_COLLECTION_MORE_INFORMATION = 'more_information';
export const ST_STOCK_DATA_DOCUMENT_FINACIAL_REPORTS = 'financial_reports'


// Shared data
export const ST_STOCK_DATA_SHARED_DOCUMENT = 'shared_document';
export const ST_STOCK_DATA_DOCUMENT_SEARCH_SYMBOL = 'search_symbol'