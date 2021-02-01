import {gql} from 'apollo-angular';
import {Injectable} from '@angular/core';
import * as Apollo from 'apollo-angular';

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
    growthEstimates?: Maybe<GrowthEstimates>;
    revenueEstimate?: Maybe<Array<Maybe<RevenueEstimate>>>;
};

export type BalanceSheet = {
    __typename?: 'BalanceSheet';
    balanceSheetHistoryQuarterly?: Maybe<BalanceSheetData>;
    balanceSheetHistoryYearly?: Maybe<BalanceSheetData>;
};

export type BalanceSheetData = {
    __typename?: 'BalanceSheetData';
    accountsPayable?: Maybe<SheetData>;
    cash?: Maybe<SheetData>;
    commonStock?: Maybe<SheetData>;
    endDate?: Maybe<SheetData>;
    inventory?: Maybe<SheetData>;
    longTermDebt?: Maybe<SheetData>;
    longTermInvestments?: Maybe<SheetData>;
    maxAge?: Maybe<SheetData>;
    netReceivables?: Maybe<SheetData>;
    netTangibleAssets?: Maybe<SheetData>;
    otherAssets?: Maybe<SheetData>;
    otherCurrentAssets?: Maybe<SheetData>;
    otherCurrentLiab?: Maybe<SheetData>;
    otherLiab?: Maybe<SheetData>;
    otherStockholderEquity?: Maybe<SheetData>;
    propertyPlantEquipment?: Maybe<SheetData>;
    retainedEarnings?: Maybe<SheetData>;
    shortLongTermDebt?: Maybe<SheetData>;
    shortTermInvestments?: Maybe<SheetData>;
    totalAssets?: Maybe<SheetData>;
    totalCurrentAssets?: Maybe<SheetData>;
    totalCurrentLiabilities?: Maybe<SheetData>;
    totalLiab?: Maybe<SheetData>;
    totalStockholderEquity?: Maybe<SheetData>;
    treasuryStock?: Maybe<SheetData>;
    accumulatedComprehensiveIncome?: Maybe<SheetData>;
    totalSecuritiesForSale?: Maybe<SheetData>;
    commonStockValue?: Maybe<SheetData>;
    deferredRevenue?: Maybe<SheetData>;
    operatingLeaseLiability?: Maybe<SheetData>;
    goodwill?: Maybe<SheetData>;
    prepaidExpense?: Maybe<SheetData>;
    netEquity?: Maybe<SheetData>;
    prepaidAssets?: Maybe<SheetData>;
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
    cashflowStatementHistoryQuarterly?: Maybe<CashFlowData>;
    cashflowStatementHistoryYearly?: Maybe<CashFlowData>;
};

export type CashFlowData = {
    __typename?: 'CashFlowData';
    capitalExpenditures?: Maybe<SheetData>;
    changeInCash?: Maybe<SheetData>;
    changeToAccountReceivables?: Maybe<SheetData>;
    changeToInventory?: Maybe<SheetData>;
    deferredTaxes?: Maybe<SheetData>;
    changeToLiabilities?: Maybe<SheetData>;
    changeToNetincome?: Maybe<SheetData>;
    changeToOperatingActivities?: Maybe<SheetData>;
    depreciation?: Maybe<SheetData>;
    dividendsPaid?: Maybe<SheetData>;
    endDate?: Maybe<SheetData>;
    investments?: Maybe<SheetData>;
    maxAge?: Maybe<SheetData>;
    netBorrowings?: Maybe<SheetData>;
    netIncome?: Maybe<SheetData>;
    otherCashflowsFromFinancingActivities?: Maybe<SheetData>;
    otherCashflowsFromInvestingActivities?: Maybe<SheetData>;
    repurchaseOfStock?: Maybe<SheetData>;
    totalCashFromFinancingActivities?: Maybe<SheetData>;
    totalCashFromOperatingActivities?: Maybe<SheetData>;
    totalCashflowsFromInvestingActivities?: Maybe<SheetData>;
    shareBasedCompensation?: Maybe<SheetData>;
    accountsReceivable?: Maybe<SheetData>;
    accruedExpenses?: Maybe<SheetData>;
    purchasesOfSecuritie?: Maybe<SheetData>;
    marketSecurities?: Maybe<SheetData>;
    acquisitionsOfBusinesses?: Maybe<SheetData>;
    issuanceOfStock?: Maybe<SheetData>;
    salesOfSecurities?: Maybe<SheetData>;
    maturitiesOfSecurities?: Maybe<SheetData>;
    incomeTax?: Maybe<SheetData>;
    accruedEquipment?: Maybe<SheetData>;
    longTermDebtRepayments?: Maybe<SheetData>;
    commercialPaperRepayments?: Maybe<SheetData>;
    shortTermDebtRepayments?: Maybe<SheetData>;
    longTermDebtInsurance?: Maybe<SheetData>;
    CustomerDeposits?: Maybe<SheetData>;
};

export type CompanyData = {
    __typename?: 'CompanyData';
    defaultKeyStatistics?: Maybe<DefaultKeyStatistics>;
    earnings?: Maybe<Earnings>;
    esgScores?: Maybe<EsgScores>;
    financialData?: Maybe<FinancialData>;
    pageViews?: Maybe<PageViews>;
    upgradeDowngradeHistory?: Maybe<UpgradeDowngradeHistory>;
};

export type DefaultKeyStatistics = {
    __typename?: 'DefaultKeyStatistics';
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
    sharesPercentSharesOut?: Maybe<Scalars['Float']>;
    sharesShort?: Maybe<Scalars['Float']>;
    sharesShortPreviousMonthDate?: Maybe<Scalars['Float']>;
    sharesShortPriorMonth?: Maybe<Scalars['Float']>;
    shortPercentOfFloat?: Maybe<Scalars['Float']>;
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
    forwardDividendYield?: Maybe<Scalars['String']>;
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
    currentQtr?: Maybe<Scalars['String']>;
    currentQtrPrct?: Maybe<Scalars['Float']>;
    currentYear?: Maybe<Scalars['String']>;
    currentYearPrct?: Maybe<Scalars['Float']>;
    nextFiveYearsperannum?: Maybe<Scalars['String']>;
    nextFiveYearsperannumPrct?: Maybe<Scalars['Float']>;
    nextQtr?: Maybe<Scalars['String']>;
    nextQtrPrct?: Maybe<Scalars['Float']>;
    nextYear?: Maybe<Scalars['String']>;
    nextYearPrct?: Maybe<Scalars['Float']>;
    pastFiveYearsperannum?: Maybe<Scalars['String']>;
    pastFiveYearsperannumPrct?: Maybe<Scalars['Float']>;
    name?: Maybe<Scalars['String']>;
};

export type HistoricalMetrics = {
    __typename?: 'HistoricalMetrics';
    cashRatio?: Maybe<HistoricalMetricsData>;
    currentRatio?: Maybe<HistoricalMetricsData>;
    ebitPerShare?: Maybe<HistoricalMetricsData>;
    eps?: Maybe<HistoricalMetricsData>;
    grossMargin?: Maybe<HistoricalMetricsData>;
    longtermDebtTotalAsset?: Maybe<HistoricalMetricsData>;
    longtermDebtTotalCapital?: Maybe<HistoricalMetricsData>;
    longtermDebtTotalEquity?: Maybe<HistoricalMetricsData>;
    netDebtToTotalCapital?: Maybe<HistoricalMetricsData>;
    netDebtToTotalEquity?: Maybe<HistoricalMetricsData>;
    netMargin?: Maybe<HistoricalMetricsData>;
    operatingMargin?: Maybe<HistoricalMetricsData>;
    pretaxMargin?: Maybe<HistoricalMetricsData>;
    salesPerShare?: Maybe<HistoricalMetricsData>;
    sgaToSale?: Maybe<HistoricalMetricsData>;
    totalDebtToEquity?: Maybe<HistoricalMetricsData>;
    totalDebtToTotalAsset?: Maybe<HistoricalMetricsData>;
    totalDebtToTotalCapital?: Maybe<HistoricalMetricsData>;
    totalRatio?: Maybe<HistoricalMetricsData>;
};

export type HistoricalMetricsData = {
    __typename?: 'HistoricalMetricsData';
    name?: Maybe<Scalars['String']>;
    dates?: Maybe<Array<Maybe<Scalars['String']>>>;
    data?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type IncomeStatement = {
    __typename?: 'IncomeStatement';
    incomeStatementHistoryQuarterly?: Maybe<IncomeStatementData>;
    incomeStatementHistoryYearly?: Maybe<IncomeStatementData>;
};

export type IncomeStatementData = {
    __typename?: 'IncomeStatementData';
    costOfRevenue?: Maybe<SheetData>;
    discontinuedOperations?: Maybe<SheetData>;
    ebit?: Maybe<SheetData>;
    effectOfAccountingCharges?: Maybe<SheetData>;
    endDate?: Maybe<SheetData>;
    extraordinaryItems?: Maybe<SheetData>;
    grossProfit?: Maybe<SheetData>;
    incomeBeforeTax?: Maybe<SheetData>;
    incomeTaxExpense?: Maybe<SheetData>;
    interestExpense?: Maybe<SheetData>;
    netIncome?: Maybe<SheetData>;
    netIncomeApplicableToCommonShares?: Maybe<SheetData>;
    netIncomeFromContinuingOps?: Maybe<SheetData>;
    operatingIncome?: Maybe<SheetData>;
    otherOperatingExpenses?: Maybe<SheetData>;
    researchDevelopment?: Maybe<SheetData>;
    sellingGeneralAdministrative?: Maybe<SheetData>;
    totalOperatingExpenses?: Maybe<SheetData>;
    totalOtherIncomeExpenseNet?: Maybe<SheetData>;
    totalRevenue?: Maybe<SheetData>;
    dilutedEarnings?: Maybe<SheetData>;
    basicEarnings?: Maybe<SheetData>;
    dividendsInCash?: Maybe<SheetData>;
    administrativeExpense?: Maybe<SheetData>;
    costOfSales?: Maybe<SheetData>;
    incomeTaxProvision?: Maybe<SheetData>;
    marketingExpense?: Maybe<SheetData>;
};

export type InsiderTransaction = {
    __typename?: 'InsiderTransaction';
    filerName?: Maybe<Scalars['String']>;
    filerRelation?: Maybe<Scalars['String']>;
    shares?: Maybe<Scalars['Float']>;
    startDate?: Maybe<Scalars['Float']>;
    transactionText?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['Float']>;
};

export type InstitutionOwnership = {
    __typename?: 'InstitutionOwnership';
    maxAge?: Maybe<Scalars['Float']>;
    organization?: Maybe<Scalars['String']>;
    pctHeld?: Maybe<Scalars['Float']>;
    position?: Maybe<Scalars['Float']>;
    reportDate?: Maybe<Scalars['Float']>;
    value?: Maybe<Scalars['Float']>;
};

export type Metric = {
    __typename?: 'Metric';
    fiveDayPriceReturnDaily?: Maybe<Scalars['Float']>;
    fiveTwoWeekHigh?: Maybe<Scalars['Float']>;
    fiveTwoWeekHighDate?: Maybe<Scalars['String']>;
    fiveTwoWeekLow?: Maybe<Scalars['Float']>;
    fiveTwoWeekLowDate?: Maybe<Scalars['String']>;
    fiveTwoWeekPriceReturnDaily?: Maybe<Scalars['Float']>;
    oneDayAverageTradingVolume?: Maybe<Scalars['Float']>;
    oneThreeWeekPriceReturnDaily?: Maybe<Scalars['Float']>;
    threeMonthAverageTradingVolume?: Maybe<Scalars['Float']>;
    twoSixWeekPriceReturnDaily?: Maybe<Scalars['Float']>;
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
    registerUser?: Maybe<Scalars['Boolean']>;
    editUser?: Maybe<Scalars['Boolean']>;
    resetUserAccount?: Maybe<Scalars['Boolean']>;
    createGroup?: Maybe<StGroupPartialData>;
    editGroup?: Maybe<StGroupPartialData>;
    deleteGroup?: Maybe<Scalars['Boolean']>;
    toggleInvitationRequestToGroup?: Maybe<StGroupPartialData>;
    answerReceivedGroupInvitation?: Maybe<StGroupPartialData>;
    leaveGroup?: Maybe<Scalars['Boolean']>;
    createStockWatchlist?: Maybe<StStockWatchlist>;
    renameStockWatchlist?: Maybe<Scalars['Boolean']>;
    deleteWatchlist?: Maybe<Scalars['Boolean']>;
    addStockIntoStockWatchlist?: Maybe<Summary>;
    removeStockFromStockWatchlist?: Maybe<Scalars['Boolean']>;
    performTransaction?: Maybe<StTransaction>;
};


export type MutationRegisterUserArgs = {
    user?: Maybe<StUserAuthenticationInput>;
};


export type MutationEditUserArgs = {
    editInput?: Maybe<StUserEditDataInput>;
};


export type MutationResetUserAccountArgs = {
    userId: Scalars['String'];
};


export type MutationCreateGroupArgs = {
    groupInput: StGroupAllDataInput;
};


export type MutationEditGroupArgs = {
    groupInput: StGroupAllDataInput;
};


export type MutationDeleteGroupArgs = {
    uid: Scalars['String'];
    groupId: Scalars['String'];
};


export type MutationToggleInvitationRequestToGroupArgs = {
    uid: Scalars['String'];
    groupId: Scalars['String'];
};


export type MutationAnswerReceivedGroupInvitationArgs = {
    uid: Scalars['String'];
    groupId: Scalars['String'];
    accept: Scalars['Boolean'];
};


export type MutationLeaveGroupArgs = {
    uid: Scalars['String'];
    groupId: Scalars['String'];
};


export type MutationCreateStockWatchlistArgs = {
    identifier: StStockWatchInputlistIdentifier;
};


export type MutationRenameStockWatchlistArgs = {
    identifier: StStockWatchInputlistIdentifier;
};


export type MutationDeleteWatchlistArgs = {
    identifier: StStockWatchInputlistIdentifier;
};


export type MutationAddStockIntoStockWatchlistArgs = {
    identifier: StStockWatchInputlistIdentifier;
};


export type MutationRemoveStockFromStockWatchlistArgs = {
    identifier: StStockWatchInputlistIdentifier;
};


export type MutationPerformTransactionArgs = {
    transactionInput?: Maybe<StTransactionInput>;
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
    queryUserData?: Maybe<StUserPublicData>;
    querySTUserPartialInformationByUsername: Array<Maybe<StUserPartialInformation>>;
    authenticateUser?: Maybe<StUserPublicData>;
    querySTGroupAllDataByGroupId?: Maybe<StGroupAllData>;
    querySTGroupPartialDataByGroupName?: Maybe<StSearchGroups>;
    queryStockDetails?: Maybe<StockDetails>;
    queryStockSummary?: Maybe<Summary>;
    queryStockSummaries?: Maybe<SearchSymbol>;
    querySTMarketHistoryOverview?: Maybe<StMarketOverviewPartialData>;
    queryStMarketAllCategories?: Maybe<StMarketDatasetKeyCategories>;
    queryMarketDailyOverview?: Maybe<StMarketDailyOverview>;
    queryMultipleStMarketData?: Maybe<StMarketChartDataResultSearch>;
    queryStMarketData?: Maybe<StMarketChartDataResultCombined>;
    queryStMarketCalendarEvents?: Maybe<StMarketCalendarEvents>;
    queryStMarketCalendarEventsEarnings?: Maybe<StMarketCalendarEventsEarnings>;
};


export type QueryQueryUserDataArgs = {
    uid: Scalars['String'];
};


export type QueryQueryStUserPartialInformationByUsernameArgs = {
    usernamePrefix: Scalars['String'];
};


export type QueryAuthenticateUserArgs = {
    uid: Scalars['String'];
};


export type QueryQueryStGroupAllDataByGroupIdArgs = {
    groupId: Scalars['String'];
};


export type QueryQueryStGroupPartialDataByGroupNameArgs = {
    groupName: Scalars['String'];
};


export type QueryQueryStockDetailsArgs = {
    symbol: Scalars['String'];
};


export type QueryQueryStockSummaryArgs = {
    symbol: Scalars['String'];
};


export type QueryQueryStockSummariesArgs = {
    symbolPrefix: Scalars['String'];
};


export type QueryQueryMultipleStMarketDataArgs = {
    key: Scalars['String'];
};


export type QueryQueryStMarketDataArgs = {
    key: Scalars['String'];
};


export type QueryQueryStMarketCalendarEventsArgs = {
    date: Scalars['String'];
};


export type QueryQueryStMarketCalendarEventsEarningsArgs = {
    date: Scalars['String'];
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
    avgEstimate?: Maybe<Scalars['String']>;
    avgEstimateNumber?: Maybe<Scalars['Float']>;
    highEstimate?: Maybe<Scalars['String']>;
    highEstimateNumber?: Maybe<Scalars['Float']>;
    lowEstimate?: Maybe<Scalars['String']>;
    lowEstimateNumber?: Maybe<Scalars['Float']>;
    noofAnalysts?: Maybe<Scalars['Float']>;
    salesGrowthyearest?: Maybe<Scalars['String']>;
    salesGrowthyearestNumber?: Maybe<Scalars['Float']>;
    yearAgoSales?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
};

export type SearchSymbol = {
    __typename?: 'SearchSymbol';
    summaries: Array<Maybe<Summary>>;
};

export type Series = {
    __typename?: 'Series';
    data?: Maybe<Array<Maybe<Scalars['Float']>>>;
    name?: Maybe<Scalars['String']>;
};

export type SheetData = {
    __typename?: 'SheetData';
    change?: Maybe<Array<Maybe<Scalars['Float']>>>;
    data?: Maybe<Array<Maybe<Scalars['Float']>>>;
    name?: Maybe<Scalars['String']>;
};

export type Stats = {
    __typename?: 'Stats';
    avgVolOnedayThree?: Maybe<Scalars['String']>;
    bookValuePerSharemrq?: Maybe<Scalars['String']>;
    currentRatiomrq?: Maybe<Scalars['String']>;
    dilutedEPSttm?: Maybe<Scalars['String']>;
    dividendDateThree?: Maybe<Scalars['String']>;
    eBITDA?: Maybe<Scalars['String']>;
    enterpriseValueEBITDASix?: Maybe<Scalars['String']>;
    enterpriseValueRevenueThree?: Maybe<Scalars['String']>;
    enterpriseValueThree?: Maybe<Scalars['String']>;
    exDividendDateFour?: Maybe<Scalars['String']>;
    fiveDayMovingAverageThree?: Maybe<Scalars['String']>;
    fiveTwoWeekChangeThree?: Maybe<Scalars['String']>;
    fiveTwoWeekHighThree?: Maybe<Scalars['String']>;
    fiveTwoWeekLowThree?: Maybe<Scalars['String']>;
    fiveYearAverageDividendYieldFour?: Maybe<Scalars['String']>;
    float?: Maybe<Scalars['String']>;
    forwardAnnualDividendYieldFour?: Maybe<Scalars['String']>;
    forwardPEOne?: Maybe<Scalars['String']>;
    grossProfitttm?: Maybe<Scalars['String']>;
    lastSplitDateThree?: Maybe<Scalars['String']>;
    lastSplitFactorTwo?: Maybe<Scalars['String']>;
    leveredFreeCashFlowttm?: Maybe<Scalars['String']>;
    mostRecentQuartermrq?: Maybe<Scalars['String']>;
    netIncomeAvitoCommonttm?: Maybe<Scalars['String']>;
    operatingMarginttm?: Maybe<Scalars['String']>;
    pEGRatioFiveyrexpectedOne?: Maybe<Scalars['String']>;
    payoutRatioFour?: Maybe<Scalars['String']>;
    pctHeldbyInsidersOne?: Maybe<Scalars['String']>;
    pctHeldbyInstitutionsOne?: Maybe<Scalars['String']>;
    priceBookmrq?: Maybe<Scalars['String']>;
    priceSalesttm?: Maybe<Scalars['String']>;
    quarterlyEarningsGrowthyoy?: Maybe<Scalars['String']>;
    quarterlyRevenueGrowthyoy?: Maybe<Scalars['String']>;
    returnonEquityttm?: Maybe<Scalars['String']>;
    revenuePerSharettm?: Maybe<Scalars['String']>;
    sPFiveFiveTwoWeekChangeThree?: Maybe<Scalars['String']>;
    sharesOutstandingFive?: Maybe<Scalars['String']>;
    sharesShortJanOneFourTwoTwoOneFour?: Maybe<Scalars['String']>;
    sharesShortpriormonthDecOneFourTwoTwoFour?: Maybe<Scalars['String']>;
    shortPctofFloatJanOneFourTwoTwoOneFour?: Maybe<Scalars['String']>;
    shortPctofSharesOutstandingJanOneFourTwoTwoOneFour?: Maybe<Scalars['String']>;
    shortRatioJanOneFourTwoTwoOneFour?: Maybe<Scalars['String']>;
    totalCashPerSharemrq?: Maybe<Scalars['String']>;
    totalDebtEquitymrq?: Maybe<Scalars['String']>;
    totalDebtmrq?: Maybe<Scalars['String']>;
    trailingAnnualDividendRateThree?: Maybe<Scalars['String']>;
    trailingPE?: Maybe<Scalars['String']>;
    twoDayMovingAverageThree?: Maybe<Scalars['String']>;
};

export type StEventCalendarData = {
    __typename?: 'STEventCalendarData';
    date?: Maybe<Scalars['Float']>;
    day?: Maybe<Scalars['Float']>;
    month?: Maybe<Scalars['Float']>;
    startdatetime?: Maybe<Scalars['String']>;
    year?: Maybe<Scalars['Float']>;
    earningscount?: Maybe<Scalars['Float']>;
    economiceventcount?: Maybe<Scalars['Float']>;
    ipoinfocount?: Maybe<Scalars['Float']>;
    splitscount?: Maybe<Scalars['Float']>;
};

export type StEventCalendarEarningsData = {
    __typename?: 'STEventCalendarEarningsData';
    companyshortname?: Maybe<Scalars['String']>;
    epsactual?: Maybe<Scalars['Float']>;
    epsestimate?: Maybe<Scalars['Float']>;
    epssurprisepct?: Maybe<Scalars['Float']>;
    gmtOffsetMilliSeconds?: Maybe<Scalars['Float']>;
    quoteType?: Maybe<Scalars['String']>;
    startdatetime?: Maybe<Scalars['String']>;
    startdatetimetype?: Maybe<Scalars['String']>;
    ticker?: Maybe<Scalars['String']>;
    timeZoneShortName?: Maybe<Scalars['String']>;
};

export type StGeographic = {
    __typename?: 'STGeographic';
    longitude?: Maybe<Scalars['String']>;
    latitude?: Maybe<Scalars['String']>;
};

export type StGroupAllData = {
    __typename?: 'STGroupAllData';
    groupId: Scalars['String'];
    name: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    imagePath?: Maybe<Scalars['String']>;
    imageUrl?: Maybe<Scalars['String']>;
    portfolio: StPortfolio;
    owner: StGroupUser;
    lastUpdateDate: Scalars['String'];
    lastEditedDate: Scalars['String'];
    createdDate: Scalars['String'];
    currentAchievedRanks?: Maybe<StRank>;
    bestAchievedRanks: Array<Maybe<StRank>>;
    topTransactions: Array<Maybe<StTransaction>>;
    lastTransactions: Array<Maybe<StTransaction>>;
    groupLogs: Array<Maybe<StLog>>;
    portfolioChart: Array<Maybe<StPortfolio>>;
    managers: Array<Maybe<StGroupUser>>;
    members: Array<Maybe<StGroupUser>>;
    invitationSent: Array<Maybe<StGroupUser>>;
    invitationReceived?: Maybe<Array<Maybe<StGroupUser>>>;
};

export type StGroupAllDataInput = {
    groupId?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    imagePath?: Maybe<Scalars['String']>;
    imageUrl?: Maybe<Scalars['String']>;
    owner: Scalars['String'];
    managers: Array<Maybe<Scalars['String']>>;
    members: Array<Maybe<Scalars['String']>>;
    invitationSent: Array<Maybe<Scalars['String']>>;
    invitationReceived: Array<Maybe<Scalars['String']>>;
};

export type StGroupPartialData = {
    __typename?: 'STGroupPartialData';
    groupId: Scalars['String'];
    name: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    imagePath?: Maybe<Scalars['String']>;
    imageUrl?: Maybe<Scalars['String']>;
    owner: StGroupUser;
    portfolio: StPortfolio;
    lastUpdateDate: Scalars['String'];
    lastEditedDate: Scalars['String'];
    createdDate: Scalars['String'];
    currentAchievedRanks?: Maybe<StRank>;
};

export type StGroupUser = {
    __typename?: 'STGroupUser';
    user: StUserPartialInformation;
    sinceDate: Scalars['String'];
};

export type StInputFielChange = {
    inputFiel: Scalars['String'];
};

export type StInputLog = {
    date: Scalars['String'];
    logText: Scalars['String'];
};

export type StInputSimpleChart = {
    date: Scalars['String'];
    data: Scalars['Float'];
    label?: Maybe<Scalars['String']>;
};

export type StLog = {
    __typename?: 'STLog';
    date: Scalars['String'];
    logText: Scalars['String'];
};

export type StMarketCalendarEvents = {
    __typename?: 'StMarketCalendarEvents';
    events?: Maybe<Array<Maybe<StEventCalendarData>>>;
};

export type StMarketCalendarEventsEarnings = {
    __typename?: 'StMarketCalendarEventsEarnings';
    earnings?: Maybe<Array<Maybe<StEventCalendarEarningsData>>>;
};

export type StMarketDailyOverview = {
    __typename?: 'STMarketDailyOverview';
    stocks_day_gainers?: Maybe<Array<Maybe<StMarketTopTableSymbolData>>>;
    stocks_day_losers?: Maybe<Array<Maybe<StMarketTopTableSymbolData>>>;
    stocks_day_active?: Maybe<Array<Maybe<StMarketTopTableSymbolData>>>;
    stocks_undervalued_growth_stocks?: Maybe<Array<Maybe<StMarketTopTableSymbolData>>>;
    stocks_growth_technology_stocks?: Maybe<Array<Maybe<StMarketTopTableSymbolData>>>;
    stocks_undervalued_large_caps?: Maybe<Array<Maybe<StMarketTopTableSymbolData>>>;
    stocks_aggressive_small_caps?: Maybe<Array<Maybe<StMarketTopTableSymbolData>>>;
    stocks_small_cap_gainers?: Maybe<Array<Maybe<StMarketTopTableSymbolData>>>;
    stock_suggestions?: Maybe<Array<Maybe<StStockSuggestion>>>;
    top_crypto?: Maybe<Array<Maybe<StMarketTopTableCryptoData>>>;
    news?: Maybe<Array<Maybe<NewsArticle>>>;
    events?: Maybe<Array<Maybe<StEventCalendarData>>>;
    earnings?: Maybe<Array<Maybe<StEventCalendarEarningsData>>>;
    lastUpdate?: Maybe<Scalars['String']>;
};

export type StMarketDatasetKey = {
    __typename?: 'STMarketDatasetKey';
    documentKey: Scalars['String'];
    name: Scalars['String'];
};

export type StMarketDatasetKeyCategories = {
    __typename?: 'STMarketDatasetKeyCategories';
    categories: Array<Maybe<StMarketDatasetKeyCategory>>;
};

export type StMarketDatasetKeyCategory = {
    __typename?: 'STMarketDatasetKeyCategory';
    data: Array<Maybe<StMarketDatasetKey>>;
    name: Scalars['String'];
};

export type StMarketChartDataResult = {
    __typename?: 'STMarketChartDataResult';
    currentDate?: Maybe<Scalars['String']>;
    currentValue?: Maybe<Scalars['Float']>;
    documentKey?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    parentName?: Maybe<Scalars['String']>;
    quandalKey?: Maybe<Scalars['String']>;
    lastUpdate?: Maybe<Scalars['String']>;
    data?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type StMarketChartDataResultCombined = {
    __typename?: 'STMarketChartDataResultCombined';
    currentDate?: Maybe<Scalars['String']>;
    currentValue?: Maybe<Scalars['Float']>;
    documentKey?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    parentName?: Maybe<Scalars['String']>;
    quandalKey?: Maybe<Scalars['String']>;
    lastUpdate?: Maybe<Scalars['String']>;
    data?: Maybe<Array<Maybe<Array<Maybe<Scalars['Float']>>>>>;
};

export type StMarketChartDataResultContainer = {
    __typename?: 'STMarketChartDataResultContainer';
    result?: Maybe<Array<Maybe<StMarketChartDataResult>>>;
    timestamp?: Maybe<Array<Maybe<Scalars['Float']>>>;
    keyName?: Maybe<Scalars['String']>;
};

export type StMarketChartDataResultSearch = {
    __typename?: 'STMarketChartDataResultSearch';
    result?: Maybe<Array<Maybe<StMarketChartDataResultCombined>>>;
};

export type StMarketOverviewPartialData = {
    __typename?: 'STMarketOverviewPartialData';
    sp500?: Maybe<StMarketChartDataResultContainer>;
    bonds?: Maybe<StMarketChartDataResultContainer>;
    social_security?: Maybe<StMarketChartDataResultContainer>;
    consumer_price_index_states?: Maybe<StMarketChartDataResultContainer>;
    consumer_us_price_index?: Maybe<StMarketChartDataResultContainer>;
    producer_us_price_index?: Maybe<StMarketChartDataResultContainer>;
    inflation_rate?: Maybe<StMarketChartDataResultContainer>;
    employment?: Maybe<StMarketChartDataResultContainer>;
    manufacturing?: Maybe<StMarketChartDataResultContainer>;
    exports?: Maybe<StMarketChartDataResultContainer>;
    misery_index?: Maybe<StMarketChartDataResultContainer>;
    treasury_yield?: Maybe<StMarketChartDataResultContainer>;
    investor_sentiment?: Maybe<StMarketChartDataResultContainer>;
    bitcoin?: Maybe<StMarketChartDataResultContainer>;
    lastUpdate?: Maybe<Scalars['String']>;
};

export type StMarketTopTableCryptoData = {
    __typename?: 'STMarketTopTableCryptoData';
    circulatingSupply?: Maybe<Scalars['Float']>;
    coinImageUrl?: Maybe<Scalars['String']>;
    currency?: Maybe<Scalars['String']>;
    fiftyTwoWeekHigh?: Maybe<Scalars['Float']>;
    fiftyTwoWeekLow?: Maybe<Scalars['Float']>;
    marketCap?: Maybe<Scalars['Float']>;
    quoteType?: Maybe<Scalars['String']>;
    regularMarketChange?: Maybe<Scalars['Float']>;
    regularMarketChangePercent?: Maybe<Scalars['Float']>;
    regularMarketClosed?: Maybe<Scalars['Float']>;
    regularMarketOpen?: Maybe<Scalars['Float']>;
    regularMarketPrice?: Maybe<Scalars['Float']>;
    regularMarketVolume?: Maybe<Scalars['Float']>;
    shortName?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
    volume24Hr?: Maybe<Scalars['Float']>;
    volumeAllCurrencies?: Maybe<Scalars['Float']>;
};

export type StMarketTopTableSymbolData = {
    __typename?: 'STMarketTopTableSymbolData';
    averageDailyVolume3Month?: Maybe<Scalars['Float']>;
    currency?: Maybe<Scalars['String']>;
    fiftyTwoWeekHigh?: Maybe<Scalars['Float']>;
    fiftyTwoWeekLow?: Maybe<Scalars['Float']>;
    logo_url?: Maybe<Scalars['String']>;
    longName?: Maybe<Scalars['String']>;
    marketCap?: Maybe<Scalars['Float']>;
    quoteType?: Maybe<Scalars['String']>;
    recommendationKey?: Maybe<Scalars['String']>;
    recommendationMean?: Maybe<Scalars['Float']>;
    regularMarketChange?: Maybe<Scalars['Float']>;
    regularMarketChangePercent?: Maybe<Scalars['Float']>;
    regularMarketOpen?: Maybe<Scalars['Float']>;
    regularMarketPreviousClose?: Maybe<Scalars['Float']>;
    regularMarketPrice?: Maybe<Scalars['Float']>;
    regularMarketVolume?: Maybe<Scalars['Float']>;
    shortName?: Maybe<Scalars['String']>;
    symbol?: Maybe<Scalars['String']>;
    trailingPE?: Maybe<Scalars['String']>;
};

export type StockDetails = {
    __typename?: 'StockDetails';
    id: Scalars['String'];
    analysis?: Maybe<Analysis>;
    balanceSheet?: Maybe<BalanceSheet>;
    cashFlow?: Maybe<CashFlow>;
    incomeStatement?: Maybe<IncomeStatement>;
    stats: Stats;
    recommendation?: Maybe<Array<Maybe<Recommendations>>>;
    stockNews?: Maybe<Array<Maybe<NewsArticle>>>;
    companyData?: Maybe<CompanyData>;
    summary: Summary;
    metric?: Maybe<Metric>;
    dividends?: Maybe<Dividens>;
    historicalMetrics?: Maybe<HistoricalMetrics>;
    institutionOwnerships?: Maybe<Array<Maybe<InstitutionOwnership>>>;
    insiderTransactions?: Maybe<Array<Maybe<InsiderTransaction>>>;
};

export type StPortfolio = {
    __typename?: 'STPortfolio';
    portfolioInvested: Scalars['Float'];
    portfolioCash: Scalars['Float'];
    portfolioWeeklyChange: Scalars['Float'];
    portfolioWeeklyGrowth: Scalars['Float'];
    date?: Maybe<Scalars['String']>;
};

export type StPortfolioWeeklyChange = {
    __typename?: 'STPortfolioWeeklyChange';
    portfolio: StPortfolio;
    transactionsBuy: StPortfolioWeeklyChangeTransactions;
    transactionsSell: StPortfolioWeeklyChangeTransactions;
    date?: Maybe<Scalars['String']>;
};

export type StPortfolioWeeklyChangeTransactions = {
    __typename?: 'STPortfolioWeeklyChangeTransactions';
    total: Scalars['Float'];
    transactions?: Maybe<Array<Maybe<StTransaction>>>;
};

export type StRank = {
    __typename?: 'STRank';
    rankGainers: Scalars['Float'];
    rankLosers: Scalars['Float'];
    rankPortfolio: Scalars['Float'];
    rankProfit: Scalars['Float'];
    rankNumberOfTrades: Scalars['Float'];
    date: Scalars['String'];
};

export type StSearchGroups = {
    __typename?: 'STSearchGroups';
    groups: Array<Maybe<StGroupPartialData>>;
};

export type StSimpleChart = {
    __typename?: 'STSimpleChart';
    date: Scalars['String'];
    data: Scalars['Float'];
    label?: Maybe<Scalars['String']>;
};

export type StStockHistoricalClosedDataWithPeriod = {
    __typename?: 'STStockHistoricalClosedDataWithPeriod';
    livePrice?: Maybe<Scalars['Float']>;
    price?: Maybe<Array<Maybe<Scalars['Float']>>>;
    symbol?: Maybe<Scalars['String']>;
    period?: Maybe<Scalars['String']>;
};

export type StStockHistoricalDataWithPeriod = {
    __typename?: 'STStockHistoricalDataWithPeriod';
    livePrice?: Maybe<Scalars['Float']>;
    price?: Maybe<Array<Maybe<Array<Maybe<Scalars['Float']>>>>>;
    symbol?: Maybe<Scalars['String']>;
    period?: Maybe<Scalars['String']>;
};

export type StStockSuggestion = {
    __typename?: 'STStockSuggestion';
    summary?: Maybe<Summary>;
    historicalData?: Maybe<StStockHistoricalClosedDataWithPeriod>;
};

export type StStockWatchInputlistIdentifier = {
    userId: Scalars['String'];
    id?: Maybe<Scalars['String']>;
    additionalData?: Maybe<Scalars['String']>;
};

export type StStockWatchlist = {
    __typename?: 'STStockWatchlist';
    id: Scalars['String'];
    name: Scalars['String'];
    date?: Maybe<Scalars['String']>;
    userId: Scalars['String'];
    summaries?: Maybe<Array<Maybe<Summary>>>;
};

export type StTransaction = {
    __typename?: 'STTransaction';
    transactionId?: Maybe<Scalars['String']>;
    user?: Maybe<StUserIndetificationInformation>;
    symbol: Scalars['String'];
    symbol_logo_url: Scalars['String'];
    price: Scalars['Float'];
    return?: Maybe<Scalars['Float']>;
    returnChange?: Maybe<Scalars['Float']>;
    units: Scalars['Float'];
    date: Scalars['String'];
    operation: StTransactionOperationEnum;
    summary?: Maybe<Summary>;
};

export type StTransactionInput = {
    symbol: Scalars['String'];
    symbol_logo_url: Scalars['String'];
    price: Scalars['Float'];
    userId: Scalars['String'];
    units: Scalars['Float'];
    operation: StTransactionOperationEnum;
};

export enum StTransactionOperationEnum {
    Buy = 'BUY',
    Sell = 'SELL'
}

export type StUserAuthenticationInput = {
    uid?: Maybe<Scalars['String']>;
    displayName?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
    photoURL?: Maybe<Scalars['String']>;
    providerId?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type StUserEditDataInput = {
    userId?: Maybe<Scalars['String']>;
    finnhubKey?: Maybe<Scalars['String']>;
    nickName?: Maybe<Scalars['String']>;
    photoURL?: Maybe<Scalars['String']>;
};

export type StUserGroups = {
    __typename?: 'STUserGroups';
    groupInvitationSent?: Maybe<Array<Maybe<StGroupPartialData>>>;
    groupInvitationReceived?: Maybe<Array<Maybe<StGroupPartialData>>>;
    groupOwner?: Maybe<Array<Maybe<StGroupPartialData>>>;
    groupMember?: Maybe<Array<Maybe<StGroupPartialData>>>;
};

export type StUserHistoricalData = {
    __typename?: 'STUserHistoricalData';
    portfolioWeeklyChange: Array<Maybe<StPortfolioWeeklyChange>>;
    bestAchievedRanks: Array<Maybe<StRank>>;
    resetedAccount: Array<Maybe<StUserResetedAccount>>;
    userLogs: Array<Maybe<StLog>>;
};

export type StUserIndetificationInformation = {
    __typename?: 'STUserIndetificationInformation';
    uid: Scalars['String'];
    nickName: Scalars['String'];
    locale?: Maybe<Scalars['String']>;
    photoURL: Scalars['String'];
    accountCreatedDate: Scalars['String'];
};

export type StUserIndetificationInformationInput = {
    uid: Scalars['String'];
    nickName: Scalars['String'];
    locale?: Maybe<Scalars['String']>;
    photoURL: Scalars['String'];
    accountCreatedDate: Scalars['String'];
};

export type StUserPartialInformation = {
    __typename?: 'STUserPartialInformation';
    uid: Scalars['String'];
    nickName: Scalars['String'];
    locale?: Maybe<Scalars['String']>;
    photoURL?: Maybe<Scalars['String']>;
    accountCreatedDate: Scalars['String'];
    portfolio?: Maybe<StPortfolio>;
    rank?: Maybe<StRank>;
};

export type StUserPrivateData = {
    __typename?: 'STUserPrivateData';
    uid?: Maybe<Scalars['String']>;
    finnhubKey?: Maybe<Scalars['String']>;
    tradingEnabledDate?: Maybe<Scalars['String']>;
    roles?: Maybe<Array<Maybe<Scalars['String']>>>;
    email: Scalars['String'];
    displayName: Scalars['String'];
    providerId?: Maybe<Scalars['String']>;
    status: User_Status;
    geographic?: Maybe<StGeographic>;
    nicknameLastChange?: Maybe<Scalars['String']>;
};

export type StUserPublicData = {
    __typename?: 'STUserPublicData';
    uid: Scalars['String'];
    nickName: Scalars['String'];
    locale?: Maybe<Scalars['String']>;
    photoURL?: Maybe<Scalars['String']>;
    accountCreatedDate: Scalars['String'];
    lastSignInDate: Scalars['String'];
    portfolio?: Maybe<StPortfolio>;
    rank?: Maybe<StRank>;
    holdings: Array<Maybe<StTransaction>>;
    transactionsSnippets: Array<Maybe<StTransaction>>;
    activity?: Maybe<User_Activity>;
    groups: StUserGroups;
    userPrivateData: StUserPrivateData;
    userHistoricalData: StUserHistoricalData;
    stockWatchlist: Array<Maybe<StStockWatchlist>>;
};

export type StUserResetedAccount = {
    __typename?: 'STUserResetedAccount';
    date: Scalars['String'];
    portfolioTotal: Scalars['Float'];
};

export type Summary = {
    __typename?: 'Summary';
    id?: Maybe<Scalars['String']>;
    sandPFiveTwoWeekChange?: Maybe<Scalars['Float']>;
    lastSplitFactor?: Maybe<Scalars['String']>;
    lastSplitDate?: Maybe<Scalars['Float']>;
    fullTimeEmployees?: Maybe<Scalars['Float']>;
    netIncomeEmployeeAnnual?: Maybe<Scalars['Float']>;
    revenueEmployeeAnnual?: Maybe<Scalars['Float']>;
    website?: Maybe<Scalars['String']>;
    residance?: Maybe<SummaryResidance>;
    avgVolume?: Maybe<Scalars['Float']>;
    ePSTTM?: Maybe<Scalars['String']>;
    earningsDate?: Maybe<Scalars['String']>;
    exDividendDate?: Maybe<Scalars['String']>;
    fiveTwoWeekRange?: Maybe<Scalars['String']>;
    forwardDividendYield?: Maybe<Scalars['String']>;
    oneyTargetEst?: Maybe<Scalars['Float']>;
    open?: Maybe<Scalars['String']>;
    pERatioTTM?: Maybe<Scalars['String']>;
    volume?: Maybe<Scalars['Float']>;
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
    sharesOutstanding?: Maybe<Scalars['Float']>;
    longBusinessSummary?: Maybe<Scalars['String']>;
    yearToDatePriceReturn?: Maybe<Scalars['Float']>;
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

export type SummaryResidance = {
    __typename?: 'SummaryResidance';
    city?: Maybe<Scalars['String']>;
    state?: Maybe<Scalars['String']>;
    country?: Maybe<Scalars['String']>;
    addressOne?: Maybe<Scalars['String']>;
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


export enum User_Activity {
    SignedIn = 'SIGNED_IN',
    SignedOut = 'SIGNED_OUT'
}

export enum User_Roles_Enum {
    RoleAdmin = 'ROLE_ADMIN',
    RoleGroupCreate = 'ROLE_GROUP_CREATE'
}

export enum User_Status {
    Pending = 'PENDING',
    Denied = 'DENIED',
    Allowed = 'ALLOWED'
}

export enum User_Status_In_Group {
    Owner = 'OWNER',
    Manager = 'MANAGER',
    Member = 'MEMBER',
    InvitationSent = 'INVITATION_SENT',
    InvitationReceived = 'INVITATION_RECEIVED'
}

export type StGroupUserFragmentFragment = (
    { __typename?: 'STGroupUser' }
    & Pick<StGroupUser, 'sinceDate'>
    & {
    user: (
        { __typename?: 'STUserPartialInformation' }
        & StUserPartialInformationFragmentFragment
        )
}
    );

export type StGroupPartialDataFragmentFragment = (
    { __typename?: 'STGroupPartialData' }
    & Pick<StGroupPartialData, 'groupId' | 'name' | 'description' | 'lastUpdateDate' | 'lastEditedDate' | 'createdDate'>
    & {
    portfolio: (
        { __typename?: 'STPortfolio' }
        & StPortfolioFragmentFragment
        ), owner: (
        { __typename?: 'STGroupUser' }
        & StGroupUserFragmentFragment
        ), currentAchievedRanks?: Maybe<(
        { __typename?: 'STRank' }
        & StRankFragmentFragment
        )>
}
    );

export type StGroupAllDataFragmentFragment = (
    { __typename?: 'STGroupAllData' }
    & Pick<StGroupAllData, 'groupId' | 'name' | 'description' | 'imageUrl' | 'imagePath' | 'lastUpdateDate' | 'lastEditedDate' | 'createdDate'>
    & {
    portfolio: (
        { __typename?: 'STPortfolio' }
        & StPortfolioFragmentFragment
        ), owner: (
        { __typename?: 'STGroupUser' }
        & StGroupUserFragmentFragment
        ), currentAchievedRanks?: Maybe<(
        { __typename?: 'STRank' }
        & StRankFragmentFragment
        )>, bestAchievedRanks: Array<Maybe<(
        { __typename?: 'STRank' }
        & StRankFragmentFragment
        )>>, topTransactions: Array<Maybe<(
        { __typename?: 'STTransaction' }
        & StTransactionFragmentFragment
        )>>, lastTransactions: Array<Maybe<(
        { __typename?: 'STTransaction' }
        & StTransactionFragmentFragment
        )>>, groupLogs: Array<Maybe<(
        { __typename?: 'STLog' }
        & StLogsFragmentFragment
        )>>, portfolioChart: Array<Maybe<(
        { __typename?: 'STPortfolio' }
        & StPortfolioFragmentFragment
        )>>, managers: Array<Maybe<(
        { __typename?: 'STGroupUser' }
        & StGroupUserFragmentFragment
        )>>, members: Array<Maybe<(
        { __typename?: 'STGroupUser' }
        & StGroupUserFragmentFragment
        )>>, invitationSent: Array<Maybe<(
        { __typename?: 'STGroupUser' }
        & StGroupUserFragmentFragment
        )>>, invitationReceived?: Maybe<Array<Maybe<(
        { __typename?: 'STGroupUser' }
        & StGroupUserFragmentFragment
        )>>>
}
    );

export type QueryStGroupAllDataByGroupIdQueryVariables = Exact<{
    groupId: Scalars['String'];
}>;


export type QueryStGroupAllDataByGroupIdQuery = (
    { __typename?: 'Query' }
    & {
    querySTGroupAllDataByGroupId?: Maybe<(
        { __typename?: 'STGroupAllData' }
        & StGroupAllDataFragmentFragment
        )>
}
    );

export type QueryStGroupPartialDataByGroupNameQueryVariables = Exact<{
    groupName: Scalars['String'];
}>;


export type QueryStGroupPartialDataByGroupNameQuery = (
    { __typename?: 'Query' }
    & {
    querySTGroupPartialDataByGroupName?: Maybe<(
        { __typename?: 'STSearchGroups' }
        & {
        groups: Array<Maybe<(
            { __typename?: 'STGroupPartialData' }
            & StGroupPartialDataFragmentFragment
            )>>
    }
        )>
}
    );

export type CreateGroupMutationVariables = Exact<{
    groupInput: StGroupAllDataInput;
}>;


export type CreateGroupMutation = (
    { __typename?: 'Mutation' }
    & {
    createGroup?: Maybe<(
        { __typename?: 'STGroupPartialData' }
        & StGroupPartialDataFragmentFragment
        )>
}
    );

export type EditGroupMutationVariables = Exact<{
    groupInput: StGroupAllDataInput;
}>;


export type EditGroupMutation = (
    { __typename?: 'Mutation' }
    & {
    editGroup?: Maybe<(
        { __typename?: 'STGroupPartialData' }
        & StGroupPartialDataFragmentFragment
        )>
}
    );

export type DeleteGroupMutationVariables = Exact<{
    uid: Scalars['String'];
    groupId: Scalars['String'];
}>;


export type DeleteGroupMutation = (
    { __typename?: 'Mutation' }
    & Pick<Mutation, 'deleteGroup'>
    );

export type ToggleInvitationRequestToGroupMutationVariables = Exact<{
    uid: Scalars['String'];
    groupId: Scalars['String'];
}>;


export type ToggleInvitationRequestToGroupMutation = (
    { __typename?: 'Mutation' }
    & {
    toggleInvitationRequestToGroup?: Maybe<(
        { __typename?: 'STGroupPartialData' }
        & StGroupPartialDataFragmentFragment
        )>
}
    );

export type AnswerReceivedGroupInvitationMutationVariables = Exact<{
    uid: Scalars['String'];
    groupId: Scalars['String'];
    accept: Scalars['Boolean'];
}>;


export type AnswerReceivedGroupInvitationMutation = (
    { __typename?: 'Mutation' }
    & {
    answerReceivedGroupInvitation?: Maybe<(
        { __typename?: 'STGroupPartialData' }
        & StGroupPartialDataFragmentFragment
        )>
}
    );

export type LeaveGroupMutationVariables = Exact<{
    uid: Scalars['String'];
    groupId: Scalars['String'];
}>;


export type LeaveGroupMutation = (
    { __typename?: 'Mutation' }
    & Pick<Mutation, 'leaveGroup'>
    );

export type StMarketChartDataFragmentFragment = (
    { __typename?: 'STMarketChartDataResult' }
    & Pick<StMarketChartDataResult, 'currentDate' | 'currentValue' | 'data' | 'documentKey' | 'name' | 'parentName' | 'quandalKey' | 'lastUpdate'>
    );

export type StMarketChartDataResultContainerFragmentFragment = (
    { __typename?: 'STMarketChartDataResultContainer' }
    & Pick<StMarketChartDataResultContainer, 'timestamp' | 'keyName'>
    & {
    result?: Maybe<Array<Maybe<(
        { __typename?: 'STMarketChartDataResult' }
        & StMarketChartDataFragmentFragment
        )>>>
}
    );

export type StMarketTopTableCryptoDataFragmentFragment = (
    { __typename?: 'STMarketTopTableCryptoData' }
    & Pick<StMarketTopTableCryptoData, 'circulatingSupply' | 'coinImageUrl' | 'currency' | 'fiftyTwoWeekHigh' | 'fiftyTwoWeekLow' | 'marketCap' | 'quoteType' | 'regularMarketChange' | 'regularMarketChangePercent' | 'regularMarketClosed' | 'regularMarketOpen' | 'regularMarketPrice' | 'regularMarketVolume' | 'shortName' | 'symbol' | 'volume24Hr' | 'volumeAllCurrencies'>
    );

export type StMarketTopTableSymbolDataFragmentFragment = (
    { __typename?: 'STMarketTopTableSymbolData' }
    & Pick<StMarketTopTableSymbolData, 'averageDailyVolume3Month' | 'currency' | 'fiftyTwoWeekHigh' | 'fiftyTwoWeekLow' | 'logo_url' | 'longName' | 'marketCap' | 'quoteType' | 'recommendationKey' | 'recommendationMean' | 'regularMarketChange' | 'regularMarketChangePercent' | 'regularMarketOpen' | 'regularMarketPreviousClose' | 'regularMarketPrice' | 'regularMarketVolume' | 'shortName' | 'symbol' | 'trailingPE'>
    );

export type QueryStMarketHistoryOverviewQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryStMarketHistoryOverviewQuery = (
    { __typename?: 'Query' }
    & {
    querySTMarketHistoryOverview?: Maybe<(
        { __typename?: 'STMarketOverviewPartialData' }
        & Pick<StMarketOverviewPartialData, 'lastUpdate'>
        & {
        sp500?: Maybe<(
            { __typename?: 'STMarketChartDataResultContainer' }
            & StMarketChartDataResultContainerFragmentFragment
            )>, bonds?: Maybe<(
            { __typename?: 'STMarketChartDataResultContainer' }
            & StMarketChartDataResultContainerFragmentFragment
            )>, social_security?: Maybe<(
            { __typename?: 'STMarketChartDataResultContainer' }
            & StMarketChartDataResultContainerFragmentFragment
            )>, consumer_price_index_states?: Maybe<(
            { __typename?: 'STMarketChartDataResultContainer' }
            & StMarketChartDataResultContainerFragmentFragment
            )>, consumer_us_price_index?: Maybe<(
            { __typename?: 'STMarketChartDataResultContainer' }
            & StMarketChartDataResultContainerFragmentFragment
            )>, producer_us_price_index?: Maybe<(
            { __typename?: 'STMarketChartDataResultContainer' }
            & StMarketChartDataResultContainerFragmentFragment
            )>, inflation_rate?: Maybe<(
            { __typename?: 'STMarketChartDataResultContainer' }
            & StMarketChartDataResultContainerFragmentFragment
            )>, employment?: Maybe<(
            { __typename?: 'STMarketChartDataResultContainer' }
            & StMarketChartDataResultContainerFragmentFragment
            )>, manufacturing?: Maybe<(
            { __typename?: 'STMarketChartDataResultContainer' }
            & StMarketChartDataResultContainerFragmentFragment
            )>, exports?: Maybe<(
            { __typename?: 'STMarketChartDataResultContainer' }
            & StMarketChartDataResultContainerFragmentFragment
            )>, misery_index?: Maybe<(
            { __typename?: 'STMarketChartDataResultContainer' }
            & StMarketChartDataResultContainerFragmentFragment
            )>, treasury_yield?: Maybe<(
            { __typename?: 'STMarketChartDataResultContainer' }
            & StMarketChartDataResultContainerFragmentFragment
            )>, investor_sentiment?: Maybe<(
            { __typename?: 'STMarketChartDataResultContainer' }
            & StMarketChartDataResultContainerFragmentFragment
            )>, bitcoin?: Maybe<(
            { __typename?: 'STMarketChartDataResultContainer' }
            & StMarketChartDataResultContainerFragmentFragment
            )>
    }
        )>
}
    );

export type StEventCalendarDataFragmentFragment = (
    { __typename?: 'STEventCalendarData' }
    & Pick<StEventCalendarData, 'date' | 'day' | 'month' | 'startdatetime' | 'year' | 'earningscount' | 'economiceventcount' | 'ipoinfocount' | 'splitscount'>
    );

export type StEventCalendarEarningsDataFragmentFragment = (
    { __typename?: 'STEventCalendarEarningsData' }
    & Pick<StEventCalendarEarningsData, 'companyshortname' | 'epsactual' | 'epsestimate' | 'epssurprisepct' | 'gmtOffsetMilliSeconds' | 'quoteType' | 'startdatetime' | 'startdatetimetype' | 'ticker' | 'timeZoneShortName'>
    );

export type QueryMarketDailyOverviewQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryMarketDailyOverviewQuery = (
    { __typename?: 'Query' }
    & {
    queryMarketDailyOverview?: Maybe<(
        { __typename?: 'STMarketDailyOverview' }
        & Pick<StMarketDailyOverview, 'lastUpdate'>
        & {
        stocks_day_gainers?: Maybe<Array<Maybe<(
            { __typename?: 'STMarketTopTableSymbolData' }
            & StMarketTopTableSymbolDataFragmentFragment
            )>>>, stocks_day_losers?: Maybe<Array<Maybe<(
            { __typename?: 'STMarketTopTableSymbolData' }
            & StMarketTopTableSymbolDataFragmentFragment
            )>>>, stocks_day_active?: Maybe<Array<Maybe<(
            { __typename?: 'STMarketTopTableSymbolData' }
            & StMarketTopTableSymbolDataFragmentFragment
            )>>>, stocks_undervalued_growth_stocks?: Maybe<Array<Maybe<(
            { __typename?: 'STMarketTopTableSymbolData' }
            & StMarketTopTableSymbolDataFragmentFragment
            )>>>, stocks_growth_technology_stocks?: Maybe<Array<Maybe<(
            { __typename?: 'STMarketTopTableSymbolData' }
            & StMarketTopTableSymbolDataFragmentFragment
            )>>>, stocks_undervalued_large_caps?: Maybe<Array<Maybe<(
            { __typename?: 'STMarketTopTableSymbolData' }
            & StMarketTopTableSymbolDataFragmentFragment
            )>>>, stocks_aggressive_small_caps?: Maybe<Array<Maybe<(
            { __typename?: 'STMarketTopTableSymbolData' }
            & StMarketTopTableSymbolDataFragmentFragment
            )>>>, stocks_small_cap_gainers?: Maybe<Array<Maybe<(
            { __typename?: 'STMarketTopTableSymbolData' }
            & StMarketTopTableSymbolDataFragmentFragment
            )>>>, stock_suggestions?: Maybe<Array<Maybe<(
            { __typename?: 'STStockSuggestion' }
            & {
            summary?: Maybe<(
                { __typename?: 'Summary' }
                & StockSummaryFragmentFragment
                )>, historicalData?: Maybe<(
                { __typename?: 'STStockHistoricalClosedDataWithPeriod' }
                & Pick<StStockHistoricalClosedDataWithPeriod, 'livePrice' | 'price' | 'symbol' | 'period'>
                )>
        }
            )>>>, top_crypto?: Maybe<Array<Maybe<(
            { __typename?: 'STMarketTopTableCryptoData' }
            & StMarketTopTableCryptoDataFragmentFragment
            )>>>, news?: Maybe<Array<Maybe<(
            { __typename?: 'NewsArticle' }
            & NewsArticleFragmentFragment
            )>>>, events?: Maybe<Array<Maybe<(
            { __typename?: 'STEventCalendarData' }
            & StEventCalendarDataFragmentFragment
            )>>>, earnings?: Maybe<Array<Maybe<(
            { __typename?: 'STEventCalendarEarningsData' }
            & StEventCalendarEarningsDataFragmentFragment
            )>>>
    }
        )>
}
    );

export type QueryStMarketCalendarEventsQueryVariables = Exact<{
    date: Scalars['String'];
}>;


export type QueryStMarketCalendarEventsQuery = (
    { __typename?: 'Query' }
    & {
    queryStMarketCalendarEvents?: Maybe<(
        { __typename?: 'StMarketCalendarEvents' }
        & {
        events?: Maybe<Array<Maybe<(
            { __typename?: 'STEventCalendarData' }
            & StEventCalendarDataFragmentFragment
            )>>>
    }
        )>
}
    );

export type QueryStMarketCalendarEventsEarningsQueryVariables = Exact<{
    date: Scalars['String'];
}>;


export type QueryStMarketCalendarEventsEarningsQuery = (
    { __typename?: 'Query' }
    & {
    queryStMarketCalendarEventsEarnings?: Maybe<(
        { __typename?: 'StMarketCalendarEventsEarnings' }
        & {
        earnings?: Maybe<Array<Maybe<(
            { __typename?: 'STEventCalendarEarningsData' }
            & StEventCalendarEarningsDataFragmentFragment
            )>>>
    }
        )>
}
    );

export type QueryStMarketAllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryStMarketAllCategoriesQuery = (
    { __typename?: 'Query' }
    & {
    queryStMarketAllCategories?: Maybe<(
        { __typename?: 'STMarketDatasetKeyCategories' }
        & {
        categories: Array<Maybe<(
            { __typename?: 'STMarketDatasetKeyCategory' }
            & Pick<StMarketDatasetKeyCategory, 'name'>
            & {
            data: Array<Maybe<(
                { __typename?: 'STMarketDatasetKey' }
                & Pick<StMarketDatasetKey, 'documentKey' | 'name'>
                )>>
        }
            )>>
    }
        )>
}
    );

export type QueryMultipleStMarketDataQueryVariables = Exact<{
    key: Scalars['String'];
}>;


export type QueryMultipleStMarketDataQuery = (
    { __typename?: 'Query' }
    & {
    queryMultipleStMarketData?: Maybe<(
        { __typename?: 'STMarketChartDataResultSearch' }
        & {
        result?: Maybe<Array<Maybe<(
            { __typename?: 'STMarketChartDataResultCombined' }
            & Pick<StMarketChartDataResultCombined, 'currentDate' | 'currentValue' | 'documentKey' | 'name' | 'parentName' | 'quandalKey' | 'lastUpdate' | 'data'>
            )>>>
    }
        )>
}
    );

export type QueryStMarketDataQueryVariables = Exact<{
    key: Scalars['String'];
}>;


export type QueryStMarketDataQuery = (
    { __typename?: 'Query' }
    & {
    queryStMarketData?: Maybe<(
        { __typename?: 'STMarketChartDataResultCombined' }
        & Pick<StMarketChartDataResultCombined, 'currentDate' | 'currentValue' | 'documentKey' | 'name' | 'parentName' | 'quandalKey' | 'lastUpdate' | 'data'>
        )>
}
    );

export type StPortfolioFragmentFragment = (
    { __typename?: 'STPortfolio' }
    & Pick<StPortfolio, 'portfolioInvested' | 'portfolioCash' | 'portfolioWeeklyChange' | 'portfolioWeeklyGrowth' | 'date'>
    );

export type StPortfolioWeeklyChangeFragmentFragment = (
    { __typename?: 'STPortfolioWeeklyChange' }
    & Pick<StPortfolioWeeklyChange, 'date'>
    & {
    portfolio: (
        { __typename?: 'STPortfolio' }
        & StPortfolioFragmentFragment
        ), transactionsBuy: (
        { __typename?: 'STPortfolioWeeklyChangeTransactions' }
        & Pick<StPortfolioWeeklyChangeTransactions, 'total'>
        & {
        transactions?: Maybe<Array<Maybe<(
            { __typename?: 'STTransaction' }
            & StTransactionFragmentFragment
            )>>>
    }
        ), transactionsSell: (
        { __typename?: 'STPortfolioWeeklyChangeTransactions' }
        & Pick<StPortfolioWeeklyChangeTransactions, 'total'>
        & {
        transactions?: Maybe<Array<Maybe<(
            { __typename?: 'STTransaction' }
            & StTransactionFragmentFragment
            )>>>
    }
        )
}
    );

export type StRankFragmentFragment = (
    { __typename?: 'STRank' }
    & Pick<StRank, 'rankGainers' | 'rankLosers' | 'rankPortfolio' | 'rankProfit' | 'rankNumberOfTrades' | 'date'>
    );

export type StLogsFragmentFragment = (
    { __typename?: 'STLog' }
    & Pick<StLog, 'date' | 'logText'>
    );

export type SummaryResidanceFragmentFragment = (
    { __typename?: 'SummaryResidance' }
    & Pick<SummaryResidance, 'city' | 'state' | 'country' | 'addressOne' | 'zip'>
    );

export type StockSummaryFragmentFragment = (
    { __typename?: 'Summary' }
    & Pick<Summary, 'id' | 'sandPFiveTwoWeekChange' | 'lastSplitFactor' | 'lastSplitDate' | 'fullTimeEmployees' | 'netIncomeEmployeeAnnual' | 'revenueEmployeeAnnual' | 'website' | 'ePSTTM' | 'earningsDate' | 'exDividendDate' | 'fiveTwoWeekRange' | 'oneyTargetEst' | 'pERatioTTM' | 'currency' | 'industry' | 'logo_url' | 'marketPrice' | 'previousClose' | 'recommendationKey' | 'recommendationMean' | 'sector' | 'targetEstOneyPercent' | 'symbol' | 'weekRangeFiveTwoMax' | 'weekRangeFiveTwoMin' | 'longName' | 'marketCap' | 'sharesOutstanding' | 'longBusinessSummary' | 'yearToDatePriceReturn' | 'volume' | 'avgVolume'>
    & {
    residance?: Maybe<(
        { __typename?: 'SummaryResidance' }
        & SummaryResidanceFragmentFragment
        )>
}
    );

export type SheetDataFragmentFragment = (
    { __typename?: 'SheetData' }
    & Pick<SheetData, 'change' | 'data' | 'name'>
    );

export type BalanceSheetDataFragmentFragment = (
    { __typename?: 'BalanceSheetData' }
    & {
    totalAssets?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, totalCurrentAssets?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, cash?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, otherCurrentAssets?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, netReceivables?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, inventory?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, prepaidAssets?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, accumulatedComprehensiveIncome?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, netTangibleAssets?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, otherAssets?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, goodwill?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, totalSecuritiesForSale?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, totalLiab?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, totalCurrentLiabilities?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, operatingLeaseLiability?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, prepaidExpense?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, accountsPayable?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, otherCurrentLiab?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, otherLiab?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, shortTermInvestments?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, longTermInvestments?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, shortLongTermDebt?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, longTermDebt?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, netEquity?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, totalStockholderEquity?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, otherStockholderEquity?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, propertyPlantEquipment?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, retainedEarnings?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, deferredRevenue?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, treasuryStock?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, commonStock?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, commonStockValue?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, endDate?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>
}
    );

export type CashFlowDataFragmentFragment = (
    { __typename?: 'CashFlowData' }
    & {
    totalCashFromOperatingActivities?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, netIncome?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, incomeTax?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, deferredTaxes?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, accountsReceivable?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, accruedExpenses?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, CustomerDeposits?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, shareBasedCompensation?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, totalCashflowsFromInvestingActivities?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, investments?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, purchasesOfSecuritie?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, marketSecurities?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, acquisitionsOfBusinesses?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, accruedEquipment?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, otherCashflowsFromInvestingActivities?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, totalCashFromFinancingActivities?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, netBorrowings?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, longTermDebtInsurance?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, issuanceOfStock?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, salesOfSecurities?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, maturitiesOfSecurities?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, dividendsPaid?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, otherCashflowsFromFinancingActivities?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, endDate?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, depreciation?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, commercialPaperRepayments?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, shortTermDebtRepayments?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, longTermDebtRepayments?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, capitalExpenditures?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, repurchaseOfStock?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>
}
    );

export type IncomeStatementFragmentFragment = (
    { __typename?: 'IncomeStatementData' }
    & {
    totalRevenue?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, costOfRevenue?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, grossProfit?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, operatingIncome?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, incomeBeforeTax?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, incomeTaxProvision?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, incomeTaxExpense?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, netIncome?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, netIncomeFromContinuingOps?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, netIncomeApplicableToCommonShares?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, totalOperatingExpenses?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, administrativeExpense?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, marketingExpense?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, interestExpense?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, researchDevelopment?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, costOfSales?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, totalOtherIncomeExpenseNet?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, otherOperatingExpenses?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, ebit?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, endDate?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, sellingGeneralAdministrative?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, dilutedEarnings?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, basicEarnings?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>, dividendsInCash?: Maybe<(
        { __typename?: 'SheetData' }
        & SheetDataFragmentFragment
        )>
}
    );

export type GrowthEstimatesFragmentFragment = (
    { __typename?: 'GrowthEstimates' }
    & Pick<GrowthEstimates, 'currentQtr' | 'currentQtrPrct' | 'currentYear' | 'currentYearPrct' | 'nextFiveYearsperannum' | 'nextFiveYearsperannumPrct' | 'nextQtr' | 'nextQtrPrct' | 'nextYear' | 'nextYearPrct' | 'pastFiveYearsperannum' | 'pastFiveYearsperannumPrct' | 'name'>
    );

export type RevenueEstimateFragmentFragment = (
    { __typename?: 'RevenueEstimate' }
    & Pick<RevenueEstimate, 'avgEstimate' | 'avgEstimateNumber' | 'highEstimate' | 'highEstimateNumber' | 'lowEstimate' | 'lowEstimateNumber' | 'noofAnalysts' | 'salesGrowthyearest' | 'salesGrowthyearestNumber' | 'yearAgoSales' | 'name'>
    );

export type StatsFragmentFragment = (
    { __typename?: 'Stats' }
    & Pick<Stats, 'priceSalesttm' | 'leveredFreeCashFlowttm' | 'forwardPEOne' | 'quarterlyEarningsGrowthyoy' | 'quarterlyRevenueGrowthyoy' | 'returnonEquityttm' | 'revenuePerSharettm' | 'totalCashPerSharemrq' | 'totalDebtEquitymrq' | 'totalDebtmrq' | 'trailingPE' | 'eBITDA' | 'bookValuePerSharemrq' | 'currentRatiomrq' | 'dilutedEPSttm'>
    );

export type RecommendationFragmentFragment = (
    { __typename?: 'Recommendations' }
    & Pick<Recommendations, 'buy' | 'hold' | 'period' | 'sell' | 'strongBuy' | 'strongSell' | 'symbol'>
    );

export type NewsArticleFragmentFragment = (
    { __typename?: 'NewsArticle' }
    & Pick<NewsArticle, 'datetime' | 'headline' | 'image' | 'sourceName' | 'summary' | 'url'>
    );

export type DefaultKeyStatisticsFragmentFragment = (
    { __typename?: 'DefaultKeyStatistics' }
    & Pick<DefaultKeyStatistics, 'bookValue' | 'dateShortInterest' | 'earningsQuarterlyGrowth' | 'enterpriseToEbitda' | 'enterpriseToRevenue' | 'enterpriseValue' | 'fiveYearAverageReturn' | 'floatShares' | 'forwardEps' | 'forwardPE' | 'heldPercentInsiders' | 'heldPercentInstitutions' | 'lastFiscalYearEnd' | 'lastSplitDate' | 'lastSplitFactor' | 'mostRecentQuarter' | 'netIncomeToCommon' | 'nextFiscalYearEnd' | 'pegRatio' | 'priceHint' | 'priceToBook' | 'profitMargins' | 'sharesOutstanding' | 'sharesPercentSharesOut' | 'sharesShort' | 'sharesShortPreviousMonthDate' | 'sharesShortPriorMonth' | 'shortPercentOfFloat' | 'shortRatio' | 'trailingEps'>
    );

export type FinancialDataFragmentFragment = (
    { __typename?: 'FinancialData' }
    & Pick<FinancialData, 'currentPrice' | 'currentRatio' | 'debtToEquity' | 'ebitda' | 'ebitdaMargins' | 'financialCurrency' | 'freeCashflow' | 'grossMargins' | 'grossProfits' | 'FloatOfAnalystOpinions' | 'operatingCashflow' | 'operatingMargins' | 'profitMargins' | 'quickRatio' | 'recommendationKey' | 'recommendationMean' | 'returnOnAssets' | 'returnOnEquity' | 'revenueGrowth' | 'revenuePerShare' | 'targetHighPrice' | 'targetLowPrice' | 'targetMeanPrice' | 'targetMedianPrice' | 'totalCash' | 'totalCashPerShare' | 'totalDebt' | 'totalRevenue'>
    );

export type MetricFragmentFragment = (
    { __typename?: 'Metric' }
    & Pick<Metric, 'fiveDayPriceReturnDaily' | 'fiveTwoWeekHigh' | 'fiveTwoWeekHighDate' | 'fiveTwoWeekLow' | 'fiveTwoWeekLowDate' | 'fiveTwoWeekPriceReturnDaily' | 'oneDayAverageTradingVolume' | 'oneThreeWeekPriceReturnDaily' | 'threeMonthAverageTradingVolume' | 'twoSixWeekPriceReturnDaily' | 'assetTurnoverAnnual' | 'assetTurnoverTTM' | 'beta' | 'bookValuePerShareAnnual' | 'bookValuePerShareQuarterly' | 'bookValueShareGrowthFiveY' | 'capitalSpendingGrowthFiveY' | 'cashFlowPerShareAnnual' | 'cashFlowPerShareTTM' | 'cashPerSharePerShareAnnual' | 'cashPerSharePerShareQuarterly' | 'currentEvfreeCashFlowAnnual' | 'currentEvfreeCashFlowTTM' | 'currentRatioAnnual' | 'currentRatioQuarterly' | 'ebitdPerShareTTM' | 'ebitdaCagrFiveY' | 'ebitdaInterimCagrFiveY' | 'epsBasicExclExtraItemsAnnual' | 'epsBasicExclExtraItemsTTM' | 'epsExclExtraItemsAnnual' | 'epsExclExtraItemsTTM' | 'epsGrowthFiveY' | 'epsGrowthQuarterlyYoy' | 'epsGrowthTTMYoy' | 'epsGrowthThreeY' | 'epsInclExtraItemsAnnual' | 'epsInclExtraItemsTTM' | 'epsNormalizedAnnual' | 'focfCagrFiveY' | 'freeCashFlowAnnual' | 'freeCashFlowPerShareTTM' | 'freeCashFlowTTM' | 'freeOperatingCashFlowrevenueFiveY' | 'freeOperatingCashFlowrevenueTTM' | 'grossMarginAnnual' | 'grossMarginFiveY' | 'grossMarginTTM' | 'inventoryTurnoverAnnual' | 'inventoryTurnoverTTM' | 'longTermDebtequityAnnual' | 'longTermDebtequityQuarterly' | 'marketCapitalization' | 'monthToDatePriceReturnDaily' | 'netDebtAnnual' | 'netDebtInterim' | 'netIncomeEmployeeAnnual' | 'netIncomeEmployeeTTM' | 'netInterestCoverageAnnual' | 'netInterestCoverageTTM' | 'netMarginGrowthFiveY' | 'netProfitMarginAnnual' | 'netProfitMarginFiveY' | 'netProfitMarginTTM' | 'operatingMarginAnnual' | 'operatingMarginFiveY' | 'operatingMarginTTM' | 'payoutRatioAnnual' | 'payoutRatioTTM' | 'pbAnnual' | 'pbQuarterly' | 'pcfShareTTM' | 'peBasicExclExtraTTM' | 'peExclExtraAnnual' | 'peExclExtraHighTTM' | 'peExclExtraTTM' | 'peExclLowTTM' | 'peInclExtraTTM' | 'peNormalizedAnnual' | 'pfcfShareAnnual' | 'pfcfShareTTM' | 'pretaxMarginAnnual' | 'pretaxMarginFiveY' | 'pretaxMarginTTM' | 'priceRelativeToSPFiveFiveTwoWeek' | 'priceRelativeToSPFiveFourWeek' | 'priceRelativeToSPFiveOneThreeWeek' | 'priceRelativeToSPFiveTwoSixWeek' | 'priceRelativeToSPFiveYtd' | 'psAnnual' | 'psTTM' | 'ptbvAnnual' | 'ptbvQuarterly' | 'quickRatioAnnual' | 'quickRatioQuarterly' | 'receivablesTurnoverAnnual' | 'receivablesTurnoverTTM' | 'revenueEmployeeAnnual' | 'revenueEmployeeTTM' | 'revenueGrowthFiveY' | 'revenueGrowthQuarterlyYoy' | 'revenueGrowthTTMYoy' | 'revenueGrowthThreeY' | 'revenuePerShareAnnual' | 'revenuePerShareTTM' | 'revenueShareGrowthFiveY' | 'roaRfy' | 'roaaFiveY' | 'roaeFiveY' | 'roaeTTM' | 'roeRfy' | 'roeTTM' | 'roiAnnual' | 'roiFiveY' | 'roiTTM' | 'tangibleBookValuePerShareAnnual' | 'tangibleBookValuePerShareQuarterly' | 'tbvCagrFiveY' | 'totalDebtCagrFiveY' | 'totalDebttotalEquityAnnual' | 'totalDebttotalEquityQuarterly' | 'yearToDatePriceReturnDaily'>
    );

export type DividensFragmentFragment = (
    { __typename?: 'Dividens' }
    & Pick<Dividens, 'currentDividendYieldTTM' | 'dividendGrowthRateFiveY' | 'dividendPerShareAnnual' | 'dividendPerShareFiveY' | 'dividendYieldFiveY' | 'dividendYieldIndicatedAnnual' | 'dividendsPerShareTTM' | 'exDividendDate' | 'trailingAnnualDividendRate' | 'trailingAnnualDividendYield' | 'forwardDividendYield'>
    );

export type HistoryFragmentFragment = (
    { __typename?: 'UpgradeDowngradeHistoryData' }
    & Pick<UpgradeDowngradeHistoryData, 'action' | 'epochGradeDate' | 'firm' | 'fromGrade' | 'toGrade'>
    );

export type EarningsChartFragmentFragment = (
    { __typename?: 'EarningsChart' }
    & Pick<EarningsChart, 'currentQuarterEstimate' | 'currentQuarterEstimateDate' | 'currentQuarterEstimateYear' | 'earningsDate'>
    & {
    quarterly?: Maybe<Array<Maybe<(
        { __typename?: 'EarningsChartData' }
        & Pick<EarningsChartData, 'actual' | 'date' | 'estimate'>
        )>>>
}
    );

export type FinancialChartDataFragmentFragment = (
    { __typename?: 'FinancialsChartData' }
    & Pick<FinancialsChartData, 'categories'>
    & {
    series?: Maybe<Array<Maybe<(
        { __typename?: 'Series' }
        & Pick<Series, 'data' | 'name'>
        )>>>
}
    );

export type EarningsFragmentFragment = (
    { __typename?: 'Earnings' }
    & Pick<Earnings, 'financialCurrency'>
    & {
    earningsChart?: Maybe<(
        { __typename?: 'EarningsChart' }
        & EarningsChartFragmentFragment
        )>, financialsChart?: Maybe<(
        { __typename?: 'FinancialsChart' }
        & {
        quarterly?: Maybe<(
            { __typename?: 'FinancialsChartData' }
            & FinancialChartDataFragmentFragment
            )>, yearly?: Maybe<(
            { __typename?: 'FinancialsChartData' }
            & FinancialChartDataFragmentFragment
            )>
    }
        )>
}
    );

export type HistoricalMetricsDataFragmentFragment = (
    { __typename?: 'HistoricalMetricsData' }
    & Pick<HistoricalMetricsData, 'name' | 'dates' | 'data'>
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
        analysis?: Maybe<(
            { __typename?: 'Analysis' }
            & {
            growthEstimates?: Maybe<(
                { __typename?: 'GrowthEstimates' }
                & GrowthEstimatesFragmentFragment
                )>, revenueEstimate?: Maybe<Array<Maybe<(
                { __typename?: 'RevenueEstimate' }
                & RevenueEstimateFragmentFragment
                )>>>
        }
            )>, balanceSheet?: Maybe<(
            { __typename?: 'BalanceSheet' }
            & {
            balanceSheetHistoryQuarterly?: Maybe<(
                { __typename?: 'BalanceSheetData' }
                & BalanceSheetDataFragmentFragment
                )>, balanceSheetHistoryYearly?: Maybe<(
                { __typename?: 'BalanceSheetData' }
                & BalanceSheetDataFragmentFragment
                )>
        }
            )>, cashFlow?: Maybe<(
            { __typename?: 'CashFlow' }
            & {
            cashflowStatementHistoryQuarterly?: Maybe<(
                { __typename?: 'CashFlowData' }
                & CashFlowDataFragmentFragment
                )>, cashflowStatementHistoryYearly?: Maybe<(
                { __typename?: 'CashFlowData' }
                & CashFlowDataFragmentFragment
                )>
        }
            )>, incomeStatement?: Maybe<(
            { __typename?: 'IncomeStatement' }
            & {
            incomeStatementHistoryQuarterly?: Maybe<(
                { __typename?: 'IncomeStatementData' }
                & IncomeStatementFragmentFragment
                )>, incomeStatementHistoryYearly?: Maybe<(
                { __typename?: 'IncomeStatementData' }
                & IncomeStatementFragmentFragment
                )>
        }
            )>, stats: (
            { __typename?: 'Stats' }
            & StatsFragmentFragment
            ), recommendation?: Maybe<Array<Maybe<(
            { __typename?: 'Recommendations' }
            & RecommendationFragmentFragment
            )>>>, stockNews?: Maybe<Array<Maybe<(
            { __typename?: 'NewsArticle' }
            & NewsArticleFragmentFragment
            )>>>, companyData?: Maybe<(
            { __typename?: 'CompanyData' }
            & {
            defaultKeyStatistics?: Maybe<(
                { __typename?: 'DefaultKeyStatistics' }
                & DefaultKeyStatisticsFragmentFragment
                )>, earnings?: Maybe<(
                { __typename?: 'Earnings' }
                & EarningsFragmentFragment
                )>, financialData?: Maybe<(
                { __typename?: 'FinancialData' }
                & FinancialDataFragmentFragment
                )>, pageViews?: Maybe<(
                { __typename?: 'PageViews' }
                & Pick<PageViews, 'longTermTrend' | 'midTermTrend' | 'shortTermTrend'>
                )>, upgradeDowngradeHistory?: Maybe<(
                { __typename?: 'UpgradeDowngradeHistory' }
                & {
                history?: Maybe<Array<Maybe<(
                    { __typename?: 'UpgradeDowngradeHistoryData' }
                    & HistoryFragmentFragment
                    )>>>
            }
                )>
        }
            )>, summary: (
            { __typename?: 'Summary' }
            & StockSummaryFragmentFragment
            ), metric?: Maybe<(
            { __typename?: 'Metric' }
            & MetricFragmentFragment
            )>, dividends?: Maybe<(
            { __typename?: 'Dividens' }
            & DividensFragmentFragment
            )>, historicalMetrics?: Maybe<(
            { __typename?: 'HistoricalMetrics' }
            & {
            cashRatio?: Maybe<(
                { __typename?: 'HistoricalMetricsData' }
                & HistoricalMetricsDataFragmentFragment
                )>, currentRatio?: Maybe<(
                { __typename?: 'HistoricalMetricsData' }
                & HistoricalMetricsDataFragmentFragment
                )>, ebitPerShare?: Maybe<(
                { __typename?: 'HistoricalMetricsData' }
                & HistoricalMetricsDataFragmentFragment
                )>, eps?: Maybe<(
                { __typename?: 'HistoricalMetricsData' }
                & HistoricalMetricsDataFragmentFragment
                )>, grossMargin?: Maybe<(
                { __typename?: 'HistoricalMetricsData' }
                & HistoricalMetricsDataFragmentFragment
                )>, longtermDebtTotalAsset?: Maybe<(
                { __typename?: 'HistoricalMetricsData' }
                & HistoricalMetricsDataFragmentFragment
                )>, longtermDebtTotalCapital?: Maybe<(
                { __typename?: 'HistoricalMetricsData' }
                & HistoricalMetricsDataFragmentFragment
                )>, longtermDebtTotalEquity?: Maybe<(
                { __typename?: 'HistoricalMetricsData' }
                & HistoricalMetricsDataFragmentFragment
                )>, netDebtToTotalCapital?: Maybe<(
                { __typename?: 'HistoricalMetricsData' }
                & HistoricalMetricsDataFragmentFragment
                )>, netDebtToTotalEquity?: Maybe<(
                { __typename?: 'HistoricalMetricsData' }
                & HistoricalMetricsDataFragmentFragment
                )>, netMargin?: Maybe<(
                { __typename?: 'HistoricalMetricsData' }
                & HistoricalMetricsDataFragmentFragment
                )>, operatingMargin?: Maybe<(
                { __typename?: 'HistoricalMetricsData' }
                & HistoricalMetricsDataFragmentFragment
                )>, pretaxMargin?: Maybe<(
                { __typename?: 'HistoricalMetricsData' }
                & HistoricalMetricsDataFragmentFragment
                )>, salesPerShare?: Maybe<(
                { __typename?: 'HistoricalMetricsData' }
                & HistoricalMetricsDataFragmentFragment
                )>, sgaToSale?: Maybe<(
                { __typename?: 'HistoricalMetricsData' }
                & HistoricalMetricsDataFragmentFragment
                )>, totalDebtToEquity?: Maybe<(
                { __typename?: 'HistoricalMetricsData' }
                & HistoricalMetricsDataFragmentFragment
                )>, totalDebtToTotalAsset?: Maybe<(
                { __typename?: 'HistoricalMetricsData' }
                & HistoricalMetricsDataFragmentFragment
                )>, totalDebtToTotalCapital?: Maybe<(
                { __typename?: 'HistoricalMetricsData' }
                & HistoricalMetricsDataFragmentFragment
                )>, totalRatio?: Maybe<(
                { __typename?: 'HistoricalMetricsData' }
                & HistoricalMetricsDataFragmentFragment
                )>
        }
            )>, institutionOwnerships?: Maybe<Array<Maybe<(
            { __typename?: 'InstitutionOwnership' }
            & Pick<InstitutionOwnership, 'organization' | 'pctHeld' | 'position' | 'reportDate' | 'value'>
            )>>>, insiderTransactions?: Maybe<Array<Maybe<(
            { __typename?: 'InsiderTransaction' }
            & Pick<InsiderTransaction, 'filerName' | 'filerRelation' | 'shares' | 'startDate' | 'transactionText' | 'value'>
            )>>>
    }
        )>
}
    );

export type QueryStockSummaryQueryVariables = Exact<{
    symbol: Scalars['String'];
}>;


export type QueryStockSummaryQuery = (
    { __typename?: 'Query' }
    & {
    queryStockSummary?: Maybe<(
        { __typename?: 'Summary' }
        & StockSummaryFragmentFragment
        )>
}
    );

export type QueryStockSummariesQueryVariables = Exact<{
    symbolPrefix: Scalars['String'];
}>;


export type QueryStockSummariesQuery = (
    { __typename?: 'Query' }
    & {
    queryStockSummaries?: Maybe<(
        { __typename?: 'SearchSymbol' }
        & {
        summaries: Array<Maybe<(
            { __typename?: 'Summary' }
            & StockSummaryFragmentFragment
            )>>
    }
        )>
}
    );

export type StTransactionFragmentFragment = (
    { __typename?: 'STTransaction' }
    & Pick<StTransaction, 'symbol' | 'price' | 'return' | 'returnChange' | 'units' | 'date' | 'operation' | 'symbol_logo_url'>
    );

export type PerformTransactionMutationVariables = Exact<{
    transactionInput: StTransactionInput;
}>;


export type PerformTransactionMutation = (
    { __typename?: 'Mutation' }
    & {
    performTransaction?: Maybe<(
        { __typename?: 'STTransaction' }
        & {
        summary?: Maybe<(
            { __typename?: 'Summary' }
            & StockSummaryFragmentFragment
            )>
    }
        & StTransactionFragmentFragment
        )>
}
    );

export type StUserPartialInformationFragmentFragment = (
    { __typename?: 'STUserPartialInformation' }
    & Pick<StUserPartialInformation, 'uid' | 'nickName' | 'locale' | 'photoURL' | 'accountCreatedDate'>
    & {
    portfolio?: Maybe<(
        { __typename?: 'STPortfolio' }
        & StPortfolioFragmentFragment
        )>, rank?: Maybe<(
        { __typename?: 'STRank' }
        & StRankFragmentFragment
        )>
}
    );

export type AuthenticateUserQueryVariables = Exact<{
    uid: Scalars['String'];
}>;


export type AuthenticateUserQuery = (
    { __typename?: 'Query' }
    & {
    authenticateUser?: Maybe<(
        { __typename?: 'STUserPublicData' }
        & Pick<StUserPublicData, 'uid' | 'nickName' | 'locale' | 'photoURL' | 'accountCreatedDate' | 'lastSignInDate' | 'activity'>
        & {
        portfolio?: Maybe<(
            { __typename?: 'STPortfolio' }
            & StPortfolioFragmentFragment
            )>, rank?: Maybe<(
            { __typename?: 'STRank' }
            & StRankFragmentFragment
            )>, transactionsSnippets: Array<Maybe<(
            { __typename?: 'STTransaction' }
            & StTransactionFragmentFragment
            )>>, holdings: Array<Maybe<(
            { __typename?: 'STTransaction' }
            & {
            summary?: Maybe<(
                { __typename?: 'Summary' }
                & StockSummaryFragmentFragment
                )>
        }
            & StTransactionFragmentFragment
            )>>, groups: (
            { __typename?: 'STUserGroups' }
            & {
            groupInvitationSent?: Maybe<Array<Maybe<(
                { __typename?: 'STGroupPartialData' }
                & StGroupPartialDataFragmentFragment
                )>>>, groupInvitationReceived?: Maybe<Array<Maybe<(
                { __typename?: 'STGroupPartialData' }
                & StGroupPartialDataFragmentFragment
                )>>>, groupOwner?: Maybe<Array<Maybe<(
                { __typename?: 'STGroupPartialData' }
                & StGroupPartialDataFragmentFragment
                )>>>, groupMember?: Maybe<Array<Maybe<(
                { __typename?: 'STGroupPartialData' }
                & StGroupPartialDataFragmentFragment
                )>>>
        }
            ), userHistoricalData: (
            { __typename?: 'STUserHistoricalData' }
            & {
            userLogs: Array<Maybe<(
                { __typename?: 'STLog' }
                & StLogsFragmentFragment
                )>>, resetedAccount: Array<Maybe<(
                { __typename?: 'STUserResetedAccount' }
                & Pick<StUserResetedAccount, 'date' | 'portfolioTotal'>
                )>>, bestAchievedRanks: Array<Maybe<(
                { __typename?: 'STRank' }
                & StRankFragmentFragment
                )>>, portfolioWeeklyChange: Array<Maybe<(
                { __typename?: 'STPortfolioWeeklyChange' }
                & StPortfolioWeeklyChangeFragmentFragment
                )>>
        }
            ), userPrivateData: (
            { __typename?: 'STUserPrivateData' }
            & Pick<StUserPrivateData, 'tradingEnabledDate' | 'finnhubKey' | 'roles' | 'email' | 'displayName' | 'providerId' | 'status' | 'nicknameLastChange'>
            ), stockWatchlist: Array<Maybe<(
            { __typename?: 'STStockWatchlist' }
            & StStockWatchlistFragmentFragment
            )>>
    }
        )>
}
    );

export type QueryStUserPartialInformationByUsernameQueryVariables = Exact<{
    usernamePrefix: Scalars['String'];
}>;


export type QueryStUserPartialInformationByUsernameQuery = (
    { __typename?: 'Query' }
    & {
    querySTUserPartialInformationByUsername: Array<Maybe<(
        { __typename?: 'STUserPartialInformation' }
        & StUserPartialInformationFragmentFragment
        )>>
}
    );

export type RegisterUserMutationVariables = Exact<{
    stUserAuthenticationInput: StUserAuthenticationInput;
}>;


export type RegisterUserMutation = (
    { __typename?: 'Mutation' }
    & Pick<Mutation, 'registerUser'>
    );

export type EditUserMutationVariables = Exact<{
    editInput: StUserEditDataInput;
}>;


export type EditUserMutation = (
    { __typename?: 'Mutation' }
    & Pick<Mutation, 'editUser'>
    );

export type ResetUserAccountMutationVariables = Exact<{
    userId: Scalars['String'];
}>;


export type ResetUserAccountMutation = (
    { __typename?: 'Mutation' }
    & Pick<Mutation, 'resetUserAccount'>
    );

export type StStockWatchlistFragmentFragment = (
    { __typename?: 'STStockWatchlist' }
    & Pick<StStockWatchlist, 'id' | 'name' | 'date' | 'userId'>
    & {
    summaries?: Maybe<Array<Maybe<(
        { __typename?: 'Summary' }
        & StockSummaryFragmentFragment
        )>>>
}
    );

export type CreateStockWatchlistMutationVariables = Exact<{
    identifier: StStockWatchInputlistIdentifier;
}>;


export type CreateStockWatchlistMutation = (
    { __typename?: 'Mutation' }
    & {
    createStockWatchlist?: Maybe<(
        { __typename?: 'STStockWatchlist' }
        & StStockWatchlistFragmentFragment
        )>
}
    );

export type AddStockIntoWatchlistMutationVariables = Exact<{
    identifier: StStockWatchInputlistIdentifier;
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
    identifier: StStockWatchInputlistIdentifier;
}>;


export type RemoveStockFromWatchlistMutation = (
    { __typename?: 'Mutation' }
    & Pick<Mutation, 'removeStockFromStockWatchlist'>
    );

export type DeleteUserWatchlistMutationVariables = Exact<{
    identifier: StStockWatchInputlistIdentifier;
}>;


export type DeleteUserWatchlistMutation = (
    { __typename?: 'Mutation' }
    & Pick<Mutation, 'deleteWatchlist'>
    );

export type RenameStockWatchlistMutationVariables = Exact<{
    identifier: StStockWatchInputlistIdentifier;
}>;


export type RenameStockWatchlistMutation = (
    { __typename?: 'Mutation' }
    & Pick<Mutation, 'renameStockWatchlist'>
    );

export const StPortfolioFragmentFragmentDoc = gql`
    fragment STPortfolioFragment on STPortfolio {
        portfolioInvested
        portfolioCash
        portfolioWeeklyChange
        portfolioWeeklyGrowth
        date
    }
`;
export const StRankFragmentFragmentDoc = gql`
    fragment STRankFragment on STRank {
        rankGainers
        rankLosers
        rankPortfolio
        rankProfit
        rankNumberOfTrades
        date
    }
`;
export const StUserPartialInformationFragmentFragmentDoc = gql`
    fragment STUserPartialInformationFragment on STUserPartialInformation {
        uid
        nickName
        locale
        photoURL
        accountCreatedDate
        portfolio {
            ...STPortfolioFragment
        }
        rank {
            ...STRankFragment
        }
    }
    ${StPortfolioFragmentFragmentDoc}
${StRankFragmentFragmentDoc}`;
export const StGroupUserFragmentFragmentDoc = gql`
    fragment STGroupUserFragment on STGroupUser {
        sinceDate
        user {
            ...STUserPartialInformationFragment
        }
    }
${StUserPartialInformationFragmentFragmentDoc}`;
export const StGroupPartialDataFragmentFragmentDoc = gql`
    fragment STGroupPartialDataFragment on STGroupPartialData {
        groupId
        name
        description
        portfolio {
            ...STPortfolioFragment
        }
        owner {
            ...STGroupUserFragment
        }
        lastUpdateDate
        lastEditedDate
        createdDate
        currentAchievedRanks {
            ...STRankFragment
        }
    }
    ${StPortfolioFragmentFragmentDoc}
    ${StGroupUserFragmentFragmentDoc}
${StRankFragmentFragmentDoc}`;
export const StTransactionFragmentFragmentDoc = gql`
    fragment STTransactionFragment on STTransaction {
        symbol
        price
        return
        returnChange
        units
        date
        operation
        symbol
        symbol_logo_url
    }
`;
export const StLogsFragmentFragmentDoc = gql`
    fragment STLogsFragment on STLog {
        date
        logText
    }
`;
export const StGroupAllDataFragmentFragmentDoc = gql`
    fragment STGroupAllDataFragment on STGroupAllData {
        groupId
        name
        description
        imageUrl
        imagePath
        portfolio {
            ...STPortfolioFragment
        }
        owner {
            ...STGroupUserFragment
        }
        lastUpdateDate
        lastEditedDate
        createdDate
        currentAchievedRanks {
            ...STRankFragment
        }
        bestAchievedRanks {
            ...STRankFragment
        }
        topTransactions {
            ...STTransactionFragment
        }
        lastTransactions {
            ...STTransactionFragment
        }
        groupLogs {
            ...STLogsFragment
        }
        portfolioChart {
            ...STPortfolioFragment
        }
        managers {
            ...STGroupUserFragment
        }
        members {
            ...STGroupUserFragment
        }
        invitationSent {
            ...STGroupUserFragment
        }
        invitationReceived {
            ...STGroupUserFragment
        }
    }
    ${StPortfolioFragmentFragmentDoc}
    ${StGroupUserFragmentFragmentDoc}
    ${StRankFragmentFragmentDoc}
    ${StTransactionFragmentFragmentDoc}
${StLogsFragmentFragmentDoc}`;
export const StMarketChartDataFragmentFragmentDoc = gql`
    fragment STMarketChartDataFragment on STMarketChartDataResult {
        currentDate
        currentValue
        data
        documentKey
        name
        parentName
        quandalKey
        lastUpdate
    }
`;
export const StMarketChartDataResultContainerFragmentFragmentDoc = gql`
    fragment STMarketChartDataResultContainerFragment on STMarketChartDataResultContainer {
        result {
            ...STMarketChartDataFragment
        }
        timestamp
        keyName
    }
${StMarketChartDataFragmentFragmentDoc}`;
export const StMarketTopTableCryptoDataFragmentFragmentDoc = gql`
    fragment STMarketTopTableCryptoDataFragment on STMarketTopTableCryptoData {
        circulatingSupply
        coinImageUrl
        currency
        fiftyTwoWeekHigh
        fiftyTwoWeekLow
        marketCap
        quoteType
        regularMarketChange
        regularMarketChangePercent
        regularMarketClosed
        regularMarketOpen
        regularMarketPrice
        regularMarketVolume
        shortName
        symbol
        volume24Hr
        volumeAllCurrencies
    }
`;
export const StMarketTopTableSymbolDataFragmentFragmentDoc = gql`
    fragment STMarketTopTableSymbolDataFragment on STMarketTopTableSymbolData {
        averageDailyVolume3Month
        currency
        fiftyTwoWeekHigh
        fiftyTwoWeekLow
        logo_url
        longName
        marketCap
        quoteType
        recommendationKey
        recommendationMean
        regularMarketChange
        regularMarketChangePercent
        regularMarketOpen
        regularMarketPreviousClose
        regularMarketPrice
        regularMarketVolume
        shortName
        symbol
        trailingPE
    }
`;
export const StEventCalendarDataFragmentFragmentDoc = gql`
    fragment STEventCalendarDataFragment on STEventCalendarData {
        date
        day
        month
        startdatetime
        year
        earningscount
        economiceventcount
        ipoinfocount
        splitscount
    }
`;
export const StEventCalendarEarningsDataFragmentFragmentDoc = gql`
    fragment STEventCalendarEarningsDataFragment on STEventCalendarEarningsData {
        companyshortname
        epsactual
        epsestimate
        epssurprisepct
        gmtOffsetMilliSeconds
        quoteType
        startdatetime
        startdatetimetype
        ticker
        timeZoneShortName
    }
`;
export const StPortfolioWeeklyChangeFragmentFragmentDoc = gql`
    fragment STPortfolioWeeklyChangeFragment on STPortfolioWeeklyChange {
        portfolio {
            ...STPortfolioFragment
        }
        transactionsBuy {
            total
            transactions {
                ...STTransactionFragment
            }
        }
        transactionsSell {
            total
            transactions {
                ...STTransactionFragment
            }
        }
        date
    }
    ${StPortfolioFragmentFragmentDoc}
${StTransactionFragmentFragmentDoc}`;
export const SheetDataFragmentFragmentDoc = gql`
    fragment SheetDataFragment on SheetData {
        change
        data
        name
    }
`;
export const BalanceSheetDataFragmentFragmentDoc = gql`
    fragment balanceSheetDataFragment on BalanceSheetData {
        totalAssets {
            ...SheetDataFragment
        }
        totalCurrentAssets {
            ...SheetDataFragment
        }
        cash {
            ...SheetDataFragment
        }
        otherCurrentAssets {
            ...SheetDataFragment
        }
        netReceivables {
            ...SheetDataFragment
        }
        inventory {
            ...SheetDataFragment
        }
        prepaidAssets {
            ...SheetDataFragment
        }
        accumulatedComprehensiveIncome {
            ...SheetDataFragment
        }
        netTangibleAssets {
            ...SheetDataFragment
        }
        otherAssets {
            ...SheetDataFragment
        }
        goodwill {
            ...SheetDataFragment
        }
        totalSecuritiesForSale {
            ...SheetDataFragment
        }
        totalLiab {
            ...SheetDataFragment
        }
        totalCurrentLiabilities {
            ...SheetDataFragment
        }
        operatingLeaseLiability {
            ...SheetDataFragment
        }
        prepaidExpense {
            ...SheetDataFragment
        }
        accountsPayable {
            ...SheetDataFragment
        }
        otherCurrentLiab {
            ...SheetDataFragment
        }
        otherLiab {
            ...SheetDataFragment
        }
        shortTermInvestments {
            ...SheetDataFragment
        }
        longTermInvestments {
            ...SheetDataFragment
        }
        shortLongTermDebt {
            ...SheetDataFragment
        }
        longTermDebt {
            ...SheetDataFragment
        }
        netEquity {
            ...SheetDataFragment
        }
        totalStockholderEquity {
            ...SheetDataFragment
        }
        otherStockholderEquity {
            ...SheetDataFragment
        }
        propertyPlantEquipment {
            ...SheetDataFragment
        }
        retainedEarnings {
            ...SheetDataFragment
        }
        deferredRevenue {
            ...SheetDataFragment
        }
        treasuryStock {
            ...SheetDataFragment
        }
        commonStock {
            ...SheetDataFragment
        }
        commonStockValue {
            ...SheetDataFragment
        }
        endDate {
            ...SheetDataFragment
        }
    }
${SheetDataFragmentFragmentDoc}`;
export const CashFlowDataFragmentFragmentDoc = gql`
    fragment cashFlowDataFragment on CashFlowData {
        totalCashFromOperatingActivities {
            ...SheetDataFragment
        }
        netIncome {
            ...SheetDataFragment
        }
        incomeTax {
            ...SheetDataFragment
        }
        deferredTaxes {
            ...SheetDataFragment
        }
        accountsReceivable {
            ...SheetDataFragment
        }
        accruedExpenses {
            ...SheetDataFragment
        }
        CustomerDeposits {
            ...SheetDataFragment
        }
        shareBasedCompensation {
            ...SheetDataFragment
        }
        totalCashflowsFromInvestingActivities {
            ...SheetDataFragment
        }
        investments {
            ...SheetDataFragment
        }
        purchasesOfSecuritie {
            ...SheetDataFragment
        }
        marketSecurities {
            ...SheetDataFragment
        }
        acquisitionsOfBusinesses {
            ...SheetDataFragment
        }
        accruedEquipment {
            ...SheetDataFragment
        }
        otherCashflowsFromInvestingActivities {
            ...SheetDataFragment
        }
        totalCashFromFinancingActivities {
            ...SheetDataFragment
        }
        netBorrowings {
            ...SheetDataFragment
        }
        longTermDebtInsurance {
            ...SheetDataFragment
        }
        issuanceOfStock {
            ...SheetDataFragment
        }
        salesOfSecurities {
            ...SheetDataFragment
        }
        maturitiesOfSecurities {
            ...SheetDataFragment
        }
        dividendsPaid {
            ...SheetDataFragment
        }
        otherCashflowsFromFinancingActivities {
            ...SheetDataFragment
        }
        endDate {
            ...SheetDataFragment
        }
        depreciation {
            ...SheetDataFragment
        }
        commercialPaperRepayments {
            ...SheetDataFragment
        }
        shortTermDebtRepayments {
            ...SheetDataFragment
        }
        longTermDebtRepayments {
            ...SheetDataFragment
        }
        capitalExpenditures {
            ...SheetDataFragment
        }
        repurchaseOfStock {
            ...SheetDataFragment
        }
    }
${SheetDataFragmentFragmentDoc}`;
export const IncomeStatementFragmentFragmentDoc = gql`
    fragment incomeStatementFragment on IncomeStatementData {
        totalRevenue {
            ...SheetDataFragment
        }
        costOfRevenue {
            ...SheetDataFragment
        }
        grossProfit {
            ...SheetDataFragment
        }
        operatingIncome {
            ...SheetDataFragment
        }
        incomeBeforeTax {
            ...SheetDataFragment
        }
        incomeTaxProvision {
            ...SheetDataFragment
        }
        incomeTaxExpense {
            ...SheetDataFragment
        }
        netIncome {
            ...SheetDataFragment
        }
        netIncomeFromContinuingOps {
            ...SheetDataFragment
        }
        netIncomeApplicableToCommonShares {
            ...SheetDataFragment
        }
        totalOperatingExpenses {
            ...SheetDataFragment
        }
        administrativeExpense {
            ...SheetDataFragment
        }
        marketingExpense {
            ...SheetDataFragment
        }
        interestExpense {
            ...SheetDataFragment
        }
        researchDevelopment {
            ...SheetDataFragment
        }
        costOfSales {
            ...SheetDataFragment
        }
        totalOtherIncomeExpenseNet {
            ...SheetDataFragment
        }
        otherOperatingExpenses {
            ...SheetDataFragment
        }
        ebit {
            ...SheetDataFragment
        }
        endDate {
            ...SheetDataFragment
        }
        sellingGeneralAdministrative {
            ...SheetDataFragment
        }
        dilutedEarnings {
            ...SheetDataFragment
        }
        basicEarnings {
            ...SheetDataFragment
        }
        dividendsInCash {
            ...SheetDataFragment
        }
    }
${SheetDataFragmentFragmentDoc}`;
export const GrowthEstimatesFragmentFragmentDoc = gql`
    fragment growthEstimatesFragment on GrowthEstimates {
        currentQtr
        currentQtrPrct
        currentYear
        currentYearPrct
        nextFiveYearsperannum
        nextFiveYearsperannumPrct
        nextQtr
        nextQtrPrct
        nextYear
        nextYearPrct
        pastFiveYearsperannum
        pastFiveYearsperannumPrct
        name
    }
`;
export const RevenueEstimateFragmentFragmentDoc = gql`
    fragment revenueEstimateFragment on RevenueEstimate {
        avgEstimate
        avgEstimateNumber
        highEstimate
        highEstimateNumber
        lowEstimate
        lowEstimateNumber
        noofAnalysts
        salesGrowthyearest
        salesGrowthyearestNumber
        yearAgoSales
        name
    }
`;
export const StatsFragmentFragmentDoc = gql`
    fragment statsFragment on Stats {
        priceSalesttm
        leveredFreeCashFlowttm
        forwardPEOne
        quarterlyEarningsGrowthyoy
        quarterlyRevenueGrowthyoy
        returnonEquityttm
        revenuePerSharettm
        totalCashPerSharemrq
        totalDebtEquitymrq
        totalDebtmrq
        trailingPE
        eBITDA
        bookValuePerSharemrq
        currentRatiomrq
        dilutedEPSttm
    }
`;
export const RecommendationFragmentFragmentDoc = gql`
    fragment recommendationFragment on Recommendations {
        buy
        hold
        period
        sell
        strongBuy
        strongSell
        symbol
    }
`;
export const NewsArticleFragmentFragmentDoc = gql`
    fragment newsArticleFragment on NewsArticle {
        datetime
        headline
        image
        sourceName
        summary
        url
    }
`;
export const DefaultKeyStatisticsFragmentFragmentDoc = gql`
    fragment defaultKeyStatisticsFragment on DefaultKeyStatistics {
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
        sharesPercentSharesOut
        sharesShort
        sharesShortPreviousMonthDate
        sharesShortPriorMonth
        shortPercentOfFloat
        shortRatio
        trailingEps
    }
`;
export const FinancialDataFragmentFragmentDoc = gql`
    fragment financialDataFragment on FinancialData {
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
`;
export const MetricFragmentFragmentDoc = gql`
    fragment metricFragment on Metric {
        fiveDayPriceReturnDaily
        fiveTwoWeekHigh
        fiveTwoWeekHighDate
        fiveTwoWeekLow
        fiveTwoWeekLowDate
        fiveTwoWeekPriceReturnDaily
        oneDayAverageTradingVolume
        oneThreeWeekPriceReturnDaily
        threeMonthAverageTradingVolume
        twoSixWeekPriceReturnDaily
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
`;
export const DividensFragmentFragmentDoc = gql`
    fragment dividensFragment on Dividens {
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
        forwardDividendYield
    }
`;
export const HistoryFragmentFragmentDoc = gql`
    fragment historyFragment on UpgradeDowngradeHistoryData {
        action
        epochGradeDate
        firm
        fromGrade
        toGrade
    }
`;
export const EarningsChartFragmentFragmentDoc = gql`
    fragment earningsChartFragment on EarningsChart {
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
`;
export const FinancialChartDataFragmentFragmentDoc = gql`
    fragment financialChartDataFragment on FinancialsChartData {
        categories
        series {
            data
            name
        }
    }
`;
export const EarningsFragmentFragmentDoc = gql`
    fragment earningsFragment on Earnings {
        earningsChart {
            ...earningsChartFragment
        }
        financialCurrency
        financialsChart {
            quarterly {
                ...financialChartDataFragment
            }
            yearly {
                ...financialChartDataFragment
            }
        }
    }
    ${EarningsChartFragmentFragmentDoc}
${FinancialChartDataFragmentFragmentDoc}`;
export const HistoricalMetricsDataFragmentFragmentDoc = gql`
    fragment historicalMetricsDataFragment on HistoricalMetricsData {
        name
        dates
        data
    }
`;
export const SummaryResidanceFragmentFragmentDoc = gql`
    fragment SummaryResidanceFragment on SummaryResidance {
        city
        state
        country
        addressOne
        zip
    }
`;
export const StockSummaryFragmentFragmentDoc = gql`
    fragment StockSummaryFragment on Summary {
        id
        sandPFiveTwoWeekChange
        lastSplitFactor
        lastSplitDate
        fullTimeEmployees
        netIncomeEmployeeAnnual
        revenueEmployeeAnnual
        website
        residance {
            ...SummaryResidanceFragment
        }
        ePSTTM
        earningsDate
        exDividendDate
        fiveTwoWeekRange
        oneyTargetEst
        pERatioTTM
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
        longName
        oneyTargetEst
        marketCap
        sharesOutstanding
        longBusinessSummary
        yearToDatePriceReturn
        volume
        avgVolume
    }
${SummaryResidanceFragmentFragmentDoc}`;
export const StStockWatchlistFragmentFragmentDoc = gql`
    fragment STStockWatchlistFragment on STStockWatchlist {
        id
        name
        date
        userId
        summaries {
            ...StockSummaryFragment
        }
    }
${StockSummaryFragmentFragmentDoc}`;
export const QueryStGroupAllDataByGroupIdDocument = gql`
    query QuerySTGroupAllDataByGroupId($groupId: String!) {
        querySTGroupAllDataByGroupId(groupId: $groupId) {
            ...STGroupAllDataFragment
        }
    }
${StGroupAllDataFragmentFragmentDoc}`;

@Injectable({
    providedIn: 'root'
})
export class QueryStGroupAllDataByGroupIdGQL extends Apollo.Query<QueryStGroupAllDataByGroupIdQuery, QueryStGroupAllDataByGroupIdQueryVariables> {
    document = QueryStGroupAllDataByGroupIdDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}

export const QueryStGroupPartialDataByGroupNameDocument = gql`
    query QuerySTGroupPartialDataByGroupName($groupName: String!) {
        querySTGroupPartialDataByGroupName(groupName: $groupName) {
            groups {
                ...STGroupPartialDataFragment
            }
        }
    }
${StGroupPartialDataFragmentFragmentDoc}`;

@Injectable({
    providedIn: 'root'
})
export class QueryStGroupPartialDataByGroupNameGQL extends Apollo.Query<QueryStGroupPartialDataByGroupNameQuery, QueryStGroupPartialDataByGroupNameQueryVariables> {
    document = QueryStGroupPartialDataByGroupNameDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}

export const CreateGroupDocument = gql`
    mutation CreateGroup($groupInput: STGroupAllDataInput!) {
        createGroup(groupInput: $groupInput) {
            ...STGroupPartialDataFragment
        }
    }
${StGroupPartialDataFragmentFragmentDoc}`;

@Injectable({
    providedIn: 'root'
})
export class CreateGroupGQL extends Apollo.Mutation<CreateGroupMutation, CreateGroupMutationVariables> {
    document = CreateGroupDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}

export const EditGroupDocument = gql`
    mutation EditGroup($groupInput: STGroupAllDataInput!) {
        editGroup(groupInput: $groupInput) {
            ...STGroupPartialDataFragment
        }
    }
${StGroupPartialDataFragmentFragmentDoc}`;

@Injectable({
    providedIn: 'root'
})
export class EditGroupGQL extends Apollo.Mutation<EditGroupMutation, EditGroupMutationVariables> {
    document = EditGroupDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}

export const DeleteGroupDocument = gql`
    mutation DeleteGroup($uid: String!, $groupId: String!) {
        deleteGroup(uid: $uid, groupId: $groupId)
    }
`;

@Injectable({
    providedIn: 'root'
})
export class DeleteGroupGQL extends Apollo.Mutation<DeleteGroupMutation, DeleteGroupMutationVariables> {
    document = DeleteGroupDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}

export const ToggleInvitationRequestToGroupDocument = gql`
    mutation ToggleInvitationRequestToGroup($uid: String!, $groupId: String!) {
        toggleInvitationRequestToGroup(uid: $uid, groupId: $groupId) {
            ...STGroupPartialDataFragment
        }
    }
${StGroupPartialDataFragmentFragmentDoc}`;

@Injectable({
    providedIn: 'root'
})
export class ToggleInvitationRequestToGroupGQL extends Apollo.Mutation<ToggleInvitationRequestToGroupMutation, ToggleInvitationRequestToGroupMutationVariables> {
    document = ToggleInvitationRequestToGroupDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}

export const AnswerReceivedGroupInvitationDocument = gql`
    mutation AnswerReceivedGroupInvitation($uid: String!, $groupId: String!, $accept: Boolean!) {
        answerReceivedGroupInvitation(uid: $uid, groupId: $groupId, accept: $accept) {
            ...STGroupPartialDataFragment
        }
    }
${StGroupPartialDataFragmentFragmentDoc}`;

@Injectable({
    providedIn: 'root'
})
export class AnswerReceivedGroupInvitationGQL extends Apollo.Mutation<AnswerReceivedGroupInvitationMutation, AnswerReceivedGroupInvitationMutationVariables> {
    document = AnswerReceivedGroupInvitationDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}

export const LeaveGroupDocument = gql`
    mutation LeaveGroup($uid: String!, $groupId: String!) {
        leaveGroup(uid: $uid, groupId: $groupId)
    }
`;

@Injectable({
    providedIn: 'root'
})
export class LeaveGroupGQL extends Apollo.Mutation<LeaveGroupMutation, LeaveGroupMutationVariables> {
    document = LeaveGroupDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}

export const QueryStMarketHistoryOverviewDocument = gql`
    query QuerySTMarketHistoryOverview {
        querySTMarketHistoryOverview {
            sp500 {
                ...STMarketChartDataResultContainerFragment
            }
            bonds {
                ...STMarketChartDataResultContainerFragment
            }
            social_security {
                ...STMarketChartDataResultContainerFragment
            }
            consumer_price_index_states {
                ...STMarketChartDataResultContainerFragment
            }
            consumer_us_price_index {
                ...STMarketChartDataResultContainerFragment
            }
            producer_us_price_index {
                ...STMarketChartDataResultContainerFragment
            }
            inflation_rate {
                ...STMarketChartDataResultContainerFragment
            }
            employment {
                ...STMarketChartDataResultContainerFragment
            }
            manufacturing {
                ...STMarketChartDataResultContainerFragment
            }
            exports {
                ...STMarketChartDataResultContainerFragment
            }
            misery_index {
                ...STMarketChartDataResultContainerFragment
            }
            treasury_yield {
                ...STMarketChartDataResultContainerFragment
            }
            investor_sentiment {
                ...STMarketChartDataResultContainerFragment
            }
            bitcoin {
                ...STMarketChartDataResultContainerFragment
            }
            lastUpdate
        }
    }
${StMarketChartDataResultContainerFragmentFragmentDoc}`;

@Injectable({
    providedIn: 'root'
})
export class QueryStMarketHistoryOverviewGQL extends Apollo.Query<QueryStMarketHistoryOverviewQuery, QueryStMarketHistoryOverviewQueryVariables> {
    document = QueryStMarketHistoryOverviewDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}

export const QueryMarketDailyOverviewDocument = gql`
    query QueryMarketDailyOverview {
        queryMarketDailyOverview {
            stocks_day_gainers {
                ...STMarketTopTableSymbolDataFragment
            }
            stocks_day_losers {
                ...STMarketTopTableSymbolDataFragment
            }
            stocks_day_active {
                ...STMarketTopTableSymbolDataFragment
            }
            stocks_undervalued_growth_stocks {
                ...STMarketTopTableSymbolDataFragment
            }
            stocks_growth_technology_stocks {
                ...STMarketTopTableSymbolDataFragment
            }
            stocks_undervalued_large_caps {
                ...STMarketTopTableSymbolDataFragment
            }
            stocks_aggressive_small_caps {
                ...STMarketTopTableSymbolDataFragment
            }
            stocks_small_cap_gainers {
                ...STMarketTopTableSymbolDataFragment
            }
            stock_suggestions {
                summary {
                    ...StockSummaryFragment
                }
                historicalData {
                    livePrice
                    price
                    symbol
                    period
                }
            }
            top_crypto {
                ...STMarketTopTableCryptoDataFragment
            }
            news {
                ...newsArticleFragment
            }
            events {
                ...STEventCalendarDataFragment
            }
            earnings {
                ...STEventCalendarEarningsDataFragment
            }
            lastUpdate
        }
    }
    ${StMarketTopTableSymbolDataFragmentFragmentDoc}
    ${StockSummaryFragmentFragmentDoc}
    ${StMarketTopTableCryptoDataFragmentFragmentDoc}
    ${NewsArticleFragmentFragmentDoc}
    ${StEventCalendarDataFragmentFragmentDoc}
${StEventCalendarEarningsDataFragmentFragmentDoc}`;

@Injectable({
    providedIn: 'root'
})
export class QueryMarketDailyOverviewGQL extends Apollo.Query<QueryMarketDailyOverviewQuery, QueryMarketDailyOverviewQueryVariables> {
    document = QueryMarketDailyOverviewDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}

export const QueryStMarketCalendarEventsDocument = gql`
    query QueryStMarketCalendarEvents($date: String!) {
        queryStMarketCalendarEvents(date: $date) {
            events {
                ...STEventCalendarDataFragment
            }
        }
    }
${StEventCalendarDataFragmentFragmentDoc}`;

@Injectable({
    providedIn: 'root'
})
export class QueryStMarketCalendarEventsGQL extends Apollo.Query<QueryStMarketCalendarEventsQuery, QueryStMarketCalendarEventsQueryVariables> {
    document = QueryStMarketCalendarEventsDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}

export const QueryStMarketCalendarEventsEarningsDocument = gql`
    query QueryStMarketCalendarEventsEarnings($date: String!) {
        queryStMarketCalendarEventsEarnings(date: $date) {
            earnings {
                ...STEventCalendarEarningsDataFragment
            }
        }
    }
${StEventCalendarEarningsDataFragmentFragmentDoc}`;

@Injectable({
    providedIn: 'root'
})
export class QueryStMarketCalendarEventsEarningsGQL extends Apollo.Query<QueryStMarketCalendarEventsEarningsQuery, QueryStMarketCalendarEventsEarningsQueryVariables> {
    document = QueryStMarketCalendarEventsEarningsDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}

export const QueryStMarketAllCategoriesDocument = gql`
    query QueryStMarketAllCategories {
        queryStMarketAllCategories {
            categories {
                data {
                    documentKey
                    name
                }
                name
            }
        }
    }
`;

@Injectable({
    providedIn: 'root'
})
export class QueryStMarketAllCategoriesGQL extends Apollo.Query<QueryStMarketAllCategoriesQuery, QueryStMarketAllCategoriesQueryVariables> {
    document = QueryStMarketAllCategoriesDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}

export const QueryMultipleStMarketDataDocument = gql`
    query QueryMultipleStMarketData($key: String!) {
        queryMultipleStMarketData(key: $key) {
            result {
                currentDate
                currentValue
                documentKey
                name
                parentName
                quandalKey
                lastUpdate
                data
            }
        }
    }
`;

@Injectable({
    providedIn: 'root'
})
export class QueryMultipleStMarketDataGQL extends Apollo.Query<QueryMultipleStMarketDataQuery, QueryMultipleStMarketDataQueryVariables> {
    document = QueryMultipleStMarketDataDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}

export const QueryStMarketDataDocument = gql`
    query QueryStMarketData($key: String!) {
        queryStMarketData(key: $key) {
            currentDate
            currentValue
            documentKey
            name
            parentName
            quandalKey
            lastUpdate
            data
        }
    }
`;

@Injectable({
    providedIn: 'root'
})
export class QueryStMarketDataGQL extends Apollo.Query<QueryStMarketDataQuery, QueryStMarketDataQueryVariables> {
    document = QueryStMarketDataDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}

export const QueryStockDetailsDocument = gql`
    query QueryStockDetails($symbol: String!) {
        queryStockDetails(symbol: $symbol) {
            id
            analysis {
                growthEstimates {
                    ...growthEstimatesFragment
                }
                revenueEstimate {
                    ...revenueEstimateFragment
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
                    ...incomeStatementFragment
                }
                incomeStatementHistoryYearly {
                    ...incomeStatementFragment
                }
            }
            stats {
                ...statsFragment
            }
            recommendation {
                ...recommendationFragment
            }
            stockNews {
                ...newsArticleFragment
            }
            companyData {
                defaultKeyStatistics {
                    ...defaultKeyStatisticsFragment
                }
                earnings {
                    ...earningsFragment
                }
                financialData {
                    ...financialDataFragment
                }
                pageViews {
                    longTermTrend
                    midTermTrend
                    shortTermTrend
                }
                upgradeDowngradeHistory {
                    history {
                        ...historyFragment
                    }
                }
            }
            summary {
                ...StockSummaryFragment
            }
            metric {
                ...metricFragment
            }
            dividends {
                ...dividensFragment
            }
            historicalMetrics {
                cashRatio {
                    ...historicalMetricsDataFragment
                }
                currentRatio {
                    ...historicalMetricsDataFragment
                }
                ebitPerShare {
                    ...historicalMetricsDataFragment
                }
                eps {
                    ...historicalMetricsDataFragment
                }
                grossMargin {
                    ...historicalMetricsDataFragment
                }
                longtermDebtTotalAsset {
                    ...historicalMetricsDataFragment
                }
                longtermDebtTotalCapital {
                    ...historicalMetricsDataFragment
                }
                longtermDebtTotalEquity {
                    ...historicalMetricsDataFragment
                }
                netDebtToTotalCapital {
                    ...historicalMetricsDataFragment
                }
                netDebtToTotalEquity {
                    ...historicalMetricsDataFragment
                }
                netMargin {
                    ...historicalMetricsDataFragment
                }
                operatingMargin {
                    ...historicalMetricsDataFragment
                }
                pretaxMargin {
                    ...historicalMetricsDataFragment
                }
                salesPerShare {
                    ...historicalMetricsDataFragment
                }
                sgaToSale {
                    ...historicalMetricsDataFragment
                }
                totalDebtToEquity {
                    ...historicalMetricsDataFragment
                }
                totalDebtToTotalAsset {
                    ...historicalMetricsDataFragment
                }
                totalDebtToTotalCapital {
                    ...historicalMetricsDataFragment
                }
                totalRatio {
                    ...historicalMetricsDataFragment
                }
            }
            institutionOwnerships {
                organization
                pctHeld
                position
                reportDate
                value
            }
            insiderTransactions {
                filerName
                filerRelation
                shares
                startDate
                transactionText
                value
            }
        }
    }
    ${GrowthEstimatesFragmentFragmentDoc}
    ${RevenueEstimateFragmentFragmentDoc}
    ${BalanceSheetDataFragmentFragmentDoc}
    ${CashFlowDataFragmentFragmentDoc}
    ${IncomeStatementFragmentFragmentDoc}
    ${StatsFragmentFragmentDoc}
    ${RecommendationFragmentFragmentDoc}
    ${NewsArticleFragmentFragmentDoc}
    ${DefaultKeyStatisticsFragmentFragmentDoc}
    ${EarningsFragmentFragmentDoc}
    ${FinancialDataFragmentFragmentDoc}
    ${HistoryFragmentFragmentDoc}
    ${StockSummaryFragmentFragmentDoc}
    ${MetricFragmentFragmentDoc}
    ${DividensFragmentFragmentDoc}
${HistoricalMetricsDataFragmentFragmentDoc}`;

@Injectable({
    providedIn: 'root'
})
export class QueryStockDetailsGQL extends Apollo.Query<QueryStockDetailsQuery, QueryStockDetailsQueryVariables> {
    document = QueryStockDetailsDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}

export const QueryStockSummaryDocument = gql`
    query QueryStockSummary($symbol: String!) {
        queryStockSummary(symbol: $symbol) {
            ...StockSummaryFragment
        }
    }
${StockSummaryFragmentFragmentDoc}`;

@Injectable({
    providedIn: 'root'
})
export class QueryStockSummaryGQL extends Apollo.Query<QueryStockSummaryQuery, QueryStockSummaryQueryVariables> {
    document = QueryStockSummaryDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}

export const QueryStockSummariesDocument = gql`
    query QueryStockSummaries($symbolPrefix: String!) {
        queryStockSummaries(symbolPrefix: $symbolPrefix) {
            summaries {
                ...StockSummaryFragment
            }
        }
    }
${StockSummaryFragmentFragmentDoc}`;

@Injectable({
    providedIn: 'root'
})
export class QueryStockSummariesGQL extends Apollo.Query<QueryStockSummariesQuery, QueryStockSummariesQueryVariables> {
    document = QueryStockSummariesDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}

export const PerformTransactionDocument = gql`
    mutation PerformTransaction($transactionInput: STTransactionInput!) {
        performTransaction(transactionInput: $transactionInput) {
            summary {
                ...StockSummaryFragment
            }
            ...STTransactionFragment
        }
    }
    ${StockSummaryFragmentFragmentDoc}
${StTransactionFragmentFragmentDoc}`;

@Injectable({
    providedIn: 'root'
})
export class PerformTransactionGQL extends Apollo.Mutation<PerformTransactionMutation, PerformTransactionMutationVariables> {
    document = PerformTransactionDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}

export const AuthenticateUserDocument = gql`
    query AuthenticateUser($uid: String!) {
        authenticateUser(uid: $uid) {
            uid
            nickName
            locale
            photoURL
            accountCreatedDate
            portfolio {
                ...STPortfolioFragment
            }
            rank {
                ...STRankFragment
            }
            lastSignInDate
            transactionsSnippets {
                ...STTransactionFragment
            }
            holdings {
                ...STTransactionFragment
                summary {
                    ...StockSummaryFragment
                }
            }
            groups {
                groupInvitationSent {
                    ...STGroupPartialDataFragment
                }
                groupInvitationReceived {
                    ...STGroupPartialDataFragment
                }
                groupOwner {
                    ...STGroupPartialDataFragment
                }
                groupMember {
                    ...STGroupPartialDataFragment
                }
            }
            activity
            userHistoricalData {
                userLogs {
                    ...STLogsFragment
                }
                resetedAccount {
                    date
                    portfolioTotal
                }
                bestAchievedRanks {
                    ...STRankFragment
                }
                portfolioWeeklyChange {
                    ...STPortfolioWeeklyChangeFragment
                }
            }
            userPrivateData {
                tradingEnabledDate
                finnhubKey
                roles
                email
                displayName
                providerId
                status
                nicknameLastChange
            }
            stockWatchlist {
                ...STStockWatchlistFragment
            }
        }
    }
    ${StPortfolioFragmentFragmentDoc}
    ${StRankFragmentFragmentDoc}
    ${StTransactionFragmentFragmentDoc}
    ${StockSummaryFragmentFragmentDoc}
    ${StGroupPartialDataFragmentFragmentDoc}
    ${StLogsFragmentFragmentDoc}
    ${StPortfolioWeeklyChangeFragmentFragmentDoc}
${StStockWatchlistFragmentFragmentDoc}`;

@Injectable({
    providedIn: 'root'
})
export class AuthenticateUserGQL extends Apollo.Query<AuthenticateUserQuery, AuthenticateUserQueryVariables> {
    document = AuthenticateUserDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}

export const QueryStUserPartialInformationByUsernameDocument = gql`
    query QuerySTUserPartialInformationByUsername($usernamePrefix: String!) {
        querySTUserPartialInformationByUsername(usernamePrefix: $usernamePrefix) {
            ...STUserPartialInformationFragment
        }
    }
${StUserPartialInformationFragmentFragmentDoc}`;

@Injectable({
    providedIn: 'root'
})
export class QueryStUserPartialInformationByUsernameGQL extends Apollo.Query<QueryStUserPartialInformationByUsernameQuery, QueryStUserPartialInformationByUsernameQueryVariables> {
    document = QueryStUserPartialInformationByUsernameDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}

export const RegisterUserDocument = gql`
    mutation RegisterUser($stUserAuthenticationInput: STUserAuthenticationInput!) {
        registerUser(user: $stUserAuthenticationInput)
    }
`;

@Injectable({
    providedIn: 'root'
})
export class RegisterUserGQL extends Apollo.Mutation<RegisterUserMutation, RegisterUserMutationVariables> {
    document = RegisterUserDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}

export const EditUserDocument = gql`
    mutation EditUser($editInput: STUserEditDataInput!) {
        editUser(editInput: $editInput)
    }
`;

@Injectable({
    providedIn: 'root'
})
export class EditUserGQL extends Apollo.Mutation<EditUserMutation, EditUserMutationVariables> {
    document = EditUserDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}

export const ResetUserAccountDocument = gql`
    mutation ResetUserAccount($userId: String!) {
        resetUserAccount(userId: $userId)
    }
`;

@Injectable({
    providedIn: 'root'
})
export class ResetUserAccountGQL extends Apollo.Mutation<ResetUserAccountMutation, ResetUserAccountMutationVariables> {
    document = ResetUserAccountDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}

export const CreateStockWatchlistDocument = gql`
    mutation CreateStockWatchlist($identifier: STStockWatchInputlistIdentifier!) {
        createStockWatchlist(identifier: $identifier) {
            ...STStockWatchlistFragment
        }
    }
${StStockWatchlistFragmentFragmentDoc}`;

@Injectable({
    providedIn: 'root'
})
export class CreateStockWatchlistGQL extends Apollo.Mutation<CreateStockWatchlistMutation, CreateStockWatchlistMutationVariables> {
    document = CreateStockWatchlistDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}

export const AddStockIntoWatchlistDocument = gql`
    mutation AddStockIntoWatchlist($identifier: STStockWatchInputlistIdentifier!) {
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

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}

export const RemoveStockFromWatchlistDocument = gql`
    mutation RemoveStockFromWatchlist($identifier: STStockWatchInputlistIdentifier!) {
        removeStockFromStockWatchlist(identifier: $identifier)
    }
`;

@Injectable({
    providedIn: 'root'
})
export class RemoveStockFromWatchlistGQL extends Apollo.Mutation<RemoveStockFromWatchlistMutation, RemoveStockFromWatchlistMutationVariables> {
    document = RemoveStockFromWatchlistDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}

export const DeleteUserWatchlistDocument = gql`
    mutation DeleteUserWatchlist($identifier: STStockWatchInputlistIdentifier!) {
        deleteWatchlist(identifier: $identifier)
    }
`;

@Injectable({
    providedIn: 'root'
})
export class DeleteUserWatchlistGQL extends Apollo.Mutation<DeleteUserWatchlistMutation, DeleteUserWatchlistMutationVariables> {
    document = DeleteUserWatchlistDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}

export const RenameStockWatchlistDocument = gql`
    mutation RenameStockWatchlist($identifier: STStockWatchInputlistIdentifier!) {
        renameStockWatchlist(identifier: $identifier)
    }
`;

@Injectable({
    providedIn: 'root'
})
export class RenameStockWatchlistGQL extends Apollo.Mutation<RenameStockWatchlistMutation, RenameStockWatchlistMutationVariables> {
    document = RenameStockWatchlistDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
