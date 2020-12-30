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

export type Mutation = {
    __typename?: 'Mutation';
    registerUser?: Maybe<Scalars['Boolean']>;
    editUser?: Maybe<Scalars['Boolean']>;
    resetUserAccount?: Maybe<Scalars['Boolean']>;
    createGroup?: Maybe<StGroupPartialData>;
    editGroup?: Maybe<StGroupPartialData>;
    deleteGroup?: Maybe<Scalars['Boolean']>;
    createStockWatchlist?: Maybe<StStockWatchlist>;
    renameStockWatchlist?: Maybe<Scalars['Boolean']>;
    deleteWatchlist?: Maybe<Scalars['Boolean']>;
    addStockIntoStockWatchlist?: Maybe<Summary>;
    removeStockFromStockWatchlist?: Maybe<Scalars['Boolean']>;
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
    groupInput?: Maybe<StGroupAllDataInput>;
};


export type MutationEditGroupArgs = {
    groupInput?: Maybe<StGroupAllDataInput>;
};


export type MutationDeleteGroupArgs = {
    uid?: Maybe<Scalars['String']>;
    groupId?: Maybe<Scalars['String']>;
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

export type StUserGroups = {
    __typename?: 'STUserGroups';
    groupInvitationSent?: Maybe<Array<Maybe<StGroupPartialData>>>;
    groupInvitationReceived?: Maybe<Array<Maybe<StGroupPartialData>>>;
    groupOwner?: Maybe<Array<Maybe<StGroupPartialData>>>;
    groupMember?: Maybe<Array<Maybe<StGroupPartialData>>>;
};

export type StUserIndetificationInformation = {
    __typename?: 'STUserIndetificationInformation';
    uid: Scalars['String'];
    nickName: Scalars['String'];
    locale: Scalars['String'];
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
    transactionsSnippets: Array<Maybe<StTransaction>>;
    portfolioWeeklyChange: Array<Maybe<StPortfolio>>;
    holdings: Array<Maybe<StTransaction>>;
    resetedAccount?: Maybe<Array<Maybe<StUserResetedAccount>>>;
    activity?: Maybe<User_Activity>;
    bestAchievedRanks?: Maybe<Array<Maybe<StRank>>>;
    userLogs?: Maybe<Array<Maybe<StLog>>>;
    groups: StUserGroups;
    userPrivateData: StUserPrivateData;
    stockWatchlist: Array<Maybe<StStockWatchlist>>;
};

export type StUserPrivateData = {
    __typename?: 'STUserPrivateData';
    uid?: Maybe<Scalars['String']>;
    finnhubKey?: Maybe<Scalars['String']>;
    finnhubKeyInsertedDate?: Maybe<Scalars['String']>;
    roles?: Maybe<Array<Maybe<Scalars['String']>>>;
    email: Scalars['String'];
    displayName: Scalars['String'];
    providerId?: Maybe<Scalars['String']>;
    status: User_Status;
    geographic?: Maybe<StGeographic>;
    nicknameLastChange?: Maybe<Scalars['String']>;
};

export type StUserResetedAccount = {
    __typename?: 'STUserResetedAccount';
    date: Scalars['String'];
    portfolioTotal: Scalars['Float'];
};

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

export enum User_Activity {
    SignedIn = 'SIGNED_IN',
    SignedOut = 'SIGNED_OUT'
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

export type StStockWatchlist = {
    __typename?: 'STStockWatchlist';
    id: Scalars['String'];
    name: Scalars['String'];
    date?: Maybe<Scalars['String']>;
    userId: Scalars['String'];
    summaries?: Maybe<Array<Maybe<Summary>>>;
};

export type StStockWatchInputlistIdentifier = {
    userId: Scalars['String'];
    id?: Maybe<Scalars['String']>;
    additionalData?: Maybe<Scalars['String']>;
};

export type SearchSymbol = {
    __typename?: 'SearchSymbol';
    summaries: Array<Maybe<Summary>>;
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
    financialReportSnippets?: Maybe<Array<Maybe<Scalars['String']>>>;
    financialReports?: Maybe<StockFinancialReports>;
};

export type StockFinancialReports = {
    __typename?: 'StockFinancialReports';
    reports: Array<Maybe<FinancialReport>>;
};

export type FinancialReport = {
    __typename?: 'FinancialReport';
    acceptedDate: Scalars['String'];
    accessNumber?: Maybe<Scalars['String']>;
    cik?: Maybe<Scalars['String']>;
    endDate?: Maybe<Scalars['String']>;
    filedDate?: Maybe<Scalars['String']>;
    form?: Maybe<Scalars['String']>;
    quarter?: Maybe<Scalars['Float']>;
    report: FinancialReportReport;
    source?: Maybe<Scalars['String']>;
    startDate?: Maybe<Scalars['String']>;
    symbol: Scalars['String'];
    name: Scalars['String'];
    year?: Maybe<Scalars['Float']>;
};

export type FinancialReportReport = {
    __typename?: 'FinancialReportReport';
    bs?: Maybe<Array<Maybe<FinancialReportItems>>>;
    cf?: Maybe<Array<Maybe<FinancialReportItems>>>;
    ic?: Maybe<Array<Maybe<FinancialReportItems>>>;
};

export type FinancialReportItems = {
    __typename?: 'FinancialReportItems';
    concept?: Maybe<Scalars['String']>;
    label?: Maybe<Scalars['String']>;
    unit?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['Float']>;
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

export type Analysis = {
    __typename?: 'Analysis';
    growthEstimates?: Maybe<GrowthEstimates>;
    revenueEstimate?: Maybe<Array<Maybe<RevenueEstimate>>>;
};

export type DefaultKeyStatistics = {
    __typename?: 'DefaultKeyStatistics';
    fiveTwoWeekChange?: Maybe<Scalars['Float']>;
    sandPFiveTwoWeekChange?: Maybe<Scalars['Float']>;
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

export type Series = {
    __typename?: 'Series';
    data?: Maybe<Array<Maybe<Scalars['Float']>>>;
    name?: Maybe<Scalars['String']>;
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

export type Calculation = {
    __typename?: 'Calculation';
    avg?: Maybe<Scalars['Float']>;
    max?: Maybe<Scalars['Float']>;
    min?: Maybe<Scalars['Float']>;
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

export type PageViews = {
    __typename?: 'PageViews';
    longTermTrend?: Maybe<Scalars['String']>;
    midTermTrend?: Maybe<Scalars['String']>;
    shortTermTrend?: Maybe<Scalars['String']>;
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

export type Stats = {
    __typename?: 'Stats';
    avgVolOnedayThree?: Maybe<Scalars['String']>;
    bookValuePerSharemrq?: Maybe<Scalars['String']>;
    currentRatiomrq?: Maybe<Scalars['String']>;
    dilutedEPSttm?: Maybe<Scalars['String']>;
    dividendDateThree?: Maybe<Scalars['String']>;
    eBITDA?: Maybe<Scalars['String']>;
    enterpriseValueEBITDASix?: Maybe<Array<Maybe<Scalars['String']>>>;
    enterpriseValueRevenueThree?: Maybe<Array<Maybe<Scalars['String']>>>;
    enterpriseValueThree?: Maybe<Array<Maybe<Scalars['String']>>>;
    fiveDayMovingAverageThree?: Maybe<Scalars['String']>;
    fiveTwoWeekChangeThree?: Maybe<Scalars['String']>;
    fiveTwoWeekHighThree?: Maybe<Scalars['String']>;
    fiveTwoWeekLowThree?: Maybe<Scalars['String']>;
    fiveYearAverageDividendYieldFour?: Maybe<Scalars['String']>;
    float?: Maybe<Scalars['String']>;
    forwardAnnualDividendYieldFour?: Maybe<Scalars['String']>;
    forwardPEOne?: Maybe<Array<Maybe<Scalars['String']>>>;
    grossProfitttm?: Maybe<Scalars['String']>;
    lastSplitDateThree?: Maybe<Scalars['String']>;
    lastSplitFactorTwo?: Maybe<Scalars['String']>;
    leveredFreeCashFlowttm?: Maybe<Scalars['String']>;
    marketCapintradayFive?: Maybe<Array<Maybe<Scalars['String']>>>;
    mostRecentQuartermrq?: Maybe<Scalars['String']>;
    netIncomeAvitoCommonttm?: Maybe<Scalars['String']>;
    operatingMarginttm?: Maybe<Scalars['String']>;
    pEGRatioFiveyrexpectedOne?: Maybe<Array<Maybe<Scalars['String']>>>;
    payoutRatioFour?: Maybe<Scalars['String']>;
    pctHeldbyInsidersOne?: Maybe<Scalars['String']>;
    pctHeldbyInstitutionsOne?: Maybe<Scalars['String']>;
    priceBookmrq?: Maybe<Array<Maybe<Scalars['String']>>>;
    priceSalesttm?: Maybe<Array<Maybe<Scalars['String']>>>;
    quarterlyEarningsGrowthyoy?: Maybe<Scalars['String']>;
    quarterlyRevenueGrowthyoy?: Maybe<Scalars['String']>;
    returnonEquityttm?: Maybe<Scalars['String']>;
    revenuePerSharettm?: Maybe<Scalars['String']>;
    sPFiveFiveTwoWeekChangeThree?: Maybe<Scalars['String']>;
    sharesOutstandingFive?: Maybe<Scalars['String']>;
    sharesShortAugOneThreeTwoTwoFour?: Maybe<Scalars['String']>;
    sharesShortpriormonthJulOneFourTwoTwoFour?: Maybe<Scalars['String']>;
    shortPctofFloatAugOneThreeTwoTwoFour?: Maybe<Scalars['String']>;
    shortPctofSharesOutstandingAugOneThreeTwoTwoFour?: Maybe<Scalars['String']>;
    shortRatioAugOneThreeTwoTwoFour?: Maybe<Scalars['String']>;
    totalCashPerSharemrq?: Maybe<Scalars['String']>;
    totalDebtEquitymrq?: Maybe<Scalars['String']>;
    totalDebtmrq?: Maybe<Scalars['String']>;
    trailingPE?: Maybe<Array<Maybe<Scalars['String']>>>;
    twoDayMovingAverageThree?: Maybe<Scalars['String']>;
    dateTime?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SummaryResidance = {
    __typename?: 'SummaryResidance';
    city?: Maybe<Scalars['String']>;
    state?: Maybe<Scalars['String']>;
    country?: Maybe<Scalars['String']>;
    addressOne?: Maybe<Scalars['String']>;
    zip?: Maybe<Scalars['String']>;
};

export type Summary = {
    __typename?: 'Summary';
    sandPFiveTwoWeekChange?: Maybe<Scalars['Float']>;
    fiveTwoWeekChange?: Maybe<Scalars['Float']>;
    lastSplitFactor?: Maybe<Scalars['String']>;
    lastSplitDate?: Maybe<Scalars['Float']>;
    fullTimeEmployees?: Maybe<Scalars['Float']>;
    netIncomeEmployeeAnnual?: Maybe<Scalars['Float']>;
    revenueEmployeeAnnual?: Maybe<Scalars['Float']>;
    website?: Maybe<Scalars['String']>;
    residance?: Maybe<SummaryResidance>;
    avgVolume?: Maybe<Scalars['String']>;
    ePSTTM?: Maybe<Scalars['String']>;
    earningsDate?: Maybe<Scalars['String']>;
    exDividendDate?: Maybe<Scalars['String']>;
    fiveTwoWeekRange?: Maybe<Scalars['String']>;
    forwardDividendYield?: Maybe<Scalars['String']>;
    oneyTargetEst?: Maybe<Scalars['Float']>;
    open?: Maybe<Scalars['String']>;
    pERatioTTM?: Maybe<Scalars['String']>;
    volume?: Maybe<Scalars['String']>;
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

export type NewsArticle = {
    __typename?: 'NewsArticle';
    datetime?: Maybe<Scalars['Float']>;
    headline?: Maybe<Scalars['String']>;
    image?: Maybe<Scalars['String']>;
    sourceName?: Maybe<Scalars['String']>;
    summary?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
};

export type StTransaction = {
    __typename?: 'STTransaction';
    isOpen: Scalars['Boolean'];
    shortName: Scalars['String'];
    longName: Scalars['String'];
    user?: Maybe<StUserIndetificationInformation>;
    priceBought: Scalars['Float'];
    priceSold: Scalars['Float'];
    priceProfit: Scalars['Float'];
    units: Scalars['Float'];
    date: Scalars['String'];
};

export type StGeographic = {
    __typename?: 'STGeographic';
    longitude?: Maybe<Scalars['String']>;
    latitude?: Maybe<Scalars['String']>;
};

export type StLog = {
    __typename?: 'STLog';
    date: Scalars['String'];
    logText: Scalars['String'];
};

export type StSimpleChart = {
    __typename?: 'STSimpleChart';
    date: Scalars['String'];
    data: Scalars['Float'];
    label?: Maybe<Scalars['String']>;
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

export type StInputFielChange = {
    inputFiel: Scalars['String'];
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

export type StPortfolio = {
    __typename?: 'STPortfolio';
    portfolioTotal: Scalars['Float'];
    portfolioInvested: Scalars['Float'];
    portfolioCash: Scalars['Float'];
    portfolioWeeklyChange: Scalars['Float'];
    portfolioWeeklyGrowth: Scalars['Float'];
    date?: Maybe<Scalars['String']>;
};

export type StSearchGroups = {
    __typename?: 'STSearchGroups';
    groups: Array<Maybe<StGroupPartialData>>;
};

export type StGroupUser = {
    __typename?: 'STGroupUser';
    user: StUserPartialInformation;
    sinceDate: Scalars['String'];
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

export enum CacheControlScope {
    Public = 'PUBLIC',
    Private = 'PRIVATE'
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
        & StTransactionFragment
        )>>, lastTransactions: Array<Maybe<(
        { __typename?: 'STTransaction' }
        & StTransactionFragment
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
    groupInput?: Maybe<StGroupAllDataInput>;
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
    groupInput?: Maybe<StGroupAllDataInput>;
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

export type StPortfolioFragmentFragment = (
    { __typename?: 'STPortfolio' }
    & Pick<StPortfolio, 'portfolioTotal' | 'portfolioInvested' | 'portfolioCash' | 'portfolioWeeklyChange' | 'portfolioWeeklyGrowth' | 'date'>
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
    & Pick<Summary, 'sandPFiveTwoWeekChange' | 'fiveTwoWeekChange' | 'lastSplitFactor' | 'lastSplitDate' | 'fullTimeEmployees' | 'netIncomeEmployeeAnnual' | 'revenueEmployeeAnnual' | 'website' | 'ePSTTM' | 'earningsDate' | 'exDividendDate' | 'fiveTwoWeekRange' | 'oneyTargetEst' | 'pERatioTTM' | 'currency' | 'industry' | 'logo_url' | 'marketPrice' | 'previousClose' | 'recommendationKey' | 'recommendationMean' | 'sector' | 'targetEstOneyPercent' | 'symbol' | 'weekRangeFiveTwoMax' | 'weekRangeFiveTwoMin' | 'longName' | 'marketCap' | 'sharesOutstanding' | 'longBusinessSummary'>
    & {
    residance?: Maybe<(
        { __typename?: 'SummaryResidance' }
        & SummaryResidanceFragmentFragment
        )>
}
    );

export type BalanceSheetDataFragmentFragment = (
    { __typename?: 'BalanceSheetData' }
    & Pick<BalanceSheetData, 'accountsPayable' | 'cash' | 'commonStock' | 'endDate' | 'inventory' | 'longTermDebt' | 'longTermInvestments' | 'maxAge' | 'netReceivables' | 'netTangibleAssets' | 'otherAssets' | 'otherCurrentAssets' | 'otherCurrentLiab' | 'otherLiab' | 'otherStockholderEquity' | 'propertyPlantEquipment' | 'retainedEarnings' | 'shortLongTermDebt' | 'shortTermInvestments' | 'totalAssets' | 'totalCurrentAssets' | 'totalCurrentLiabilities' | 'totalLiab' | 'totalStockholderEquity' | 'treasuryStock'>
    );

export type CashFlowDataFragmentFragment = (
    { __typename?: 'CashFlowData' }
    & Pick<CashFlowData, 'capitalExpenditures' | 'changeInCash' | 'changeToAccountReceivables' | 'changeToInventory' | 'changeToLiabilities' | 'changeToNetincome' | 'changeToOperatingActivities' | 'depreciation' | 'dividendsPaid' | 'endDate' | 'investments' | 'maxAge' | 'netBorrowings' | 'netIncome' | 'otherCashflowsFromFinancingActivities' | 'otherCashflowsFromInvestingActivities' | 'repurchaseOfStock' | 'totalCashFromFinancingActivities' | 'totalCashFromOperatingActivities' | 'totalCashflowsFromInvestingActivities'>
    );

export type IncomeStatementFragmentFragment = (
    { __typename?: 'IncomeStatementData' }
    & Pick<IncomeStatementData, 'costOfRevenue' | 'discontinuedOperations' | 'ebit' | 'effectOfAccountingCharges' | 'endDate' | 'extraordinaryItems' | 'grossProfit' | 'incomeBeforeTax' | 'incomeTaxExpense' | 'interestExpense' | 'netIncome' | 'netIncomeApplicableToCommonShares' | 'netIncomeFromContinuingOps' | 'operatingIncome' | 'otherOperatingExpenses' | 'researchDevelopment' | 'sellingGeneralAdministrative' | 'totalOperatingExpenses' | 'totalOtherIncomeExpenseNet' | 'totalRevenue'>
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
    & Pick<Stats, 'marketCapintradayFive' | 'priceSalesttm' | 'leveredFreeCashFlowttm'>
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
    & Pick<DefaultKeyStatistics, 'fiveTwoWeekChange' | 'sandPFiveTwoWeekChange' | 'bookValue' | 'dateShortInterest' | 'earningsQuarterlyGrowth' | 'enterpriseToEbitda' | 'enterpriseToRevenue' | 'enterpriseValue' | 'fiveYearAverageReturn' | 'floatShares' | 'forwardEps' | 'forwardPE' | 'heldPercentInsiders' | 'heldPercentInstitutions' | 'lastFiscalYearEnd' | 'lastSplitDate' | 'lastSplitFactor' | 'mostRecentQuarter' | 'netIncomeToCommon' | 'nextFiscalYearEnd' | 'pegRatio' | 'priceHint' | 'priceToBook' | 'profitMargins' | 'sharesOutstanding' | 'sharesShort' | 'sharesShortPreviousMonthDate' | 'sharesShortPriorMonth' | 'shortRatio' | 'trailingEps'>
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

export type FinancialReportItemsFragmentFragment = (
    { __typename?: 'FinancialReportItems' }
    & Pick<FinancialReportItems, 'concept' | 'label' | 'unit' | 'value'>
    );

export type FinancialReportReportFragmentFragment = (
    { __typename?: 'FinancialReportReport' }
    & {
    bs?: Maybe<Array<Maybe<(
        { __typename?: 'FinancialReportItems' }
        & FinancialReportItemsFragmentFragment
        )>>>, cf?: Maybe<Array<Maybe<(
        { __typename?: 'FinancialReportItems' }
        & FinancialReportItemsFragmentFragment
        )>>>, ic?: Maybe<Array<Maybe<(
        { __typename?: 'FinancialReportItems' }
        & FinancialReportItemsFragmentFragment
        )>>>
}
    );

export type FinancialReportsFragmentFragment = (
    { __typename?: 'FinancialReport' }
    & Pick<FinancialReport, 'acceptedDate' | 'accessNumber' | 'cik' | 'endDate' | 'filedDate' | 'form' | 'quarter' | 'source' | 'startDate' | 'symbol' | 'name' | 'year'>
    & {
    report: (
        { __typename?: 'FinancialReportReport' }
        & FinancialReportReportFragmentFragment
        )
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

export type QueryStockDetailsQueryVariables = Exact<{
    symbol: Scalars['String'];
}>;


export type QueryStockDetailsQuery = (
    { __typename?: 'Query' }
    & {
    queryStockDetails?: Maybe<(
        { __typename?: 'StockDetails' }
        & Pick<StockDetails, 'id' | 'financialReportSnippets'>
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
            balanceSheetHistoryQuarterly: Array<Maybe<(
                { __typename?: 'BalanceSheetData' }
                & BalanceSheetDataFragmentFragment
                )>>, balanceSheetHistoryYearly: Array<Maybe<(
                { __typename?: 'BalanceSheetData' }
                & BalanceSheetDataFragmentFragment
                )>>
        }
            )>, cashFlow?: Maybe<(
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
            )>, incomeStatement?: Maybe<(
            { __typename?: 'IncomeStatement' }
            & {
            incomeStatementHistoryQuarterly: Array<Maybe<(
                { __typename?: 'IncomeStatementData' }
                & IncomeStatementFragmentFragment
                )>>, incomeStatementHistoryYearly?: Maybe<Array<Maybe<(
                { __typename?: 'IncomeStatementData' }
                & IncomeStatementFragmentFragment
                )>>>
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
            )>>>, financialReports?: Maybe<(
            { __typename?: 'StockFinancialReports' }
            & {
            reports: Array<Maybe<(
                { __typename?: 'FinancialReport' }
                & FinancialReportsFragmentFragment
                )>>
        }
            )>, companyData?: Maybe<(
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
            )>
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

export type StTransactionFragment = (
    { __typename?: 'STTransaction' }
    & Pick<StTransaction, 'isOpen' | 'shortName' | 'longName' | 'priceBought' | 'priceSold' | 'priceProfit' | 'units' | 'date'>
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
            & StTransactionFragment
            )>>, portfolioWeeklyChange: Array<Maybe<(
            { __typename?: 'STPortfolio' }
            & StPortfolioFragmentFragment
            )>>, holdings: Array<Maybe<(
            { __typename?: 'STTransaction' }
            & StTransactionFragment
            )>>, resetedAccount?: Maybe<Array<Maybe<(
            { __typename?: 'STUserResetedAccount' }
            & Pick<StUserResetedAccount, 'date' | 'portfolioTotal'>
            )>>>, groups: (
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
            ), userLogs?: Maybe<Array<Maybe<(
            { __typename?: 'STLog' }
            & StLogsFragmentFragment
            )>>>, userPrivateData: (
            { __typename?: 'STUserPrivateData' }
            & Pick<StUserPrivateData, 'finnhubKey' | 'finnhubKeyInsertedDate' | 'roles' | 'email' | 'displayName' | 'providerId' | 'status' | 'nicknameLastChange'>
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
        portfolioTotal
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
export const StTransactionFragmentDoc = gql`
    fragment STTransaction on STTransaction {
        isOpen
        shortName
        longName
        priceBought
        priceSold
        priceProfit
        units
        date
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
            ...STTransaction
        }
        lastTransactions {
            ...STTransaction
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
    ${StTransactionFragmentDoc}
${StLogsFragmentFragmentDoc}`;
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
export const IncomeStatementFragmentFragmentDoc = gql`
    fragment incomeStatementFragment on IncomeStatementData {
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
        marketCapintradayFive
        priceSalesttm
        leveredFreeCashFlowttm
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
        fiveTwoWeekChange
        sandPFiveTwoWeekChange
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
export const FinancialReportItemsFragmentFragmentDoc = gql`
    fragment FinancialReportItemsFragment on FinancialReportItems {
        concept
        label
        unit
        value
    }
`;
export const FinancialReportReportFragmentFragmentDoc = gql`
    fragment FinancialReportReportFragment on FinancialReportReport {
        bs {
            ...FinancialReportItemsFragment
        }
        cf {
            ...FinancialReportItemsFragment
        }
        ic {
            ...FinancialReportItemsFragment
        }
    }
${FinancialReportItemsFragmentFragmentDoc}`;
export const FinancialReportsFragmentFragmentDoc = gql`
    fragment financialReportsFragment on FinancialReport {
        acceptedDate
        accessNumber
        cik
        endDate
        filedDate
        form
        quarter
        report {
            ...FinancialReportReportFragment
        }
        source
        startDate
        symbol
        name
        year
    }
${FinancialReportReportFragmentFragmentDoc}`;
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
        sandPFiveTwoWeekChange
        fiveTwoWeekChange
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
    mutation CreateGroup($groupInput: STGroupAllDataInput) {
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
    mutation EditGroup($groupInput: STGroupAllDataInput) {
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
            financialReportSnippets
            financialReports {
                reports {
                    ...financialReportsFragment
                }
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
    ${FinancialReportsFragmentFragmentDoc}
    ${DefaultKeyStatisticsFragmentFragmentDoc}
    ${EarningsFragmentFragmentDoc}
    ${FinancialDataFragmentFragmentDoc}
    ${HistoryFragmentFragmentDoc}
    ${StockSummaryFragmentFragmentDoc}
    ${MetricFragmentFragmentDoc}
${DividensFragmentFragmentDoc}`;

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
                ...STTransaction
            }
            portfolioWeeklyChange {
                ...STPortfolioFragment
            }
            holdings {
                ...STTransaction
            }
            resetedAccount {
                date
                portfolioTotal
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
            userLogs {
                ...STLogsFragment
            }
            userPrivateData {
                finnhubKey
                finnhubKeyInsertedDate
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
    ${StTransactionFragmentDoc}
    ${StGroupPartialDataFragmentFragmentDoc}
    ${StLogsFragmentFragmentDoc}
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
