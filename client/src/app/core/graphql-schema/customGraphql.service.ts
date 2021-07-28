import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
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

export type Capm = {
  __typename?: 'CAPM';
  Beta: Scalars['Float'];
  Rf: Scalars['Float'];
  Rm: Scalars['Float'];
  result: Scalars['Float'];
};

export type CompanyData = {
  __typename?: 'CompanyData';
  defaultKeyStatistics?: Maybe<DefaultKeyStatistics>;
  earnings?: Maybe<Earnings>;
  esgScores?: Maybe<EsgScores>;
  financialData?: Maybe<FinancialData>;
  pageViews?: Maybe<PageViews>;
  upgradeDowngradeHistory?: Maybe<Array<Maybe<UpgradeDowngradeHistory>>>;
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
  earningsGrowth?: Maybe<Scalars['Float']>;
  ebitda?: Maybe<Scalars['Float']>;
  ebitdaMargins?: Maybe<Scalars['Float']>;
  financialCurrency?: Maybe<Scalars['String']>;
  freeCashflow?: Maybe<Scalars['Float']>;
  grossMargins?: Maybe<Scalars['Float']>;
  grossProfits?: Maybe<Scalars['Float']>;
  numberOfAnalystOpinions?: Maybe<Scalars['Float']>;
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

export type FinancialReport = {
  __typename?: 'FinancialReport';
  acceptedDate?: Maybe<Scalars['String']>;
  accessNumber?: Maybe<Scalars['String']>;
  cik?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  filedDate?: Maybe<Scalars['String']>;
  form?: Maybe<Scalars['String']>;
  quarter?: Maybe<Scalars['Float']>;
  startDate?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Float']>;
  report?: Maybe<FinancialReportStatement>;
};

export type FinancialReportStatement = {
  __typename?: 'FinancialReportStatement';
  bs?: Maybe<Array<Maybe<FinancialReportStatementData>>>;
  cf?: Maybe<Array<Maybe<FinancialReportStatementData>>>;
  ic?: Maybe<Array<Maybe<FinancialReportStatementData>>>;
};

export type FinancialReportStatementData = {
  __typename?: 'FinancialReportStatementData';
  concept?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
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
  resetUserAccount?: Maybe<StUserResetedAccount>;
  createGroup?: Maybe<StGroupAllData>;
  editGroup?: Maybe<StGroupAllData>;
  deleteGroup?: Maybe<Scalars['Boolean']>;
  toggleInvitationRequestToGroup?: Maybe<StGroupAllData>;
  answerReceivedGroupInvitation?: Maybe<StGroupAllData>;
  leaveGroup?: Maybe<Scalars['Boolean']>;
  createStockWatchlist?: Maybe<StStockWatchlist>;
  renameStockWatchlist?: Maybe<Scalars['Boolean']>;
  deleteWatchlist?: Maybe<Scalars['Boolean']>;
  addStockIntoStockWatchlist?: Maybe<Summary>;
  removeStockFromStockWatchlist?: Maybe<Scalars['Boolean']>;
  performTransaction?: Maybe<PerformedTransaction>;
  setForceReloadStockDetails?: Maybe<Scalars['Boolean']>;
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
  transactionInput: StTransactionInput;
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

export type PerformedTransaction = {
  __typename?: 'PerformedTransaction';
  holding?: Maybe<StHolding>;
  transaction: StTransaction;
};

export type Query = {
  __typename?: 'Query';
  queryUserData?: Maybe<StUserPublicData>;
  queryUserPublicDataByUsername: Array<Maybe<StUserPublicData>>;
  authenticateUser?: Maybe<StUserPublicData>;
  querySTGroupAllDataByGroupId?: Maybe<StGroupAllData>;
  querySTGroupPartialDataByGroupName?: Maybe<StSearchGroups>;
  queryStockDetails?: Maybe<StockDetails>;
  queryStockSummary?: Maybe<Summary>;
  queryStockQuotesByPrefix: Array<Maybe<StfmCompanyQuote>>;
  queryStockFinancialReports?: Maybe<StockDetailsFinancialReports>;
  querySymbolHistoricalPrices?: Maybe<SymbolHistoricalPrices>;
  querySTMarketHistoryOverview?: Maybe<StMarketOverviewPartialData>;
  queryStMarketAllCategories?: Maybe<StMarketDatasetKeyCategories>;
  queryMarketDailyOverview?: Maybe<StMarketDailyOverview>;
  queryStMarketData?: Maybe<StMarketChartDataResultCombined>;
  queryEtfDocument?: Maybe<StMarketEtfDocument>;
  querySTTradingStrategies?: Maybe<StTradingStrategySearch>;
  querySTTradingStrategyData?: Maybe<StTradingStrategyData>;
  queryAdminMainInformations?: Maybe<StAdminMainInformations>;
};


export type QueryQueryUserDataArgs = {
  id: Scalars['String'];
};


export type QueryQueryUserPublicDataByUsernameArgs = {
  usernamePrefix: Scalars['String'];
};


export type QueryAuthenticateUserArgs = {
  id: Scalars['String'];
};


export type QueryQueryStGroupAllDataByGroupIdArgs = {
  groupId: Scalars['String'];
};


export type QueryQueryStGroupPartialDataByGroupNameArgs = {
  groupName: Scalars['String'];
};


export type QueryQueryStockDetailsArgs = {
  symbol: Scalars['String'];
  reload?: Maybe<Scalars['Boolean']>;
};


export type QueryQueryStockSummaryArgs = {
  symbol: Scalars['String'];
};


export type QueryQueryStockQuotesByPrefixArgs = {
  symbolPrefix: Scalars['String'];
};


export type QueryQueryStockFinancialReportsArgs = {
  symbol: Scalars['String'];
};


export type QueryQuerySymbolHistoricalPricesArgs = {
  symbol: Scalars['String'];
  period: Scalars['String'];
};


export type QueryQueryStMarketDataArgs = {
  key: Scalars['String'];
};


export type QueryQueryEtfDocumentArgs = {
  etfName: Scalars['String'];
};


export type QueryQueryStTradingStrategyDataArgs = {
  symbol: Scalars['String'];
  strategy: Scalars['String'];
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

export type SearchSymbol = {
  __typename?: 'SearchSymbol';
  summaries: Array<Maybe<Summary>>;
};

export type Series = {
  __typename?: 'Series';
  data?: Maybe<Array<Maybe<Scalars['Float']>>>;
  name?: Maybe<Scalars['String']>;
};

export type StAdminMainInformations = {
  __typename?: 'STAdminMainInformations';
  lastStockDetailsReload?: Maybe<Scalars['String']>;
  usersRegistrated: Scalars['Float'];
  usersActive: Scalars['Float'];
  usersRegistrationSnippets: Array<Maybe<StUserIndetification>>;
  usersWeeklyRegistrated: Array<Maybe<StSeriesNumber>>;
};

export type StDiscountedCashFlowFormula = {
  __typename?: 'STDiscountedCashFlowFormula';
  estimatedCompanyTodayValue: Scalars['Float'];
  estimatedDiscountedFactors: Array<Maybe<Scalars['Float']>>;
  estimatedDiscountedTerminalValue: Scalars['Float'];
  estimatedFreeCashFlowRate: Scalars['Float'];
  estimatedFreeCashFlowRates: Array<Maybe<Scalars['Float']>>;
  estimatedFreeCashFlows: Array<Maybe<Scalars['Float']>>;
  estimatedIntrinsicValue: Scalars['Float'];
  estimatedNetIncomeMargin: Scalars['Float'];
  estimatedNetIncomes: Array<Maybe<Scalars['Float']>>;
  estimatedPresentValueOfFutureCashFlows: Array<Maybe<Scalars['Float']>>;
  estimatedRevenueGrowthRate: Scalars['Float'];
  estimatedRevenues: Array<Maybe<Scalars['Float']>>;
  estimatedTerminalValue: Scalars['Float'];
  historical: StDiscountedCashFlowFormulaHistorical;
  variable: StDiscountedCashFlowFormulaVariable;
  years: Array<Maybe<Scalars['String']>>;
};

export type StDiscountedCashFlowFormulaHistorical = {
  __typename?: 'STDiscountedCashFlowFormulaHistorical';
  freeCashFlows: Array<Maybe<Scalars['Float']>>;
  sharesOutstanding: Scalars['Float'];
  netIncomeMargins: Array<Maybe<Scalars['Float']>>;
  netIncome: Array<Maybe<Scalars['Float']>>;
  revenue: Array<Maybe<Scalars['Float']>>;
  revenueGrowthRates: Array<Maybe<Scalars['Float']>>;
  historicalYears: Array<Maybe<Scalars['String']>>;
};

export type StDiscountedCashFlowFormulaVariable = {
  __typename?: 'STDiscountedCashFlowFormulaVariable';
  perpetualGrowthRate: Scalars['Float'];
  requiredRateOfReturn: Scalars['Float'];
};

export type StDividendDiscountedFormula = {
  __typename?: 'STDividendDiscountedFormula';
  dividendGrowthRate: Scalars['Float'];
  dividendsPerShareTTM: Scalars['Float'];
  minimumRateReturn: Scalars['Float'];
  estimatedIntrinsicValue: Scalars['Float'];
};

export type StEarningsValuationFormula = {
  __typename?: 'STEarningsValuationFormula';
  dates: Array<Maybe<Scalars['String']>>;
  eps: Scalars['Float'];
  estimatedDiscountedPV: Array<Maybe<Scalars['Float']>>;
  estimatedEarnings: Array<Maybe<Scalars['Float']>>;
  estimatedIntrinsicValue: Scalars['Float'];
  variable: StEarningsValuationFormulaVariable;
};

export type StEarningsValuationFormulaVariable = {
  __typename?: 'STEarningsValuationFormulaVariable';
  growthRateFrom5yTo10y: Scalars['Float'];
  growthRateNext5y: Scalars['Float'];
  minimumRateReturn: Scalars['Float'];
  terminalMultiple: Scalars['Float'];
};

export type StfmBalanceSheet = {
  __typename?: 'STFMBalanceSheet';
  acceptedDate?: Maybe<Scalars['String']>;
  accountPayables?: Maybe<Scalars['Float']>;
  accumulatedOtherComprehensiveIncomeLoss?: Maybe<Scalars['Float']>;
  cashAndCashEquivalents?: Maybe<Scalars['Float']>;
  cashAndShortTermInvestments?: Maybe<Scalars['Float']>;
  commonStock?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['String']>;
  deferredRevenue?: Maybe<Scalars['Float']>;
  deferredRevenueNonCurrent?: Maybe<Scalars['Float']>;
  deferredTaxLiabilitiesNonCurrent?: Maybe<Scalars['Float']>;
  fillingDate?: Maybe<Scalars['String']>;
  finalLink?: Maybe<Scalars['String']>;
  goodwill?: Maybe<Scalars['Float']>;
  goodwillAndIntangibleAssets?: Maybe<Scalars['Float']>;
  intangibleAssets?: Maybe<Scalars['Float']>;
  inventory?: Maybe<Scalars['Float']>;
  link?: Maybe<Scalars['String']>;
  longTermDebt?: Maybe<Scalars['Float']>;
  longTermInvestments?: Maybe<Scalars['Float']>;
  netDebt?: Maybe<Scalars['Float']>;
  netReceivables?: Maybe<Scalars['Float']>;
  otherAssets?: Maybe<Scalars['Float']>;
  otherCurrentAssets?: Maybe<Scalars['Float']>;
  otherCurrentLiabilities?: Maybe<Scalars['Float']>;
  otherLiabilities?: Maybe<Scalars['Float']>;
  otherNonCurrentAssets?: Maybe<Scalars['Float']>;
  otherNonCurrentLiabilities?: Maybe<Scalars['Float']>;
  othertotalStockholdersEquity?: Maybe<Scalars['Float']>;
  period?: Maybe<Scalars['String']>;
  propertyPlantEquipmentNet?: Maybe<Scalars['Float']>;
  reportedCurrency?: Maybe<Scalars['String']>;
  retainedEarnings?: Maybe<Scalars['Float']>;
  shortTermDebt?: Maybe<Scalars['Float']>;
  shortTermInvestments?: Maybe<Scalars['Float']>;
  symbol?: Maybe<Scalars['String']>;
  taxAssets?: Maybe<Scalars['Float']>;
  taxPayables?: Maybe<Scalars['Float']>;
  totalAssets?: Maybe<Scalars['Float']>;
  totalCurrentAssets?: Maybe<Scalars['Float']>;
  totalCurrentLiabilities?: Maybe<Scalars['Float']>;
  totalDebt?: Maybe<Scalars['Float']>;
  totalInvestments?: Maybe<Scalars['Float']>;
  totalLiabilities?: Maybe<Scalars['Float']>;
  totalLiabilitiesAndStockholdersEquity?: Maybe<Scalars['Float']>;
  totalNonCurrentAssets?: Maybe<Scalars['Float']>;
  totalNonCurrentLiabilities?: Maybe<Scalars['Float']>;
  totalStockholdersEquity?: Maybe<Scalars['Float']>;
};

export type StfmCalendarEarnings = {
  __typename?: 'STFMCalendarEarnings';
  date?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  eps?: Maybe<Scalars['Float']>;
  epsEstimated?: Maybe<Scalars['Float']>;
  time?: Maybe<Scalars['String']>;
  revenue?: Maybe<Scalars['Float']>;
  revenueEstimated?: Maybe<Scalars['Float']>;
};

export type StfmCalendarEconomic = {
  __typename?: 'STFMCalendarEconomic';
  event?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  actual?: Maybe<Scalars['Float']>;
  previous?: Maybe<Scalars['Float']>;
  change?: Maybe<Scalars['Float']>;
  changePercentage?: Maybe<Scalars['Float']>;
  estimate?: Maybe<Scalars['Float']>;
};

export type StfmCalendarIpo = {
  __typename?: 'STFMCalendarIpo';
  date?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  exchange?: Maybe<Scalars['String']>;
  actions?: Maybe<Scalars['String']>;
  shares?: Maybe<Scalars['Float']>;
  priceRange?: Maybe<Scalars['String']>;
  marketCap?: Maybe<Scalars['Float']>;
};

export type StfmCashFlow = {
  __typename?: 'STFMCashFlow';
  acceptedDate?: Maybe<Scalars['String']>;
  accountsPayables?: Maybe<Scalars['Float']>;
  accountsReceivables?: Maybe<Scalars['Float']>;
  acquisitionsNet?: Maybe<Scalars['Float']>;
  capitalExpenditure?: Maybe<Scalars['Float']>;
  cashAtBeginningOfPeriod?: Maybe<Scalars['Float']>;
  cashAtEndOfPeriod?: Maybe<Scalars['Float']>;
  changeInWorkingCapital?: Maybe<Scalars['Float']>;
  commonStockIssued?: Maybe<Scalars['Float']>;
  commonStockRepurchased?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['String']>;
  debtRepayment?: Maybe<Scalars['Float']>;
  deferredIncomeTax?: Maybe<Scalars['Float']>;
  depreciationAndAmortization?: Maybe<Scalars['Float']>;
  dividendsPaid?: Maybe<Scalars['Float']>;
  effectOfForexChangesOnCash?: Maybe<Scalars['Float']>;
  fillingDate?: Maybe<Scalars['String']>;
  finalLink?: Maybe<Scalars['String']>;
  freeCashFlow?: Maybe<Scalars['Float']>;
  inventory?: Maybe<Scalars['Float']>;
  investmentsInPropertyPlantAndEquipment?: Maybe<Scalars['Float']>;
  link?: Maybe<Scalars['String']>;
  netCashProvidedByOperatingActivities?: Maybe<Scalars['Float']>;
  netCashUsedForInvestingActivites?: Maybe<Scalars['Float']>;
  netCashUsedProvidedByFinancingActivities?: Maybe<Scalars['Float']>;
  netChangeInCash?: Maybe<Scalars['Float']>;
  netIncome?: Maybe<Scalars['Float']>;
  operatingCashFlow?: Maybe<Scalars['Float']>;
  otherFinancingActivites?: Maybe<Scalars['Float']>;
  otherInvestingActivites?: Maybe<Scalars['Float']>;
  otherNonCashItems?: Maybe<Scalars['Float']>;
  otherWorkingCapital?: Maybe<Scalars['Float']>;
  period?: Maybe<Scalars['String']>;
  purchasesOfInvestments?: Maybe<Scalars['Float']>;
  reportedCurrency?: Maybe<Scalars['String']>;
  salesMaturitiesOfInvestments?: Maybe<Scalars['Float']>;
  stockBasedCompensation?: Maybe<Scalars['Float']>;
  symbol?: Maybe<Scalars['String']>;
};

export type StfmCompanyOutlook = {
  __typename?: 'STFMCompanyOutlook';
  financialsAnnual?: Maybe<StfmFinancials>;
  financialsQuarter?: Maybe<StfmFinancials>;
  insideTrades?: Maybe<Array<Maybe<StfmInsideTrade>>>;
  keyExecutives?: Maybe<Array<Maybe<StfmKeyExecutive>>>;
  metrics?: Maybe<StfmMetrics>;
  profile?: Maybe<StfmProfile>;
  rating?: Maybe<StfmRating>;
  ratios?: Maybe<StfmRatios>;
  splitHistory?: Maybe<Array<Maybe<StfmSplitHistory>>>;
  stockDividend?: Maybe<Array<Maybe<StfmStockDividend>>>;
  stockNews?: Maybe<Array<Maybe<StfmStockNew>>>;
};

export type StfmCompanyQuote = {
  __typename?: 'STFMCompanyQuote';
  avgVolume?: Maybe<Scalars['Float']>;
  change?: Maybe<Scalars['Float']>;
  changesPercentage?: Maybe<Scalars['Float']>;
  dayHigh?: Maybe<Scalars['Float']>;
  dayLow?: Maybe<Scalars['Float']>;
  earningsAnnouncement?: Maybe<Scalars['String']>;
  eps?: Maybe<Scalars['Float']>;
  exchange?: Maybe<Scalars['String']>;
  marketCap?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  open?: Maybe<Scalars['Float']>;
  pe?: Maybe<Scalars['Float']>;
  previousClose?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  priceAvg200?: Maybe<Scalars['Float']>;
  priceAvg50?: Maybe<Scalars['Float']>;
  sharesOutstanding?: Maybe<Scalars['Float']>;
  symbol?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
  yearHigh?: Maybe<Scalars['Float']>;
  yearLow?: Maybe<Scalars['Float']>;
  image?: Maybe<Scalars['String']>;
};

export type StfmEtfCountryWeight = {
  __typename?: 'STFMEtfCountryWeight';
  country?: Maybe<Scalars['String']>;
  weightPercentage?: Maybe<Scalars['String']>;
};

export type StfmEtfHolder = {
  __typename?: 'STFMEtfHolder';
  asset?: Maybe<Scalars['String']>;
  sharesNumber?: Maybe<Scalars['Float']>;
  weightPercentage?: Maybe<Scalars['Float']>;
};

export type StfmEtfSectorWeight = {
  __typename?: 'STFMEtfSectorWeight';
  sector?: Maybe<Scalars['String']>;
  weightPercentage?: Maybe<Scalars['String']>;
};

export type StfmExchangeIndustryPe = {
  __typename?: 'STFMExchangeIndustryPE';
  date?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
  exchange?: Maybe<Scalars['String']>;
  pe?: Maybe<Scalars['Float']>;
};

export type StfmExchangeSectorPe = {
  __typename?: 'STFMExchangeSectorPE';
  date?: Maybe<Scalars['String']>;
  sector?: Maybe<Scalars['String']>;
  exchange?: Maybe<Scalars['String']>;
  pe?: Maybe<Scalars['Float']>;
};

export type StfmFinancials = {
  __typename?: 'STFMFinancials';
  balance?: Maybe<Array<Maybe<StfmBalanceSheet>>>;
  cash?: Maybe<Array<Maybe<StfmCashFlow>>>;
  income?: Maybe<Array<Maybe<StfmIncomeStatement>>>;
};

export type StfmHolder = {
  __typename?: 'STFMHolder';
  change?: Maybe<Scalars['Float']>;
  dateReported?: Maybe<Scalars['String']>;
  holder?: Maybe<Scalars['String']>;
  shares?: Maybe<Scalars['Float']>;
};

export type StfmHolderWithWeight = {
  __typename?: 'STFMHolderWithWeight';
  change?: Maybe<Scalars['Float']>;
  dateReported?: Maybe<Scalars['String']>;
  holder?: Maybe<Scalars['String']>;
  shares?: Maybe<Scalars['Float']>;
  weightPercent?: Maybe<Scalars['Float']>;
};

export type StfmIncomeStatement = {
  __typename?: 'STFMIncomeStatement';
  acceptedDate?: Maybe<Scalars['String']>;
  costAndExpenses?: Maybe<Scalars['Float']>;
  costOfRevenue?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['String']>;
  depreciationAndAmortization?: Maybe<Scalars['Float']>;
  ebitda?: Maybe<Scalars['Float']>;
  ebitdaratio?: Maybe<Scalars['Float']>;
  eps?: Maybe<Scalars['Float']>;
  epsdiluted?: Maybe<Scalars['Float']>;
  fillingDate?: Maybe<Scalars['String']>;
  finalLink?: Maybe<Scalars['String']>;
  generalAndAdministrativeExpenses?: Maybe<Scalars['Float']>;
  grossProfit?: Maybe<Scalars['Float']>;
  grossProfitRatio?: Maybe<Scalars['Float']>;
  incomeBeforeTax?: Maybe<Scalars['Float']>;
  incomeBeforeTaxRatio?: Maybe<Scalars['Float']>;
  incomeTaxExpense?: Maybe<Scalars['Float']>;
  interestExpense?: Maybe<Scalars['Float']>;
  link?: Maybe<Scalars['String']>;
  netIncome?: Maybe<Scalars['Float']>;
  netIncomeRatio?: Maybe<Scalars['Float']>;
  operatingExpenses?: Maybe<Scalars['Float']>;
  operatingIncome?: Maybe<Scalars['Float']>;
  operatingIncomeRatio?: Maybe<Scalars['Float']>;
  otherExpenses?: Maybe<Scalars['Float']>;
  period?: Maybe<Scalars['String']>;
  reportedCurrency?: Maybe<Scalars['String']>;
  researchAndDevelopmentExpenses?: Maybe<Scalars['Float']>;
  revenue?: Maybe<Scalars['Float']>;
  sellingAndMarketingExpenses?: Maybe<Scalars['Float']>;
  sellingGeneralAndAdministrativeExpenses?: Maybe<Scalars['Float']>;
  symbol?: Maybe<Scalars['String']>;
  totalOtherIncomeExpensesNet?: Maybe<Scalars['Float']>;
  weightedAverageShsOut?: Maybe<Scalars['Float']>;
  weightedAverageShsOutDil?: Maybe<Scalars['Float']>;
};

export type StfmInsideTrade = {
  __typename?: 'STFMInsideTrade';
  acquistionOrDisposition?: Maybe<Scalars['String']>;
  companyCik?: Maybe<Scalars['String']>;
  formType?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  reportingCik?: Maybe<Scalars['String']>;
  reportingName?: Maybe<Scalars['String']>;
  securitiesOwned?: Maybe<Scalars['Float']>;
  securitiesTransacted?: Maybe<Scalars['Float']>;
  securityName?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  transactionDate?: Maybe<Scalars['String']>;
  transactionType?: Maybe<Scalars['String']>;
  typeOfOwner?: Maybe<Scalars['String']>;
};

export type StfmKeyExecutive = {
  __typename?: 'STFMKeyExecutive';
  currencyPay?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  pay?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type StfmMetrics = {
  __typename?: 'STFMMetrics';
  dividendYielTTM?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
  yearHigh?: Maybe<Scalars['Float']>;
  yearLow?: Maybe<Scalars['Float']>;
};

export type StfmProfile = {
  __typename?: 'STFMProfile';
  address?: Maybe<Scalars['String']>;
  beta?: Maybe<Scalars['Float']>;
  ceo?: Maybe<Scalars['String']>;
  changes?: Maybe<Scalars['Float']>;
  cik?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  cusip?: Maybe<Scalars['String']>;
  dcf?: Maybe<Scalars['Float']>;
  dcfDiff?: Maybe<Scalars['Float']>;
  defaultImage?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  exchange?: Maybe<Scalars['String']>;
  exchangeShortName?: Maybe<Scalars['String']>;
  fullTimeEmployees?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
  ipoDate?: Maybe<Scalars['String']>;
  isActivelyTrading?: Maybe<Scalars['Boolean']>;
  isEtf?: Maybe<Scalars['Boolean']>;
  isin?: Maybe<Scalars['String']>;
  lastDiv?: Maybe<Scalars['Float']>;
  mktCap?: Maybe<Scalars['Float']>;
  phone?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  range?: Maybe<Scalars['String']>;
  sector?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  volAvg?: Maybe<Scalars['Float']>;
  website?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type StfmRating = {
  __typename?: 'STFMRating';
  date?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  ratingDetailsDCFRecommendation?: Maybe<Scalars['String']>;
  ratingDetailsDCFScore?: Maybe<Scalars['Float']>;
  ratingDetailsDERecommendation?: Maybe<Scalars['String']>;
  ratingDetailsDEScore?: Maybe<Scalars['Float']>;
  ratingDetailsPBRecommendation?: Maybe<Scalars['String']>;
  ratingDetailsPBScore?: Maybe<Scalars['Float']>;
  ratingDetailsPERecommendation?: Maybe<Scalars['String']>;
  ratingDetailsPEScore?: Maybe<Scalars['Float']>;
  ratingDetailsROARecommendation?: Maybe<Scalars['String']>;
  ratingDetailsROAScore?: Maybe<Scalars['Float']>;
  ratingDetailsROERecommendation?: Maybe<Scalars['String']>;
  ratingDetailsROEScore?: Maybe<Scalars['Float']>;
  ratingRecommendation?: Maybe<Scalars['String']>;
  ratingScore?: Maybe<Scalars['Float']>;
  symbol?: Maybe<Scalars['String']>;
};

export type StfmRatios = {
  __typename?: 'STFMRatios';
  assetTurnoverTTM?: Maybe<Scalars['Float']>;
  capitalExpenditureCoverageRatioTTM?: Maybe<Scalars['Float']>;
  cashConversionCycleTTM?: Maybe<Scalars['Float']>;
  cashFlowCoverageRatiosTTM?: Maybe<Scalars['Float']>;
  cashFlowToDebtRatioTTM?: Maybe<Scalars['Float']>;
  cashPerShareTTM?: Maybe<Scalars['Float']>;
  cashRatioTTM?: Maybe<Scalars['Float']>;
  companyEquityMultiplierTTM?: Maybe<Scalars['Float']>;
  currentRatioTTM?: Maybe<Scalars['Float']>;
  daysOfInventoryOutstandingTTM?: Maybe<Scalars['Float']>;
  daysOfPayablesOutstandingTTM?: Maybe<Scalars['Float']>;
  daysOfSalesOutstandingTTM?: Maybe<Scalars['Float']>;
  debtEquityRatioTTM?: Maybe<Scalars['Float']>;
  debtRatioTTM?: Maybe<Scalars['Float']>;
  dividendPaidAndCapexCoverageRatioTTM?: Maybe<Scalars['Float']>;
  dividendPerShareTTM?: Maybe<Scalars['Float']>;
  dividendYielPercentageTTM?: Maybe<Scalars['Float']>;
  dividendYielTTM?: Maybe<Scalars['Float']>;
  dividendYieldTTM?: Maybe<Scalars['Float']>;
  ebitPerRevenueTTM?: Maybe<Scalars['Float']>;
  ebtPerEbitTTM?: Maybe<Scalars['Float']>;
  effectiveTaxRateTTM?: Maybe<Scalars['Float']>;
  enterpriseValueMultipleTTM?: Maybe<Scalars['Float']>;
  fixedAssetTurnoverTTM?: Maybe<Scalars['Float']>;
  freeCashFlowOperatingCashFlowRatioTTM?: Maybe<Scalars['Float']>;
  freeCashFlowPerShareTTM?: Maybe<Scalars['Float']>;
  grossProfitMarginTTM?: Maybe<Scalars['Float']>;
  interestCoverageTTM?: Maybe<Scalars['Float']>;
  inventoryTurnoverTTM?: Maybe<Scalars['Float']>;
  longTermDebtToCapitalizationTTM?: Maybe<Scalars['Float']>;
  netIncomePerEBTTTM?: Maybe<Scalars['Float']>;
  netProfitMarginTTM?: Maybe<Scalars['Float']>;
  operatingCashFlowPerShareTTM?: Maybe<Scalars['Float']>;
  operatingCashFlowSalesRatioTTM?: Maybe<Scalars['Float']>;
  operatingCycleTTM?: Maybe<Scalars['Float']>;
  operatingProfitMarginTTM?: Maybe<Scalars['Float']>;
  payablesTurnoverTTM?: Maybe<Scalars['Float']>;
  payoutRatioTTM?: Maybe<Scalars['Float']>;
  peRatioTTM?: Maybe<Scalars['Float']>;
  pegRatioTTM?: Maybe<Scalars['Float']>;
  pretaxProfitMarginTTM?: Maybe<Scalars['Float']>;
  priceBookValueRatioTTM?: Maybe<Scalars['Float']>;
  priceCashFlowRatioTTM?: Maybe<Scalars['Float']>;
  priceEarningsRatioTTM?: Maybe<Scalars['Float']>;
  priceEarningsToGrowthRatioTTM?: Maybe<Scalars['Float']>;
  priceFairValueTTM?: Maybe<Scalars['Float']>;
  priceSalesRatioTTM?: Maybe<Scalars['Float']>;
  priceToBookRatioTTM?: Maybe<Scalars['Float']>;
  priceToFreeCashFlowsRatioTTM?: Maybe<Scalars['Float']>;
  priceToOperatingCashFlowsRatioTTM?: Maybe<Scalars['Float']>;
  priceToSalesRatioTTM?: Maybe<Scalars['Float']>;
  quickRatioTTM?: Maybe<Scalars['Float']>;
  receivablesTurnoverTTM?: Maybe<Scalars['Float']>;
  returnOnAssetsTTM?: Maybe<Scalars['Float']>;
  returnOnCapitalEmployedTTM?: Maybe<Scalars['Float']>;
  returnOnEquityTTM?: Maybe<Scalars['Float']>;
  shortTermCoverageRatiosTTM?: Maybe<Scalars['Float']>;
  totalDebtToCapitalizationTTM?: Maybe<Scalars['Float']>;
};

export type StfmSectorPerformance = {
  __typename?: 'STFMSectorPerformance';
  sector?: Maybe<Scalars['String']>;
  changesPercentage?: Maybe<Scalars['String']>;
};

export type StfmSplitHistory = {
  __typename?: 'STFMSplitHistory';
  date?: Maybe<Scalars['String']>;
  denominator?: Maybe<Scalars['Float']>;
  label?: Maybe<Scalars['String']>;
  numerator?: Maybe<Scalars['Float']>;
  symbol?: Maybe<Scalars['String']>;
};

export type StfmStockDividend = {
  __typename?: 'STFMStockDividend';
  adjDividend?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['String']>;
  declarationDate?: Maybe<Scalars['String']>;
  dividend?: Maybe<Scalars['Float']>;
  label?: Maybe<Scalars['String']>;
  paymentDate?: Maybe<Scalars['String']>;
  recordDate?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
};

export type StfmStockNew = {
  __typename?: 'STFMStockNew';
  image?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['String']>;
  site?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type StfmTopStocks = {
  __typename?: 'STFMTopStocks';
  ticker?: Maybe<Scalars['String']>;
  changes?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['String']>;
  changesPercentage?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
};

export type StFreeCashFlowFormula = {
  __typename?: 'STFreeCashFlowFormula';
  avgFcf: Scalars['Float'];
  estimatedIntrinsicMarketCap: Scalars['Float'];
  estimatedIntrinsicValue: Scalars['Float'];
  historicalYears?: Maybe<Array<Maybe<Scalars['String']>>>;
  minimumRateReturn: Scalars['Float'];
  capitalExpenditures: Array<Maybe<Scalars['Float']>>;
  operatingActivities: Array<Maybe<Scalars['Float']>>;
  freeCashFlows: Array<Maybe<Scalars['Float']>>;
  sharesOutstanding: Scalars['Float'];
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
  lastPortfolioSnapshot?: Maybe<StPortfolioSnapshot>;
  lastTransactionSnapshot?: Maybe<StTransactionSnapshot>;
  owner: StGroupUser;
  lastUpdateDate: Scalars['String'];
  lastEditedDate: Scalars['String'];
  createdDate: Scalars['String'];
  currentAchievedRanks?: Maybe<StRank>;
  lastPortfolioIncreaseNumber?: Maybe<Scalars['Float']>;
  lastPortfolioIncreasePrct?: Maybe<Scalars['Float']>;
  lastPortfolioBalance?: Maybe<Scalars['Float']>;
  startDate: Scalars['String'];
  endDate?: Maybe<Scalars['String']>;
  isInfinite: Scalars['Boolean'];
  isPrivate: Scalars['Boolean'];
  numberOfExecutedTransactions: Scalars['Float'];
  numberOfExecutedBuyTransactions: Scalars['Float'];
  numberOfExecutedSellTransactions: Scalars['Float'];
  numberOfMembers: Scalars['Float'];
  startedBalance: Scalars['Float'];
  topTransactions: Array<Maybe<StTransaction>>;
  lastTransactions: Array<Maybe<StTransaction>>;
  managers: Array<Maybe<StGroupUser>>;
  members: Array<Maybe<StGroupUser>>;
  invitationSent: Array<Maybe<StGroupUser>>;
  invitationReceived?: Maybe<Array<Maybe<StGroupUser>>>;
  holdings: Array<Maybe<StGroupHoldings>>;
  groupHistoricalData: StGroupHistoricalData;
  topMembers: Array<Maybe<StGroupUser>>;
};

export type StGroupAllDataInput = {
  groupId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  imagePath?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  startDate: Scalars['String'];
  endDate?: Maybe<Scalars['String']>;
  isInfinite: Scalars['Boolean'];
  isPrivate: Scalars['Boolean'];
  isOwnerAlsoMember: Scalars['Boolean'];
  managers: Array<Maybe<Scalars['String']>>;
  members: Array<Maybe<Scalars['String']>>;
  invitationSent: Array<Maybe<Scalars['String']>>;
  invitationReceived: Array<Maybe<Scalars['String']>>;
};

export type StGroupHistoricalData = {
  __typename?: 'STGroupHistoricalData';
  portfolioSnapshots: Array<Maybe<StPortfolioSnapshot>>;
  transactionSnapshots: Array<Maybe<StTransactionSnapshot>>;
  bestAchievedRanks: Array<Maybe<StRank>>;
  groupLogs: Array<Maybe<StLog>>;
};

export type StGroupHoldings = {
  __typename?: 'STGroupHoldings';
  holding: StHolding;
  numberOfUsers: Scalars['Float'];
};

export type StGroupUser = {
  __typename?: 'STGroupUser';
  id: Scalars['String'];
  nickName: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  photoURL: Scalars['String'];
  accountCreatedDate: Scalars['String'];
  lastPortfolioSnapshot?: Maybe<StPortfolioSnapshot>;
  lastPortfolioIncreaseNumber?: Maybe<Scalars['Float']>;
  lastPortfolioIncreasePrct?: Maybe<Scalars['Float']>;
  numberOfExecutedTransactions: Scalars['Float'];
  numberOfExecutedBuyTransactions: Scalars['Float'];
  numberOfExecutedSellTransactions: Scalars['Float'];
  lastTransactionSnapshot?: Maybe<StTransactionSnapshot>;
  previousPosition?: Maybe<Scalars['Float']>;
  currentPosition?: Maybe<Scalars['Float']>;
  startingPortfolioSnapshot?: Maybe<StPortfolioSnapshot>;
  sinceDate: Scalars['String'];
};

export type StHolding = {
  __typename?: 'STHolding';
  symbol: Scalars['String'];
  breakEvenPrice: Scalars['Float'];
  units: Scalars['Float'];
  summary?: Maybe<Summary>;
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

export type StMarketCalendar = {
  __typename?: 'STMarketCalendar';
  calendarEconomic?: Maybe<Array<Maybe<StfmCalendarEconomic>>>;
  calendarDividend?: Maybe<Array<Maybe<StfmStockDividend>>>;
  calendarSplit?: Maybe<Array<Maybe<StfmSplitHistory>>>;
  calendarIpo?: Maybe<Array<Maybe<StfmCalendarIpo>>>;
  calendarEarnings?: Maybe<Array<Maybe<StfmCalendarEarnings>>>;
};

export type StMarketDailyOverview = {
  __typename?: 'STMarketDailyOverview';
  id?: Maybe<Scalars['String']>;
  dailyGainers?: Maybe<Array<Maybe<StfmCompanyQuote>>>;
  dailyLosers?: Maybe<Array<Maybe<StfmCompanyQuote>>>;
  mostActive?: Maybe<Array<Maybe<StfmCompanyQuote>>>;
  stockSuggestions?: Maybe<Array<Maybe<StStockSuggestion>>>;
  topCrypto?: Maybe<Array<Maybe<StMarketTopTableCryptoData>>>;
  news?: Maybe<Array<Maybe<StfmStockNew>>>;
  calendar?: Maybe<StMarketCalendar>;
  mutulaFunds?: Maybe<Array<Maybe<StfmCompanyQuote>>>;
  etfs?: Maybe<Array<Maybe<StfmCompanyQuote>>>;
  commodities?: Maybe<Array<Maybe<StfmCompanyQuote>>>;
  exchange?: Maybe<StMarketExchange>;
  sectorPerformance?: Maybe<Array<Maybe<StfmSectorPerformance>>>;
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

export type StMarketEtfDocument = {
  __typename?: 'STMarketEtfDocument';
  id?: Maybe<Scalars['String']>;
  etfHolders?: Maybe<Array<Maybe<StfmEtfHolder>>>;
  etfSectorWeight?: Maybe<Array<Maybe<StfmEtfSectorWeight>>>;
  etfCountryWeight?: Maybe<Array<Maybe<StfmEtfCountryWeight>>>;
  lastUpdate?: Maybe<Scalars['String']>;
};

export type StMarketExchange = {
  __typename?: 'STMarketExchange';
  id?: Maybe<Scalars['String']>;
  exchangeIndustryPE?: Maybe<Array<Maybe<StfmExchangeIndustryPe>>>;
  exchangeSectorPE?: Maybe<Array<Maybe<StfmExchangeSectorPe>>>;
};

export type StMarketChartDataResultCombined = {
  __typename?: 'STMarketChartDataResultCombined';
  currentDate?: Maybe<Scalars['String']>;
  currentValue?: Maybe<Scalars['Float']>;
  documentKey?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parentName?: Maybe<Scalars['String']>;
  lastUpdate?: Maybe<Scalars['String']>;
  data?: Maybe<Array<Maybe<Array<Maybe<Scalars['Float']>>>>>;
};

export type StMarketOverviewPartialData = {
  __typename?: 'STMarketOverviewPartialData';
  sp500?: Maybe<Array<Maybe<StMarketChartDataResultCombined>>>;
  bonds?: Maybe<Array<Maybe<StMarketChartDataResultCombined>>>;
  inflation_rate?: Maybe<Array<Maybe<StMarketChartDataResultCombined>>>;
  misery_index?: Maybe<Array<Maybe<StMarketChartDataResultCombined>>>;
  treasury_yield?: Maybe<Array<Maybe<StMarketChartDataResultCombined>>>;
  investor_sentiment?: Maybe<Array<Maybe<StMarketChartDataResultCombined>>>;
  bitcoin?: Maybe<Array<Maybe<StMarketChartDataResultCombined>>>;
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

export type StockDetails = {
  __typename?: 'StockDetails';
  id: Scalars['String'];
  recommendation?: Maybe<Array<Maybe<Recommendations>>>;
  companyData?: Maybe<CompanyData>;
  summary: Summary;
  metric?: Maybe<Metric>;
  dividends?: Maybe<Dividens>;
  historicalMetrics?: Maybe<HistoricalMetrics>;
  calculations?: Maybe<StStockDetailsCalculations>;
  calculatedPredictions?: Maybe<StStockDetailsCalculatedPredictions>;
  allFinancialReportsQuarterly?: Maybe<Array<Maybe<FinancialReport>>>;
  allFinancialReportsYearly?: Maybe<Array<Maybe<FinancialReport>>>;
  institutionalHolders?: Maybe<Array<Maybe<StfmHolder>>>;
  mutualFundHolders?: Maybe<Array<Maybe<StfmHolderWithWeight>>>;
  companyOutlook?: Maybe<StfmCompanyOutlook>;
  sectorPeers?: Maybe<Array<Maybe<StfmCompanyQuote>>>;
};

export type StockDetailsFinancialReports = {
  __typename?: 'StockDetailsFinancialReports';
  id: Scalars['String'];
  allFinancialReportsQuarterly?: Maybe<Array<Maybe<FinancialReport>>>;
  allFinancialReportsYearly?: Maybe<Array<Maybe<FinancialReport>>>;
};

export type StPortfolio = {
  __typename?: 'STPortfolio';
  portfolioInvested: Scalars['Float'];
  portfolioCash: Scalars['Float'];
};

export type StPortfolioSnapshot = {
  __typename?: 'STPortfolioSnapshot';
  portfolioInvested: Scalars['Float'];
  portfolioCash: Scalars['Float'];
  date: Scalars['String'];
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
  groups: Array<Maybe<StGroupAllData>>;
};

export type StSeries = {
  __typename?: 'STSeries';
  data: Array<Maybe<Scalars['Float']>>;
  name: Scalars['String'];
};

export type StSeriesNumber = {
  __typename?: 'STSeriesNumber';
  data: Scalars['Float'];
  timestamp: Scalars['Float'];
};

export type StSimpleChart = {
  __typename?: 'STSimpleChart';
  date: Scalars['String'];
  data: Scalars['Float'];
  label?: Maybe<Scalars['String']>;
};

export type StStockDetailsCalculatedPredictions = {
  __typename?: 'STStockDetailsCalculatedPredictions';
  DCF_V1?: Maybe<StDiscountedCashFlowFormula>;
  DDF_V1?: Maybe<StDividendDiscountedFormula>;
  FCF_V1?: Maybe<StFreeCashFlowFormula>;
  INTRINSIC_V1?: Maybe<StEarningsValuationFormula>;
};

export type StStockDetailsCalculations = {
  __typename?: 'STStockDetailsCalculations';
  CAPM?: Maybe<Capm>;
  WACC?: Maybe<Wacc>;
};

export type StStockSuggestion = {
  __typename?: 'STStockSuggestion';
  historicalData?: Maybe<Array<Maybe<Scalars['Float']>>>;
  summary?: Maybe<Summary>;
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

export type StTradingStrategyData = {
  __typename?: 'STTradingStrategyData';
  interval: Scalars['String'];
  period: Scalars['String'];
  series: Array<Maybe<StSeries>>;
  timestamp: Array<Maybe<Scalars['Float']>>;
};

export enum StTradingStrategyEnum {
  RedWhiteBlue = 'RED_WHITE_BLUE',
  GreenLineBreakout = 'GREEN_LINE_BREAKOUT',
  ResistancePivotPoints = 'RESISTANCE_PIVOT_POINTS',
  ExtendedMarkerVerification = 'EXTENDED_MARKER_VERIFICATION',
  RiskManagementCalculator = 'RISK_MANAGEMENT_CALCULATOR'
}

export type StTradingStrategySearch = {
  __typename?: 'STTradingStrategySearch';
  data: Array<Maybe<StTradingStrategySearchData>>;
};

export type StTradingStrategySearchData = {
  __typename?: 'STTradingStrategySearchData';
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  symbol: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type StTransaction = {
  __typename?: 'STTransaction';
  transactionId?: Maybe<Scalars['String']>;
  user?: Maybe<StUserIndetification>;
  symbol: Scalars['String'];
  symbol_logo_url: Scalars['String'];
  price: Scalars['Float'];
  return?: Maybe<Scalars['Float']>;
  returnChange?: Maybe<Scalars['Float']>;
  units: Scalars['Float'];
  date: Scalars['String'];
  operation: StTransactionOperationEnum;
};

export type StTransactionInput = {
  symbol: Scalars['String'];
  symbol_logo_url: Scalars['String'];
  units: Scalars['Float'];
  operation: StTransactionOperationEnum;
};

export enum StTransactionOperationEnum {
  Buy = 'BUY',
  Sell = 'SELL'
}

export type StTransactionSnapshot = {
  __typename?: 'STTransactionSnapshot';
  transactionsBuy?: Maybe<Scalars['Float']>;
  transactionsSell?: Maybe<Scalars['Float']>;
  date: Scalars['String'];
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

export type StUserGroups = {
  __typename?: 'STUserGroups';
  groupInvitationSent?: Maybe<Array<Maybe<StGroupAllData>>>;
  groupInvitationReceived?: Maybe<Array<Maybe<StGroupAllData>>>;
  groupOwner?: Maybe<Array<Maybe<StGroupAllData>>>;
  groupMember?: Maybe<Array<Maybe<StGroupAllData>>>;
};

export type StUserHistoricalData = {
  __typename?: 'STUserHistoricalData';
  portfolioSnapshots: Array<Maybe<StPortfolioSnapshot>>;
  transactionSnapshots: Array<Maybe<StTransactionSnapshot>>;
  bestAchievedRanks: Array<Maybe<StRank>>;
  resetedAccount: Array<Maybe<StUserResetedAccount>>;
  userLogs: Array<Maybe<StLog>>;
};

export type StUserIndetification = {
  __typename?: 'STUserIndetification';
  id: Scalars['String'];
  nickName: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  photoURL: Scalars['String'];
  accountCreatedDate: Scalars['String'];
};

export type StUserIndetificationInformationInput = {
  id: Scalars['String'];
  nickName: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  photoURL: Scalars['String'];
  accountCreatedDate: Scalars['String'];
};

export type StUserPrivateData = {
  __typename?: 'STUserPrivateData';
  id?: Maybe<Scalars['String']>;
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
  id: Scalars['String'];
  nickName: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  photoURL?: Maybe<Scalars['String']>;
  accountCreatedDate: Scalars['String'];
  lastSignInDate: Scalars['String'];
  portfolioCash: Scalars['Float'];
  rank?: Maybe<StRank>;
  holdings: Array<Maybe<StHolding>>;
  transactionsSnippets: Array<Maybe<StTransaction>>;
  activity?: Maybe<User_Activity>;
  groups: StUserGroups;
  numberOfExecutedTransactions: Scalars['Float'];
  numberOfExecutedBuyTransactions: Scalars['Float'];
  numberOfExecutedSellTransactions: Scalars['Float'];
  lastPortfolioIncreaseNumber?: Maybe<Scalars['Float']>;
  lastPortfolioIncreasePrct?: Maybe<Scalars['Float']>;
  lastPortfolioSnapshot?: Maybe<StPortfolioSnapshot>;
  lastTransactionSnapshot?: Maybe<StTransactionSnapshot>;
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
  avgVolume?: Maybe<Scalars['Float']>;
  ceo?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  dividendDate?: Maybe<Scalars['Float']>;
  ePSTTM?: Maybe<Scalars['Float']>;
  earningsDate?: Maybe<Scalars['Float']>;
  exDividendDate?: Maybe<Scalars['Float']>;
  exchangeName?: Maybe<Scalars['String']>;
  fiveTwoWeekRange?: Maybe<Scalars['String']>;
  forwardDividendRate?: Maybe<Scalars['Float']>;
  forwardDividendYield?: Maybe<Scalars['Float']>;
  forwardEPS?: Maybe<Scalars['Float']>;
  forwardPE?: Maybe<Scalars['Float']>;
  fullTimeEmployees?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
  ipoDate?: Maybe<Scalars['String']>;
  lastSplitDate?: Maybe<Scalars['Float']>;
  lastSplitFactor?: Maybe<Scalars['String']>;
  logo_url?: Maybe<Scalars['String']>;
  longBusinessSummary?: Maybe<Scalars['String']>;
  marketCap?: Maybe<Scalars['Float']>;
  marketPrice?: Maybe<Scalars['Float']>;
  oneyTargetEst?: Maybe<Scalars['Float']>;
  pERatioTTM?: Maybe<Scalars['Float']>;
  previousClose?: Maybe<Scalars['Float']>;
  recommendationKey?: Maybe<Scalars['String']>;
  recommendationMean?: Maybe<Scalars['Float']>;
  residance?: Maybe<SummaryResidance>;
  sandPFiveTwoWeekChange?: Maybe<Scalars['Float']>;
  sector?: Maybe<Scalars['String']>;
  sharesOutstanding?: Maybe<Scalars['Float']>;
  shortRatio?: Maybe<Scalars['Float']>;
  symbol?: Maybe<Scalars['String']>;
  targetEstOneyPercent?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
  website?: Maybe<Scalars['String']>;
  weekRangeFiveTwoMax?: Maybe<Scalars['Float']>;
  weekRangeFiveTwoMin?: Maybe<Scalars['Float']>;
  yearToDatePrice?: Maybe<Scalars['Float']>;
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

export type SymbolHistoricalPrices = {
  __typename?: 'SymbolHistoricalPrices';
  livePrice?: Maybe<Scalars['Float']>;
  symbol?: Maybe<Scalars['String']>;
  period?: Maybe<Scalars['String']>;
  price?: Maybe<Array<Maybe<Array<Maybe<Scalars['Float']>>>>>;
  volume?: Maybe<Array<Maybe<Array<Maybe<Scalars['Float']>>>>>;
};

export type UpgradeDowngradeHistory = {
  __typename?: 'UpgradeDowngradeHistory';
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

export type Wacc = {
  __typename?: 'WACC';
  CAPM?: Maybe<Capm>;
  Rd: Scalars['Float'];
  Re: Scalars['Float'];
  Wd: Scalars['Float'];
  We: Scalars['Float'];
  result: Scalars['Float'];
  taxRate: Scalars['Float'];
};

export type QueryAdminMainInformationsQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryAdminMainInformationsQuery = (
  { __typename?: 'Query' }
  & { queryAdminMainInformations?: Maybe<(
    { __typename?: 'STAdminMainInformations' }
    & Pick<StAdminMainInformations, 'lastStockDetailsReload' | 'usersRegistrated' | 'usersActive'>
    & { usersRegistrationSnippets: Array<Maybe<(
      { __typename?: 'STUserIndetification' }
      & Pick<StUserIndetification, 'id' | 'nickName' | 'locale' | 'photoURL' | 'accountCreatedDate'>
    )>>, usersWeeklyRegistrated: Array<Maybe<(
      { __typename?: 'STSeriesNumber' }
      & Pick<StSeriesNumber, 'data' | 'timestamp'>
    )>> }
  )> }
);

export type StfmHolderFragmentFragment = (
  { __typename?: 'STFMHolder' }
  & Pick<StfmHolder, 'change' | 'dateReported' | 'holder' | 'shares'>
);

export type StfmHolderWithWeightFragmentFragment = (
  { __typename?: 'STFMHolderWithWeight' }
  & Pick<StfmHolderWithWeight, 'change' | 'dateReported' | 'holder' | 'shares' | 'weightPercent'>
);

export type StfmBalanceSheetFragmentFragment = (
  { __typename?: 'STFMBalanceSheet' }
  & Pick<StfmBalanceSheet, 'acceptedDate' | 'accountPayables' | 'accumulatedOtherComprehensiveIncomeLoss' | 'cashAndCashEquivalents' | 'cashAndShortTermInvestments' | 'commonStock' | 'date' | 'deferredRevenue' | 'deferredRevenueNonCurrent' | 'deferredTaxLiabilitiesNonCurrent' | 'fillingDate' | 'finalLink' | 'goodwill' | 'goodwillAndIntangibleAssets' | 'intangibleAssets' | 'inventory' | 'link' | 'longTermDebt' | 'longTermInvestments' | 'netDebt' | 'netReceivables' | 'otherAssets' | 'otherCurrentAssets' | 'otherCurrentLiabilities' | 'otherLiabilities' | 'otherNonCurrentAssets' | 'otherNonCurrentLiabilities' | 'othertotalStockholdersEquity' | 'period' | 'propertyPlantEquipmentNet' | 'reportedCurrency' | 'retainedEarnings' | 'shortTermDebt' | 'shortTermInvestments' | 'symbol' | 'taxAssets' | 'taxPayables' | 'totalAssets' | 'totalCurrentAssets' | 'totalCurrentLiabilities' | 'totalDebt' | 'totalInvestments' | 'totalLiabilities' | 'totalLiabilitiesAndStockholdersEquity' | 'totalNonCurrentAssets' | 'totalNonCurrentLiabilities' | 'totalStockholdersEquity'>
);

export type StfmCashFlowFragmentFragment = (
  { __typename?: 'STFMCashFlow' }
  & Pick<StfmCashFlow, 'acceptedDate' | 'accountsPayables' | 'accountsReceivables' | 'acquisitionsNet' | 'capitalExpenditure' | 'cashAtBeginningOfPeriod' | 'cashAtEndOfPeriod' | 'changeInWorkingCapital' | 'commonStockIssued' | 'commonStockRepurchased' | 'date' | 'debtRepayment' | 'deferredIncomeTax' | 'depreciationAndAmortization' | 'dividendsPaid' | 'effectOfForexChangesOnCash' | 'fillingDate' | 'finalLink' | 'freeCashFlow' | 'inventory' | 'investmentsInPropertyPlantAndEquipment' | 'link' | 'netCashProvidedByOperatingActivities' | 'netCashUsedForInvestingActivites' | 'netCashUsedProvidedByFinancingActivities' | 'netChangeInCash' | 'netIncome' | 'operatingCashFlow' | 'otherFinancingActivites' | 'otherInvestingActivites' | 'otherNonCashItems' | 'otherWorkingCapital' | 'period' | 'purchasesOfInvestments' | 'reportedCurrency' | 'salesMaturitiesOfInvestments' | 'stockBasedCompensation' | 'symbol'>
);

export type StfmIncomeStatementFragmentFragment = (
  { __typename?: 'STFMIncomeStatement' }
  & Pick<StfmIncomeStatement, 'acceptedDate' | 'costAndExpenses' | 'costOfRevenue' | 'date' | 'depreciationAndAmortization' | 'ebitda' | 'ebitdaratio' | 'eps' | 'epsdiluted' | 'fillingDate' | 'finalLink' | 'generalAndAdministrativeExpenses' | 'grossProfit' | 'grossProfitRatio' | 'incomeBeforeTax' | 'incomeBeforeTaxRatio' | 'incomeTaxExpense' | 'interestExpense' | 'link' | 'netIncome' | 'netIncomeRatio' | 'operatingExpenses' | 'operatingIncome' | 'operatingIncomeRatio' | 'otherExpenses' | 'period' | 'reportedCurrency' | 'researchAndDevelopmentExpenses' | 'revenue' | 'sellingAndMarketingExpenses' | 'sellingGeneralAndAdministrativeExpenses' | 'symbol' | 'totalOtherIncomeExpensesNet' | 'weightedAverageShsOut' | 'weightedAverageShsOutDil'>
);

export type StfmInsideTradeFragmentFragment = (
  { __typename?: 'STFMInsideTrade' }
  & Pick<StfmInsideTrade, 'acquistionOrDisposition' | 'companyCik' | 'formType' | 'link' | 'price' | 'reportingCik' | 'reportingName' | 'securitiesOwned' | 'securitiesTransacted' | 'securityName' | 'symbol' | 'transactionDate' | 'transactionType' | 'typeOfOwner'>
);

export type StfmKeyExecutiveFragmentFragment = (
  { __typename?: 'STFMKeyExecutive' }
  & Pick<StfmKeyExecutive, 'currencyPay' | 'gender' | 'name' | 'pay' | 'title'>
);

export type StfmStockNewFragmentFragment = (
  { __typename?: 'STFMStockNew' }
  & Pick<StfmStockNew, 'image' | 'publishedDate' | 'site' | 'symbol' | 'text' | 'title' | 'url'>
);

export type StfmStockDividendFragmentFragment = (
  { __typename?: 'STFMStockDividend' }
  & Pick<StfmStockDividend, 'adjDividend' | 'date' | 'declarationDate' | 'dividend' | 'label' | 'paymentDate' | 'recordDate' | 'symbol'>
);

export type StfmSplitHistoryFragmentFragment = (
  { __typename?: 'STFMSplitHistory' }
  & Pick<StfmSplitHistory, 'date' | 'denominator' | 'label' | 'numerator' | 'symbol'>
);

export type StfmRatingFragmentFragment = (
  { __typename?: 'STFMRating' }
  & Pick<StfmRating, 'date' | 'rating' | 'ratingDetailsDCFRecommendation' | 'ratingDetailsDCFScore' | 'ratingDetailsDERecommendation' | 'ratingDetailsDEScore' | 'ratingDetailsPBRecommendation' | 'ratingDetailsPBScore' | 'ratingDetailsPERecommendation' | 'ratingDetailsPEScore' | 'ratingDetailsROARecommendation' | 'ratingDetailsROAScore' | 'ratingDetailsROERecommendation' | 'ratingDetailsROEScore' | 'ratingRecommendation' | 'ratingScore' | 'symbol'>
);

export type StfmRatiosFragmentFragment = (
  { __typename?: 'STFMRatios' }
  & Pick<StfmRatios, 'assetTurnoverTTM' | 'capitalExpenditureCoverageRatioTTM' | 'cashConversionCycleTTM' | 'cashFlowCoverageRatiosTTM' | 'cashFlowToDebtRatioTTM' | 'cashPerShareTTM' | 'cashRatioTTM' | 'companyEquityMultiplierTTM' | 'currentRatioTTM' | 'daysOfInventoryOutstandingTTM' | 'daysOfPayablesOutstandingTTM' | 'daysOfSalesOutstandingTTM' | 'debtEquityRatioTTM' | 'debtRatioTTM' | 'dividendPaidAndCapexCoverageRatioTTM' | 'dividendPerShareTTM' | 'dividendYielPercentageTTM' | 'dividendYielTTM' | 'dividendYieldTTM' | 'ebitPerRevenueTTM' | 'ebtPerEbitTTM' | 'effectiveTaxRateTTM' | 'enterpriseValueMultipleTTM' | 'fixedAssetTurnoverTTM' | 'freeCashFlowOperatingCashFlowRatioTTM' | 'freeCashFlowPerShareTTM' | 'grossProfitMarginTTM' | 'interestCoverageTTM' | 'inventoryTurnoverTTM' | 'longTermDebtToCapitalizationTTM' | 'netIncomePerEBTTTM' | 'netProfitMarginTTM' | 'operatingCashFlowPerShareTTM' | 'operatingCashFlowSalesRatioTTM' | 'operatingCycleTTM' | 'operatingProfitMarginTTM' | 'payablesTurnoverTTM' | 'payoutRatioTTM' | 'peRatioTTM' | 'pegRatioTTM' | 'pretaxProfitMarginTTM' | 'priceBookValueRatioTTM' | 'priceCashFlowRatioTTM' | 'priceEarningsRatioTTM' | 'priceEarningsToGrowthRatioTTM' | 'priceFairValueTTM' | 'priceSalesRatioTTM' | 'priceToBookRatioTTM' | 'priceToFreeCashFlowsRatioTTM' | 'priceToOperatingCashFlowsRatioTTM' | 'priceToSalesRatioTTM' | 'quickRatioTTM' | 'receivablesTurnoverTTM' | 'returnOnAssetsTTM' | 'returnOnCapitalEmployedTTM' | 'returnOnEquityTTM' | 'shortTermCoverageRatiosTTM' | 'totalDebtToCapitalizationTTM'>
);

export type StfmCompanyQuoteFragmentFragment = (
  { __typename?: 'STFMCompanyQuote' }
  & Pick<StfmCompanyQuote, 'avgVolume' | 'change' | 'changesPercentage' | 'dayHigh' | 'dayLow' | 'earningsAnnouncement' | 'eps' | 'exchange' | 'marketCap' | 'name' | 'open' | 'pe' | 'previousClose' | 'price' | 'priceAvg200' | 'priceAvg50' | 'sharesOutstanding' | 'symbol' | 'timestamp' | 'volume' | 'yearHigh' | 'yearLow' | 'image'>
);

export type StfmTopStocksFragmentFragment = (
  { __typename?: 'STFMTopStocks' }
  & Pick<StfmTopStocks, 'ticker' | 'changes' | 'price' | 'changesPercentage' | 'companyName'>
);

export type StfmExchangeSectorPeFragmentFragment = (
  { __typename?: 'STFMExchangeSectorPE' }
  & Pick<StfmExchangeSectorPe, 'date' | 'sector' | 'exchange' | 'pe'>
);

export type StfmExchangeIndustryPeFragmentFragment = (
  { __typename?: 'STFMExchangeIndustryPE' }
  & Pick<StfmExchangeIndustryPe, 'date' | 'industry' | 'exchange' | 'pe'>
);

export type StfmCalendarEarningsFragmentFragment = (
  { __typename?: 'STFMCalendarEarnings' }
  & Pick<StfmCalendarEarnings, 'date' | 'symbol' | 'eps' | 'epsEstimated' | 'time' | 'revenue' | 'revenueEstimated'>
);

export type StfmCalendarIpoFragmentFragment = (
  { __typename?: 'STFMCalendarIpo' }
  & Pick<StfmCalendarIpo, 'date' | 'company' | 'symbol' | 'exchange' | 'actions' | 'shares' | 'priceRange' | 'marketCap'>
);

export type StfmCalendarEconomicFragmentFragment = (
  { __typename?: 'STFMCalendarEconomic' }
  & Pick<StfmCalendarEconomic, 'event' | 'date' | 'country' | 'actual' | 'previous' | 'change' | 'changePercentage' | 'estimate'>
);

export type StfmEtfHolderFragmentFragment = (
  { __typename?: 'STFMEtfHolder' }
  & Pick<StfmEtfHolder, 'asset' | 'sharesNumber' | 'weightPercentage'>
);

export type StfmEtfSectorWeightFragmentFragment = (
  { __typename?: 'STFMEtfSectorWeight' }
  & Pick<StfmEtfSectorWeight, 'sector' | 'weightPercentage'>
);

export type StfmEtfCountryWeightFragmentFragment = (
  { __typename?: 'STFMEtfCountryWeight' }
  & Pick<StfmEtfCountryWeight, 'country' | 'weightPercentage'>
);

export type StfmSectorPerformanceFragmentFragment = (
  { __typename?: 'STFMSectorPerformance' }
  & Pick<StfmSectorPerformance, 'sector' | 'changesPercentage'>
);

export type StGroupUserFragmentFragment = (
  { __typename?: 'STGroupUser' }
  & Pick<StGroupUser, 'id' | 'nickName' | 'locale' | 'photoURL' | 'accountCreatedDate' | 'lastPortfolioIncreaseNumber' | 'lastPortfolioIncreasePrct' | 'numberOfExecutedTransactions' | 'numberOfExecutedBuyTransactions' | 'numberOfExecutedSellTransactions' | 'previousPosition' | 'currentPosition' | 'sinceDate'>
  & { lastPortfolioSnapshot?: Maybe<(
    { __typename?: 'STPortfolioSnapshot' }
    & StPortfolioSnapshotFragmentFragment
  )>, lastTransactionSnapshot?: Maybe<(
    { __typename?: 'STTransactionSnapshot' }
    & StTransactionSnapshotFragmentFragment
  )>, startingPortfolioSnapshot?: Maybe<(
    { __typename?: 'STPortfolioSnapshot' }
    & StPortfolioSnapshotFragmentFragment
  )> }
);

export type StGroupIdentificationDataFragment = (
  { __typename?: 'STGroupAllData' }
  & Pick<StGroupAllData, 'groupId' | 'name' | 'description' | 'imagePath' | 'imageUrl' | 'startDate' | 'endDate' | 'isInfinite' | 'isPrivate' | 'lastPortfolioIncreaseNumber' | 'lastPortfolioIncreasePrct' | 'lastPortfolioBalance' | 'numberOfExecutedTransactions' | 'numberOfExecutedBuyTransactions' | 'numberOfExecutedSellTransactions' | 'numberOfMembers' | 'startedBalance' | 'lastUpdateDate' | 'lastEditedDate' | 'createdDate'>
  & { owner: (
    { __typename?: 'STGroupUser' }
    & StGroupUserFragmentFragment
  ), lastPortfolioSnapshot?: Maybe<(
    { __typename?: 'STPortfolioSnapshot' }
    & StPortfolioSnapshotFragmentFragment
  )>, lastTransactionSnapshot?: Maybe<(
    { __typename?: 'STTransactionSnapshot' }
    & StTransactionSnapshotFragmentFragment
  )>, topMembers: Array<Maybe<(
    { __typename?: 'STGroupUser' }
    & StGroupUserFragmentFragment
  )>>, currentAchievedRanks?: Maybe<(
    { __typename?: 'STRank' }
    & StRankFragmentFragment
  )> }
);

export type StGroupAllDataFragmentFragment = (
  { __typename?: 'STGroupAllData' }
  & Pick<StGroupAllData, 'groupId' | 'name' | 'description' | 'imageUrl' | 'imagePath' | 'lastUpdateDate' | 'lastEditedDate' | 'createdDate' | 'startDate' | 'endDate' | 'isPrivate' | 'isInfinite' | 'numberOfMembers' | 'startedBalance' | 'lastPortfolioIncreaseNumber' | 'lastPortfolioIncreasePrct' | 'lastPortfolioBalance' | 'numberOfExecutedTransactions' | 'numberOfExecutedBuyTransactions' | 'numberOfExecutedSellTransactions'>
  & { owner: (
    { __typename?: 'STGroupUser' }
    & StGroupUserFragmentFragment
  ), holdings: Array<Maybe<(
    { __typename?: 'STGroupHoldings' }
    & Pick<StGroupHoldings, 'numberOfUsers'>
    & { holding: (
      { __typename?: 'STHolding' }
      & StHoldingFragmentFragment
    ) }
  )>>, lastTransactionSnapshot?: Maybe<(
    { __typename?: 'STTransactionSnapshot' }
    & StTransactionSnapshotFragmentFragment
  )>, lastPortfolioSnapshot?: Maybe<(
    { __typename?: 'STPortfolioSnapshot' }
    & StPortfolioSnapshotFragmentFragment
  )>, currentAchievedRanks?: Maybe<(
    { __typename?: 'STRank' }
    & StRankFragmentFragment
  )>, topTransactions: Array<Maybe<(
    { __typename?: 'STTransaction' }
    & StTransactionFragmentFragment
  )>>, groupHistoricalData: (
    { __typename?: 'STGroupHistoricalData' }
    & { portfolioSnapshots: Array<Maybe<(
      { __typename?: 'STPortfolioSnapshot' }
      & StPortfolioSnapshotFragmentFragment
    )>>, transactionSnapshots: Array<Maybe<(
      { __typename?: 'STTransactionSnapshot' }
      & StTransactionSnapshotFragmentFragment
    )>>, bestAchievedRanks: Array<Maybe<(
      { __typename?: 'STRank' }
      & StRankFragmentFragment
    )>>, groupLogs: Array<Maybe<(
      { __typename?: 'STLog' }
      & StLogsFragmentFragment
    )>> }
  ), lastTransactions: Array<Maybe<(
    { __typename?: 'STTransaction' }
    & StTransactionFragmentFragment
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
  )>>> }
);

export type QueryStGroupAllDataByGroupIdQueryVariables = Exact<{
  groupId: Scalars['String'];
}>;


export type QueryStGroupAllDataByGroupIdQuery = (
  { __typename?: 'Query' }
  & { querySTGroupAllDataByGroupId?: Maybe<(
    { __typename?: 'STGroupAllData' }
    & StGroupAllDataFragmentFragment
  )> }
);

export type QueryStGroupPartialDataByGroupNameQueryVariables = Exact<{
  groupName: Scalars['String'];
}>;


export type QueryStGroupPartialDataByGroupNameQuery = (
  { __typename?: 'Query' }
  & { querySTGroupPartialDataByGroupName?: Maybe<(
    { __typename?: 'STSearchGroups' }
    & { groups: Array<Maybe<(
      { __typename?: 'STGroupAllData' }
      & StGroupIdentificationDataFragment
    )>> }
  )> }
);

export type CreateGroupMutationVariables = Exact<{
  groupInput: StGroupAllDataInput;
}>;


export type CreateGroupMutation = (
  { __typename?: 'Mutation' }
  & { createGroup?: Maybe<(
    { __typename?: 'STGroupAllData' }
    & StGroupIdentificationDataFragment
  )> }
);

export type EditGroupMutationVariables = Exact<{
  groupInput: StGroupAllDataInput;
}>;


export type EditGroupMutation = (
  { __typename?: 'Mutation' }
  & { editGroup?: Maybe<(
    { __typename?: 'STGroupAllData' }
    & StGroupIdentificationDataFragment
  )> }
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
  & { toggleInvitationRequestToGroup?: Maybe<(
    { __typename?: 'STGroupAllData' }
    & StGroupIdentificationDataFragment
  )> }
);

export type AnswerReceivedGroupInvitationMutationVariables = Exact<{
  uid: Scalars['String'];
  groupId: Scalars['String'];
  accept: Scalars['Boolean'];
}>;


export type AnswerReceivedGroupInvitationMutation = (
  { __typename?: 'Mutation' }
  & { answerReceivedGroupInvitation?: Maybe<(
    { __typename?: 'STGroupAllData' }
    & StGroupIdentificationDataFragment
  )> }
);

export type LeaveGroupMutationVariables = Exact<{
  uid: Scalars['String'];
  groupId: Scalars['String'];
}>;


export type LeaveGroupMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'leaveGroup'>
);

export type StMarketChartDataResultCombinedFragmentFragment = (
  { __typename?: 'STMarketChartDataResultCombined' }
  & Pick<StMarketChartDataResultCombined, 'currentDate' | 'currentValue' | 'data' | 'documentKey' | 'name' | 'parentName' | 'lastUpdate'>
);

export type StMarketTopTableCryptoDataFragmentFragment = (
  { __typename?: 'STMarketTopTableCryptoData' }
  & Pick<StMarketTopTableCryptoData, 'circulatingSupply' | 'coinImageUrl' | 'currency' | 'fiftyTwoWeekHigh' | 'fiftyTwoWeekLow' | 'marketCap' | 'quoteType' | 'regularMarketChange' | 'regularMarketChangePercent' | 'regularMarketClosed' | 'regularMarketOpen' | 'regularMarketPrice' | 'regularMarketVolume' | 'shortName' | 'symbol' | 'volume24Hr' | 'volumeAllCurrencies'>
);

export type QueryStMarketHistoryOverviewQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryStMarketHistoryOverviewQuery = (
  { __typename?: 'Query' }
  & { querySTMarketHistoryOverview?: Maybe<(
    { __typename?: 'STMarketOverviewPartialData' }
    & Pick<StMarketOverviewPartialData, 'lastUpdate'>
    & { sp500?: Maybe<Array<Maybe<(
      { __typename?: 'STMarketChartDataResultCombined' }
      & StMarketChartDataResultCombinedFragmentFragment
    )>>>, bonds?: Maybe<Array<Maybe<(
      { __typename?: 'STMarketChartDataResultCombined' }
      & StMarketChartDataResultCombinedFragmentFragment
    )>>>, inflation_rate?: Maybe<Array<Maybe<(
      { __typename?: 'STMarketChartDataResultCombined' }
      & StMarketChartDataResultCombinedFragmentFragment
    )>>>, misery_index?: Maybe<Array<Maybe<(
      { __typename?: 'STMarketChartDataResultCombined' }
      & StMarketChartDataResultCombinedFragmentFragment
    )>>>, treasury_yield?: Maybe<Array<Maybe<(
      { __typename?: 'STMarketChartDataResultCombined' }
      & StMarketChartDataResultCombinedFragmentFragment
    )>>>, investor_sentiment?: Maybe<Array<Maybe<(
      { __typename?: 'STMarketChartDataResultCombined' }
      & StMarketChartDataResultCombinedFragmentFragment
    )>>>, bitcoin?: Maybe<Array<Maybe<(
      { __typename?: 'STMarketChartDataResultCombined' }
      & StMarketChartDataResultCombinedFragmentFragment
    )>>> }
  )> }
);

export type QuerySymbolHistoricalPricesQueryVariables = Exact<{
  symbol: Scalars['String'];
  period: Scalars['String'];
}>;


export type QuerySymbolHistoricalPricesQuery = (
  { __typename?: 'Query' }
  & { querySymbolHistoricalPrices?: Maybe<(
    { __typename?: 'SymbolHistoricalPrices' }
    & Pick<SymbolHistoricalPrices, 'livePrice' | 'symbol' | 'period' | 'price' | 'volume'>
  )> }
);

export type QueryMarketDailyOverviewQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryMarketDailyOverviewQuery = (
  { __typename?: 'Query' }
  & { queryMarketDailyOverview?: Maybe<(
    { __typename?: 'STMarketDailyOverview' }
    & Pick<StMarketDailyOverview, 'id' | 'lastUpdate'>
    & { dailyGainers?: Maybe<Array<Maybe<(
      { __typename?: 'STFMCompanyQuote' }
      & StfmCompanyQuoteFragmentFragment
    )>>>, dailyLosers?: Maybe<Array<Maybe<(
      { __typename?: 'STFMCompanyQuote' }
      & StfmCompanyQuoteFragmentFragment
    )>>>, mostActive?: Maybe<Array<Maybe<(
      { __typename?: 'STFMCompanyQuote' }
      & StfmCompanyQuoteFragmentFragment
    )>>>, stockSuggestions?: Maybe<Array<Maybe<(
      { __typename?: 'STStockSuggestion' }
      & Pick<StStockSuggestion, 'historicalData'>
      & { summary?: Maybe<(
        { __typename?: 'Summary' }
        & StockSummaryFragmentFragment
      )> }
    )>>>, topCrypto?: Maybe<Array<Maybe<(
      { __typename?: 'STMarketTopTableCryptoData' }
      & StMarketTopTableCryptoDataFragmentFragment
    )>>>, news?: Maybe<Array<Maybe<(
      { __typename?: 'STFMStockNew' }
      & StfmStockNewFragmentFragment
    )>>>, calendar?: Maybe<(
      { __typename?: 'STMarketCalendar' }
      & { calendarEconomic?: Maybe<Array<Maybe<(
        { __typename?: 'STFMCalendarEconomic' }
        & StfmCalendarEconomicFragmentFragment
      )>>>, calendarDividend?: Maybe<Array<Maybe<(
        { __typename?: 'STFMStockDividend' }
        & StfmStockDividendFragmentFragment
      )>>>, calendarSplit?: Maybe<Array<Maybe<(
        { __typename?: 'STFMSplitHistory' }
        & StfmSplitHistoryFragmentFragment
      )>>>, calendarIpo?: Maybe<Array<Maybe<(
        { __typename?: 'STFMCalendarIpo' }
        & StfmCalendarIpoFragmentFragment
      )>>>, calendarEarnings?: Maybe<Array<Maybe<(
        { __typename?: 'STFMCalendarEarnings' }
        & StfmCalendarEarningsFragmentFragment
      )>>> }
    )>, mutulaFunds?: Maybe<Array<Maybe<(
      { __typename?: 'STFMCompanyQuote' }
      & StfmCompanyQuoteFragmentFragment
    )>>>, etfs?: Maybe<Array<Maybe<(
      { __typename?: 'STFMCompanyQuote' }
      & StfmCompanyQuoteFragmentFragment
    )>>>, commodities?: Maybe<Array<Maybe<(
      { __typename?: 'STFMCompanyQuote' }
      & StfmCompanyQuoteFragmentFragment
    )>>>, exchange?: Maybe<(
      { __typename?: 'STMarketExchange' }
      & Pick<StMarketExchange, 'id'>
      & { exchangeIndustryPE?: Maybe<Array<Maybe<(
        { __typename?: 'STFMExchangeIndustryPE' }
        & StfmExchangeIndustryPeFragmentFragment
      )>>>, exchangeSectorPE?: Maybe<Array<Maybe<(
        { __typename?: 'STFMExchangeSectorPE' }
        & StfmExchangeSectorPeFragmentFragment
      )>>> }
    )>, sectorPerformance?: Maybe<Array<Maybe<(
      { __typename?: 'STFMSectorPerformance' }
      & StfmSectorPerformanceFragmentFragment
    )>>> }
  )> }
);

export type QueryEtfDocumentQueryVariables = Exact<{
  etfName: Scalars['String'];
}>;


export type QueryEtfDocumentQuery = (
  { __typename?: 'Query' }
  & { queryEtfDocument?: Maybe<(
    { __typename?: 'STMarketEtfDocument' }
    & Pick<StMarketEtfDocument, 'id' | 'lastUpdate'>
    & { etfHolders?: Maybe<Array<Maybe<(
      { __typename?: 'STFMEtfHolder' }
      & StfmEtfHolderFragmentFragment
    )>>>, etfSectorWeight?: Maybe<Array<Maybe<(
      { __typename?: 'STFMEtfSectorWeight' }
      & StfmEtfSectorWeightFragmentFragment
    )>>>, etfCountryWeight?: Maybe<Array<Maybe<(
      { __typename?: 'STFMEtfCountryWeight' }
      & StfmEtfCountryWeightFragmentFragment
    )>>> }
  )> }
);

export type QueryStMarketAllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryStMarketAllCategoriesQuery = (
  { __typename?: 'Query' }
  & { queryStMarketAllCategories?: Maybe<(
    { __typename?: 'STMarketDatasetKeyCategories' }
    & { categories: Array<Maybe<(
      { __typename?: 'STMarketDatasetKeyCategory' }
      & Pick<StMarketDatasetKeyCategory, 'name'>
      & { data: Array<Maybe<(
        { __typename?: 'STMarketDatasetKey' }
        & Pick<StMarketDatasetKey, 'documentKey' | 'name'>
      )>> }
    )>> }
  )> }
);

export type QueryStMarketDataQueryVariables = Exact<{
  key: Scalars['String'];
}>;


export type QueryStMarketDataQuery = (
  { __typename?: 'Query' }
  & { queryStMarketData?: Maybe<(
    { __typename?: 'STMarketChartDataResultCombined' }
    & StMarketChartDataResultCombinedFragmentFragment
  )> }
);

export type StPortfolioFragmentFragment = (
  { __typename?: 'STPortfolio' }
  & Pick<StPortfolio, 'portfolioInvested' | 'portfolioCash'>
);

export type StPortfolioSnapshotFragmentFragment = (
  { __typename?: 'STPortfolioSnapshot' }
  & Pick<StPortfolioSnapshot, 'portfolioInvested' | 'portfolioCash' | 'date'>
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
  & Pick<Summary, 'avgVolume' | 'ceo' | 'companyName' | 'currency' | 'dividendDate' | 'ePSTTM' | 'earningsDate' | 'exDividendDate' | 'exchangeName' | 'fiveTwoWeekRange' | 'forwardDividendRate' | 'forwardDividendYield' | 'forwardEPS' | 'forwardPE' | 'fullTimeEmployees' | 'id' | 'industry' | 'ipoDate' | 'lastSplitDate' | 'lastSplitFactor' | 'logo_url' | 'longBusinessSummary' | 'marketCap' | 'marketPrice' | 'oneyTargetEst' | 'pERatioTTM' | 'previousClose' | 'recommendationKey' | 'recommendationMean' | 'sandPFiveTwoWeekChange' | 'sector' | 'sharesOutstanding' | 'shortRatio' | 'symbol' | 'targetEstOneyPercent' | 'volume' | 'website' | 'weekRangeFiveTwoMax' | 'weekRangeFiveTwoMin' | 'yearToDatePrice' | 'yearToDatePriceReturn'>
  & { residance?: Maybe<(
    { __typename?: 'SummaryResidance' }
    & SummaryResidanceFragmentFragment
  )> }
);

export type FinancialReportStatementDataFragmentFragment = (
  { __typename?: 'FinancialReportStatementData' }
  & Pick<FinancialReportStatementData, 'concept' | 'label' | 'unit' | 'value'>
);

export type FinancialReportFragmentFragment = (
  { __typename?: 'FinancialReport' }
  & Pick<FinancialReport, 'acceptedDate' | 'accessNumber' | 'cik' | 'endDate' | 'filedDate' | 'form' | 'quarter' | 'startDate' | 'symbol' | 'year'>
  & { report?: Maybe<(
    { __typename?: 'FinancialReportStatement' }
    & { bs?: Maybe<Array<Maybe<(
      { __typename?: 'FinancialReportStatementData' }
      & FinancialReportStatementDataFragmentFragment
    )>>>, cf?: Maybe<Array<Maybe<(
      { __typename?: 'FinancialReportStatementData' }
      & FinancialReportStatementDataFragmentFragment
    )>>>, ic?: Maybe<Array<Maybe<(
      { __typename?: 'FinancialReportStatementData' }
      & FinancialReportStatementDataFragmentFragment
    )>>> }
  )> }
);

export type RecommendationFragmentFragment = (
  { __typename?: 'Recommendations' }
  & Pick<Recommendations, 'buy' | 'hold' | 'period' | 'sell' | 'strongBuy' | 'strongSell' | 'symbol'>
);

export type NewsArticleFragmentFragment = (
  { __typename?: 'NewsArticle' }
  & Pick<NewsArticle, 'datetime' | 'headline' | 'image' | 'sourceName' | 'summary' | 'url'>
);

export type CalculationFragmentFragment = (
  { __typename?: 'Calculation' }
  & Pick<Calculation, 'avg' | 'max' | 'min'>
);

export type EsgScoreFragmentFragment = (
  { __typename?: 'EsgScores' }
  & Pick<EsgScores, 'totalEsg' | 'environmentScore' | 'governanceScore' | 'highestControversy' | 'esgPerformance' | 'socialScore' | 'peerCount' | 'percentile' | 'peerGroup' | 'relatedControversy'>
  & { peerEnvironmentPerformance?: Maybe<(
    { __typename?: 'Calculation' }
    & CalculationFragmentFragment
  )>, peerEsgScorePerformance?: Maybe<(
    { __typename?: 'Calculation' }
    & CalculationFragmentFragment
  )>, peerGovernancePerformance?: Maybe<(
    { __typename?: 'Calculation' }
    & CalculationFragmentFragment
  )>, peerHighestControversyPerformance?: Maybe<(
    { __typename?: 'Calculation' }
    & CalculationFragmentFragment
  )>, peerSocialPerformance?: Maybe<(
    { __typename?: 'Calculation' }
    & CalculationFragmentFragment
  )> }
);

export type DefaultKeyStatisticsFragmentFragment = (
  { __typename?: 'DefaultKeyStatistics' }
  & Pick<DefaultKeyStatistics, 'bookValue' | 'dateShortInterest' | 'earningsQuarterlyGrowth' | 'enterpriseToEbitda' | 'enterpriseToRevenue' | 'enterpriseValue' | 'fiveYearAverageReturn' | 'floatShares' | 'forwardEps' | 'forwardPE' | 'heldPercentInsiders' | 'heldPercentInstitutions' | 'lastFiscalYearEnd' | 'lastSplitDate' | 'lastSplitFactor' | 'mostRecentQuarter' | 'netIncomeToCommon' | 'nextFiscalYearEnd' | 'pegRatio' | 'priceHint' | 'priceToBook' | 'profitMargins' | 'sharesOutstanding' | 'sharesPercentSharesOut' | 'sharesShort' | 'sharesShortPreviousMonthDate' | 'sharesShortPriorMonth' | 'shortPercentOfFloat' | 'shortRatio' | 'trailingEps'>
);

export type FinancialDataFragmentFragment = (
  { __typename?: 'FinancialData' }
  & Pick<FinancialData, 'currentPrice' | 'currentRatio' | 'debtToEquity' | 'earningsGrowth' | 'ebitda' | 'ebitdaMargins' | 'financialCurrency' | 'freeCashflow' | 'grossMargins' | 'grossProfits' | 'numberOfAnalystOpinions' | 'operatingCashflow' | 'operatingMargins' | 'profitMargins' | 'quickRatio' | 'recommendationKey' | 'recommendationMean' | 'returnOnAssets' | 'returnOnEquity' | 'revenueGrowth' | 'revenuePerShare' | 'targetHighPrice' | 'targetLowPrice' | 'targetMeanPrice' | 'targetMedianPrice' | 'totalCash' | 'totalCashPerShare' | 'totalDebt' | 'totalRevenue'>
);

export type MetricFragmentFragment = (
  { __typename?: 'Metric' }
  & Pick<Metric, 'fiveDayPriceReturnDaily' | 'fiveTwoWeekHigh' | 'fiveTwoWeekHighDate' | 'fiveTwoWeekLow' | 'fiveTwoWeekLowDate' | 'fiveTwoWeekPriceReturnDaily' | 'oneDayAverageTradingVolume' | 'oneThreeWeekPriceReturnDaily' | 'threeMonthAverageTradingVolume' | 'twoSixWeekPriceReturnDaily' | 'assetTurnoverAnnual' | 'assetTurnoverTTM' | 'beta' | 'bookValuePerShareAnnual' | 'bookValuePerShareQuarterly' | 'bookValueShareGrowthFiveY' | 'capitalSpendingGrowthFiveY' | 'cashFlowPerShareAnnual' | 'cashFlowPerShareTTM' | 'cashPerSharePerShareAnnual' | 'cashPerSharePerShareQuarterly' | 'currentEvfreeCashFlowAnnual' | 'currentEvfreeCashFlowTTM' | 'currentRatioAnnual' | 'currentRatioQuarterly' | 'ebitdPerShareTTM' | 'ebitdaCagrFiveY' | 'ebitdaInterimCagrFiveY' | 'epsBasicExclExtraItemsAnnual' | 'epsBasicExclExtraItemsTTM' | 'epsExclExtraItemsAnnual' | 'epsExclExtraItemsTTM' | 'epsGrowthFiveY' | 'epsGrowthQuarterlyYoy' | 'epsGrowthTTMYoy' | 'epsGrowthThreeY' | 'epsInclExtraItemsAnnual' | 'epsInclExtraItemsTTM' | 'epsNormalizedAnnual' | 'focfCagrFiveY' | 'freeCashFlowAnnual' | 'freeCashFlowPerShareTTM' | 'freeCashFlowTTM' | 'freeOperatingCashFlowrevenueFiveY' | 'freeOperatingCashFlowrevenueTTM' | 'grossMarginAnnual' | 'grossMarginFiveY' | 'grossMarginTTM' | 'inventoryTurnoverAnnual' | 'inventoryTurnoverTTM' | 'longTermDebtequityAnnual' | 'longTermDebtequityQuarterly' | 'marketCapitalization' | 'monthToDatePriceReturnDaily' | 'netDebtAnnual' | 'netDebtInterim' | 'netIncomeEmployeeAnnual' | 'netIncomeEmployeeTTM' | 'netInterestCoverageAnnual' | 'netInterestCoverageTTM' | 'netMarginGrowthFiveY' | 'netProfitMarginAnnual' | 'netProfitMarginFiveY' | 'netProfitMarginTTM' | 'operatingMarginAnnual' | 'operatingMarginFiveY' | 'operatingMarginTTM' | 'payoutRatioAnnual' | 'payoutRatioTTM' | 'pbAnnual' | 'pbQuarterly' | 'pcfShareTTM' | 'peBasicExclExtraTTM' | 'peExclExtraAnnual' | 'peExclExtraHighTTM' | 'peExclExtraTTM' | 'peExclLowTTM' | 'peInclExtraTTM' | 'peNormalizedAnnual' | 'pfcfShareAnnual' | 'pfcfShareTTM' | 'pretaxMarginAnnual' | 'pretaxMarginFiveY' | 'pretaxMarginTTM' | 'priceRelativeToSPFiveFiveTwoWeek' | 'priceRelativeToSPFiveFourWeek' | 'priceRelativeToSPFiveOneThreeWeek' | 'priceRelativeToSPFiveTwoSixWeek' | 'priceRelativeToSPFiveYtd' | 'psAnnual' | 'psTTM' | 'ptbvAnnual' | 'ptbvQuarterly' | 'quickRatioAnnual' | 'quickRatioQuarterly' | 'receivablesTurnoverAnnual' | 'receivablesTurnoverTTM' | 'revenueEmployeeAnnual' | 'revenueEmployeeTTM' | 'revenueGrowthFiveY' | 'revenueGrowthQuarterlyYoy' | 'revenueGrowthTTMYoy' | 'revenueGrowthThreeY' | 'revenuePerShareAnnual' | 'revenuePerShareTTM' | 'revenueShareGrowthFiveY' | 'roaRfy' | 'roaaFiveY' | 'roaeFiveY' | 'roaeTTM' | 'roeRfy' | 'roeTTM' | 'roiAnnual' | 'roiFiveY' | 'roiTTM' | 'tangibleBookValuePerShareAnnual' | 'tangibleBookValuePerShareQuarterly' | 'tbvCagrFiveY' | 'totalDebtCagrFiveY' | 'totalDebttotalEquityAnnual' | 'totalDebttotalEquityQuarterly' | 'yearToDatePriceReturnDaily'>
);

export type DividensFragmentFragment = (
  { __typename?: 'Dividens' }
  & Pick<Dividens, 'currentDividendYieldTTM' | 'dividendGrowthRateFiveY' | 'dividendPerShareAnnual' | 'dividendPerShareFiveY' | 'dividendYieldFiveY' | 'dividendYieldIndicatedAnnual' | 'dividendsPerShareTTM' | 'exDividendDate' | 'trailingAnnualDividendRate' | 'trailingAnnualDividendYield' | 'forwardDividendYield'>
);

export type EarningsChartFragmentFragment = (
  { __typename?: 'EarningsChart' }
  & Pick<EarningsChart, 'currentQuarterEstimate' | 'currentQuarterEstimateDate' | 'currentQuarterEstimateYear' | 'earningsDate'>
  & { quarterly?: Maybe<Array<Maybe<(
    { __typename?: 'EarningsChartData' }
    & Pick<EarningsChartData, 'actual' | 'date' | 'estimate'>
  )>>> }
);

export type FinancialChartDataFragmentFragment = (
  { __typename?: 'FinancialsChartData' }
  & Pick<FinancialsChartData, 'categories'>
  & { series?: Maybe<Array<Maybe<(
    { __typename?: 'Series' }
    & Pick<Series, 'data' | 'name'>
  )>>> }
);

export type EarningsFragmentFragment = (
  { __typename?: 'Earnings' }
  & Pick<Earnings, 'financialCurrency'>
  & { earningsChart?: Maybe<(
    { __typename?: 'EarningsChart' }
    & EarningsChartFragmentFragment
  )>, financialsChart?: Maybe<(
    { __typename?: 'FinancialsChart' }
    & { quarterly?: Maybe<(
      { __typename?: 'FinancialsChartData' }
      & FinancialChartDataFragmentFragment
    )>, yearly?: Maybe<(
      { __typename?: 'FinancialsChartData' }
      & FinancialChartDataFragmentFragment
    )> }
  )> }
);

export type HistoricalMetricsDataFragmentFragment = (
  { __typename?: 'HistoricalMetricsData' }
  & Pick<HistoricalMetricsData, 'name' | 'dates' | 'data'>
);

export type CapmFragmentFragment = (
  { __typename?: 'CAPM' }
  & Pick<Capm, 'Beta' | 'Rf' | 'Rm' | 'result'>
);

export type WaccFragmentFragment = (
  { __typename?: 'WACC' }
  & Pick<Wacc, 'Rd' | 'Re' | 'Wd' | 'We' | 'result' | 'taxRate'>
  & { CAPM?: Maybe<(
    { __typename?: 'CAPM' }
    & CapmFragmentFragment
  )> }
);

export type QueryStockDetailsQueryVariables = Exact<{
  symbol: Scalars['String'];
  reload?: Maybe<Scalars['Boolean']>;
}>;


export type QueryStockDetailsQuery = (
  { __typename?: 'Query' }
  & { queryStockDetails?: Maybe<(
    { __typename?: 'StockDetails' }
    & Pick<StockDetails, 'id'>
    & { recommendation?: Maybe<Array<Maybe<(
      { __typename?: 'Recommendations' }
      & RecommendationFragmentFragment
    )>>>, companyData?: Maybe<(
      { __typename?: 'CompanyData' }
      & { defaultKeyStatistics?: Maybe<(
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
      )>, upgradeDowngradeHistory?: Maybe<Array<Maybe<(
        { __typename?: 'UpgradeDowngradeHistory' }
        & Pick<UpgradeDowngradeHistory, 'action' | 'epochGradeDate' | 'firm' | 'fromGrade' | 'toGrade'>
      )>>>, esgScores?: Maybe<(
        { __typename?: 'EsgScores' }
        & EsgScoreFragmentFragment
      )> }
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
      & { cashRatio?: Maybe<(
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
      )> }
    )>, calculations?: Maybe<(
      { __typename?: 'STStockDetailsCalculations' }
      & { CAPM?: Maybe<(
        { __typename?: 'CAPM' }
        & CapmFragmentFragment
      )>, WACC?: Maybe<(
        { __typename?: 'WACC' }
        & WaccFragmentFragment
      )> }
    )>, calculatedPredictions?: Maybe<(
      { __typename?: 'STStockDetailsCalculatedPredictions' }
      & { DCF_V1?: Maybe<(
        { __typename?: 'STDiscountedCashFlowFormula' }
        & Pick<StDiscountedCashFlowFormula, 'estimatedCompanyTodayValue' | 'estimatedDiscountedFactors' | 'estimatedDiscountedTerminalValue' | 'estimatedFreeCashFlowRate' | 'estimatedFreeCashFlowRates' | 'estimatedFreeCashFlows' | 'estimatedIntrinsicValue' | 'estimatedNetIncomeMargin' | 'estimatedNetIncomes' | 'estimatedPresentValueOfFutureCashFlows' | 'estimatedRevenueGrowthRate' | 'estimatedRevenues' | 'estimatedTerminalValue' | 'years'>
        & { historical: (
          { __typename?: 'STDiscountedCashFlowFormulaHistorical' }
          & Pick<StDiscountedCashFlowFormulaHistorical, 'freeCashFlows' | 'sharesOutstanding' | 'netIncomeMargins' | 'netIncome' | 'revenue' | 'revenueGrowthRates' | 'historicalYears'>
        ), variable: (
          { __typename?: 'STDiscountedCashFlowFormulaVariable' }
          & Pick<StDiscountedCashFlowFormulaVariable, 'perpetualGrowthRate' | 'requiredRateOfReturn'>
        ) }
      )>, DDF_V1?: Maybe<(
        { __typename?: 'STDividendDiscountedFormula' }
        & Pick<StDividendDiscountedFormula, 'dividendGrowthRate' | 'dividendsPerShareTTM' | 'minimumRateReturn' | 'estimatedIntrinsicValue'>
      )>, FCF_V1?: Maybe<(
        { __typename?: 'STFreeCashFlowFormula' }
        & Pick<StFreeCashFlowFormula, 'avgFcf' | 'estimatedIntrinsicMarketCap' | 'estimatedIntrinsicValue' | 'historicalYears' | 'minimumRateReturn' | 'operatingActivities' | 'capitalExpenditures' | 'freeCashFlows' | 'sharesOutstanding'>
      )>, INTRINSIC_V1?: Maybe<(
        { __typename?: 'STEarningsValuationFormula' }
        & Pick<StEarningsValuationFormula, 'dates' | 'eps' | 'estimatedDiscountedPV' | 'estimatedEarnings' | 'estimatedIntrinsicValue'>
        & { variable: (
          { __typename?: 'STEarningsValuationFormulaVariable' }
          & Pick<StEarningsValuationFormulaVariable, 'growthRateFrom5yTo10y' | 'growthRateNext5y' | 'minimumRateReturn' | 'terminalMultiple'>
        ) }
      )> }
    )>, allFinancialReportsYearly?: Maybe<Array<Maybe<(
      { __typename?: 'FinancialReport' }
      & FinancialReportFragmentFragment
    )>>>, allFinancialReportsQuarterly?: Maybe<Array<Maybe<(
      { __typename?: 'FinancialReport' }
      & FinancialReportFragmentFragment
    )>>>, institutionalHolders?: Maybe<Array<Maybe<(
      { __typename?: 'STFMHolder' }
      & StfmHolderFragmentFragment
    )>>>, mutualFundHolders?: Maybe<Array<Maybe<(
      { __typename?: 'STFMHolderWithWeight' }
      & StfmHolderWithWeightFragmentFragment
    )>>>, companyOutlook?: Maybe<(
      { __typename?: 'STFMCompanyOutlook' }
      & { financialsAnnual?: Maybe<(
        { __typename?: 'STFMFinancials' }
        & { balance?: Maybe<Array<Maybe<(
          { __typename?: 'STFMBalanceSheet' }
          & StfmBalanceSheetFragmentFragment
        )>>>, cash?: Maybe<Array<Maybe<(
          { __typename?: 'STFMCashFlow' }
          & StfmCashFlowFragmentFragment
        )>>>, income?: Maybe<Array<Maybe<(
          { __typename?: 'STFMIncomeStatement' }
          & StfmIncomeStatementFragmentFragment
        )>>> }
      )>, financialsQuarter?: Maybe<(
        { __typename?: 'STFMFinancials' }
        & { balance?: Maybe<Array<Maybe<(
          { __typename?: 'STFMBalanceSheet' }
          & StfmBalanceSheetFragmentFragment
        )>>>, cash?: Maybe<Array<Maybe<(
          { __typename?: 'STFMCashFlow' }
          & StfmCashFlowFragmentFragment
        )>>>, income?: Maybe<Array<Maybe<(
          { __typename?: 'STFMIncomeStatement' }
          & StfmIncomeStatementFragmentFragment
        )>>> }
      )>, insideTrades?: Maybe<Array<Maybe<(
        { __typename?: 'STFMInsideTrade' }
        & StfmInsideTradeFragmentFragment
      )>>>, keyExecutives?: Maybe<Array<Maybe<(
        { __typename?: 'STFMKeyExecutive' }
        & StfmKeyExecutiveFragmentFragment
      )>>>, rating?: Maybe<(
        { __typename?: 'STFMRating' }
        & StfmRatingFragmentFragment
      )>, ratios?: Maybe<(
        { __typename?: 'STFMRatios' }
        & StfmRatiosFragmentFragment
      )>, splitHistory?: Maybe<Array<Maybe<(
        { __typename?: 'STFMSplitHistory' }
        & StfmSplitHistoryFragmentFragment
      )>>>, stockDividend?: Maybe<Array<Maybe<(
        { __typename?: 'STFMStockDividend' }
        & StfmStockDividendFragmentFragment
      )>>>, stockNews?: Maybe<Array<Maybe<(
        { __typename?: 'STFMStockNew' }
        & StfmStockNewFragmentFragment
      )>>> }
    )>, sectorPeers?: Maybe<Array<Maybe<(
      { __typename?: 'STFMCompanyQuote' }
      & StfmCompanyQuoteFragmentFragment
    )>>> }
  )> }
);

export type QueryStockFinancialReportsQueryVariables = Exact<{
  symbol: Scalars['String'];
}>;


export type QueryStockFinancialReportsQuery = (
  { __typename?: 'Query' }
  & { queryStockFinancialReports?: Maybe<(
    { __typename?: 'StockDetailsFinancialReports' }
    & Pick<StockDetailsFinancialReports, 'id'>
    & { allFinancialReportsQuarterly?: Maybe<Array<Maybe<(
      { __typename?: 'FinancialReport' }
      & FinancialReportFragmentFragment
    )>>>, allFinancialReportsYearly?: Maybe<Array<Maybe<(
      { __typename?: 'FinancialReport' }
      & FinancialReportFragmentFragment
    )>>> }
  )> }
);

export type QueryStockSummaryQueryVariables = Exact<{
  symbol: Scalars['String'];
}>;


export type QueryStockSummaryQuery = (
  { __typename?: 'Query' }
  & { queryStockSummary?: Maybe<(
    { __typename?: 'Summary' }
    & StockSummaryFragmentFragment
  )> }
);

export type QueryStockQuotesByPrefixQueryVariables = Exact<{
  symbolPrefix: Scalars['String'];
}>;


export type QueryStockQuotesByPrefixQuery = (
  { __typename?: 'Query' }
  & { queryStockQuotesByPrefix: Array<Maybe<(
    { __typename?: 'STFMCompanyQuote' }
    & StfmCompanyQuoteFragmentFragment
  )>> }
);

export type SetForceReloadStockDetailsMutationVariables = Exact<{ [key: string]: never; }>;


export type SetForceReloadStockDetailsMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'setForceReloadStockDetails'>
);

export type QueryStTradingStrategiesQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryStTradingStrategiesQuery = (
  { __typename?: 'Query' }
  & { querySTTradingStrategies?: Maybe<(
    { __typename?: 'STTradingStrategySearch' }
    & { data: Array<Maybe<(
      { __typename?: 'STTradingStrategySearchData' }
      & Pick<StTradingStrategySearchData, 'description' | 'name' | 'symbol' | 'url'>
    )>> }
  )> }
);

export type QueryStTradingStrategyDataQueryVariables = Exact<{
  symbol: Scalars['String'];
  strategy: Scalars['String'];
}>;


export type QueryStTradingStrategyDataQuery = (
  { __typename?: 'Query' }
  & { querySTTradingStrategyData?: Maybe<(
    { __typename?: 'STTradingStrategyData' }
    & Pick<StTradingStrategyData, 'interval' | 'period' | 'timestamp'>
    & { series: Array<Maybe<(
      { __typename?: 'STSeries' }
      & Pick<StSeries, 'data' | 'name'>
    )>> }
  )> }
);

export type StHoldingFragmentFragment = (
  { __typename?: 'STHolding' }
  & Pick<StHolding, 'symbol' | 'breakEvenPrice' | 'units'>
  & { summary?: Maybe<(
    { __typename?: 'Summary' }
    & StockSummaryFragmentFragment
  )> }
);

export type StTransactionFragmentFragment = (
  { __typename?: 'STTransaction' }
  & Pick<StTransaction, 'transactionId' | 'symbol' | 'price' | 'return' | 'returnChange' | 'units' | 'date' | 'operation' | 'symbol_logo_url'>
);

export type StTransactionSnapshotFragmentFragment = (
  { __typename?: 'STTransactionSnapshot' }
  & Pick<StTransactionSnapshot, 'transactionsBuy' | 'transactionsSell' | 'date'>
);

export type PerformTransactionMutationVariables = Exact<{
  transactionInput: StTransactionInput;
}>;


export type PerformTransactionMutation = (
  { __typename?: 'Mutation' }
  & { performTransaction?: Maybe<(
    { __typename?: 'PerformedTransaction' }
    & { holding?: Maybe<(
      { __typename?: 'STHolding' }
      & StHoldingFragmentFragment
    )>, transaction: (
      { __typename?: 'STTransaction' }
      & StTransactionFragmentFragment
    ) }
  )> }
);

export type StUserIndentificationDataFragment = (
  { __typename?: 'STUserPublicData' }
  & Pick<StUserPublicData, 'id' | 'nickName' | 'locale' | 'photoURL' | 'accountCreatedDate' | 'lastSignInDate' | 'numberOfExecutedTransactions' | 'numberOfExecutedBuyTransactions' | 'numberOfExecutedSellTransactions' | 'lastPortfolioIncreaseNumber' | 'lastPortfolioIncreasePrct'>
  & { lastPortfolioSnapshot?: Maybe<(
    { __typename?: 'STPortfolioSnapshot' }
    & Pick<StPortfolioSnapshot, 'portfolioInvested' | 'portfolioCash' | 'date'>
  )>, lastTransactionSnapshot?: Maybe<(
    { __typename?: 'STTransactionSnapshot' }
    & Pick<StTransactionSnapshot, 'transactionsBuy' | 'transactionsSell' | 'date'>
  )> }
);

export type AuthenticateUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type AuthenticateUserQuery = (
  { __typename?: 'Query' }
  & { authenticateUser?: Maybe<(
    { __typename?: 'STUserPublicData' }
    & Pick<StUserPublicData, 'id' | 'nickName' | 'locale' | 'photoURL' | 'accountCreatedDate' | 'lastSignInDate' | 'portfolioCash' | 'numberOfExecutedTransactions' | 'numberOfExecutedBuyTransactions' | 'numberOfExecutedSellTransactions' | 'lastPortfolioIncreaseNumber' | 'lastPortfolioIncreasePrct' | 'activity'>
    & { rank?: Maybe<(
      { __typename?: 'STRank' }
      & StRankFragmentFragment
    )>, transactionsSnippets: Array<Maybe<(
      { __typename?: 'STTransaction' }
      & StTransactionFragmentFragment
    )>>, holdings: Array<Maybe<(
      { __typename?: 'STHolding' }
      & StHoldingFragmentFragment
    )>>, groups: (
      { __typename?: 'STUserGroups' }
      & { groupInvitationSent?: Maybe<Array<Maybe<(
        { __typename?: 'STGroupAllData' }
        & StGroupIdentificationDataFragment
      )>>>, groupInvitationReceived?: Maybe<Array<Maybe<(
        { __typename?: 'STGroupAllData' }
        & StGroupIdentificationDataFragment
      )>>>, groupOwner?: Maybe<Array<Maybe<(
        { __typename?: 'STGroupAllData' }
        & StGroupIdentificationDataFragment
      )>>>, groupMember?: Maybe<Array<Maybe<(
        { __typename?: 'STGroupAllData' }
        & StGroupIdentificationDataFragment
      )>>> }
    ), lastPortfolioSnapshot?: Maybe<(
      { __typename?: 'STPortfolioSnapshot' }
      & StPortfolioSnapshotFragmentFragment
    )>, lastTransactionSnapshot?: Maybe<(
      { __typename?: 'STTransactionSnapshot' }
      & StTransactionSnapshotFragmentFragment
    )>, userHistoricalData: (
      { __typename?: 'STUserHistoricalData' }
      & { userLogs: Array<Maybe<(
        { __typename?: 'STLog' }
        & StLogsFragmentFragment
      )>>, resetedAccount: Array<Maybe<(
        { __typename?: 'STUserResetedAccount' }
        & Pick<StUserResetedAccount, 'date' | 'portfolioTotal'>
      )>>, bestAchievedRanks: Array<Maybe<(
        { __typename?: 'STRank' }
        & StRankFragmentFragment
      )>>, portfolioSnapshots: Array<Maybe<(
        { __typename?: 'STPortfolioSnapshot' }
        & StPortfolioSnapshotFragmentFragment
      )>>, transactionSnapshots: Array<Maybe<(
        { __typename?: 'STTransactionSnapshot' }
        & StTransactionSnapshotFragmentFragment
      )>> }
    ), userPrivateData: (
      { __typename?: 'STUserPrivateData' }
      & Pick<StUserPrivateData, 'tradingEnabledDate' | 'finnhubKey' | 'roles' | 'email' | 'displayName' | 'providerId' | 'status' | 'nicknameLastChange'>
    ), stockWatchlist: Array<Maybe<(
      { __typename?: 'STStockWatchlist' }
      & StStockWatchlistFragmentFragment
    )>> }
  )> }
);

export type QueryUserPublicDataByUsernameQueryVariables = Exact<{
  usernamePrefix: Scalars['String'];
}>;


export type QueryUserPublicDataByUsernameQuery = (
  { __typename?: 'Query' }
  & { queryUserPublicDataByUsername: Array<Maybe<(
    { __typename?: 'STUserPublicData' }
    & StUserIndentificationDataFragment
  )>> }
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
  & { resetUserAccount?: Maybe<(
    { __typename?: 'STUserResetedAccount' }
    & Pick<StUserResetedAccount, 'date' | 'portfolioTotal'>
  )> }
);

export type StStockWatchlistFragmentFragment = (
  { __typename?: 'STStockWatchlist' }
  & Pick<StStockWatchlist, 'id' | 'name' | 'date' | 'userId'>
  & { summaries?: Maybe<Array<Maybe<(
    { __typename?: 'Summary' }
    & StockSummaryFragmentFragment
  )>>> }
);

export type CreateStockWatchlistMutationVariables = Exact<{
  identifier: StStockWatchInputlistIdentifier;
}>;


export type CreateStockWatchlistMutation = (
  { __typename?: 'Mutation' }
  & { createStockWatchlist?: Maybe<(
    { __typename?: 'STStockWatchlist' }
    & StStockWatchlistFragmentFragment
  )> }
);

export type AddStockIntoWatchlistMutationVariables = Exact<{
  identifier: StStockWatchInputlistIdentifier;
}>;


export type AddStockIntoWatchlistMutation = (
  { __typename?: 'Mutation' }
  & { addStockIntoStockWatchlist?: Maybe<(
    { __typename?: 'Summary' }
    & StockSummaryFragmentFragment
  )> }
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

export const StfmHolderFragmentFragmentDoc = gql`
    fragment STFMHolderFragment on STFMHolder {
  change
  dateReported
  holder
  shares
}
    `;
export const StfmHolderWithWeightFragmentFragmentDoc = gql`
    fragment STFMHolderWithWeightFragment on STFMHolderWithWeight {
  change
  dateReported
  holder
  shares
  weightPercent
}
    `;
export const StfmBalanceSheetFragmentFragmentDoc = gql`
    fragment STFMBalanceSheetFragment on STFMBalanceSheet {
  acceptedDate
  accountPayables
  accumulatedOtherComprehensiveIncomeLoss
  cashAndCashEquivalents
  cashAndShortTermInvestments
  commonStock
  date
  deferredRevenue
  deferredRevenueNonCurrent
  deferredTaxLiabilitiesNonCurrent
  fillingDate
  finalLink
  goodwill
  goodwillAndIntangibleAssets
  intangibleAssets
  inventory
  link
  longTermDebt
  longTermInvestments
  netDebt
  netReceivables
  otherAssets
  otherCurrentAssets
  otherCurrentLiabilities
  otherLiabilities
  otherNonCurrentAssets
  otherNonCurrentLiabilities
  othertotalStockholdersEquity
  period
  propertyPlantEquipmentNet
  reportedCurrency
  retainedEarnings
  shortTermDebt
  shortTermInvestments
  symbol
  taxAssets
  taxPayables
  totalAssets
  totalCurrentAssets
  totalCurrentLiabilities
  totalDebt
  totalInvestments
  totalLiabilities
  totalLiabilitiesAndStockholdersEquity
  totalNonCurrentAssets
  totalNonCurrentLiabilities
  totalStockholdersEquity
}
    `;
export const StfmCashFlowFragmentFragmentDoc = gql`
    fragment STFMCashFlowFragment on STFMCashFlow {
  acceptedDate
  accountsPayables
  accountsReceivables
  acquisitionsNet
  capitalExpenditure
  cashAtBeginningOfPeriod
  cashAtEndOfPeriod
  changeInWorkingCapital
  commonStockIssued
  commonStockRepurchased
  date
  debtRepayment
  deferredIncomeTax
  depreciationAndAmortization
  dividendsPaid
  effectOfForexChangesOnCash
  fillingDate
  finalLink
  freeCashFlow
  inventory
  investmentsInPropertyPlantAndEquipment
  link
  netCashProvidedByOperatingActivities
  netCashUsedForInvestingActivites
  netCashUsedProvidedByFinancingActivities
  netChangeInCash
  netIncome
  operatingCashFlow
  otherFinancingActivites
  otherInvestingActivites
  otherNonCashItems
  otherWorkingCapital
  period
  purchasesOfInvestments
  reportedCurrency
  salesMaturitiesOfInvestments
  stockBasedCompensation
  symbol
}
    `;
export const StfmIncomeStatementFragmentFragmentDoc = gql`
    fragment STFMIncomeStatementFragment on STFMIncomeStatement {
  acceptedDate
  costAndExpenses
  costOfRevenue
  date
  depreciationAndAmortization
  ebitda
  ebitdaratio
  eps
  epsdiluted
  fillingDate
  finalLink
  generalAndAdministrativeExpenses
  grossProfit
  grossProfitRatio
  incomeBeforeTax
  incomeBeforeTaxRatio
  incomeTaxExpense
  interestExpense
  link
  netIncome
  netIncomeRatio
  operatingExpenses
  operatingIncome
  operatingIncomeRatio
  otherExpenses
  period
  reportedCurrency
  researchAndDevelopmentExpenses
  revenue
  sellingAndMarketingExpenses
  sellingGeneralAndAdministrativeExpenses
  symbol
  totalOtherIncomeExpensesNet
  weightedAverageShsOut
  weightedAverageShsOutDil
}
    `;
export const StfmInsideTradeFragmentFragmentDoc = gql`
    fragment STFMInsideTradeFragment on STFMInsideTrade {
  acquistionOrDisposition
  companyCik
  formType
  link
  price
  reportingCik
  reportingName
  securitiesOwned
  securitiesTransacted
  securityName
  symbol
  transactionDate
  transactionType
  typeOfOwner
}
    `;
export const StfmKeyExecutiveFragmentFragmentDoc = gql`
    fragment STFMKeyExecutiveFragment on STFMKeyExecutive {
  currencyPay
  gender
  name
  pay
  title
}
    `;
export const StfmStockNewFragmentFragmentDoc = gql`
    fragment STFMStockNewFragment on STFMStockNew {
  image
  publishedDate
  site
  symbol
  text
  title
  url
}
    `;
export const StfmStockDividendFragmentFragmentDoc = gql`
    fragment STFMStockDividendFragment on STFMStockDividend {
  adjDividend
  date
  declarationDate
  dividend
  label
  paymentDate
  recordDate
  symbol
}
    `;
export const StfmSplitHistoryFragmentFragmentDoc = gql`
    fragment STFMSplitHistoryFragment on STFMSplitHistory {
  date
  denominator
  label
  numerator
  symbol
}
    `;
export const StfmRatingFragmentFragmentDoc = gql`
    fragment STFMRatingFragment on STFMRating {
  date
  rating
  ratingDetailsDCFRecommendation
  ratingDetailsDCFScore
  ratingDetailsDERecommendation
  ratingDetailsDEScore
  ratingDetailsPBRecommendation
  ratingDetailsPBScore
  ratingDetailsPERecommendation
  ratingDetailsPEScore
  ratingDetailsROARecommendation
  ratingDetailsROAScore
  ratingDetailsROERecommendation
  ratingDetailsROEScore
  ratingRecommendation
  ratingScore
  symbol
}
    `;
export const StfmRatiosFragmentFragmentDoc = gql`
    fragment STFMRatiosFragment on STFMRatios {
  assetTurnoverTTM
  capitalExpenditureCoverageRatioTTM
  cashConversionCycleTTM
  cashFlowCoverageRatiosTTM
  cashFlowToDebtRatioTTM
  cashPerShareTTM
  cashRatioTTM
  companyEquityMultiplierTTM
  currentRatioTTM
  daysOfInventoryOutstandingTTM
  daysOfPayablesOutstandingTTM
  daysOfSalesOutstandingTTM
  debtEquityRatioTTM
  debtRatioTTM
  dividendPaidAndCapexCoverageRatioTTM
  dividendPerShareTTM
  dividendYielPercentageTTM
  dividendYielTTM
  dividendYieldTTM
  ebitPerRevenueTTM
  ebtPerEbitTTM
  effectiveTaxRateTTM
  enterpriseValueMultipleTTM
  fixedAssetTurnoverTTM
  freeCashFlowOperatingCashFlowRatioTTM
  freeCashFlowPerShareTTM
  grossProfitMarginTTM
  interestCoverageTTM
  inventoryTurnoverTTM
  longTermDebtToCapitalizationTTM
  netIncomePerEBTTTM
  netProfitMarginTTM
  operatingCashFlowPerShareTTM
  operatingCashFlowSalesRatioTTM
  operatingCycleTTM
  operatingProfitMarginTTM
  payablesTurnoverTTM
  payoutRatioTTM
  peRatioTTM
  pegRatioTTM
  pretaxProfitMarginTTM
  priceBookValueRatioTTM
  priceCashFlowRatioTTM
  priceEarningsRatioTTM
  priceEarningsToGrowthRatioTTM
  priceFairValueTTM
  priceSalesRatioTTM
  priceToBookRatioTTM
  priceToFreeCashFlowsRatioTTM
  priceToOperatingCashFlowsRatioTTM
  priceToSalesRatioTTM
  quickRatioTTM
  receivablesTurnoverTTM
  returnOnAssetsTTM
  returnOnCapitalEmployedTTM
  returnOnEquityTTM
  shortTermCoverageRatiosTTM
  totalDebtToCapitalizationTTM
}
    `;
export const StfmCompanyQuoteFragmentFragmentDoc = gql`
    fragment STFMCompanyQuoteFragment on STFMCompanyQuote {
  avgVolume
  change
  changesPercentage
  dayHigh
  dayLow
  earningsAnnouncement
  eps
  exchange
  marketCap
  name
  open
  pe
  previousClose
  price
  priceAvg200
  priceAvg50
  sharesOutstanding
  symbol
  timestamp
  volume
  yearHigh
  yearLow
  image
}
    `;
export const StfmTopStocksFragmentFragmentDoc = gql`
    fragment STFMTopStocksFragment on STFMTopStocks {
  ticker
  changes
  price
  changesPercentage
  companyName
}
    `;
export const StfmExchangeSectorPeFragmentFragmentDoc = gql`
    fragment STFMExchangeSectorPEFragment on STFMExchangeSectorPE {
  date
  sector
  exchange
  pe
}
    `;
export const StfmExchangeIndustryPeFragmentFragmentDoc = gql`
    fragment STFMExchangeIndustryPEFragment on STFMExchangeIndustryPE {
  date
  industry
  exchange
  pe
}
    `;
export const StfmCalendarEarningsFragmentFragmentDoc = gql`
    fragment STFMCalendarEarningsFragment on STFMCalendarEarnings {
  date
  symbol
  eps
  epsEstimated
  time
  revenue
  revenueEstimated
}
    `;
export const StfmCalendarIpoFragmentFragmentDoc = gql`
    fragment STFMCalendarIpoFragment on STFMCalendarIpo {
  date
  company
  symbol
  exchange
  actions
  shares
  priceRange
  marketCap
}
    `;
export const StfmCalendarEconomicFragmentFragmentDoc = gql`
    fragment STFMCalendarEconomicFragment on STFMCalendarEconomic {
  event
  date
  country
  actual
  previous
  change
  changePercentage
  estimate
}
    `;
export const StfmEtfHolderFragmentFragmentDoc = gql`
    fragment STFMEtfHolderFragment on STFMEtfHolder {
  asset
  sharesNumber
  weightPercentage
}
    `;
export const StfmEtfSectorWeightFragmentFragmentDoc = gql`
    fragment STFMEtfSectorWeightFragment on STFMEtfSectorWeight {
  sector
  weightPercentage
}
    `;
export const StfmEtfCountryWeightFragmentFragmentDoc = gql`
    fragment STFMEtfCountryWeightFragment on STFMEtfCountryWeight {
  country
  weightPercentage
}
    `;
export const StfmSectorPerformanceFragmentFragmentDoc = gql`
    fragment STFMSectorPerformanceFragment on STFMSectorPerformance {
  sector
  changesPercentage
}
    `;
export const StPortfolioSnapshotFragmentFragmentDoc = gql`
    fragment STPortfolioSnapshotFragment on STPortfolioSnapshot {
  portfolioInvested
  portfolioCash
  date
}
    `;
export const StTransactionSnapshotFragmentFragmentDoc = gql`
    fragment STTransactionSnapshotFragment on STTransactionSnapshot {
  transactionsBuy
  transactionsSell
  date
}
    `;
export const StGroupUserFragmentFragmentDoc = gql`
    fragment STGroupUserFragment on STGroupUser {
  id
  nickName
  locale
  photoURL
  accountCreatedDate
  lastPortfolioSnapshot {
    ...STPortfolioSnapshotFragment
  }
  lastPortfolioIncreaseNumber
  lastPortfolioIncreasePrct
  numberOfExecutedTransactions
  numberOfExecutedBuyTransactions
  numberOfExecutedSellTransactions
  lastTransactionSnapshot {
    ...STTransactionSnapshotFragment
  }
  previousPosition
  currentPosition
  startingPortfolioSnapshot {
    ...STPortfolioSnapshotFragment
  }
  sinceDate
}
    ${StPortfolioSnapshotFragmentFragmentDoc}
${StTransactionSnapshotFragmentFragmentDoc}`;
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
export const StGroupIdentificationDataFragmentDoc = gql`
    fragment STGroupIdentificationData on STGroupAllData {
  groupId
  name
  description
  imagePath
  imageUrl
  owner {
    ...STGroupUserFragment
  }
  lastPortfolioSnapshot {
    ...STPortfolioSnapshotFragment
  }
  lastTransactionSnapshot {
    ...STTransactionSnapshotFragment
  }
  startDate
  endDate
  isInfinite
  isPrivate
  lastPortfolioIncreaseNumber
  lastPortfolioIncreasePrct
  lastPortfolioBalance
  numberOfExecutedTransactions
  numberOfExecutedBuyTransactions
  numberOfExecutedSellTransactions
  numberOfMembers
  startedBalance
  topMembers {
    ...STGroupUserFragment
  }
  lastUpdateDate
  lastEditedDate
  createdDate
  currentAchievedRanks {
    ...STRankFragment
  }
}
    ${StGroupUserFragmentFragmentDoc}
${StPortfolioSnapshotFragmentFragmentDoc}
${StTransactionSnapshotFragmentFragmentDoc}
${StRankFragmentFragmentDoc}`;
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
  residance {
    ...SummaryResidanceFragment
  }
  avgVolume
  ceo
  companyName
  currency
  dividendDate
  ePSTTM
  earningsDate
  exDividendDate
  exchangeName
  fiveTwoWeekRange
  forwardDividendRate
  forwardDividendYield
  forwardEPS
  forwardPE
  fullTimeEmployees
  id
  industry
  ipoDate
  lastSplitDate
  lastSplitFactor
  logo_url
  longBusinessSummary
  marketCap
  marketPrice
  oneyTargetEst
  pERatioTTM
  previousClose
  recommendationKey
  recommendationMean
  sandPFiveTwoWeekChange
  sector
  sharesOutstanding
  shortRatio
  symbol
  targetEstOneyPercent
  volume
  website
  weekRangeFiveTwoMax
  weekRangeFiveTwoMin
  yearToDatePrice
  yearToDatePriceReturn
}
    ${SummaryResidanceFragmentFragmentDoc}`;
export const StHoldingFragmentFragmentDoc = gql`
    fragment STHoldingFragment on STHolding {
  symbol
  breakEvenPrice
  units
  summary {
    ...StockSummaryFragment
  }
}
    ${StockSummaryFragmentFragmentDoc}`;
export const StTransactionFragmentFragmentDoc = gql`
    fragment STTransactionFragment on STTransaction {
  transactionId
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
  owner {
    ...STGroupUserFragment
  }
  lastUpdateDate
  lastEditedDate
  createdDate
  startDate
  endDate
  isPrivate
  isInfinite
  numberOfMembers
  startedBalance
  lastPortfolioIncreaseNumber
  lastPortfolioIncreasePrct
  lastPortfolioBalance
  numberOfExecutedTransactions
  numberOfExecutedBuyTransactions
  numberOfExecutedSellTransactions
  holdings {
    holding {
      ...STHoldingFragment
    }
    numberOfUsers
  }
  lastTransactionSnapshot {
    ...STTransactionSnapshotFragment
  }
  lastPortfolioSnapshot {
    ...STPortfolioSnapshotFragment
  }
  currentAchievedRanks {
    ...STRankFragment
  }
  topTransactions {
    ...STTransactionFragment
  }
  groupHistoricalData {
    portfolioSnapshots {
      ...STPortfolioSnapshotFragment
    }
    transactionSnapshots {
      ...STTransactionSnapshotFragment
    }
    bestAchievedRanks {
      ...STRankFragment
    }
    groupLogs {
      ...STLogsFragment
    }
  }
  lastTransactions {
    ...STTransactionFragment
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
    ${StGroupUserFragmentFragmentDoc}
${StHoldingFragmentFragmentDoc}
${StTransactionSnapshotFragmentFragmentDoc}
${StPortfolioSnapshotFragmentFragmentDoc}
${StRankFragmentFragmentDoc}
${StTransactionFragmentFragmentDoc}
${StLogsFragmentFragmentDoc}`;
export const StMarketChartDataResultCombinedFragmentFragmentDoc = gql`
    fragment STMarketChartDataResultCombinedFragment on STMarketChartDataResultCombined {
  currentDate
  currentValue
  data
  documentKey
  name
  parentName
  lastUpdate
}
    `;
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
export const StPortfolioFragmentFragmentDoc = gql`
    fragment STPortfolioFragment on STPortfolio {
  portfolioInvested
  portfolioCash
}
    `;
export const FinancialReportStatementDataFragmentFragmentDoc = gql`
    fragment FinancialReportStatementDataFragment on FinancialReportStatementData {
  concept
  label
  unit
  value
}
    `;
export const FinancialReportFragmentFragmentDoc = gql`
    fragment FinancialReportFragment on FinancialReport {
  acceptedDate
  accessNumber
  cik
  endDate
  filedDate
  form
  quarter
  startDate
  symbol
  year
  report {
    bs {
      ...FinancialReportStatementDataFragment
    }
    cf {
      ...FinancialReportStatementDataFragment
    }
    ic {
      ...FinancialReportStatementDataFragment
    }
  }
}
    ${FinancialReportStatementDataFragmentFragmentDoc}`;
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
export const CalculationFragmentFragmentDoc = gql`
    fragment calculationFragment on Calculation {
  avg
  max
  min
}
    `;
export const EsgScoreFragmentFragmentDoc = gql`
    fragment esgScoreFragment on EsgScores {
  totalEsg
  environmentScore
  governanceScore
  highestControversy
  esgPerformance
  socialScore
  peerCount
  peerEnvironmentPerformance {
    ...calculationFragment
  }
  peerEsgScorePerformance {
    ...calculationFragment
  }
  peerGovernancePerformance {
    ...calculationFragment
  }
  peerHighestControversyPerformance {
    ...calculationFragment
  }
  peerSocialPerformance {
    ...calculationFragment
  }
  percentile
  peerGroup
  relatedControversy
}
    ${CalculationFragmentFragmentDoc}`;
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
  earningsGrowth
  ebitda
  ebitdaMargins
  financialCurrency
  freeCashflow
  grossMargins
  grossProfits
  numberOfAnalystOpinions
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
export const CapmFragmentFragmentDoc = gql`
    fragment CAPMFragment on CAPM {
  Beta
  Rf
  Rm
  result
}
    `;
export const WaccFragmentFragmentDoc = gql`
    fragment WACCFragment on WACC {
  CAPM {
    ...CAPMFragment
  }
  Rd
  Re
  Wd
  We
  result
  taxRate
}
    ${CapmFragmentFragmentDoc}`;
export const StUserIndentificationDataFragmentDoc = gql`
    fragment STUserIndentificationData on STUserPublicData {
  id
  nickName
  locale
  photoURL
  accountCreatedDate
  lastSignInDate
  numberOfExecutedTransactions
  numberOfExecutedBuyTransactions
  numberOfExecutedSellTransactions
  lastPortfolioIncreaseNumber
  lastPortfolioIncreasePrct
  lastPortfolioSnapshot {
    portfolioInvested
    portfolioCash
    date
  }
  lastTransactionSnapshot {
    transactionsBuy
    transactionsSell
    date
  }
}
    `;
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
export const QueryAdminMainInformationsDocument = gql`
    query QueryAdminMainInformations {
  queryAdminMainInformations {
    lastStockDetailsReload
    usersRegistrated
    usersActive
    usersRegistrationSnippets {
      id
      nickName
      locale
      photoURL
      accountCreatedDate
    }
    usersWeeklyRegistrated {
      data
      timestamp
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class QueryAdminMainInformationsGQL extends Apollo.Query<QueryAdminMainInformationsQuery, QueryAdminMainInformationsQueryVariables> {
    document = QueryAdminMainInformationsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
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
      ...STGroupIdentificationData
    }
  }
}
    ${StGroupIdentificationDataFragmentDoc}`;

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
    ...STGroupIdentificationData
  }
}
    ${StGroupIdentificationDataFragmentDoc}`;

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
    ...STGroupIdentificationData
  }
}
    ${StGroupIdentificationDataFragmentDoc}`;

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
    ...STGroupIdentificationData
  }
}
    ${StGroupIdentificationDataFragmentDoc}`;

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
    ...STGroupIdentificationData
  }
}
    ${StGroupIdentificationDataFragmentDoc}`;

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
      ...STMarketChartDataResultCombinedFragment
    }
    bonds {
      ...STMarketChartDataResultCombinedFragment
    }
    inflation_rate {
      ...STMarketChartDataResultCombinedFragment
    }
    misery_index {
      ...STMarketChartDataResultCombinedFragment
    }
    treasury_yield {
      ...STMarketChartDataResultCombinedFragment
    }
    investor_sentiment {
      ...STMarketChartDataResultCombinedFragment
    }
    bitcoin {
      ...STMarketChartDataResultCombinedFragment
    }
    lastUpdate
  }
}
    ${StMarketChartDataResultCombinedFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class QueryStMarketHistoryOverviewGQL extends Apollo.Query<QueryStMarketHistoryOverviewQuery, QueryStMarketHistoryOverviewQueryVariables> {
    document = QueryStMarketHistoryOverviewDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const QuerySymbolHistoricalPricesDocument = gql`
    query QuerySymbolHistoricalPrices($symbol: String!, $period: String!) {
  querySymbolHistoricalPrices(symbol: $symbol, period: $period) {
    livePrice
    symbol
    period
    price
    volume
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class QuerySymbolHistoricalPricesGQL extends Apollo.Query<QuerySymbolHistoricalPricesQuery, QuerySymbolHistoricalPricesQueryVariables> {
    document = QuerySymbolHistoricalPricesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const QueryMarketDailyOverviewDocument = gql`
    query QueryMarketDailyOverview {
  queryMarketDailyOverview {
    id
    dailyGainers {
      ...STFMCompanyQuoteFragment
    }
    dailyLosers {
      ...STFMCompanyQuoteFragment
    }
    mostActive {
      ...STFMCompanyQuoteFragment
    }
    stockSuggestions {
      historicalData
      summary {
        ...StockSummaryFragment
      }
    }
    topCrypto {
      ...STMarketTopTableCryptoDataFragment
    }
    news {
      ...STFMStockNewFragment
    }
    calendar {
      calendarEconomic {
        ...STFMCalendarEconomicFragment
      }
      calendarDividend {
        ...STFMStockDividendFragment
      }
      calendarSplit {
        ...STFMSplitHistoryFragment
      }
      calendarIpo {
        ...STFMCalendarIpoFragment
      }
      calendarEarnings {
        ...STFMCalendarEarningsFragment
      }
    }
    mutulaFunds {
      ...STFMCompanyQuoteFragment
    }
    etfs {
      ...STFMCompanyQuoteFragment
    }
    commodities {
      ...STFMCompanyQuoteFragment
    }
    exchange {
      id
      exchangeIndustryPE {
        ...STFMExchangeIndustryPEFragment
      }
      exchangeSectorPE {
        ...STFMExchangeSectorPEFragment
      }
    }
    sectorPerformance {
      ...STFMSectorPerformanceFragment
    }
    lastUpdate
  }
}
    ${StfmCompanyQuoteFragmentFragmentDoc}
${StockSummaryFragmentFragmentDoc}
${StMarketTopTableCryptoDataFragmentFragmentDoc}
${StfmStockNewFragmentFragmentDoc}
${StfmCalendarEconomicFragmentFragmentDoc}
${StfmStockDividendFragmentFragmentDoc}
${StfmSplitHistoryFragmentFragmentDoc}
${StfmCalendarIpoFragmentFragmentDoc}
${StfmCalendarEarningsFragmentFragmentDoc}
${StfmExchangeIndustryPeFragmentFragmentDoc}
${StfmExchangeSectorPeFragmentFragmentDoc}
${StfmSectorPerformanceFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class QueryMarketDailyOverviewGQL extends Apollo.Query<QueryMarketDailyOverviewQuery, QueryMarketDailyOverviewQueryVariables> {
    document = QueryMarketDailyOverviewDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const QueryEtfDocumentDocument = gql`
    query QueryEtfDocument($etfName: String!) {
  queryEtfDocument(etfName: $etfName) {
    id
    etfHolders {
      ...STFMEtfHolderFragment
    }
    etfSectorWeight {
      ...STFMEtfSectorWeightFragment
    }
    etfCountryWeight {
      ...STFMEtfCountryWeightFragment
    }
    lastUpdate
  }
}
    ${StfmEtfHolderFragmentFragmentDoc}
${StfmEtfSectorWeightFragmentFragmentDoc}
${StfmEtfCountryWeightFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class QueryEtfDocumentGQL extends Apollo.Query<QueryEtfDocumentQuery, QueryEtfDocumentQueryVariables> {
    document = QueryEtfDocumentDocument;
    
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
export const QueryStMarketDataDocument = gql`
    query QueryStMarketData($key: String!) {
  queryStMarketData(key: $key) {
    ...STMarketChartDataResultCombinedFragment
  }
}
    ${StMarketChartDataResultCombinedFragmentFragmentDoc}`;

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
    query QueryStockDetails($symbol: String!, $reload: Boolean) {
  queryStockDetails(symbol: $symbol, reload: $reload) {
    id
    recommendation {
      ...recommendationFragment
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
        action
        epochGradeDate
        firm
        fromGrade
        toGrade
      }
      esgScores {
        ...esgScoreFragment
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
    calculations {
      CAPM {
        ...CAPMFragment
      }
      WACC {
        ...WACCFragment
      }
    }
    calculatedPredictions {
      DCF_V1 {
        estimatedCompanyTodayValue
        estimatedDiscountedFactors
        estimatedDiscountedTerminalValue
        estimatedFreeCashFlowRate
        estimatedFreeCashFlowRates
        estimatedFreeCashFlows
        estimatedIntrinsicValue
        estimatedNetIncomeMargin
        estimatedNetIncomes
        estimatedPresentValueOfFutureCashFlows
        estimatedRevenueGrowthRate
        estimatedRevenues
        estimatedTerminalValue
        historical {
          freeCashFlows
          sharesOutstanding
          netIncomeMargins
          netIncome
          revenue
          revenueGrowthRates
          historicalYears
        }
        variable {
          perpetualGrowthRate
          requiredRateOfReturn
        }
        years
      }
      DDF_V1 {
        dividendGrowthRate
        dividendsPerShareTTM
        minimumRateReturn
        estimatedIntrinsicValue
      }
      FCF_V1 {
        avgFcf
        estimatedIntrinsicMarketCap
        estimatedIntrinsicValue
        historicalYears
        minimumRateReturn
        operatingActivities
        capitalExpenditures
        freeCashFlows
        sharesOutstanding
      }
      INTRINSIC_V1 {
        dates
        eps
        estimatedDiscountedPV
        estimatedEarnings
        estimatedIntrinsicValue
        variable {
          growthRateFrom5yTo10y
          growthRateNext5y
          minimumRateReturn
          terminalMultiple
        }
      }
    }
    allFinancialReportsYearly {
      ...FinancialReportFragment
    }
    allFinancialReportsQuarterly {
      ...FinancialReportFragment
    }
    institutionalHolders {
      ...STFMHolderFragment
    }
    mutualFundHolders {
      ...STFMHolderWithWeightFragment
    }
    companyOutlook {
      financialsAnnual {
        balance {
          ...STFMBalanceSheetFragment
        }
        cash {
          ...STFMCashFlowFragment
        }
        income {
          ...STFMIncomeStatementFragment
        }
      }
      financialsQuarter {
        balance {
          ...STFMBalanceSheetFragment
        }
        cash {
          ...STFMCashFlowFragment
        }
        income {
          ...STFMIncomeStatementFragment
        }
      }
      insideTrades {
        ...STFMInsideTradeFragment
      }
      keyExecutives {
        ...STFMKeyExecutiveFragment
      }
      rating {
        ...STFMRatingFragment
      }
      ratios {
        ...STFMRatiosFragment
      }
      splitHistory {
        ...STFMSplitHistoryFragment
      }
      stockDividend {
        ...STFMStockDividendFragment
      }
      stockNews {
        ...STFMStockNewFragment
      }
    }
    sectorPeers {
      ...STFMCompanyQuoteFragment
    }
  }
}
    ${RecommendationFragmentFragmentDoc}
${DefaultKeyStatisticsFragmentFragmentDoc}
${EarningsFragmentFragmentDoc}
${FinancialDataFragmentFragmentDoc}
${EsgScoreFragmentFragmentDoc}
${StockSummaryFragmentFragmentDoc}
${MetricFragmentFragmentDoc}
${DividensFragmentFragmentDoc}
${HistoricalMetricsDataFragmentFragmentDoc}
${CapmFragmentFragmentDoc}
${WaccFragmentFragmentDoc}
${FinancialReportFragmentFragmentDoc}
${StfmHolderFragmentFragmentDoc}
${StfmHolderWithWeightFragmentFragmentDoc}
${StfmBalanceSheetFragmentFragmentDoc}
${StfmCashFlowFragmentFragmentDoc}
${StfmIncomeStatementFragmentFragmentDoc}
${StfmInsideTradeFragmentFragmentDoc}
${StfmKeyExecutiveFragmentFragmentDoc}
${StfmRatingFragmentFragmentDoc}
${StfmRatiosFragmentFragmentDoc}
${StfmSplitHistoryFragmentFragmentDoc}
${StfmStockDividendFragmentFragmentDoc}
${StfmStockNewFragmentFragmentDoc}
${StfmCompanyQuoteFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class QueryStockDetailsGQL extends Apollo.Query<QueryStockDetailsQuery, QueryStockDetailsQueryVariables> {
    document = QueryStockDetailsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const QueryStockFinancialReportsDocument = gql`
    query QueryStockFinancialReports($symbol: String!) {
  queryStockFinancialReports(symbol: $symbol) {
    id
    allFinancialReportsQuarterly {
      ...FinancialReportFragment
    }
    allFinancialReportsYearly {
      ...FinancialReportFragment
    }
  }
}
    ${FinancialReportFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class QueryStockFinancialReportsGQL extends Apollo.Query<QueryStockFinancialReportsQuery, QueryStockFinancialReportsQueryVariables> {
    document = QueryStockFinancialReportsDocument;
    
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
export const QueryStockQuotesByPrefixDocument = gql`
    query QueryStockQuotesByPrefix($symbolPrefix: String!) {
  queryStockQuotesByPrefix(symbolPrefix: $symbolPrefix) {
    ...STFMCompanyQuoteFragment
  }
}
    ${StfmCompanyQuoteFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class QueryStockQuotesByPrefixGQL extends Apollo.Query<QueryStockQuotesByPrefixQuery, QueryStockQuotesByPrefixQueryVariables> {
    document = QueryStockQuotesByPrefixDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SetForceReloadStockDetailsDocument = gql`
    mutation SetForceReloadStockDetails {
  setForceReloadStockDetails
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SetForceReloadStockDetailsGQL extends Apollo.Mutation<SetForceReloadStockDetailsMutation, SetForceReloadStockDetailsMutationVariables> {
    document = SetForceReloadStockDetailsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const QueryStTradingStrategiesDocument = gql`
    query QuerySTTradingStrategies {
  querySTTradingStrategies {
    data {
      description
      name
      symbol
      url
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class QueryStTradingStrategiesGQL extends Apollo.Query<QueryStTradingStrategiesQuery, QueryStTradingStrategiesQueryVariables> {
    document = QueryStTradingStrategiesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const QueryStTradingStrategyDataDocument = gql`
    query QuerySTTradingStrategyData($symbol: String!, $strategy: String!) {
  querySTTradingStrategyData(symbol: $symbol, strategy: $strategy) {
    interval
    period
    timestamp
    series {
      data
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class QueryStTradingStrategyDataGQL extends Apollo.Query<QueryStTradingStrategyDataQuery, QueryStTradingStrategyDataQueryVariables> {
    document = QueryStTradingStrategyDataDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PerformTransactionDocument = gql`
    mutation PerformTransaction($transactionInput: STTransactionInput!) {
  performTransaction(transactionInput: $transactionInput) {
    holding {
      ...STHoldingFragment
    }
    transaction {
      ...STTransactionFragment
    }
  }
}
    ${StHoldingFragmentFragmentDoc}
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
    query AuthenticateUser($id: String!) {
  authenticateUser(id: $id) {
    id
    nickName
    locale
    photoURL
    accountCreatedDate
    lastSignInDate
    portfolioCash
    numberOfExecutedTransactions
    numberOfExecutedBuyTransactions
    numberOfExecutedSellTransactions
    lastPortfolioIncreaseNumber
    lastPortfolioIncreasePrct
    rank {
      ...STRankFragment
    }
    transactionsSnippets {
      ...STTransactionFragment
    }
    holdings {
      ...STHoldingFragment
    }
    groups {
      groupInvitationSent {
        ...STGroupIdentificationData
      }
      groupInvitationReceived {
        ...STGroupIdentificationData
      }
      groupOwner {
        ...STGroupIdentificationData
      }
      groupMember {
        ...STGroupIdentificationData
      }
    }
    lastPortfolioSnapshot {
      ...STPortfolioSnapshotFragment
    }
    lastTransactionSnapshot {
      ...STTransactionSnapshotFragment
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
      portfolioSnapshots {
        ...STPortfolioSnapshotFragment
      }
      transactionSnapshots {
        ...STTransactionSnapshotFragment
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
    ${StRankFragmentFragmentDoc}
${StTransactionFragmentFragmentDoc}
${StHoldingFragmentFragmentDoc}
${StGroupIdentificationDataFragmentDoc}
${StPortfolioSnapshotFragmentFragmentDoc}
${StTransactionSnapshotFragmentFragmentDoc}
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
export const QueryUserPublicDataByUsernameDocument = gql`
    query QueryUserPublicDataByUsername($usernamePrefix: String!) {
  queryUserPublicDataByUsername(usernamePrefix: $usernamePrefix) {
    ...STUserIndentificationData
  }
}
    ${StUserIndentificationDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class QueryUserPublicDataByUsernameGQL extends Apollo.Query<QueryUserPublicDataByUsernameQuery, QueryUserPublicDataByUsernameQueryVariables> {
    document = QueryUserPublicDataByUsernameDocument;
    
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
  resetUserAccount(userId: $userId) {
    date
    portfolioTotal
  }
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