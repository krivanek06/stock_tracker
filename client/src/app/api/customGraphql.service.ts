import gql from 'graphql-tag';
import {Injectable} from '@angular/core';
import * as Apollo from 'apollo-angular';

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** The `Upload` scalar type represents a file upload. */
    Upload: any;
};


export type Analysis = {
    __typename?: 'Analysis';
    GrowthEstimates: GrowthEstimates;
    RevenueEstimate: Array<Maybe<RevenueEstimate>>;
};

export type BalanceSheet = {
    __typename?: 'BalanceSheet';
    balanceSheetHistoryQuarterly: Array<Maybe<BalanceSheetData>>;
    balanceSheetHistoryYearly: Array<Maybe<BalanceSheetData>>;
};

export type BalanceSheetData = {
    __typename?: 'BalanceSheetData';
    accountsPayable?: Maybe<Scalars['Float']>;
    cash?: Maybe<Scalars['Float']>;
    commonStock?: Maybe<Scalars['Float']>;
    endDate?: Maybe<Scalars['Float']>;
    inventory?: Maybe<Scalars['Float']>;
    longTermDebt?: Maybe<Scalars['Float']>;
    longTermInvestments?: Maybe<Scalars['Float']>;
    maxAge?: Maybe<Scalars['Float']>;
    netReceivables?: Maybe<Scalars['Float']>;
    netTangibleAssets?: Maybe<Scalars['Float']>;
    otherAssets?: Maybe<Scalars['Float']>;
    otherCurrentAssets?: Maybe<Scalars['Float']>;
    otherCurrentLiab?: Maybe<Scalars['Float']>;
    otherLiab?: Maybe<Scalars['Float']>;
    otherStockholderEquity?: Maybe<Scalars['Float']>;
    propertyPlantEquipment?: Maybe<Scalars['Float']>;
    retainedEarnings?: Maybe<Scalars['Float']>;
    shortLongTermDebt?: Maybe<Scalars['Float']>;
    shortTermInvestments?: Maybe<Scalars['Float']>;
    totalAssets?: Maybe<Scalars['Float']>;
    totalCurrentAssets?: Maybe<Scalars['Float']>;
    totalCurrentLiabilities?: Maybe<Scalars['Float']>;
    totalLiab?: Maybe<Scalars['Float']>;
    totalStockholderEquity?: Maybe<Scalars['Float']>;
    treasuryStock?: Maybe<Scalars['Float']>;
};

export enum CacheControlScope {
    Public = 'PUBLIC',
    Private = 'PRIVATE'
}

export type Calculation = {
    __typename?: 'Calculation';
    avg?: Maybe<Scalars['Float']>;
    max?: Maybe<Scalars['Float']>;
    min?: Maybe<Scalars['Float']>;
};

export type CashFlow = {
    __typename?: 'CashFlow';
    cashflowStatementHistoryQuarterly?: Maybe<Array<Maybe<CashFlowData>>>;
    cashflowStatementHistoryYearly?: Maybe<Array<Maybe<CashFlowData>>>;
};

export type CashFlowData = {
    __typename?: 'CashFlowData';
    capitalExpenditures?: Maybe<Scalars['Float']>;
    changeInCash?: Maybe<Scalars['Float']>;
    changeToAccountReceivables?: Maybe<Scalars['Float']>;
    changeToInventory?: Maybe<Scalars['Float']>;
    changeToLiabilities?: Maybe<Scalars['Float']>;
    changeToNetincome?: Maybe<Scalars['Float']>;
    changeToOperatingActivities?: Maybe<Scalars['Float']>;
    depreciation?: Maybe<Scalars['Float']>;
    dividendsPaid?: Maybe<Scalars['Float']>;
    endDate?: Maybe<Scalars['Float']>;
    investments?: Maybe<Scalars['Float']>;
    maxAge?: Maybe<Scalars['Float']>;
    netBorrowings?: Maybe<Scalars['Float']>;
    netIncome?: Maybe<Scalars['Float']>;
    otherCashflowsFromFinancingActivities?: Maybe<Scalars['Float']>;
    otherCashflowsFromInvestingActivities?: Maybe<Scalars['Float']>;
    repurchaseOfStock?: Maybe<Scalars['Float']>;
    totalCashFromFinancingActivities?: Maybe<Scalars['Float']>;
    totalCashFromOperatingActivities?: Maybe<Scalars['Float']>;
    totalCashflowsFromInvestingActivities?: Maybe<Scalars['Float']>;
};

export type CompanyData = {
    __typename?: 'CompanyData';
    defaultKeyStatistics?: Maybe<DefaultKeyStatistics>;
    earnings?: Maybe<Earnings>;
    esgScores?: Maybe<EsgScores>;
    financialData?: Maybe<FinancialData>;
    pageViews?: Maybe<PageViews>;
    summaryProfile?: Maybe<SummaryProfile>;
    upgradeDowngradeHistory?: Maybe<UpgradeDowngradeHistory>;
};

export type DefaultKeyStatistics = {
    __typename?: 'DefaultKeyStatistics';
    FiveTwoWeekChange?: Maybe<Scalars['Float']>;
    SandPFiveTwoWeekChange?: Maybe<Scalars['Float']>;
    bookValue?: Maybe<Scalars['Float']>;
    dateShortInterest?: Maybe<Scalars['Float']>;
    earningsQuarterlyGrowth?: Maybe<Scalars['Float']>;
    enterpriseToEbitda?: Maybe<Scalars['Float']>;
    enterpriseToRevenue?: Maybe<Scalars['Float']>;
    enterpriseValue?: Maybe<Scalars['Float']>;
    fiveYearAverageReturn?: Maybe<Scalars['Float']>;
    floatShares?: Maybe<Scalars['Float']>;
    forwardEps?: Maybe<Scalars['Float']>;
    forwardPE?: Maybe<Scalars['Float']>;
    heldPercentInsiders?: Maybe<Scalars['Float']>;
    heldPercentInstitutions?: Maybe<Scalars['Float']>;
    lastFiscalYearEnd?: Maybe<Scalars['Float']>;
    lastSplitDate?: Maybe<Scalars['Float']>;
    lastSplitFactor?: Maybe<Scalars['String']>;
    mostRecentQuarter?: Maybe<Scalars['Float']>;
    netIncomeToCommon?: Maybe<Scalars['Float']>;
    nextFiscalYearEnd?: Maybe<Scalars['Float']>;
    pegRatio?: Maybe<Scalars['Float']>;
    priceHint?: Maybe<Scalars['Float']>;
    priceToBook?: Maybe<Scalars['Float']>;
    profitMargins?: Maybe<Scalars['Float']>;
    sharesOutstanding?: Maybe<Scalars['Float']>;
    sharesShort?: Maybe<Scalars['Float']>;
    sharesShortPreviousMonthDate?: Maybe<Scalars['Float']>;
    sharesShortPriorMonth?: Maybe<Scalars['Float']>;
    shortRatio?: Maybe<Scalars['Float']>;
    trailingEps?: Maybe<Scalars['Float']>;
};

export type Dividens = {
    __typename?: 'Dividens';
    currentDividendYieldTTM?: Maybe<Scalars['Float']>;
    dividendGrowthRateFiveY?: Maybe<Scalars['Float']>;
    dividendPerShareAnnual?: Maybe<Scalars['Float']>;
    dividendPerShareFiveY?: Maybe<Scalars['Float']>;
    dividendYieldFiveY?: Maybe<Scalars['Float']>;
    dividendYieldIndicatedAnnual?: Maybe<Scalars['Float']>;
    dividendsPerShareTTM?: Maybe<Scalars['Float']>;
    exDividendDate?: Maybe<Scalars['String']>;
    trailingAnnualDividendRate?: Maybe<Scalars['String']>;
    trailingAnnualDividendYield?: Maybe<Scalars['String']>;
    ForwardDividendYield?: Maybe<Scalars['String']>;
};

export type Earnings = {
    __typename?: 'Earnings';
    earningsChart?: Maybe<EarningsChart>;
    financialCurrency?: Maybe<Scalars['String']>;
    financialsChart?: Maybe<FinancialsChart>;
};

export type EarningsChart = {
    __typename?: 'EarningsChart';
    currentQuarterEstimate?: Maybe<Scalars['Float']>;
    currentQuarterEstimateDate?: Maybe<Scalars['String']>;
    currentQuarterEstimateYear?: Maybe<Scalars['Float']>;
    earningsDate?: Maybe<Array<Maybe<Scalars['Float']>>>;
    quarterly?: Maybe<Array<Maybe<EarningsChartData>>>;
};

export type EarningsChartData = {
    __typename?: 'EarningsChartData';
    actual?: Maybe<Scalars['Float']>;
    date?: Maybe<Scalars['String']>;
    estimate?: Maybe<Scalars['Float']>;
};

export type EsgScores = {
    __typename?: 'EsgScores';
    adult?: Maybe<Scalars['Boolean']>;
    alcoholic?: Maybe<Scalars['Boolean']>;
    animalTesting?: Maybe<Scalars['Boolean']>;
    catholic?: Maybe<Scalars['Boolean']>;
    coal?: Maybe<Scalars['Boolean']>;
    controversialWeapons?: Maybe<Scalars['Boolean']>;
    environmentScore?: Maybe<Scalars['Float']>;
    esgPerformance?: Maybe<Scalars['String']>;
    furLeather?: Maybe<Scalars['Boolean']>;
    gambling?: Maybe<Scalars['Boolean']>;
    gmo?: Maybe<Scalars['Boolean']>;
    governanceScore?: Maybe<Scalars['Float']>;
    highestControversy?: Maybe<Scalars['Float']>;
    maxAge?: Maybe<Scalars['Float']>;
    militaryContract?: Maybe<Scalars['Boolean']>;
    nuclear?: Maybe<Scalars['Boolean']>;
    palmOil?: Maybe<Scalars['Boolean']>;
    peerCount?: Maybe<Scalars['Float']>;
    peerEnvironmentPerformance?: Maybe<Calculation>;
    peerEsgScorePerformance?: Maybe<Calculation>;
    peerGovernancePerformance?: Maybe<Calculation>;
    peerGroup?: Maybe<Scalars['String']>;
    peerHighestControversyPerformance?: Maybe<Calculation>;
    peerSocialPerformance?: Maybe<Calculation>;
    percentile?: Maybe<Scalars['Float']>;
    pesticides?: Maybe<Scalars['Boolean']>;
    ratingMonth?: Maybe<Scalars['Float']>;
    ratingYear?: Maybe<Scalars['Float']>;
    relatedControversy?: Maybe<Array<Maybe<Scalars['String']>>>;
    smallArms?: Maybe<Scalars['Boolean']>;
    socialScore?: Maybe<Scalars['Float']>;
    tobacco?: Maybe<Scalars['Boolean']>;
    totalEsg?: Maybe<Scalars['Float']>;
};

export type FinancialData = {
    __typename?: 'FinancialData';
    currentPrice?: Maybe<Scalars['Float']>;
    currentRatio?: Maybe<Scalars['Float']>;
    debtToEquity?: Maybe<Scalars['Float']>;
    ebitda?: Maybe<Scalars['Float']>;
    ebitdaMargins?: Maybe<Scalars['Float']>;
    financialCurrency?: Maybe<Scalars['String']>;
    freeCashflow?: Maybe<Scalars['Float']>;
    grossMargins?: Maybe<Scalars['Float']>;
    grossProfits?: Maybe<Scalars['Float']>;
    FloatOfAnalystOpinions?: Maybe<Scalars['Float']>;
    operatingCashflow?: Maybe<Scalars['Float']>;
    operatingMargins?: Maybe<Scalars['Float']>;
    profitMargins?: Maybe<Scalars['Float']>;
    quickRatio?: Maybe<Scalars['Float']>;
    recommendationKey?: Maybe<Scalars['String']>;
    recommendationMean?: Maybe<Scalars['Float']>;
    returnOnAssets?: Maybe<Scalars['Float']>;
    returnOnEquity?: Maybe<Scalars['Float']>;
    revenueGrowth?: Maybe<Scalars['Float']>;
    revenuePerShare?: Maybe<Scalars['Float']>;
    targetHighPrice?: Maybe<Scalars['Float']>;
    targetLowPrice?: Maybe<Scalars['Float']>;
    targetMeanPrice?: Maybe<Scalars['Float']>;
    targetMedianPrice?: Maybe<Scalars['Float']>;
    totalCash?: Maybe<Scalars['Float']>;
    totalCashPerShare?: Maybe<Scalars['Float']>;
    totalDebt?: Maybe<Scalars['Float']>;
    totalRevenue?: Maybe<Scalars['Float']>;
};

export type FinancialReportNames = {
    __typename?: 'FinancialReportNames';
    collection?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
};

export type FinancialsChart = {
    __typename?: 'FinancialsChart';
    quarterly?: Maybe<FinancialsChartData>;
    yearly?: Maybe<FinancialsChartData>;
};

export type FinancialsChartData = {
    __typename?: 'FinancialsChartData';
    categories?: Maybe<Array<Maybe<Scalars['String']>>>;
    series?: Maybe<Array<Maybe<Series>>>;
};

export type GrowthEstimates = {
    __typename?: 'GrowthEstimates';
    CurrentQtr?: Maybe<Scalars['String']>;
    CurrentQtrPrct?: Maybe<Scalars['Float']>;
    CurrentYear?: Maybe<Scalars['String']>;
    CurrentYearPrct?: Maybe<Scalars['Float']>;
    NextFiveYearsperannum?: Maybe<Scalars['String']>;
    NextFiveYearsperannumPrct?: Maybe<Scalars['Float']>;
    NextQtr?: Maybe<Scalars['String']>;
    NextQtrPrct?: Maybe<Scalars['Float']>;
    NextYear?: Maybe<Scalars['String']>;
    NextYearPrct?: Maybe<Scalars['Float']>;
    PastFiveYearsperannum?: Maybe<Scalars['String']>;
    PastFiveYearsperannumPrct?: Maybe<Scalars['Float']>;
    name?: Maybe<Scalars['String']>;
};

export type IncomeStatement = {
    __typename?: 'IncomeStatement';
    incomeStatementHistoryQuarterly: Array<Maybe<IncomeStatementData>>;
    incomeStatementHistoryYearly?: Maybe<Array<Maybe<IncomeStatementData>>>;
};

export type IncomeStatementData = {
    __typename?: 'IncomeStatementData';
    costOfRevenue?: Maybe<Scalars['Float']>;
    discontinuedOperations?: Maybe<Scalars['Float']>;
    ebit?: Maybe<Scalars['Float']>;
    effectOfAccountingCharges?: Maybe<Scalars['Float']>;
    endDate?: Maybe<Scalars['Float']>;
    extraordinaryItems?: Maybe<Scalars['Float']>;
    grossProfit?: Maybe<Scalars['Float']>;
    incomeBeforeTax?: Maybe<Scalars['Float']>;
    incomeTaxExpense?: Maybe<Scalars['Float']>;
    interestExpense?: Maybe<Scalars['Float']>;
    netIncome?: Maybe<Scalars['Float']>;
    netIncomeApplicableToCommonShares?: Maybe<Scalars['Float']>;
    netIncomeFromContinuingOps?: Maybe<Scalars['Float']>;
    operatingIncome?: Maybe<Scalars['Float']>;
    otherOperatingExpenses?: Maybe<Scalars['Float']>;
    researchDevelopment?: Maybe<Scalars['Float']>;
    sellingGeneralAdministrative?: Maybe<Scalars['Float']>;
    totalOperatingExpenses?: Maybe<Scalars['Float']>;
    totalOtherIncomeExpenseNet?: Maybe<Scalars['Float']>;
    totalRevenue?: Maybe<Scalars['Float']>;
};

export type Metric = {
    __typename?: 'Metric';
    FiveDayPriceReturnDaily?: Maybe<Scalars['Float']>;
    FiveTwoWeekHigh?: Maybe<Scalars['Float']>;
    FiveTwoWeekHighDate?: Maybe<Scalars['String']>;
    FiveTwoWeekLow?: Maybe<Scalars['Float']>;
    FiveTwoWeekLowDate?: Maybe<Scalars['String']>;
    FiveTwoWeekPriceReturnDaily?: Maybe<Scalars['Float']>;
    OneDayAverageTradingVolume?: Maybe<Scalars['Float']>;
    OneThreeWeekPriceReturnDaily?: Maybe<Scalars['Float']>;
    ThreeMonthAverageTradingVolume?: Maybe<Scalars['Float']>;
    TwoSixWeekPriceReturnDaily?: Maybe<Scalars['Float']>;
    assetTurnoverAnnual?: Maybe<Scalars['Float']>;
    assetTurnoverTTM?: Maybe<Scalars['Float']>;
    beta?: Maybe<Scalars['Float']>;
    bookValuePerShareAnnual?: Maybe<Scalars['Float']>;
    bookValuePerShareQuarterly?: Maybe<Scalars['Float']>;
    bookValueShareGrowthFiveY?: Maybe<Scalars['Float']>;
    capitalSpendingGrowthFiveY?: Maybe<Scalars['Float']>;
    cashFlowPerShareAnnual?: Maybe<Scalars['Float']>;
    cashFlowPerShareTTM?: Maybe<Scalars['Float']>;
    cashPerSharePerShareAnnual?: Maybe<Scalars['Float']>;
    cashPerSharePerShareQuarterly?: Maybe<Scalars['Float']>;
    currentEvfreeCashFlowAnnual?: Maybe<Scalars['Float']>;
    currentEvfreeCashFlowTTM?: Maybe<Scalars['Float']>;
    currentRatioAnnual?: Maybe<Scalars['Float']>;
    currentRatioQuarterly?: Maybe<Scalars['Float']>;
    ebitdPerShareTTM?: Maybe<Scalars['Float']>;
    ebitdaCagrFiveY?: Maybe<Scalars['Float']>;
    ebitdaInterimCagrFiveY?: Maybe<Scalars['Float']>;
    epsBasicExclExtraItemsAnnual?: Maybe<Scalars['Float']>;
    epsBasicExclExtraItemsTTM?: Maybe<Scalars['Float']>;
    epsExclExtraItemsAnnual?: Maybe<Scalars['Float']>;
    epsExclExtraItemsTTM?: Maybe<Scalars['Float']>;
    epsGrowthFiveY?: Maybe<Scalars['Float']>;
    epsGrowthQuarterlyYoy?: Maybe<Scalars['Float']>;
    epsGrowthTTMYoy?: Maybe<Scalars['Float']>;
    epsGrowthThreeY?: Maybe<Scalars['Float']>;
    epsInclExtraItemsAnnual?: Maybe<Scalars['Float']>;
    epsInclExtraItemsTTM?: Maybe<Scalars['Float']>;
    epsNormalizedAnnual?: Maybe<Scalars['Float']>;
    focfCagrFiveY?: Maybe<Scalars['Float']>;
    freeCashFlowAnnual?: Maybe<Scalars['Float']>;
    freeCashFlowPerShareTTM?: Maybe<Scalars['Float']>;
    freeCashFlowTTM?: Maybe<Scalars['Float']>;
    freeOperatingCashFlowrevenueFiveY?: Maybe<Scalars['Float']>;
    freeOperatingCashFlowrevenueTTM?: Maybe<Scalars['Float']>;
    grossMarginAnnual?: Maybe<Scalars['Float']>;
    grossMarginFiveY?: Maybe<Scalars['Float']>;
    grossMarginTTM?: Maybe<Scalars['Float']>;
    inventoryTurnoverAnnual?: Maybe<Scalars['Float']>;
    inventoryTurnoverTTM?: Maybe<Scalars['Float']>;
    longTermDebtequityAnnual?: Maybe<Scalars['Float']>;
    longTermDebtequityQuarterly?: Maybe<Scalars['Float']>;
    marketCapitalization?: Maybe<Scalars['Float']>;
    monthToDatePriceReturnDaily?: Maybe<Scalars['Float']>;
    netDebtAnnual?: Maybe<Scalars['Float']>;
    netDebtInterim?: Maybe<Scalars['Float']>;
    netIncomeEmployeeAnnual?: Maybe<Scalars['Float']>;
    netIncomeEmployeeTTM?: Maybe<Scalars['Float']>;
    netInterestCoverageAnnual?: Maybe<Scalars['Float']>;
    netInterestCoverageTTM?: Maybe<Scalars['Float']>;
    netMarginGrowthFiveY?: Maybe<Scalars['Float']>;
    netProfitMarginAnnual?: Maybe<Scalars['Float']>;
    netProfitMarginFiveY?: Maybe<Scalars['Float']>;
    netProfitMarginTTM?: Maybe<Scalars['Float']>;
    operatingMarginAnnual?: Maybe<Scalars['Float']>;
    operatingMarginFiveY?: Maybe<Scalars['Float']>;
    operatingMarginTTM?: Maybe<Scalars['Float']>;
    payoutRatioAnnual?: Maybe<Scalars['Float']>;
    payoutRatioTTM?: Maybe<Scalars['Float']>;
    pbAnnual?: Maybe<Scalars['Float']>;
    pbQuarterly?: Maybe<Scalars['Float']>;
    pcfShareTTM?: Maybe<Scalars['Float']>;
    peBasicExclExtraTTM?: Maybe<Scalars['Float']>;
    peExclExtraAnnual?: Maybe<Scalars['Float']>;
    peExclExtraHighTTM?: Maybe<Scalars['Float']>;
    peExclExtraTTM?: Maybe<Scalars['Float']>;
    peExclLowTTM?: Maybe<Scalars['Float']>;
    peInclExtraTTM?: Maybe<Scalars['Float']>;
    peNormalizedAnnual?: Maybe<Scalars['Float']>;
    pfcfShareAnnual?: Maybe<Scalars['Float']>;
    pfcfShareTTM?: Maybe<Scalars['Float']>;
    pretaxMarginAnnual?: Maybe<Scalars['Float']>;
    pretaxMarginFiveY?: Maybe<Scalars['Float']>;
    pretaxMarginTTM?: Maybe<Scalars['Float']>;
    priceRelativeToSPFiveFiveTwoWeek?: Maybe<Scalars['Float']>;
    priceRelativeToSPFiveFourWeek?: Maybe<Scalars['Float']>;
    priceRelativeToSPFiveOneThreeWeek?: Maybe<Scalars['Float']>;
    priceRelativeToSPFiveTwoSixWeek?: Maybe<Scalars['Float']>;
    priceRelativeToSPFiveYtd?: Maybe<Scalars['Float']>;
    psAnnual?: Maybe<Scalars['Float']>;
    psTTM?: Maybe<Scalars['Float']>;
    ptbvAnnual?: Maybe<Scalars['Float']>;
    ptbvQuarterly?: Maybe<Scalars['Float']>;
    quickRatioAnnual?: Maybe<Scalars['Float']>;
    quickRatioQuarterly?: Maybe<Scalars['Float']>;
    receivablesTurnoverAnnual?: Maybe<Scalars['Float']>;
    receivablesTurnoverTTM?: Maybe<Scalars['Float']>;
    revenueEmployeeAnnual?: Maybe<Scalars['Float']>;
    revenueEmployeeTTM?: Maybe<Scalars['Float']>;
    revenueGrowthFiveY?: Maybe<Scalars['Float']>;
    revenueGrowthQuarterlyYoy?: Maybe<Scalars['Float']>;
    revenueGrowthTTMYoy?: Maybe<Scalars['Float']>;
    revenueGrowthThreeY?: Maybe<Scalars['Float']>;
    revenuePerShareAnnual?: Maybe<Scalars['Float']>;
    revenuePerShareTTM?: Maybe<Scalars['Float']>;
    revenueShareGrowthFiveY?: Maybe<Scalars['Float']>;
    roaRfy?: Maybe<Scalars['Float']>;
    roaaFiveY?: Maybe<Scalars['Float']>;
    roaeFiveY?: Maybe<Scalars['Float']>;
    roaeTTM?: Maybe<Scalars['Float']>;
    roeRfy?: Maybe<Scalars['Float']>;
    roeTTM?: Maybe<Scalars['Float']>;
    roiAnnual?: Maybe<Scalars['Float']>;
    roiFiveY?: Maybe<Scalars['Float']>;
    roiTTM?: Maybe<Scalars['Float']>;
    tangibleBookValuePerShareAnnual?: Maybe<Scalars['Float']>;
    tangibleBookValuePerShareQuarterly?: Maybe<Scalars['Float']>;
    tbvCagrFiveY?: Maybe<Scalars['Float']>;
    totalDebtCagrFiveY?: Maybe<Scalars['Float']>;
    totalDebttotalEquityAnnual?: Maybe<Scalars['Float']>;
    totalDebttotalEquityQuarterly?: Maybe<Scalars['Float']>;
    yearToDatePriceReturnDaily?: Maybe<Scalars['Float']>;
};

export type Mutation = {
    __typename?: 'Mutation';
    updateUserData?: Maybe<User>;
    registerUser?: Maybe<User>;
    updateUserPrivateData?: Maybe<UserPrivateData>;
    createStockWatchlist?: Maybe<StockWatchlist>;
    renameStockWatchlist?: Maybe<Scalars['Boolean']>;
    deleteWatchlist?: Maybe<Scalars['Boolean']>;
    addStockIntoStockWatchlist?: Maybe<Summary>;
    removeStockFromStockWatchlist?: Maybe<Scalars['Boolean']>;
};


export type MutationUpdateUserDataArgs = {
    user?: Maybe<UserInput>;
};


export type MutationRegisterUserArgs = {
    user?: Maybe<UserInput>;
};


export type MutationUpdateUserPrivateDataArgs = {
    uid?: Maybe<Scalars['String']>;
    userPrivateDataInput?: Maybe<UserPrivateDataInput>;
};


export type MutationCreateStockWatchlistArgs = {
    identifier: StockWatchlistIdentifier;
};


export type MutationRenameStockWatchlistArgs = {
    identifier: StockWatchlistIdentifier;
};


export type MutationDeleteWatchlistArgs = {
    identifier: StockWatchlistIdentifier;
};


export type MutationAddStockIntoStockWatchlistArgs = {
    identifier: StockWatchlistIdentifier;
};


export type MutationRemoveStockFromStockWatchlistArgs = {
    identifier: StockWatchlistIdentifier;
};

export type NewsArticle = {
    __typename?: 'NewsArticle';
    datetime?: Maybe<Scalars['Float']>;
    headline?: Maybe<Scalars['String']>;
    image?: Maybe<Scalars['String']>;
    sourceName?: Maybe<Scalars['String']>;
    summary?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
};

export type PageViews = {
    __typename?: 'PageViews';
    longTermTrend?: Maybe<Scalars['String']>;
    midTermTrend?: Maybe<Scalars['String']>;
    shortTermTrend?: Maybe<Scalars['String']>;
};

export type Query = {
    __typename?: 'Query';
    queryUser?: Maybe<User>;
    queryUserStockWatchlists?: Maybe<Array<Maybe<StockWatchlist>>>;
    queryStockDetails?: Maybe<StockDetails>;
};


export type QueryQueryUserArgs = {
    uid: Scalars['String'];
};


export type QueryQueryUserStockWatchlistsArgs = {
    uid: Scalars['String'];
};


export type QueryQueryStockDetailsArgs = {
    symbol: Scalars['String'];
};

export type Recommendations = {
    __typename?: 'Recommendations';
    buy?: Maybe<Scalars['Float']>;
    hold?: Maybe<Scalars['Float']>;
    period?: Maybe<Scalars['String']>;
    sell?: Maybe<Scalars['Float']>;
    strongBuy?: Maybe<Scalars['Float']>;
    strongSell?: Maybe<Scalars['Float']>;
    symbol?: Maybe<Scalars['String']>;
};

export type RevenueEstimate = {
    __typename?: 'RevenueEstimate';
    AvgEstimate?: Maybe<Scalars['String']>;
    AvgEstimateNumber?: Maybe<Scalars['Float']>;
    HighEstimate?: Maybe<Scalars['String']>;
    HighEstimateNumber?: Maybe<Scalars['Float']>;
    LowEstimate?: Maybe<Scalars['String']>;
    LowEstimateNumber?: Maybe<Scalars['Float']>;
    NoofAnalysts?: Maybe<Scalars['Float']>;
    SalesGrowthyearest?: Maybe<Scalars['String']>;
    SalesGrowthyearestNumber?: Maybe<Scalars['Float']>;
    YearAgoSales?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
};

export type Series = {
    __typename?: 'Series';
    data?: Maybe<Array<Maybe<Scalars['Float']>>>;
    name?: Maybe<Scalars['String']>;
};

export type Stats = {
    __typename?: 'Stats';
    AvgVolOnedayThree?: Maybe<Scalars['String']>;
    BookValuePerSharemrq?: Maybe<Scalars['String']>;
    CurrentRatiomrq?: Maybe<Scalars['String']>;
    DilutedEPSttm?: Maybe<Scalars['String']>;
    DividendDateThree?: Maybe<Scalars['String']>;
    EBITDA?: Maybe<Scalars['String']>;
    EnterpriseValueEBITDASix?: Maybe<Array<Maybe<Scalars['String']>>>;
    EnterpriseValueRevenueThree?: Maybe<Array<Maybe<Scalars['String']>>>;
    EnterpriseValueThree?: Maybe<Array<Maybe<Scalars['String']>>>;
    FiveDayMovingAverageThree?: Maybe<Scalars['String']>;
    FiveTwoWeekChangeThree?: Maybe<Scalars['String']>;
    FiveTwoWeekHighThree?: Maybe<Scalars['String']>;
    FiveTwoWeekLowThree?: Maybe<Scalars['String']>;
    FiveYearAverageDividendYieldFour?: Maybe<Scalars['String']>;
    Float?: Maybe<Scalars['String']>;
    ForwardAnnualDividendYieldFour?: Maybe<Scalars['String']>;
    ForwardPEOne?: Maybe<Array<Maybe<Scalars['String']>>>;
    GrossProfitttm?: Maybe<Scalars['String']>;
    LastSplitDateThree?: Maybe<Scalars['String']>;
    LastSplitFactorTwo?: Maybe<Scalars['String']>;
    LeveredFreeCashFlowttm?: Maybe<Scalars['String']>;
    MarketCapintradayFive?: Maybe<Array<Maybe<Scalars['String']>>>;
    MostRecentQuartermrq?: Maybe<Scalars['String']>;
    NetIncomeAvitoCommonttm?: Maybe<Scalars['String']>;
    OperatingMarginttm?: Maybe<Scalars['String']>;
    PEGRatioFiveyrexpectedOne?: Maybe<Array<Maybe<Scalars['String']>>>;
    PayoutRatioFour?: Maybe<Scalars['String']>;
    PctHeldbyInsidersOne?: Maybe<Scalars['String']>;
    PctHeldbyInstitutionsOne?: Maybe<Scalars['String']>;
    PriceBookmrq?: Maybe<Array<Maybe<Scalars['String']>>>;
    PriceSalesttm?: Maybe<Array<Maybe<Scalars['String']>>>;
    QuarterlyEarningsGrowthyoy?: Maybe<Scalars['String']>;
    QuarterlyRevenueGrowthyoy?: Maybe<Scalars['String']>;
    ReturnonEquityttm?: Maybe<Scalars['String']>;
    RevenuePerSharettm?: Maybe<Scalars['String']>;
    SPFiveFiveTwoWeekChangeThree?: Maybe<Scalars['String']>;
    SharesOutstandingFive?: Maybe<Scalars['String']>;
    SharesShortAugOneThreeTwoTwoFour?: Maybe<Scalars['String']>;
    SharesShortpriormonthJulOneFourTwoTwoFour?: Maybe<Scalars['String']>;
    ShortPctofFloatAugOneThreeTwoTwoFour?: Maybe<Scalars['String']>;
    ShortPctofSharesOutstandingAugOneThreeTwoTwoFour?: Maybe<Scalars['String']>;
    ShortRatioAugOneThreeTwoTwoFour?: Maybe<Scalars['String']>;
    TotalCashPerSharemrq?: Maybe<Scalars['String']>;
    TotalDebtEquitymrq?: Maybe<Scalars['String']>;
    TotalDebtmrq?: Maybe<Scalars['String']>;
    TrailingPE?: Maybe<Array<Maybe<Scalars['String']>>>;
    TwoDayMovingAverageThree?: Maybe<Scalars['String']>;
    dateTime?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type StockDetails = {
    __typename?: 'StockDetails';
    id: Scalars['String'];
    analysis: Analysis;
    balanceSheet: BalanceSheet;
    cashFlow: CashFlow;
    incomeStatement: IncomeStatement;
    financialReports: Array<Maybe<FinancialReportNames>>;
    stats: Stats;
    recommendation: Array<Maybe<Recommendations>>;
    stockNews: Array<Maybe<NewsArticle>>;
    companyData: CompanyData;
    summary: Summary;
    metric: Metric;
    dividends: Dividens;
};

export type StockWatchlist = {
    __typename?: 'StockWatchlist';
    id: Scalars['String'];
    name: Scalars['String'];
    timestamp: Scalars['Float'];
    userId: Scalars['String'];
    stocks: Array<Maybe<Scalars['String']>>;
    summary: Array<Maybe<Summary>>;
};

export type StockWatchlistIdentifier = {
    userId: Scalars['String'];
    id?: Maybe<Scalars['String']>;
    additionalData?: Maybe<Scalars['String']>;
};

export type Summary = {
    __typename?: 'Summary';
    AvgVolume?: Maybe<Scalars['String']>;
    EPSTTM?: Maybe<Scalars['String']>;
    EarningsDate?: Maybe<Scalars['String']>;
    ExDividendDate?: Maybe<Scalars['String']>;
    FiveTwoWeekRange?: Maybe<Scalars['String']>;
    ForwardDividendYield?: Maybe<Scalars['String']>;
    OneyTargetEst?: Maybe<Scalars['Float']>;
    Open?: Maybe<Scalars['String']>;
    PERatioTTM?: Maybe<Scalars['String']>;
    Volume?: Maybe<Scalars['String']>;
    currency?: Maybe<Scalars['String']>;
    industry?: Maybe<Scalars['String']>;
    logo_url?: Maybe<Scalars['String']>;
    marketPrice?: Maybe<Scalars['Float']>;
    previousClose?: Maybe<Scalars['Float']>;
    recommendationKey?: Maybe<Scalars['String']>;
    recommendationMean?: Maybe<Scalars['Float']>;
    sector?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
    targetEstOneyPercent?: Maybe<Scalars['Float']>;
    weekRangeFiveTwoMax?: Maybe<Scalars['Float']>;
    weekRangeFiveTwoMin?: Maybe<Scalars['Float']>;
    currencySymbol?: Maybe<Scalars['String']>;
    shortName?: Maybe<Scalars['String']>;
    longName?: Maybe<Scalars['String']>;
    marketCap?: Maybe<Scalars['Float']>;
};

export type SummaryProfile = {
    __typename?: 'SummaryProfile';
    address1?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    country?: Maybe<Scalars['String']>;
    fax?: Maybe<Scalars['String']>;
    fullTimeEmployees?: Maybe<Scalars['Float']>;
    industry?: Maybe<Scalars['String']>;
    logo_url?: Maybe<Scalars['String']>;
    longBusinessSummary?: Maybe<Scalars['String']>;
    phone?: Maybe<Scalars['String']>;
    sector?: Maybe<Scalars['String']>;
    state?: Maybe<Scalars['String']>;
    website?: Maybe<Scalars['String']>;
    zip?: Maybe<Scalars['String']>;
};

export type UpgradeDowngradeHistory = {
    __typename?: 'UpgradeDowngradeHistory';
    history?: Maybe<Array<Maybe<UpgradeDowngradeHistoryData>>>;
};

export type UpgradeDowngradeHistoryData = {
    __typename?: 'UpgradeDowngradeHistoryData';
    action?: Maybe<Scalars['String']>;
    epochGradeDate?: Maybe<Scalars['Float']>;
    firm?: Maybe<Scalars['String']>;
    fromGrade?: Maybe<Scalars['String']>;
    toGrade?: Maybe<Scalars['String']>;
};


export type User = {
    __typename?: 'User';
    uid: Scalars['ID'];
    displayName: Scalars['String'];
    email: Scalars['String'];
    photoURL?: Maybe<Scalars['String']>;
    providerId?: Maybe<Scalars['String']>;
    nickname?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
    activity: Scalars['String'];
    status: Scalars['String'];
    stockWatchlist: Array<Maybe<StockWatchlist>>;
    userPrivateData?: Maybe<UserPrivateData>;
};

export type UserInput = {
    uid: Scalars['ID'];
    displayName?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    photoURL?: Maybe<Scalars['String']>;
    providerId?: Maybe<Scalars['String']>;
    nickname?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
    activity?: Maybe<Scalars['String']>;
};

export type UserPrivateData = {
    __typename?: 'UserPrivateData';
    finnhubKey?: Maybe<Scalars['String']>;
    roles?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UserPrivateDataInput = {
    finnhubKey?: Maybe<Scalars['String']>;
};

export type BalanceSheetDataFragmentFragment = (
    { __typename?: 'BalanceSheetData' }
    & Pick<BalanceSheetData, 'accountsPayable' | 'cash' | 'commonStock' | 'endDate' | 'inventory' | 'longTermDebt' | 'longTermInvestments' | 'maxAge' | 'netReceivables' | 'netTangibleAssets' | 'otherAssets' | 'otherCurrentAssets' | 'otherCurrentLiab' | 'otherLiab' | 'otherStockholderEquity' | 'propertyPlantEquipment' | 'retainedEarnings' | 'shortLongTermDebt' | 'shortTermInvestments' | 'totalAssets' | 'totalCurrentAssets' | 'totalCurrentLiabilities' | 'totalLiab' | 'totalStockholderEquity' | 'treasuryStock'>
    );

export type CashFlowDataFragmentFragment = (
    { __typename?: 'CashFlowData' }
    & Pick<CashFlowData, 'capitalExpenditures' | 'changeInCash' | 'changeToAccountReceivables' | 'changeToInventory' | 'changeToLiabilities' | 'changeToNetincome' | 'changeToOperatingActivities' | 'depreciation' | 'dividendsPaid' | 'endDate' | 'investments' | 'maxAge' | 'netBorrowings' | 'netIncome' | 'otherCashflowsFromFinancingActivities' | 'otherCashflowsFromInvestingActivities' | 'repurchaseOfStock' | 'totalCashFromFinancingActivities' | 'totalCashFromOperatingActivities' | 'totalCashflowsFromInvestingActivities'>
    );

export type IncomeStatementDataFragment = (
    { __typename?: 'IncomeStatementData' }
    & Pick<IncomeStatementData, 'costOfRevenue' | 'discontinuedOperations' | 'ebit' | 'effectOfAccountingCharges' | 'endDate' | 'extraordinaryItems' | 'grossProfit' | 'incomeBeforeTax' | 'incomeTaxExpense' | 'interestExpense' | 'netIncome' | 'netIncomeApplicableToCommonShares' | 'netIncomeFromContinuingOps' | 'operatingIncome' | 'otherOperatingExpenses' | 'researchDevelopment' | 'sellingGeneralAdministrative' | 'totalOperatingExpenses' | 'totalOtherIncomeExpenseNet' | 'totalRevenue'>
    );

export type QueryStockDetailsQueryVariables = Exact<{
    symbol: Scalars['String'];
}>;


export type QueryStockDetailsQuery = (
    { __typename?: 'Query' }
    & {
    queryStockDetails?: Maybe<(
        { __typename?: 'StockDetails' }
        & Pick<StockDetails, 'id'>
        & {
        analysis: (
            { __typename?: 'Analysis' }
            & {
            GrowthEstimates: (
                { __typename?: 'GrowthEstimates' }
                & Pick<GrowthEstimates, 'CurrentQtr' | 'CurrentQtrPrct' | 'CurrentYear' | 'CurrentYearPrct' | 'NextFiveYearsperannum' | 'NextFiveYearsperannumPrct' | 'NextQtr' | 'NextQtrPrct' | 'NextYear' | 'NextYearPrct' | 'PastFiveYearsperannum' | 'PastFiveYearsperannumPrct' | 'name'>
                ), RevenueEstimate: Array<Maybe<(
                { __typename?: 'RevenueEstimate' }
                & Pick<RevenueEstimate, 'AvgEstimate' | 'AvgEstimateNumber' | 'HighEstimate' | 'HighEstimateNumber' | 'LowEstimate' | 'LowEstimateNumber' | 'NoofAnalysts' | 'SalesGrowthyearest' | 'SalesGrowthyearestNumber' | 'YearAgoSales' | 'name'>
                )>>
        }
            ), balanceSheet: (
            { __typename?: 'BalanceSheet' }
            & {
            balanceSheetHistoryQuarterly: Array<Maybe<(
                { __typename?: 'BalanceSheetData' }
                & BalanceSheetDataFragmentFragment
                )>>, balanceSheetHistoryYearly: Array<Maybe<(
                { __typename?: 'BalanceSheetData' }
                & BalanceSheetDataFragmentFragment
                )>>
        }
            ), cashFlow: (
            { __typename?: 'CashFlow' }
            & {
            cashflowStatementHistoryQuarterly?: Maybe<Array<Maybe<(
                { __typename?: 'CashFlowData' }
                & CashFlowDataFragmentFragment
                )>>>, cashflowStatementHistoryYearly?: Maybe<Array<Maybe<(
                { __typename?: 'CashFlowData' }
                & CashFlowDataFragmentFragment
                )>>>
        }
            ), incomeStatement: (
            { __typename?: 'IncomeStatement' }
            & {
            incomeStatementHistoryQuarterly: Array<Maybe<(
                { __typename?: 'IncomeStatementData' }
                & IncomeStatementDataFragment
                )>>, incomeStatementHistoryYearly?: Maybe<Array<Maybe<(
                { __typename?: 'IncomeStatementData' }
                & IncomeStatementDataFragment
                )>>>
        }
            ), financialReports: Array<Maybe<(
            { __typename?: 'FinancialReportNames' }
            & Pick<FinancialReportNames, 'collection' | 'name'>
            )>>, stats: (
            { __typename?: 'Stats' }
            & Pick<Stats, 'MarketCapintradayFive' | 'PriceSalesttm' | 'LeveredFreeCashFlowttm'>
            ), recommendation: Array<Maybe<(
            { __typename?: 'Recommendations' }
            & Pick<Recommendations, 'buy' | 'hold' | 'period' | 'sell' | 'strongBuy' | 'strongSell' | 'symbol'>
            )>>, stockNews: Array<Maybe<(
            { __typename?: 'NewsArticle' }
            & Pick<NewsArticle, 'datetime' | 'headline' | 'image' | 'sourceName' | 'summary' | 'url'>
            )>>, companyData: (
            { __typename?: 'CompanyData' }
            & {
            defaultKeyStatistics?: Maybe<(
                { __typename?: 'DefaultKeyStatistics' }
                & Pick<DefaultKeyStatistics, 'FiveTwoWeekChange' | 'SandPFiveTwoWeekChange' | 'bookValue' | 'dateShortInterest' | 'earningsQuarterlyGrowth' | 'enterpriseToEbitda' | 'enterpriseToRevenue' | 'enterpriseValue' | 'fiveYearAverageReturn' | 'floatShares' | 'forwardEps' | 'forwardPE' | 'heldPercentInsiders' | 'heldPercentInstitutions' | 'lastFiscalYearEnd' | 'lastSplitDate' | 'lastSplitFactor' | 'mostRecentQuarter' | 'netIncomeToCommon' | 'nextFiscalYearEnd' | 'pegRatio' | 'priceHint' | 'priceToBook' | 'profitMargins' | 'sharesOutstanding' | 'sharesShort' | 'sharesShortPreviousMonthDate' | 'sharesShortPriorMonth' | 'shortRatio' | 'trailingEps'>
                )>, earnings?: Maybe<(
                { __typename?: 'Earnings' }
                & Pick<Earnings, 'financialCurrency'>
                & {
                earningsChart?: Maybe<(
                    { __typename?: 'EarningsChart' }
                    & Pick<EarningsChart, 'currentQuarterEstimate' | 'currentQuarterEstimateDate' | 'currentQuarterEstimateYear' | 'earningsDate'>
                    & {
                    quarterly?: Maybe<Array<Maybe<(
                        { __typename?: 'EarningsChartData' }
                        & Pick<EarningsChartData, 'actual' | 'date' | 'estimate'>
                        )>>>
                }
                    )>, financialsChart?: Maybe<(
                    { __typename?: 'FinancialsChart' }
                    & {
                    quarterly?: Maybe<(
                        { __typename?: 'FinancialsChartData' }
                        & Pick<FinancialsChartData, 'categories'>
                        & {
                        series?: Maybe<Array<Maybe<(
                            { __typename?: 'Series' }
                            & Pick<Series, 'data' | 'name'>
                            )>>>
                    }
                        )>, yearly?: Maybe<(
                        { __typename?: 'FinancialsChartData' }
                        & Pick<FinancialsChartData, 'categories'>
                        & {
                        series?: Maybe<Array<Maybe<(
                            { __typename?: 'Series' }
                            & Pick<Series, 'data' | 'name'>
                            )>>>
                    }
                        )>
                }
                    )>
            }
                )>, financialData?: Maybe<(
                { __typename?: 'FinancialData' }
                & Pick<FinancialData, 'currentPrice' | 'currentRatio' | 'debtToEquity' | 'ebitda' | 'ebitdaMargins' | 'financialCurrency' | 'freeCashflow' | 'grossMargins' | 'grossProfits' | 'FloatOfAnalystOpinions' | 'operatingCashflow' | 'operatingMargins' | 'profitMargins' | 'quickRatio' | 'recommendationKey' | 'recommendationMean' | 'returnOnAssets' | 'returnOnEquity' | 'revenueGrowth' | 'revenuePerShare' | 'targetHighPrice' | 'targetLowPrice' | 'targetMeanPrice' | 'targetMedianPrice' | 'totalCash' | 'totalCashPerShare' | 'totalDebt' | 'totalRevenue'>
                )>, pageViews?: Maybe<(
                { __typename?: 'PageViews' }
                & Pick<PageViews, 'longTermTrend' | 'midTermTrend' | 'shortTermTrend'>
                )>, summaryProfile?: Maybe<(
                { __typename?: 'SummaryProfile' }
                & Pick<SummaryProfile, 'address1' | 'city' | 'country' | 'fax' | 'fullTimeEmployees' | 'industry' | 'logo_url' | 'longBusinessSummary' | 'phone' | 'sector' | 'state' | 'website' | 'zip'>
                )>, upgradeDowngradeHistory?: Maybe<(
                { __typename?: 'UpgradeDowngradeHistory' }
                & {
                history?: Maybe<Array<Maybe<(
                    { __typename?: 'UpgradeDowngradeHistoryData' }
                    & Pick<UpgradeDowngradeHistoryData, 'action' | 'epochGradeDate' | 'firm' | 'fromGrade' | 'toGrade'>
                    )>>>
            }
                )>
        }
            ), summary: (
            { __typename?: 'Summary' }
            & Pick<Summary, 'AvgVolume' | 'EPSTTM' | 'EarningsDate' | 'ExDividendDate' | 'FiveTwoWeekRange' | 'ForwardDividendYield' | 'OneyTargetEst' | 'Open' | 'PERatioTTM' | 'Volume' | 'currency' | 'industry' | 'logo_url' | 'marketPrice' | 'marketCap' | 'previousClose' | 'recommendationKey' | 'recommendationMean' | 'sector' | 'symbol' | 'targetEstOneyPercent' | 'weekRangeFiveTwoMax' | 'weekRangeFiveTwoMin' | 'currencySymbol' | 'shortName' | 'longName'>
            ), metric: (
            { __typename?: 'Metric' }
            & Pick<Metric, 'FiveDayPriceReturnDaily' | 'FiveTwoWeekHigh' | 'FiveTwoWeekHighDate' | 'FiveTwoWeekLow' | 'FiveTwoWeekLowDate' | 'FiveTwoWeekPriceReturnDaily' | 'OneDayAverageTradingVolume' | 'OneThreeWeekPriceReturnDaily' | 'ThreeMonthAverageTradingVolume' | 'TwoSixWeekPriceReturnDaily' | 'assetTurnoverAnnual' | 'assetTurnoverTTM' | 'beta' | 'bookValuePerShareAnnual' | 'bookValuePerShareQuarterly' | 'bookValueShareGrowthFiveY' | 'capitalSpendingGrowthFiveY' | 'cashFlowPerShareAnnual' | 'cashFlowPerShareTTM' | 'cashPerSharePerShareAnnual' | 'cashPerSharePerShareQuarterly' | 'currentEvfreeCashFlowAnnual' | 'currentEvfreeCashFlowTTM' | 'currentRatioAnnual' | 'currentRatioQuarterly' | 'ebitdPerShareTTM' | 'ebitdaCagrFiveY' | 'ebitdaInterimCagrFiveY' | 'epsBasicExclExtraItemsAnnual' | 'epsBasicExclExtraItemsTTM' | 'epsExclExtraItemsAnnual' | 'epsExclExtraItemsTTM' | 'epsGrowthFiveY' | 'epsGrowthQuarterlyYoy' | 'epsGrowthTTMYoy' | 'epsGrowthThreeY' | 'epsInclExtraItemsAnnual' | 'epsInclExtraItemsTTM' | 'epsNormalizedAnnual' | 'focfCagrFiveY' | 'freeCashFlowAnnual' | 'freeCashFlowPerShareTTM' | 'freeCashFlowTTM' | 'freeOperatingCashFlowrevenueFiveY' | 'freeOperatingCashFlowrevenueTTM' | 'grossMarginAnnual' | 'grossMarginFiveY' | 'grossMarginTTM' | 'inventoryTurnoverAnnual' | 'inventoryTurnoverTTM' | 'longTermDebtequityAnnual' | 'longTermDebtequityQuarterly' | 'marketCapitalization' | 'monthToDatePriceReturnDaily' | 'netDebtAnnual' | 'netDebtInterim' | 'netIncomeEmployeeAnnual' | 'netIncomeEmployeeTTM' | 'netInterestCoverageAnnual' | 'netInterestCoverageTTM' | 'netMarginGrowthFiveY' | 'netProfitMarginAnnual' | 'netProfitMarginFiveY' | 'netProfitMarginTTM' | 'operatingMarginAnnual' | 'operatingMarginFiveY' | 'operatingMarginTTM' | 'payoutRatioAnnual' | 'payoutRatioTTM' | 'pbAnnual' | 'pbQuarterly' | 'pcfShareTTM' | 'peBasicExclExtraTTM' | 'peExclExtraAnnual' | 'peExclExtraHighTTM' | 'peExclExtraTTM' | 'peExclLowTTM' | 'peInclExtraTTM' | 'peNormalizedAnnual' | 'pfcfShareAnnual' | 'pfcfShareTTM' | 'pretaxMarginAnnual' | 'pretaxMarginFiveY' | 'pretaxMarginTTM' | 'priceRelativeToSPFiveFiveTwoWeek' | 'priceRelativeToSPFiveFourWeek' | 'priceRelativeToSPFiveOneThreeWeek' | 'priceRelativeToSPFiveTwoSixWeek' | 'priceRelativeToSPFiveYtd' | 'psAnnual' | 'psTTM' | 'ptbvAnnual' | 'ptbvQuarterly' | 'quickRatioAnnual' | 'quickRatioQuarterly' | 'receivablesTurnoverAnnual' | 'receivablesTurnoverTTM' | 'revenueEmployeeAnnual' | 'revenueEmployeeTTM' | 'revenueGrowthFiveY' | 'revenueGrowthQuarterlyYoy' | 'revenueGrowthTTMYoy' | 'revenueGrowthThreeY' | 'revenuePerShareAnnual' | 'revenuePerShareTTM' | 'revenueShareGrowthFiveY' | 'roaRfy' | 'roaaFiveY' | 'roaeFiveY' | 'roaeTTM' | 'roeRfy' | 'roeTTM' | 'roiAnnual' | 'roiFiveY' | 'roiTTM' | 'tangibleBookValuePerShareAnnual' | 'tangibleBookValuePerShareQuarterly' | 'tbvCagrFiveY' | 'totalDebtCagrFiveY' | 'totalDebttotalEquityAnnual' | 'totalDebttotalEquityQuarterly' | 'yearToDatePriceReturnDaily'>
            ), dividends: (
            { __typename?: 'Dividens' }
            & Pick<Dividens, 'currentDividendYieldTTM' | 'dividendGrowthRateFiveY' | 'dividendPerShareAnnual' | 'dividendPerShareFiveY' | 'dividendYieldFiveY' | 'dividendYieldIndicatedAnnual' | 'dividendsPerShareTTM' | 'exDividendDate' | 'trailingAnnualDividendRate' | 'trailingAnnualDividendYield' | 'ForwardDividendYield'>
            )
    }
        )>
}
    );

export type QueryUserQueryVariables = Exact<{
    uid: Scalars['String'];
}>;


export type QueryUserQuery = (
    { __typename?: 'Query' }
    & {
    queryUser?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'uid' | 'displayName' | 'email' | 'photoURL' | 'nickname' | 'locale' | 'providerId' | 'activity' | 'status'>
        & {
        userPrivateData?: Maybe<(
            { __typename?: 'UserPrivateData' }
            & Pick<UserPrivateData, 'finnhubKey' | 'roles'>
            )>
    }
        )>
}
    );

export type UpdateUserPrivateDataMutationVariables = Exact<{
    uid: Scalars['String'];
    userPrivateDataInput: UserPrivateDataInput;
}>;


export type UpdateUserPrivateDataMutation = (
    { __typename?: 'Mutation' }
    & {
    updateUserPrivateData?: Maybe<(
        { __typename?: 'UserPrivateData' }
        & Pick<UserPrivateData, 'finnhubKey' | 'roles'>
        )>
}
    );

export type UpdateUserDataMutationVariables = Exact<{
    userInput: UserInput;
}>;


export type UpdateUserDataMutation = (
    { __typename?: 'Mutation' }
    & {
    updateUserData?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'uid' | 'displayName' | 'email' | 'photoURL' | 'nickname' | 'locale' | 'providerId' | 'activity' | 'status'>
        & {
        userPrivateData?: Maybe<(
            { __typename?: 'UserPrivateData' }
            & Pick<UserPrivateData, 'finnhubKey' | 'roles'>
            )>
    }
        )>
}
    );

export type RegisterUserMutationVariables = Exact<{
    userInput: UserInput;
}>;


export type RegisterUserMutation = (
    { __typename?: 'Mutation' }
    & {
    registerUser?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'uid' | 'displayName' | 'email' | 'photoURL' | 'nickname' | 'locale' | 'providerId' | 'activity' | 'status'>
        & {
        userPrivateData?: Maybe<(
            { __typename?: 'UserPrivateData' }
            & Pick<UserPrivateData, 'finnhubKey' | 'roles'>
            )>
    }
        )>
}
    );

export type StockSummaryFragmentFragment = (
    { __typename?: 'Summary' }
    & Pick<Summary, 'EPSTTM' | 'EarningsDate' | 'ExDividendDate' | 'FiveTwoWeekRange' | 'OneyTargetEst' | 'PERatioTTM' | 'currency' | 'industry' | 'logo_url' | 'marketPrice' | 'previousClose' | 'recommendationKey' | 'recommendationMean' | 'sector' | 'targetEstOneyPercent' | 'symbol' | 'weekRangeFiveTwoMax' | 'weekRangeFiveTwoMin'>
    );

export type StockWatchlistInformationFragment = (
    { __typename?: 'StockWatchlist' }
    & Pick<StockWatchlist, 'id' | 'name' | 'timestamp' | 'stocks'>
    & {
    summary: Array<Maybe<(
        { __typename?: 'Summary' }
        & StockSummaryFragmentFragment
        )>>
}
    );

export type QueryUserStockWatchlistsQueryVariables = Exact<{
    uid: Scalars['String'];
}>;


export type QueryUserStockWatchlistsQuery = (
    { __typename?: 'Query' }
    & {
    queryUserStockWatchlists?: Maybe<Array<Maybe<(
        { __typename?: 'StockWatchlist' }
        & StockWatchlistInformationFragment
        )>>>
}
    );

export type CreateStockWatchlistMutationVariables = Exact<{
    identifier: StockWatchlistIdentifier;
}>;


export type CreateStockWatchlistMutation = (
    { __typename?: 'Mutation' }
    & {
    createStockWatchlist?: Maybe<(
        { __typename?: 'StockWatchlist' }
        & StockWatchlistInformationFragment
        )>
}
    );

export type AddStockIntoWatchlistMutationVariables = Exact<{
    identifier: StockWatchlistIdentifier;
}>;


export type AddStockIntoWatchlistMutation = (
    { __typename?: 'Mutation' }
    & {
    addStockIntoStockWatchlist?: Maybe<(
        { __typename?: 'Summary' }
        & StockSummaryFragmentFragment
        )>
}
    );

export type RemoveStockFromWatchlistMutationVariables = Exact<{
    identifier: StockWatchlistIdentifier;
}>;


export type RemoveStockFromWatchlistMutation = (
    { __typename?: 'Mutation' }
    & Pick<Mutation, 'removeStockFromStockWatchlist'>
    );

export type DeleteUserWatchlistMutationVariables = Exact<{
    identifier: StockWatchlistIdentifier;
}>;


export type DeleteUserWatchlistMutation = (
    { __typename?: 'Mutation' }
    & Pick<Mutation, 'deleteWatchlist'>
    );

export type RenameStockWatchlistMutationVariables = Exact<{
    identifier: StockWatchlistIdentifier;
}>;


export type RenameStockWatchlistMutation = (
    { __typename?: 'Mutation' }
    & Pick<Mutation, 'renameStockWatchlist'>
    );

export const BalanceSheetDataFragmentFragmentDoc = gql`
    fragment balanceSheetDataFragment on BalanceSheetData {
        accountsPayable
        cash
        commonStock
        endDate
        inventory
        longTermDebt
        longTermInvestments
        maxAge
        netReceivables
        netTangibleAssets
        otherAssets
        otherCurrentAssets
        otherCurrentLiab
        otherLiab
        otherStockholderEquity
        propertyPlantEquipment
        retainedEarnings
        shortLongTermDebt
        shortTermInvestments
        totalAssets
        totalCurrentAssets
        totalCurrentLiabilities
        totalLiab
        totalStockholderEquity
        treasuryStock
    }
`;
export const CashFlowDataFragmentFragmentDoc = gql`
    fragment cashFlowDataFragment on CashFlowData {
        capitalExpenditures
        changeInCash
        changeToAccountReceivables
        changeToInventory
        changeToLiabilities
        changeToNetincome
        changeToOperatingActivities
        depreciation
        dividendsPaid
        endDate
        investments
        maxAge
        netBorrowings
        netIncome
        otherCashflowsFromFinancingActivities
        otherCashflowsFromInvestingActivities
        repurchaseOfStock
        totalCashFromFinancingActivities
        totalCashFromOperatingActivities
        totalCashflowsFromInvestingActivities
    }
`;
export const IncomeStatementDataFragmentDoc = gql`
    fragment incomeStatementData on IncomeStatementData {
        costOfRevenue
        discontinuedOperations
        ebit
        effectOfAccountingCharges
        endDate
        extraordinaryItems
        grossProfit
        incomeBeforeTax
        incomeTaxExpense
        interestExpense
        netIncome
        netIncomeApplicableToCommonShares
        netIncomeFromContinuingOps
        operatingIncome
        otherOperatingExpenses
        researchDevelopment
        sellingGeneralAdministrative
        totalOperatingExpenses
        totalOtherIncomeExpenseNet
        totalRevenue
    }
`;
export const StockSummaryFragmentFragmentDoc = gql`
    fragment StockSummaryFragment on Summary {
        EPSTTM
        EarningsDate
        ExDividendDate
        FiveTwoWeekRange
        OneyTargetEst
        PERatioTTM
        currency
        industry
        logo_url
        marketPrice
        previousClose
        recommendationKey
        recommendationMean
        sector
        targetEstOneyPercent
        symbol
        weekRangeFiveTwoMax
        weekRangeFiveTwoMin
    }
`;
export const StockWatchlistInformationFragmentDoc = gql`
    fragment StockWatchlistInformation on StockWatchlist {
        id
        name
        timestamp
        stocks
        summary {
            ...StockSummaryFragment
        }
    }
${StockSummaryFragmentFragmentDoc}`;
export const QueryStockDetailsDocument = gql`
    query queryStockDetails($symbol: String!) {
        queryStockDetails(symbol: $symbol) {
            id
            analysis {
                GrowthEstimates {
                    CurrentQtr
                    CurrentQtrPrct
                    CurrentYear
                    CurrentYearPrct
                    NextFiveYearsperannum
                    NextFiveYearsperannumPrct
                    NextQtr
                    NextQtrPrct
                    NextYear
                    NextYearPrct
                    PastFiveYearsperannum
                    PastFiveYearsperannumPrct
                    name
                }
                RevenueEstimate {
                    AvgEstimate
                    AvgEstimateNumber
                    HighEstimate
                    HighEstimateNumber
                    LowEstimate
                    LowEstimateNumber
                    NoofAnalysts
                    SalesGrowthyearest
                    SalesGrowthyearestNumber
                    YearAgoSales
                    name
                }
            }
            balanceSheet {
                balanceSheetHistoryQuarterly {
                    ...balanceSheetDataFragment
                }
                balanceSheetHistoryYearly {
                    ...balanceSheetDataFragment
                }
            }
            cashFlow {
                cashflowStatementHistoryQuarterly {
                    ...cashFlowDataFragment
                }
                cashflowStatementHistoryYearly {
                    ...cashFlowDataFragment
                }
            }
            incomeStatement {
                incomeStatementHistoryQuarterly {
                    ...incomeStatementData
                }
                incomeStatementHistoryYearly {
                    ...incomeStatementData
                }
            }
            financialReports {
                collection
                name
            }
            stats {
                MarketCapintradayFive
                PriceSalesttm
                LeveredFreeCashFlowttm
            }
            recommendation {
                buy
                hold
                period
                sell
                strongBuy
                strongSell
                symbol
            }
            stockNews {
                datetime
                headline
                image
                sourceName
                summary
                url
            }
            companyData {
                defaultKeyStatistics {
                    FiveTwoWeekChange
                    SandPFiveTwoWeekChange
                    bookValue
                    dateShortInterest
                    earningsQuarterlyGrowth
                    enterpriseToEbitda
                    enterpriseToRevenue
                    enterpriseValue
                    fiveYearAverageReturn
                    floatShares
                    forwardEps
                    forwardPE
                    heldPercentInsiders
                    heldPercentInstitutions
                    lastFiscalYearEnd
                    lastSplitDate
                    lastSplitFactor
                    mostRecentQuarter
                    netIncomeToCommon
                    nextFiscalYearEnd
                    pegRatio
                    priceHint
                    priceToBook
                    profitMargins
                    sharesOutstanding
                    sharesShort
                    sharesShortPreviousMonthDate
                    sharesShortPriorMonth
                    shortRatio
                    trailingEps
                }
                earnings {
                    earningsChart {
                        currentQuarterEstimate
                        currentQuarterEstimateDate
                        currentQuarterEstimateYear
                        earningsDate
                        quarterly {
                            actual
                            date
                            estimate
                        }
                    }
                    financialCurrency
                    financialsChart {
                        quarterly {
                            categories
                            series {
                                data
                                name
                            }
                        }
                        yearly {
                            categories
                            series {
                                data
                                name
                            }
                        }
                    }
                }
                financialData {
                    currentPrice
                    currentRatio
                    debtToEquity
                    ebitda
                    ebitdaMargins
                    financialCurrency
                    freeCashflow
                    grossMargins
                    grossProfits
                    FloatOfAnalystOpinions
                    operatingCashflow
                    operatingMargins
                    profitMargins
                    quickRatio
                    recommendationKey
                    recommendationMean
                    returnOnAssets
                    returnOnEquity
                    revenueGrowth
                    revenuePerShare
                    targetHighPrice
                    targetLowPrice
                    targetMeanPrice
                    targetMedianPrice
                    totalCash
                    totalCashPerShare
                    totalDebt
                    totalRevenue
                }
                pageViews {
                    longTermTrend
                    midTermTrend
                    shortTermTrend
                }
                summaryProfile {
                    address1
                    city
                    country
                    fax
                    fullTimeEmployees
                    industry
                    logo_url
                    longBusinessSummary
                    phone
                    sector
                    state
                    website
                    zip
                }
                upgradeDowngradeHistory {
                    history {
                        action
                        epochGradeDate
                        firm
                        fromGrade
                        toGrade
                    }
                }
            }
            summary {
                AvgVolume
                EPSTTM
                EarningsDate
                ExDividendDate
                FiveTwoWeekRange
                ForwardDividendYield
                OneyTargetEst
                Open
                PERatioTTM
                Volume
                currency
                industry
                logo_url
                marketPrice
                marketCap
                previousClose
                recommendationKey
                recommendationMean
                sector
                symbol
                targetEstOneyPercent
                weekRangeFiveTwoMax
                weekRangeFiveTwoMin
                currencySymbol
                shortName
                longName
                marketCap
                weekRangeFiveTwoMax
                weekRangeFiveTwoMin
            }
            metric {
                FiveDayPriceReturnDaily
                FiveTwoWeekHigh
                FiveTwoWeekHighDate
                FiveTwoWeekLow
                FiveTwoWeekLowDate
                FiveTwoWeekPriceReturnDaily
                OneDayAverageTradingVolume
                OneThreeWeekPriceReturnDaily
                ThreeMonthAverageTradingVolume
                TwoSixWeekPriceReturnDaily
                assetTurnoverAnnual
                assetTurnoverTTM
                beta
                bookValuePerShareAnnual
                bookValuePerShareQuarterly
                bookValueShareGrowthFiveY
                capitalSpendingGrowthFiveY
                cashFlowPerShareAnnual
                cashFlowPerShareTTM
                cashPerSharePerShareAnnual
                cashPerSharePerShareQuarterly
                currentEvfreeCashFlowAnnual
                currentEvfreeCashFlowTTM
                currentRatioAnnual
                currentRatioQuarterly
                ebitdPerShareTTM
                ebitdaCagrFiveY
                ebitdaInterimCagrFiveY
                epsBasicExclExtraItemsAnnual
                epsBasicExclExtraItemsTTM
                epsExclExtraItemsAnnual
                epsExclExtraItemsTTM
                epsGrowthFiveY
                epsGrowthQuarterlyYoy
                epsGrowthTTMYoy
                epsGrowthThreeY
                epsInclExtraItemsAnnual
                epsInclExtraItemsTTM
                epsNormalizedAnnual
                focfCagrFiveY
                freeCashFlowAnnual
                freeCashFlowPerShareTTM
                freeCashFlowTTM
                freeOperatingCashFlowrevenueFiveY
                freeOperatingCashFlowrevenueTTM
                grossMarginAnnual
                grossMarginFiveY
                grossMarginTTM
                inventoryTurnoverAnnual
                inventoryTurnoverTTM
                longTermDebtequityAnnual
                longTermDebtequityQuarterly
                marketCapitalization
                monthToDatePriceReturnDaily
                netDebtAnnual
                netDebtInterim
                netIncomeEmployeeAnnual
                netIncomeEmployeeTTM
                netInterestCoverageAnnual
                netInterestCoverageTTM
                netMarginGrowthFiveY
                netProfitMarginAnnual
                netProfitMarginFiveY
                netProfitMarginTTM
                operatingMarginAnnual
                operatingMarginFiveY
                operatingMarginTTM
                payoutRatioAnnual
                payoutRatioTTM
                pbAnnual
                pbQuarterly
                pcfShareTTM
                peBasicExclExtraTTM
                peExclExtraAnnual
                peExclExtraHighTTM
                peExclExtraTTM
                peExclLowTTM
                peInclExtraTTM
                peNormalizedAnnual
                pfcfShareAnnual
                pfcfShareTTM
                pretaxMarginAnnual
                pretaxMarginFiveY
                pretaxMarginTTM
                priceRelativeToSPFiveFiveTwoWeek
                priceRelativeToSPFiveFourWeek
                priceRelativeToSPFiveOneThreeWeek
                priceRelativeToSPFiveTwoSixWeek
                priceRelativeToSPFiveYtd
                psAnnual
                psTTM
                ptbvAnnual
                ptbvQuarterly
                quickRatioAnnual
                quickRatioQuarterly
                receivablesTurnoverAnnual
                receivablesTurnoverTTM
                revenueEmployeeAnnual
                revenueEmployeeTTM
                revenueGrowthFiveY
                revenueGrowthQuarterlyYoy
                revenueGrowthTTMYoy
                revenueGrowthThreeY
                revenuePerShareAnnual
                revenuePerShareTTM
                revenueShareGrowthFiveY
                roaRfy
                roaaFiveY
                roaeFiveY
                roaeTTM
                roeRfy
                roeTTM
                roiAnnual
                roiFiveY
                roiTTM
                tangibleBookValuePerShareAnnual
                tangibleBookValuePerShareQuarterly
                tbvCagrFiveY
                totalDebtCagrFiveY
                totalDebttotalEquityAnnual
                totalDebttotalEquityQuarterly
                yearToDatePriceReturnDaily
            }
            dividends {
                currentDividendYieldTTM
                dividendGrowthRateFiveY
                dividendPerShareAnnual
                dividendPerShareFiveY
                dividendYieldFiveY
                dividendYieldIndicatedAnnual
                dividendsPerShareTTM
                exDividendDate
                trailingAnnualDividendRate
                trailingAnnualDividendYield
                ForwardDividendYield
            }
        }
    }
    ${BalanceSheetDataFragmentFragmentDoc}
    ${CashFlowDataFragmentFragmentDoc}
${IncomeStatementDataFragmentDoc}`;

@Injectable({
    providedIn: 'root'
})
export class QueryStockDetailsGQL extends Apollo.Query<QueryStockDetailsQuery, QueryStockDetailsQueryVariables> {
    document = QueryStockDetailsDocument;

}

export const QueryUserDocument = gql`
    query queryUser($uid: String!) {
        queryUser(uid: $uid) {
            uid
            displayName
            email
            photoURL
            nickname
            locale
            providerId
            activity
            status
            userPrivateData {
                finnhubKey
                roles
            }
        }
    }
`;

@Injectable({
    providedIn: 'root'
})
export class QueryUserGQL extends Apollo.Query<QueryUserQuery, QueryUserQueryVariables> {
    document = QueryUserDocument;

}

export const UpdateUserPrivateDataDocument = gql`
    mutation updateUserPrivateData($uid: String!, $userPrivateDataInput: UserPrivateDataInput!) {
        updateUserPrivateData(uid: $uid, userPrivateDataInput: $userPrivateDataInput) {
            finnhubKey
            roles
        }
    }
`;

@Injectable({
    providedIn: 'root'
})
export class UpdateUserPrivateDataGQL extends Apollo.Mutation<UpdateUserPrivateDataMutation, UpdateUserPrivateDataMutationVariables> {
    document = UpdateUserPrivateDataDocument;

}

export const UpdateUserDataDocument = gql`
    mutation updateUserData($userInput: UserInput!) {
        updateUserData(user: $userInput) {
            uid
            displayName
            email
            photoURL
            nickname
            locale
            providerId
            activity
            status
            userPrivateData {
                finnhubKey
                roles
            }
        }
    }
`;

@Injectable({
    providedIn: 'root'
})
export class UpdateUserDataGQL extends Apollo.Mutation<UpdateUserDataMutation, UpdateUserDataMutationVariables> {
    document = UpdateUserDataDocument;

}

export const RegisterUserDocument = gql`
    mutation registerUser($userInput: UserInput!) {
        registerUser(user: $userInput) {
            uid
            displayName
            email
            photoURL
            nickname
            locale
            providerId
            activity
            status
            userPrivateData {
                finnhubKey
                roles
            }
        }
    }
`;

@Injectable({
    providedIn: 'root'
})
export class RegisterUserGQL extends Apollo.Mutation<RegisterUserMutation, RegisterUserMutationVariables> {
    document = RegisterUserDocument;

}

export const QueryUserStockWatchlistsDocument = gql`
    query queryUserStockWatchlists($uid: String!) {
        queryUserStockWatchlists(uid: $uid) {
            ...StockWatchlistInformation
        }
    }
${StockWatchlistInformationFragmentDoc}`;

@Injectable({
    providedIn: 'root'
})
export class QueryUserStockWatchlistsGQL extends Apollo.Query<QueryUserStockWatchlistsQuery, QueryUserStockWatchlistsQueryVariables> {
    document = QueryUserStockWatchlistsDocument;

}

export const CreateStockWatchlistDocument = gql`
    mutation CreateStockWatchlist($identifier: StockWatchlistIdentifier!) {
        createStockWatchlist(identifier: $identifier) {
            ...StockWatchlistInformation
        }
    }
${StockWatchlistInformationFragmentDoc}`;

@Injectable({
    providedIn: 'root'
})
export class CreateStockWatchlistGQL extends Apollo.Mutation<CreateStockWatchlistMutation, CreateStockWatchlistMutationVariables> {
    document = CreateStockWatchlistDocument;

}

export const AddStockIntoWatchlistDocument = gql`
    mutation AddStockIntoWatchlist($identifier: StockWatchlistIdentifier!) {
        addStockIntoStockWatchlist(identifier: $identifier) {
            ...StockSummaryFragment
        }
    }
${StockSummaryFragmentFragmentDoc}`;

@Injectable({
    providedIn: 'root'
})
export class AddStockIntoWatchlistGQL extends Apollo.Mutation<AddStockIntoWatchlistMutation, AddStockIntoWatchlistMutationVariables> {
    document = AddStockIntoWatchlistDocument;

}

export const RemoveStockFromWatchlistDocument = gql`
    mutation RemoveStockFromWatchlist($identifier: StockWatchlistIdentifier!) {
        removeStockFromStockWatchlist(identifier: $identifier)
    }
`;

@Injectable({
    providedIn: 'root'
})
export class RemoveStockFromWatchlistGQL extends Apollo.Mutation<RemoveStockFromWatchlistMutation, RemoveStockFromWatchlistMutationVariables> {
    document = RemoveStockFromWatchlistDocument;

}

export const DeleteUserWatchlistDocument = gql`
    mutation DeleteUserWatchlist($identifier: StockWatchlistIdentifier!) {
        deleteWatchlist(identifier: $identifier)
    }
`;

@Injectable({
    providedIn: 'root'
})
export class DeleteUserWatchlistGQL extends Apollo.Mutation<DeleteUserWatchlistMutation, DeleteUserWatchlistMutationVariables> {
    document = DeleteUserWatchlistDocument;

}

export const RenameStockWatchlistDocument = gql`
    mutation RenameStockWatchlist($identifier: StockWatchlistIdentifier!) {
        renameStockWatchlist(identifier: $identifier)
    }
`;

@Injectable({
    providedIn: 'root'
})
export class RenameStockWatchlistGQL extends Apollo.Mutation<RenameStockWatchlistMutation, RenameStockWatchlistMutationVariables> {
    document = RenameStockWatchlistDocument;

}
