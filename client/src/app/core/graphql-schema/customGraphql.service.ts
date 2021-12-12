import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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

export type Capm = {
  __typename?: 'CAPM';
  Rf?: Maybe<Scalars['Float']>;
  Rm?: Maybe<Scalars['Float']>;
  beta?: Maybe<Scalars['Float']>;
  result?: Maybe<Scalars['Float']>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Calculation = {
  __typename?: 'Calculation';
  avg?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
};

export type CompanyData = {
  __typename?: 'CompanyData';
  defaultKeyStatistics?: Maybe<DefaultKeyStatistics>;
  earnings?: Maybe<Earnings>;
  esgScores?: Maybe<EsgScores>;
  financialData?: Maybe<FinancialData>;
  pageViews?: Maybe<PageViews>;
  upgradeDowngradeHistory: Array<UpgradeDowngradeHistory>;
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
  sharesOutstanding: Scalars['Float'];
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
  dividendPayoutRatioTTM?: Maybe<Scalars['Float']>;
  dividendPerShareAnnual?: Maybe<Scalars['Float']>;
  dividendPerShareFiveY?: Maybe<Scalars['Float']>;
  dividendYieldFiveY?: Maybe<Scalars['Float']>;
  dividendYieldIndicatedAnnual?: Maybe<Scalars['Float']>;
  dividendsPerShareTTM?: Maybe<Scalars['Float']>;
  exDividendDate?: Maybe<Scalars['String']>;
  forwardDividendYield?: Maybe<Scalars['String']>;
  trailingAnnualDividendRate?: Maybe<Scalars['String']>;
  trailingAnnualDividendYield?: Maybe<Scalars['String']>;
};

export type Earnings = {
  __typename?: 'Earnings';
  earningsChart: EarningsChart;
  financialCurrency: Scalars['String'];
  financialsChart: FinancialsChart;
};

export type EarningsChart = {
  __typename?: 'EarningsChart';
  currentQuarterEstimate: Scalars['Float'];
  currentQuarterEstimateDate: Scalars['String'];
  currentQuarterEstimateYear: Scalars['Float'];
  earningsDate: Array<Scalars['Float']>;
  quarterly: Array<EarningsChartData>;
};

export type EarningsChartData = {
  __typename?: 'EarningsChartData';
  actual?: Maybe<Scalars['Float']>;
  date: Scalars['String'];
  estimate: Scalars['Float'];
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
  report?: Maybe<FinancialReportStatement>;
  startDate?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Float']>;
};

export type FinancialReportStatement = {
  __typename?: 'FinancialReportStatement';
  bs: Array<Maybe<FinancialReportStatementData>>;
  cf: Array<Maybe<FinancialReportStatementData>>;
  ic: Array<Maybe<FinancialReportStatementData>>;
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
  categories: Array<Scalars['String']>;
  series: Array<Series>;
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
  data: Array<Scalars['Float']>;
  dates: Array<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Metric = {
  __typename?: 'Metric';
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
  fiveDayPriceReturnDaily?: Maybe<Scalars['Float']>;
  fiveTwoWeekHigh?: Maybe<Scalars['Float']>;
  fiveTwoWeekHighDate?: Maybe<Scalars['String']>;
  fiveTwoWeekLow?: Maybe<Scalars['Float']>;
  fiveTwoWeekLowDate?: Maybe<Scalars['String']>;
  fiveTwoWeekPriceReturnDaily?: Maybe<Scalars['Float']>;
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
  oneDayAverageTradingVolume?: Maybe<Scalars['Float']>;
  oneThreeWeekPriceReturnDaily?: Maybe<Scalars['Float']>;
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
  threeMonthAverageTradingVolume?: Maybe<Scalars['Float']>;
  totalDebtCagrFiveY?: Maybe<Scalars['Float']>;
  totalDebttotalEquityAnnual?: Maybe<Scalars['Float']>;
  totalDebttotalEquityQuarterly?: Maybe<Scalars['Float']>;
  twoSixWeekPriceReturnDaily?: Maybe<Scalars['Float']>;
  yearToDatePriceReturnDaily?: Maybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addStockIntoStockWatchlist?: Maybe<Summary>;
  answerReceivedGroupInvitation?: Maybe<StGroupAllData>;
  closeTicket?: Maybe<Scalars['Boolean']>;
  commentTicket?: Maybe<StTicketComment>;
  commentTicketEdit?: Maybe<Scalars['String']>;
  createGroup?: Maybe<StGroupAllData>;
  createStockWatchlist?: Maybe<StStockWatchlist>;
  createTicket?: Maybe<StTicket>;
  deleteGroup?: Maybe<Scalars['Boolean']>;
  deleteTicket?: Maybe<Scalars['Boolean']>;
  deleteWatchlist?: Maybe<Scalars['Boolean']>;
  editGroup?: Maybe<Scalars['Boolean']>;
  editUser?: Maybe<Scalars['Boolean']>;
  leaveGroup?: Maybe<Scalars['Boolean']>;
  performTransaction?: Maybe<PerformedTransaction>;
  registerUser?: Maybe<Scalars['Boolean']>;
  removeMemberFromGroup?: Maybe<Scalars['Boolean']>;
  removeStockFromStockWatchlist?: Maybe<Scalars['Boolean']>;
  renameStockWatchlist?: Maybe<Scalars['Boolean']>;
  resetUserAccount?: Maybe<StUserResetedAccount>;
  setForceReloadStockDetails?: Maybe<Scalars['Boolean']>;
  toggleInvitationRequestToGroup?: Maybe<StGroupAllData>;
  toggleInviteUserIntoGroup?: Maybe<StGroupUser>;
  toggleUsersInvitationRequestToGroup?: Maybe<StGroupUser>;
};


export type MutationAddStockIntoStockWatchlistArgs = {
  identifier: StStockWatchInputlistIdentifier;
};


export type MutationAnswerReceivedGroupInvitationArgs = {
  accept: Scalars['Boolean'];
  id: Scalars['String'];
};


export type MutationCloseTicketArgs = {
  ticketId: Scalars['String'];
};


export type MutationCommentTicketArgs = {
  comment: Scalars['String'];
  ticketId: Scalars['String'];
};


export type MutationCommentTicketEditArgs = {
  commentEditValues: StTicketCommentEditValues;
};


export type MutationCreateGroupArgs = {
  groupInput: StGroupAllDataInput;
};


export type MutationCreateStockWatchlistArgs = {
  identifier: StStockWatchInputlistIdentifier;
};


export type MutationCreateTicketArgs = {
  ticketValuse: StTicketCreateValues;
};


export type MutationDeleteGroupArgs = {
  id: Scalars['String'];
};


export type MutationDeleteTicketArgs = {
  ticketId: Scalars['String'];
};


export type MutationDeleteWatchlistArgs = {
  identifier: StStockWatchInputlistIdentifier;
};


export type MutationEditGroupArgs = {
  groupInput: StGroupAllDataInput;
};


export type MutationEditUserArgs = {
  editInput?: InputMaybe<StUserEditDataInput>;
};


export type MutationLeaveGroupArgs = {
  id: Scalars['String'];
};


export type MutationPerformTransactionArgs = {
  transactionInput: StTransactionInput;
};


export type MutationRegisterUserArgs = {
  user?: InputMaybe<StUserAuthenticationInput>;
};


export type MutationRemoveMemberFromGroupArgs = {
  groupId: Scalars['String'];
  removingUserId: Scalars['String'];
};


export type MutationRemoveStockFromStockWatchlistArgs = {
  identifier: StStockWatchInputlistIdentifier;
};


export type MutationRenameStockWatchlistArgs = {
  identifier: StStockWatchInputlistIdentifier;
};


export type MutationResetUserAccountArgs = {
  userId: Scalars['String'];
};


export type MutationToggleInvitationRequestToGroupArgs = {
  id: Scalars['String'];
  sendInvitation: Scalars['Boolean'];
};


export type MutationToggleInviteUserIntoGroupArgs = {
  groupId: Scalars['String'];
  inviteUser: Scalars['Boolean'];
  userId: Scalars['String'];
};


export type MutationToggleUsersInvitationRequestToGroupArgs = {
  acceptUser: Scalars['Boolean'];
  groupId: Scalars['String'];
  userId: Scalars['String'];
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
  authenticateUser?: Maybe<StUserPublicData>;
  queryAdminMainInformations?: Maybe<StAdminMainInformations>;
  queryEtfDocument?: Maybe<StMarketEtfDocument>;
  queryMarketDailyOverview?: Maybe<StMarketDailyOverview>;
  querySTGroupByGroupId?: Maybe<StGroupAllData>;
  querySTGroupByGroupName: Array<Maybe<StGroupAllData>>;
  querySTMarketHistoryOverview?: Maybe<StMarketOverviewPartialData>;
  queryStMarketAllCategories?: Maybe<StMarketDatasetKeyCategories>;
  queryStMarketData?: Maybe<StMarketChartDataResultCombined>;
  queryStockDetails?: Maybe<StockDetails>;
  queryStockFinancialReports?: Maybe<StockDetailsFinancialReports>;
  queryStockQuotesByPrefix: Array<Maybe<StfmCompanyQuote>>;
  queryStockScreener?: Maybe<StfmStockScreenerResultWrapper>;
  queryStockSummary?: Maybe<Summary>;
  querySymbolHistoricalPrices?: Maybe<SymbolHistoricalPrices>;
  queryUserPublicDataById?: Maybe<StUserPublicData>;
  queryUserPublicDataByUsername: Array<Maybe<StUserPublicData>>;
  validatorFinhubKeyValidity?: Maybe<Scalars['Boolean']>;
};


export type QueryAuthenticateUserArgs = {
  id: Scalars['String'];
};


export type QueryQueryEtfDocumentArgs = {
  etfName: Scalars['String'];
};


export type QueryQueryStGroupByGroupIdArgs = {
  id: Scalars['String'];
};


export type QueryQueryStGroupByGroupNameArgs = {
  groupName: Scalars['String'];
};


export type QueryQueryStMarketDataArgs = {
  key: Scalars['String'];
};


export type QueryQueryStockDetailsArgs = {
  reload?: InputMaybe<Scalars['Boolean']>;
  symbol: Scalars['String'];
};


export type QueryQueryStockFinancialReportsArgs = {
  symbol: Scalars['String'];
};


export type QueryQueryStockQuotesByPrefixArgs = {
  symbolPrefix: Scalars['String'];
};


export type QueryQueryStockScreenerArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  stockScreenerInput: StfmStockScreenerInput;
};


export type QueryQueryStockSummaryArgs = {
  allowReload?: InputMaybe<Scalars['Boolean']>;
  symbol: Scalars['String'];
};


export type QueryQuerySymbolHistoricalPricesArgs = {
  period: Scalars['String'];
  symbol: Scalars['String'];
};


export type QueryQueryUserPublicDataByIdArgs = {
  id: Scalars['String'];
};


export type QueryQueryUserPublicDataByUsernameArgs = {
  usernamePrefix: Scalars['String'];
};


export type QueryValidatorFinhubKeyValidityArgs = {
  finuhbKey: Scalars['String'];
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

export type StAdminMainInformations = {
  __typename?: 'STAdminMainInformations';
  lastStockDetailsReload?: Maybe<Scalars['String']>;
  tickets: Array<StTicket>;
  usersActive: Scalars['Float'];
  usersRegistrated: Scalars['Float'];
  usersRegistrationSnippets: Array<StUserIndetificationBase>;
  usersWeeklyRegistrated: Array<StSeriesNumber>;
};

export type StAnalystEstimates = {
  __typename?: 'STAnalystEstimates';
  date?: Maybe<Scalars['String']>;
  estimatedEbitAvg?: Maybe<Scalars['Float']>;
  estimatedEbitHigh?: Maybe<Scalars['Float']>;
  estimatedEbitLow?: Maybe<Scalars['Float']>;
  estimatedEbitdaAvg?: Maybe<Scalars['Float']>;
  estimatedEbitdaHigh?: Maybe<Scalars['Float']>;
  estimatedEbitdaLow?: Maybe<Scalars['Float']>;
  estimatedEpsAvg?: Maybe<Scalars['Float']>;
  estimatedEpsHigh?: Maybe<Scalars['Float']>;
  estimatedEpsLow?: Maybe<Scalars['Float']>;
  estimatedNetIncomeAvg?: Maybe<Scalars['Float']>;
  estimatedNetIncomeHigh?: Maybe<Scalars['Float']>;
  estimatedNetIncomeLow?: Maybe<Scalars['Float']>;
  estimatedRevenueAvg?: Maybe<Scalars['Float']>;
  estimatedRevenueHigh?: Maybe<Scalars['Float']>;
  estimatedRevenueLow?: Maybe<Scalars['Float']>;
  estimatedSgaExpenseAvg?: Maybe<Scalars['Float']>;
  estimatedSgaExpenseHigh?: Maybe<Scalars['Float']>;
  estimatedSgaExpenseLow?: Maybe<Scalars['Float']>;
  numberAnalystEstimatedRevenue?: Maybe<Scalars['Float']>;
  numberAnalystsEstimatedEps?: Maybe<Scalars['Float']>;
  symbol?: Maybe<Scalars['String']>;
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
  historicalYears: Array<Maybe<Scalars['String']>>;
  netIncome: Array<Maybe<Scalars['Float']>>;
  netIncomeMargins: Array<Maybe<Scalars['Float']>>;
  revenue: Array<Maybe<Scalars['Float']>>;
  revenueGrowthRates: Array<Maybe<Scalars['Float']>>;
  sharesOutstanding: Scalars['Float'];
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
  estimatedIntrinsicValue: Scalars['Float'];
  minimumRateReturn: Scalars['Float'];
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
  eps?: Maybe<Scalars['Float']>;
  epsEstimated?: Maybe<Scalars['Float']>;
  revenue?: Maybe<Scalars['Float']>;
  revenueEstimated?: Maybe<Scalars['Float']>;
  symbol?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['String']>;
};

export type StfmCalendarEconomic = {
  __typename?: 'STFMCalendarEconomic';
  actual?: Maybe<Scalars['Float']>;
  change?: Maybe<Scalars['Float']>;
  changePercentage?: Maybe<Scalars['Float']>;
  country?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  estimate?: Maybe<Scalars['Float']>;
  event?: Maybe<Scalars['String']>;
  previous?: Maybe<Scalars['Float']>;
};

export type StfmCalendarIpo = {
  __typename?: 'STFMCalendarIpo';
  actions?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  exchange?: Maybe<Scalars['String']>;
  marketCap?: Maybe<Scalars['Float']>;
  priceRange?: Maybe<Scalars['String']>;
  shares?: Maybe<Scalars['Float']>;
  symbol?: Maybe<Scalars['String']>;
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
  financialsAnnual: StfmFinancials;
  financialsQuarter: StfmFinancials;
  insideTrades: Array<StfmInsideTrade>;
  keyExecutives: Array<StfmKeyExecutive>;
  metrics: StfmMetrics;
  profile: StfmProfile;
  rating?: Maybe<StfmRating>;
  ratios?: Maybe<StfmRatios>;
  splitHistory: Array<StfmSplitHistory>;
  stockDividend: Array<StfmStockDividend>;
  stockNews: Array<StfmStockNew>;
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
  image?: Maybe<Scalars['String']>;
  marketCap?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  open?: Maybe<Scalars['Float']>;
  pe?: Maybe<Scalars['Float']>;
  previousClose?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  priceAvg50?: Maybe<Scalars['Float']>;
  priceAvg200?: Maybe<Scalars['Float']>;
  sharesOutstanding?: Maybe<Scalars['Float']>;
  symbol?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
  yearHigh?: Maybe<Scalars['Float']>;
  yearLow?: Maybe<Scalars['Float']>;
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
  exchange?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
  pe?: Maybe<Scalars['Float']>;
};

export type StfmExchangeSectorPe = {
  __typename?: 'STFMExchangeSectorPE';
  date?: Maybe<Scalars['String']>;
  exchange?: Maybe<Scalars['String']>;
  pe?: Maybe<Scalars['Float']>;
  sector?: Maybe<Scalars['String']>;
};

export type StfmFinancials = {
  __typename?: 'STFMFinancials';
  balance: Array<Maybe<StfmBalanceSheet>>;
  cash: Array<Maybe<StfmCashFlow>>;
  income: Array<Maybe<StfmIncomeStatement>>;
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
  changesPercentage?: Maybe<Scalars['String']>;
  sector?: Maybe<Scalars['String']>;
};

export type StfmSocialSentiment = {
  __typename?: 'STFMSocialSentiment';
  absoluteIndex?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['String']>;
  generalPerception?: Maybe<Scalars['Float']>;
  redditCommentMentions?: Maybe<Scalars['Float']>;
  redditCommentSentiment?: Maybe<Scalars['Float']>;
  redditPostMentions?: Maybe<Scalars['Float']>;
  redditPostSentiment?: Maybe<Scalars['Float']>;
  relativeIndex?: Maybe<Scalars['Float']>;
  sentiment?: Maybe<Scalars['Float']>;
  stocktwitsPostMentions?: Maybe<Scalars['Float']>;
  stocktwitsPostSentiment?: Maybe<Scalars['Float']>;
  symbol?: Maybe<Scalars['String']>;
  tweetMentions?: Maybe<Scalars['Float']>;
  tweetSentiment?: Maybe<Scalars['Float']>;
  yahooFinanceCommentMentions?: Maybe<Scalars['Float']>;
  yahooFinanceCommentSentiment?: Maybe<Scalars['Float']>;
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

export type StfmStockScreenerInput = {
  betaLowerThan?: InputMaybe<Scalars['Float']>;
  betaMoreThan?: InputMaybe<Scalars['Float']>;
  country?: InputMaybe<Scalars['String']>;
  dividendLowerThan?: InputMaybe<Scalars['Float']>;
  dividendMoreThan?: InputMaybe<Scalars['Float']>;
  exchange?: InputMaybe<Scalars['String']>;
  industry?: InputMaybe<Scalars['String']>;
  isActivelyTrading?: InputMaybe<Scalars['Boolean']>;
  isEtf?: InputMaybe<Scalars['Boolean']>;
  marketCapLowerThan?: InputMaybe<Scalars['Float']>;
  marketCapMoreThan?: InputMaybe<Scalars['Float']>;
  priceLowerThan?: InputMaybe<Scalars['Float']>;
  priceMoreThan?: InputMaybe<Scalars['Float']>;
  sector?: InputMaybe<Scalars['String']>;
  volumeLowerThan?: InputMaybe<Scalars['Float']>;
  volumeMoreThan?: InputMaybe<Scalars['Float']>;
};

export type StfmStockScreenerResult = {
  __typename?: 'STFMStockScreenerResult';
  beta?: Maybe<Scalars['Float']>;
  companyName: Scalars['String'];
  companyQuote?: Maybe<StfmCompanyQuote>;
  country?: Maybe<Scalars['String']>;
  exchange?: Maybe<Scalars['String']>;
  exchangeShortName?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
  isActivelyTrading?: Maybe<Scalars['Boolean']>;
  isEtf?: Maybe<Scalars['Boolean']>;
  lastAnnualDividend?: Maybe<Scalars['Float']>;
  marketCap: Scalars['Float'];
  price?: Maybe<Scalars['Float']>;
  sector?: Maybe<Scalars['String']>;
  symbol: Scalars['String'];
  volume: Scalars['Float'];
};

export type StfmStockScreenerResultWrapper = {
  __typename?: 'STFMStockScreenerResultWrapper';
  found?: Maybe<Scalars['Float']>;
  limit?: Maybe<Scalars['Float']>;
  offset?: Maybe<Scalars['Float']>;
  result?: Maybe<Array<Maybe<StfmStockScreenerResult>>>;
};

export type StfmTopStocks = {
  __typename?: 'STFMTopStocks';
  changes?: Maybe<Scalars['Float']>;
  changesPercentage?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  ticker?: Maybe<Scalars['String']>;
};

export type StFreeCashFlowFormula = {
  __typename?: 'STFreeCashFlowFormula';
  avgFcf: Scalars['Float'];
  capitalExpenditures: Array<Maybe<Scalars['Float']>>;
  estimatedIntrinsicMarketCap: Scalars['Float'];
  estimatedIntrinsicValue: Scalars['Float'];
  freeCashFlows: Array<Maybe<Scalars['Float']>>;
  historicalYears?: Maybe<Array<Maybe<Scalars['String']>>>;
  minimumRateReturn: Scalars['Float'];
  operatingActivities: Array<Maybe<Scalars['Float']>>;
  sharesOutstanding: Scalars['Float'];
};

export type StGeographic = {
  __typename?: 'STGeographic';
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
};

export type StGroupAllData = {
  __typename?: 'STGroupAllData';
  createdDate: Scalars['String'];
  currentAchievedRanks?: Maybe<StRank>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  groupHistoricalData: StGroupHistoricalData;
  groupMemberData: StGroupMemberData;
  id: Scalars['String'];
  imagePath?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  isClosed: Scalars['Boolean'];
  isInfinite: Scalars['Boolean'];
  isPrivate: Scalars['Boolean'];
  lastEditedDate: Scalars['String'];
  lastTransactions: Array<StTransaction>;
  lastUpdateDate: Scalars['String'];
  managers: Array<StGroupUser>;
  name: Scalars['String'];
  numberOfInvitationReceived: Scalars['Float'];
  numberOfInvitationSent: Scalars['Float'];
  numberOfMembers: Scalars['Float'];
  owner: StGroupUser;
  portfolio: StPortfolioWrapper;
  startDate: Scalars['String'];
  startedPortfolio: StPortfolioSnapshotStarted;
  topMembers: Array<StGroupUser>;
  topTransactions: Array<StTransaction>;
};

export type StGroupAllDataInput = {
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['String']>;
  groupId?: InputMaybe<Scalars['String']>;
  imagePath?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  invitationReceived: Array<InputMaybe<Scalars['String']>>;
  invitationSent: Array<InputMaybe<Scalars['String']>>;
  isInfinite: Scalars['Boolean'];
  isOwnerAlsoMember: Scalars['Boolean'];
  isPrivate: Scalars['Boolean'];
  name: Scalars['String'];
  startDate: Scalars['String'];
};

export type StGroupHistoricalData = {
  __typename?: 'STGroupHistoricalData';
  bestAchievedRanks: Array<StRank>;
  groupLogs: Array<StLog>;
  portfolioSnapshots: Array<StPortfolioSnapshot>;
  transactionSnapshots: Array<StTransactionSnapshot>;
};

export type StGroupHoldings = {
  __typename?: 'STGroupHoldings';
  holding: StHolding;
  numberOfUsers: Scalars['Float'];
};

export type StGroupMemberData = {
  __typename?: 'STGroupMemberData';
  holdings: Array<StGroupHoldings>;
  id: Scalars['String'];
  invitationReceived: Array<StGroupUser>;
  invitationSent: Array<StGroupUser>;
  members: Array<StGroupUser>;
};

export type StGroupUser = {
  __typename?: 'STGroupUser';
  accountCreatedDate: Scalars['String'];
  currentPosition?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  nickName: Scalars['String'];
  photoURL: Scalars['String'];
  portfolio: StPortfolioWrapper;
  previousPosition?: Maybe<Scalars['Float']>;
  sinceDate: Scalars['String'];
  startedPortfolio: StPortfolioSnapshotStarted;
};

export type StHolding = {
  __typename?: 'STHolding';
  breakEvenPrice: Scalars['Float'];
  summary: Summary;
  symbol: Scalars['String'];
  units: Scalars['Float'];
};

export type StInputFielChange = {
  inputFiel: Scalars['String'];
};

export type StInputLog = {
  date: Scalars['String'];
  logText: Scalars['String'];
};

export type StInputSimpleChart = {
  data: Scalars['Float'];
  date: Scalars['String'];
  label?: InputMaybe<Scalars['String']>;
};

export type StLog = {
  __typename?: 'STLog';
  date: Scalars['String'];
  logText: Scalars['String'];
};

export type StMarketCalendar = {
  __typename?: 'STMarketCalendar';
  calendarDividend: Array<StfmStockDividend>;
  calendarEarnings: Array<StfmCalendarEarnings>;
  calendarEconomic: Array<StfmCalendarEconomic>;
  calendarIpo: Array<StfmCalendarIpo>;
  calendarSplit: Array<StfmSplitHistory>;
};

export type StMarketChartDataResultCombined = {
  __typename?: 'STMarketChartDataResultCombined';
  currentDate: Scalars['String'];
  currentValue: Scalars['Float'];
  data: Array<Maybe<Array<Maybe<Scalars['Float']>>>>;
  documentKey: Scalars['String'];
  lastUpdate: Scalars['String'];
  name: Scalars['String'];
  parentName: Scalars['String'];
};

export type StMarketDailyOverview = {
  __typename?: 'STMarketDailyOverview';
  calendar: StMarketCalendar;
  commodities: Array<StfmCompanyQuote>;
  dailyGainers: Array<StfmCompanyQuote>;
  dailyLosers: Array<StfmCompanyQuote>;
  etfs: Array<StfmCompanyQuote>;
  exchange: StMarketExchange;
  id?: Maybe<Scalars['String']>;
  lastUpdate: Scalars['String'];
  lastUpdateTopStocks: Scalars['String'];
  mostActive: Array<StfmCompanyQuote>;
  mutulaFunds: Array<StfmCompanyQuote>;
  news: Array<StfmStockNew>;
  sectorPerformance: Array<StfmSectorPerformance>;
  stockScreener: Array<StfmStockScreenerResult>;
  stockSuggestions: Array<StStockSuggestion>;
  topCrypto: Array<StMarketTopTableCryptoData>;
};

export type StMarketDatasetKey = {
  __typename?: 'STMarketDatasetKey';
  documentKey: Scalars['String'];
  name: Scalars['String'];
};

export type StMarketDatasetKeyCategories = {
  __typename?: 'STMarketDatasetKeyCategories';
  categories: Array<StMarketDatasetKeyCategory>;
};

export type StMarketDatasetKeyCategory = {
  __typename?: 'STMarketDatasetKeyCategory';
  data: Array<StMarketDatasetKey>;
  name: Scalars['String'];
};

export type StMarketEtfDocument = {
  __typename?: 'STMarketEtfDocument';
  etfCountryWeight: Array<StfmEtfCountryWeight>;
  etfHolders: Array<StfmEtfHolder>;
  etfSectorWeight: Array<StfmEtfSectorWeight>;
  id?: Maybe<Scalars['String']>;
  lastUpdate?: Maybe<Scalars['String']>;
};

export type StMarketExchange = {
  __typename?: 'STMarketExchange';
  exchangeIndustryPE: Array<StfmExchangeIndustryPe>;
  exchangeSectorPE: Array<StfmExchangeSectorPe>;
  id?: Maybe<Scalars['String']>;
};

export type StMarketOverviewPartialData = {
  __typename?: 'STMarketOverviewPartialData';
  bitcoin: Array<StMarketChartDataResultCombined>;
  bonds: Array<StMarketChartDataResultCombined>;
  inflation_rate: Array<StMarketChartDataResultCombined>;
  investor_sentiment: Array<StMarketChartDataResultCombined>;
  lastUpdate?: Maybe<Scalars['String']>;
  misery_index: Array<StMarketChartDataResultCombined>;
  sp500: Array<StMarketChartDataResultCombined>;
  treasury_yield: Array<StMarketChartDataResultCombined>;
};

export type StMarketTopTableCryptoData = {
  __typename?: 'STMarketTopTableCryptoData';
  circulatingSupply?: Maybe<Scalars['Float']>;
  coinImageUrl?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  fiftyTwoWeekHigh?: Maybe<Scalars['Float']>;
  fiftyTwoWeekLow?: Maybe<Scalars['Float']>;
  marketCap: Scalars['Float'];
  quoteType?: Maybe<Scalars['String']>;
  regularMarketChange: Scalars['Float'];
  regularMarketChangePercent?: Maybe<Scalars['Float']>;
  regularMarketClosed: Scalars['Float'];
  regularMarketOpen?: Maybe<Scalars['Float']>;
  regularMarketPrice: Scalars['Float'];
  regularMarketVolume: Scalars['Float'];
  shortName: Scalars['String'];
  symbol: Scalars['String'];
  volume24Hr?: Maybe<Scalars['Float']>;
  volumeAllCurrencies?: Maybe<Scalars['Float']>;
};

export type StPortfolio = {
  __typename?: 'STPortfolio';
  portfolioCash: Scalars['Float'];
  portfolioInvested: Scalars['Float'];
};

export type StPortfolioRiskCalculations = {
  __typename?: 'STPortfolioRiskCalculations';
  date?: Maybe<Scalars['String']>;
  portfolioAlpha?: Maybe<Scalars['Float']>;
  portfolioAnnualVariancePrct?: Maybe<Scalars['Float']>;
  portfolioAnnualVolatilityPrct?: Maybe<Scalars['Float']>;
  portfolioBeta?: Maybe<Scalars['Float']>;
  portfolioEstimatedReturnPrct?: Maybe<Scalars['Float']>;
  portfolioEstimatedReturnValue?: Maybe<Scalars['Float']>;
  portfolioSharpRatio?: Maybe<Scalars['Float']>;
  portfolioVolatilityMeanPrct?: Maybe<Scalars['Float']>;
};

export type StPortfolioSnapshot = {
  __typename?: 'STPortfolioSnapshot';
  date: Scalars['String'];
  portfolioCash: Scalars['Float'];
  portfolioInvested: Scalars['Float'];
};

export type StPortfolioSnapshotStarted = {
  __typename?: 'STPortfolioSnapshotStarted';
  date: Scalars['String'];
  numberOfExecutedBuyTransactions: Scalars['Float'];
  numberOfExecutedSellTransactions: Scalars['Float'];
  portfolioCash: Scalars['Float'];
  portfolioInvested: Scalars['Float'];
  transactionFees?: Maybe<Scalars['Float']>;
};

export type StPortfolioWrapper = {
  __typename?: 'STPortfolioWrapper';
  lastPortfolioIncreaseNumber?: Maybe<Scalars['Float']>;
  lastPortfolioIncreasePrct?: Maybe<Scalars['Float']>;
  lastPortfolioSnapshot: StPortfolioSnapshot;
  lastTransactionSnapshot: StTransactionSnapshot;
  numberOfExecutedBuyTransactions: Scalars['Float'];
  numberOfExecutedSellTransactions: Scalars['Float'];
  portfolioCash: Scalars['Float'];
  transactionFees?: Maybe<Scalars['Float']>;
};

export type StRank = {
  __typename?: 'STRank';
  date: Scalars['String'];
  rankGainers: Scalars['Float'];
  rankLosers: Scalars['Float'];
  rankNumberOfTrades: Scalars['Float'];
  rankPortfolio: Scalars['Float'];
  rankProfit: Scalars['Float'];
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
  data: Scalars['Float'];
  date: Scalars['String'];
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
  alpha?: Maybe<Scalars['Float']>;
  beta?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['String']>;
  sharpRatio?: Maybe<Scalars['Float']>;
  symbol?: Maybe<Scalars['String']>;
  volatility?: Maybe<StStockRiskCalculationsVolatility>;
};

export type StStockRiskCalculationsVolatility = {
  __typename?: 'STStockRiskCalculationsVolatility';
  benchmarkYearlyReturnPrct?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['String']>;
  meanPrice?: Maybe<Scalars['Float']>;
  stdDailyPrct?: Maybe<Scalars['Float']>;
  stdDailyPrice?: Maybe<Scalars['Float']>;
  stdYearlyPrct?: Maybe<Scalars['Float']>;
  stdYearlyPrice?: Maybe<Scalars['Float']>;
  symbolYearlyPriceReturnPrct?: Maybe<Scalars['Float']>;
  volatilityPrct?: Maybe<Scalars['Float']>;
};

export type StStockSuggestion = {
  __typename?: 'STStockSuggestion';
  historicalData: Array<Scalars['Float']>;
  summary: Summary;
};

export type StStockWatchInputlistIdentifier = {
  additionalData?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type StStockWatchlist = {
  __typename?: 'STStockWatchlist';
  date?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  summaries: Array<Summary>;
  userId: Scalars['String'];
};

export type StTicket = {
  __typename?: 'STTicket';
  comments: Array<StTicketComment>;
  createdAt: Scalars['String'];
  createdBy: StUserIndetification;
  id: Scalars['String'];
  isOpen: Scalars['Boolean'];
  name: Scalars['String'];
  type: StTicketTypes;
};

export type StTicketComment = {
  __typename?: 'STTicketComment';
  comment: Scalars['String'];
  createdAt: Scalars['String'];
  createdBy: StUserIndetification;
  id: Scalars['String'];
};

export type StTicketCommentEditValues = {
  commentId: Scalars['String'];
  newComment: Scalars['String'];
  ticketId: Scalars['String'];
};

export type StTicketCreateValues = {
  message: Scalars['String'];
  name: Scalars['String'];
  type: StTicketTypes;
};

export enum StTicketTypes {
  Defect = 'DEFECT',
  Improvement = 'IMPROVEMENT'
}

export type StTransaction = {
  __typename?: 'STTransaction';
  date: Scalars['String'];
  operation: StTransactionOperationEnum;
  price: Scalars['Float'];
  return?: Maybe<Scalars['Float']>;
  returnChange?: Maybe<Scalars['Float']>;
  symbol: Scalars['String'];
  symbol_logo_url: Scalars['String'];
  transactionFees: Scalars['Float'];
  transactionId?: Maybe<Scalars['String']>;
  units: Scalars['Float'];
  user?: Maybe<StUserIndetification>;
};

export type StTransactionInput = {
  operation: StTransactionOperationEnum;
  symbol: Scalars['String'];
  symbol_logo_url: Scalars['String'];
  units: Scalars['Float'];
};

export enum StTransactionOperationEnum {
  Buy = 'BUY',
  Sell = 'SELL'
}

export type StTransactionSnapshot = {
  __typename?: 'STTransactionSnapshot';
  date: Scalars['String'];
  transactionFees?: Maybe<Scalars['Float']>;
  transactionsBuy?: Maybe<Scalars['Float']>;
  transactionsSell?: Maybe<Scalars['Float']>;
};

export type StUserAuthenticationInput = {
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  photoURL?: InputMaybe<Scalars['String']>;
  providerId?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['String']>;
};

export type StUserEditDataInput = {
  finnhubKey?: InputMaybe<Scalars['String']>;
  nickName?: InputMaybe<Scalars['String']>;
  photoURL?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type StUserGroups = {
  __typename?: 'STUserGroups';
  groupInvitationReceived: Array<StGroupAllData>;
  groupInvitationSent: Array<StGroupAllData>;
  groupMember: Array<StGroupAllData>;
  groupOwner: Array<StGroupAllData>;
};

export type StUserHistoricalData = {
  __typename?: 'STUserHistoricalData';
  bestAchievedRanks: Array<StRank>;
  portfolioSnapshots: Array<StPortfolioSnapshot>;
  resetedAccount: Array<StUserResetedAccount>;
  transactionSnapshots: Array<StTransactionSnapshot>;
  userLogs: Array<StLog>;
};

export type StUserIndetification = {
  __typename?: 'STUserIndetification';
  accountCreatedDate: Scalars['String'];
  id: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  nickName: Scalars['String'];
  photoURL: Scalars['String'];
};

export type StUserIndetificationBase = {
  __typename?: 'STUserIndetificationBase';
  accountCreatedDate: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  nickName: Scalars['String'];
  photoURL: Scalars['String'];
};

export type StUserIndetificationInformationInput = {
  accountCreatedDate: Scalars['String'];
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  nickName: Scalars['String'];
  photoURL: Scalars['String'];
};

export type StUserPrivateData = {
  __typename?: 'STUserPrivateData';
  displayName: Scalars['String'];
  email: Scalars['String'];
  finnhubKey?: Maybe<Scalars['String']>;
  geographic?: Maybe<StGeographic>;
  id?: Maybe<Scalars['String']>;
  nicknameLastChange?: Maybe<Scalars['String']>;
  providerId?: Maybe<Scalars['String']>;
  roles: Array<Maybe<Scalars['String']>>;
  status: User_Status;
  tickets: Array<StTicket>;
  tradingEnabledDate?: Maybe<Scalars['String']>;
};

export type StUserPublicData = {
  __typename?: 'STUserPublicData';
  accountCreatedDate: Scalars['String'];
  activity?: Maybe<User_Activity>;
  groups: StUserGroups;
  holdings: Array<StHolding>;
  id: Scalars['String'];
  lastSignInDate: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  nickName: Scalars['String'];
  photoURL?: Maybe<Scalars['String']>;
  portfolio: StPortfolioWrapper;
  portfolioRisk?: Maybe<StPortfolioRiskCalculations>;
  rank?: Maybe<StRank>;
  stockWatchlist: Array<StStockWatchlist>;
  topTransactions: Array<StTransaction>;
  transactionsSnippets: Array<StTransaction>;
  userHistoricalData: StUserHistoricalData;
  userPrivateData: StUserPrivateData;
};

export type StUserResetedAccount = {
  __typename?: 'STUserResetedAccount';
  date: Scalars['String'];
  portfolioTotal: Scalars['Float'];
};

export type SearchSymbol = {
  __typename?: 'SearchSymbol';
  summaries: Array<Maybe<Summary>>;
};

export type Series = {
  __typename?: 'Series';
  data: Array<Maybe<Scalars['Float']>>;
  name?: Maybe<Scalars['String']>;
};

export type StockDetails = {
  __typename?: 'StockDetails';
  allFinancialReportsQuarterly: Array<FinancialReport>;
  allFinancialReportsYearly: Array<FinancialReport>;
  analystEstimates: Array<StAnalystEstimates>;
  calculatedPredictions: StStockDetailsCalculatedPredictions;
  calculations?: Maybe<StStockDetailsCalculations>;
  companyData: CompanyData;
  companyOutlook: StfmCompanyOutlook;
  dividends?: Maybe<Dividens>;
  historicalMetrics?: Maybe<HistoricalMetrics>;
  id: Scalars['String'];
  institutionalHolders: Array<StfmHolder>;
  metric?: Maybe<Metric>;
  mutualFundHolders: Array<StfmHolderWithWeight>;
  recommendation: Array<Recommendations>;
  sectorPeers: Array<StfmCompanyQuote>;
  socialSentiment?: Maybe<StfmSocialSentiment>;
  summary: Summary;
};

export type StockDetailsFinancialReports = {
  __typename?: 'StockDetailsFinancialReports';
  allFinancialReportsQuarterly: Array<FinancialReport>;
  allFinancialReportsYearly: Array<FinancialReport>;
  id: Scalars['String'];
};

export type Summary = {
  __typename?: 'Summary';
  avgVolume: Scalars['Float'];
  beta?: Maybe<Scalars['String']>;
  ceo?: Maybe<Scalars['String']>;
  companyName: Scalars['String'];
  countryFullName?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  dividendDate?: Maybe<Scalars['String']>;
  ePSTTM?: Maybe<Scalars['Float']>;
  earningsDate?: Maybe<Scalars['String']>;
  exDividendDate?: Maybe<Scalars['String']>;
  exchangeName?: Maybe<Scalars['String']>;
  fiveTwoWeekRange?: Maybe<Scalars['String']>;
  forwardDividendRate?: Maybe<Scalars['Float']>;
  forwardDividendYield?: Maybe<Scalars['Float']>;
  forwardEPS?: Maybe<Scalars['Float']>;
  forwardPE?: Maybe<Scalars['Float']>;
  fullTimeEmployees?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  industry?: Maybe<Scalars['String']>;
  ipoDate?: Maybe<Scalars['String']>;
  isActivelyTrading?: Maybe<Scalars['Boolean']>;
  lastSplitDate?: Maybe<Scalars['String']>;
  lastSplitFactor?: Maybe<Scalars['String']>;
  logo_url?: Maybe<Scalars['String']>;
  longBusinessSummary?: Maybe<Scalars['String']>;
  marketCap: Scalars['Float'];
  marketPrice: Scalars['Float'];
  oneyTargetEst?: Maybe<Scalars['Float']>;
  pERatioTTM?: Maybe<Scalars['Float']>;
  previousClose: Scalars['Float'];
  recommendationKey?: Maybe<Scalars['String']>;
  recommendationMean?: Maybe<Scalars['Float']>;
  residance?: Maybe<SummaryResidance>;
  sandPFiveTwoWeekChange?: Maybe<Scalars['Float']>;
  sector?: Maybe<Scalars['String']>;
  sharesOutstanding: Scalars['Float'];
  shortRatio?: Maybe<Scalars['Float']>;
  symbol: Scalars['String'];
  symbolType?: Maybe<SymbolType>;
  targetEstOneyPercent?: Maybe<Scalars['Float']>;
  volume: Scalars['Float'];
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
  addressOne?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type SymbolHistoricalPrices = {
  __typename?: 'SymbolHistoricalPrices';
  livePrice: Scalars['Float'];
  period: Scalars['String'];
  price: Array<Array<Scalars['Float']>>;
  symbol: Scalars['String'];
  volume: Array<Array<Scalars['Float']>>;
};

export enum SymbolType {
  Adr = 'ADR',
  Etf = 'ETF',
  Fund = 'FUND',
  Stock = 'STOCK'
}

export enum User_Activity {
  SignedIn = 'SIGNED_IN',
  SignedOut = 'SIGNED_OUT'
}

export enum User_Roles_Enum {
  RoleAdmin = 'ROLE_ADMIN',
  RoleGroupCreate = 'ROLE_GROUP_CREATE'
}

export enum User_Status {
  Allowed = 'ALLOWED',
  Denied = 'DENIED',
  Pending = 'PENDING'
}

export enum User_Status_In_Group {
  InvitationReceived = 'INVITATION_RECEIVED',
  InvitationSent = 'INVITATION_SENT',
  Manager = 'MANAGER',
  Member = 'MEMBER',
  Owner = 'OWNER'
}

export type UpgradeDowngradeHistory = {
  __typename?: 'UpgradeDowngradeHistory';
  action?: Maybe<Scalars['String']>;
  epochGradeDate?: Maybe<Scalars['Float']>;
  firm?: Maybe<Scalars['String']>;
  fromGrade?: Maybe<Scalars['String']>;
  toGrade?: Maybe<Scalars['String']>;
};

export type Wacc = {
  __typename?: 'WACC';
  CAPM?: Maybe<Capm>;
  Rd?: Maybe<Scalars['Float']>;
  Re?: Maybe<Scalars['Float']>;
  Wd?: Maybe<Scalars['Float']>;
  We?: Maybe<Scalars['Float']>;
  result?: Maybe<Scalars['Float']>;
  taxRate?: Maybe<Scalars['Float']>;
};

export type StAdminMainInformationsFragmentFragment = { __typename?: 'STAdminMainInformations', lastStockDetailsReload?: string | null | undefined, usersRegistrated: number, usersActive: number, usersRegistrationSnippets: Array<{ __typename?: 'STUserIndetificationBase', nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string }>, usersWeeklyRegistrated: Array<{ __typename?: 'STSeriesNumber', data: number, timestamp: number }>, tickets: Array<{ __typename?: 'STTicket', id: string, name: string, type: StTicketTypes, createdAt: string, isOpen: boolean, createdBy: { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string }, comments: Array<{ __typename?: 'STTicketComment', id: string, comment: string, createdAt: string, createdBy: { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string } }> }> };

export type QueryAdminMainInformationsQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryAdminMainInformationsQuery = { __typename?: 'Query', queryAdminMainInformations?: { __typename?: 'STAdminMainInformations', lastStockDetailsReload?: string | null | undefined, usersRegistrated: number, usersActive: number, usersRegistrationSnippets: Array<{ __typename?: 'STUserIndetificationBase', nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string }>, usersWeeklyRegistrated: Array<{ __typename?: 'STSeriesNumber', data: number, timestamp: number }>, tickets: Array<{ __typename?: 'STTicket', id: string, name: string, type: StTicketTypes, createdAt: string, isOpen: boolean, createdBy: { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string }, comments: Array<{ __typename?: 'STTicketComment', id: string, comment: string, createdAt: string, createdBy: { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string } }> }> } | null | undefined };

export type ValidatorFinhubKeyValidityQueryVariables = Exact<{
  finuhbKey: Scalars['String'];
}>;


export type ValidatorFinhubKeyValidityQuery = { __typename?: 'Query', validatorFinhubKeyValidity?: boolean | null | undefined };

export type StfmHolderFragmentFragment = { __typename?: 'STFMHolder', change?: number | null | undefined, dateReported?: string | null | undefined, holder?: string | null | undefined, shares?: number | null | undefined };

export type StfmHolderWithWeightFragmentFragment = { __typename?: 'STFMHolderWithWeight', change?: number | null | undefined, dateReported?: string | null | undefined, holder?: string | null | undefined, shares?: number | null | undefined, weightPercent?: number | null | undefined };

export type StfmBalanceSheetFragmentFragment = { __typename?: 'STFMBalanceSheet', acceptedDate?: string | null | undefined, accountPayables?: number | null | undefined, accumulatedOtherComprehensiveIncomeLoss?: number | null | undefined, cashAndCashEquivalents?: number | null | undefined, cashAndShortTermInvestments?: number | null | undefined, commonStock?: number | null | undefined, date?: string | null | undefined, deferredRevenue?: number | null | undefined, deferredRevenueNonCurrent?: number | null | undefined, deferredTaxLiabilitiesNonCurrent?: number | null | undefined, fillingDate?: string | null | undefined, finalLink?: string | null | undefined, goodwill?: number | null | undefined, goodwillAndIntangibleAssets?: number | null | undefined, intangibleAssets?: number | null | undefined, inventory?: number | null | undefined, link?: string | null | undefined, longTermDebt?: number | null | undefined, longTermInvestments?: number | null | undefined, netDebt?: number | null | undefined, netReceivables?: number | null | undefined, otherAssets?: number | null | undefined, otherCurrentAssets?: number | null | undefined, otherCurrentLiabilities?: number | null | undefined, otherLiabilities?: number | null | undefined, otherNonCurrentAssets?: number | null | undefined, otherNonCurrentLiabilities?: number | null | undefined, othertotalStockholdersEquity?: number | null | undefined, period?: string | null | undefined, propertyPlantEquipmentNet?: number | null | undefined, reportedCurrency?: string | null | undefined, retainedEarnings?: number | null | undefined, shortTermDebt?: number | null | undefined, shortTermInvestments?: number | null | undefined, symbol?: string | null | undefined, taxAssets?: number | null | undefined, taxPayables?: number | null | undefined, totalAssets?: number | null | undefined, totalCurrentAssets?: number | null | undefined, totalCurrentLiabilities?: number | null | undefined, totalDebt?: number | null | undefined, totalInvestments?: number | null | undefined, totalLiabilities?: number | null | undefined, totalLiabilitiesAndStockholdersEquity?: number | null | undefined, totalNonCurrentAssets?: number | null | undefined, totalNonCurrentLiabilities?: number | null | undefined, totalStockholdersEquity?: number | null | undefined };

export type StfmCashFlowFragmentFragment = { __typename?: 'STFMCashFlow', acceptedDate?: string | null | undefined, accountsPayables?: number | null | undefined, accountsReceivables?: number | null | undefined, acquisitionsNet?: number | null | undefined, capitalExpenditure?: number | null | undefined, cashAtBeginningOfPeriod?: number | null | undefined, cashAtEndOfPeriod?: number | null | undefined, changeInWorkingCapital?: number | null | undefined, commonStockIssued?: number | null | undefined, commonStockRepurchased?: number | null | undefined, date?: string | null | undefined, debtRepayment?: number | null | undefined, deferredIncomeTax?: number | null | undefined, depreciationAndAmortization?: number | null | undefined, dividendsPaid?: number | null | undefined, effectOfForexChangesOnCash?: number | null | undefined, fillingDate?: string | null | undefined, finalLink?: string | null | undefined, freeCashFlow?: number | null | undefined, inventory?: number | null | undefined, investmentsInPropertyPlantAndEquipment?: number | null | undefined, link?: string | null | undefined, netCashProvidedByOperatingActivities?: number | null | undefined, netCashUsedForInvestingActivites?: number | null | undefined, netCashUsedProvidedByFinancingActivities?: number | null | undefined, netChangeInCash?: number | null | undefined, netIncome?: number | null | undefined, operatingCashFlow?: number | null | undefined, otherFinancingActivites?: number | null | undefined, otherInvestingActivites?: number | null | undefined, otherNonCashItems?: number | null | undefined, otherWorkingCapital?: number | null | undefined, period?: string | null | undefined, purchasesOfInvestments?: number | null | undefined, reportedCurrency?: string | null | undefined, salesMaturitiesOfInvestments?: number | null | undefined, stockBasedCompensation?: number | null | undefined, symbol?: string | null | undefined };

export type StfmIncomeStatementFragmentFragment = { __typename?: 'STFMIncomeStatement', acceptedDate?: string | null | undefined, costAndExpenses?: number | null | undefined, costOfRevenue?: number | null | undefined, date?: string | null | undefined, depreciationAndAmortization?: number | null | undefined, ebitda?: number | null | undefined, ebitdaratio?: number | null | undefined, eps?: number | null | undefined, epsdiluted?: number | null | undefined, fillingDate?: string | null | undefined, finalLink?: string | null | undefined, generalAndAdministrativeExpenses?: number | null | undefined, grossProfit?: number | null | undefined, grossProfitRatio?: number | null | undefined, incomeBeforeTax?: number | null | undefined, incomeBeforeTaxRatio?: number | null | undefined, incomeTaxExpense?: number | null | undefined, interestExpense?: number | null | undefined, link?: string | null | undefined, netIncome?: number | null | undefined, netIncomeRatio?: number | null | undefined, operatingExpenses?: number | null | undefined, operatingIncome?: number | null | undefined, operatingIncomeRatio?: number | null | undefined, otherExpenses?: number | null | undefined, period?: string | null | undefined, reportedCurrency?: string | null | undefined, researchAndDevelopmentExpenses?: number | null | undefined, revenue?: number | null | undefined, sellingAndMarketingExpenses?: number | null | undefined, sellingGeneralAndAdministrativeExpenses?: number | null | undefined, symbol?: string | null | undefined, totalOtherIncomeExpensesNet?: number | null | undefined, weightedAverageShsOut?: number | null | undefined, weightedAverageShsOutDil?: number | null | undefined };

export type StfmInsideTradeFragmentFragment = { __typename?: 'STFMInsideTrade', acquistionOrDisposition?: string | null | undefined, companyCik?: string | null | undefined, formType?: string | null | undefined, link?: string | null | undefined, price?: number | null | undefined, reportingCik?: string | null | undefined, reportingName?: string | null | undefined, securitiesOwned?: number | null | undefined, securitiesTransacted?: number | null | undefined, securityName?: string | null | undefined, symbol?: string | null | undefined, transactionDate?: string | null | undefined, transactionType?: string | null | undefined, typeOfOwner?: string | null | undefined };

export type StfmKeyExecutiveFragmentFragment = { __typename?: 'STFMKeyExecutive', currencyPay?: string | null | undefined, gender?: string | null | undefined, name?: string | null | undefined, pay?: number | null | undefined, title?: string | null | undefined };

export type StfmStockNewFragmentFragment = { __typename?: 'STFMStockNew', image?: string | null | undefined, publishedDate?: string | null | undefined, site?: string | null | undefined, symbol?: string | null | undefined, text?: string | null | undefined, title?: string | null | undefined, url?: string | null | undefined };

export type StfmStockDividendFragmentFragment = { __typename?: 'STFMStockDividend', adjDividend?: number | null | undefined, date?: string | null | undefined, declarationDate?: string | null | undefined, dividend?: number | null | undefined, label?: string | null | undefined, paymentDate?: string | null | undefined, recordDate?: string | null | undefined, symbol?: string | null | undefined };

export type StfmSplitHistoryFragmentFragment = { __typename?: 'STFMSplitHistory', date?: string | null | undefined, denominator?: number | null | undefined, label?: string | null | undefined, numerator?: number | null | undefined, symbol?: string | null | undefined };

export type StfmRatingFragmentFragment = { __typename?: 'STFMRating', date?: string | null | undefined, rating?: string | null | undefined, ratingDetailsDCFRecommendation?: string | null | undefined, ratingDetailsDCFScore?: number | null | undefined, ratingDetailsDERecommendation?: string | null | undefined, ratingDetailsDEScore?: number | null | undefined, ratingDetailsPBRecommendation?: string | null | undefined, ratingDetailsPBScore?: number | null | undefined, ratingDetailsPERecommendation?: string | null | undefined, ratingDetailsPEScore?: number | null | undefined, ratingDetailsROARecommendation?: string | null | undefined, ratingDetailsROAScore?: number | null | undefined, ratingDetailsROERecommendation?: string | null | undefined, ratingDetailsROEScore?: number | null | undefined, ratingRecommendation?: string | null | undefined, ratingScore?: number | null | undefined, symbol?: string | null | undefined };

export type StfmRatiosFragmentFragment = { __typename?: 'STFMRatios', assetTurnoverTTM?: number | null | undefined, capitalExpenditureCoverageRatioTTM?: number | null | undefined, cashConversionCycleTTM?: number | null | undefined, cashFlowCoverageRatiosTTM?: number | null | undefined, cashFlowToDebtRatioTTM?: number | null | undefined, cashPerShareTTM?: number | null | undefined, cashRatioTTM?: number | null | undefined, companyEquityMultiplierTTM?: number | null | undefined, currentRatioTTM?: number | null | undefined, daysOfInventoryOutstandingTTM?: number | null | undefined, daysOfPayablesOutstandingTTM?: number | null | undefined, daysOfSalesOutstandingTTM?: number | null | undefined, debtEquityRatioTTM?: number | null | undefined, debtRatioTTM?: number | null | undefined, dividendPaidAndCapexCoverageRatioTTM?: number | null | undefined, dividendPerShareTTM?: number | null | undefined, dividendYielPercentageTTM?: number | null | undefined, dividendYielTTM?: number | null | undefined, dividendYieldTTM?: number | null | undefined, ebitPerRevenueTTM?: number | null | undefined, ebtPerEbitTTM?: number | null | undefined, effectiveTaxRateTTM?: number | null | undefined, enterpriseValueMultipleTTM?: number | null | undefined, fixedAssetTurnoverTTM?: number | null | undefined, freeCashFlowOperatingCashFlowRatioTTM?: number | null | undefined, freeCashFlowPerShareTTM?: number | null | undefined, grossProfitMarginTTM?: number | null | undefined, interestCoverageTTM?: number | null | undefined, inventoryTurnoverTTM?: number | null | undefined, longTermDebtToCapitalizationTTM?: number | null | undefined, netIncomePerEBTTTM?: number | null | undefined, netProfitMarginTTM?: number | null | undefined, operatingCashFlowPerShareTTM?: number | null | undefined, operatingCashFlowSalesRatioTTM?: number | null | undefined, operatingCycleTTM?: number | null | undefined, operatingProfitMarginTTM?: number | null | undefined, payablesTurnoverTTM?: number | null | undefined, payoutRatioTTM?: number | null | undefined, peRatioTTM?: number | null | undefined, pegRatioTTM?: number | null | undefined, pretaxProfitMarginTTM?: number | null | undefined, priceBookValueRatioTTM?: number | null | undefined, priceCashFlowRatioTTM?: number | null | undefined, priceEarningsRatioTTM?: number | null | undefined, priceEarningsToGrowthRatioTTM?: number | null | undefined, priceFairValueTTM?: number | null | undefined, priceSalesRatioTTM?: number | null | undefined, priceToBookRatioTTM?: number | null | undefined, priceToFreeCashFlowsRatioTTM?: number | null | undefined, priceToOperatingCashFlowsRatioTTM?: number | null | undefined, priceToSalesRatioTTM?: number | null | undefined, quickRatioTTM?: number | null | undefined, receivablesTurnoverTTM?: number | null | undefined, returnOnAssetsTTM?: number | null | undefined, returnOnCapitalEmployedTTM?: number | null | undefined, returnOnEquityTTM?: number | null | undefined, shortTermCoverageRatiosTTM?: number | null | undefined, totalDebtToCapitalizationTTM?: number | null | undefined };

export type StfmCompanyQuoteFragmentFragment = { __typename?: 'STFMCompanyQuote', avgVolume?: number | null | undefined, change?: number | null | undefined, changesPercentage?: number | null | undefined, dayHigh?: number | null | undefined, dayLow?: number | null | undefined, earningsAnnouncement?: string | null | undefined, eps?: number | null | undefined, exchange?: string | null | undefined, marketCap?: number | null | undefined, name?: string | null | undefined, open?: number | null | undefined, pe?: number | null | undefined, previousClose?: number | null | undefined, price?: number | null | undefined, priceAvg200?: number | null | undefined, priceAvg50?: number | null | undefined, sharesOutstanding?: number | null | undefined, symbol?: string | null | undefined, timestamp?: number | null | undefined, volume?: number | null | undefined, yearHigh?: number | null | undefined, yearLow?: number | null | undefined, image?: string | null | undefined };

export type StfmTopStocksFragmentFragment = { __typename?: 'STFMTopStocks', ticker?: string | null | undefined, changes?: number | null | undefined, price?: string | null | undefined, changesPercentage?: string | null | undefined, companyName?: string | null | undefined };

export type StfmExchangeSectorPeFragmentFragment = { __typename?: 'STFMExchangeSectorPE', date?: string | null | undefined, sector?: string | null | undefined, exchange?: string | null | undefined, pe?: number | null | undefined };

export type StfmExchangeIndustryPeFragmentFragment = { __typename?: 'STFMExchangeIndustryPE', date?: string | null | undefined, industry?: string | null | undefined, exchange?: string | null | undefined, pe?: number | null | undefined };

export type StfmCalendarEarningsFragmentFragment = { __typename?: 'STFMCalendarEarnings', date?: string | null | undefined, symbol?: string | null | undefined, eps?: number | null | undefined, epsEstimated?: number | null | undefined, time?: string | null | undefined, revenue?: number | null | undefined, revenueEstimated?: number | null | undefined };

export type StfmCalendarIpoFragmentFragment = { __typename?: 'STFMCalendarIpo', date?: string | null | undefined, company?: string | null | undefined, symbol?: string | null | undefined, exchange?: string | null | undefined, actions?: string | null | undefined, shares?: number | null | undefined, priceRange?: string | null | undefined, marketCap?: number | null | undefined };

export type StfmCalendarEconomicFragmentFragment = { __typename?: 'STFMCalendarEconomic', event?: string | null | undefined, date?: string | null | undefined, country?: string | null | undefined, actual?: number | null | undefined, previous?: number | null | undefined, change?: number | null | undefined, changePercentage?: number | null | undefined, estimate?: number | null | undefined };

export type StfmEtfHolderFragmentFragment = { __typename?: 'STFMEtfHolder', asset?: string | null | undefined, sharesNumber?: number | null | undefined, weightPercentage?: number | null | undefined };

export type StfmEtfSectorWeightFragmentFragment = { __typename?: 'STFMEtfSectorWeight', sector?: string | null | undefined, weightPercentage?: string | null | undefined };

export type StfmEtfCountryWeightFragmentFragment = { __typename?: 'STFMEtfCountryWeight', country?: string | null | undefined, weightPercentage?: string | null | undefined };

export type StfmSectorPerformanceFragmentFragment = { __typename?: 'STFMSectorPerformance', sector?: string | null | undefined, changesPercentage?: string | null | undefined };

export type StfmSocialSentimentFragmentFragment = { __typename?: 'STFMSocialSentiment', absoluteIndex?: number | null | undefined, date?: string | null | undefined, generalPerception?: number | null | undefined, redditCommentMentions?: number | null | undefined, redditCommentSentiment?: number | null | undefined, redditPostMentions?: number | null | undefined, redditPostSentiment?: number | null | undefined, relativeIndex?: number | null | undefined, sentiment?: number | null | undefined, stocktwitsPostMentions?: number | null | undefined, stocktwitsPostSentiment?: number | null | undefined, symbol?: string | null | undefined, tweetMentions?: number | null | undefined, tweetSentiment?: number | null | undefined, yahooFinanceCommentMentions?: number | null | undefined, yahooFinanceCommentSentiment?: number | null | undefined };

export type StAnalystEstimatesFragmentFragment = { __typename?: 'STAnalystEstimates', date?: string | null | undefined, estimatedEbitAvg?: number | null | undefined, estimatedEbitHigh?: number | null | undefined, estimatedEbitLow?: number | null | undefined, estimatedEbitdaAvg?: number | null | undefined, estimatedEbitdaHigh?: number | null | undefined, estimatedEbitdaLow?: number | null | undefined, estimatedEpsAvg?: number | null | undefined, estimatedEpsHigh?: number | null | undefined, estimatedEpsLow?: number | null | undefined, estimatedNetIncomeAvg?: number | null | undefined, estimatedNetIncomeHigh?: number | null | undefined, estimatedNetIncomeLow?: number | null | undefined, estimatedRevenueAvg?: number | null | undefined, estimatedRevenueHigh?: number | null | undefined, estimatedRevenueLow?: number | null | undefined, estimatedSgaExpenseAvg?: number | null | undefined, estimatedSgaExpenseHigh?: number | null | undefined, estimatedSgaExpenseLow?: number | null | undefined, numberAnalystEstimatedRevenue?: number | null | undefined, numberAnalystsEstimatedEps?: number | null | undefined, symbol?: string | null | undefined };

export type StGroupUserFragmentFragment = { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } };

export type StGroupIdentificationDataFragment = { __typename?: 'STGroupAllData', id: string, name: string, description?: string | null | undefined, imagePath?: string | null | undefined, imageUrl?: string | null | undefined, startDate: string, endDate?: string | null | undefined, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfInvitationSent: number, numberOfInvitationReceived: number, lastUpdateDate: string, lastEditedDate: string, createdDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }>, currentAchievedRanks?: { __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string } | null | undefined };

export type StGroupAllDataWithoutHoldingsFragment = { __typename?: 'STGroupAllData', id: string, name: string, description?: string | null | undefined, imageUrl?: string | null | undefined, imagePath?: string | null | undefined, lastUpdateDate: string, lastEditedDate: string, createdDate: string, startDate: string, endDate?: string | null | undefined, isPrivate: boolean, isInfinite: boolean, isClosed: boolean, numberOfMembers: number, numberOfInvitationSent: number, numberOfInvitationReceived: number, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined }, lastTransactions: Array<{ __typename?: 'STTransaction', transactionId?: string | null | undefined, symbol: string, price: number, return?: number | null | undefined, returnChange?: number | null | undefined, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number, user?: { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string } | null | undefined }>, groupMemberData: { __typename?: 'STGroupMemberData', id: string, members: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }>, invitationSent: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }>, invitationReceived: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }> }, currentAchievedRanks?: { __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string } | null | undefined, topTransactions: Array<{ __typename?: 'STTransaction', transactionId?: string | null | undefined, symbol: string, price: number, return?: number | null | undefined, returnChange?: number | null | undefined, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number, user?: { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string } | null | undefined }>, groupHistoricalData: { __typename?: 'STGroupHistoricalData', portfolioSnapshots: Array<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, transactionSnapshots: Array<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string }>, bestAchievedRanks: Array<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }>, groupLogs: Array<{ __typename?: 'STLog', date: string, logText: string }> }, managers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }> };

export type StGroupAllDataGroupMemberDataFragment = { __typename?: 'STGroupAllData', id: string, name: string, groupMemberData: { __typename?: 'STGroupMemberData', id: string, members: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }>, holdings: Array<{ __typename?: 'STGroupHoldings', numberOfUsers: number, holding: { __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number, summary: { __typename?: 'Summary', avgVolume: number, ceo?: string | null | undefined, companyName: string, currency?: string | null | undefined, dividendDate?: string | null | undefined, ePSTTM?: number | null | undefined, earningsDate?: string | null | undefined, exDividendDate?: string | null | undefined, exchangeName?: string | null | undefined, fiveTwoWeekRange?: string | null | undefined, forwardDividendRate?: number | null | undefined, forwardDividendYield?: number | null | undefined, forwardEPS?: number | null | undefined, forwardPE?: number | null | undefined, fullTimeEmployees?: string | null | undefined, id: string, symbolType?: SymbolType | null | undefined, industry?: string | null | undefined, ipoDate?: string | null | undefined, beta?: string | null | undefined, countryFullName?: string | null | undefined, lastSplitDate?: string | null | undefined, lastSplitFactor?: string | null | undefined, logo_url?: string | null | undefined, longBusinessSummary?: string | null | undefined, marketCap: number, marketPrice: number, oneyTargetEst?: number | null | undefined, pERatioTTM?: number | null | undefined, previousClose: number, recommendationKey?: string | null | undefined, recommendationMean?: number | null | undefined, sandPFiveTwoWeekChange?: number | null | undefined, sector?: string | null | undefined, sharesOutstanding: number, shortRatio?: number | null | undefined, symbol: string, targetEstOneyPercent?: number | null | undefined, volume: number, website?: string | null | undefined, weekRangeFiveTwoMax?: number | null | undefined, weekRangeFiveTwoMin?: number | null | undefined, yearToDatePrice?: number | null | undefined, yearToDatePriceReturn?: number | null | undefined, isActivelyTrading?: boolean | null | undefined, residance?: { __typename?: 'SummaryResidance', city?: string | null | undefined, state?: string | null | undefined, country?: string | null | undefined, addressOne?: string | null | undefined, zip?: string | null | undefined } | null | undefined } } }>, invitationSent: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }>, invitationReceived: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }> } };

export type StGroupAllDataFragmentFragment = { __typename?: 'STGroupAllData', id: string, name: string, description?: string | null | undefined, imageUrl?: string | null | undefined, imagePath?: string | null | undefined, lastUpdateDate: string, lastEditedDate: string, createdDate: string, startDate: string, endDate?: string | null | undefined, isPrivate: boolean, isInfinite: boolean, isClosed: boolean, numberOfMembers: number, numberOfInvitationSent: number, numberOfInvitationReceived: number, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined }, lastTransactions: Array<{ __typename?: 'STTransaction', transactionId?: string | null | undefined, symbol: string, price: number, return?: number | null | undefined, returnChange?: number | null | undefined, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number, user?: { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string } | null | undefined }>, groupMemberData: { __typename?: 'STGroupMemberData', id: string, members: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }>, invitationSent: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }>, invitationReceived: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }>, holdings: Array<{ __typename?: 'STGroupHoldings', numberOfUsers: number, holding: { __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number, summary: { __typename?: 'Summary', avgVolume: number, ceo?: string | null | undefined, companyName: string, currency?: string | null | undefined, dividendDate?: string | null | undefined, ePSTTM?: number | null | undefined, earningsDate?: string | null | undefined, exDividendDate?: string | null | undefined, exchangeName?: string | null | undefined, fiveTwoWeekRange?: string | null | undefined, forwardDividendRate?: number | null | undefined, forwardDividendYield?: number | null | undefined, forwardEPS?: number | null | undefined, forwardPE?: number | null | undefined, fullTimeEmployees?: string | null | undefined, id: string, symbolType?: SymbolType | null | undefined, industry?: string | null | undefined, ipoDate?: string | null | undefined, beta?: string | null | undefined, countryFullName?: string | null | undefined, lastSplitDate?: string | null | undefined, lastSplitFactor?: string | null | undefined, logo_url?: string | null | undefined, longBusinessSummary?: string | null | undefined, marketCap: number, marketPrice: number, oneyTargetEst?: number | null | undefined, pERatioTTM?: number | null | undefined, previousClose: number, recommendationKey?: string | null | undefined, recommendationMean?: number | null | undefined, sandPFiveTwoWeekChange?: number | null | undefined, sector?: string | null | undefined, sharesOutstanding: number, shortRatio?: number | null | undefined, symbol: string, targetEstOneyPercent?: number | null | undefined, volume: number, website?: string | null | undefined, weekRangeFiveTwoMax?: number | null | undefined, weekRangeFiveTwoMin?: number | null | undefined, yearToDatePrice?: number | null | undefined, yearToDatePriceReturn?: number | null | undefined, isActivelyTrading?: boolean | null | undefined, residance?: { __typename?: 'SummaryResidance', city?: string | null | undefined, state?: string | null | undefined, country?: string | null | undefined, addressOne?: string | null | undefined, zip?: string | null | undefined } | null | undefined } } }> }, currentAchievedRanks?: { __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string } | null | undefined, topTransactions: Array<{ __typename?: 'STTransaction', transactionId?: string | null | undefined, symbol: string, price: number, return?: number | null | undefined, returnChange?: number | null | undefined, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number, user?: { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string } | null | undefined }>, groupHistoricalData: { __typename?: 'STGroupHistoricalData', portfolioSnapshots: Array<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, transactionSnapshots: Array<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string }>, bestAchievedRanks: Array<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }>, groupLogs: Array<{ __typename?: 'STLog', date: string, logText: string }> }, managers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }> };

export type QueryStGroupByGroupIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type QueryStGroupByGroupIdQuery = { __typename?: 'Query', querySTGroupByGroupId?: { __typename?: 'STGroupAllData', id: string, name: string, description?: string | null | undefined, imageUrl?: string | null | undefined, imagePath?: string | null | undefined, lastUpdateDate: string, lastEditedDate: string, createdDate: string, startDate: string, endDate?: string | null | undefined, isPrivate: boolean, isInfinite: boolean, isClosed: boolean, numberOfMembers: number, numberOfInvitationSent: number, numberOfInvitationReceived: number, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined }, lastTransactions: Array<{ __typename?: 'STTransaction', transactionId?: string | null | undefined, symbol: string, price: number, return?: number | null | undefined, returnChange?: number | null | undefined, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number, user?: { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string } | null | undefined }>, groupMemberData: { __typename?: 'STGroupMemberData', id: string, members: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }>, invitationSent: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }>, invitationReceived: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }>, holdings: Array<{ __typename?: 'STGroupHoldings', numberOfUsers: number, holding: { __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number, summary: { __typename?: 'Summary', avgVolume: number, ceo?: string | null | undefined, companyName: string, currency?: string | null | undefined, dividendDate?: string | null | undefined, ePSTTM?: number | null | undefined, earningsDate?: string | null | undefined, exDividendDate?: string | null | undefined, exchangeName?: string | null | undefined, fiveTwoWeekRange?: string | null | undefined, forwardDividendRate?: number | null | undefined, forwardDividendYield?: number | null | undefined, forwardEPS?: number | null | undefined, forwardPE?: number | null | undefined, fullTimeEmployees?: string | null | undefined, id: string, symbolType?: SymbolType | null | undefined, industry?: string | null | undefined, ipoDate?: string | null | undefined, beta?: string | null | undefined, countryFullName?: string | null | undefined, lastSplitDate?: string | null | undefined, lastSplitFactor?: string | null | undefined, logo_url?: string | null | undefined, longBusinessSummary?: string | null | undefined, marketCap: number, marketPrice: number, oneyTargetEst?: number | null | undefined, pERatioTTM?: number | null | undefined, previousClose: number, recommendationKey?: string | null | undefined, recommendationMean?: number | null | undefined, sandPFiveTwoWeekChange?: number | null | undefined, sector?: string | null | undefined, sharesOutstanding: number, shortRatio?: number | null | undefined, symbol: string, targetEstOneyPercent?: number | null | undefined, volume: number, website?: string | null | undefined, weekRangeFiveTwoMax?: number | null | undefined, weekRangeFiveTwoMin?: number | null | undefined, yearToDatePrice?: number | null | undefined, yearToDatePriceReturn?: number | null | undefined, isActivelyTrading?: boolean | null | undefined, residance?: { __typename?: 'SummaryResidance', city?: string | null | undefined, state?: string | null | undefined, country?: string | null | undefined, addressOne?: string | null | undefined, zip?: string | null | undefined } | null | undefined } } }> }, currentAchievedRanks?: { __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string } | null | undefined, topTransactions: Array<{ __typename?: 'STTransaction', transactionId?: string | null | undefined, symbol: string, price: number, return?: number | null | undefined, returnChange?: number | null | undefined, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number, user?: { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string } | null | undefined }>, groupHistoricalData: { __typename?: 'STGroupHistoricalData', portfolioSnapshots: Array<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, transactionSnapshots: Array<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string }>, bestAchievedRanks: Array<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }>, groupLogs: Array<{ __typename?: 'STLog', date: string, logText: string }> }, managers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }> } | null | undefined };

export type QueryStGroupByGroupIdWithoutHoldingQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type QueryStGroupByGroupIdWithoutHoldingQuery = { __typename?: 'Query', querySTGroupByGroupId?: { __typename?: 'STGroupAllData', id: string, name: string, description?: string | null | undefined, imageUrl?: string | null | undefined, imagePath?: string | null | undefined, lastUpdateDate: string, lastEditedDate: string, createdDate: string, startDate: string, endDate?: string | null | undefined, isPrivate: boolean, isInfinite: boolean, isClosed: boolean, numberOfMembers: number, numberOfInvitationSent: number, numberOfInvitationReceived: number, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined }, lastTransactions: Array<{ __typename?: 'STTransaction', transactionId?: string | null | undefined, symbol: string, price: number, return?: number | null | undefined, returnChange?: number | null | undefined, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number, user?: { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string } | null | undefined }>, groupMemberData: { __typename?: 'STGroupMemberData', id: string, members: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }>, invitationSent: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }>, invitationReceived: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }> }, currentAchievedRanks?: { __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string } | null | undefined, topTransactions: Array<{ __typename?: 'STTransaction', transactionId?: string | null | undefined, symbol: string, price: number, return?: number | null | undefined, returnChange?: number | null | undefined, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number, user?: { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string } | null | undefined }>, groupHistoricalData: { __typename?: 'STGroupHistoricalData', portfolioSnapshots: Array<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, transactionSnapshots: Array<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string }>, bestAchievedRanks: Array<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }>, groupLogs: Array<{ __typename?: 'STLog', date: string, logText: string }> }, managers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }> } | null | undefined };

export type QueryStGroupByGroupIdGroupMemberDataQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type QueryStGroupByGroupIdGroupMemberDataQuery = { __typename?: 'Query', querySTGroupByGroupId?: { __typename?: 'STGroupAllData', id: string, name: string, groupMemberData: { __typename?: 'STGroupMemberData', id: string, members: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }>, holdings: Array<{ __typename?: 'STGroupHoldings', numberOfUsers: number, holding: { __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number, summary: { __typename?: 'Summary', avgVolume: number, ceo?: string | null | undefined, companyName: string, currency?: string | null | undefined, dividendDate?: string | null | undefined, ePSTTM?: number | null | undefined, earningsDate?: string | null | undefined, exDividendDate?: string | null | undefined, exchangeName?: string | null | undefined, fiveTwoWeekRange?: string | null | undefined, forwardDividendRate?: number | null | undefined, forwardDividendYield?: number | null | undefined, forwardEPS?: number | null | undefined, forwardPE?: number | null | undefined, fullTimeEmployees?: string | null | undefined, id: string, symbolType?: SymbolType | null | undefined, industry?: string | null | undefined, ipoDate?: string | null | undefined, beta?: string | null | undefined, countryFullName?: string | null | undefined, lastSplitDate?: string | null | undefined, lastSplitFactor?: string | null | undefined, logo_url?: string | null | undefined, longBusinessSummary?: string | null | undefined, marketCap: number, marketPrice: number, oneyTargetEst?: number | null | undefined, pERatioTTM?: number | null | undefined, previousClose: number, recommendationKey?: string | null | undefined, recommendationMean?: number | null | undefined, sandPFiveTwoWeekChange?: number | null | undefined, sector?: string | null | undefined, sharesOutstanding: number, shortRatio?: number | null | undefined, symbol: string, targetEstOneyPercent?: number | null | undefined, volume: number, website?: string | null | undefined, weekRangeFiveTwoMax?: number | null | undefined, weekRangeFiveTwoMin?: number | null | undefined, yearToDatePrice?: number | null | undefined, yearToDatePriceReturn?: number | null | undefined, isActivelyTrading?: boolean | null | undefined, residance?: { __typename?: 'SummaryResidance', city?: string | null | undefined, state?: string | null | undefined, country?: string | null | undefined, addressOne?: string | null | undefined, zip?: string | null | undefined } | null | undefined } } }>, invitationSent: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }>, invitationReceived: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }> } } | null | undefined };

export type QueryStGroupByGroupNameQueryVariables = Exact<{
  groupName: Scalars['String'];
}>;


export type QueryStGroupByGroupNameQuery = { __typename?: 'Query', querySTGroupByGroupName: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null | undefined, imagePath?: string | null | undefined, imageUrl?: string | null | undefined, startDate: string, endDate?: string | null | undefined, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfInvitationSent: number, numberOfInvitationReceived: number, lastUpdateDate: string, lastEditedDate: string, createdDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }>, currentAchievedRanks?: { __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string } | null | undefined } | null | undefined> };

export type CreateGroupMutationVariables = Exact<{
  groupInput: StGroupAllDataInput;
}>;


export type CreateGroupMutation = { __typename?: 'Mutation', createGroup?: { __typename?: 'STGroupAllData', id: string, name: string, description?: string | null | undefined, imagePath?: string | null | undefined, imageUrl?: string | null | undefined, startDate: string, endDate?: string | null | undefined, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfInvitationSent: number, numberOfInvitationReceived: number, lastUpdateDate: string, lastEditedDate: string, createdDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }>, currentAchievedRanks?: { __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string } | null | undefined } | null | undefined };

export type EditGroupMutationVariables = Exact<{
  groupInput: StGroupAllDataInput;
}>;


export type EditGroupMutation = { __typename?: 'Mutation', editGroup?: boolean | null | undefined };

export type DeleteGroupMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteGroupMutation = { __typename?: 'Mutation', deleteGroup?: boolean | null | undefined };

export type ToggleInvitationRequestToGroupMutationVariables = Exact<{
  id: Scalars['String'];
  sendInvitation: Scalars['Boolean'];
}>;


export type ToggleInvitationRequestToGroupMutation = { __typename?: 'Mutation', toggleInvitationRequestToGroup?: { __typename?: 'STGroupAllData', id: string, name: string, description?: string | null | undefined, imagePath?: string | null | undefined, imageUrl?: string | null | undefined, startDate: string, endDate?: string | null | undefined, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfInvitationSent: number, numberOfInvitationReceived: number, lastUpdateDate: string, lastEditedDate: string, createdDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }>, currentAchievedRanks?: { __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string } | null | undefined } | null | undefined };

export type AnswerReceivedGroupInvitationMutationVariables = Exact<{
  id: Scalars['String'];
  accept: Scalars['Boolean'];
}>;


export type AnswerReceivedGroupInvitationMutation = { __typename?: 'Mutation', answerReceivedGroupInvitation?: { __typename?: 'STGroupAllData', id: string, name: string, description?: string | null | undefined, imagePath?: string | null | undefined, imageUrl?: string | null | undefined, startDate: string, endDate?: string | null | undefined, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfInvitationSent: number, numberOfInvitationReceived: number, lastUpdateDate: string, lastEditedDate: string, createdDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }>, currentAchievedRanks?: { __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string } | null | undefined } | null | undefined };

export type LeaveGroupMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type LeaveGroupMutation = { __typename?: 'Mutation', leaveGroup?: boolean | null | undefined };

export type RemoveMemberFromGroupMutationVariables = Exact<{
  groupId: Scalars['String'];
  removingUserId: Scalars['String'];
}>;


export type RemoveMemberFromGroupMutation = { __typename?: 'Mutation', removeMemberFromGroup?: boolean | null | undefined };

export type ToggleInviteUserIntoGroupMutationVariables = Exact<{
  inviteUser: Scalars['Boolean'];
  userId: Scalars['String'];
  groupId: Scalars['String'];
}>;


export type ToggleInviteUserIntoGroupMutation = { __typename?: 'Mutation', toggleInviteUserIntoGroup?: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } } | null | undefined };

export type ToggleUsersInvitationRequestToGroupMutationVariables = Exact<{
  acceptUser: Scalars['Boolean'];
  userId: Scalars['String'];
  groupId: Scalars['String'];
}>;


export type ToggleUsersInvitationRequestToGroupMutation = { __typename?: 'Mutation', toggleUsersInvitationRequestToGroup?: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } } | null | undefined };

export type StMarketChartDataResultCombinedFragmentFragment = { __typename?: 'STMarketChartDataResultCombined', currentDate: string, currentValue: number, data: Array<Array<number | null | undefined> | null | undefined>, documentKey: string, name: string, parentName: string, lastUpdate: string };

export type StMarketTopTableCryptoDataFragmentFragment = { __typename?: 'STMarketTopTableCryptoData', circulatingSupply?: number | null | undefined, coinImageUrl?: string | null | undefined, currency?: string | null | undefined, fiftyTwoWeekHigh?: number | null | undefined, fiftyTwoWeekLow?: number | null | undefined, marketCap: number, quoteType?: string | null | undefined, regularMarketChange: number, regularMarketChangePercent?: number | null | undefined, regularMarketClosed: number, regularMarketOpen?: number | null | undefined, regularMarketPrice: number, regularMarketVolume: number, shortName: string, symbol: string, volume24Hr?: number | null | undefined, volumeAllCurrencies?: number | null | undefined };

export type QueryStMarketHistoryOverviewQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryStMarketHistoryOverviewQuery = { __typename?: 'Query', querySTMarketHistoryOverview?: { __typename?: 'STMarketOverviewPartialData', lastUpdate?: string | null | undefined, sp500: Array<{ __typename?: 'STMarketChartDataResultCombined', currentDate: string, currentValue: number, data: Array<Array<number | null | undefined> | null | undefined>, documentKey: string, name: string, parentName: string, lastUpdate: string }>, bonds: Array<{ __typename?: 'STMarketChartDataResultCombined', currentDate: string, currentValue: number, data: Array<Array<number | null | undefined> | null | undefined>, documentKey: string, name: string, parentName: string, lastUpdate: string }>, inflation_rate: Array<{ __typename?: 'STMarketChartDataResultCombined', currentDate: string, currentValue: number, data: Array<Array<number | null | undefined> | null | undefined>, documentKey: string, name: string, parentName: string, lastUpdate: string }>, misery_index: Array<{ __typename?: 'STMarketChartDataResultCombined', currentDate: string, currentValue: number, data: Array<Array<number | null | undefined> | null | undefined>, documentKey: string, name: string, parentName: string, lastUpdate: string }>, treasury_yield: Array<{ __typename?: 'STMarketChartDataResultCombined', currentDate: string, currentValue: number, data: Array<Array<number | null | undefined> | null | undefined>, documentKey: string, name: string, parentName: string, lastUpdate: string }>, investor_sentiment: Array<{ __typename?: 'STMarketChartDataResultCombined', currentDate: string, currentValue: number, data: Array<Array<number | null | undefined> | null | undefined>, documentKey: string, name: string, parentName: string, lastUpdate: string }>, bitcoin: Array<{ __typename?: 'STMarketChartDataResultCombined', currentDate: string, currentValue: number, data: Array<Array<number | null | undefined> | null | undefined>, documentKey: string, name: string, parentName: string, lastUpdate: string }> } | null | undefined };

export type QuerySymbolHistoricalPricesQueryVariables = Exact<{
  symbol: Scalars['String'];
  period: Scalars['String'];
}>;


export type QuerySymbolHistoricalPricesQuery = { __typename?: 'Query', querySymbolHistoricalPrices?: { __typename?: 'SymbolHistoricalPrices', livePrice: number, symbol: string, period: string, price: Array<Array<number>>, volume: Array<Array<number>> } | null | undefined };

export type QueryMarketDailyOverviewQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryMarketDailyOverviewQuery = { __typename?: 'Query', queryMarketDailyOverview?: { __typename?: 'STMarketDailyOverview', id?: string | null | undefined, lastUpdate: string, lastUpdateTopStocks: string, dailyGainers: Array<{ __typename?: 'STFMCompanyQuote', avgVolume?: number | null | undefined, change?: number | null | undefined, changesPercentage?: number | null | undefined, dayHigh?: number | null | undefined, dayLow?: number | null | undefined, earningsAnnouncement?: string | null | undefined, eps?: number | null | undefined, exchange?: string | null | undefined, marketCap?: number | null | undefined, name?: string | null | undefined, open?: number | null | undefined, pe?: number | null | undefined, previousClose?: number | null | undefined, price?: number | null | undefined, priceAvg200?: number | null | undefined, priceAvg50?: number | null | undefined, sharesOutstanding?: number | null | undefined, symbol?: string | null | undefined, timestamp?: number | null | undefined, volume?: number | null | undefined, yearHigh?: number | null | undefined, yearLow?: number | null | undefined, image?: string | null | undefined }>, dailyLosers: Array<{ __typename?: 'STFMCompanyQuote', avgVolume?: number | null | undefined, change?: number | null | undefined, changesPercentage?: number | null | undefined, dayHigh?: number | null | undefined, dayLow?: number | null | undefined, earningsAnnouncement?: string | null | undefined, eps?: number | null | undefined, exchange?: string | null | undefined, marketCap?: number | null | undefined, name?: string | null | undefined, open?: number | null | undefined, pe?: number | null | undefined, previousClose?: number | null | undefined, price?: number | null | undefined, priceAvg200?: number | null | undefined, priceAvg50?: number | null | undefined, sharesOutstanding?: number | null | undefined, symbol?: string | null | undefined, timestamp?: number | null | undefined, volume?: number | null | undefined, yearHigh?: number | null | undefined, yearLow?: number | null | undefined, image?: string | null | undefined }>, mostActive: Array<{ __typename?: 'STFMCompanyQuote', avgVolume?: number | null | undefined, change?: number | null | undefined, changesPercentage?: number | null | undefined, dayHigh?: number | null | undefined, dayLow?: number | null | undefined, earningsAnnouncement?: string | null | undefined, eps?: number | null | undefined, exchange?: string | null | undefined, marketCap?: number | null | undefined, name?: string | null | undefined, open?: number | null | undefined, pe?: number | null | undefined, previousClose?: number | null | undefined, price?: number | null | undefined, priceAvg200?: number | null | undefined, priceAvg50?: number | null | undefined, sharesOutstanding?: number | null | undefined, symbol?: string | null | undefined, timestamp?: number | null | undefined, volume?: number | null | undefined, yearHigh?: number | null | undefined, yearLow?: number | null | undefined, image?: string | null | undefined }>, stockSuggestions: Array<{ __typename?: 'STStockSuggestion', historicalData: Array<number>, summary: { __typename?: 'Summary', avgVolume: number, ceo?: string | null | undefined, companyName: string, currency?: string | null | undefined, dividendDate?: string | null | undefined, ePSTTM?: number | null | undefined, earningsDate?: string | null | undefined, exDividendDate?: string | null | undefined, exchangeName?: string | null | undefined, fiveTwoWeekRange?: string | null | undefined, forwardDividendRate?: number | null | undefined, forwardDividendYield?: number | null | undefined, forwardEPS?: number | null | undefined, forwardPE?: number | null | undefined, fullTimeEmployees?: string | null | undefined, id: string, symbolType?: SymbolType | null | undefined, industry?: string | null | undefined, ipoDate?: string | null | undefined, beta?: string | null | undefined, countryFullName?: string | null | undefined, lastSplitDate?: string | null | undefined, lastSplitFactor?: string | null | undefined, logo_url?: string | null | undefined, longBusinessSummary?: string | null | undefined, marketCap: number, marketPrice: number, oneyTargetEst?: number | null | undefined, pERatioTTM?: number | null | undefined, previousClose: number, recommendationKey?: string | null | undefined, recommendationMean?: number | null | undefined, sandPFiveTwoWeekChange?: number | null | undefined, sector?: string | null | undefined, sharesOutstanding: number, shortRatio?: number | null | undefined, symbol: string, targetEstOneyPercent?: number | null | undefined, volume: number, website?: string | null | undefined, weekRangeFiveTwoMax?: number | null | undefined, weekRangeFiveTwoMin?: number | null | undefined, yearToDatePrice?: number | null | undefined, yearToDatePriceReturn?: number | null | undefined, isActivelyTrading?: boolean | null | undefined, residance?: { __typename?: 'SummaryResidance', city?: string | null | undefined, state?: string | null | undefined, country?: string | null | undefined, addressOne?: string | null | undefined, zip?: string | null | undefined } | null | undefined } }>, topCrypto: Array<{ __typename?: 'STMarketTopTableCryptoData', circulatingSupply?: number | null | undefined, coinImageUrl?: string | null | undefined, currency?: string | null | undefined, fiftyTwoWeekHigh?: number | null | undefined, fiftyTwoWeekLow?: number | null | undefined, marketCap: number, quoteType?: string | null | undefined, regularMarketChange: number, regularMarketChangePercent?: number | null | undefined, regularMarketClosed: number, regularMarketOpen?: number | null | undefined, regularMarketPrice: number, regularMarketVolume: number, shortName: string, symbol: string, volume24Hr?: number | null | undefined, volumeAllCurrencies?: number | null | undefined }>, news: Array<{ __typename?: 'STFMStockNew', image?: string | null | undefined, publishedDate?: string | null | undefined, site?: string | null | undefined, symbol?: string | null | undefined, text?: string | null | undefined, title?: string | null | undefined, url?: string | null | undefined }>, calendar: { __typename?: 'STMarketCalendar', calendarEconomic: Array<{ __typename?: 'STFMCalendarEconomic', event?: string | null | undefined, date?: string | null | undefined, country?: string | null | undefined, actual?: number | null | undefined, previous?: number | null | undefined, change?: number | null | undefined, changePercentage?: number | null | undefined, estimate?: number | null | undefined }>, calendarDividend: Array<{ __typename?: 'STFMStockDividend', adjDividend?: number | null | undefined, date?: string | null | undefined, declarationDate?: string | null | undefined, dividend?: number | null | undefined, label?: string | null | undefined, paymentDate?: string | null | undefined, recordDate?: string | null | undefined, symbol?: string | null | undefined }>, calendarSplit: Array<{ __typename?: 'STFMSplitHistory', date?: string | null | undefined, denominator?: number | null | undefined, label?: string | null | undefined, numerator?: number | null | undefined, symbol?: string | null | undefined }>, calendarIpo: Array<{ __typename?: 'STFMCalendarIpo', date?: string | null | undefined, company?: string | null | undefined, symbol?: string | null | undefined, exchange?: string | null | undefined, actions?: string | null | undefined, shares?: number | null | undefined, priceRange?: string | null | undefined, marketCap?: number | null | undefined }>, calendarEarnings: Array<{ __typename?: 'STFMCalendarEarnings', date?: string | null | undefined, symbol?: string | null | undefined, eps?: number | null | undefined, epsEstimated?: number | null | undefined, time?: string | null | undefined, revenue?: number | null | undefined, revenueEstimated?: number | null | undefined }> }, mutulaFunds: Array<{ __typename?: 'STFMCompanyQuote', avgVolume?: number | null | undefined, change?: number | null | undefined, changesPercentage?: number | null | undefined, dayHigh?: number | null | undefined, dayLow?: number | null | undefined, earningsAnnouncement?: string | null | undefined, eps?: number | null | undefined, exchange?: string | null | undefined, marketCap?: number | null | undefined, name?: string | null | undefined, open?: number | null | undefined, pe?: number | null | undefined, previousClose?: number | null | undefined, price?: number | null | undefined, priceAvg200?: number | null | undefined, priceAvg50?: number | null | undefined, sharesOutstanding?: number | null | undefined, symbol?: string | null | undefined, timestamp?: number | null | undefined, volume?: number | null | undefined, yearHigh?: number | null | undefined, yearLow?: number | null | undefined, image?: string | null | undefined }>, etfs: Array<{ __typename?: 'STFMCompanyQuote', avgVolume?: number | null | undefined, change?: number | null | undefined, changesPercentage?: number | null | undefined, dayHigh?: number | null | undefined, dayLow?: number | null | undefined, earningsAnnouncement?: string | null | undefined, eps?: number | null | undefined, exchange?: string | null | undefined, marketCap?: number | null | undefined, name?: string | null | undefined, open?: number | null | undefined, pe?: number | null | undefined, previousClose?: number | null | undefined, price?: number | null | undefined, priceAvg200?: number | null | undefined, priceAvg50?: number | null | undefined, sharesOutstanding?: number | null | undefined, symbol?: string | null | undefined, timestamp?: number | null | undefined, volume?: number | null | undefined, yearHigh?: number | null | undefined, yearLow?: number | null | undefined, image?: string | null | undefined }>, commodities: Array<{ __typename?: 'STFMCompanyQuote', avgVolume?: number | null | undefined, change?: number | null | undefined, changesPercentage?: number | null | undefined, dayHigh?: number | null | undefined, dayLow?: number | null | undefined, earningsAnnouncement?: string | null | undefined, eps?: number | null | undefined, exchange?: string | null | undefined, marketCap?: number | null | undefined, name?: string | null | undefined, open?: number | null | undefined, pe?: number | null | undefined, previousClose?: number | null | undefined, price?: number | null | undefined, priceAvg200?: number | null | undefined, priceAvg50?: number | null | undefined, sharesOutstanding?: number | null | undefined, symbol?: string | null | undefined, timestamp?: number | null | undefined, volume?: number | null | undefined, yearHigh?: number | null | undefined, yearLow?: number | null | undefined, image?: string | null | undefined }>, exchange: { __typename?: 'STMarketExchange', id?: string | null | undefined, exchangeIndustryPE: Array<{ __typename?: 'STFMExchangeIndustryPE', date?: string | null | undefined, industry?: string | null | undefined, exchange?: string | null | undefined, pe?: number | null | undefined }>, exchangeSectorPE: Array<{ __typename?: 'STFMExchangeSectorPE', date?: string | null | undefined, sector?: string | null | undefined, exchange?: string | null | undefined, pe?: number | null | undefined }> }, sectorPerformance: Array<{ __typename?: 'STFMSectorPerformance', sector?: string | null | undefined, changesPercentage?: string | null | undefined }>, stockScreener: Array<{ __typename?: 'STFMStockScreenerResult', symbol: string, companyName: string, marketCap: number, sector?: string | null | undefined, industry?: string | null | undefined, beta?: number | null | undefined, price?: number | null | undefined, lastAnnualDividend?: number | null | undefined, volume: number, exchange?: string | null | undefined, exchangeShortName?: string | null | undefined, country?: string | null | undefined, isEtf?: boolean | null | undefined, isActivelyTrading?: boolean | null | undefined, companyQuote?: { __typename?: 'STFMCompanyQuote', avgVolume?: number | null | undefined, change?: number | null | undefined, changesPercentage?: number | null | undefined, dayHigh?: number | null | undefined, dayLow?: number | null | undefined, earningsAnnouncement?: string | null | undefined, eps?: number | null | undefined, exchange?: string | null | undefined, marketCap?: number | null | undefined, name?: string | null | undefined, open?: number | null | undefined, pe?: number | null | undefined, previousClose?: number | null | undefined, price?: number | null | undefined, priceAvg200?: number | null | undefined, priceAvg50?: number | null | undefined, sharesOutstanding?: number | null | undefined, symbol?: string | null | undefined, timestamp?: number | null | undefined, volume?: number | null | undefined, yearHigh?: number | null | undefined, yearLow?: number | null | undefined, image?: string | null | undefined } | null | undefined }> } | null | undefined };

export type QueryEtfDocumentQueryVariables = Exact<{
  etfName: Scalars['String'];
}>;


export type QueryEtfDocumentQuery = { __typename?: 'Query', queryEtfDocument?: { __typename?: 'STMarketEtfDocument', id?: string | null | undefined, lastUpdate?: string | null | undefined, etfHolders: Array<{ __typename?: 'STFMEtfHolder', asset?: string | null | undefined, sharesNumber?: number | null | undefined, weightPercentage?: number | null | undefined }>, etfSectorWeight: Array<{ __typename?: 'STFMEtfSectorWeight', sector?: string | null | undefined, weightPercentage?: string | null | undefined }>, etfCountryWeight: Array<{ __typename?: 'STFMEtfCountryWeight', country?: string | null | undefined, weightPercentage?: string | null | undefined }> } | null | undefined };

export type QueryStMarketAllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryStMarketAllCategoriesQuery = { __typename?: 'Query', queryStMarketAllCategories?: { __typename?: 'STMarketDatasetKeyCategories', categories: Array<{ __typename?: 'STMarketDatasetKeyCategory', name: string, data: Array<{ __typename?: 'STMarketDatasetKey', documentKey: string, name: string }> }> } | null | undefined };

export type QueryStMarketDataQueryVariables = Exact<{
  key: Scalars['String'];
}>;


export type QueryStMarketDataQuery = { __typename?: 'Query', queryStMarketData?: { __typename?: 'STMarketChartDataResultCombined', currentDate: string, currentValue: number, data: Array<Array<number | null | undefined> | null | undefined>, documentKey: string, name: string, parentName: string, lastUpdate: string } | null | undefined };

export type QueryStockScreenerQueryVariables = Exact<{
  stockScreenerInput: StfmStockScreenerInput;
  offset: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type QueryStockScreenerQuery = { __typename?: 'Query', queryStockScreener?: { __typename?: 'STFMStockScreenerResultWrapper', found?: number | null | undefined, offset?: number | null | undefined, limit?: number | null | undefined, result?: Array<{ __typename?: 'STFMStockScreenerResult', symbol: string, companyName: string, marketCap: number, sector?: string | null | undefined, industry?: string | null | undefined, beta?: number | null | undefined, price?: number | null | undefined, lastAnnualDividend?: number | null | undefined, volume: number, exchange?: string | null | undefined, exchangeShortName?: string | null | undefined, country?: string | null | undefined, isEtf?: boolean | null | undefined, isActivelyTrading?: boolean | null | undefined, companyQuote?: { __typename?: 'STFMCompanyQuote', avgVolume?: number | null | undefined, change?: number | null | undefined, changesPercentage?: number | null | undefined, dayHigh?: number | null | undefined, dayLow?: number | null | undefined, earningsAnnouncement?: string | null | undefined, eps?: number | null | undefined, exchange?: string | null | undefined, marketCap?: number | null | undefined, name?: string | null | undefined, open?: number | null | undefined, pe?: number | null | undefined, previousClose?: number | null | undefined, price?: number | null | undefined, priceAvg200?: number | null | undefined, priceAvg50?: number | null | undefined, sharesOutstanding?: number | null | undefined, symbol?: string | null | undefined, timestamp?: number | null | undefined, volume?: number | null | undefined, yearHigh?: number | null | undefined, yearLow?: number | null | undefined, image?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type StPortfolioFragmentFragment = { __typename?: 'STPortfolio', portfolioInvested: number, portfolioCash: number };

export type StPortfolioSnapshotFragmentFragment = { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string };

export type StPortfolioWrapperFragmentFragment = { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } };

export type StPortfolioSnapshotStartedFragmentFragment = { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined };

export type StPortfolioRiskCalculationsFragmentFragment = { __typename?: 'STPortfolioRiskCalculations', date?: string | null | undefined, portfolioAlpha?: number | null | undefined, portfolioAnnualVariancePrct?: number | null | undefined, portfolioAnnualVolatilityPrct?: number | null | undefined, portfolioBeta?: number | null | undefined, portfolioEstimatedReturnPrct?: number | null | undefined, portfolioEstimatedReturnValue?: number | null | undefined, portfolioSharpRatio?: number | null | undefined, portfolioVolatilityMeanPrct?: number | null | undefined };

export type StRankFragmentFragment = { __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string };

export type StLogsFragmentFragment = { __typename?: 'STLog', date: string, logText: string };

export type SummaryResidanceFragmentFragment = { __typename?: 'SummaryResidance', city?: string | null | undefined, state?: string | null | undefined, country?: string | null | undefined, addressOne?: string | null | undefined, zip?: string | null | undefined };

export type StockSummaryFragmentFragment = { __typename?: 'Summary', avgVolume: number, ceo?: string | null | undefined, companyName: string, currency?: string | null | undefined, dividendDate?: string | null | undefined, ePSTTM?: number | null | undefined, earningsDate?: string | null | undefined, exDividendDate?: string | null | undefined, exchangeName?: string | null | undefined, fiveTwoWeekRange?: string | null | undefined, forwardDividendRate?: number | null | undefined, forwardDividendYield?: number | null | undefined, forwardEPS?: number | null | undefined, forwardPE?: number | null | undefined, fullTimeEmployees?: string | null | undefined, id: string, symbolType?: SymbolType | null | undefined, industry?: string | null | undefined, ipoDate?: string | null | undefined, beta?: string | null | undefined, countryFullName?: string | null | undefined, lastSplitDate?: string | null | undefined, lastSplitFactor?: string | null | undefined, logo_url?: string | null | undefined, longBusinessSummary?: string | null | undefined, marketCap: number, marketPrice: number, oneyTargetEst?: number | null | undefined, pERatioTTM?: number | null | undefined, previousClose: number, recommendationKey?: string | null | undefined, recommendationMean?: number | null | undefined, sandPFiveTwoWeekChange?: number | null | undefined, sector?: string | null | undefined, sharesOutstanding: number, shortRatio?: number | null | undefined, symbol: string, targetEstOneyPercent?: number | null | undefined, volume: number, website?: string | null | undefined, weekRangeFiveTwoMax?: number | null | undefined, weekRangeFiveTwoMin?: number | null | undefined, yearToDatePrice?: number | null | undefined, yearToDatePriceReturn?: number | null | undefined, isActivelyTrading?: boolean | null | undefined, residance?: { __typename?: 'SummaryResidance', city?: string | null | undefined, state?: string | null | undefined, country?: string | null | undefined, addressOne?: string | null | undefined, zip?: string | null | undefined } | null | undefined };

export type FinancialReportStatementDataFragmentFragment = { __typename?: 'FinancialReportStatementData', concept?: string | null | undefined, label?: string | null | undefined, unit?: string | null | undefined, value?: number | null | undefined };

export type FinancialReportFragmentFragment = { __typename?: 'FinancialReport', acceptedDate?: string | null | undefined, accessNumber?: string | null | undefined, cik?: string | null | undefined, endDate?: string | null | undefined, filedDate?: string | null | undefined, form?: string | null | undefined, quarter?: number | null | undefined, startDate?: string | null | undefined, symbol?: string | null | undefined, year?: number | null | undefined, report?: { __typename?: 'FinancialReportStatement', bs: Array<{ __typename?: 'FinancialReportStatementData', concept?: string | null | undefined, label?: string | null | undefined, unit?: string | null | undefined, value?: number | null | undefined } | null | undefined>, cf: Array<{ __typename?: 'FinancialReportStatementData', concept?: string | null | undefined, label?: string | null | undefined, unit?: string | null | undefined, value?: number | null | undefined } | null | undefined>, ic: Array<{ __typename?: 'FinancialReportStatementData', concept?: string | null | undefined, label?: string | null | undefined, unit?: string | null | undefined, value?: number | null | undefined } | null | undefined> } | null | undefined };

export type RecommendationFragmentFragment = { __typename?: 'Recommendations', buy?: number | null | undefined, hold?: number | null | undefined, period?: string | null | undefined, sell?: number | null | undefined, strongBuy?: number | null | undefined, strongSell?: number | null | undefined, symbol?: string | null | undefined };

export type NewsArticleFragmentFragment = { __typename?: 'NewsArticle', datetime?: number | null | undefined, headline?: string | null | undefined, image?: string | null | undefined, sourceName?: string | null | undefined, summary?: string | null | undefined, url?: string | null | undefined };

export type CalculationFragmentFragment = { __typename?: 'Calculation', avg?: number | null | undefined, max?: number | null | undefined, min?: number | null | undefined };

export type EsgScoreFragmentFragment = { __typename?: 'EsgScores', totalEsg?: number | null | undefined, environmentScore?: number | null | undefined, governanceScore?: number | null | undefined, highestControversy?: number | null | undefined, esgPerformance?: string | null | undefined, socialScore?: number | null | undefined, peerCount?: number | null | undefined, percentile?: number | null | undefined, peerGroup?: string | null | undefined, relatedControversy?: Array<string | null | undefined> | null | undefined, peerEnvironmentPerformance?: { __typename?: 'Calculation', avg?: number | null | undefined, max?: number | null | undefined, min?: number | null | undefined } | null | undefined, peerEsgScorePerformance?: { __typename?: 'Calculation', avg?: number | null | undefined, max?: number | null | undefined, min?: number | null | undefined } | null | undefined, peerGovernancePerformance?: { __typename?: 'Calculation', avg?: number | null | undefined, max?: number | null | undefined, min?: number | null | undefined } | null | undefined, peerHighestControversyPerformance?: { __typename?: 'Calculation', avg?: number | null | undefined, max?: number | null | undefined, min?: number | null | undefined } | null | undefined, peerSocialPerformance?: { __typename?: 'Calculation', avg?: number | null | undefined, max?: number | null | undefined, min?: number | null | undefined } | null | undefined };

export type DefaultKeyStatisticsFragmentFragment = { __typename?: 'DefaultKeyStatistics', bookValue?: number | null | undefined, dateShortInterest?: number | null | undefined, earningsQuarterlyGrowth?: number | null | undefined, enterpriseToEbitda?: number | null | undefined, enterpriseToRevenue?: number | null | undefined, enterpriseValue?: number | null | undefined, fiveYearAverageReturn?: number | null | undefined, floatShares?: number | null | undefined, forwardEps?: number | null | undefined, forwardPE?: number | null | undefined, heldPercentInsiders?: number | null | undefined, heldPercentInstitutions?: number | null | undefined, lastFiscalYearEnd?: number | null | undefined, lastSplitDate?: number | null | undefined, lastSplitFactor?: string | null | undefined, mostRecentQuarter?: number | null | undefined, netIncomeToCommon?: number | null | undefined, nextFiscalYearEnd?: number | null | undefined, pegRatio?: number | null | undefined, priceHint?: number | null | undefined, priceToBook?: number | null | undefined, profitMargins?: number | null | undefined, sharesOutstanding: number, sharesPercentSharesOut?: number | null | undefined, sharesShort?: number | null | undefined, sharesShortPreviousMonthDate?: number | null | undefined, sharesShortPriorMonth?: number | null | undefined, shortPercentOfFloat?: number | null | undefined, shortRatio?: number | null | undefined, trailingEps?: number | null | undefined };

export type FinancialDataFragmentFragment = { __typename?: 'FinancialData', currentPrice?: number | null | undefined, currentRatio?: number | null | undefined, debtToEquity?: number | null | undefined, earningsGrowth?: number | null | undefined, ebitda?: number | null | undefined, ebitdaMargins?: number | null | undefined, financialCurrency?: string | null | undefined, freeCashflow?: number | null | undefined, grossMargins?: number | null | undefined, grossProfits?: number | null | undefined, numberOfAnalystOpinions?: number | null | undefined, operatingCashflow?: number | null | undefined, operatingMargins?: number | null | undefined, profitMargins?: number | null | undefined, quickRatio?: number | null | undefined, recommendationKey?: string | null | undefined, recommendationMean?: number | null | undefined, returnOnAssets?: number | null | undefined, returnOnEquity?: number | null | undefined, revenueGrowth?: number | null | undefined, revenuePerShare?: number | null | undefined, targetHighPrice?: number | null | undefined, targetLowPrice?: number | null | undefined, targetMeanPrice?: number | null | undefined, targetMedianPrice?: number | null | undefined, totalCash?: number | null | undefined, totalCashPerShare?: number | null | undefined, totalDebt?: number | null | undefined, totalRevenue?: number | null | undefined };

export type MetricFragmentFragment = { __typename?: 'Metric', fiveDayPriceReturnDaily?: number | null | undefined, fiveTwoWeekHigh?: number | null | undefined, fiveTwoWeekHighDate?: string | null | undefined, fiveTwoWeekLow?: number | null | undefined, fiveTwoWeekLowDate?: string | null | undefined, fiveTwoWeekPriceReturnDaily?: number | null | undefined, oneDayAverageTradingVolume?: number | null | undefined, oneThreeWeekPriceReturnDaily?: number | null | undefined, threeMonthAverageTradingVolume?: number | null | undefined, twoSixWeekPriceReturnDaily?: number | null | undefined, assetTurnoverAnnual?: number | null | undefined, assetTurnoverTTM?: number | null | undefined, beta?: number | null | undefined, bookValuePerShareAnnual?: number | null | undefined, bookValuePerShareQuarterly?: number | null | undefined, bookValueShareGrowthFiveY?: number | null | undefined, capitalSpendingGrowthFiveY?: number | null | undefined, cashFlowPerShareAnnual?: number | null | undefined, cashFlowPerShareTTM?: number | null | undefined, cashPerSharePerShareAnnual?: number | null | undefined, cashPerSharePerShareQuarterly?: number | null | undefined, currentEvfreeCashFlowAnnual?: number | null | undefined, currentEvfreeCashFlowTTM?: number | null | undefined, currentRatioAnnual?: number | null | undefined, currentRatioQuarterly?: number | null | undefined, ebitdPerShareTTM?: number | null | undefined, ebitdaCagrFiveY?: number | null | undefined, ebitdaInterimCagrFiveY?: number | null | undefined, epsBasicExclExtraItemsAnnual?: number | null | undefined, epsBasicExclExtraItemsTTM?: number | null | undefined, epsExclExtraItemsAnnual?: number | null | undefined, epsExclExtraItemsTTM?: number | null | undefined, epsGrowthFiveY?: number | null | undefined, epsGrowthQuarterlyYoy?: number | null | undefined, epsGrowthTTMYoy?: number | null | undefined, epsGrowthThreeY?: number | null | undefined, epsInclExtraItemsAnnual?: number | null | undefined, epsInclExtraItemsTTM?: number | null | undefined, epsNormalizedAnnual?: number | null | undefined, focfCagrFiveY?: number | null | undefined, freeCashFlowAnnual?: number | null | undefined, freeCashFlowPerShareTTM?: number | null | undefined, freeCashFlowTTM?: number | null | undefined, freeOperatingCashFlowrevenueFiveY?: number | null | undefined, freeOperatingCashFlowrevenueTTM?: number | null | undefined, grossMarginAnnual?: number | null | undefined, grossMarginFiveY?: number | null | undefined, grossMarginTTM?: number | null | undefined, inventoryTurnoverAnnual?: number | null | undefined, inventoryTurnoverTTM?: number | null | undefined, longTermDebtequityAnnual?: number | null | undefined, longTermDebtequityQuarterly?: number | null | undefined, marketCapitalization?: number | null | undefined, monthToDatePriceReturnDaily?: number | null | undefined, netDebtAnnual?: number | null | undefined, netDebtInterim?: number | null | undefined, netIncomeEmployeeAnnual?: number | null | undefined, netIncomeEmployeeTTM?: number | null | undefined, netInterestCoverageAnnual?: number | null | undefined, netInterestCoverageTTM?: number | null | undefined, netMarginGrowthFiveY?: number | null | undefined, netProfitMarginAnnual?: number | null | undefined, netProfitMarginFiveY?: number | null | undefined, netProfitMarginTTM?: number | null | undefined, operatingMarginAnnual?: number | null | undefined, operatingMarginFiveY?: number | null | undefined, operatingMarginTTM?: number | null | undefined, payoutRatioAnnual?: number | null | undefined, payoutRatioTTM?: number | null | undefined, pbAnnual?: number | null | undefined, pbQuarterly?: number | null | undefined, pcfShareTTM?: number | null | undefined, peBasicExclExtraTTM?: number | null | undefined, peExclExtraAnnual?: number | null | undefined, peExclExtraHighTTM?: number | null | undefined, peExclExtraTTM?: number | null | undefined, peExclLowTTM?: number | null | undefined, peInclExtraTTM?: number | null | undefined, peNormalizedAnnual?: number | null | undefined, pfcfShareAnnual?: number | null | undefined, pfcfShareTTM?: number | null | undefined, pretaxMarginAnnual?: number | null | undefined, pretaxMarginFiveY?: number | null | undefined, pretaxMarginTTM?: number | null | undefined, priceRelativeToSPFiveFiveTwoWeek?: number | null | undefined, priceRelativeToSPFiveFourWeek?: number | null | undefined, priceRelativeToSPFiveOneThreeWeek?: number | null | undefined, priceRelativeToSPFiveTwoSixWeek?: number | null | undefined, priceRelativeToSPFiveYtd?: number | null | undefined, psAnnual?: number | null | undefined, psTTM?: number | null | undefined, ptbvAnnual?: number | null | undefined, ptbvQuarterly?: number | null | undefined, quickRatioAnnual?: number | null | undefined, quickRatioQuarterly?: number | null | undefined, receivablesTurnoverAnnual?: number | null | undefined, receivablesTurnoverTTM?: number | null | undefined, revenueEmployeeAnnual?: number | null | undefined, revenueEmployeeTTM?: number | null | undefined, revenueGrowthFiveY?: number | null | undefined, revenueGrowthQuarterlyYoy?: number | null | undefined, revenueGrowthTTMYoy?: number | null | undefined, revenueGrowthThreeY?: number | null | undefined, revenuePerShareAnnual?: number | null | undefined, revenuePerShareTTM?: number | null | undefined, revenueShareGrowthFiveY?: number | null | undefined, roaRfy?: number | null | undefined, roaaFiveY?: number | null | undefined, roaeFiveY?: number | null | undefined, roaeTTM?: number | null | undefined, roeRfy?: number | null | undefined, roeTTM?: number | null | undefined, roiAnnual?: number | null | undefined, roiFiveY?: number | null | undefined, roiTTM?: number | null | undefined, tangibleBookValuePerShareAnnual?: number | null | undefined, tangibleBookValuePerShareQuarterly?: number | null | undefined, tbvCagrFiveY?: number | null | undefined, totalDebtCagrFiveY?: number | null | undefined, totalDebttotalEquityAnnual?: number | null | undefined, totalDebttotalEquityQuarterly?: number | null | undefined, yearToDatePriceReturnDaily?: number | null | undefined };

export type DividensFragmentFragment = { __typename?: 'Dividens', currentDividendYieldTTM?: number | null | undefined, dividendGrowthRateFiveY?: number | null | undefined, dividendPerShareAnnual?: number | null | undefined, dividendPerShareFiveY?: number | null | undefined, dividendYieldFiveY?: number | null | undefined, dividendYieldIndicatedAnnual?: number | null | undefined, dividendPayoutRatioTTM?: number | null | undefined, dividendsPerShareTTM?: number | null | undefined, exDividendDate?: string | null | undefined, trailingAnnualDividendRate?: string | null | undefined, trailingAnnualDividendYield?: string | null | undefined, forwardDividendYield?: string | null | undefined };

export type EarningsChartFragmentFragment = { __typename?: 'EarningsChart', currentQuarterEstimate: number, currentQuarterEstimateDate: string, currentQuarterEstimateYear: number, earningsDate: Array<number>, quarterly: Array<{ __typename?: 'EarningsChartData', actual?: number | null | undefined, date: string, estimate: number }> };

export type FinancialChartDataFragmentFragment = { __typename?: 'FinancialsChartData', categories: Array<string>, series: Array<{ __typename?: 'Series', data: Array<number | null | undefined>, name?: string | null | undefined }> };

export type EarningsFragmentFragment = { __typename?: 'Earnings', financialCurrency: string, earningsChart: { __typename?: 'EarningsChart', currentQuarterEstimate: number, currentQuarterEstimateDate: string, currentQuarterEstimateYear: number, earningsDate: Array<number>, quarterly: Array<{ __typename?: 'EarningsChartData', actual?: number | null | undefined, date: string, estimate: number }> }, financialsChart: { __typename?: 'FinancialsChart', quarterly?: { __typename?: 'FinancialsChartData', categories: Array<string>, series: Array<{ __typename?: 'Series', data: Array<number | null | undefined>, name?: string | null | undefined }> } | null | undefined, yearly?: { __typename?: 'FinancialsChartData', categories: Array<string>, series: Array<{ __typename?: 'Series', data: Array<number | null | undefined>, name?: string | null | undefined }> } | null | undefined } };

export type HistoricalMetricsDataFragmentFragment = { __typename?: 'HistoricalMetricsData', name?: string | null | undefined, dates: Array<string>, data: Array<number> };

export type QueryStockDetailsQueryVariables = Exact<{
  symbol: Scalars['String'];
  reload?: InputMaybe<Scalars['Boolean']>;
}>;


export type QueryStockDetailsQuery = { __typename?: 'Query', queryStockDetails?: { __typename?: 'StockDetails', id: string, recommendation: Array<{ __typename?: 'Recommendations', buy?: number | null | undefined, hold?: number | null | undefined, period?: string | null | undefined, sell?: number | null | undefined, strongBuy?: number | null | undefined, strongSell?: number | null | undefined, symbol?: string | null | undefined }>, companyData: { __typename?: 'CompanyData', defaultKeyStatistics?: { __typename?: 'DefaultKeyStatistics', bookValue?: number | null | undefined, dateShortInterest?: number | null | undefined, earningsQuarterlyGrowth?: number | null | undefined, enterpriseToEbitda?: number | null | undefined, enterpriseToRevenue?: number | null | undefined, enterpriseValue?: number | null | undefined, fiveYearAverageReturn?: number | null | undefined, floatShares?: number | null | undefined, forwardEps?: number | null | undefined, forwardPE?: number | null | undefined, heldPercentInsiders?: number | null | undefined, heldPercentInstitutions?: number | null | undefined, lastFiscalYearEnd?: number | null | undefined, lastSplitDate?: number | null | undefined, lastSplitFactor?: string | null | undefined, mostRecentQuarter?: number | null | undefined, netIncomeToCommon?: number | null | undefined, nextFiscalYearEnd?: number | null | undefined, pegRatio?: number | null | undefined, priceHint?: number | null | undefined, priceToBook?: number | null | undefined, profitMargins?: number | null | undefined, sharesOutstanding: number, sharesPercentSharesOut?: number | null | undefined, sharesShort?: number | null | undefined, sharesShortPreviousMonthDate?: number | null | undefined, sharesShortPriorMonth?: number | null | undefined, shortPercentOfFloat?: number | null | undefined, shortRatio?: number | null | undefined, trailingEps?: number | null | undefined } | null | undefined, earnings?: { __typename?: 'Earnings', financialCurrency: string, earningsChart: { __typename?: 'EarningsChart', currentQuarterEstimate: number, currentQuarterEstimateDate: string, currentQuarterEstimateYear: number, earningsDate: Array<number>, quarterly: Array<{ __typename?: 'EarningsChartData', actual?: number | null | undefined, date: string, estimate: number }> }, financialsChart: { __typename?: 'FinancialsChart', quarterly?: { __typename?: 'FinancialsChartData', categories: Array<string>, series: Array<{ __typename?: 'Series', data: Array<number | null | undefined>, name?: string | null | undefined }> } | null | undefined, yearly?: { __typename?: 'FinancialsChartData', categories: Array<string>, series: Array<{ __typename?: 'Series', data: Array<number | null | undefined>, name?: string | null | undefined }> } | null | undefined } } | null | undefined, financialData?: { __typename?: 'FinancialData', currentPrice?: number | null | undefined, currentRatio?: number | null | undefined, debtToEquity?: number | null | undefined, earningsGrowth?: number | null | undefined, ebitda?: number | null | undefined, ebitdaMargins?: number | null | undefined, financialCurrency?: string | null | undefined, freeCashflow?: number | null | undefined, grossMargins?: number | null | undefined, grossProfits?: number | null | undefined, numberOfAnalystOpinions?: number | null | undefined, operatingCashflow?: number | null | undefined, operatingMargins?: number | null | undefined, profitMargins?: number | null | undefined, quickRatio?: number | null | undefined, recommendationKey?: string | null | undefined, recommendationMean?: number | null | undefined, returnOnAssets?: number | null | undefined, returnOnEquity?: number | null | undefined, revenueGrowth?: number | null | undefined, revenuePerShare?: number | null | undefined, targetHighPrice?: number | null | undefined, targetLowPrice?: number | null | undefined, targetMeanPrice?: number | null | undefined, targetMedianPrice?: number | null | undefined, totalCash?: number | null | undefined, totalCashPerShare?: number | null | undefined, totalDebt?: number | null | undefined, totalRevenue?: number | null | undefined } | null | undefined, pageViews?: { __typename?: 'PageViews', longTermTrend?: string | null | undefined, midTermTrend?: string | null | undefined, shortTermTrend?: string | null | undefined } | null | undefined, upgradeDowngradeHistory: Array<{ __typename?: 'UpgradeDowngradeHistory', action?: string | null | undefined, epochGradeDate?: number | null | undefined, firm?: string | null | undefined, fromGrade?: string | null | undefined, toGrade?: string | null | undefined }>, esgScores?: { __typename?: 'EsgScores', totalEsg?: number | null | undefined, environmentScore?: number | null | undefined, governanceScore?: number | null | undefined, highestControversy?: number | null | undefined, esgPerformance?: string | null | undefined, socialScore?: number | null | undefined, peerCount?: number | null | undefined, percentile?: number | null | undefined, peerGroup?: string | null | undefined, relatedControversy?: Array<string | null | undefined> | null | undefined, peerEnvironmentPerformance?: { __typename?: 'Calculation', avg?: number | null | undefined, max?: number | null | undefined, min?: number | null | undefined } | null | undefined, peerEsgScorePerformance?: { __typename?: 'Calculation', avg?: number | null | undefined, max?: number | null | undefined, min?: number | null | undefined } | null | undefined, peerGovernancePerformance?: { __typename?: 'Calculation', avg?: number | null | undefined, max?: number | null | undefined, min?: number | null | undefined } | null | undefined, peerHighestControversyPerformance?: { __typename?: 'Calculation', avg?: number | null | undefined, max?: number | null | undefined, min?: number | null | undefined } | null | undefined, peerSocialPerformance?: { __typename?: 'Calculation', avg?: number | null | undefined, max?: number | null | undefined, min?: number | null | undefined } | null | undefined } | null | undefined }, summary: { __typename?: 'Summary', avgVolume: number, ceo?: string | null | undefined, companyName: string, currency?: string | null | undefined, dividendDate?: string | null | undefined, ePSTTM?: number | null | undefined, earningsDate?: string | null | undefined, exDividendDate?: string | null | undefined, exchangeName?: string | null | undefined, fiveTwoWeekRange?: string | null | undefined, forwardDividendRate?: number | null | undefined, forwardDividendYield?: number | null | undefined, forwardEPS?: number | null | undefined, forwardPE?: number | null | undefined, fullTimeEmployees?: string | null | undefined, id: string, symbolType?: SymbolType | null | undefined, industry?: string | null | undefined, ipoDate?: string | null | undefined, beta?: string | null | undefined, countryFullName?: string | null | undefined, lastSplitDate?: string | null | undefined, lastSplitFactor?: string | null | undefined, logo_url?: string | null | undefined, longBusinessSummary?: string | null | undefined, marketCap: number, marketPrice: number, oneyTargetEst?: number | null | undefined, pERatioTTM?: number | null | undefined, previousClose: number, recommendationKey?: string | null | undefined, recommendationMean?: number | null | undefined, sandPFiveTwoWeekChange?: number | null | undefined, sector?: string | null | undefined, sharesOutstanding: number, shortRatio?: number | null | undefined, symbol: string, targetEstOneyPercent?: number | null | undefined, volume: number, website?: string | null | undefined, weekRangeFiveTwoMax?: number | null | undefined, weekRangeFiveTwoMin?: number | null | undefined, yearToDatePrice?: number | null | undefined, yearToDatePriceReturn?: number | null | undefined, isActivelyTrading?: boolean | null | undefined, residance?: { __typename?: 'SummaryResidance', city?: string | null | undefined, state?: string | null | undefined, country?: string | null | undefined, addressOne?: string | null | undefined, zip?: string | null | undefined } | null | undefined }, metric?: { __typename?: 'Metric', fiveDayPriceReturnDaily?: number | null | undefined, fiveTwoWeekHigh?: number | null | undefined, fiveTwoWeekHighDate?: string | null | undefined, fiveTwoWeekLow?: number | null | undefined, fiveTwoWeekLowDate?: string | null | undefined, fiveTwoWeekPriceReturnDaily?: number | null | undefined, oneDayAverageTradingVolume?: number | null | undefined, oneThreeWeekPriceReturnDaily?: number | null | undefined, threeMonthAverageTradingVolume?: number | null | undefined, twoSixWeekPriceReturnDaily?: number | null | undefined, assetTurnoverAnnual?: number | null | undefined, assetTurnoverTTM?: number | null | undefined, beta?: number | null | undefined, bookValuePerShareAnnual?: number | null | undefined, bookValuePerShareQuarterly?: number | null | undefined, bookValueShareGrowthFiveY?: number | null | undefined, capitalSpendingGrowthFiveY?: number | null | undefined, cashFlowPerShareAnnual?: number | null | undefined, cashFlowPerShareTTM?: number | null | undefined, cashPerSharePerShareAnnual?: number | null | undefined, cashPerSharePerShareQuarterly?: number | null | undefined, currentEvfreeCashFlowAnnual?: number | null | undefined, currentEvfreeCashFlowTTM?: number | null | undefined, currentRatioAnnual?: number | null | undefined, currentRatioQuarterly?: number | null | undefined, ebitdPerShareTTM?: number | null | undefined, ebitdaCagrFiveY?: number | null | undefined, ebitdaInterimCagrFiveY?: number | null | undefined, epsBasicExclExtraItemsAnnual?: number | null | undefined, epsBasicExclExtraItemsTTM?: number | null | undefined, epsExclExtraItemsAnnual?: number | null | undefined, epsExclExtraItemsTTM?: number | null | undefined, epsGrowthFiveY?: number | null | undefined, epsGrowthQuarterlyYoy?: number | null | undefined, epsGrowthTTMYoy?: number | null | undefined, epsGrowthThreeY?: number | null | undefined, epsInclExtraItemsAnnual?: number | null | undefined, epsInclExtraItemsTTM?: number | null | undefined, epsNormalizedAnnual?: number | null | undefined, focfCagrFiveY?: number | null | undefined, freeCashFlowAnnual?: number | null | undefined, freeCashFlowPerShareTTM?: number | null | undefined, freeCashFlowTTM?: number | null | undefined, freeOperatingCashFlowrevenueFiveY?: number | null | undefined, freeOperatingCashFlowrevenueTTM?: number | null | undefined, grossMarginAnnual?: number | null | undefined, grossMarginFiveY?: number | null | undefined, grossMarginTTM?: number | null | undefined, inventoryTurnoverAnnual?: number | null | undefined, inventoryTurnoverTTM?: number | null | undefined, longTermDebtequityAnnual?: number | null | undefined, longTermDebtequityQuarterly?: number | null | undefined, marketCapitalization?: number | null | undefined, monthToDatePriceReturnDaily?: number | null | undefined, netDebtAnnual?: number | null | undefined, netDebtInterim?: number | null | undefined, netIncomeEmployeeAnnual?: number | null | undefined, netIncomeEmployeeTTM?: number | null | undefined, netInterestCoverageAnnual?: number | null | undefined, netInterestCoverageTTM?: number | null | undefined, netMarginGrowthFiveY?: number | null | undefined, netProfitMarginAnnual?: number | null | undefined, netProfitMarginFiveY?: number | null | undefined, netProfitMarginTTM?: number | null | undefined, operatingMarginAnnual?: number | null | undefined, operatingMarginFiveY?: number | null | undefined, operatingMarginTTM?: number | null | undefined, payoutRatioAnnual?: number | null | undefined, payoutRatioTTM?: number | null | undefined, pbAnnual?: number | null | undefined, pbQuarterly?: number | null | undefined, pcfShareTTM?: number | null | undefined, peBasicExclExtraTTM?: number | null | undefined, peExclExtraAnnual?: number | null | undefined, peExclExtraHighTTM?: number | null | undefined, peExclExtraTTM?: number | null | undefined, peExclLowTTM?: number | null | undefined, peInclExtraTTM?: number | null | undefined, peNormalizedAnnual?: number | null | undefined, pfcfShareAnnual?: number | null | undefined, pfcfShareTTM?: number | null | undefined, pretaxMarginAnnual?: number | null | undefined, pretaxMarginFiveY?: number | null | undefined, pretaxMarginTTM?: number | null | undefined, priceRelativeToSPFiveFiveTwoWeek?: number | null | undefined, priceRelativeToSPFiveFourWeek?: number | null | undefined, priceRelativeToSPFiveOneThreeWeek?: number | null | undefined, priceRelativeToSPFiveTwoSixWeek?: number | null | undefined, priceRelativeToSPFiveYtd?: number | null | undefined, psAnnual?: number | null | undefined, psTTM?: number | null | undefined, ptbvAnnual?: number | null | undefined, ptbvQuarterly?: number | null | undefined, quickRatioAnnual?: number | null | undefined, quickRatioQuarterly?: number | null | undefined, receivablesTurnoverAnnual?: number | null | undefined, receivablesTurnoverTTM?: number | null | undefined, revenueEmployeeAnnual?: number | null | undefined, revenueEmployeeTTM?: number | null | undefined, revenueGrowthFiveY?: number | null | undefined, revenueGrowthQuarterlyYoy?: number | null | undefined, revenueGrowthTTMYoy?: number | null | undefined, revenueGrowthThreeY?: number | null | undefined, revenuePerShareAnnual?: number | null | undefined, revenuePerShareTTM?: number | null | undefined, revenueShareGrowthFiveY?: number | null | undefined, roaRfy?: number | null | undefined, roaaFiveY?: number | null | undefined, roaeFiveY?: number | null | undefined, roaeTTM?: number | null | undefined, roeRfy?: number | null | undefined, roeTTM?: number | null | undefined, roiAnnual?: number | null | undefined, roiFiveY?: number | null | undefined, roiTTM?: number | null | undefined, tangibleBookValuePerShareAnnual?: number | null | undefined, tangibleBookValuePerShareQuarterly?: number | null | undefined, tbvCagrFiveY?: number | null | undefined, totalDebtCagrFiveY?: number | null | undefined, totalDebttotalEquityAnnual?: number | null | undefined, totalDebttotalEquityQuarterly?: number | null | undefined, yearToDatePriceReturnDaily?: number | null | undefined } | null | undefined, dividends?: { __typename?: 'Dividens', currentDividendYieldTTM?: number | null | undefined, dividendGrowthRateFiveY?: number | null | undefined, dividendPerShareAnnual?: number | null | undefined, dividendPerShareFiveY?: number | null | undefined, dividendYieldFiveY?: number | null | undefined, dividendYieldIndicatedAnnual?: number | null | undefined, dividendPayoutRatioTTM?: number | null | undefined, dividendsPerShareTTM?: number | null | undefined, exDividendDate?: string | null | undefined, trailingAnnualDividendRate?: string | null | undefined, trailingAnnualDividendYield?: string | null | undefined, forwardDividendYield?: string | null | undefined } | null | undefined, historicalMetrics?: { __typename?: 'HistoricalMetrics', cashRatio?: { __typename?: 'HistoricalMetricsData', name?: string | null | undefined, dates: Array<string>, data: Array<number> } | null | undefined, currentRatio?: { __typename?: 'HistoricalMetricsData', name?: string | null | undefined, dates: Array<string>, data: Array<number> } | null | undefined, ebitPerShare?: { __typename?: 'HistoricalMetricsData', name?: string | null | undefined, dates: Array<string>, data: Array<number> } | null | undefined, eps?: { __typename?: 'HistoricalMetricsData', name?: string | null | undefined, dates: Array<string>, data: Array<number> } | null | undefined, grossMargin?: { __typename?: 'HistoricalMetricsData', name?: string | null | undefined, dates: Array<string>, data: Array<number> } | null | undefined, longtermDebtTotalAsset?: { __typename?: 'HistoricalMetricsData', name?: string | null | undefined, dates: Array<string>, data: Array<number> } | null | undefined, longtermDebtTotalCapital?: { __typename?: 'HistoricalMetricsData', name?: string | null | undefined, dates: Array<string>, data: Array<number> } | null | undefined, longtermDebtTotalEquity?: { __typename?: 'HistoricalMetricsData', name?: string | null | undefined, dates: Array<string>, data: Array<number> } | null | undefined, netDebtToTotalCapital?: { __typename?: 'HistoricalMetricsData', name?: string | null | undefined, dates: Array<string>, data: Array<number> } | null | undefined, netDebtToTotalEquity?: { __typename?: 'HistoricalMetricsData', name?: string | null | undefined, dates: Array<string>, data: Array<number> } | null | undefined, netMargin?: { __typename?: 'HistoricalMetricsData', name?: string | null | undefined, dates: Array<string>, data: Array<number> } | null | undefined, operatingMargin?: { __typename?: 'HistoricalMetricsData', name?: string | null | undefined, dates: Array<string>, data: Array<number> } | null | undefined, pretaxMargin?: { __typename?: 'HistoricalMetricsData', name?: string | null | undefined, dates: Array<string>, data: Array<number> } | null | undefined, salesPerShare?: { __typename?: 'HistoricalMetricsData', name?: string | null | undefined, dates: Array<string>, data: Array<number> } | null | undefined, sgaToSale?: { __typename?: 'HistoricalMetricsData', name?: string | null | undefined, dates: Array<string>, data: Array<number> } | null | undefined, totalDebtToEquity?: { __typename?: 'HistoricalMetricsData', name?: string | null | undefined, dates: Array<string>, data: Array<number> } | null | undefined, totalDebtToTotalAsset?: { __typename?: 'HistoricalMetricsData', name?: string | null | undefined, dates: Array<string>, data: Array<number> } | null | undefined, totalDebtToTotalCapital?: { __typename?: 'HistoricalMetricsData', name?: string | null | undefined, dates: Array<string>, data: Array<number> } | null | undefined, totalRatio?: { __typename?: 'HistoricalMetricsData', name?: string | null | undefined, dates: Array<string>, data: Array<number> } | null | undefined } | null | undefined, calculations?: { __typename?: 'STStockDetailsCalculations', symbol?: string | null | undefined, date?: string | null | undefined, alpha?: number | null | undefined, beta?: number | null | undefined, sharpRatio?: number | null | undefined, volatility?: { __typename?: 'STStockRiskCalculationsVolatility', benchmarkYearlyReturnPrct?: number | null | undefined, meanPrice?: number | null | undefined, stdDailyPrct?: number | null | undefined, stdDailyPrice?: number | null | undefined, stdYearlyPrct?: number | null | undefined, stdYearlyPrice?: number | null | undefined, symbolYearlyPriceReturnPrct?: number | null | undefined, volatilityPrct?: number | null | undefined, date?: string | null | undefined } | null | undefined, CAPM?: { __typename?: 'CAPM', beta?: number | null | undefined, Rf?: number | null | undefined, Rm?: number | null | undefined, result?: number | null | undefined } | null | undefined, WACC?: { __typename?: 'WACC', Rd?: number | null | undefined, Re?: number | null | undefined, Wd?: number | null | undefined, We?: number | null | undefined, result?: number | null | undefined, taxRate?: number | null | undefined, CAPM?: { __typename?: 'CAPM', beta?: number | null | undefined, Rf?: number | null | undefined, Rm?: number | null | undefined, result?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, socialSentiment?: { __typename?: 'STFMSocialSentiment', absoluteIndex?: number | null | undefined, date?: string | null | undefined, generalPerception?: number | null | undefined, redditCommentMentions?: number | null | undefined, redditCommentSentiment?: number | null | undefined, redditPostMentions?: number | null | undefined, redditPostSentiment?: number | null | undefined, relativeIndex?: number | null | undefined, sentiment?: number | null | undefined, stocktwitsPostMentions?: number | null | undefined, stocktwitsPostSentiment?: number | null | undefined, symbol?: string | null | undefined, tweetMentions?: number | null | undefined, tweetSentiment?: number | null | undefined, yahooFinanceCommentMentions?: number | null | undefined, yahooFinanceCommentSentiment?: number | null | undefined } | null | undefined, analystEstimates: Array<{ __typename?: 'STAnalystEstimates', date?: string | null | undefined, estimatedEbitAvg?: number | null | undefined, estimatedEbitHigh?: number | null | undefined, estimatedEbitLow?: number | null | undefined, estimatedEbitdaAvg?: number | null | undefined, estimatedEbitdaHigh?: number | null | undefined, estimatedEbitdaLow?: number | null | undefined, estimatedEpsAvg?: number | null | undefined, estimatedEpsHigh?: number | null | undefined, estimatedEpsLow?: number | null | undefined, estimatedNetIncomeAvg?: number | null | undefined, estimatedNetIncomeHigh?: number | null | undefined, estimatedNetIncomeLow?: number | null | undefined, estimatedRevenueAvg?: number | null | undefined, estimatedRevenueHigh?: number | null | undefined, estimatedRevenueLow?: number | null | undefined, estimatedSgaExpenseAvg?: number | null | undefined, estimatedSgaExpenseHigh?: number | null | undefined, estimatedSgaExpenseLow?: number | null | undefined, numberAnalystEstimatedRevenue?: number | null | undefined, numberAnalystsEstimatedEps?: number | null | undefined, symbol?: string | null | undefined }>, calculatedPredictions: { __typename?: 'STStockDetailsCalculatedPredictions', DCF_V1?: { __typename?: 'STDiscountedCashFlowFormula', estimatedCompanyTodayValue: number, estimatedDiscountedFactors: Array<number | null | undefined>, estimatedDiscountedTerminalValue: number, estimatedFreeCashFlowRate: number, estimatedFreeCashFlowRates: Array<number | null | undefined>, estimatedFreeCashFlows: Array<number | null | undefined>, estimatedIntrinsicValue: number, estimatedNetIncomeMargin: number, estimatedNetIncomes: Array<number | null | undefined>, estimatedPresentValueOfFutureCashFlows: Array<number | null | undefined>, estimatedRevenueGrowthRate: number, estimatedRevenues: Array<number | null | undefined>, estimatedTerminalValue: number, years: Array<string | null | undefined>, historical: { __typename?: 'STDiscountedCashFlowFormulaHistorical', freeCashFlows: Array<number | null | undefined>, sharesOutstanding: number, netIncomeMargins: Array<number | null | undefined>, netIncome: Array<number | null | undefined>, revenue: Array<number | null | undefined>, revenueGrowthRates: Array<number | null | undefined>, historicalYears: Array<string | null | undefined> }, variable: { __typename?: 'STDiscountedCashFlowFormulaVariable', perpetualGrowthRate: number, requiredRateOfReturn: number } } | null | undefined, DDF_V1?: { __typename?: 'STDividendDiscountedFormula', dividendGrowthRate: number, dividendsPerShareTTM: number, minimumRateReturn: number, estimatedIntrinsicValue: number } | null | undefined, FCF_V1?: { __typename?: 'STFreeCashFlowFormula', avgFcf: number, estimatedIntrinsicMarketCap: number, estimatedIntrinsicValue: number, historicalYears?: Array<string | null | undefined> | null | undefined, minimumRateReturn: number, operatingActivities: Array<number | null | undefined>, capitalExpenditures: Array<number | null | undefined>, freeCashFlows: Array<number | null | undefined>, sharesOutstanding: number } | null | undefined, INTRINSIC_V1?: { __typename?: 'STEarningsValuationFormula', dates: Array<string | null | undefined>, eps: number, estimatedDiscountedPV: Array<number | null | undefined>, estimatedEarnings: Array<number | null | undefined>, estimatedIntrinsicValue: number, variable: { __typename?: 'STEarningsValuationFormulaVariable', growthRateFrom5yTo10y: number, growthRateNext5y: number, minimumRateReturn: number, terminalMultiple: number } } | null | undefined }, allFinancialReportsYearly: Array<{ __typename?: 'FinancialReport', acceptedDate?: string | null | undefined, accessNumber?: string | null | undefined, cik?: string | null | undefined, endDate?: string | null | undefined, filedDate?: string | null | undefined, form?: string | null | undefined, quarter?: number | null | undefined, startDate?: string | null | undefined, symbol?: string | null | undefined, year?: number | null | undefined, report?: { __typename?: 'FinancialReportStatement', bs: Array<{ __typename?: 'FinancialReportStatementData', concept?: string | null | undefined, label?: string | null | undefined, unit?: string | null | undefined, value?: number | null | undefined } | null | undefined>, cf: Array<{ __typename?: 'FinancialReportStatementData', concept?: string | null | undefined, label?: string | null | undefined, unit?: string | null | undefined, value?: number | null | undefined } | null | undefined>, ic: Array<{ __typename?: 'FinancialReportStatementData', concept?: string | null | undefined, label?: string | null | undefined, unit?: string | null | undefined, value?: number | null | undefined } | null | undefined> } | null | undefined }>, allFinancialReportsQuarterly: Array<{ __typename?: 'FinancialReport', acceptedDate?: string | null | undefined, accessNumber?: string | null | undefined, cik?: string | null | undefined, endDate?: string | null | undefined, filedDate?: string | null | undefined, form?: string | null | undefined, quarter?: number | null | undefined, startDate?: string | null | undefined, symbol?: string | null | undefined, year?: number | null | undefined, report?: { __typename?: 'FinancialReportStatement', bs: Array<{ __typename?: 'FinancialReportStatementData', concept?: string | null | undefined, label?: string | null | undefined, unit?: string | null | undefined, value?: number | null | undefined } | null | undefined>, cf: Array<{ __typename?: 'FinancialReportStatementData', concept?: string | null | undefined, label?: string | null | undefined, unit?: string | null | undefined, value?: number | null | undefined } | null | undefined>, ic: Array<{ __typename?: 'FinancialReportStatementData', concept?: string | null | undefined, label?: string | null | undefined, unit?: string | null | undefined, value?: number | null | undefined } | null | undefined> } | null | undefined }>, institutionalHolders: Array<{ __typename?: 'STFMHolder', change?: number | null | undefined, dateReported?: string | null | undefined, holder?: string | null | undefined, shares?: number | null | undefined }>, mutualFundHolders: Array<{ __typename?: 'STFMHolderWithWeight', change?: number | null | undefined, dateReported?: string | null | undefined, holder?: string | null | undefined, shares?: number | null | undefined, weightPercent?: number | null | undefined }>, companyOutlook: { __typename?: 'STFMCompanyOutlook', financialsAnnual: { __typename?: 'STFMFinancials', balance: Array<{ __typename?: 'STFMBalanceSheet', acceptedDate?: string | null | undefined, accountPayables?: number | null | undefined, accumulatedOtherComprehensiveIncomeLoss?: number | null | undefined, cashAndCashEquivalents?: number | null | undefined, cashAndShortTermInvestments?: number | null | undefined, commonStock?: number | null | undefined, date?: string | null | undefined, deferredRevenue?: number | null | undefined, deferredRevenueNonCurrent?: number | null | undefined, deferredTaxLiabilitiesNonCurrent?: number | null | undefined, fillingDate?: string | null | undefined, finalLink?: string | null | undefined, goodwill?: number | null | undefined, goodwillAndIntangibleAssets?: number | null | undefined, intangibleAssets?: number | null | undefined, inventory?: number | null | undefined, link?: string | null | undefined, longTermDebt?: number | null | undefined, longTermInvestments?: number | null | undefined, netDebt?: number | null | undefined, netReceivables?: number | null | undefined, otherAssets?: number | null | undefined, otherCurrentAssets?: number | null | undefined, otherCurrentLiabilities?: number | null | undefined, otherLiabilities?: number | null | undefined, otherNonCurrentAssets?: number | null | undefined, otherNonCurrentLiabilities?: number | null | undefined, othertotalStockholdersEquity?: number | null | undefined, period?: string | null | undefined, propertyPlantEquipmentNet?: number | null | undefined, reportedCurrency?: string | null | undefined, retainedEarnings?: number | null | undefined, shortTermDebt?: number | null | undefined, shortTermInvestments?: number | null | undefined, symbol?: string | null | undefined, taxAssets?: number | null | undefined, taxPayables?: number | null | undefined, totalAssets?: number | null | undefined, totalCurrentAssets?: number | null | undefined, totalCurrentLiabilities?: number | null | undefined, totalDebt?: number | null | undefined, totalInvestments?: number | null | undefined, totalLiabilities?: number | null | undefined, totalLiabilitiesAndStockholdersEquity?: number | null | undefined, totalNonCurrentAssets?: number | null | undefined, totalNonCurrentLiabilities?: number | null | undefined, totalStockholdersEquity?: number | null | undefined } | null | undefined>, cash: Array<{ __typename?: 'STFMCashFlow', acceptedDate?: string | null | undefined, accountsPayables?: number | null | undefined, accountsReceivables?: number | null | undefined, acquisitionsNet?: number | null | undefined, capitalExpenditure?: number | null | undefined, cashAtBeginningOfPeriod?: number | null | undefined, cashAtEndOfPeriod?: number | null | undefined, changeInWorkingCapital?: number | null | undefined, commonStockIssued?: number | null | undefined, commonStockRepurchased?: number | null | undefined, date?: string | null | undefined, debtRepayment?: number | null | undefined, deferredIncomeTax?: number | null | undefined, depreciationAndAmortization?: number | null | undefined, dividendsPaid?: number | null | undefined, effectOfForexChangesOnCash?: number | null | undefined, fillingDate?: string | null | undefined, finalLink?: string | null | undefined, freeCashFlow?: number | null | undefined, inventory?: number | null | undefined, investmentsInPropertyPlantAndEquipment?: number | null | undefined, link?: string | null | undefined, netCashProvidedByOperatingActivities?: number | null | undefined, netCashUsedForInvestingActivites?: number | null | undefined, netCashUsedProvidedByFinancingActivities?: number | null | undefined, netChangeInCash?: number | null | undefined, netIncome?: number | null | undefined, operatingCashFlow?: number | null | undefined, otherFinancingActivites?: number | null | undefined, otherInvestingActivites?: number | null | undefined, otherNonCashItems?: number | null | undefined, otherWorkingCapital?: number | null | undefined, period?: string | null | undefined, purchasesOfInvestments?: number | null | undefined, reportedCurrency?: string | null | undefined, salesMaturitiesOfInvestments?: number | null | undefined, stockBasedCompensation?: number | null | undefined, symbol?: string | null | undefined } | null | undefined>, income: Array<{ __typename?: 'STFMIncomeStatement', acceptedDate?: string | null | undefined, costAndExpenses?: number | null | undefined, costOfRevenue?: number | null | undefined, date?: string | null | undefined, depreciationAndAmortization?: number | null | undefined, ebitda?: number | null | undefined, ebitdaratio?: number | null | undefined, eps?: number | null | undefined, epsdiluted?: number | null | undefined, fillingDate?: string | null | undefined, finalLink?: string | null | undefined, generalAndAdministrativeExpenses?: number | null | undefined, grossProfit?: number | null | undefined, grossProfitRatio?: number | null | undefined, incomeBeforeTax?: number | null | undefined, incomeBeforeTaxRatio?: number | null | undefined, incomeTaxExpense?: number | null | undefined, interestExpense?: number | null | undefined, link?: string | null | undefined, netIncome?: number | null | undefined, netIncomeRatio?: number | null | undefined, operatingExpenses?: number | null | undefined, operatingIncome?: number | null | undefined, operatingIncomeRatio?: number | null | undefined, otherExpenses?: number | null | undefined, period?: string | null | undefined, reportedCurrency?: string | null | undefined, researchAndDevelopmentExpenses?: number | null | undefined, revenue?: number | null | undefined, sellingAndMarketingExpenses?: number | null | undefined, sellingGeneralAndAdministrativeExpenses?: number | null | undefined, symbol?: string | null | undefined, totalOtherIncomeExpensesNet?: number | null | undefined, weightedAverageShsOut?: number | null | undefined, weightedAverageShsOutDil?: number | null | undefined } | null | undefined> }, financialsQuarter: { __typename?: 'STFMFinancials', balance: Array<{ __typename?: 'STFMBalanceSheet', acceptedDate?: string | null | undefined, accountPayables?: number | null | undefined, accumulatedOtherComprehensiveIncomeLoss?: number | null | undefined, cashAndCashEquivalents?: number | null | undefined, cashAndShortTermInvestments?: number | null | undefined, commonStock?: number | null | undefined, date?: string | null | undefined, deferredRevenue?: number | null | undefined, deferredRevenueNonCurrent?: number | null | undefined, deferredTaxLiabilitiesNonCurrent?: number | null | undefined, fillingDate?: string | null | undefined, finalLink?: string | null | undefined, goodwill?: number | null | undefined, goodwillAndIntangibleAssets?: number | null | undefined, intangibleAssets?: number | null | undefined, inventory?: number | null | undefined, link?: string | null | undefined, longTermDebt?: number | null | undefined, longTermInvestments?: number | null | undefined, netDebt?: number | null | undefined, netReceivables?: number | null | undefined, otherAssets?: number | null | undefined, otherCurrentAssets?: number | null | undefined, otherCurrentLiabilities?: number | null | undefined, otherLiabilities?: number | null | undefined, otherNonCurrentAssets?: number | null | undefined, otherNonCurrentLiabilities?: number | null | undefined, othertotalStockholdersEquity?: number | null | undefined, period?: string | null | undefined, propertyPlantEquipmentNet?: number | null | undefined, reportedCurrency?: string | null | undefined, retainedEarnings?: number | null | undefined, shortTermDebt?: number | null | undefined, shortTermInvestments?: number | null | undefined, symbol?: string | null | undefined, taxAssets?: number | null | undefined, taxPayables?: number | null | undefined, totalAssets?: number | null | undefined, totalCurrentAssets?: number | null | undefined, totalCurrentLiabilities?: number | null | undefined, totalDebt?: number | null | undefined, totalInvestments?: number | null | undefined, totalLiabilities?: number | null | undefined, totalLiabilitiesAndStockholdersEquity?: number | null | undefined, totalNonCurrentAssets?: number | null | undefined, totalNonCurrentLiabilities?: number | null | undefined, totalStockholdersEquity?: number | null | undefined } | null | undefined>, cash: Array<{ __typename?: 'STFMCashFlow', acceptedDate?: string | null | undefined, accountsPayables?: number | null | undefined, accountsReceivables?: number | null | undefined, acquisitionsNet?: number | null | undefined, capitalExpenditure?: number | null | undefined, cashAtBeginningOfPeriod?: number | null | undefined, cashAtEndOfPeriod?: number | null | undefined, changeInWorkingCapital?: number | null | undefined, commonStockIssued?: number | null | undefined, commonStockRepurchased?: number | null | undefined, date?: string | null | undefined, debtRepayment?: number | null | undefined, deferredIncomeTax?: number | null | undefined, depreciationAndAmortization?: number | null | undefined, dividendsPaid?: number | null | undefined, effectOfForexChangesOnCash?: number | null | undefined, fillingDate?: string | null | undefined, finalLink?: string | null | undefined, freeCashFlow?: number | null | undefined, inventory?: number | null | undefined, investmentsInPropertyPlantAndEquipment?: number | null | undefined, link?: string | null | undefined, netCashProvidedByOperatingActivities?: number | null | undefined, netCashUsedForInvestingActivites?: number | null | undefined, netCashUsedProvidedByFinancingActivities?: number | null | undefined, netChangeInCash?: number | null | undefined, netIncome?: number | null | undefined, operatingCashFlow?: number | null | undefined, otherFinancingActivites?: number | null | undefined, otherInvestingActivites?: number | null | undefined, otherNonCashItems?: number | null | undefined, otherWorkingCapital?: number | null | undefined, period?: string | null | undefined, purchasesOfInvestments?: number | null | undefined, reportedCurrency?: string | null | undefined, salesMaturitiesOfInvestments?: number | null | undefined, stockBasedCompensation?: number | null | undefined, symbol?: string | null | undefined } | null | undefined>, income: Array<{ __typename?: 'STFMIncomeStatement', acceptedDate?: string | null | undefined, costAndExpenses?: number | null | undefined, costOfRevenue?: number | null | undefined, date?: string | null | undefined, depreciationAndAmortization?: number | null | undefined, ebitda?: number | null | undefined, ebitdaratio?: number | null | undefined, eps?: number | null | undefined, epsdiluted?: number | null | undefined, fillingDate?: string | null | undefined, finalLink?: string | null | undefined, generalAndAdministrativeExpenses?: number | null | undefined, grossProfit?: number | null | undefined, grossProfitRatio?: number | null | undefined, incomeBeforeTax?: number | null | undefined, incomeBeforeTaxRatio?: number | null | undefined, incomeTaxExpense?: number | null | undefined, interestExpense?: number | null | undefined, link?: string | null | undefined, netIncome?: number | null | undefined, netIncomeRatio?: number | null | undefined, operatingExpenses?: number | null | undefined, operatingIncome?: number | null | undefined, operatingIncomeRatio?: number | null | undefined, otherExpenses?: number | null | undefined, period?: string | null | undefined, reportedCurrency?: string | null | undefined, researchAndDevelopmentExpenses?: number | null | undefined, revenue?: number | null | undefined, sellingAndMarketingExpenses?: number | null | undefined, sellingGeneralAndAdministrativeExpenses?: number | null | undefined, symbol?: string | null | undefined, totalOtherIncomeExpensesNet?: number | null | undefined, weightedAverageShsOut?: number | null | undefined, weightedAverageShsOutDil?: number | null | undefined } | null | undefined> }, insideTrades: Array<{ __typename?: 'STFMInsideTrade', acquistionOrDisposition?: string | null | undefined, companyCik?: string | null | undefined, formType?: string | null | undefined, link?: string | null | undefined, price?: number | null | undefined, reportingCik?: string | null | undefined, reportingName?: string | null | undefined, securitiesOwned?: number | null | undefined, securitiesTransacted?: number | null | undefined, securityName?: string | null | undefined, symbol?: string | null | undefined, transactionDate?: string | null | undefined, transactionType?: string | null | undefined, typeOfOwner?: string | null | undefined }>, keyExecutives: Array<{ __typename?: 'STFMKeyExecutive', currencyPay?: string | null | undefined, gender?: string | null | undefined, name?: string | null | undefined, pay?: number | null | undefined, title?: string | null | undefined }>, rating?: { __typename?: 'STFMRating', date?: string | null | undefined, rating?: string | null | undefined, ratingDetailsDCFRecommendation?: string | null | undefined, ratingDetailsDCFScore?: number | null | undefined, ratingDetailsDERecommendation?: string | null | undefined, ratingDetailsDEScore?: number | null | undefined, ratingDetailsPBRecommendation?: string | null | undefined, ratingDetailsPBScore?: number | null | undefined, ratingDetailsPERecommendation?: string | null | undefined, ratingDetailsPEScore?: number | null | undefined, ratingDetailsROARecommendation?: string | null | undefined, ratingDetailsROAScore?: number | null | undefined, ratingDetailsROERecommendation?: string | null | undefined, ratingDetailsROEScore?: number | null | undefined, ratingRecommendation?: string | null | undefined, ratingScore?: number | null | undefined, symbol?: string | null | undefined } | null | undefined, ratios?: { __typename?: 'STFMRatios', assetTurnoverTTM?: number | null | undefined, capitalExpenditureCoverageRatioTTM?: number | null | undefined, cashConversionCycleTTM?: number | null | undefined, cashFlowCoverageRatiosTTM?: number | null | undefined, cashFlowToDebtRatioTTM?: number | null | undefined, cashPerShareTTM?: number | null | undefined, cashRatioTTM?: number | null | undefined, companyEquityMultiplierTTM?: number | null | undefined, currentRatioTTM?: number | null | undefined, daysOfInventoryOutstandingTTM?: number | null | undefined, daysOfPayablesOutstandingTTM?: number | null | undefined, daysOfSalesOutstandingTTM?: number | null | undefined, debtEquityRatioTTM?: number | null | undefined, debtRatioTTM?: number | null | undefined, dividendPaidAndCapexCoverageRatioTTM?: number | null | undefined, dividendPerShareTTM?: number | null | undefined, dividendYielPercentageTTM?: number | null | undefined, dividendYielTTM?: number | null | undefined, dividendYieldTTM?: number | null | undefined, ebitPerRevenueTTM?: number | null | undefined, ebtPerEbitTTM?: number | null | undefined, effectiveTaxRateTTM?: number | null | undefined, enterpriseValueMultipleTTM?: number | null | undefined, fixedAssetTurnoverTTM?: number | null | undefined, freeCashFlowOperatingCashFlowRatioTTM?: number | null | undefined, freeCashFlowPerShareTTM?: number | null | undefined, grossProfitMarginTTM?: number | null | undefined, interestCoverageTTM?: number | null | undefined, inventoryTurnoverTTM?: number | null | undefined, longTermDebtToCapitalizationTTM?: number | null | undefined, netIncomePerEBTTTM?: number | null | undefined, netProfitMarginTTM?: number | null | undefined, operatingCashFlowPerShareTTM?: number | null | undefined, operatingCashFlowSalesRatioTTM?: number | null | undefined, operatingCycleTTM?: number | null | undefined, operatingProfitMarginTTM?: number | null | undefined, payablesTurnoverTTM?: number | null | undefined, payoutRatioTTM?: number | null | undefined, peRatioTTM?: number | null | undefined, pegRatioTTM?: number | null | undefined, pretaxProfitMarginTTM?: number | null | undefined, priceBookValueRatioTTM?: number | null | undefined, priceCashFlowRatioTTM?: number | null | undefined, priceEarningsRatioTTM?: number | null | undefined, priceEarningsToGrowthRatioTTM?: number | null | undefined, priceFairValueTTM?: number | null | undefined, priceSalesRatioTTM?: number | null | undefined, priceToBookRatioTTM?: number | null | undefined, priceToFreeCashFlowsRatioTTM?: number | null | undefined, priceToOperatingCashFlowsRatioTTM?: number | null | undefined, priceToSalesRatioTTM?: number | null | undefined, quickRatioTTM?: number | null | undefined, receivablesTurnoverTTM?: number | null | undefined, returnOnAssetsTTM?: number | null | undefined, returnOnCapitalEmployedTTM?: number | null | undefined, returnOnEquityTTM?: number | null | undefined, shortTermCoverageRatiosTTM?: number | null | undefined, totalDebtToCapitalizationTTM?: number | null | undefined } | null | undefined, splitHistory: Array<{ __typename?: 'STFMSplitHistory', date?: string | null | undefined, denominator?: number | null | undefined, label?: string | null | undefined, numerator?: number | null | undefined, symbol?: string | null | undefined }>, stockDividend: Array<{ __typename?: 'STFMStockDividend', adjDividend?: number | null | undefined, date?: string | null | undefined, declarationDate?: string | null | undefined, dividend?: number | null | undefined, label?: string | null | undefined, paymentDate?: string | null | undefined, recordDate?: string | null | undefined, symbol?: string | null | undefined }>, stockNews: Array<{ __typename?: 'STFMStockNew', image?: string | null | undefined, publishedDate?: string | null | undefined, site?: string | null | undefined, symbol?: string | null | undefined, text?: string | null | undefined, title?: string | null | undefined, url?: string | null | undefined }> }, sectorPeers: Array<{ __typename?: 'STFMCompanyQuote', avgVolume?: number | null | undefined, change?: number | null | undefined, changesPercentage?: number | null | undefined, dayHigh?: number | null | undefined, dayLow?: number | null | undefined, earningsAnnouncement?: string | null | undefined, eps?: number | null | undefined, exchange?: string | null | undefined, marketCap?: number | null | undefined, name?: string | null | undefined, open?: number | null | undefined, pe?: number | null | undefined, previousClose?: number | null | undefined, price?: number | null | undefined, priceAvg200?: number | null | undefined, priceAvg50?: number | null | undefined, sharesOutstanding?: number | null | undefined, symbol?: string | null | undefined, timestamp?: number | null | undefined, volume?: number | null | undefined, yearHigh?: number | null | undefined, yearLow?: number | null | undefined, image?: string | null | undefined }> } | null | undefined };

export type QueryStockFinancialReportsQueryVariables = Exact<{
  symbol: Scalars['String'];
}>;


export type QueryStockFinancialReportsQuery = { __typename?: 'Query', queryStockFinancialReports?: { __typename?: 'StockDetailsFinancialReports', id: string, allFinancialReportsQuarterly: Array<{ __typename?: 'FinancialReport', acceptedDate?: string | null | undefined, accessNumber?: string | null | undefined, cik?: string | null | undefined, endDate?: string | null | undefined, filedDate?: string | null | undefined, form?: string | null | undefined, quarter?: number | null | undefined, startDate?: string | null | undefined, symbol?: string | null | undefined, year?: number | null | undefined, report?: { __typename?: 'FinancialReportStatement', bs: Array<{ __typename?: 'FinancialReportStatementData', concept?: string | null | undefined, label?: string | null | undefined, unit?: string | null | undefined, value?: number | null | undefined } | null | undefined>, cf: Array<{ __typename?: 'FinancialReportStatementData', concept?: string | null | undefined, label?: string | null | undefined, unit?: string | null | undefined, value?: number | null | undefined } | null | undefined>, ic: Array<{ __typename?: 'FinancialReportStatementData', concept?: string | null | undefined, label?: string | null | undefined, unit?: string | null | undefined, value?: number | null | undefined } | null | undefined> } | null | undefined }>, allFinancialReportsYearly: Array<{ __typename?: 'FinancialReport', acceptedDate?: string | null | undefined, accessNumber?: string | null | undefined, cik?: string | null | undefined, endDate?: string | null | undefined, filedDate?: string | null | undefined, form?: string | null | undefined, quarter?: number | null | undefined, startDate?: string | null | undefined, symbol?: string | null | undefined, year?: number | null | undefined, report?: { __typename?: 'FinancialReportStatement', bs: Array<{ __typename?: 'FinancialReportStatementData', concept?: string | null | undefined, label?: string | null | undefined, unit?: string | null | undefined, value?: number | null | undefined } | null | undefined>, cf: Array<{ __typename?: 'FinancialReportStatementData', concept?: string | null | undefined, label?: string | null | undefined, unit?: string | null | undefined, value?: number | null | undefined } | null | undefined>, ic: Array<{ __typename?: 'FinancialReportStatementData', concept?: string | null | undefined, label?: string | null | undefined, unit?: string | null | undefined, value?: number | null | undefined } | null | undefined> } | null | undefined }> } | null | undefined };

export type QueryStockSummaryQueryVariables = Exact<{
  symbol: Scalars['String'];
  allowReload?: InputMaybe<Scalars['Boolean']>;
}>;


export type QueryStockSummaryQuery = { __typename?: 'Query', queryStockSummary?: { __typename?: 'Summary', avgVolume: number, ceo?: string | null | undefined, companyName: string, currency?: string | null | undefined, dividendDate?: string | null | undefined, ePSTTM?: number | null | undefined, earningsDate?: string | null | undefined, exDividendDate?: string | null | undefined, exchangeName?: string | null | undefined, fiveTwoWeekRange?: string | null | undefined, forwardDividendRate?: number | null | undefined, forwardDividendYield?: number | null | undefined, forwardEPS?: number | null | undefined, forwardPE?: number | null | undefined, fullTimeEmployees?: string | null | undefined, id: string, symbolType?: SymbolType | null | undefined, industry?: string | null | undefined, ipoDate?: string | null | undefined, beta?: string | null | undefined, countryFullName?: string | null | undefined, lastSplitDate?: string | null | undefined, lastSplitFactor?: string | null | undefined, logo_url?: string | null | undefined, longBusinessSummary?: string | null | undefined, marketCap: number, marketPrice: number, oneyTargetEst?: number | null | undefined, pERatioTTM?: number | null | undefined, previousClose: number, recommendationKey?: string | null | undefined, recommendationMean?: number | null | undefined, sandPFiveTwoWeekChange?: number | null | undefined, sector?: string | null | undefined, sharesOutstanding: number, shortRatio?: number | null | undefined, symbol: string, targetEstOneyPercent?: number | null | undefined, volume: number, website?: string | null | undefined, weekRangeFiveTwoMax?: number | null | undefined, weekRangeFiveTwoMin?: number | null | undefined, yearToDatePrice?: number | null | undefined, yearToDatePriceReturn?: number | null | undefined, isActivelyTrading?: boolean | null | undefined, residance?: { __typename?: 'SummaryResidance', city?: string | null | undefined, state?: string | null | undefined, country?: string | null | undefined, addressOne?: string | null | undefined, zip?: string | null | undefined } | null | undefined } | null | undefined };

export type QueryStockQuotesByPrefixQueryVariables = Exact<{
  symbolPrefix: Scalars['String'];
}>;


export type QueryStockQuotesByPrefixQuery = { __typename?: 'Query', queryStockQuotesByPrefix: Array<{ __typename?: 'STFMCompanyQuote', avgVolume?: number | null | undefined, change?: number | null | undefined, changesPercentage?: number | null | undefined, dayHigh?: number | null | undefined, dayLow?: number | null | undefined, earningsAnnouncement?: string | null | undefined, eps?: number | null | undefined, exchange?: string | null | undefined, marketCap?: number | null | undefined, name?: string | null | undefined, open?: number | null | undefined, pe?: number | null | undefined, previousClose?: number | null | undefined, price?: number | null | undefined, priceAvg200?: number | null | undefined, priceAvg50?: number | null | undefined, sharesOutstanding?: number | null | undefined, symbol?: string | null | undefined, timestamp?: number | null | undefined, volume?: number | null | undefined, yearHigh?: number | null | undefined, yearLow?: number | null | undefined, image?: string | null | undefined } | null | undefined> };

export type SetForceReloadStockDetailsMutationVariables = Exact<{ [key: string]: never; }>;


export type SetForceReloadStockDetailsMutation = { __typename?: 'Mutation', setForceReloadStockDetails?: boolean | null | undefined };

export type StTicketCommentFragmentFragment = { __typename?: 'STTicketComment', id: string, comment: string, createdAt: string, createdBy: { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string } };

export type StTicketFragmentFragment = { __typename?: 'STTicket', id: string, name: string, type: StTicketTypes, createdAt: string, isOpen: boolean, createdBy: { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string }, comments: Array<{ __typename?: 'STTicketComment', id: string, comment: string, createdAt: string, createdBy: { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string } }> };

export type CreateTicketMutationVariables = Exact<{
  ticketValuse: StTicketCreateValues;
}>;


export type CreateTicketMutation = { __typename?: 'Mutation', createTicket?: { __typename?: 'STTicket', id: string, name: string, type: StTicketTypes, createdAt: string, isOpen: boolean, createdBy: { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string }, comments: Array<{ __typename?: 'STTicketComment', id: string, comment: string, createdAt: string, createdBy: { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string } }> } | null | undefined };

export type CommentTicketMutationVariables = Exact<{
  ticketId: Scalars['String'];
  comment: Scalars['String'];
}>;


export type CommentTicketMutation = { __typename?: 'Mutation', commentTicket?: { __typename?: 'STTicketComment', id: string, comment: string, createdAt: string, createdBy: { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string } } | null | undefined };

export type CommentTicketEditMutationVariables = Exact<{
  commentEditValues: StTicketCommentEditValues;
}>;


export type CommentTicketEditMutation = { __typename?: 'Mutation', commentTicketEdit?: string | null | undefined };

export type CloseTicketMutationVariables = Exact<{
  ticketId: Scalars['String'];
}>;


export type CloseTicketMutation = { __typename?: 'Mutation', closeTicket?: boolean | null | undefined };

export type DeleteTicketMutationVariables = Exact<{
  ticketId: Scalars['String'];
}>;


export type DeleteTicketMutation = { __typename?: 'Mutation', deleteTicket?: boolean | null | undefined };

export type StHoldingFragmentFragment = { __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number, summary: { __typename?: 'Summary', avgVolume: number, ceo?: string | null | undefined, companyName: string, currency?: string | null | undefined, dividendDate?: string | null | undefined, ePSTTM?: number | null | undefined, earningsDate?: string | null | undefined, exDividendDate?: string | null | undefined, exchangeName?: string | null | undefined, fiveTwoWeekRange?: string | null | undefined, forwardDividendRate?: number | null | undefined, forwardDividendYield?: number | null | undefined, forwardEPS?: number | null | undefined, forwardPE?: number | null | undefined, fullTimeEmployees?: string | null | undefined, id: string, symbolType?: SymbolType | null | undefined, industry?: string | null | undefined, ipoDate?: string | null | undefined, beta?: string | null | undefined, countryFullName?: string | null | undefined, lastSplitDate?: string | null | undefined, lastSplitFactor?: string | null | undefined, logo_url?: string | null | undefined, longBusinessSummary?: string | null | undefined, marketCap: number, marketPrice: number, oneyTargetEst?: number | null | undefined, pERatioTTM?: number | null | undefined, previousClose: number, recommendationKey?: string | null | undefined, recommendationMean?: number | null | undefined, sandPFiveTwoWeekChange?: number | null | undefined, sector?: string | null | undefined, sharesOutstanding: number, shortRatio?: number | null | undefined, symbol: string, targetEstOneyPercent?: number | null | undefined, volume: number, website?: string | null | undefined, weekRangeFiveTwoMax?: number | null | undefined, weekRangeFiveTwoMin?: number | null | undefined, yearToDatePrice?: number | null | undefined, yearToDatePriceReturn?: number | null | undefined, isActivelyTrading?: boolean | null | undefined, residance?: { __typename?: 'SummaryResidance', city?: string | null | undefined, state?: string | null | undefined, country?: string | null | undefined, addressOne?: string | null | undefined, zip?: string | null | undefined } | null | undefined } };

export type StTransactionFragmentFragment = { __typename?: 'STTransaction', transactionId?: string | null | undefined, symbol: string, price: number, return?: number | null | undefined, returnChange?: number | null | undefined, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number };

export type StTransactionFragmentWithUserFragment = { __typename?: 'STTransaction', transactionId?: string | null | undefined, symbol: string, price: number, return?: number | null | undefined, returnChange?: number | null | undefined, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number, user?: { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string } | null | undefined };

export type StTransactionSnapshotFragmentFragment = { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string };

export type PerformTransactionMutationVariables = Exact<{
  transactionInput: StTransactionInput;
}>;


export type PerformTransactionMutation = { __typename?: 'Mutation', performTransaction?: { __typename?: 'PerformedTransaction', holding?: { __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number, summary: { __typename?: 'Summary', avgVolume: number, ceo?: string | null | undefined, companyName: string, currency?: string | null | undefined, dividendDate?: string | null | undefined, ePSTTM?: number | null | undefined, earningsDate?: string | null | undefined, exDividendDate?: string | null | undefined, exchangeName?: string | null | undefined, fiveTwoWeekRange?: string | null | undefined, forwardDividendRate?: number | null | undefined, forwardDividendYield?: number | null | undefined, forwardEPS?: number | null | undefined, forwardPE?: number | null | undefined, fullTimeEmployees?: string | null | undefined, id: string, symbolType?: SymbolType | null | undefined, industry?: string | null | undefined, ipoDate?: string | null | undefined, beta?: string | null | undefined, countryFullName?: string | null | undefined, lastSplitDate?: string | null | undefined, lastSplitFactor?: string | null | undefined, logo_url?: string | null | undefined, longBusinessSummary?: string | null | undefined, marketCap: number, marketPrice: number, oneyTargetEst?: number | null | undefined, pERatioTTM?: number | null | undefined, previousClose: number, recommendationKey?: string | null | undefined, recommendationMean?: number | null | undefined, sandPFiveTwoWeekChange?: number | null | undefined, sector?: string | null | undefined, sharesOutstanding: number, shortRatio?: number | null | undefined, symbol: string, targetEstOneyPercent?: number | null | undefined, volume: number, website?: string | null | undefined, weekRangeFiveTwoMax?: number | null | undefined, weekRangeFiveTwoMin?: number | null | undefined, yearToDatePrice?: number | null | undefined, yearToDatePriceReturn?: number | null | undefined, isActivelyTrading?: boolean | null | undefined, residance?: { __typename?: 'SummaryResidance', city?: string | null | undefined, state?: string | null | undefined, country?: string | null | undefined, addressOne?: string | null | undefined, zip?: string | null | undefined } | null | undefined } } | null | undefined, transaction: { __typename?: 'STTransaction', transactionId?: string | null | undefined, symbol: string, price: number, return?: number | null | undefined, returnChange?: number | null | undefined, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number } } | null | undefined };

export type StUserIndetificationFragmentFragment = { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string };

export type StUserIndetificationBaseFragmentFragment = { __typename?: 'STUserIndetificationBase', nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string };

export type StUserIndentificationDataFragment = { __typename?: 'STUserPublicData', id: string, nickName: string, locale?: string | null | undefined, photoURL?: string | null | undefined, accountCreatedDate: string, lastSignInDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } } };

export type StGroupMemberOverviewFragment = { __typename?: 'STUserPublicData', nickName: string, locale?: string | null | undefined, photoURL?: string | null | undefined, accountCreatedDate: string, lastSignInDate: string, activity?: User_Activity | null | undefined, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, rank?: { __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string } | null | undefined, transactionsSnippets: Array<{ __typename?: 'STTransaction', transactionId?: string | null | undefined, symbol: string, price: number, return?: number | null | undefined, returnChange?: number | null | undefined, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number }>, topTransactions: Array<{ __typename?: 'STTransaction', transactionId?: string | null | undefined, symbol: string, price: number, return?: number | null | undefined, returnChange?: number | null | undefined, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number }>, holdings: Array<{ __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number, summary: { __typename?: 'Summary', avgVolume: number, ceo?: string | null | undefined, companyName: string, currency?: string | null | undefined, dividendDate?: string | null | undefined, ePSTTM?: number | null | undefined, earningsDate?: string | null | undefined, exDividendDate?: string | null | undefined, exchangeName?: string | null | undefined, fiveTwoWeekRange?: string | null | undefined, forwardDividendRate?: number | null | undefined, forwardDividendYield?: number | null | undefined, forwardEPS?: number | null | undefined, forwardPE?: number | null | undefined, fullTimeEmployees?: string | null | undefined, id: string, symbolType?: SymbolType | null | undefined, industry?: string | null | undefined, ipoDate?: string | null | undefined, beta?: string | null | undefined, countryFullName?: string | null | undefined, lastSplitDate?: string | null | undefined, lastSplitFactor?: string | null | undefined, logo_url?: string | null | undefined, longBusinessSummary?: string | null | undefined, marketCap: number, marketPrice: number, oneyTargetEst?: number | null | undefined, pERatioTTM?: number | null | undefined, previousClose: number, recommendationKey?: string | null | undefined, recommendationMean?: number | null | undefined, sandPFiveTwoWeekChange?: number | null | undefined, sector?: string | null | undefined, sharesOutstanding: number, shortRatio?: number | null | undefined, symbol: string, targetEstOneyPercent?: number | null | undefined, volume: number, website?: string | null | undefined, weekRangeFiveTwoMax?: number | null | undefined, weekRangeFiveTwoMin?: number | null | undefined, yearToDatePrice?: number | null | undefined, yearToDatePriceReturn?: number | null | undefined, isActivelyTrading?: boolean | null | undefined, residance?: { __typename?: 'SummaryResidance', city?: string | null | undefined, state?: string | null | undefined, country?: string | null | undefined, addressOne?: string | null | undefined, zip?: string | null | undefined } | null | undefined } }>, userHistoricalData: { __typename?: 'STUserHistoricalData', userLogs: Array<{ __typename?: 'STLog', date: string, logText: string }>, resetedAccount: Array<{ __typename?: 'STUserResetedAccount', date: string, portfolioTotal: number }>, bestAchievedRanks: Array<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }>, portfolioSnapshots: Array<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, transactionSnapshots: Array<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string }> } };

export type StUserPublicDataSearchFragment = { __typename?: 'STUserPublicData', nickName: string, locale?: string | null | undefined, photoURL?: string | null | undefined, accountCreatedDate: string, lastSignInDate: string, activity?: User_Activity | null | undefined, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, portfolioRisk?: { __typename?: 'STPortfolioRiskCalculations', date?: string | null | undefined, portfolioAlpha?: number | null | undefined, portfolioAnnualVariancePrct?: number | null | undefined, portfolioAnnualVolatilityPrct?: number | null | undefined, portfolioBeta?: number | null | undefined, portfolioEstimatedReturnPrct?: number | null | undefined, portfolioEstimatedReturnValue?: number | null | undefined, portfolioSharpRatio?: number | null | undefined, portfolioVolatilityMeanPrct?: number | null | undefined } | null | undefined, rank?: { __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string } | null | undefined, transactionsSnippets: Array<{ __typename?: 'STTransaction', transactionId?: string | null | undefined, symbol: string, price: number, return?: number | null | undefined, returnChange?: number | null | undefined, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number }>, topTransactions: Array<{ __typename?: 'STTransaction', transactionId?: string | null | undefined, symbol: string, price: number, return?: number | null | undefined, returnChange?: number | null | undefined, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number }>, holdings: Array<{ __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number, summary: { __typename?: 'Summary', avgVolume: number, ceo?: string | null | undefined, companyName: string, currency?: string | null | undefined, dividendDate?: string | null | undefined, ePSTTM?: number | null | undefined, earningsDate?: string | null | undefined, exDividendDate?: string | null | undefined, exchangeName?: string | null | undefined, fiveTwoWeekRange?: string | null | undefined, forwardDividendRate?: number | null | undefined, forwardDividendYield?: number | null | undefined, forwardEPS?: number | null | undefined, forwardPE?: number | null | undefined, fullTimeEmployees?: string | null | undefined, id: string, symbolType?: SymbolType | null | undefined, industry?: string | null | undefined, ipoDate?: string | null | undefined, beta?: string | null | undefined, countryFullName?: string | null | undefined, lastSplitDate?: string | null | undefined, lastSplitFactor?: string | null | undefined, logo_url?: string | null | undefined, longBusinessSummary?: string | null | undefined, marketCap: number, marketPrice: number, oneyTargetEst?: number | null | undefined, pERatioTTM?: number | null | undefined, previousClose: number, recommendationKey?: string | null | undefined, recommendationMean?: number | null | undefined, sandPFiveTwoWeekChange?: number | null | undefined, sector?: string | null | undefined, sharesOutstanding: number, shortRatio?: number | null | undefined, symbol: string, targetEstOneyPercent?: number | null | undefined, volume: number, website?: string | null | undefined, weekRangeFiveTwoMax?: number | null | undefined, weekRangeFiveTwoMin?: number | null | undefined, yearToDatePrice?: number | null | undefined, yearToDatePriceReturn?: number | null | undefined, isActivelyTrading?: boolean | null | undefined, residance?: { __typename?: 'SummaryResidance', city?: string | null | undefined, state?: string | null | undefined, country?: string | null | undefined, addressOne?: string | null | undefined, zip?: string | null | undefined } | null | undefined } }>, userHistoricalData: { __typename?: 'STUserHistoricalData', userLogs: Array<{ __typename?: 'STLog', date: string, logText: string }>, resetedAccount: Array<{ __typename?: 'STUserResetedAccount', date: string, portfolioTotal: number }>, bestAchievedRanks: Array<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }>, portfolioSnapshots: Array<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, transactionSnapshots: Array<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string }> }, groups: { __typename?: 'STUserGroups', groupOwner: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null | undefined, imagePath?: string | null | undefined, imageUrl?: string | null | undefined, startDate: string, endDate?: string | null | undefined, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfInvitationSent: number, numberOfInvitationReceived: number, lastUpdateDate: string, lastEditedDate: string, createdDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }>, currentAchievedRanks?: { __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string } | null | undefined }>, groupMember: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null | undefined, imagePath?: string | null | undefined, imageUrl?: string | null | undefined, startDate: string, endDate?: string | null | undefined, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfInvitationSent: number, numberOfInvitationReceived: number, lastUpdateDate: string, lastEditedDate: string, createdDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }>, currentAchievedRanks?: { __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string } | null | undefined }> } };

export type AuthenticateUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type AuthenticateUserQuery = { __typename?: 'Query', authenticateUser?: { __typename?: 'STUserPublicData', id: string, nickName: string, locale?: string | null | undefined, photoURL?: string | null | undefined, accountCreatedDate: string, lastSignInDate: string, activity?: User_Activity | null | undefined, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, portfolioRisk?: { __typename?: 'STPortfolioRiskCalculations', date?: string | null | undefined, portfolioAlpha?: number | null | undefined, portfolioAnnualVariancePrct?: number | null | undefined, portfolioAnnualVolatilityPrct?: number | null | undefined, portfolioBeta?: number | null | undefined, portfolioEstimatedReturnPrct?: number | null | undefined, portfolioEstimatedReturnValue?: number | null | undefined, portfolioSharpRatio?: number | null | undefined, portfolioVolatilityMeanPrct?: number | null | undefined } | null | undefined, rank?: { __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string } | null | undefined, transactionsSnippets: Array<{ __typename?: 'STTransaction', transactionId?: string | null | undefined, symbol: string, price: number, return?: number | null | undefined, returnChange?: number | null | undefined, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number }>, topTransactions: Array<{ __typename?: 'STTransaction', transactionId?: string | null | undefined, symbol: string, price: number, return?: number | null | undefined, returnChange?: number | null | undefined, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number }>, holdings: Array<{ __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number, summary: { __typename?: 'Summary', avgVolume: number, ceo?: string | null | undefined, companyName: string, currency?: string | null | undefined, dividendDate?: string | null | undefined, ePSTTM?: number | null | undefined, earningsDate?: string | null | undefined, exDividendDate?: string | null | undefined, exchangeName?: string | null | undefined, fiveTwoWeekRange?: string | null | undefined, forwardDividendRate?: number | null | undefined, forwardDividendYield?: number | null | undefined, forwardEPS?: number | null | undefined, forwardPE?: number | null | undefined, fullTimeEmployees?: string | null | undefined, id: string, symbolType?: SymbolType | null | undefined, industry?: string | null | undefined, ipoDate?: string | null | undefined, beta?: string | null | undefined, countryFullName?: string | null | undefined, lastSplitDate?: string | null | undefined, lastSplitFactor?: string | null | undefined, logo_url?: string | null | undefined, longBusinessSummary?: string | null | undefined, marketCap: number, marketPrice: number, oneyTargetEst?: number | null | undefined, pERatioTTM?: number | null | undefined, previousClose: number, recommendationKey?: string | null | undefined, recommendationMean?: number | null | undefined, sandPFiveTwoWeekChange?: number | null | undefined, sector?: string | null | undefined, sharesOutstanding: number, shortRatio?: number | null | undefined, symbol: string, targetEstOneyPercent?: number | null | undefined, volume: number, website?: string | null | undefined, weekRangeFiveTwoMax?: number | null | undefined, weekRangeFiveTwoMin?: number | null | undefined, yearToDatePrice?: number | null | undefined, yearToDatePriceReturn?: number | null | undefined, isActivelyTrading?: boolean | null | undefined, residance?: { __typename?: 'SummaryResidance', city?: string | null | undefined, state?: string | null | undefined, country?: string | null | undefined, addressOne?: string | null | undefined, zip?: string | null | undefined } | null | undefined } }>, groups: { __typename?: 'STUserGroups', groupInvitationSent: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null | undefined, imagePath?: string | null | undefined, imageUrl?: string | null | undefined, startDate: string, endDate?: string | null | undefined, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfInvitationSent: number, numberOfInvitationReceived: number, lastUpdateDate: string, lastEditedDate: string, createdDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }>, currentAchievedRanks?: { __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string } | null | undefined }>, groupInvitationReceived: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null | undefined, imagePath?: string | null | undefined, imageUrl?: string | null | undefined, startDate: string, endDate?: string | null | undefined, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfInvitationSent: number, numberOfInvitationReceived: number, lastUpdateDate: string, lastEditedDate: string, createdDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }>, currentAchievedRanks?: { __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string } | null | undefined }>, groupOwner: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null | undefined, imagePath?: string | null | undefined, imageUrl?: string | null | undefined, startDate: string, endDate?: string | null | undefined, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfInvitationSent: number, numberOfInvitationReceived: number, lastUpdateDate: string, lastEditedDate: string, createdDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }>, currentAchievedRanks?: { __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string } | null | undefined }>, groupMember: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null | undefined, imagePath?: string | null | undefined, imageUrl?: string | null | undefined, startDate: string, endDate?: string | null | undefined, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfInvitationSent: number, numberOfInvitationReceived: number, lastUpdateDate: string, lastEditedDate: string, createdDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }>, currentAchievedRanks?: { __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string } | null | undefined }> }, userHistoricalData: { __typename?: 'STUserHistoricalData', userLogs: Array<{ __typename?: 'STLog', date: string, logText: string }>, resetedAccount: Array<{ __typename?: 'STUserResetedAccount', date: string, portfolioTotal: number }>, bestAchievedRanks: Array<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }>, portfolioSnapshots: Array<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, transactionSnapshots: Array<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string }> }, userPrivateData: { __typename?: 'STUserPrivateData', tradingEnabledDate?: string | null | undefined, finnhubKey?: string | null | undefined, roles: Array<string | null | undefined>, email: string, displayName: string, providerId?: string | null | undefined, status: User_Status, nicknameLastChange?: string | null | undefined, tickets: Array<{ __typename?: 'STTicket', id: string, name: string, type: StTicketTypes, createdAt: string, isOpen: boolean, createdBy: { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string }, comments: Array<{ __typename?: 'STTicketComment', id: string, comment: string, createdAt: string, createdBy: { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string } }> }> }, stockWatchlist: Array<{ __typename?: 'STStockWatchlist', id: string, name: string, date?: string | null | undefined, userId: string, summaries: Array<{ __typename?: 'Summary', avgVolume: number, ceo?: string | null | undefined, companyName: string, currency?: string | null | undefined, dividendDate?: string | null | undefined, ePSTTM?: number | null | undefined, earningsDate?: string | null | undefined, exDividendDate?: string | null | undefined, exchangeName?: string | null | undefined, fiveTwoWeekRange?: string | null | undefined, forwardDividendRate?: number | null | undefined, forwardDividendYield?: number | null | undefined, forwardEPS?: number | null | undefined, forwardPE?: number | null | undefined, fullTimeEmployees?: string | null | undefined, id: string, symbolType?: SymbolType | null | undefined, industry?: string | null | undefined, ipoDate?: string | null | undefined, beta?: string | null | undefined, countryFullName?: string | null | undefined, lastSplitDate?: string | null | undefined, lastSplitFactor?: string | null | undefined, logo_url?: string | null | undefined, longBusinessSummary?: string | null | undefined, marketCap: number, marketPrice: number, oneyTargetEst?: number | null | undefined, pERatioTTM?: number | null | undefined, previousClose: number, recommendationKey?: string | null | undefined, recommendationMean?: number | null | undefined, sandPFiveTwoWeekChange?: number | null | undefined, sector?: string | null | undefined, sharesOutstanding: number, shortRatio?: number | null | undefined, symbol: string, targetEstOneyPercent?: number | null | undefined, volume: number, website?: string | null | undefined, weekRangeFiveTwoMax?: number | null | undefined, weekRangeFiveTwoMin?: number | null | undefined, yearToDatePrice?: number | null | undefined, yearToDatePriceReturn?: number | null | undefined, isActivelyTrading?: boolean | null | undefined, residance?: { __typename?: 'SummaryResidance', city?: string | null | undefined, state?: string | null | undefined, country?: string | null | undefined, addressOne?: string | null | undefined, zip?: string | null | undefined } | null | undefined }> }> } | null | undefined };

export type QueryUserIdentificationByUsernameQueryVariables = Exact<{
  usernamePrefix: Scalars['String'];
}>;


export type QueryUserIdentificationByUsernameQuery = { __typename?: 'Query', queryUserPublicDataByUsername: Array<{ __typename?: 'STUserPublicData', id: string, nickName: string, locale?: string | null | undefined, photoURL?: string | null | undefined, accountCreatedDate: string, lastSignInDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } } } | null | undefined> };

export type QueryStGroupMemberOverviewByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type QueryStGroupMemberOverviewByIdQuery = { __typename?: 'Query', queryUserPublicDataById?: { __typename?: 'STUserPublicData', nickName: string, locale?: string | null | undefined, photoURL?: string | null | undefined, accountCreatedDate: string, lastSignInDate: string, activity?: User_Activity | null | undefined, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, rank?: { __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string } | null | undefined, transactionsSnippets: Array<{ __typename?: 'STTransaction', transactionId?: string | null | undefined, symbol: string, price: number, return?: number | null | undefined, returnChange?: number | null | undefined, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number }>, topTransactions: Array<{ __typename?: 'STTransaction', transactionId?: string | null | undefined, symbol: string, price: number, return?: number | null | undefined, returnChange?: number | null | undefined, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number }>, holdings: Array<{ __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number, summary: { __typename?: 'Summary', avgVolume: number, ceo?: string | null | undefined, companyName: string, currency?: string | null | undefined, dividendDate?: string | null | undefined, ePSTTM?: number | null | undefined, earningsDate?: string | null | undefined, exDividendDate?: string | null | undefined, exchangeName?: string | null | undefined, fiveTwoWeekRange?: string | null | undefined, forwardDividendRate?: number | null | undefined, forwardDividendYield?: number | null | undefined, forwardEPS?: number | null | undefined, forwardPE?: number | null | undefined, fullTimeEmployees?: string | null | undefined, id: string, symbolType?: SymbolType | null | undefined, industry?: string | null | undefined, ipoDate?: string | null | undefined, beta?: string | null | undefined, countryFullName?: string | null | undefined, lastSplitDate?: string | null | undefined, lastSplitFactor?: string | null | undefined, logo_url?: string | null | undefined, longBusinessSummary?: string | null | undefined, marketCap: number, marketPrice: number, oneyTargetEst?: number | null | undefined, pERatioTTM?: number | null | undefined, previousClose: number, recommendationKey?: string | null | undefined, recommendationMean?: number | null | undefined, sandPFiveTwoWeekChange?: number | null | undefined, sector?: string | null | undefined, sharesOutstanding: number, shortRatio?: number | null | undefined, symbol: string, targetEstOneyPercent?: number | null | undefined, volume: number, website?: string | null | undefined, weekRangeFiveTwoMax?: number | null | undefined, weekRangeFiveTwoMin?: number | null | undefined, yearToDatePrice?: number | null | undefined, yearToDatePriceReturn?: number | null | undefined, isActivelyTrading?: boolean | null | undefined, residance?: { __typename?: 'SummaryResidance', city?: string | null | undefined, state?: string | null | undefined, country?: string | null | undefined, addressOne?: string | null | undefined, zip?: string | null | undefined } | null | undefined } }>, userHistoricalData: { __typename?: 'STUserHistoricalData', userLogs: Array<{ __typename?: 'STLog', date: string, logText: string }>, resetedAccount: Array<{ __typename?: 'STUserResetedAccount', date: string, portfolioTotal: number }>, bestAchievedRanks: Array<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }>, portfolioSnapshots: Array<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, transactionSnapshots: Array<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string }> } } | null | undefined };

export type QueryStUserPublicDataSearchByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type QueryStUserPublicDataSearchByIdQuery = { __typename?: 'Query', queryUserPublicDataById?: { __typename?: 'STUserPublicData', nickName: string, locale?: string | null | undefined, photoURL?: string | null | undefined, accountCreatedDate: string, lastSignInDate: string, activity?: User_Activity | null | undefined, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, portfolioRisk?: { __typename?: 'STPortfolioRiskCalculations', date?: string | null | undefined, portfolioAlpha?: number | null | undefined, portfolioAnnualVariancePrct?: number | null | undefined, portfolioAnnualVolatilityPrct?: number | null | undefined, portfolioBeta?: number | null | undefined, portfolioEstimatedReturnPrct?: number | null | undefined, portfolioEstimatedReturnValue?: number | null | undefined, portfolioSharpRatio?: number | null | undefined, portfolioVolatilityMeanPrct?: number | null | undefined } | null | undefined, rank?: { __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string } | null | undefined, transactionsSnippets: Array<{ __typename?: 'STTransaction', transactionId?: string | null | undefined, symbol: string, price: number, return?: number | null | undefined, returnChange?: number | null | undefined, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number }>, topTransactions: Array<{ __typename?: 'STTransaction', transactionId?: string | null | undefined, symbol: string, price: number, return?: number | null | undefined, returnChange?: number | null | undefined, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number }>, holdings: Array<{ __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number, summary: { __typename?: 'Summary', avgVolume: number, ceo?: string | null | undefined, companyName: string, currency?: string | null | undefined, dividendDate?: string | null | undefined, ePSTTM?: number | null | undefined, earningsDate?: string | null | undefined, exDividendDate?: string | null | undefined, exchangeName?: string | null | undefined, fiveTwoWeekRange?: string | null | undefined, forwardDividendRate?: number | null | undefined, forwardDividendYield?: number | null | undefined, forwardEPS?: number | null | undefined, forwardPE?: number | null | undefined, fullTimeEmployees?: string | null | undefined, id: string, symbolType?: SymbolType | null | undefined, industry?: string | null | undefined, ipoDate?: string | null | undefined, beta?: string | null | undefined, countryFullName?: string | null | undefined, lastSplitDate?: string | null | undefined, lastSplitFactor?: string | null | undefined, logo_url?: string | null | undefined, longBusinessSummary?: string | null | undefined, marketCap: number, marketPrice: number, oneyTargetEst?: number | null | undefined, pERatioTTM?: number | null | undefined, previousClose: number, recommendationKey?: string | null | undefined, recommendationMean?: number | null | undefined, sandPFiveTwoWeekChange?: number | null | undefined, sector?: string | null | undefined, sharesOutstanding: number, shortRatio?: number | null | undefined, symbol: string, targetEstOneyPercent?: number | null | undefined, volume: number, website?: string | null | undefined, weekRangeFiveTwoMax?: number | null | undefined, weekRangeFiveTwoMin?: number | null | undefined, yearToDatePrice?: number | null | undefined, yearToDatePriceReturn?: number | null | undefined, isActivelyTrading?: boolean | null | undefined, residance?: { __typename?: 'SummaryResidance', city?: string | null | undefined, state?: string | null | undefined, country?: string | null | undefined, addressOne?: string | null | undefined, zip?: string | null | undefined } | null | undefined } }>, userHistoricalData: { __typename?: 'STUserHistoricalData', userLogs: Array<{ __typename?: 'STLog', date: string, logText: string }>, resetedAccount: Array<{ __typename?: 'STUserResetedAccount', date: string, portfolioTotal: number }>, bestAchievedRanks: Array<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }>, portfolioSnapshots: Array<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, transactionSnapshots: Array<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string }> }, groups: { __typename?: 'STUserGroups', groupOwner: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null | undefined, imagePath?: string | null | undefined, imageUrl?: string | null | undefined, startDate: string, endDate?: string | null | undefined, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfInvitationSent: number, numberOfInvitationReceived: number, lastUpdateDate: string, lastEditedDate: string, createdDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }>, currentAchievedRanks?: { __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string } | null | undefined }>, groupMember: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null | undefined, imagePath?: string | null | undefined, imageUrl?: string | null | undefined, startDate: string, endDate?: string | null | undefined, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfInvitationSent: number, numberOfInvitationReceived: number, lastUpdateDate: string, lastEditedDate: string, createdDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null | undefined, photoURL: string, accountCreatedDate: string, previousPosition?: number | null | undefined, currentPosition?: number | null | undefined, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: number | null | undefined, lastPortfolioIncreasePrct?: number | null | undefined, transactionFees?: number | null | undefined, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null | undefined, transactionsSell?: number | null | undefined, transactionFees?: number | null | undefined, date: string } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: number | null | undefined } }>, currentAchievedRanks?: { __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string } | null | undefined }> } } | null | undefined };

export type RegisterUserMutationVariables = Exact<{
  stUserAuthenticationInput: StUserAuthenticationInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser?: boolean | null | undefined };

export type EditUserMutationVariables = Exact<{
  editInput: StUserEditDataInput;
}>;


export type EditUserMutation = { __typename?: 'Mutation', editUser?: boolean | null | undefined };

export type ResetUserAccountMutationVariables = Exact<{
  userId: Scalars['String'];
}>;


export type ResetUserAccountMutation = { __typename?: 'Mutation', resetUserAccount?: { __typename?: 'STUserResetedAccount', date: string, portfolioTotal: number } | null | undefined };

export type StStockWatchlistFragmentFragment = { __typename?: 'STStockWatchlist', id: string, name: string, date?: string | null | undefined, userId: string, summaries: Array<{ __typename?: 'Summary', avgVolume: number, ceo?: string | null | undefined, companyName: string, currency?: string | null | undefined, dividendDate?: string | null | undefined, ePSTTM?: number | null | undefined, earningsDate?: string | null | undefined, exDividendDate?: string | null | undefined, exchangeName?: string | null | undefined, fiveTwoWeekRange?: string | null | undefined, forwardDividendRate?: number | null | undefined, forwardDividendYield?: number | null | undefined, forwardEPS?: number | null | undefined, forwardPE?: number | null | undefined, fullTimeEmployees?: string | null | undefined, id: string, symbolType?: SymbolType | null | undefined, industry?: string | null | undefined, ipoDate?: string | null | undefined, beta?: string | null | undefined, countryFullName?: string | null | undefined, lastSplitDate?: string | null | undefined, lastSplitFactor?: string | null | undefined, logo_url?: string | null | undefined, longBusinessSummary?: string | null | undefined, marketCap: number, marketPrice: number, oneyTargetEst?: number | null | undefined, pERatioTTM?: number | null | undefined, previousClose: number, recommendationKey?: string | null | undefined, recommendationMean?: number | null | undefined, sandPFiveTwoWeekChange?: number | null | undefined, sector?: string | null | undefined, sharesOutstanding: number, shortRatio?: number | null | undefined, symbol: string, targetEstOneyPercent?: number | null | undefined, volume: number, website?: string | null | undefined, weekRangeFiveTwoMax?: number | null | undefined, weekRangeFiveTwoMin?: number | null | undefined, yearToDatePrice?: number | null | undefined, yearToDatePriceReturn?: number | null | undefined, isActivelyTrading?: boolean | null | undefined, residance?: { __typename?: 'SummaryResidance', city?: string | null | undefined, state?: string | null | undefined, country?: string | null | undefined, addressOne?: string | null | undefined, zip?: string | null | undefined } | null | undefined }> };

export type CreateStockWatchlistMutationVariables = Exact<{
  identifier: StStockWatchInputlistIdentifier;
}>;


export type CreateStockWatchlistMutation = { __typename?: 'Mutation', createStockWatchlist?: { __typename?: 'STStockWatchlist', id: string, name: string, date?: string | null | undefined, userId: string, summaries: Array<{ __typename?: 'Summary', avgVolume: number, ceo?: string | null | undefined, companyName: string, currency?: string | null | undefined, dividendDate?: string | null | undefined, ePSTTM?: number | null | undefined, earningsDate?: string | null | undefined, exDividendDate?: string | null | undefined, exchangeName?: string | null | undefined, fiveTwoWeekRange?: string | null | undefined, forwardDividendRate?: number | null | undefined, forwardDividendYield?: number | null | undefined, forwardEPS?: number | null | undefined, forwardPE?: number | null | undefined, fullTimeEmployees?: string | null | undefined, id: string, symbolType?: SymbolType | null | undefined, industry?: string | null | undefined, ipoDate?: string | null | undefined, beta?: string | null | undefined, countryFullName?: string | null | undefined, lastSplitDate?: string | null | undefined, lastSplitFactor?: string | null | undefined, logo_url?: string | null | undefined, longBusinessSummary?: string | null | undefined, marketCap: number, marketPrice: number, oneyTargetEst?: number | null | undefined, pERatioTTM?: number | null | undefined, previousClose: number, recommendationKey?: string | null | undefined, recommendationMean?: number | null | undefined, sandPFiveTwoWeekChange?: number | null | undefined, sector?: string | null | undefined, sharesOutstanding: number, shortRatio?: number | null | undefined, symbol: string, targetEstOneyPercent?: number | null | undefined, volume: number, website?: string | null | undefined, weekRangeFiveTwoMax?: number | null | undefined, weekRangeFiveTwoMin?: number | null | undefined, yearToDatePrice?: number | null | undefined, yearToDatePriceReturn?: number | null | undefined, isActivelyTrading?: boolean | null | undefined, residance?: { __typename?: 'SummaryResidance', city?: string | null | undefined, state?: string | null | undefined, country?: string | null | undefined, addressOne?: string | null | undefined, zip?: string | null | undefined } | null | undefined }> } | null | undefined };

export type AddStockIntoWatchlistMutationVariables = Exact<{
  identifier: StStockWatchInputlistIdentifier;
}>;


export type AddStockIntoWatchlistMutation = { __typename?: 'Mutation', addStockIntoStockWatchlist?: { __typename?: 'Summary', avgVolume: number, ceo?: string | null | undefined, companyName: string, currency?: string | null | undefined, dividendDate?: string | null | undefined, ePSTTM?: number | null | undefined, earningsDate?: string | null | undefined, exDividendDate?: string | null | undefined, exchangeName?: string | null | undefined, fiveTwoWeekRange?: string | null | undefined, forwardDividendRate?: number | null | undefined, forwardDividendYield?: number | null | undefined, forwardEPS?: number | null | undefined, forwardPE?: number | null | undefined, fullTimeEmployees?: string | null | undefined, id: string, symbolType?: SymbolType | null | undefined, industry?: string | null | undefined, ipoDate?: string | null | undefined, beta?: string | null | undefined, countryFullName?: string | null | undefined, lastSplitDate?: string | null | undefined, lastSplitFactor?: string | null | undefined, logo_url?: string | null | undefined, longBusinessSummary?: string | null | undefined, marketCap: number, marketPrice: number, oneyTargetEst?: number | null | undefined, pERatioTTM?: number | null | undefined, previousClose: number, recommendationKey?: string | null | undefined, recommendationMean?: number | null | undefined, sandPFiveTwoWeekChange?: number | null | undefined, sector?: string | null | undefined, sharesOutstanding: number, shortRatio?: number | null | undefined, symbol: string, targetEstOneyPercent?: number | null | undefined, volume: number, website?: string | null | undefined, weekRangeFiveTwoMax?: number | null | undefined, weekRangeFiveTwoMin?: number | null | undefined, yearToDatePrice?: number | null | undefined, yearToDatePriceReturn?: number | null | undefined, isActivelyTrading?: boolean | null | undefined, residance?: { __typename?: 'SummaryResidance', city?: string | null | undefined, state?: string | null | undefined, country?: string | null | undefined, addressOne?: string | null | undefined, zip?: string | null | undefined } | null | undefined } | null | undefined };

export type RemoveStockFromWatchlistMutationVariables = Exact<{
  identifier: StStockWatchInputlistIdentifier;
}>;


export type RemoveStockFromWatchlistMutation = { __typename?: 'Mutation', removeStockFromStockWatchlist?: boolean | null | undefined };

export type DeleteUserWatchlistMutationVariables = Exact<{
  identifier: StStockWatchInputlistIdentifier;
}>;


export type DeleteUserWatchlistMutation = { __typename?: 'Mutation', deleteWatchlist?: boolean | null | undefined };

export type RenameStockWatchlistMutationVariables = Exact<{
  identifier: StStockWatchInputlistIdentifier;
}>;


export type RenameStockWatchlistMutation = { __typename?: 'Mutation', renameStockWatchlist?: boolean | null | undefined };

export const StUserIndetificationBaseFragmentFragmentDoc = gql`
    fragment StUserIndetificationBaseFragment on STUserIndetificationBase {
  nickName
  locale
  photoURL
  accountCreatedDate
}
    `;
export const StUserIndetificationFragmentFragmentDoc = gql`
    fragment StUserIndetificationFragment on STUserIndetification {
  id
  nickName
  locale
  photoURL
  accountCreatedDate
}
    `;
export const StTicketCommentFragmentFragmentDoc = gql`
    fragment STTicketCommentFragment on STTicketComment {
  id
  createdBy {
    ...StUserIndetificationFragment
  }
  comment
  createdAt
}
    ${StUserIndetificationFragmentFragmentDoc}`;
export const StTicketFragmentFragmentDoc = gql`
    fragment STTicketFragment on STTicket {
  id
  name
  type
  createdBy {
    ...StUserIndetificationFragment
  }
  createdAt
  isOpen
  comments {
    ...STTicketCommentFragment
  }
}
    ${StUserIndetificationFragmentFragmentDoc}
${StTicketCommentFragmentFragmentDoc}`;
export const StAdminMainInformationsFragmentFragmentDoc = gql`
    fragment STAdminMainInformationsFragment on STAdminMainInformations {
  lastStockDetailsReload
  usersRegistrated
  usersActive
  usersRegistrationSnippets {
    ...StUserIndetificationBaseFragment
  }
  usersWeeklyRegistrated {
    data
    timestamp
  }
  tickets {
    ...STTicketFragment
  }
}
    ${StUserIndetificationBaseFragmentFragmentDoc}
${StTicketFragmentFragmentDoc}`;
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
export const StfmSocialSentimentFragmentFragmentDoc = gql`
    fragment STFMSocialSentimentFragment on STFMSocialSentiment {
  absoluteIndex
  date
  generalPerception
  redditCommentMentions
  redditCommentSentiment
  redditPostMentions
  redditPostSentiment
  relativeIndex
  sentiment
  stocktwitsPostMentions
  stocktwitsPostSentiment
  symbol
  tweetMentions
  tweetSentiment
  yahooFinanceCommentMentions
  yahooFinanceCommentSentiment
}
    `;
export const StAnalystEstimatesFragmentFragmentDoc = gql`
    fragment STAnalystEstimatesFragment on STAnalystEstimates {
  date
  estimatedEbitAvg
  estimatedEbitHigh
  estimatedEbitLow
  estimatedEbitdaAvg
  estimatedEbitdaHigh
  estimatedEbitdaLow
  estimatedEpsAvg
  estimatedEpsHigh
  estimatedEpsLow
  estimatedNetIncomeAvg
  estimatedNetIncomeHigh
  estimatedNetIncomeLow
  estimatedRevenueAvg
  estimatedRevenueHigh
  estimatedRevenueLow
  estimatedSgaExpenseAvg
  estimatedSgaExpenseHigh
  estimatedSgaExpenseLow
  numberAnalystEstimatedRevenue
  numberAnalystsEstimatedEps
  symbol
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
  transactionFees
  date
}
    `;
export const StPortfolioWrapperFragmentFragmentDoc = gql`
    fragment STPortfolioWrapperFragment on STPortfolioWrapper {
  portfolioCash
  numberOfExecutedBuyTransactions
  numberOfExecutedSellTransactions
  lastPortfolioIncreaseNumber
  lastPortfolioIncreasePrct
  lastPortfolioSnapshot {
    ...STPortfolioSnapshotFragment
  }
  lastTransactionSnapshot {
    ...STTransactionSnapshotFragment
  }
  transactionFees
}
    ${StPortfolioSnapshotFragmentFragmentDoc}
${StTransactionSnapshotFragmentFragmentDoc}`;
export const StPortfolioSnapshotStartedFragmentFragmentDoc = gql`
    fragment STPortfolioSnapshotStartedFragment on STPortfolioSnapshotStarted {
  portfolioInvested
  portfolioCash
  date
  numberOfExecutedBuyTransactions
  numberOfExecutedSellTransactions
  transactionFees
}
    `;
export const StGroupUserFragmentFragmentDoc = gql`
    fragment STGroupUserFragment on STGroupUser {
  id
  nickName
  locale
  photoURL
  accountCreatedDate
  portfolio {
    ...STPortfolioWrapperFragment
  }
  startedPortfolio {
    ...STPortfolioSnapshotStartedFragment
  }
  previousPosition
  currentPosition
  sinceDate
}
    ${StPortfolioWrapperFragmentFragmentDoc}
${StPortfolioSnapshotStartedFragmentFragmentDoc}`;
export const StTransactionFragmentWithUserFragmentDoc = gql`
    fragment STTransactionFragmentWithUser on STTransaction {
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
  transactionFees
  user {
    id
    nickName
    locale
    photoURL
    accountCreatedDate
  }
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
export const StLogsFragmentFragmentDoc = gql`
    fragment STLogsFragment on STLog {
  date
  logText
}
    `;
export const StGroupAllDataWithoutHoldingsFragmentDoc = gql`
    fragment STGroupAllDataWithoutHoldings on STGroupAllData {
  id
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
  isClosed
  numberOfMembers
  numberOfInvitationSent
  numberOfInvitationReceived
  portfolio {
    ...STPortfolioWrapperFragment
  }
  startedPortfolio {
    ...STPortfolioSnapshotStartedFragment
  }
  lastTransactions {
    ...STTransactionFragmentWithUser
  }
  groupMemberData {
    id
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
  currentAchievedRanks {
    ...STRankFragment
  }
  topTransactions {
    ...STTransactionFragmentWithUser
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
  managers {
    ...STGroupUserFragment
  }
}
    ${StGroupUserFragmentFragmentDoc}
${StPortfolioWrapperFragmentFragmentDoc}
${StPortfolioSnapshotStartedFragmentFragmentDoc}
${StTransactionFragmentWithUserFragmentDoc}
${StRankFragmentFragmentDoc}
${StPortfolioSnapshotFragmentFragmentDoc}
${StTransactionSnapshotFragmentFragmentDoc}
${StLogsFragmentFragmentDoc}`;
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
  symbolType
  industry
  ipoDate
  beta
  countryFullName
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
  isActivelyTrading
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
export const StGroupAllDataGroupMemberDataFragmentDoc = gql`
    fragment STGroupAllDataGroupMemberData on STGroupAllData {
  id
  name
  groupMemberData {
    id
    members {
      ...STGroupUserFragment
    }
    holdings {
      holding {
        ...STHoldingFragment
      }
      numberOfUsers
    }
    invitationSent {
      ...STGroupUserFragment
    }
    invitationReceived {
      ...STGroupUserFragment
    }
  }
}
    ${StGroupUserFragmentFragmentDoc}
${StHoldingFragmentFragmentDoc}`;
export const StGroupAllDataFragmentFragmentDoc = gql`
    fragment STGroupAllDataFragment on STGroupAllData {
  ...STGroupAllDataWithoutHoldings
  ...STGroupAllDataGroupMemberData
}
    ${StGroupAllDataWithoutHoldingsFragmentDoc}
${StGroupAllDataGroupMemberDataFragmentDoc}`;
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
  dividendPayoutRatioTTM
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
export const StUserIndentificationDataFragmentDoc = gql`
    fragment STUserIndentificationData on STUserPublicData {
  id
  nickName
  locale
  photoURL
  accountCreatedDate
  lastSignInDate
  portfolio {
    ...STPortfolioWrapperFragment
  }
}
    ${StPortfolioWrapperFragmentFragmentDoc}`;
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
  transactionFees
}
    `;
export const StGroupMemberOverviewFragmentDoc = gql`
    fragment StGroupMemberOverview on STUserPublicData {
  nickName
  locale
  photoURL
  accountCreatedDate
  lastSignInDate
  portfolio {
    ...STPortfolioWrapperFragment
  }
  rank {
    ...STRankFragment
  }
  transactionsSnippets {
    ...STTransactionFragment
  }
  topTransactions {
    ...STTransactionFragment
  }
  holdings {
    ...STHoldingFragment
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
}
    ${StPortfolioWrapperFragmentFragmentDoc}
${StRankFragmentFragmentDoc}
${StTransactionFragmentFragmentDoc}
${StHoldingFragmentFragmentDoc}
${StLogsFragmentFragmentDoc}
${StPortfolioSnapshotFragmentFragmentDoc}
${StTransactionSnapshotFragmentFragmentDoc}`;
export const StPortfolioRiskCalculationsFragmentFragmentDoc = gql`
    fragment STPortfolioRiskCalculationsFragment on STPortfolioRiskCalculations {
  date
  portfolioAlpha
  portfolioAnnualVariancePrct
  portfolioAnnualVolatilityPrct
  portfolioBeta
  portfolioEstimatedReturnPrct
  portfolioEstimatedReturnValue
  portfolioSharpRatio
  portfolioVolatilityMeanPrct
}
    `;
export const StGroupIdentificationDataFragmentDoc = gql`
    fragment STGroupIdentificationData on STGroupAllData {
  id
  name
  description
  imagePath
  imageUrl
  owner {
    ...STGroupUserFragment
  }
  startDate
  endDate
  isInfinite
  isPrivate
  isClosed
  numberOfMembers
  numberOfInvitationSent
  numberOfInvitationReceived
  portfolio {
    ...STPortfolioWrapperFragment
  }
  startedPortfolio {
    ...STPortfolioSnapshotStartedFragment
  }
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
${StPortfolioWrapperFragmentFragmentDoc}
${StPortfolioSnapshotStartedFragmentFragmentDoc}
${StRankFragmentFragmentDoc}`;
export const StUserPublicDataSearchFragmentDoc = gql`
    fragment StUserPublicDataSearch on STUserPublicData {
  nickName
  locale
  photoURL
  accountCreatedDate
  lastSignInDate
  portfolio {
    ...STPortfolioWrapperFragment
  }
  portfolioRisk {
    ...STPortfolioRiskCalculationsFragment
  }
  rank {
    ...STRankFragment
  }
  transactionsSnippets {
    ...STTransactionFragment
  }
  topTransactions {
    ...STTransactionFragment
  }
  holdings {
    ...STHoldingFragment
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
  groups {
    groupOwner {
      ...STGroupIdentificationData
    }
    groupMember {
      ...STGroupIdentificationData
    }
  }
}
    ${StPortfolioWrapperFragmentFragmentDoc}
${StPortfolioRiskCalculationsFragmentFragmentDoc}
${StRankFragmentFragmentDoc}
${StTransactionFragmentFragmentDoc}
${StHoldingFragmentFragmentDoc}
${StLogsFragmentFragmentDoc}
${StPortfolioSnapshotFragmentFragmentDoc}
${StTransactionSnapshotFragmentFragmentDoc}
${StGroupIdentificationDataFragmentDoc}`;
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
    ...STAdminMainInformationsFragment
  }
}
    ${StAdminMainInformationsFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class QueryAdminMainInformationsGQL extends Apollo.Query<QueryAdminMainInformationsQuery, QueryAdminMainInformationsQueryVariables> {
    document = QueryAdminMainInformationsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ValidatorFinhubKeyValidityDocument = gql`
    query ValidatorFinhubKeyValidity($finuhbKey: String!) {
  validatorFinhubKeyValidity(finuhbKey: $finuhbKey)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ValidatorFinhubKeyValidityGQL extends Apollo.Query<ValidatorFinhubKeyValidityQuery, ValidatorFinhubKeyValidityQueryVariables> {
    document = ValidatorFinhubKeyValidityDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const QueryStGroupByGroupIdDocument = gql`
    query QuerySTGroupByGroupId($id: String!) {
  querySTGroupByGroupId(id: $id) {
    ...STGroupAllDataFragment
  }
}
    ${StGroupAllDataFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class QueryStGroupByGroupIdGQL extends Apollo.Query<QueryStGroupByGroupIdQuery, QueryStGroupByGroupIdQueryVariables> {
    document = QueryStGroupByGroupIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const QueryStGroupByGroupIdWithoutHoldingDocument = gql`
    query QuerySTGroupByGroupIdWithoutHolding($id: String!) {
  querySTGroupByGroupId(id: $id) {
    ...STGroupAllDataWithoutHoldings
  }
}
    ${StGroupAllDataWithoutHoldingsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class QueryStGroupByGroupIdWithoutHoldingGQL extends Apollo.Query<QueryStGroupByGroupIdWithoutHoldingQuery, QueryStGroupByGroupIdWithoutHoldingQueryVariables> {
    document = QueryStGroupByGroupIdWithoutHoldingDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const QueryStGroupByGroupIdGroupMemberDataDocument = gql`
    query QuerySTGroupByGroupIdGroupMemberData($id: String!) {
  querySTGroupByGroupId(id: $id) {
    ...STGroupAllDataGroupMemberData
  }
}
    ${StGroupAllDataGroupMemberDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class QueryStGroupByGroupIdGroupMemberDataGQL extends Apollo.Query<QueryStGroupByGroupIdGroupMemberDataQuery, QueryStGroupByGroupIdGroupMemberDataQueryVariables> {
    document = QueryStGroupByGroupIdGroupMemberDataDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const QueryStGroupByGroupNameDocument = gql`
    query QuerySTGroupByGroupName($groupName: String!) {
  querySTGroupByGroupName(groupName: $groupName) {
    ...STGroupIdentificationData
  }
}
    ${StGroupIdentificationDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class QueryStGroupByGroupNameGQL extends Apollo.Query<QueryStGroupByGroupNameQuery, QueryStGroupByGroupNameQueryVariables> {
    document = QueryStGroupByGroupNameDocument;
    
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
  editGroup(groupInput: $groupInput)
}
    `;

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
    mutation DeleteGroup($id: String!) {
  deleteGroup(id: $id)
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
    mutation ToggleInvitationRequestToGroup($id: String!, $sendInvitation: Boolean!) {
  toggleInvitationRequestToGroup(id: $id, sendInvitation: $sendInvitation) {
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
    mutation AnswerReceivedGroupInvitation($id: String!, $accept: Boolean!) {
  answerReceivedGroupInvitation(id: $id, accept: $accept) {
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
    mutation LeaveGroup($id: String!) {
  leaveGroup(id: $id)
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
export const RemoveMemberFromGroupDocument = gql`
    mutation RemoveMemberFromGroup($groupId: String!, $removingUserId: String!) {
  removeMemberFromGroup(groupId: $groupId, removingUserId: $removingUserId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RemoveMemberFromGroupGQL extends Apollo.Mutation<RemoveMemberFromGroupMutation, RemoveMemberFromGroupMutationVariables> {
    document = RemoveMemberFromGroupDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ToggleInviteUserIntoGroupDocument = gql`
    mutation ToggleInviteUserIntoGroup($inviteUser: Boolean!, $userId: String!, $groupId: String!) {
  toggleInviteUserIntoGroup(
    inviteUser: $inviteUser
    userId: $userId
    groupId: $groupId
  ) {
    ...STGroupUserFragment
  }
}
    ${StGroupUserFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ToggleInviteUserIntoGroupGQL extends Apollo.Mutation<ToggleInviteUserIntoGroupMutation, ToggleInviteUserIntoGroupMutationVariables> {
    document = ToggleInviteUserIntoGroupDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ToggleUsersInvitationRequestToGroupDocument = gql`
    mutation ToggleUsersInvitationRequestToGroup($acceptUser: Boolean!, $userId: String!, $groupId: String!) {
  toggleUsersInvitationRequestToGroup(
    acceptUser: $acceptUser
    userId: $userId
    groupId: $groupId
  ) {
    ...STGroupUserFragment
  }
}
    ${StGroupUserFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ToggleUsersInvitationRequestToGroupGQL extends Apollo.Mutation<ToggleUsersInvitationRequestToGroupMutation, ToggleUsersInvitationRequestToGroupMutationVariables> {
    document = ToggleUsersInvitationRequestToGroupDocument;
    
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
    lastUpdateTopStocks
    stockScreener {
      symbol
      companyName
      marketCap
      sector
      industry
      beta
      price
      lastAnnualDividend
      volume
      exchange
      exchangeShortName
      country
      isEtf
      isActivelyTrading
      companyQuote {
        ...STFMCompanyQuoteFragment
      }
    }
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
export const QueryStockScreenerDocument = gql`
    query QueryStockScreener($stockScreenerInput: STFMStockScreenerInput!, $offset: Int!, $limit: Int!) {
  queryStockScreener(
    stockScreenerInput: $stockScreenerInput
    offset: $offset
    limit: $limit
  ) {
    result {
      symbol
      companyName
      marketCap
      sector
      industry
      beta
      price
      lastAnnualDividend
      volume
      exchange
      exchangeShortName
      country
      isEtf
      isActivelyTrading
      companyQuote {
        ...STFMCompanyQuoteFragment
      }
    }
    found
    offset
    limit
  }
}
    ${StfmCompanyQuoteFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class QueryStockScreenerGQL extends Apollo.Query<QueryStockScreenerQuery, QueryStockScreenerQueryVariables> {
    document = QueryStockScreenerDocument;
    
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
      symbol
      date
      alpha
      beta
      sharpRatio
      volatility {
        benchmarkYearlyReturnPrct
        meanPrice
        stdDailyPrct
        stdDailyPrice
        stdYearlyPrct
        stdYearlyPrice
        symbolYearlyPriceReturnPrct
        volatilityPrct
        date
      }
      CAPM {
        beta
        Rf
        Rm
        result
      }
      WACC {
        CAPM {
          beta
          Rf
          Rm
          result
        }
        Rd
        Re
        Wd
        We
        result
        taxRate
      }
    }
    socialSentiment {
      ...STFMSocialSentimentFragment
    }
    analystEstimates {
      ...STAnalystEstimatesFragment
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
${StfmSocialSentimentFragmentFragmentDoc}
${StAnalystEstimatesFragmentFragmentDoc}
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
    query QueryStockSummary($symbol: String!, $allowReload: Boolean = true) {
  queryStockSummary(symbol: $symbol, allowReload: $allowReload) {
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
export const CreateTicketDocument = gql`
    mutation CreateTicket($ticketValuse: STTicketCreateValues!) {
  createTicket(ticketValuse: $ticketValuse) {
    ...STTicketFragment
  }
}
    ${StTicketFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateTicketGQL extends Apollo.Mutation<CreateTicketMutation, CreateTicketMutationVariables> {
    document = CreateTicketDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CommentTicketDocument = gql`
    mutation CommentTicket($ticketId: String!, $comment: String!) {
  commentTicket(ticketId: $ticketId, comment: $comment) {
    ...STTicketCommentFragment
  }
}
    ${StTicketCommentFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CommentTicketGQL extends Apollo.Mutation<CommentTicketMutation, CommentTicketMutationVariables> {
    document = CommentTicketDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CommentTicketEditDocument = gql`
    mutation CommentTicketEdit($commentEditValues: STTicketCommentEditValues!) {
  commentTicketEdit(commentEditValues: $commentEditValues)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CommentTicketEditGQL extends Apollo.Mutation<CommentTicketEditMutation, CommentTicketEditMutationVariables> {
    document = CommentTicketEditDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CloseTicketDocument = gql`
    mutation CloseTicket($ticketId: String!) {
  closeTicket(ticketId: $ticketId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CloseTicketGQL extends Apollo.Mutation<CloseTicketMutation, CloseTicketMutationVariables> {
    document = CloseTicketDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteTicketDocument = gql`
    mutation DeleteTicket($ticketId: String!) {
  deleteTicket(ticketId: $ticketId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteTicketGQL extends Apollo.Mutation<DeleteTicketMutation, DeleteTicketMutationVariables> {
    document = DeleteTicketDocument;
    
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
    portfolio {
      ...STPortfolioWrapperFragment
    }
    portfolioRisk {
      ...STPortfolioRiskCalculationsFragment
    }
    rank {
      ...STRankFragment
    }
    transactionsSnippets {
      ...STTransactionFragment
    }
    topTransactions {
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
      tickets {
        ...STTicketFragment
      }
    }
    stockWatchlist {
      ...STStockWatchlistFragment
    }
  }
}
    ${StPortfolioWrapperFragmentFragmentDoc}
${StPortfolioRiskCalculationsFragmentFragmentDoc}
${StRankFragmentFragmentDoc}
${StTransactionFragmentFragmentDoc}
${StHoldingFragmentFragmentDoc}
${StGroupIdentificationDataFragmentDoc}
${StLogsFragmentFragmentDoc}
${StPortfolioSnapshotFragmentFragmentDoc}
${StTransactionSnapshotFragmentFragmentDoc}
${StTicketFragmentFragmentDoc}
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
export const QueryUserIdentificationByUsernameDocument = gql`
    query QueryUserIdentificationByUsername($usernamePrefix: String!) {
  queryUserPublicDataByUsername(usernamePrefix: $usernamePrefix) {
    ...STUserIndentificationData
  }
}
    ${StUserIndentificationDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class QueryUserIdentificationByUsernameGQL extends Apollo.Query<QueryUserIdentificationByUsernameQuery, QueryUserIdentificationByUsernameQueryVariables> {
    document = QueryUserIdentificationByUsernameDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const QueryStGroupMemberOverviewByIdDocument = gql`
    query QueryStGroupMemberOverviewById($id: String!) {
  queryUserPublicDataById(id: $id) {
    ...StGroupMemberOverview
  }
}
    ${StGroupMemberOverviewFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class QueryStGroupMemberOverviewByIdGQL extends Apollo.Query<QueryStGroupMemberOverviewByIdQuery, QueryStGroupMemberOverviewByIdQueryVariables> {
    document = QueryStGroupMemberOverviewByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const QueryStUserPublicDataSearchByIdDocument = gql`
    query QueryStUserPublicDataSearchById($id: String!) {
  queryUserPublicDataById(id: $id) {
    ...StUserPublicDataSearch
  }
}
    ${StUserPublicDataSearchFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class QueryStUserPublicDataSearchByIdGQL extends Apollo.Query<QueryStUserPublicDataSearchByIdQuery, QueryStUserPublicDataSearchByIdQueryVariables> {
    document = QueryStUserPublicDataSearchByIdDocument;
    
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