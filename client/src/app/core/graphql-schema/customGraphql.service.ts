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
  currentQuarterEstimate?: Maybe<Scalars['Float']>;
  currentQuarterEstimateDate?: Maybe<Scalars['String']>;
  currentQuarterEstimateYear?: Maybe<Scalars['Float']>;
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

export type EtfDetails = {
  __typename?: 'EtfDetails';
  calculations?: Maybe<StStockDetailsCalculations>;
  id: Scalars['String'];
  summary: Summary;
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
  adminToggleUserRoles?: Maybe<Scalars['Boolean']>;
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
  toggleWatchGroup?: Maybe<Scalars['Boolean']>;
};


export type MutationAddStockIntoStockWatchlistArgs = {
  identifier: StStockWatchInputlistIdentifier;
};


export type MutationAdminToggleUserRolesArgs = {
  role: Scalars['String'];
  userId: Scalars['String'];
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


export type MutationToggleWatchGroupArgs = {
  groupId: Scalars['String'];
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
  longTermTrend: Scalars['String'];
  midTermTrend: Scalars['String'];
  shortTermTrend: Scalars['String'];
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
  queryEtfDetails?: Maybe<EtfDetails>;
  queryEtfDocument?: Maybe<StMarketEtfDocument>;
  queryHallOfFame: StHallOfFame;
  queryMarketDailyOverview?: Maybe<StMarketDailyOverview>;
  querySTGroupByGroupId?: Maybe<StGroupAllData>;
  querySTGroupByGroupName: Array<Maybe<StGroupAllData>>;
  querySTMarketHistoryOverview?: Maybe<StMarketOverviewPartialData>;
  queryStMarketAllCategories?: Maybe<StMarketDatasetKeyCategories>;
  queryStMarketData?: Maybe<StMarketChartDataResultCombined>;
  queryStockDetails?: Maybe<StockDetails>;
  queryStockDetailsFinancialGrowth?: Maybe<StDetailsFinancialGrowth>;
  queryStockDetailsFinancialRatios?: Maybe<StDetailsFinancialRatios>;
  queryStockDetailsKeyMetrics?: Maybe<StDetailsKeyMetrics>;
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


export type QueryQueryEtfDetailsArgs = {
  reload?: InputMaybe<Scalars['Boolean']>;
  symbol: Scalars['String'];
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


export type QueryQueryStockDetailsFinancialGrowthArgs = {
  allData: Scalars['Boolean'];
  period: Scalars['String'];
  symbol: Scalars['String'];
};


export type QueryQueryStockDetailsFinancialRatiosArgs = {
  allData: Scalars['Boolean'];
  period: Scalars['String'];
  symbol: Scalars['String'];
};


export type QueryQueryStockDetailsKeyMetricsArgs = {
  allData: Scalars['Boolean'];
  period: Scalars['String'];
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
  usersRegistrationSnippets: Array<StUserIdentificationBase>;
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

export type StDetailsFinancialGrowth = {
  __typename?: 'STDetailsFinancialGrowth';
  assetGrowth: Array<Maybe<Scalars['Float']>>;
  bookValueperShareGrowth: Array<Maybe<Scalars['Float']>>;
  date: Array<Scalars['String']>;
  debtGrowth: Array<Maybe<Scalars['Float']>>;
  dividendsperShareGrowth: Array<Maybe<Scalars['Float']>>;
  ebitgrowth: Array<Maybe<Scalars['Float']>>;
  epsdilutedGrowth: Array<Maybe<Scalars['Float']>>;
  epsgrowth: Array<Maybe<Scalars['Float']>>;
  fiveYDividendperShareGrowthPerShare: Array<Maybe<Scalars['Float']>>;
  fiveYNetIncomeGrowthPerShare: Array<Maybe<Scalars['Float']>>;
  fiveYOperatingCFGrowthPerShare: Array<Maybe<Scalars['Float']>>;
  fiveYRevenueGrowthPerShare: Array<Maybe<Scalars['Float']>>;
  fiveYShareholdersEquityGrowthPerShare: Array<Maybe<Scalars['Float']>>;
  freeCashFlowGrowth: Array<Maybe<Scalars['Float']>>;
  grossProfitGrowth: Array<Maybe<Scalars['Float']>>;
  inventoryGrowth: Array<Maybe<Scalars['Float']>>;
  netIncomeGrowth: Array<Maybe<Scalars['Float']>>;
  operatingCashFlowGrowth: Array<Maybe<Scalars['Float']>>;
  operatingIncomeGrowth: Array<Maybe<Scalars['Float']>>;
  rdexpenseGrowth: Array<Maybe<Scalars['Float']>>;
  receivablesGrowth: Array<Maybe<Scalars['Float']>>;
  revenueGrowth: Array<Maybe<Scalars['Float']>>;
  sgaexpensesGrowth: Array<Maybe<Scalars['Float']>>;
  symbol?: Maybe<Scalars['String']>;
  tenYDividendperShareGrowthPerShare: Array<Maybe<Scalars['Float']>>;
  tenYNetIncomeGrowthPerShare: Array<Maybe<Scalars['Float']>>;
  tenYOperatingCFGrowthPerShare: Array<Maybe<Scalars['Float']>>;
  tenYRevenueGrowthPerShare: Array<Maybe<Scalars['Float']>>;
  tenYShareholdersEquityGrowthPerShare: Array<Maybe<Scalars['Float']>>;
  threeYDividendperShareGrowthPerShare: Array<Maybe<Scalars['Float']>>;
  threeYNetIncomeGrowthPerShare: Array<Maybe<Scalars['Float']>>;
  threeYOperatingCFGrowthPerShare: Array<Maybe<Scalars['Float']>>;
  threeYRevenueGrowthPerShare: Array<Maybe<Scalars['Float']>>;
  threeYShareholdersEquityGrowthPerShare: Array<Maybe<Scalars['Float']>>;
  weightedAverageSharesDilutedGrowth: Array<Maybe<Scalars['Float']>>;
  weightedAverageSharesGrowth: Array<Maybe<Scalars['Float']>>;
};

export type StDetailsFinancialRatios = {
  __typename?: 'STDetailsFinancialRatios';
  assetTurnover: Array<Maybe<Scalars['Float']>>;
  capitalExpenditureCoverageRatio: Array<Maybe<Scalars['Float']>>;
  cashConversionCycle: Array<Maybe<Scalars['Float']>>;
  cashFlowCoverageRatios: Array<Maybe<Scalars['Float']>>;
  cashFlowToDebtRatio: Array<Maybe<Scalars['Float']>>;
  cashPerShare: Array<Maybe<Scalars['Float']>>;
  cashRatio: Array<Maybe<Scalars['Float']>>;
  companyEquityMultiplier: Array<Maybe<Scalars['Float']>>;
  currentRatio: Array<Maybe<Scalars['Float']>>;
  date: Array<Scalars['String']>;
  daysOfInventoryOutstanding: Array<Maybe<Scalars['Float']>>;
  daysOfPayablesOutstanding: Array<Maybe<Scalars['Float']>>;
  daysOfSalesOutstanding: Array<Maybe<Scalars['Float']>>;
  debtEquityRatio: Array<Maybe<Scalars['Float']>>;
  debtRatio: Array<Maybe<Scalars['Float']>>;
  dividendPaidAndCapexCoverageRatio: Array<Maybe<Scalars['Float']>>;
  dividendPayoutRatio: Array<Maybe<Scalars['Float']>>;
  dividendYield: Array<Maybe<Scalars['Float']>>;
  ebitPerRevenue: Array<Maybe<Scalars['Float']>>;
  ebtPerEbit: Array<Maybe<Scalars['Float']>>;
  effectiveTaxRate: Array<Maybe<Scalars['Float']>>;
  enterpriseValueMultiple: Array<Maybe<Scalars['Float']>>;
  fixedAssetTurnover: Array<Maybe<Scalars['Float']>>;
  freeCashFlowOperatingCashFlowRatio: Array<Maybe<Scalars['Float']>>;
  freeCashFlowPerShare: Array<Maybe<Scalars['Float']>>;
  grossProfitMargin: Array<Maybe<Scalars['Float']>>;
  interestCoverage: Array<Maybe<Scalars['Float']>>;
  inventoryTurnover: Array<Maybe<Scalars['Float']>>;
  longTermDebtToCapitalization: Array<Maybe<Scalars['Float']>>;
  netIncomePerEBT: Array<Maybe<Scalars['Float']>>;
  netProfitMargin: Array<Maybe<Scalars['Float']>>;
  operatingCashFlowPerShare: Array<Maybe<Scalars['Float']>>;
  operatingCashFlowSalesRatio: Array<Maybe<Scalars['Float']>>;
  operatingCycle: Array<Maybe<Scalars['Float']>>;
  operatingProfitMargin: Array<Maybe<Scalars['Float']>>;
  payablesTurnover: Array<Maybe<Scalars['Float']>>;
  payoutRatio: Array<Maybe<Scalars['Float']>>;
  pretaxProfitMargin: Array<Maybe<Scalars['Float']>>;
  priceBookValueRatio: Array<Maybe<Scalars['Float']>>;
  priceCashFlowRatio: Array<Maybe<Scalars['Float']>>;
  priceEarningsRatio: Array<Maybe<Scalars['Float']>>;
  priceEarningsToGrowthRatio: Array<Maybe<Scalars['Float']>>;
  priceFairValue: Array<Maybe<Scalars['Float']>>;
  priceSalesRatio: Array<Maybe<Scalars['Float']>>;
  priceToBookRatio: Array<Maybe<Scalars['Float']>>;
  priceToFreeCashFlowsRatio: Array<Maybe<Scalars['Float']>>;
  priceToOperatingCashFlowsRatio: Array<Maybe<Scalars['Float']>>;
  priceToSalesRatio: Array<Maybe<Scalars['Float']>>;
  quickRatio: Array<Maybe<Scalars['Float']>>;
  receivablesTurnover: Array<Maybe<Scalars['Float']>>;
  returnOnAssets: Array<Maybe<Scalars['Float']>>;
  returnOnCapitalEmployed: Array<Maybe<Scalars['Float']>>;
  returnOnEquity: Array<Maybe<Scalars['Float']>>;
  shortTermCoverageRatios: Array<Maybe<Scalars['Float']>>;
  symbol?: Maybe<Scalars['String']>;
  totalDebtToCapitalization: Array<Maybe<Scalars['Float']>>;
};

export type StDetailsKeyMetrics = {
  __typename?: 'STDetailsKeyMetrics';
  averageInventory: Array<Maybe<Scalars['Float']>>;
  averagePayables: Array<Maybe<Scalars['Float']>>;
  averageReceivables: Array<Maybe<Scalars['Float']>>;
  bookValuePerShare: Array<Maybe<Scalars['Float']>>;
  capexPerShare: Array<Maybe<Scalars['Float']>>;
  capexToDepreciation: Array<Maybe<Scalars['Float']>>;
  capexToOperatingCashFlow: Array<Maybe<Scalars['Float']>>;
  capexToRevenue: Array<Maybe<Scalars['Float']>>;
  cashPerShare: Array<Maybe<Scalars['Float']>>;
  currentRatio: Array<Maybe<Scalars['Float']>>;
  date: Array<Scalars['String']>;
  daysOfInventoryOnHand: Array<Maybe<Scalars['Float']>>;
  daysPayablesOutstanding: Array<Maybe<Scalars['Float']>>;
  daysSalesOutstanding: Array<Maybe<Scalars['Float']>>;
  debtToAssets: Array<Maybe<Scalars['Float']>>;
  debtToEquity: Array<Maybe<Scalars['Float']>>;
  dividendYield: Array<Maybe<Scalars['Float']>>;
  earningsYield: Array<Maybe<Scalars['Float']>>;
  enterpriseValue: Array<Maybe<Scalars['Float']>>;
  enterpriseValueOverEBITDA: Array<Maybe<Scalars['Float']>>;
  evToFreeCashFlow: Array<Maybe<Scalars['Float']>>;
  evToOperatingCashFlow: Array<Maybe<Scalars['Float']>>;
  evToSales: Array<Maybe<Scalars['Float']>>;
  freeCashFlowPerShare: Array<Maybe<Scalars['Float']>>;
  freeCashFlowYield: Array<Maybe<Scalars['Float']>>;
  grahamNetNet: Array<Maybe<Scalars['Float']>>;
  grahamNumber: Array<Maybe<Scalars['Float']>>;
  incomeQuality: Array<Maybe<Scalars['Float']>>;
  intangiblesToTotalAssets: Array<Maybe<Scalars['Float']>>;
  interestCoverage: Array<Maybe<Scalars['Float']>>;
  interestDebtPerShare: Array<Maybe<Scalars['Float']>>;
  inventoryTurnover: Array<Maybe<Scalars['Float']>>;
  investedCapital: Array<Maybe<Scalars['Float']>>;
  marketCap: Array<Maybe<Scalars['Float']>>;
  netCurrentAssetValue: Array<Maybe<Scalars['Float']>>;
  netDebtToEBITDA: Array<Maybe<Scalars['Float']>>;
  netIncomePerShare: Array<Maybe<Scalars['Float']>>;
  operatingCashFlowPerShare: Array<Maybe<Scalars['Float']>>;
  payablesTurnover: Array<Maybe<Scalars['Float']>>;
  payoutRatio: Array<Maybe<Scalars['Float']>>;
  pbRatio: Array<Maybe<Scalars['Float']>>;
  peRatio: Array<Maybe<Scalars['Float']>>;
  pfcfRatio: Array<Maybe<Scalars['Float']>>;
  pocfratio: Array<Maybe<Scalars['Float']>>;
  priceToSalesRatio: Array<Maybe<Scalars['Float']>>;
  ptbRatio: Array<Maybe<Scalars['Float']>>;
  receivablesTurnover: Array<Maybe<Scalars['Float']>>;
  researchAndDdevelopementToRevenue: Array<Maybe<Scalars['Float']>>;
  returnOnTangibleAssets: Array<Maybe<Scalars['Float']>>;
  revenuePerShare: Array<Maybe<Scalars['Float']>>;
  roe: Array<Maybe<Scalars['Float']>>;
  roic: Array<Maybe<Scalars['Float']>>;
  salesGeneralAndAdministrativeToRevenue: Array<Maybe<Scalars['Float']>>;
  shareholdersEquityPerShare: Array<Maybe<Scalars['Float']>>;
  stockBasedCompensationToRevenue: Array<Maybe<Scalars['Float']>>;
  symbol: Scalars['String'];
  tangibleAssetValue: Array<Maybe<Scalars['Float']>>;
  tangibleBookValuePerShare: Array<Maybe<Scalars['Float']>>;
  workingCapital: Array<Maybe<Scalars['Float']>>;
};

export type StDiscountedCashFlowFormula = {
  __typename?: 'STDiscountedCashFlowFormula';
  estimatedCompanyTodayValue: Scalars['Float'];
  estimatedDiscountedFactors: Array<Scalars['Float']>;
  estimatedDiscountedTerminalValue: Scalars['Float'];
  estimatedFreeCashFlowRate: Scalars['Float'];
  estimatedFreeCashFlowRates: Array<Scalars['Float']>;
  estimatedFreeCashFlows: Array<Scalars['Float']>;
  estimatedIntrinsicValue: Scalars['Float'];
  estimatedNetIncomeMargin: Scalars['Float'];
  estimatedNetIncomes: Array<Scalars['Float']>;
  estimatedPresentValueOfFutureCashFlows: Array<Maybe<Scalars['Float']>>;
  estimatedRevenueGrowthRate: Scalars['Float'];
  estimatedRevenues: Array<Scalars['Float']>;
  estimatedTerminalValue: Scalars['Float'];
  historical: StDiscountedCashFlowFormulaHistorical;
  variable: StDiscountedCashFlowFormulaVariable;
  years: Array<Maybe<Scalars['String']>>;
};

export type StDiscountedCashFlowFormulaHistorical = {
  __typename?: 'STDiscountedCashFlowFormulaHistorical';
  freeCashFlows: Array<Scalars['Float']>;
  historicalYears: Array<Scalars['String']>;
  netIncome: Array<Scalars['Float']>;
  netIncomeMargins: Array<Scalars['Float']>;
  revenue: Array<Scalars['Float']>;
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
  acceptedDate: Scalars['String'];
  accountPayables?: Maybe<Scalars['Float']>;
  accumulatedOtherComprehensiveIncomeLoss?: Maybe<Scalars['Float']>;
  capitalLeaseObligations?: Maybe<Scalars['Float']>;
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
  minorityInterest?: Maybe<Scalars['Float']>;
  netDebt?: Maybe<Scalars['Float']>;
  netReceivables?: Maybe<Scalars['Float']>;
  otherAssets?: Maybe<Scalars['Float']>;
  otherCurrentAssets?: Maybe<Scalars['Float']>;
  otherCurrentLiabilities?: Maybe<Scalars['Float']>;
  otherLiabilities?: Maybe<Scalars['Float']>;
  otherNonCurrentAssets?: Maybe<Scalars['Float']>;
  otherNonCurrentLiabilities?: Maybe<Scalars['Float']>;
  othertotalStockholdersEquity?: Maybe<Scalars['Float']>;
  period: Scalars['String'];
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
  totalEquity?: Maybe<Scalars['Float']>;
  totalInvestments?: Maybe<Scalars['Float']>;
  totalLiabilities?: Maybe<Scalars['Float']>;
  totalLiabilitiesAndStockholdersEquity?: Maybe<Scalars['Float']>;
  totalLiabilitiesAndTotalEquity?: Maybe<Scalars['Float']>;
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
  acceptedDate: Scalars['String'];
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
  period: Scalars['String'];
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
  avgVolume: Scalars['Float'];
  change: Scalars['Float'];
  changesPercentage: Scalars['Float'];
  dayHigh?: Maybe<Scalars['Float']>;
  dayLow?: Maybe<Scalars['Float']>;
  earningsAnnouncement?: Maybe<Scalars['String']>;
  eps?: Maybe<Scalars['Float']>;
  exchange: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  marketCap?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  open: Scalars['Float'];
  pe?: Maybe<Scalars['Float']>;
  previousClose?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  priceAvg50?: Maybe<Scalars['Float']>;
  priceAvg200?: Maybe<Scalars['Float']>;
  sharesOutstanding?: Maybe<Scalars['Float']>;
  symbol: Scalars['String'];
  timestamp: Scalars['Float'];
  volume: Scalars['Float'];
  yearHigh: Scalars['Float'];
  yearLow: Scalars['Float'];
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
  balance: Array<StfmBalanceSheet>;
  cash: Array<StfmCashFlow>;
  income: Array<StfmIncomeStatement>;
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
  acceptedDate: Scalars['String'];
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
  interestIncome?: Maybe<Scalars['Float']>;
  link?: Maybe<Scalars['String']>;
  netIncome?: Maybe<Scalars['Float']>;
  netIncomeRatio?: Maybe<Scalars['Float']>;
  operatingExpenses?: Maybe<Scalars['Float']>;
  operatingIncome?: Maybe<Scalars['Float']>;
  operatingIncomeRatio?: Maybe<Scalars['Float']>;
  otherExpenses?: Maybe<Scalars['Float']>;
  period: Scalars['String'];
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
  acquistionOrDisposition: Scalars['String'];
  companyCik: Scalars['String'];
  formType: Scalars['String'];
  link: Scalars['String'];
  price?: Maybe<Scalars['Float']>;
  reportingCik: Scalars['String'];
  reportingName: Scalars['String'];
  securitiesOwned: Scalars['Float'];
  securitiesTransacted: Scalars['Float'];
  securityName: Scalars['String'];
  symbol: Scalars['String'];
  transactionDate: Scalars['String'];
  transactionType: Scalars['String'];
  typeOfOwner: Scalars['String'];
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
  date: Scalars['String'];
  rating: Scalars['String'];
  ratingDetailsDCFRecommendation: Scalars['String'];
  ratingDetailsDCFScore: Scalars['Float'];
  ratingDetailsDERecommendation: Scalars['String'];
  ratingDetailsDEScore: Scalars['Float'];
  ratingDetailsPBRecommendation: Scalars['String'];
  ratingDetailsPBScore: Scalars['Float'];
  ratingDetailsPERecommendation: Scalars['String'];
  ratingDetailsPEScore: Scalars['Float'];
  ratingDetailsROARecommendation: Scalars['String'];
  ratingDetailsROAScore: Scalars['Float'];
  ratingDetailsROERecommendation: Scalars['String'];
  ratingDetailsROEScore: Scalars['Float'];
  ratingRecommendation: Scalars['String'];
  ratingScore: Scalars['Float'];
  symbol: Scalars['String'];
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
  exchange: Scalars['String'];
  exchangeShortName?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
  isActivelyTrading?: Maybe<Scalars['Boolean']>;
  isEtf?: Maybe<Scalars['Boolean']>;
  lastAnnualDividend?: Maybe<Scalars['Float']>;
  marketCap?: Maybe<Scalars['Float']>;
  price: Scalars['Float'];
  sector?: Maybe<Scalars['String']>;
  symbol: Scalars['String'];
  volume: Scalars['Float'];
};

export type StfmStockScreenerResultWrapper = {
  __typename?: 'STFMStockScreenerResultWrapper';
  found: Scalars['Float'];
  limit: Scalars['Float'];
  offset: Scalars['Float'];
  result: Array<StfmStockScreenerResult>;
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
  capitalExpenditures: Array<Scalars['Float']>;
  estimatedIntrinsicMarketCap: Scalars['Float'];
  estimatedIntrinsicValue: Scalars['Float'];
  freeCashFlows: Array<Scalars['Float']>;
  historicalYears: Array<Scalars['String']>;
  minimumRateReturn: Scalars['Float'];
  operatingActivities: Array<Scalars['Float']>;
  sharesOutstanding: Scalars['Float'];
};

export type StGeographic = {
  __typename?: 'STGeographic';
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
};

export type StGroupAllData = StGroupIdentificationInterface & {
  __typename?: 'STGroupAllData';
  createdDate: Scalars['String'];
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
  numberOfMembersActive?: Maybe<Scalars['Float']>;
  owner: StGroupUser;
  portfolio: StPortfolioWrapper;
  rank: StRank;
  startDate: Scalars['String'];
  startedPortfolio: StPortfolioSnapshotStarted;
  topMembers: Array<StGroupUser>;
  topTransactions: Array<StTransaction>;
  watchedByUsers: Scalars['Float'];
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

export type StGroupIdentification = StGroupIdentificationInterface & {
  __typename?: 'STGroupIdentification';
  createdDate: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  imagePath?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  isClosed?: Maybe<Scalars['Boolean']>;
  isInfinite: Scalars['Boolean'];
  isPrivate: Scalars['Boolean'];
  lastEditedDate: Scalars['String'];
  lastUpdateDate: Scalars['String'];
  name: Scalars['String'];
  numberOfMembers: Scalars['Float'];
  numberOfMembersActive?: Maybe<Scalars['Float']>;
  owner: StGroupUser;
  portfolio: StPortfolioWrapper;
  rank: StRank;
  startDate: Scalars['String'];
  startedPortfolio: StPortfolioSnapshotStarted;
  topMembers: Array<StGroupUser>;
  watchedByUsers: Scalars['Float'];
};

export type StGroupIdentificationInterface = {
  createdDate: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  imagePath?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  isClosed?: Maybe<Scalars['Boolean']>;
  isInfinite: Scalars['Boolean'];
  isPrivate: Scalars['Boolean'];
  lastEditedDate: Scalars['String'];
  lastUpdateDate: Scalars['String'];
  name: Scalars['String'];
  numberOfMembers: Scalars['Float'];
  numberOfMembersActive?: Maybe<Scalars['Float']>;
  owner: StGroupUser;
  portfolio: StPortfolioWrapper;
  rank: StRank;
  startDate: Scalars['String'];
  startedPortfolio: StPortfolioSnapshotStarted;
  topMembers: Array<StGroupUser>;
  watchedByUsers: Scalars['Float'];
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

export type StHallOfFame = {
  __typename?: 'STHallOfFame';
  groups: StHallOfFameGroups;
  users: StHallOfFameUsers;
};

export type StHallOfFameEntityGainsUsers = {
  __typename?: 'STHallOfFameEntityGainsUsers';
  day_1_change_number: Array<StUserIdentification>;
  day_1_change_prct: Array<StUserIdentification>;
  month_1_change_number: Array<StUserIdentification>;
  month_1_change_prct: Array<StUserIdentification>;
  week_1_change_number: Array<StUserIdentification>;
  week_1_change_prct: Array<StUserIdentification>;
  week_2_change_number: Array<StUserIdentification>;
  week_2_change_prct: Array<StUserIdentification>;
  week_3_change_number: Array<StUserIdentification>;
  week_3_change_prct: Array<StUserIdentification>;
};

export type StHallOfFameGroups = {
  __typename?: 'STHallOfFameGroups';
  highestPortfolio: Array<StGroupIdentification>;
  lastUpdateDate: Scalars['String'];
  total: Scalars['Float'];
};

export type StHallOfFameUsers = {
  __typename?: 'STHallOfFameUsers';
  bestGainers: StHallOfFameEntityGainsUsers;
  highestPortfolio: Array<StUserIdentification>;
  lastUpdateDate: Scalars['String'];
  total: Scalars['Float'];
  wortGainers: StHallOfFameEntityGainsUsers;
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
  fiftyTwoWeekHigh: Scalars['Float'];
  fiftyTwoWeekLow: Scalars['Float'];
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

export type StPortfolioChange = {
  __typename?: 'STPortfolioChange';
  day_1_change?: Maybe<StPortfolioChangeData>;
  from_beginning_change?: Maybe<StPortfolioChangeData>;
  month_1_change?: Maybe<StPortfolioChangeData>;
  month_2_change?: Maybe<StPortfolioChangeData>;
  month_3_change?: Maybe<StPortfolioChangeData>;
  month_6_change?: Maybe<StPortfolioChangeData>;
  week_1_change?: Maybe<StPortfolioChangeData>;
  week_2_change?: Maybe<StPortfolioChangeData>;
  week_3_change?: Maybe<StPortfolioChangeData>;
  year_1_change?: Maybe<StPortfolioChangeData>;
};

export type StPortfolioChangeData = {
  __typename?: 'STPortfolioChangeData';
  portfolioBalance: Scalars['Float'];
  portfolioCash: Scalars['Float'];
  portfolioIncreaseNumber: Scalars['Float'];
  portfolioIncreasePrct: Scalars['Float'];
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
  lastPortfolioBalance: Scalars['Float'];
  numberOfExecutedBuyTransactions: Scalars['Float'];
  numberOfExecutedSellTransactions: Scalars['Float'];
  portfolioCash: Scalars['Float'];
  portfolioInvested: Scalars['Float'];
  transactionFees: Scalars['Float'];
};

export type StPortfolioWrapper = {
  __typename?: 'STPortfolioWrapper';
  lastPortfolioBalance: Scalars['Float'];
  lastPortfolioIncreaseNumber: Scalars['Float'];
  lastPortfolioIncreasePrct: Scalars['Float'];
  lastPortfolioSnapshot: StPortfolioSnapshot;
  lastTransactionSnapshot: StTransactionSnapshot;
  numberOfExecutedBuyTransactions: Scalars['Float'];
  numberOfExecutedSellTransactions: Scalars['Float'];
  portfolioCash: Scalars['Float'];
  portfolioChange: StPortfolioChange;
  transactionFees: Scalars['Float'];
};

export type StRank = {
  __typename?: 'STRank';
  highestPortfolio?: Maybe<StRankHighestPortfolio>;
};

export type StRankHighestPortfolio = {
  __typename?: 'STRankHighestPortfolio';
  date: Scalars['String'];
  dateEvaluation: Scalars['String'];
  rankHighestPortfolio: StPortfolioSnapshot;
  rankHighestPortfolioPlace: Scalars['Float'];
  total: Scalars['Float'];
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
};

export type StStockWatchlist = {
  __typename?: 'STStockWatchlist';
  date?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  summaries: Array<Summary>;
  symbols: Array<Scalars['String']>;
  userId: Scalars['String'];
};

export type StTicket = {
  __typename?: 'STTicket';
  comments: Array<StTicketComment>;
  createdAt: Scalars['String'];
  createdBy: StUserIdentification;
  id: Scalars['String'];
  isOpen: Scalars['Boolean'];
  name: Scalars['String'];
  type: StTicketTypes;
};

export type StTicketComment = {
  __typename?: 'STTicketComment';
  comment: Scalars['String'];
  createdAt: Scalars['String'];
  createdBy: StUserIdentification;
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
  user?: Maybe<StUserIdentification>;
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
  photoURL?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type StUserGroups = {
  __typename?: 'STUserGroups';
  groupInvitationReceived: Array<StGroupAllData>;
  groupInvitationSent: Array<StGroupAllData>;
  groupMember: Array<StGroupAllData>;
  groupOwner: Array<StGroupAllData>;
  groupWatched: Array<StGroupAllData>;
};

export type StUserHistoricalData = {
  __typename?: 'STUserHistoricalData';
  bestAchievedRanks: Array<StRank>;
  portfolioSnapshots: Array<StPortfolioSnapshot>;
  resetedAccount: Array<StUserResetedAccount>;
  transactionSnapshots: Array<StTransactionSnapshot>;
  userLogs: Array<StLog>;
};

export type StUserIdentification = {
  __typename?: 'STUserIdentification';
  accountCreatedDate: Scalars['String'];
  id: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  nickName: Scalars['String'];
  photoURL: Scalars['String'];
  portfolio: StPortfolioWrapper;
};

export type StUserIdentificationBase = {
  __typename?: 'STUserIdentificationBase';
  accountCreatedDate: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  nickName: Scalars['String'];
  photoURL: Scalars['String'];
};

export type StUserIdentificationInformationInput = {
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
  roles: Array<Scalars['String']>;
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
  rank: StRank;
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
  companyData?: Maybe<CompanyData>;
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
  beta?: Maybe<Scalars['Float']>;
  ceo?: Maybe<Scalars['String']>;
  companyName: Scalars['String'];
  countryFullName?: Maybe<Scalars['String']>;
  currency: Scalars['String'];
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
  marketCap?: Maybe<Scalars['Float']>;
  marketPrice: Scalars['Float'];
  oneyTargetEst?: Maybe<Scalars['Float']>;
  pERatioTTM?: Maybe<Scalars['Float']>;
  previousClose: Scalars['Float'];
  recommendationKey?: Maybe<Scalars['String']>;
  recommendationMean?: Maybe<Scalars['Float']>;
  residance?: Maybe<SummaryResidance>;
  sandPFiveTwoWeekChange?: Maybe<Scalars['Float']>;
  sector?: Maybe<Scalars['String']>;
  sharesOutstanding?: Maybe<Scalars['Float']>;
  shortRatio?: Maybe<Scalars['Float']>;
  symbol: Scalars['String'];
  symbolType?: Maybe<SymbolType>;
  targetEstOneyPercent?: Maybe<Scalars['Float']>;
  volume: Scalars['Float'];
  website?: Maybe<Scalars['String']>;
  weekRangeFiveTwoMax: Scalars['Float'];
  weekRangeFiveTwoMin: Scalars['Float'];
  yearToDatePrice: Scalars['Float'];
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
  volume?: Maybe<Array<Maybe<Array<Maybe<Scalars['Float']>>>>>;
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
  action: Scalars['String'];
  epochGradeDate: Scalars['Float'];
  firm: Scalars['String'];
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

export type StAdminMainInformationsFragmentFragment = { __typename?: 'STAdminMainInformations', lastStockDetailsReload?: string | null, usersRegistrated: number, usersActive: number, usersRegistrationSnippets: Array<{ __typename?: 'STUserIdentificationBase', nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string }>, usersWeeklyRegistrated: Array<{ __typename?: 'STSeriesNumber', data: number, timestamp: number }>, tickets: Array<{ __typename?: 'STTicket', id: string, name: string, type: StTicketTypes, createdAt: string, isOpen: boolean, createdBy: { __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string }, comments: Array<{ __typename?: 'STTicketComment', id: string, comment: string, createdAt: string, createdBy: { __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string } }> }> };

export type QueryAdminMainInformationsQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryAdminMainInformationsQuery = { __typename?: 'Query', queryAdminMainInformations?: { __typename?: 'STAdminMainInformations', lastStockDetailsReload?: string | null, usersRegistrated: number, usersActive: number, usersRegistrationSnippets: Array<{ __typename?: 'STUserIdentificationBase', nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string }>, usersWeeklyRegistrated: Array<{ __typename?: 'STSeriesNumber', data: number, timestamp: number }>, tickets: Array<{ __typename?: 'STTicket', id: string, name: string, type: StTicketTypes, createdAt: string, isOpen: boolean, createdBy: { __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string }, comments: Array<{ __typename?: 'STTicketComment', id: string, comment: string, createdAt: string, createdBy: { __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string } }> }> } | null };

export type AdminToggleUserRolesMutationVariables = Exact<{
  userId: Scalars['String'];
  role: Scalars['String'];
}>;


export type AdminToggleUserRolesMutation = { __typename?: 'Mutation', adminToggleUserRoles?: boolean | null };

export type ValidatorFinhubKeyValidityQueryVariables = Exact<{
  finuhbKey: Scalars['String'];
}>;


export type ValidatorFinhubKeyValidityQuery = { __typename?: 'Query', validatorFinhubKeyValidity?: boolean | null };

export type StfmHolderFragmentFragment = { __typename?: 'STFMHolder', change?: number | null, dateReported?: string | null, holder?: string | null, shares?: number | null };

export type StfmHolderWithWeightFragmentFragment = { __typename?: 'STFMHolderWithWeight', change?: number | null, dateReported?: string | null, holder?: string | null, shares?: number | null, weightPercent?: number | null };

export type StfmBalanceSheetFragmentFragment = { __typename?: 'STFMBalanceSheet', acceptedDate: string, accountPayables?: number | null, accumulatedOtherComprehensiveIncomeLoss?: number | null, capitalLeaseObligations?: number | null, cashAndCashEquivalents?: number | null, cashAndShortTermInvestments?: number | null, commonStock?: number | null, date?: string | null, deferredRevenue?: number | null, deferredRevenueNonCurrent?: number | null, deferredTaxLiabilitiesNonCurrent?: number | null, fillingDate?: string | null, finalLink?: string | null, goodwill?: number | null, goodwillAndIntangibleAssets?: number | null, intangibleAssets?: number | null, inventory?: number | null, link?: string | null, longTermDebt?: number | null, longTermInvestments?: number | null, minorityInterest?: number | null, netDebt?: number | null, netReceivables?: number | null, otherAssets?: number | null, otherCurrentAssets?: number | null, otherCurrentLiabilities?: number | null, otherLiabilities?: number | null, otherNonCurrentAssets?: number | null, otherNonCurrentLiabilities?: number | null, othertotalStockholdersEquity?: number | null, totalEquity?: number | null, totalLiabilitiesAndTotalEquity?: number | null, period: string, propertyPlantEquipmentNet?: number | null, reportedCurrency?: string | null, retainedEarnings?: number | null, shortTermDebt?: number | null, shortTermInvestments?: number | null, symbol?: string | null, taxAssets?: number | null, taxPayables?: number | null, totalAssets?: number | null, totalCurrentAssets?: number | null, totalCurrentLiabilities?: number | null, totalDebt?: number | null, totalInvestments?: number | null, totalLiabilities?: number | null, totalLiabilitiesAndStockholdersEquity?: number | null, totalNonCurrentAssets?: number | null, totalNonCurrentLiabilities?: number | null, totalStockholdersEquity?: number | null };

export type StfmCashFlowFragmentFragment = { __typename?: 'STFMCashFlow', acceptedDate: string, accountsPayables?: number | null, accountsReceivables?: number | null, acquisitionsNet?: number | null, capitalExpenditure?: number | null, cashAtBeginningOfPeriod?: number | null, cashAtEndOfPeriod?: number | null, changeInWorkingCapital?: number | null, commonStockIssued?: number | null, commonStockRepurchased?: number | null, date?: string | null, debtRepayment?: number | null, deferredIncomeTax?: number | null, depreciationAndAmortization?: number | null, dividendsPaid?: number | null, effectOfForexChangesOnCash?: number | null, fillingDate?: string | null, finalLink?: string | null, freeCashFlow?: number | null, inventory?: number | null, investmentsInPropertyPlantAndEquipment?: number | null, link?: string | null, netCashProvidedByOperatingActivities?: number | null, netCashUsedForInvestingActivites?: number | null, netCashUsedProvidedByFinancingActivities?: number | null, netChangeInCash?: number | null, netIncome?: number | null, operatingCashFlow?: number | null, otherFinancingActivites?: number | null, otherInvestingActivites?: number | null, otherNonCashItems?: number | null, otherWorkingCapital?: number | null, period: string, purchasesOfInvestments?: number | null, reportedCurrency?: string | null, salesMaturitiesOfInvestments?: number | null, stockBasedCompensation?: number | null, symbol?: string | null };

export type StfmIncomeStatementFragmentFragment = { __typename?: 'STFMIncomeStatement', acceptedDate: string, costAndExpenses?: number | null, costOfRevenue?: number | null, date?: string | null, depreciationAndAmortization?: number | null, ebitda?: number | null, ebitdaratio?: number | null, eps?: number | null, epsdiluted?: number | null, fillingDate?: string | null, finalLink?: string | null, generalAndAdministrativeExpenses?: number | null, grossProfit?: number | null, grossProfitRatio?: number | null, incomeBeforeTax?: number | null, incomeBeforeTaxRatio?: number | null, incomeTaxExpense?: number | null, interestExpense?: number | null, interestIncome?: number | null, link?: string | null, netIncome?: number | null, netIncomeRatio?: number | null, operatingExpenses?: number | null, operatingIncome?: number | null, operatingIncomeRatio?: number | null, otherExpenses?: number | null, period: string, reportedCurrency?: string | null, researchAndDevelopmentExpenses?: number | null, revenue?: number | null, sellingAndMarketingExpenses?: number | null, sellingGeneralAndAdministrativeExpenses?: number | null, symbol?: string | null, totalOtherIncomeExpensesNet?: number | null, weightedAverageShsOut?: number | null, weightedAverageShsOutDil?: number | null };

export type StfmInsideTradeFragmentFragment = { __typename?: 'STFMInsideTrade', acquistionOrDisposition: string, companyCik: string, formType: string, link: string, price?: number | null, reportingCik: string, reportingName: string, securitiesOwned: number, securitiesTransacted: number, securityName: string, symbol: string, transactionDate: string, transactionType: string, typeOfOwner: string };

export type StfmKeyExecutiveFragmentFragment = { __typename?: 'STFMKeyExecutive', currencyPay?: string | null, gender?: string | null, name?: string | null, pay?: number | null, title?: string | null };

export type StfmStockNewFragmentFragment = { __typename?: 'STFMStockNew', image?: string | null, publishedDate?: string | null, site?: string | null, symbol?: string | null, text?: string | null, title?: string | null, url?: string | null };

export type StfmStockDividendFragmentFragment = { __typename?: 'STFMStockDividend', adjDividend?: number | null, date?: string | null, declarationDate?: string | null, dividend?: number | null, label?: string | null, paymentDate?: string | null, recordDate?: string | null, symbol?: string | null };

export type StfmSplitHistoryFragmentFragment = { __typename?: 'STFMSplitHistory', date?: string | null, denominator?: number | null, label?: string | null, numerator?: number | null, symbol?: string | null };

export type StfmRatingFragmentFragment = { __typename?: 'STFMRating', date: string, rating: string, ratingDetailsDCFRecommendation: string, ratingDetailsDCFScore: number, ratingDetailsDERecommendation: string, ratingDetailsDEScore: number, ratingDetailsPBRecommendation: string, ratingDetailsPBScore: number, ratingDetailsPERecommendation: string, ratingDetailsPEScore: number, ratingDetailsROARecommendation: string, ratingDetailsROAScore: number, ratingDetailsROERecommendation: string, ratingDetailsROEScore: number, ratingRecommendation: string, ratingScore: number, symbol: string };

export type StfmRatiosFragmentFragment = { __typename?: 'STFMRatios', assetTurnoverTTM?: number | null, capitalExpenditureCoverageRatioTTM?: number | null, cashConversionCycleTTM?: number | null, cashFlowCoverageRatiosTTM?: number | null, cashFlowToDebtRatioTTM?: number | null, cashPerShareTTM?: number | null, cashRatioTTM?: number | null, companyEquityMultiplierTTM?: number | null, currentRatioTTM?: number | null, daysOfInventoryOutstandingTTM?: number | null, daysOfPayablesOutstandingTTM?: number | null, daysOfSalesOutstandingTTM?: number | null, debtEquityRatioTTM?: number | null, debtRatioTTM?: number | null, dividendPaidAndCapexCoverageRatioTTM?: number | null, dividendPerShareTTM?: number | null, dividendYielPercentageTTM?: number | null, dividendYielTTM?: number | null, dividendYieldTTM?: number | null, ebitPerRevenueTTM?: number | null, ebtPerEbitTTM?: number | null, effectiveTaxRateTTM?: number | null, enterpriseValueMultipleTTM?: number | null, fixedAssetTurnoverTTM?: number | null, freeCashFlowOperatingCashFlowRatioTTM?: number | null, freeCashFlowPerShareTTM?: number | null, grossProfitMarginTTM?: number | null, interestCoverageTTM?: number | null, inventoryTurnoverTTM?: number | null, longTermDebtToCapitalizationTTM?: number | null, netIncomePerEBTTTM?: number | null, netProfitMarginTTM?: number | null, operatingCashFlowPerShareTTM?: number | null, operatingCashFlowSalesRatioTTM?: number | null, operatingCycleTTM?: number | null, operatingProfitMarginTTM?: number | null, payablesTurnoverTTM?: number | null, payoutRatioTTM?: number | null, peRatioTTM?: number | null, pegRatioTTM?: number | null, pretaxProfitMarginTTM?: number | null, priceBookValueRatioTTM?: number | null, priceCashFlowRatioTTM?: number | null, priceEarningsRatioTTM?: number | null, priceEarningsToGrowthRatioTTM?: number | null, priceFairValueTTM?: number | null, priceSalesRatioTTM?: number | null, priceToBookRatioTTM?: number | null, priceToFreeCashFlowsRatioTTM?: number | null, priceToOperatingCashFlowsRatioTTM?: number | null, priceToSalesRatioTTM?: number | null, quickRatioTTM?: number | null, receivablesTurnoverTTM?: number | null, returnOnAssetsTTM?: number | null, returnOnCapitalEmployedTTM?: number | null, returnOnEquityTTM?: number | null, shortTermCoverageRatiosTTM?: number | null, totalDebtToCapitalizationTTM?: number | null };

export type StfmCompanyQuoteFragmentFragment = { __typename?: 'STFMCompanyQuote', avgVolume: number, change: number, changesPercentage: number, dayHigh?: number | null, dayLow?: number | null, earningsAnnouncement?: string | null, eps?: number | null, exchange: string, marketCap?: number | null, name: string, open: number, pe?: number | null, previousClose?: number | null, price?: number | null, priceAvg200?: number | null, priceAvg50?: number | null, sharesOutstanding?: number | null, symbol: string, timestamp: number, volume: number, yearHigh: number, yearLow: number, image?: string | null };

export type StfmTopStocksFragmentFragment = { __typename?: 'STFMTopStocks', ticker?: string | null, changes?: number | null, price?: string | null, changesPercentage?: string | null, companyName?: string | null };

export type StfmExchangeSectorPeFragmentFragment = { __typename?: 'STFMExchangeSectorPE', date?: string | null, sector?: string | null, exchange?: string | null, pe?: number | null };

export type StfmExchangeIndustryPeFragmentFragment = { __typename?: 'STFMExchangeIndustryPE', date?: string | null, industry?: string | null, exchange?: string | null, pe?: number | null };

export type StfmCalendarEarningsFragmentFragment = { __typename?: 'STFMCalendarEarnings', date?: string | null, symbol?: string | null, eps?: number | null, epsEstimated?: number | null, time?: string | null, revenue?: number | null, revenueEstimated?: number | null };

export type StfmCalendarIpoFragmentFragment = { __typename?: 'STFMCalendarIpo', date?: string | null, company?: string | null, symbol?: string | null, exchange?: string | null, actions?: string | null, shares?: number | null, priceRange?: string | null, marketCap?: number | null };

export type StfmCalendarEconomicFragmentFragment = { __typename?: 'STFMCalendarEconomic', event?: string | null, date?: string | null, country?: string | null, actual?: number | null, previous?: number | null, change?: number | null, changePercentage?: number | null, estimate?: number | null };

export type StfmEtfHolderFragmentFragment = { __typename?: 'STFMEtfHolder', asset?: string | null, sharesNumber?: number | null, weightPercentage?: number | null };

export type StfmEtfSectorWeightFragmentFragment = { __typename?: 'STFMEtfSectorWeight', sector?: string | null, weightPercentage?: string | null };

export type StfmEtfCountryWeightFragmentFragment = { __typename?: 'STFMEtfCountryWeight', country?: string | null, weightPercentage?: string | null };

export type StfmSectorPerformanceFragmentFragment = { __typename?: 'STFMSectorPerformance', sector?: string | null, changesPercentage?: string | null };

export type StfmSocialSentimentFragmentFragment = { __typename?: 'STFMSocialSentiment', absoluteIndex?: number | null, date?: string | null, generalPerception?: number | null, redditCommentMentions?: number | null, redditCommentSentiment?: number | null, redditPostMentions?: number | null, redditPostSentiment?: number | null, relativeIndex?: number | null, sentiment?: number | null, stocktwitsPostMentions?: number | null, stocktwitsPostSentiment?: number | null, symbol?: string | null, tweetMentions?: number | null, tweetSentiment?: number | null, yahooFinanceCommentMentions?: number | null, yahooFinanceCommentSentiment?: number | null };

export type StAnalystEstimatesFragmentFragment = { __typename?: 'STAnalystEstimates', date?: string | null, estimatedEbitAvg?: number | null, estimatedEbitHigh?: number | null, estimatedEbitLow?: number | null, estimatedEbitdaAvg?: number | null, estimatedEbitdaHigh?: number | null, estimatedEbitdaLow?: number | null, estimatedEpsAvg?: number | null, estimatedEpsHigh?: number | null, estimatedEpsLow?: number | null, estimatedNetIncomeAvg?: number | null, estimatedNetIncomeHigh?: number | null, estimatedNetIncomeLow?: number | null, estimatedRevenueAvg?: number | null, estimatedRevenueHigh?: number | null, estimatedRevenueLow?: number | null, estimatedSgaExpenseAvg?: number | null, estimatedSgaExpenseHigh?: number | null, estimatedSgaExpenseLow?: number | null, numberAnalystEstimatedRevenue?: number | null, numberAnalystsEstimatedEps?: number | null, symbol?: string | null };

export type StGroupUserFragmentFragment = { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } };

type StGroupIdentificationData_StGroupAllData_Fragment = { __typename?: 'STGroupAllData', id: string, name: string, description?: string | null, imagePath?: string | null, imageUrl?: string | null, startDate: string, endDate?: string | null, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfMembersActive?: number | null, createdDate: string, watchedByUsers: number, lastUpdateDate: string, lastEditedDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null } };

type StGroupIdentificationData_StGroupIdentification_Fragment = { __typename?: 'STGroupIdentification', id: string, name: string, description?: string | null, imagePath?: string | null, imageUrl?: string | null, startDate: string, endDate?: string | null, isInfinite: boolean, isPrivate: boolean, isClosed?: boolean | null, numberOfMembers: number, numberOfMembersActive?: number | null, createdDate: string, watchedByUsers: number, lastUpdateDate: string, lastEditedDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null } };

export type StGroupIdentificationDataFragment = StGroupIdentificationData_StGroupAllData_Fragment | StGroupIdentificationData_StGroupIdentification_Fragment;

export type StGroupAllDataWithoutHoldingsFragment = { __typename?: 'STGroupAllData', id: string, name: string, description?: string | null, imageUrl?: string | null, imagePath?: string | null, lastUpdateDate: string, lastEditedDate: string, createdDate: string, startDate: string, endDate?: string | null, watchedByUsers: number, isPrivate: boolean, isInfinite: boolean, isClosed: boolean, numberOfMembers: number, numberOfMembersActive?: number | null, numberOfInvitationSent: number, numberOfInvitationReceived: number, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, lastTransactions: Array<{ __typename?: 'STTransaction', transactionId?: string | null, symbol: string, price: number, return?: number | null, returnChange?: number | null, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number, user?: { __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string } | null }>, groupMemberData: { __typename?: 'STGroupMemberData', id: string, members: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, invitationSent: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, invitationReceived: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }> }, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null }, topTransactions: Array<{ __typename?: 'STTransaction', transactionId?: string | null, symbol: string, price: number, return?: number | null, returnChange?: number | null, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number, user?: { __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string } | null }>, groupHistoricalData: { __typename?: 'STGroupHistoricalData', portfolioSnapshots: Array<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, transactionSnapshots: Array<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }>, bestAchievedRanks: Array<{ __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null }>, groupLogs: Array<{ __typename?: 'STLog', date: string, logText: string }> }, managers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }> };

export type StGroupAllDataGroupMemberHoldingsDataFragment = { __typename?: 'STGroupAllData', id: string, name: string, groupMemberData: { __typename?: 'STGroupMemberData', id: string, holdings: Array<{ __typename?: 'STGroupHoldings', numberOfUsers: number, holding: { __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number, summary: { __typename?: 'Summary', avgVolume: number, ceo?: string | null, companyName: string, currency: string, dividendDate?: string | null, ePSTTM?: number | null, earningsDate?: string | null, exDividendDate?: string | null, exchangeName?: string | null, fiveTwoWeekRange?: string | null, forwardDividendRate?: number | null, forwardDividendYield?: number | null, forwardEPS?: number | null, forwardPE?: number | null, fullTimeEmployees?: string | null, id: string, symbolType?: SymbolType | null, industry?: string | null, ipoDate?: string | null, beta?: number | null, countryFullName?: string | null, lastSplitDate?: string | null, lastSplitFactor?: string | null, logo_url?: string | null, longBusinessSummary?: string | null, marketCap?: number | null, marketPrice: number, oneyTargetEst?: number | null, pERatioTTM?: number | null, previousClose: number, recommendationKey?: string | null, recommendationMean?: number | null, sandPFiveTwoWeekChange?: number | null, sector?: string | null, sharesOutstanding?: number | null, shortRatio?: number | null, symbol: string, targetEstOneyPercent?: number | null, volume: number, website?: string | null, weekRangeFiveTwoMax: number, weekRangeFiveTwoMin: number, yearToDatePrice: number, yearToDatePriceReturn?: number | null, isActivelyTrading?: boolean | null, residance?: { __typename?: 'SummaryResidance', city?: string | null, state?: string | null, country?: string | null, addressOne?: string | null, zip?: string | null } | null } } }> } };

export type StGroupAllDataFragmentFragment = { __typename?: 'STGroupAllData', id: string, name: string, description?: string | null, imageUrl?: string | null, imagePath?: string | null, lastUpdateDate: string, lastEditedDate: string, createdDate: string, startDate: string, endDate?: string | null, watchedByUsers: number, isPrivate: boolean, isInfinite: boolean, isClosed: boolean, numberOfMembers: number, numberOfMembersActive?: number | null, numberOfInvitationSent: number, numberOfInvitationReceived: number, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, lastTransactions: Array<{ __typename?: 'STTransaction', transactionId?: string | null, symbol: string, price: number, return?: number | null, returnChange?: number | null, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number, user?: { __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string } | null }>, groupMemberData: { __typename?: 'STGroupMemberData', id: string, members: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, invitationSent: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, invitationReceived: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, holdings: Array<{ __typename?: 'STGroupHoldings', numberOfUsers: number, holding: { __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number, summary: { __typename?: 'Summary', avgVolume: number, ceo?: string | null, companyName: string, currency: string, dividendDate?: string | null, ePSTTM?: number | null, earningsDate?: string | null, exDividendDate?: string | null, exchangeName?: string | null, fiveTwoWeekRange?: string | null, forwardDividendRate?: number | null, forwardDividendYield?: number | null, forwardEPS?: number | null, forwardPE?: number | null, fullTimeEmployees?: string | null, id: string, symbolType?: SymbolType | null, industry?: string | null, ipoDate?: string | null, beta?: number | null, countryFullName?: string | null, lastSplitDate?: string | null, lastSplitFactor?: string | null, logo_url?: string | null, longBusinessSummary?: string | null, marketCap?: number | null, marketPrice: number, oneyTargetEst?: number | null, pERatioTTM?: number | null, previousClose: number, recommendationKey?: string | null, recommendationMean?: number | null, sandPFiveTwoWeekChange?: number | null, sector?: string | null, sharesOutstanding?: number | null, shortRatio?: number | null, symbol: string, targetEstOneyPercent?: number | null, volume: number, website?: string | null, weekRangeFiveTwoMax: number, weekRangeFiveTwoMin: number, yearToDatePrice: number, yearToDatePriceReturn?: number | null, isActivelyTrading?: boolean | null, residance?: { __typename?: 'SummaryResidance', city?: string | null, state?: string | null, country?: string | null, addressOne?: string | null, zip?: string | null } | null } } }> }, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null }, topTransactions: Array<{ __typename?: 'STTransaction', transactionId?: string | null, symbol: string, price: number, return?: number | null, returnChange?: number | null, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number, user?: { __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string } | null }>, groupHistoricalData: { __typename?: 'STGroupHistoricalData', portfolioSnapshots: Array<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, transactionSnapshots: Array<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }>, bestAchievedRanks: Array<{ __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null }>, groupLogs: Array<{ __typename?: 'STLog', date: string, logText: string }> }, managers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }> };

export type QueryStGroupByGroupIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type QueryStGroupByGroupIdQuery = { __typename?: 'Query', querySTGroupByGroupId?: { __typename?: 'STGroupAllData', id: string, name: string, description?: string | null, imageUrl?: string | null, imagePath?: string | null, lastUpdateDate: string, lastEditedDate: string, createdDate: string, startDate: string, endDate?: string | null, watchedByUsers: number, isPrivate: boolean, isInfinite: boolean, isClosed: boolean, numberOfMembers: number, numberOfMembersActive?: number | null, numberOfInvitationSent: number, numberOfInvitationReceived: number, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, lastTransactions: Array<{ __typename?: 'STTransaction', transactionId?: string | null, symbol: string, price: number, return?: number | null, returnChange?: number | null, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number, user?: { __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string } | null }>, groupMemberData: { __typename?: 'STGroupMemberData', id: string, members: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, invitationSent: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, invitationReceived: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, holdings: Array<{ __typename?: 'STGroupHoldings', numberOfUsers: number, holding: { __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number, summary: { __typename?: 'Summary', avgVolume: number, ceo?: string | null, companyName: string, currency: string, dividendDate?: string | null, ePSTTM?: number | null, earningsDate?: string | null, exDividendDate?: string | null, exchangeName?: string | null, fiveTwoWeekRange?: string | null, forwardDividendRate?: number | null, forwardDividendYield?: number | null, forwardEPS?: number | null, forwardPE?: number | null, fullTimeEmployees?: string | null, id: string, symbolType?: SymbolType | null, industry?: string | null, ipoDate?: string | null, beta?: number | null, countryFullName?: string | null, lastSplitDate?: string | null, lastSplitFactor?: string | null, logo_url?: string | null, longBusinessSummary?: string | null, marketCap?: number | null, marketPrice: number, oneyTargetEst?: number | null, pERatioTTM?: number | null, previousClose: number, recommendationKey?: string | null, recommendationMean?: number | null, sandPFiveTwoWeekChange?: number | null, sector?: string | null, sharesOutstanding?: number | null, shortRatio?: number | null, symbol: string, targetEstOneyPercent?: number | null, volume: number, website?: string | null, weekRangeFiveTwoMax: number, weekRangeFiveTwoMin: number, yearToDatePrice: number, yearToDatePriceReturn?: number | null, isActivelyTrading?: boolean | null, residance?: { __typename?: 'SummaryResidance', city?: string | null, state?: string | null, country?: string | null, addressOne?: string | null, zip?: string | null } | null } } }> }, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null }, topTransactions: Array<{ __typename?: 'STTransaction', transactionId?: string | null, symbol: string, price: number, return?: number | null, returnChange?: number | null, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number, user?: { __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string } | null }>, groupHistoricalData: { __typename?: 'STGroupHistoricalData', portfolioSnapshots: Array<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, transactionSnapshots: Array<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }>, bestAchievedRanks: Array<{ __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null }>, groupLogs: Array<{ __typename?: 'STLog', date: string, logText: string }> }, managers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }> } | null };

export type QueryStGroupByGroupIdWithoutHoldingQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type QueryStGroupByGroupIdWithoutHoldingQuery = { __typename?: 'Query', querySTGroupByGroupId?: { __typename?: 'STGroupAllData', id: string, name: string, description?: string | null, imageUrl?: string | null, imagePath?: string | null, lastUpdateDate: string, lastEditedDate: string, createdDate: string, startDate: string, endDate?: string | null, watchedByUsers: number, isPrivate: boolean, isInfinite: boolean, isClosed: boolean, numberOfMembers: number, numberOfMembersActive?: number | null, numberOfInvitationSent: number, numberOfInvitationReceived: number, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, lastTransactions: Array<{ __typename?: 'STTransaction', transactionId?: string | null, symbol: string, price: number, return?: number | null, returnChange?: number | null, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number, user?: { __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string } | null }>, groupMemberData: { __typename?: 'STGroupMemberData', id: string, members: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, invitationSent: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, invitationReceived: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }> }, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null }, topTransactions: Array<{ __typename?: 'STTransaction', transactionId?: string | null, symbol: string, price: number, return?: number | null, returnChange?: number | null, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number, user?: { __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string } | null }>, groupHistoricalData: { __typename?: 'STGroupHistoricalData', portfolioSnapshots: Array<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, transactionSnapshots: Array<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }>, bestAchievedRanks: Array<{ __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null }>, groupLogs: Array<{ __typename?: 'STLog', date: string, logText: string }> }, managers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }> } | null };

export type QueryStGroupAllDataGroupMemberHoldingsDataQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type QueryStGroupAllDataGroupMemberHoldingsDataQuery = { __typename?: 'Query', querySTGroupByGroupId?: { __typename?: 'STGroupAllData', id: string, name: string, groupMemberData: { __typename?: 'STGroupMemberData', id: string, holdings: Array<{ __typename?: 'STGroupHoldings', numberOfUsers: number, holding: { __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number, summary: { __typename?: 'Summary', avgVolume: number, ceo?: string | null, companyName: string, currency: string, dividendDate?: string | null, ePSTTM?: number | null, earningsDate?: string | null, exDividendDate?: string | null, exchangeName?: string | null, fiveTwoWeekRange?: string | null, forwardDividendRate?: number | null, forwardDividendYield?: number | null, forwardEPS?: number | null, forwardPE?: number | null, fullTimeEmployees?: string | null, id: string, symbolType?: SymbolType | null, industry?: string | null, ipoDate?: string | null, beta?: number | null, countryFullName?: string | null, lastSplitDate?: string | null, lastSplitFactor?: string | null, logo_url?: string | null, longBusinessSummary?: string | null, marketCap?: number | null, marketPrice: number, oneyTargetEst?: number | null, pERatioTTM?: number | null, previousClose: number, recommendationKey?: string | null, recommendationMean?: number | null, sandPFiveTwoWeekChange?: number | null, sector?: string | null, sharesOutstanding?: number | null, shortRatio?: number | null, symbol: string, targetEstOneyPercent?: number | null, volume: number, website?: string | null, weekRangeFiveTwoMax: number, weekRangeFiveTwoMin: number, yearToDatePrice: number, yearToDatePriceReturn?: number | null, isActivelyTrading?: boolean | null, residance?: { __typename?: 'SummaryResidance', city?: string | null, state?: string | null, country?: string | null, addressOne?: string | null, zip?: string | null } | null } } }> } } | null };

export type QueryStGroupByGroupNameQueryVariables = Exact<{
  groupName: Scalars['String'];
}>;


export type QueryStGroupByGroupNameQuery = { __typename?: 'Query', querySTGroupByGroupName: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null, imagePath?: string | null, imageUrl?: string | null, startDate: string, endDate?: string | null, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfMembersActive?: number | null, createdDate: string, watchedByUsers: number, lastUpdateDate: string, lastEditedDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null } } | null> };

export type CreateGroupMutationVariables = Exact<{
  groupInput: StGroupAllDataInput;
}>;


export type CreateGroupMutation = { __typename?: 'Mutation', createGroup?: { __typename?: 'STGroupAllData', id: string, name: string, description?: string | null, imagePath?: string | null, imageUrl?: string | null, startDate: string, endDate?: string | null, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfMembersActive?: number | null, createdDate: string, watchedByUsers: number, lastUpdateDate: string, lastEditedDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null } } | null };

export type EditGroupMutationVariables = Exact<{
  groupInput: StGroupAllDataInput;
}>;


export type EditGroupMutation = { __typename?: 'Mutation', editGroup?: boolean | null };

export type DeleteGroupMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteGroupMutation = { __typename?: 'Mutation', deleteGroup?: boolean | null };

export type ToggleInvitationRequestToGroupMutationVariables = Exact<{
  id: Scalars['String'];
  sendInvitation: Scalars['Boolean'];
}>;


export type ToggleInvitationRequestToGroupMutation = { __typename?: 'Mutation', toggleInvitationRequestToGroup?: { __typename?: 'STGroupAllData', id: string, name: string, description?: string | null, imagePath?: string | null, imageUrl?: string | null, startDate: string, endDate?: string | null, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfMembersActive?: number | null, createdDate: string, watchedByUsers: number, lastUpdateDate: string, lastEditedDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null } } | null };

export type AnswerReceivedGroupInvitationMutationVariables = Exact<{
  id: Scalars['String'];
  accept: Scalars['Boolean'];
}>;


export type AnswerReceivedGroupInvitationMutation = { __typename?: 'Mutation', answerReceivedGroupInvitation?: { __typename?: 'STGroupAllData', id: string, name: string, description?: string | null, imagePath?: string | null, imageUrl?: string | null, startDate: string, endDate?: string | null, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfMembersActive?: number | null, createdDate: string, watchedByUsers: number, lastUpdateDate: string, lastEditedDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null } } | null };

export type LeaveGroupMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type LeaveGroupMutation = { __typename?: 'Mutation', leaveGroup?: boolean | null };

export type RemoveMemberFromGroupMutationVariables = Exact<{
  groupId: Scalars['String'];
  removingUserId: Scalars['String'];
}>;


export type RemoveMemberFromGroupMutation = { __typename?: 'Mutation', removeMemberFromGroup?: boolean | null };

export type ToggleInviteUserIntoGroupMutationVariables = Exact<{
  inviteUser: Scalars['Boolean'];
  userId: Scalars['String'];
  groupId: Scalars['String'];
}>;


export type ToggleInviteUserIntoGroupMutation = { __typename?: 'Mutation', toggleInviteUserIntoGroup?: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } } | null };

export type ToggleUsersInvitationRequestToGroupMutationVariables = Exact<{
  acceptUser: Scalars['Boolean'];
  userId: Scalars['String'];
  groupId: Scalars['String'];
}>;


export type ToggleUsersInvitationRequestToGroupMutation = { __typename?: 'Mutation', toggleUsersInvitationRequestToGroup?: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } } | null };

export type ToggleWatchGroupMutationVariables = Exact<{
  groupId: Scalars['String'];
}>;


export type ToggleWatchGroupMutation = { __typename?: 'Mutation', toggleWatchGroup?: boolean | null };

export type StHallOfFameEntityGainsUsersFragment = { __typename?: 'STHallOfFameEntityGainsUsers', day_1_change_prct: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, day_1_change_number: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, week_1_change_prct: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, week_1_change_number: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, week_2_change_prct: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, week_2_change_number: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, week_3_change_prct: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, week_3_change_number: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, month_1_change_prct: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, month_1_change_number: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }> };

export type StHallOfFameUsersFragment = { __typename?: 'STHallOfFameUsers', total: number, lastUpdateDate: string, highestPortfolio: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, bestGainers: { __typename?: 'STHallOfFameEntityGainsUsers', day_1_change_prct: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, day_1_change_number: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, week_1_change_prct: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, week_1_change_number: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, week_2_change_prct: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, week_2_change_number: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, week_3_change_prct: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, week_3_change_number: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, month_1_change_prct: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, month_1_change_number: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }> }, wortGainers: { __typename?: 'STHallOfFameEntityGainsUsers', day_1_change_prct: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, day_1_change_number: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, week_1_change_prct: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, week_1_change_number: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, week_2_change_prct: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, week_2_change_number: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, week_3_change_prct: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, week_3_change_number: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, month_1_change_prct: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, month_1_change_number: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }> } };

export type StHallOfFameGroupsFragment = { __typename?: 'STHallOfFameGroups', total: number, lastUpdateDate: string, highestPortfolio: Array<{ __typename?: 'STGroupIdentification', id: string, name: string, description?: string | null, imagePath?: string | null, imageUrl?: string | null, startDate: string, endDate?: string | null, isInfinite: boolean, isPrivate: boolean, isClosed?: boolean | null, numberOfMembers: number, numberOfMembersActive?: number | null, createdDate: string, watchedByUsers: number, lastUpdateDate: string, lastEditedDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null } }> };

export type QueryHallOfFameQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryHallOfFameQuery = { __typename?: 'Query', queryHallOfFame: { __typename?: 'STHallOfFame', users: { __typename?: 'STHallOfFameUsers', total: number, lastUpdateDate: string, highestPortfolio: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, bestGainers: { __typename?: 'STHallOfFameEntityGainsUsers', day_1_change_prct: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, day_1_change_number: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, week_1_change_prct: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, week_1_change_number: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, week_2_change_prct: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, week_2_change_number: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, week_3_change_prct: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, week_3_change_number: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, month_1_change_prct: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, month_1_change_number: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }> }, wortGainers: { __typename?: 'STHallOfFameEntityGainsUsers', day_1_change_prct: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, day_1_change_number: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, week_1_change_prct: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, week_1_change_number: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, week_2_change_prct: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, week_2_change_number: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, week_3_change_prct: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, week_3_change_number: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, month_1_change_prct: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }>, month_1_change_number: Array<{ __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } }> } }, groups: { __typename?: 'STHallOfFameGroups', total: number, lastUpdateDate: string, highestPortfolio: Array<{ __typename?: 'STGroupIdentification', id: string, name: string, description?: string | null, imagePath?: string | null, imageUrl?: string | null, startDate: string, endDate?: string | null, isInfinite: boolean, isPrivate: boolean, isClosed?: boolean | null, numberOfMembers: number, numberOfMembersActive?: number | null, createdDate: string, watchedByUsers: number, lastUpdateDate: string, lastEditedDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null } }> } } };

export type StMarketChartDataResultCombinedFragmentFragment = { __typename?: 'STMarketChartDataResultCombined', currentDate: string, currentValue: number, data: Array<Array<number | null> | null>, documentKey: string, name: string, parentName: string, lastUpdate: string };

export type StMarketTopTableCryptoDataFragmentFragment = { __typename?: 'STMarketTopTableCryptoData', circulatingSupply?: number | null, coinImageUrl?: string | null, currency?: string | null, fiftyTwoWeekHigh: number, fiftyTwoWeekLow: number, marketCap: number, quoteType?: string | null, regularMarketChange: number, regularMarketChangePercent?: number | null, regularMarketClosed: number, regularMarketOpen?: number | null, regularMarketPrice: number, regularMarketVolume: number, shortName: string, symbol: string, volume24Hr?: number | null, volumeAllCurrencies?: number | null };

export type QueryStMarketHistoryOverviewQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryStMarketHistoryOverviewQuery = { __typename?: 'Query', querySTMarketHistoryOverview?: { __typename?: 'STMarketOverviewPartialData', lastUpdate?: string | null, sp500: Array<{ __typename?: 'STMarketChartDataResultCombined', currentDate: string, currentValue: number, data: Array<Array<number | null> | null>, documentKey: string, name: string, parentName: string, lastUpdate: string }>, bonds: Array<{ __typename?: 'STMarketChartDataResultCombined', currentDate: string, currentValue: number, data: Array<Array<number | null> | null>, documentKey: string, name: string, parentName: string, lastUpdate: string }>, inflation_rate: Array<{ __typename?: 'STMarketChartDataResultCombined', currentDate: string, currentValue: number, data: Array<Array<number | null> | null>, documentKey: string, name: string, parentName: string, lastUpdate: string }>, misery_index: Array<{ __typename?: 'STMarketChartDataResultCombined', currentDate: string, currentValue: number, data: Array<Array<number | null> | null>, documentKey: string, name: string, parentName: string, lastUpdate: string }>, treasury_yield: Array<{ __typename?: 'STMarketChartDataResultCombined', currentDate: string, currentValue: number, data: Array<Array<number | null> | null>, documentKey: string, name: string, parentName: string, lastUpdate: string }>, investor_sentiment: Array<{ __typename?: 'STMarketChartDataResultCombined', currentDate: string, currentValue: number, data: Array<Array<number | null> | null>, documentKey: string, name: string, parentName: string, lastUpdate: string }>, bitcoin: Array<{ __typename?: 'STMarketChartDataResultCombined', currentDate: string, currentValue: number, data: Array<Array<number | null> | null>, documentKey: string, name: string, parentName: string, lastUpdate: string }> } | null };

export type QuerySymbolHistoricalPricesQueryVariables = Exact<{
  symbol: Scalars['String'];
  period: Scalars['String'];
}>;


export type QuerySymbolHistoricalPricesQuery = { __typename?: 'Query', querySymbolHistoricalPrices?: { __typename?: 'SymbolHistoricalPrices', livePrice: number, symbol: string, period: string, price: Array<Array<number>>, volume?: Array<Array<number | null> | null> | null } | null };

export type QueryMarketDailyOverviewQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryMarketDailyOverviewQuery = { __typename?: 'Query', queryMarketDailyOverview?: { __typename?: 'STMarketDailyOverview', id?: string | null, lastUpdate: string, lastUpdateTopStocks: string, dailyGainers: Array<{ __typename?: 'STFMCompanyQuote', avgVolume: number, change: number, changesPercentage: number, dayHigh?: number | null, dayLow?: number | null, earningsAnnouncement?: string | null, eps?: number | null, exchange: string, marketCap?: number | null, name: string, open: number, pe?: number | null, previousClose?: number | null, price?: number | null, priceAvg200?: number | null, priceAvg50?: number | null, sharesOutstanding?: number | null, symbol: string, timestamp: number, volume: number, yearHigh: number, yearLow: number, image?: string | null }>, dailyLosers: Array<{ __typename?: 'STFMCompanyQuote', avgVolume: number, change: number, changesPercentage: number, dayHigh?: number | null, dayLow?: number | null, earningsAnnouncement?: string | null, eps?: number | null, exchange: string, marketCap?: number | null, name: string, open: number, pe?: number | null, previousClose?: number | null, price?: number | null, priceAvg200?: number | null, priceAvg50?: number | null, sharesOutstanding?: number | null, symbol: string, timestamp: number, volume: number, yearHigh: number, yearLow: number, image?: string | null }>, mostActive: Array<{ __typename?: 'STFMCompanyQuote', avgVolume: number, change: number, changesPercentage: number, dayHigh?: number | null, dayLow?: number | null, earningsAnnouncement?: string | null, eps?: number | null, exchange: string, marketCap?: number | null, name: string, open: number, pe?: number | null, previousClose?: number | null, price?: number | null, priceAvg200?: number | null, priceAvg50?: number | null, sharesOutstanding?: number | null, symbol: string, timestamp: number, volume: number, yearHigh: number, yearLow: number, image?: string | null }>, stockSuggestions: Array<{ __typename?: 'STStockSuggestion', historicalData: Array<number>, summary: { __typename?: 'Summary', avgVolume: number, ceo?: string | null, companyName: string, currency: string, dividendDate?: string | null, ePSTTM?: number | null, earningsDate?: string | null, exDividendDate?: string | null, exchangeName?: string | null, fiveTwoWeekRange?: string | null, forwardDividendRate?: number | null, forwardDividendYield?: number | null, forwardEPS?: number | null, forwardPE?: number | null, fullTimeEmployees?: string | null, id: string, symbolType?: SymbolType | null, industry?: string | null, ipoDate?: string | null, beta?: number | null, countryFullName?: string | null, lastSplitDate?: string | null, lastSplitFactor?: string | null, logo_url?: string | null, longBusinessSummary?: string | null, marketCap?: number | null, marketPrice: number, oneyTargetEst?: number | null, pERatioTTM?: number | null, previousClose: number, recommendationKey?: string | null, recommendationMean?: number | null, sandPFiveTwoWeekChange?: number | null, sector?: string | null, sharesOutstanding?: number | null, shortRatio?: number | null, symbol: string, targetEstOneyPercent?: number | null, volume: number, website?: string | null, weekRangeFiveTwoMax: number, weekRangeFiveTwoMin: number, yearToDatePrice: number, yearToDatePriceReturn?: number | null, isActivelyTrading?: boolean | null, residance?: { __typename?: 'SummaryResidance', city?: string | null, state?: string | null, country?: string | null, addressOne?: string | null, zip?: string | null } | null } }>, topCrypto: Array<{ __typename?: 'STMarketTopTableCryptoData', circulatingSupply?: number | null, coinImageUrl?: string | null, currency?: string | null, fiftyTwoWeekHigh: number, fiftyTwoWeekLow: number, marketCap: number, quoteType?: string | null, regularMarketChange: number, regularMarketChangePercent?: number | null, regularMarketClosed: number, regularMarketOpen?: number | null, regularMarketPrice: number, regularMarketVolume: number, shortName: string, symbol: string, volume24Hr?: number | null, volumeAllCurrencies?: number | null }>, news: Array<{ __typename?: 'STFMStockNew', image?: string | null, publishedDate?: string | null, site?: string | null, symbol?: string | null, text?: string | null, title?: string | null, url?: string | null }>, calendar: { __typename?: 'STMarketCalendar', calendarEconomic: Array<{ __typename?: 'STFMCalendarEconomic', event?: string | null, date?: string | null, country?: string | null, actual?: number | null, previous?: number | null, change?: number | null, changePercentage?: number | null, estimate?: number | null }>, calendarDividend: Array<{ __typename?: 'STFMStockDividend', adjDividend?: number | null, date?: string | null, declarationDate?: string | null, dividend?: number | null, label?: string | null, paymentDate?: string | null, recordDate?: string | null, symbol?: string | null }>, calendarSplit: Array<{ __typename?: 'STFMSplitHistory', date?: string | null, denominator?: number | null, label?: string | null, numerator?: number | null, symbol?: string | null }>, calendarIpo: Array<{ __typename?: 'STFMCalendarIpo', date?: string | null, company?: string | null, symbol?: string | null, exchange?: string | null, actions?: string | null, shares?: number | null, priceRange?: string | null, marketCap?: number | null }>, calendarEarnings: Array<{ __typename?: 'STFMCalendarEarnings', date?: string | null, symbol?: string | null, eps?: number | null, epsEstimated?: number | null, time?: string | null, revenue?: number | null, revenueEstimated?: number | null }> }, mutulaFunds: Array<{ __typename?: 'STFMCompanyQuote', avgVolume: number, change: number, changesPercentage: number, dayHigh?: number | null, dayLow?: number | null, earningsAnnouncement?: string | null, eps?: number | null, exchange: string, marketCap?: number | null, name: string, open: number, pe?: number | null, previousClose?: number | null, price?: number | null, priceAvg200?: number | null, priceAvg50?: number | null, sharesOutstanding?: number | null, symbol: string, timestamp: number, volume: number, yearHigh: number, yearLow: number, image?: string | null }>, etfs: Array<{ __typename?: 'STFMCompanyQuote', avgVolume: number, change: number, changesPercentage: number, dayHigh?: number | null, dayLow?: number | null, earningsAnnouncement?: string | null, eps?: number | null, exchange: string, marketCap?: number | null, name: string, open: number, pe?: number | null, previousClose?: number | null, price?: number | null, priceAvg200?: number | null, priceAvg50?: number | null, sharesOutstanding?: number | null, symbol: string, timestamp: number, volume: number, yearHigh: number, yearLow: number, image?: string | null }>, commodities: Array<{ __typename?: 'STFMCompanyQuote', avgVolume: number, change: number, changesPercentage: number, dayHigh?: number | null, dayLow?: number | null, earningsAnnouncement?: string | null, eps?: number | null, exchange: string, marketCap?: number | null, name: string, open: number, pe?: number | null, previousClose?: number | null, price?: number | null, priceAvg200?: number | null, priceAvg50?: number | null, sharesOutstanding?: number | null, symbol: string, timestamp: number, volume: number, yearHigh: number, yearLow: number, image?: string | null }>, exchange: { __typename?: 'STMarketExchange', id?: string | null, exchangeIndustryPE: Array<{ __typename?: 'STFMExchangeIndustryPE', date?: string | null, industry?: string | null, exchange?: string | null, pe?: number | null }>, exchangeSectorPE: Array<{ __typename?: 'STFMExchangeSectorPE', date?: string | null, sector?: string | null, exchange?: string | null, pe?: number | null }> }, sectorPerformance: Array<{ __typename?: 'STFMSectorPerformance', sector?: string | null, changesPercentage?: string | null }> } | null };

export type QueryEtfDocumentQueryVariables = Exact<{
  etfName: Scalars['String'];
}>;


export type QueryEtfDocumentQuery = { __typename?: 'Query', queryEtfDocument?: { __typename?: 'STMarketEtfDocument', id?: string | null, lastUpdate?: string | null, etfHolders: Array<{ __typename?: 'STFMEtfHolder', asset?: string | null, sharesNumber?: number | null, weightPercentage?: number | null }>, etfSectorWeight: Array<{ __typename?: 'STFMEtfSectorWeight', sector?: string | null, weightPercentage?: string | null }>, etfCountryWeight: Array<{ __typename?: 'STFMEtfCountryWeight', country?: string | null, weightPercentage?: string | null }> } | null };

export type QueryStMarketAllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryStMarketAllCategoriesQuery = { __typename?: 'Query', queryStMarketAllCategories?: { __typename?: 'STMarketDatasetKeyCategories', categories: Array<{ __typename?: 'STMarketDatasetKeyCategory', name: string, data: Array<{ __typename?: 'STMarketDatasetKey', documentKey: string, name: string }> }> } | null };

export type QueryStMarketDataQueryVariables = Exact<{
  key: Scalars['String'];
}>;


export type QueryStMarketDataQuery = { __typename?: 'Query', queryStMarketData?: { __typename?: 'STMarketChartDataResultCombined', currentDate: string, currentValue: number, data: Array<Array<number | null> | null>, documentKey: string, name: string, parentName: string, lastUpdate: string } | null };

export type QueryStockScreenerQueryVariables = Exact<{
  stockScreenerInput: StfmStockScreenerInput;
  offset: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type QueryStockScreenerQuery = { __typename?: 'Query', queryStockScreener?: { __typename?: 'STFMStockScreenerResultWrapper', found: number, offset: number, limit: number, result: Array<{ __typename?: 'STFMStockScreenerResult', symbol: string, companyName: string, marketCap?: number | null, sector?: string | null, industry?: string | null, beta?: number | null, price: number, lastAnnualDividend?: number | null, volume: number, exchange: string, exchangeShortName?: string | null, country?: string | null, isEtf?: boolean | null, isActivelyTrading?: boolean | null, companyQuote?: { __typename?: 'STFMCompanyQuote', avgVolume: number, change: number, changesPercentage: number, dayHigh?: number | null, dayLow?: number | null, earningsAnnouncement?: string | null, eps?: number | null, exchange: string, marketCap?: number | null, name: string, open: number, pe?: number | null, previousClose?: number | null, price?: number | null, priceAvg200?: number | null, priceAvg50?: number | null, sharesOutstanding?: number | null, symbol: string, timestamp: number, volume: number, yearHigh: number, yearLow: number, image?: string | null } | null }> } | null };

export type StPortfolioSnapshotFragmentFragment = { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string };

export type StPortfolioChangeDataFragment = { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number };

export type StPortfolioChangeFragment = { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null };

export type StPortfolioWrapperFragmentFragment = { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } };

export type StPortfolioSnapshotStartedFragmentFragment = { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number };

export type StPortfolioRiskCalculationsFragmentFragment = { __typename?: 'STPortfolioRiskCalculations', date?: string | null, portfolioAlpha?: number | null, portfolioAnnualVariancePrct?: number | null, portfolioAnnualVolatilityPrct?: number | null, portfolioBeta?: number | null, portfolioEstimatedReturnPrct?: number | null, portfolioEstimatedReturnValue?: number | null, portfolioSharpRatio?: number | null, portfolioVolatilityMeanPrct?: number | null };

export type StRankFragmentFragment = { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null };

export type StLogsFragmentFragment = { __typename?: 'STLog', date: string, logText: string };

export type SummaryResidanceFragmentFragment = { __typename?: 'SummaryResidance', city?: string | null, state?: string | null, country?: string | null, addressOne?: string | null, zip?: string | null };

export type StockSummaryFragmentFragment = { __typename?: 'Summary', avgVolume: number, ceo?: string | null, companyName: string, currency: string, dividendDate?: string | null, ePSTTM?: number | null, earningsDate?: string | null, exDividendDate?: string | null, exchangeName?: string | null, fiveTwoWeekRange?: string | null, forwardDividendRate?: number | null, forwardDividendYield?: number | null, forwardEPS?: number | null, forwardPE?: number | null, fullTimeEmployees?: string | null, id: string, symbolType?: SymbolType | null, industry?: string | null, ipoDate?: string | null, beta?: number | null, countryFullName?: string | null, lastSplitDate?: string | null, lastSplitFactor?: string | null, logo_url?: string | null, longBusinessSummary?: string | null, marketCap?: number | null, marketPrice: number, oneyTargetEst?: number | null, pERatioTTM?: number | null, previousClose: number, recommendationKey?: string | null, recommendationMean?: number | null, sandPFiveTwoWeekChange?: number | null, sector?: string | null, sharesOutstanding?: number | null, shortRatio?: number | null, symbol: string, targetEstOneyPercent?: number | null, volume: number, website?: string | null, weekRangeFiveTwoMax: number, weekRangeFiveTwoMin: number, yearToDatePrice: number, yearToDatePriceReturn?: number | null, isActivelyTrading?: boolean | null, residance?: { __typename?: 'SummaryResidance', city?: string | null, state?: string | null, country?: string | null, addressOne?: string | null, zip?: string | null } | null };

export type FinancialReportStatementDataFragmentFragment = { __typename?: 'FinancialReportStatementData', concept?: string | null, label?: string | null, unit?: string | null, value?: number | null };

export type FinancialReportFragmentFragment = { __typename?: 'FinancialReport', acceptedDate?: string | null, accessNumber?: string | null, cik?: string | null, endDate?: string | null, filedDate?: string | null, form?: string | null, quarter?: number | null, startDate?: string | null, symbol?: string | null, year?: number | null, report?: { __typename?: 'FinancialReportStatement', bs: Array<{ __typename?: 'FinancialReportStatementData', concept?: string | null, label?: string | null, unit?: string | null, value?: number | null } | null>, cf: Array<{ __typename?: 'FinancialReportStatementData', concept?: string | null, label?: string | null, unit?: string | null, value?: number | null } | null>, ic: Array<{ __typename?: 'FinancialReportStatementData', concept?: string | null, label?: string | null, unit?: string | null, value?: number | null } | null> } | null };

export type RecommendationFragmentFragment = { __typename?: 'Recommendations', buy?: number | null, hold?: number | null, period?: string | null, sell?: number | null, strongBuy?: number | null, strongSell?: number | null, symbol?: string | null };

export type NewsArticleFragmentFragment = { __typename?: 'NewsArticle', datetime?: number | null, headline?: string | null, image?: string | null, sourceName?: string | null, summary?: string | null, url?: string | null };

export type CalculationFragmentFragment = { __typename?: 'Calculation', avg?: number | null, max?: number | null, min?: number | null };

export type EsgScoreFragmentFragment = { __typename?: 'EsgScores', totalEsg?: number | null, environmentScore?: number | null, governanceScore?: number | null, highestControversy?: number | null, esgPerformance?: string | null, socialScore?: number | null, peerCount?: number | null, percentile?: number | null, peerGroup?: string | null, relatedControversy?: Array<string | null> | null, peerEnvironmentPerformance?: { __typename?: 'Calculation', avg?: number | null, max?: number | null, min?: number | null } | null, peerEsgScorePerformance?: { __typename?: 'Calculation', avg?: number | null, max?: number | null, min?: number | null } | null, peerGovernancePerformance?: { __typename?: 'Calculation', avg?: number | null, max?: number | null, min?: number | null } | null, peerHighestControversyPerformance?: { __typename?: 'Calculation', avg?: number | null, max?: number | null, min?: number | null } | null, peerSocialPerformance?: { __typename?: 'Calculation', avg?: number | null, max?: number | null, min?: number | null } | null };

export type DefaultKeyStatisticsFragmentFragment = { __typename?: 'DefaultKeyStatistics', bookValue?: number | null, dateShortInterest?: number | null, earningsQuarterlyGrowth?: number | null, enterpriseToEbitda?: number | null, enterpriseToRevenue?: number | null, enterpriseValue?: number | null, fiveYearAverageReturn?: number | null, floatShares?: number | null, forwardEps?: number | null, forwardPE?: number | null, heldPercentInsiders?: number | null, heldPercentInstitutions?: number | null, lastFiscalYearEnd?: number | null, lastSplitDate?: number | null, lastSplitFactor?: string | null, mostRecentQuarter?: number | null, netIncomeToCommon?: number | null, nextFiscalYearEnd?: number | null, pegRatio?: number | null, priceHint?: number | null, priceToBook?: number | null, profitMargins?: number | null, sharesOutstanding: number, sharesPercentSharesOut?: number | null, sharesShort?: number | null, sharesShortPreviousMonthDate?: number | null, sharesShortPriorMonth?: number | null, shortPercentOfFloat?: number | null, shortRatio?: number | null, trailingEps?: number | null };

export type FinancialDataFragmentFragment = { __typename?: 'FinancialData', currentPrice?: number | null, currentRatio?: number | null, debtToEquity?: number | null, earningsGrowth?: number | null, ebitda?: number | null, ebitdaMargins?: number | null, financialCurrency?: string | null, freeCashflow?: number | null, grossMargins?: number | null, grossProfits?: number | null, numberOfAnalystOpinions?: number | null, operatingCashflow?: number | null, operatingMargins?: number | null, profitMargins?: number | null, quickRatio?: number | null, recommendationKey?: string | null, recommendationMean?: number | null, returnOnAssets?: number | null, returnOnEquity?: number | null, revenueGrowth?: number | null, revenuePerShare?: number | null, targetHighPrice?: number | null, targetLowPrice?: number | null, targetMeanPrice?: number | null, targetMedianPrice?: number | null, totalCash?: number | null, totalCashPerShare?: number | null, totalDebt?: number | null, totalRevenue?: number | null };

export type MetricFragmentFragment = { __typename?: 'Metric', fiveDayPriceReturnDaily?: number | null, fiveTwoWeekHigh?: number | null, fiveTwoWeekHighDate?: string | null, fiveTwoWeekLow?: number | null, fiveTwoWeekLowDate?: string | null, fiveTwoWeekPriceReturnDaily?: number | null, oneDayAverageTradingVolume?: number | null, oneThreeWeekPriceReturnDaily?: number | null, threeMonthAverageTradingVolume?: number | null, twoSixWeekPriceReturnDaily?: number | null, assetTurnoverAnnual?: number | null, assetTurnoverTTM?: number | null, beta?: number | null, bookValuePerShareAnnual?: number | null, bookValuePerShareQuarterly?: number | null, bookValueShareGrowthFiveY?: number | null, capitalSpendingGrowthFiveY?: number | null, cashFlowPerShareAnnual?: number | null, cashFlowPerShareTTM?: number | null, cashPerSharePerShareAnnual?: number | null, cashPerSharePerShareQuarterly?: number | null, currentEvfreeCashFlowAnnual?: number | null, currentEvfreeCashFlowTTM?: number | null, currentRatioAnnual?: number | null, currentRatioQuarterly?: number | null, ebitdPerShareTTM?: number | null, ebitdaCagrFiveY?: number | null, ebitdaInterimCagrFiveY?: number | null, epsBasicExclExtraItemsAnnual?: number | null, epsBasicExclExtraItemsTTM?: number | null, epsExclExtraItemsAnnual?: number | null, epsExclExtraItemsTTM?: number | null, epsGrowthFiveY?: number | null, epsGrowthQuarterlyYoy?: number | null, epsGrowthTTMYoy?: number | null, epsGrowthThreeY?: number | null, epsInclExtraItemsAnnual?: number | null, epsInclExtraItemsTTM?: number | null, epsNormalizedAnnual?: number | null, focfCagrFiveY?: number | null, freeCashFlowAnnual?: number | null, freeCashFlowPerShareTTM?: number | null, freeCashFlowTTM?: number | null, freeOperatingCashFlowrevenueFiveY?: number | null, freeOperatingCashFlowrevenueTTM?: number | null, grossMarginAnnual?: number | null, grossMarginFiveY?: number | null, grossMarginTTM?: number | null, inventoryTurnoverAnnual?: number | null, inventoryTurnoverTTM?: number | null, longTermDebtequityAnnual?: number | null, longTermDebtequityQuarterly?: number | null, marketCapitalization?: number | null, monthToDatePriceReturnDaily?: number | null, netDebtAnnual?: number | null, netDebtInterim?: number | null, netIncomeEmployeeAnnual?: number | null, netIncomeEmployeeTTM?: number | null, netInterestCoverageAnnual?: number | null, netInterestCoverageTTM?: number | null, netMarginGrowthFiveY?: number | null, netProfitMarginAnnual?: number | null, netProfitMarginFiveY?: number | null, netProfitMarginTTM?: number | null, operatingMarginAnnual?: number | null, operatingMarginFiveY?: number | null, operatingMarginTTM?: number | null, payoutRatioAnnual?: number | null, payoutRatioTTM?: number | null, pbAnnual?: number | null, pbQuarterly?: number | null, pcfShareTTM?: number | null, peBasicExclExtraTTM?: number | null, peExclExtraAnnual?: number | null, peExclExtraHighTTM?: number | null, peExclExtraTTM?: number | null, peExclLowTTM?: number | null, peInclExtraTTM?: number | null, peNormalizedAnnual?: number | null, pfcfShareAnnual?: number | null, pfcfShareTTM?: number | null, pretaxMarginAnnual?: number | null, pretaxMarginFiveY?: number | null, pretaxMarginTTM?: number | null, priceRelativeToSPFiveFiveTwoWeek?: number | null, priceRelativeToSPFiveFourWeek?: number | null, priceRelativeToSPFiveOneThreeWeek?: number | null, priceRelativeToSPFiveTwoSixWeek?: number | null, priceRelativeToSPFiveYtd?: number | null, psAnnual?: number | null, psTTM?: number | null, ptbvAnnual?: number | null, ptbvQuarterly?: number | null, quickRatioAnnual?: number | null, quickRatioQuarterly?: number | null, receivablesTurnoverAnnual?: number | null, receivablesTurnoverTTM?: number | null, revenueEmployeeAnnual?: number | null, revenueEmployeeTTM?: number | null, revenueGrowthFiveY?: number | null, revenueGrowthQuarterlyYoy?: number | null, revenueGrowthTTMYoy?: number | null, revenueGrowthThreeY?: number | null, revenuePerShareAnnual?: number | null, revenuePerShareTTM?: number | null, revenueShareGrowthFiveY?: number | null, roaRfy?: number | null, roaaFiveY?: number | null, roaeFiveY?: number | null, roaeTTM?: number | null, roeRfy?: number | null, roeTTM?: number | null, roiAnnual?: number | null, roiFiveY?: number | null, roiTTM?: number | null, tangibleBookValuePerShareAnnual?: number | null, tangibleBookValuePerShareQuarterly?: number | null, tbvCagrFiveY?: number | null, totalDebtCagrFiveY?: number | null, totalDebttotalEquityAnnual?: number | null, totalDebttotalEquityQuarterly?: number | null, yearToDatePriceReturnDaily?: number | null };

export type DividensFragmentFragment = { __typename?: 'Dividens', currentDividendYieldTTM?: number | null, dividendGrowthRateFiveY?: number | null, dividendPerShareAnnual?: number | null, dividendPerShareFiveY?: number | null, dividendYieldFiveY?: number | null, dividendYieldIndicatedAnnual?: number | null, dividendPayoutRatioTTM?: number | null, dividendsPerShareTTM?: number | null, exDividendDate?: string | null, trailingAnnualDividendRate?: string | null, trailingAnnualDividendYield?: string | null, forwardDividendYield?: string | null };

export type EarningsChartFragmentFragment = { __typename?: 'EarningsChart', currentQuarterEstimate?: number | null, currentQuarterEstimateDate?: string | null, currentQuarterEstimateYear?: number | null, earningsDate: Array<number>, quarterly: Array<{ __typename?: 'EarningsChartData', actual?: number | null, date: string, estimate: number }> };

export type FinancialChartDataFragmentFragment = { __typename?: 'FinancialsChartData', categories: Array<string>, series: Array<{ __typename?: 'Series', data: Array<number | null>, name?: string | null }> };

export type EarningsFragmentFragment = { __typename?: 'Earnings', financialCurrency: string, earningsChart: { __typename?: 'EarningsChart', currentQuarterEstimate?: number | null, currentQuarterEstimateDate?: string | null, currentQuarterEstimateYear?: number | null, earningsDate: Array<number>, quarterly: Array<{ __typename?: 'EarningsChartData', actual?: number | null, date: string, estimate: number }> }, financialsChart: { __typename?: 'FinancialsChart', quarterly?: { __typename?: 'FinancialsChartData', categories: Array<string>, series: Array<{ __typename?: 'Series', data: Array<number | null>, name?: string | null }> } | null, yearly?: { __typename?: 'FinancialsChartData', categories: Array<string>, series: Array<{ __typename?: 'Series', data: Array<number | null>, name?: string | null }> } | null } };

export type HistoricalMetricsDataFragmentFragment = { __typename?: 'HistoricalMetricsData', name?: string | null, dates: Array<string>, data: Array<number> };

export type StDetailsFinancialRatiosFragment = { __typename?: 'STDetailsFinancialRatios', symbol?: string | null, date: Array<string>, currentRatio: Array<number | null>, quickRatio: Array<number | null>, cashRatio: Array<number | null>, daysOfSalesOutstanding: Array<number | null>, daysOfInventoryOutstanding: Array<number | null>, operatingCycle: Array<number | null>, daysOfPayablesOutstanding: Array<number | null>, cashConversionCycle: Array<number | null>, grossProfitMargin: Array<number | null>, operatingProfitMargin: Array<number | null>, pretaxProfitMargin: Array<number | null>, netProfitMargin: Array<number | null>, effectiveTaxRate: Array<number | null>, returnOnAssets: Array<number | null>, returnOnEquity: Array<number | null>, returnOnCapitalEmployed: Array<number | null>, netIncomePerEBT: Array<number | null>, ebtPerEbit: Array<number | null>, ebitPerRevenue: Array<number | null>, debtRatio: Array<number | null>, debtEquityRatio: Array<number | null>, longTermDebtToCapitalization: Array<number | null>, totalDebtToCapitalization: Array<number | null>, interestCoverage: Array<number | null>, cashFlowToDebtRatio: Array<number | null>, companyEquityMultiplier: Array<number | null>, receivablesTurnover: Array<number | null>, payablesTurnover: Array<number | null>, inventoryTurnover: Array<number | null>, fixedAssetTurnover: Array<number | null>, assetTurnover: Array<number | null>, operatingCashFlowPerShare: Array<number | null>, freeCashFlowPerShare: Array<number | null>, cashPerShare: Array<number | null>, payoutRatio: Array<number | null>, operatingCashFlowSalesRatio: Array<number | null>, freeCashFlowOperatingCashFlowRatio: Array<number | null>, cashFlowCoverageRatios: Array<number | null>, shortTermCoverageRatios: Array<number | null>, capitalExpenditureCoverageRatio: Array<number | null>, dividendPaidAndCapexCoverageRatio: Array<number | null>, dividendPayoutRatio: Array<number | null>, priceBookValueRatio: Array<number | null>, priceToBookRatio: Array<number | null>, priceToSalesRatio: Array<number | null>, priceEarningsRatio: Array<number | null>, priceToFreeCashFlowsRatio: Array<number | null>, priceToOperatingCashFlowsRatio: Array<number | null>, priceCashFlowRatio: Array<number | null>, priceEarningsToGrowthRatio: Array<number | null>, priceSalesRatio: Array<number | null>, dividendYield: Array<number | null>, enterpriseValueMultiple: Array<number | null>, priceFairValue: Array<number | null> };

export type StDetailsFinancialGrowthFragment = { __typename?: 'STDetailsFinancialGrowth', symbol?: string | null, date: Array<string>, revenueGrowth: Array<number | null>, grossProfitGrowth: Array<number | null>, ebitgrowth: Array<number | null>, operatingIncomeGrowth: Array<number | null>, netIncomeGrowth: Array<number | null>, epsgrowth: Array<number | null>, epsdilutedGrowth: Array<number | null>, weightedAverageSharesGrowth: Array<number | null>, weightedAverageSharesDilutedGrowth: Array<number | null>, dividendsperShareGrowth: Array<number | null>, operatingCashFlowGrowth: Array<number | null>, freeCashFlowGrowth: Array<number | null>, tenYRevenueGrowthPerShare: Array<number | null>, fiveYRevenueGrowthPerShare: Array<number | null>, threeYRevenueGrowthPerShare: Array<number | null>, tenYOperatingCFGrowthPerShare: Array<number | null>, fiveYOperatingCFGrowthPerShare: Array<number | null>, threeYOperatingCFGrowthPerShare: Array<number | null>, tenYNetIncomeGrowthPerShare: Array<number | null>, fiveYNetIncomeGrowthPerShare: Array<number | null>, threeYNetIncomeGrowthPerShare: Array<number | null>, tenYShareholdersEquityGrowthPerShare: Array<number | null>, fiveYShareholdersEquityGrowthPerShare: Array<number | null>, threeYShareholdersEquityGrowthPerShare: Array<number | null>, tenYDividendperShareGrowthPerShare: Array<number | null>, fiveYDividendperShareGrowthPerShare: Array<number | null>, threeYDividendperShareGrowthPerShare: Array<number | null>, receivablesGrowth: Array<number | null>, inventoryGrowth: Array<number | null>, assetGrowth: Array<number | null>, bookValueperShareGrowth: Array<number | null>, debtGrowth: Array<number | null>, rdexpenseGrowth: Array<number | null>, sgaexpensesGrowth: Array<number | null> };

export type StDetailsKeyMetricsFragment = { __typename?: 'STDetailsKeyMetrics', symbol: string, date: Array<string>, revenuePerShare: Array<number | null>, netIncomePerShare: Array<number | null>, operatingCashFlowPerShare: Array<number | null>, freeCashFlowPerShare: Array<number | null>, cashPerShare: Array<number | null>, bookValuePerShare: Array<number | null>, tangibleBookValuePerShare: Array<number | null>, shareholdersEquityPerShare: Array<number | null>, interestDebtPerShare: Array<number | null>, marketCap: Array<number | null>, enterpriseValue: Array<number | null>, peRatio: Array<number | null>, priceToSalesRatio: Array<number | null>, pocfratio: Array<number | null>, pfcfRatio: Array<number | null>, pbRatio: Array<number | null>, ptbRatio: Array<number | null>, evToSales: Array<number | null>, enterpriseValueOverEBITDA: Array<number | null>, evToOperatingCashFlow: Array<number | null>, evToFreeCashFlow: Array<number | null>, earningsYield: Array<number | null>, freeCashFlowYield: Array<number | null>, debtToEquity: Array<number | null>, debtToAssets: Array<number | null>, netDebtToEBITDA: Array<number | null>, currentRatio: Array<number | null>, interestCoverage: Array<number | null>, incomeQuality: Array<number | null>, dividendYield: Array<number | null>, payoutRatio: Array<number | null>, salesGeneralAndAdministrativeToRevenue: Array<number | null>, researchAndDdevelopementToRevenue: Array<number | null>, intangiblesToTotalAssets: Array<number | null>, capexToOperatingCashFlow: Array<number | null>, capexToRevenue: Array<number | null>, capexToDepreciation: Array<number | null>, stockBasedCompensationToRevenue: Array<number | null>, grahamNumber: Array<number | null>, roic: Array<number | null>, returnOnTangibleAssets: Array<number | null>, grahamNetNet: Array<number | null>, workingCapital: Array<number | null>, tangibleAssetValue: Array<number | null>, netCurrentAssetValue: Array<number | null>, investedCapital: Array<number | null>, averageReceivables: Array<number | null>, averagePayables: Array<number | null>, averageInventory: Array<number | null>, daysSalesOutstanding: Array<number | null>, daysPayablesOutstanding: Array<number | null>, daysOfInventoryOnHand: Array<number | null>, receivablesTurnover: Array<number | null>, payablesTurnover: Array<number | null>, inventoryTurnover: Array<number | null>, roe: Array<number | null>, capexPerShare: Array<number | null> };

export type StStockDetailsCalculationsFragment = { __typename?: 'STStockDetailsCalculations', symbol?: string | null, date?: string | null, alpha?: number | null, beta?: number | null, sharpRatio?: number | null, volatility?: { __typename?: 'STStockRiskCalculationsVolatility', benchmarkYearlyReturnPrct?: number | null, meanPrice?: number | null, stdDailyPrct?: number | null, stdDailyPrice?: number | null, stdYearlyPrct?: number | null, stdYearlyPrice?: number | null, symbolYearlyPriceReturnPrct?: number | null, volatilityPrct?: number | null, date?: string | null } | null, CAPM?: { __typename?: 'CAPM', beta?: number | null, Rf?: number | null, Rm?: number | null, result?: number | null } | null, WACC?: { __typename?: 'WACC', Rd?: number | null, Re?: number | null, Wd?: number | null, We?: number | null, result?: number | null, taxRate?: number | null, CAPM?: { __typename?: 'CAPM', beta?: number | null, Rf?: number | null, Rm?: number | null, result?: number | null } | null } | null };

export type QueryEtfDetailsQueryVariables = Exact<{
  symbol: Scalars['String'];
}>;


export type QueryEtfDetailsQuery = { __typename?: 'Query', queryEtfDetails?: { __typename?: 'EtfDetails', id: string, summary: { __typename?: 'Summary', avgVolume: number, ceo?: string | null, companyName: string, currency: string, dividendDate?: string | null, ePSTTM?: number | null, earningsDate?: string | null, exDividendDate?: string | null, exchangeName?: string | null, fiveTwoWeekRange?: string | null, forwardDividendRate?: number | null, forwardDividendYield?: number | null, forwardEPS?: number | null, forwardPE?: number | null, fullTimeEmployees?: string | null, id: string, symbolType?: SymbolType | null, industry?: string | null, ipoDate?: string | null, beta?: number | null, countryFullName?: string | null, lastSplitDate?: string | null, lastSplitFactor?: string | null, logo_url?: string | null, longBusinessSummary?: string | null, marketCap?: number | null, marketPrice: number, oneyTargetEst?: number | null, pERatioTTM?: number | null, previousClose: number, recommendationKey?: string | null, recommendationMean?: number | null, sandPFiveTwoWeekChange?: number | null, sector?: string | null, sharesOutstanding?: number | null, shortRatio?: number | null, symbol: string, targetEstOneyPercent?: number | null, volume: number, website?: string | null, weekRangeFiveTwoMax: number, weekRangeFiveTwoMin: number, yearToDatePrice: number, yearToDatePriceReturn?: number | null, isActivelyTrading?: boolean | null, residance?: { __typename?: 'SummaryResidance', city?: string | null, state?: string | null, country?: string | null, addressOne?: string | null, zip?: string | null } | null }, calculations?: { __typename?: 'STStockDetailsCalculations', symbol?: string | null, date?: string | null, alpha?: number | null, beta?: number | null, sharpRatio?: number | null, volatility?: { __typename?: 'STStockRiskCalculationsVolatility', benchmarkYearlyReturnPrct?: number | null, meanPrice?: number | null, stdDailyPrct?: number | null, stdDailyPrice?: number | null, stdYearlyPrct?: number | null, stdYearlyPrice?: number | null, symbolYearlyPriceReturnPrct?: number | null, volatilityPrct?: number | null, date?: string | null } | null, CAPM?: { __typename?: 'CAPM', beta?: number | null, Rf?: number | null, Rm?: number | null, result?: number | null } | null, WACC?: { __typename?: 'WACC', Rd?: number | null, Re?: number | null, Wd?: number | null, We?: number | null, result?: number | null, taxRate?: number | null, CAPM?: { __typename?: 'CAPM', beta?: number | null, Rf?: number | null, Rm?: number | null, result?: number | null } | null } | null } | null } | null };

export type QueryStockDetailsQueryVariables = Exact<{
  symbol: Scalars['String'];
  reload?: InputMaybe<Scalars['Boolean']>;
}>;


export type QueryStockDetailsQuery = { __typename?: 'Query', queryStockDetails?: { __typename?: 'StockDetails', id: string, recommendation: Array<{ __typename?: 'Recommendations', buy?: number | null, hold?: number | null, period?: string | null, sell?: number | null, strongBuy?: number | null, strongSell?: number | null, symbol?: string | null }>, companyData?: { __typename?: 'CompanyData', defaultKeyStatistics?: { __typename?: 'DefaultKeyStatistics', bookValue?: number | null, dateShortInterest?: number | null, earningsQuarterlyGrowth?: number | null, enterpriseToEbitda?: number | null, enterpriseToRevenue?: number | null, enterpriseValue?: number | null, fiveYearAverageReturn?: number | null, floatShares?: number | null, forwardEps?: number | null, forwardPE?: number | null, heldPercentInsiders?: number | null, heldPercentInstitutions?: number | null, lastFiscalYearEnd?: number | null, lastSplitDate?: number | null, lastSplitFactor?: string | null, mostRecentQuarter?: number | null, netIncomeToCommon?: number | null, nextFiscalYearEnd?: number | null, pegRatio?: number | null, priceHint?: number | null, priceToBook?: number | null, profitMargins?: number | null, sharesOutstanding: number, sharesPercentSharesOut?: number | null, sharesShort?: number | null, sharesShortPreviousMonthDate?: number | null, sharesShortPriorMonth?: number | null, shortPercentOfFloat?: number | null, shortRatio?: number | null, trailingEps?: number | null } | null, earnings?: { __typename?: 'Earnings', financialCurrency: string, earningsChart: { __typename?: 'EarningsChart', currentQuarterEstimate?: number | null, currentQuarterEstimateDate?: string | null, currentQuarterEstimateYear?: number | null, earningsDate: Array<number>, quarterly: Array<{ __typename?: 'EarningsChartData', actual?: number | null, date: string, estimate: number }> }, financialsChart: { __typename?: 'FinancialsChart', quarterly?: { __typename?: 'FinancialsChartData', categories: Array<string>, series: Array<{ __typename?: 'Series', data: Array<number | null>, name?: string | null }> } | null, yearly?: { __typename?: 'FinancialsChartData', categories: Array<string>, series: Array<{ __typename?: 'Series', data: Array<number | null>, name?: string | null }> } | null } } | null, financialData?: { __typename?: 'FinancialData', currentPrice?: number | null, currentRatio?: number | null, debtToEquity?: number | null, earningsGrowth?: number | null, ebitda?: number | null, ebitdaMargins?: number | null, financialCurrency?: string | null, freeCashflow?: number | null, grossMargins?: number | null, grossProfits?: number | null, numberOfAnalystOpinions?: number | null, operatingCashflow?: number | null, operatingMargins?: number | null, profitMargins?: number | null, quickRatio?: number | null, recommendationKey?: string | null, recommendationMean?: number | null, returnOnAssets?: number | null, returnOnEquity?: number | null, revenueGrowth?: number | null, revenuePerShare?: number | null, targetHighPrice?: number | null, targetLowPrice?: number | null, targetMeanPrice?: number | null, targetMedianPrice?: number | null, totalCash?: number | null, totalCashPerShare?: number | null, totalDebt?: number | null, totalRevenue?: number | null } | null, pageViews?: { __typename?: 'PageViews', longTermTrend: string, midTermTrend: string, shortTermTrend: string } | null, upgradeDowngradeHistory: Array<{ __typename?: 'UpgradeDowngradeHistory', action: string, epochGradeDate: number, firm: string, fromGrade?: string | null, toGrade?: string | null }>, esgScores?: { __typename?: 'EsgScores', totalEsg?: number | null, environmentScore?: number | null, governanceScore?: number | null, highestControversy?: number | null, esgPerformance?: string | null, socialScore?: number | null, peerCount?: number | null, percentile?: number | null, peerGroup?: string | null, relatedControversy?: Array<string | null> | null, peerEnvironmentPerformance?: { __typename?: 'Calculation', avg?: number | null, max?: number | null, min?: number | null } | null, peerEsgScorePerformance?: { __typename?: 'Calculation', avg?: number | null, max?: number | null, min?: number | null } | null, peerGovernancePerformance?: { __typename?: 'Calculation', avg?: number | null, max?: number | null, min?: number | null } | null, peerHighestControversyPerformance?: { __typename?: 'Calculation', avg?: number | null, max?: number | null, min?: number | null } | null, peerSocialPerformance?: { __typename?: 'Calculation', avg?: number | null, max?: number | null, min?: number | null } | null } | null } | null, summary: { __typename?: 'Summary', avgVolume: number, ceo?: string | null, companyName: string, currency: string, dividendDate?: string | null, ePSTTM?: number | null, earningsDate?: string | null, exDividendDate?: string | null, exchangeName?: string | null, fiveTwoWeekRange?: string | null, forwardDividendRate?: number | null, forwardDividendYield?: number | null, forwardEPS?: number | null, forwardPE?: number | null, fullTimeEmployees?: string | null, id: string, symbolType?: SymbolType | null, industry?: string | null, ipoDate?: string | null, beta?: number | null, countryFullName?: string | null, lastSplitDate?: string | null, lastSplitFactor?: string | null, logo_url?: string | null, longBusinessSummary?: string | null, marketCap?: number | null, marketPrice: number, oneyTargetEst?: number | null, pERatioTTM?: number | null, previousClose: number, recommendationKey?: string | null, recommendationMean?: number | null, sandPFiveTwoWeekChange?: number | null, sector?: string | null, sharesOutstanding?: number | null, shortRatio?: number | null, symbol: string, targetEstOneyPercent?: number | null, volume: number, website?: string | null, weekRangeFiveTwoMax: number, weekRangeFiveTwoMin: number, yearToDatePrice: number, yearToDatePriceReturn?: number | null, isActivelyTrading?: boolean | null, residance?: { __typename?: 'SummaryResidance', city?: string | null, state?: string | null, country?: string | null, addressOne?: string | null, zip?: string | null } | null }, metric?: { __typename?: 'Metric', fiveDayPriceReturnDaily?: number | null, fiveTwoWeekHigh?: number | null, fiveTwoWeekHighDate?: string | null, fiveTwoWeekLow?: number | null, fiveTwoWeekLowDate?: string | null, fiveTwoWeekPriceReturnDaily?: number | null, oneDayAverageTradingVolume?: number | null, oneThreeWeekPriceReturnDaily?: number | null, threeMonthAverageTradingVolume?: number | null, twoSixWeekPriceReturnDaily?: number | null, assetTurnoverAnnual?: number | null, assetTurnoverTTM?: number | null, beta?: number | null, bookValuePerShareAnnual?: number | null, bookValuePerShareQuarterly?: number | null, bookValueShareGrowthFiveY?: number | null, capitalSpendingGrowthFiveY?: number | null, cashFlowPerShareAnnual?: number | null, cashFlowPerShareTTM?: number | null, cashPerSharePerShareAnnual?: number | null, cashPerSharePerShareQuarterly?: number | null, currentEvfreeCashFlowAnnual?: number | null, currentEvfreeCashFlowTTM?: number | null, currentRatioAnnual?: number | null, currentRatioQuarterly?: number | null, ebitdPerShareTTM?: number | null, ebitdaCagrFiveY?: number | null, ebitdaInterimCagrFiveY?: number | null, epsBasicExclExtraItemsAnnual?: number | null, epsBasicExclExtraItemsTTM?: number | null, epsExclExtraItemsAnnual?: number | null, epsExclExtraItemsTTM?: number | null, epsGrowthFiveY?: number | null, epsGrowthQuarterlyYoy?: number | null, epsGrowthTTMYoy?: number | null, epsGrowthThreeY?: number | null, epsInclExtraItemsAnnual?: number | null, epsInclExtraItemsTTM?: number | null, epsNormalizedAnnual?: number | null, focfCagrFiveY?: number | null, freeCashFlowAnnual?: number | null, freeCashFlowPerShareTTM?: number | null, freeCashFlowTTM?: number | null, freeOperatingCashFlowrevenueFiveY?: number | null, freeOperatingCashFlowrevenueTTM?: number | null, grossMarginAnnual?: number | null, grossMarginFiveY?: number | null, grossMarginTTM?: number | null, inventoryTurnoverAnnual?: number | null, inventoryTurnoverTTM?: number | null, longTermDebtequityAnnual?: number | null, longTermDebtequityQuarterly?: number | null, marketCapitalization?: number | null, monthToDatePriceReturnDaily?: number | null, netDebtAnnual?: number | null, netDebtInterim?: number | null, netIncomeEmployeeAnnual?: number | null, netIncomeEmployeeTTM?: number | null, netInterestCoverageAnnual?: number | null, netInterestCoverageTTM?: number | null, netMarginGrowthFiveY?: number | null, netProfitMarginAnnual?: number | null, netProfitMarginFiveY?: number | null, netProfitMarginTTM?: number | null, operatingMarginAnnual?: number | null, operatingMarginFiveY?: number | null, operatingMarginTTM?: number | null, payoutRatioAnnual?: number | null, payoutRatioTTM?: number | null, pbAnnual?: number | null, pbQuarterly?: number | null, pcfShareTTM?: number | null, peBasicExclExtraTTM?: number | null, peExclExtraAnnual?: number | null, peExclExtraHighTTM?: number | null, peExclExtraTTM?: number | null, peExclLowTTM?: number | null, peInclExtraTTM?: number | null, peNormalizedAnnual?: number | null, pfcfShareAnnual?: number | null, pfcfShareTTM?: number | null, pretaxMarginAnnual?: number | null, pretaxMarginFiveY?: number | null, pretaxMarginTTM?: number | null, priceRelativeToSPFiveFiveTwoWeek?: number | null, priceRelativeToSPFiveFourWeek?: number | null, priceRelativeToSPFiveOneThreeWeek?: number | null, priceRelativeToSPFiveTwoSixWeek?: number | null, priceRelativeToSPFiveYtd?: number | null, psAnnual?: number | null, psTTM?: number | null, ptbvAnnual?: number | null, ptbvQuarterly?: number | null, quickRatioAnnual?: number | null, quickRatioQuarterly?: number | null, receivablesTurnoverAnnual?: number | null, receivablesTurnoverTTM?: number | null, revenueEmployeeAnnual?: number | null, revenueEmployeeTTM?: number | null, revenueGrowthFiveY?: number | null, revenueGrowthQuarterlyYoy?: number | null, revenueGrowthTTMYoy?: number | null, revenueGrowthThreeY?: number | null, revenuePerShareAnnual?: number | null, revenuePerShareTTM?: number | null, revenueShareGrowthFiveY?: number | null, roaRfy?: number | null, roaaFiveY?: number | null, roaeFiveY?: number | null, roaeTTM?: number | null, roeRfy?: number | null, roeTTM?: number | null, roiAnnual?: number | null, roiFiveY?: number | null, roiTTM?: number | null, tangibleBookValuePerShareAnnual?: number | null, tangibleBookValuePerShareQuarterly?: number | null, tbvCagrFiveY?: number | null, totalDebtCagrFiveY?: number | null, totalDebttotalEquityAnnual?: number | null, totalDebttotalEquityQuarterly?: number | null, yearToDatePriceReturnDaily?: number | null } | null, dividends?: { __typename?: 'Dividens', currentDividendYieldTTM?: number | null, dividendGrowthRateFiveY?: number | null, dividendPerShareAnnual?: number | null, dividendPerShareFiveY?: number | null, dividendYieldFiveY?: number | null, dividendYieldIndicatedAnnual?: number | null, dividendPayoutRatioTTM?: number | null, dividendsPerShareTTM?: number | null, exDividendDate?: string | null, trailingAnnualDividendRate?: string | null, trailingAnnualDividendYield?: string | null, forwardDividendYield?: string | null } | null, historicalMetrics?: { __typename?: 'HistoricalMetrics', cashRatio?: { __typename?: 'HistoricalMetricsData', name?: string | null, dates: Array<string>, data: Array<number> } | null, currentRatio?: { __typename?: 'HistoricalMetricsData', name?: string | null, dates: Array<string>, data: Array<number> } | null, ebitPerShare?: { __typename?: 'HistoricalMetricsData', name?: string | null, dates: Array<string>, data: Array<number> } | null, eps?: { __typename?: 'HistoricalMetricsData', name?: string | null, dates: Array<string>, data: Array<number> } | null, grossMargin?: { __typename?: 'HistoricalMetricsData', name?: string | null, dates: Array<string>, data: Array<number> } | null, longtermDebtTotalAsset?: { __typename?: 'HistoricalMetricsData', name?: string | null, dates: Array<string>, data: Array<number> } | null, longtermDebtTotalCapital?: { __typename?: 'HistoricalMetricsData', name?: string | null, dates: Array<string>, data: Array<number> } | null, longtermDebtTotalEquity?: { __typename?: 'HistoricalMetricsData', name?: string | null, dates: Array<string>, data: Array<number> } | null, netDebtToTotalCapital?: { __typename?: 'HistoricalMetricsData', name?: string | null, dates: Array<string>, data: Array<number> } | null, netDebtToTotalEquity?: { __typename?: 'HistoricalMetricsData', name?: string | null, dates: Array<string>, data: Array<number> } | null, netMargin?: { __typename?: 'HistoricalMetricsData', name?: string | null, dates: Array<string>, data: Array<number> } | null, operatingMargin?: { __typename?: 'HistoricalMetricsData', name?: string | null, dates: Array<string>, data: Array<number> } | null, pretaxMargin?: { __typename?: 'HistoricalMetricsData', name?: string | null, dates: Array<string>, data: Array<number> } | null, salesPerShare?: { __typename?: 'HistoricalMetricsData', name?: string | null, dates: Array<string>, data: Array<number> } | null, sgaToSale?: { __typename?: 'HistoricalMetricsData', name?: string | null, dates: Array<string>, data: Array<number> } | null, totalDebtToEquity?: { __typename?: 'HistoricalMetricsData', name?: string | null, dates: Array<string>, data: Array<number> } | null, totalDebtToTotalAsset?: { __typename?: 'HistoricalMetricsData', name?: string | null, dates: Array<string>, data: Array<number> } | null, totalDebtToTotalCapital?: { __typename?: 'HistoricalMetricsData', name?: string | null, dates: Array<string>, data: Array<number> } | null, totalRatio?: { __typename?: 'HistoricalMetricsData', name?: string | null, dates: Array<string>, data: Array<number> } | null } | null, calculations?: { __typename?: 'STStockDetailsCalculations', symbol?: string | null, date?: string | null, alpha?: number | null, beta?: number | null, sharpRatio?: number | null, volatility?: { __typename?: 'STStockRiskCalculationsVolatility', benchmarkYearlyReturnPrct?: number | null, meanPrice?: number | null, stdDailyPrct?: number | null, stdDailyPrice?: number | null, stdYearlyPrct?: number | null, stdYearlyPrice?: number | null, symbolYearlyPriceReturnPrct?: number | null, volatilityPrct?: number | null, date?: string | null } | null, CAPM?: { __typename?: 'CAPM', beta?: number | null, Rf?: number | null, Rm?: number | null, result?: number | null } | null, WACC?: { __typename?: 'WACC', Rd?: number | null, Re?: number | null, Wd?: number | null, We?: number | null, result?: number | null, taxRate?: number | null, CAPM?: { __typename?: 'CAPM', beta?: number | null, Rf?: number | null, Rm?: number | null, result?: number | null } | null } | null } | null, socialSentiment?: { __typename?: 'STFMSocialSentiment', absoluteIndex?: number | null, date?: string | null, generalPerception?: number | null, redditCommentMentions?: number | null, redditCommentSentiment?: number | null, redditPostMentions?: number | null, redditPostSentiment?: number | null, relativeIndex?: number | null, sentiment?: number | null, stocktwitsPostMentions?: number | null, stocktwitsPostSentiment?: number | null, symbol?: string | null, tweetMentions?: number | null, tweetSentiment?: number | null, yahooFinanceCommentMentions?: number | null, yahooFinanceCommentSentiment?: number | null } | null, analystEstimates: Array<{ __typename?: 'STAnalystEstimates', date?: string | null, estimatedEbitAvg?: number | null, estimatedEbitHigh?: number | null, estimatedEbitLow?: number | null, estimatedEbitdaAvg?: number | null, estimatedEbitdaHigh?: number | null, estimatedEbitdaLow?: number | null, estimatedEpsAvg?: number | null, estimatedEpsHigh?: number | null, estimatedEpsLow?: number | null, estimatedNetIncomeAvg?: number | null, estimatedNetIncomeHigh?: number | null, estimatedNetIncomeLow?: number | null, estimatedRevenueAvg?: number | null, estimatedRevenueHigh?: number | null, estimatedRevenueLow?: number | null, estimatedSgaExpenseAvg?: number | null, estimatedSgaExpenseHigh?: number | null, estimatedSgaExpenseLow?: number | null, numberAnalystEstimatedRevenue?: number | null, numberAnalystsEstimatedEps?: number | null, symbol?: string | null }>, calculatedPredictions: { __typename?: 'STStockDetailsCalculatedPredictions', DCF_V1?: { __typename?: 'STDiscountedCashFlowFormula', estimatedCompanyTodayValue: number, estimatedDiscountedFactors: Array<number>, estimatedDiscountedTerminalValue: number, estimatedFreeCashFlowRate: number, estimatedFreeCashFlowRates: Array<number>, estimatedFreeCashFlows: Array<number>, estimatedIntrinsicValue: number, estimatedNetIncomeMargin: number, estimatedNetIncomes: Array<number>, estimatedPresentValueOfFutureCashFlows: Array<number | null>, estimatedRevenueGrowthRate: number, estimatedRevenues: Array<number>, estimatedTerminalValue: number, years: Array<string | null>, historical: { __typename?: 'STDiscountedCashFlowFormulaHistorical', freeCashFlows: Array<number>, sharesOutstanding: number, netIncomeMargins: Array<number>, netIncome: Array<number>, revenue: Array<number>, revenueGrowthRates: Array<number | null>, historicalYears: Array<string> }, variable: { __typename?: 'STDiscountedCashFlowFormulaVariable', perpetualGrowthRate: number, requiredRateOfReturn: number } } | null, DDF_V1?: { __typename?: 'STDividendDiscountedFormula', dividendGrowthRate: number, dividendsPerShareTTM: number, minimumRateReturn: number, estimatedIntrinsicValue: number } | null, FCF_V1?: { __typename?: 'STFreeCashFlowFormula', avgFcf: number, estimatedIntrinsicMarketCap: number, estimatedIntrinsicValue: number, historicalYears: Array<string>, minimumRateReturn: number, operatingActivities: Array<number>, capitalExpenditures: Array<number>, freeCashFlows: Array<number>, sharesOutstanding: number } | null, INTRINSIC_V1?: { __typename?: 'STEarningsValuationFormula', dates: Array<string | null>, eps: number, estimatedDiscountedPV: Array<number | null>, estimatedEarnings: Array<number | null>, estimatedIntrinsicValue: number, variable: { __typename?: 'STEarningsValuationFormulaVariable', growthRateFrom5yTo10y: number, growthRateNext5y: number, minimumRateReturn: number, terminalMultiple: number } } | null }, allFinancialReportsYearly: Array<{ __typename?: 'FinancialReport', acceptedDate?: string | null, accessNumber?: string | null, cik?: string | null, endDate?: string | null, filedDate?: string | null, form?: string | null, quarter?: number | null, startDate?: string | null, symbol?: string | null, year?: number | null, report?: { __typename?: 'FinancialReportStatement', bs: Array<{ __typename?: 'FinancialReportStatementData', concept?: string | null, label?: string | null, unit?: string | null, value?: number | null } | null>, cf: Array<{ __typename?: 'FinancialReportStatementData', concept?: string | null, label?: string | null, unit?: string | null, value?: number | null } | null>, ic: Array<{ __typename?: 'FinancialReportStatementData', concept?: string | null, label?: string | null, unit?: string | null, value?: number | null } | null> } | null }>, allFinancialReportsQuarterly: Array<{ __typename?: 'FinancialReport', acceptedDate?: string | null, accessNumber?: string | null, cik?: string | null, endDate?: string | null, filedDate?: string | null, form?: string | null, quarter?: number | null, startDate?: string | null, symbol?: string | null, year?: number | null, report?: { __typename?: 'FinancialReportStatement', bs: Array<{ __typename?: 'FinancialReportStatementData', concept?: string | null, label?: string | null, unit?: string | null, value?: number | null } | null>, cf: Array<{ __typename?: 'FinancialReportStatementData', concept?: string | null, label?: string | null, unit?: string | null, value?: number | null } | null>, ic: Array<{ __typename?: 'FinancialReportStatementData', concept?: string | null, label?: string | null, unit?: string | null, value?: number | null } | null> } | null }>, institutionalHolders: Array<{ __typename?: 'STFMHolder', change?: number | null, dateReported?: string | null, holder?: string | null, shares?: number | null }>, mutualFundHolders: Array<{ __typename?: 'STFMHolderWithWeight', change?: number | null, dateReported?: string | null, holder?: string | null, shares?: number | null, weightPercent?: number | null }>, companyOutlook: { __typename?: 'STFMCompanyOutlook', financialsAnnual: { __typename?: 'STFMFinancials', balance: Array<{ __typename?: 'STFMBalanceSheet', acceptedDate: string, accountPayables?: number | null, accumulatedOtherComprehensiveIncomeLoss?: number | null, capitalLeaseObligations?: number | null, cashAndCashEquivalents?: number | null, cashAndShortTermInvestments?: number | null, commonStock?: number | null, date?: string | null, deferredRevenue?: number | null, deferredRevenueNonCurrent?: number | null, deferredTaxLiabilitiesNonCurrent?: number | null, fillingDate?: string | null, finalLink?: string | null, goodwill?: number | null, goodwillAndIntangibleAssets?: number | null, intangibleAssets?: number | null, inventory?: number | null, link?: string | null, longTermDebt?: number | null, longTermInvestments?: number | null, minorityInterest?: number | null, netDebt?: number | null, netReceivables?: number | null, otherAssets?: number | null, otherCurrentAssets?: number | null, otherCurrentLiabilities?: number | null, otherLiabilities?: number | null, otherNonCurrentAssets?: number | null, otherNonCurrentLiabilities?: number | null, othertotalStockholdersEquity?: number | null, totalEquity?: number | null, totalLiabilitiesAndTotalEquity?: number | null, period: string, propertyPlantEquipmentNet?: number | null, reportedCurrency?: string | null, retainedEarnings?: number | null, shortTermDebt?: number | null, shortTermInvestments?: number | null, symbol?: string | null, taxAssets?: number | null, taxPayables?: number | null, totalAssets?: number | null, totalCurrentAssets?: number | null, totalCurrentLiabilities?: number | null, totalDebt?: number | null, totalInvestments?: number | null, totalLiabilities?: number | null, totalLiabilitiesAndStockholdersEquity?: number | null, totalNonCurrentAssets?: number | null, totalNonCurrentLiabilities?: number | null, totalStockholdersEquity?: number | null }>, cash: Array<{ __typename?: 'STFMCashFlow', acceptedDate: string, accountsPayables?: number | null, accountsReceivables?: number | null, acquisitionsNet?: number | null, capitalExpenditure?: number | null, cashAtBeginningOfPeriod?: number | null, cashAtEndOfPeriod?: number | null, changeInWorkingCapital?: number | null, commonStockIssued?: number | null, commonStockRepurchased?: number | null, date?: string | null, debtRepayment?: number | null, deferredIncomeTax?: number | null, depreciationAndAmortization?: number | null, dividendsPaid?: number | null, effectOfForexChangesOnCash?: number | null, fillingDate?: string | null, finalLink?: string | null, freeCashFlow?: number | null, inventory?: number | null, investmentsInPropertyPlantAndEquipment?: number | null, link?: string | null, netCashProvidedByOperatingActivities?: number | null, netCashUsedForInvestingActivites?: number | null, netCashUsedProvidedByFinancingActivities?: number | null, netChangeInCash?: number | null, netIncome?: number | null, operatingCashFlow?: number | null, otherFinancingActivites?: number | null, otherInvestingActivites?: number | null, otherNonCashItems?: number | null, otherWorkingCapital?: number | null, period: string, purchasesOfInvestments?: number | null, reportedCurrency?: string | null, salesMaturitiesOfInvestments?: number | null, stockBasedCompensation?: number | null, symbol?: string | null }>, income: Array<{ __typename?: 'STFMIncomeStatement', acceptedDate: string, costAndExpenses?: number | null, costOfRevenue?: number | null, date?: string | null, depreciationAndAmortization?: number | null, ebitda?: number | null, ebitdaratio?: number | null, eps?: number | null, epsdiluted?: number | null, fillingDate?: string | null, finalLink?: string | null, generalAndAdministrativeExpenses?: number | null, grossProfit?: number | null, grossProfitRatio?: number | null, incomeBeforeTax?: number | null, incomeBeforeTaxRatio?: number | null, incomeTaxExpense?: number | null, interestExpense?: number | null, interestIncome?: number | null, link?: string | null, netIncome?: number | null, netIncomeRatio?: number | null, operatingExpenses?: number | null, operatingIncome?: number | null, operatingIncomeRatio?: number | null, otherExpenses?: number | null, period: string, reportedCurrency?: string | null, researchAndDevelopmentExpenses?: number | null, revenue?: number | null, sellingAndMarketingExpenses?: number | null, sellingGeneralAndAdministrativeExpenses?: number | null, symbol?: string | null, totalOtherIncomeExpensesNet?: number | null, weightedAverageShsOut?: number | null, weightedAverageShsOutDil?: number | null }> }, financialsQuarter: { __typename?: 'STFMFinancials', balance: Array<{ __typename?: 'STFMBalanceSheet', acceptedDate: string, accountPayables?: number | null, accumulatedOtherComprehensiveIncomeLoss?: number | null, capitalLeaseObligations?: number | null, cashAndCashEquivalents?: number | null, cashAndShortTermInvestments?: number | null, commonStock?: number | null, date?: string | null, deferredRevenue?: number | null, deferredRevenueNonCurrent?: number | null, deferredTaxLiabilitiesNonCurrent?: number | null, fillingDate?: string | null, finalLink?: string | null, goodwill?: number | null, goodwillAndIntangibleAssets?: number | null, intangibleAssets?: number | null, inventory?: number | null, link?: string | null, longTermDebt?: number | null, longTermInvestments?: number | null, minorityInterest?: number | null, netDebt?: number | null, netReceivables?: number | null, otherAssets?: number | null, otherCurrentAssets?: number | null, otherCurrentLiabilities?: number | null, otherLiabilities?: number | null, otherNonCurrentAssets?: number | null, otherNonCurrentLiabilities?: number | null, othertotalStockholdersEquity?: number | null, totalEquity?: number | null, totalLiabilitiesAndTotalEquity?: number | null, period: string, propertyPlantEquipmentNet?: number | null, reportedCurrency?: string | null, retainedEarnings?: number | null, shortTermDebt?: number | null, shortTermInvestments?: number | null, symbol?: string | null, taxAssets?: number | null, taxPayables?: number | null, totalAssets?: number | null, totalCurrentAssets?: number | null, totalCurrentLiabilities?: number | null, totalDebt?: number | null, totalInvestments?: number | null, totalLiabilities?: number | null, totalLiabilitiesAndStockholdersEquity?: number | null, totalNonCurrentAssets?: number | null, totalNonCurrentLiabilities?: number | null, totalStockholdersEquity?: number | null }>, cash: Array<{ __typename?: 'STFMCashFlow', acceptedDate: string, accountsPayables?: number | null, accountsReceivables?: number | null, acquisitionsNet?: number | null, capitalExpenditure?: number | null, cashAtBeginningOfPeriod?: number | null, cashAtEndOfPeriod?: number | null, changeInWorkingCapital?: number | null, commonStockIssued?: number | null, commonStockRepurchased?: number | null, date?: string | null, debtRepayment?: number | null, deferredIncomeTax?: number | null, depreciationAndAmortization?: number | null, dividendsPaid?: number | null, effectOfForexChangesOnCash?: number | null, fillingDate?: string | null, finalLink?: string | null, freeCashFlow?: number | null, inventory?: number | null, investmentsInPropertyPlantAndEquipment?: number | null, link?: string | null, netCashProvidedByOperatingActivities?: number | null, netCashUsedForInvestingActivites?: number | null, netCashUsedProvidedByFinancingActivities?: number | null, netChangeInCash?: number | null, netIncome?: number | null, operatingCashFlow?: number | null, otherFinancingActivites?: number | null, otherInvestingActivites?: number | null, otherNonCashItems?: number | null, otherWorkingCapital?: number | null, period: string, purchasesOfInvestments?: number | null, reportedCurrency?: string | null, salesMaturitiesOfInvestments?: number | null, stockBasedCompensation?: number | null, symbol?: string | null }>, income: Array<{ __typename?: 'STFMIncomeStatement', acceptedDate: string, costAndExpenses?: number | null, costOfRevenue?: number | null, date?: string | null, depreciationAndAmortization?: number | null, ebitda?: number | null, ebitdaratio?: number | null, eps?: number | null, epsdiluted?: number | null, fillingDate?: string | null, finalLink?: string | null, generalAndAdministrativeExpenses?: number | null, grossProfit?: number | null, grossProfitRatio?: number | null, incomeBeforeTax?: number | null, incomeBeforeTaxRatio?: number | null, incomeTaxExpense?: number | null, interestExpense?: number | null, interestIncome?: number | null, link?: string | null, netIncome?: number | null, netIncomeRatio?: number | null, operatingExpenses?: number | null, operatingIncome?: number | null, operatingIncomeRatio?: number | null, otherExpenses?: number | null, period: string, reportedCurrency?: string | null, researchAndDevelopmentExpenses?: number | null, revenue?: number | null, sellingAndMarketingExpenses?: number | null, sellingGeneralAndAdministrativeExpenses?: number | null, symbol?: string | null, totalOtherIncomeExpensesNet?: number | null, weightedAverageShsOut?: number | null, weightedAverageShsOutDil?: number | null }> }, insideTrades: Array<{ __typename?: 'STFMInsideTrade', acquistionOrDisposition: string, companyCik: string, formType: string, link: string, price?: number | null, reportingCik: string, reportingName: string, securitiesOwned: number, securitiesTransacted: number, securityName: string, symbol: string, transactionDate: string, transactionType: string, typeOfOwner: string }>, keyExecutives: Array<{ __typename?: 'STFMKeyExecutive', currencyPay?: string | null, gender?: string | null, name?: string | null, pay?: number | null, title?: string | null }>, rating?: { __typename?: 'STFMRating', date: string, rating: string, ratingDetailsDCFRecommendation: string, ratingDetailsDCFScore: number, ratingDetailsDERecommendation: string, ratingDetailsDEScore: number, ratingDetailsPBRecommendation: string, ratingDetailsPBScore: number, ratingDetailsPERecommendation: string, ratingDetailsPEScore: number, ratingDetailsROARecommendation: string, ratingDetailsROAScore: number, ratingDetailsROERecommendation: string, ratingDetailsROEScore: number, ratingRecommendation: string, ratingScore: number, symbol: string } | null, ratios?: { __typename?: 'STFMRatios', assetTurnoverTTM?: number | null, capitalExpenditureCoverageRatioTTM?: number | null, cashConversionCycleTTM?: number | null, cashFlowCoverageRatiosTTM?: number | null, cashFlowToDebtRatioTTM?: number | null, cashPerShareTTM?: number | null, cashRatioTTM?: number | null, companyEquityMultiplierTTM?: number | null, currentRatioTTM?: number | null, daysOfInventoryOutstandingTTM?: number | null, daysOfPayablesOutstandingTTM?: number | null, daysOfSalesOutstandingTTM?: number | null, debtEquityRatioTTM?: number | null, debtRatioTTM?: number | null, dividendPaidAndCapexCoverageRatioTTM?: number | null, dividendPerShareTTM?: number | null, dividendYielPercentageTTM?: number | null, dividendYielTTM?: number | null, dividendYieldTTM?: number | null, ebitPerRevenueTTM?: number | null, ebtPerEbitTTM?: number | null, effectiveTaxRateTTM?: number | null, enterpriseValueMultipleTTM?: number | null, fixedAssetTurnoverTTM?: number | null, freeCashFlowOperatingCashFlowRatioTTM?: number | null, freeCashFlowPerShareTTM?: number | null, grossProfitMarginTTM?: number | null, interestCoverageTTM?: number | null, inventoryTurnoverTTM?: number | null, longTermDebtToCapitalizationTTM?: number | null, netIncomePerEBTTTM?: number | null, netProfitMarginTTM?: number | null, operatingCashFlowPerShareTTM?: number | null, operatingCashFlowSalesRatioTTM?: number | null, operatingCycleTTM?: number | null, operatingProfitMarginTTM?: number | null, payablesTurnoverTTM?: number | null, payoutRatioTTM?: number | null, peRatioTTM?: number | null, pegRatioTTM?: number | null, pretaxProfitMarginTTM?: number | null, priceBookValueRatioTTM?: number | null, priceCashFlowRatioTTM?: number | null, priceEarningsRatioTTM?: number | null, priceEarningsToGrowthRatioTTM?: number | null, priceFairValueTTM?: number | null, priceSalesRatioTTM?: number | null, priceToBookRatioTTM?: number | null, priceToFreeCashFlowsRatioTTM?: number | null, priceToOperatingCashFlowsRatioTTM?: number | null, priceToSalesRatioTTM?: number | null, quickRatioTTM?: number | null, receivablesTurnoverTTM?: number | null, returnOnAssetsTTM?: number | null, returnOnCapitalEmployedTTM?: number | null, returnOnEquityTTM?: number | null, shortTermCoverageRatiosTTM?: number | null, totalDebtToCapitalizationTTM?: number | null } | null, splitHistory: Array<{ __typename?: 'STFMSplitHistory', date?: string | null, denominator?: number | null, label?: string | null, numerator?: number | null, symbol?: string | null }>, stockDividend: Array<{ __typename?: 'STFMStockDividend', adjDividend?: number | null, date?: string | null, declarationDate?: string | null, dividend?: number | null, label?: string | null, paymentDate?: string | null, recordDate?: string | null, symbol?: string | null }>, stockNews: Array<{ __typename?: 'STFMStockNew', image?: string | null, publishedDate?: string | null, site?: string | null, symbol?: string | null, text?: string | null, title?: string | null, url?: string | null }> }, sectorPeers: Array<{ __typename?: 'STFMCompanyQuote', avgVolume: number, change: number, changesPercentage: number, dayHigh?: number | null, dayLow?: number | null, earningsAnnouncement?: string | null, eps?: number | null, exchange: string, marketCap?: number | null, name: string, open: number, pe?: number | null, previousClose?: number | null, price?: number | null, priceAvg200?: number | null, priceAvg50?: number | null, sharesOutstanding?: number | null, symbol: string, timestamp: number, volume: number, yearHigh: number, yearLow: number, image?: string | null }> } | null };

export type QueryStockFinancialReportsQueryVariables = Exact<{
  symbol: Scalars['String'];
}>;


export type QueryStockFinancialReportsQuery = { __typename?: 'Query', queryStockFinancialReports?: { __typename?: 'StockDetailsFinancialReports', id: string, allFinancialReportsQuarterly: Array<{ __typename?: 'FinancialReport', acceptedDate?: string | null, accessNumber?: string | null, cik?: string | null, endDate?: string | null, filedDate?: string | null, form?: string | null, quarter?: number | null, startDate?: string | null, symbol?: string | null, year?: number | null, report?: { __typename?: 'FinancialReportStatement', bs: Array<{ __typename?: 'FinancialReportStatementData', concept?: string | null, label?: string | null, unit?: string | null, value?: number | null } | null>, cf: Array<{ __typename?: 'FinancialReportStatementData', concept?: string | null, label?: string | null, unit?: string | null, value?: number | null } | null>, ic: Array<{ __typename?: 'FinancialReportStatementData', concept?: string | null, label?: string | null, unit?: string | null, value?: number | null } | null> } | null }>, allFinancialReportsYearly: Array<{ __typename?: 'FinancialReport', acceptedDate?: string | null, accessNumber?: string | null, cik?: string | null, endDate?: string | null, filedDate?: string | null, form?: string | null, quarter?: number | null, startDate?: string | null, symbol?: string | null, year?: number | null, report?: { __typename?: 'FinancialReportStatement', bs: Array<{ __typename?: 'FinancialReportStatementData', concept?: string | null, label?: string | null, unit?: string | null, value?: number | null } | null>, cf: Array<{ __typename?: 'FinancialReportStatementData', concept?: string | null, label?: string | null, unit?: string | null, value?: number | null } | null>, ic: Array<{ __typename?: 'FinancialReportStatementData', concept?: string | null, label?: string | null, unit?: string | null, value?: number | null } | null> } | null }> } | null };

export type QueryStockSummaryQueryVariables = Exact<{
  symbol: Scalars['String'];
  allowReload?: InputMaybe<Scalars['Boolean']>;
}>;


export type QueryStockSummaryQuery = { __typename?: 'Query', queryStockSummary?: { __typename?: 'Summary', avgVolume: number, ceo?: string | null, companyName: string, currency: string, dividendDate?: string | null, ePSTTM?: number | null, earningsDate?: string | null, exDividendDate?: string | null, exchangeName?: string | null, fiveTwoWeekRange?: string | null, forwardDividendRate?: number | null, forwardDividendYield?: number | null, forwardEPS?: number | null, forwardPE?: number | null, fullTimeEmployees?: string | null, id: string, symbolType?: SymbolType | null, industry?: string | null, ipoDate?: string | null, beta?: number | null, countryFullName?: string | null, lastSplitDate?: string | null, lastSplitFactor?: string | null, logo_url?: string | null, longBusinessSummary?: string | null, marketCap?: number | null, marketPrice: number, oneyTargetEst?: number | null, pERatioTTM?: number | null, previousClose: number, recommendationKey?: string | null, recommendationMean?: number | null, sandPFiveTwoWeekChange?: number | null, sector?: string | null, sharesOutstanding?: number | null, shortRatio?: number | null, symbol: string, targetEstOneyPercent?: number | null, volume: number, website?: string | null, weekRangeFiveTwoMax: number, weekRangeFiveTwoMin: number, yearToDatePrice: number, yearToDatePriceReturn?: number | null, isActivelyTrading?: boolean | null, residance?: { __typename?: 'SummaryResidance', city?: string | null, state?: string | null, country?: string | null, addressOne?: string | null, zip?: string | null } | null } | null };

export type QueryStockQuotesByPrefixQueryVariables = Exact<{
  symbolPrefix: Scalars['String'];
}>;


export type QueryStockQuotesByPrefixQuery = { __typename?: 'Query', queryStockQuotesByPrefix: Array<{ __typename?: 'STFMCompanyQuote', avgVolume: number, change: number, changesPercentage: number, dayHigh?: number | null, dayLow?: number | null, earningsAnnouncement?: string | null, eps?: number | null, exchange: string, marketCap?: number | null, name: string, open: number, pe?: number | null, previousClose?: number | null, price?: number | null, priceAvg200?: number | null, priceAvg50?: number | null, sharesOutstanding?: number | null, symbol: string, timestamp: number, volume: number, yearHigh: number, yearLow: number, image?: string | null } | null> };

export type QueryStockDetailsFinancialRatiosQueryVariables = Exact<{
  symbol: Scalars['String'];
  period: Scalars['String'];
  allData: Scalars['Boolean'];
}>;


export type QueryStockDetailsFinancialRatiosQuery = { __typename?: 'Query', queryStockDetailsFinancialRatios?: { __typename?: 'STDetailsFinancialRatios', symbol?: string | null, date: Array<string>, currentRatio: Array<number | null>, quickRatio: Array<number | null>, cashRatio: Array<number | null>, daysOfSalesOutstanding: Array<number | null>, daysOfInventoryOutstanding: Array<number | null>, operatingCycle: Array<number | null>, daysOfPayablesOutstanding: Array<number | null>, cashConversionCycle: Array<number | null>, grossProfitMargin: Array<number | null>, operatingProfitMargin: Array<number | null>, pretaxProfitMargin: Array<number | null>, netProfitMargin: Array<number | null>, effectiveTaxRate: Array<number | null>, returnOnAssets: Array<number | null>, returnOnEquity: Array<number | null>, returnOnCapitalEmployed: Array<number | null>, netIncomePerEBT: Array<number | null>, ebtPerEbit: Array<number | null>, ebitPerRevenue: Array<number | null>, debtRatio: Array<number | null>, debtEquityRatio: Array<number | null>, longTermDebtToCapitalization: Array<number | null>, totalDebtToCapitalization: Array<number | null>, interestCoverage: Array<number | null>, cashFlowToDebtRatio: Array<number | null>, companyEquityMultiplier: Array<number | null>, receivablesTurnover: Array<number | null>, payablesTurnover: Array<number | null>, inventoryTurnover: Array<number | null>, fixedAssetTurnover: Array<number | null>, assetTurnover: Array<number | null>, operatingCashFlowPerShare: Array<number | null>, freeCashFlowPerShare: Array<number | null>, cashPerShare: Array<number | null>, payoutRatio: Array<number | null>, operatingCashFlowSalesRatio: Array<number | null>, freeCashFlowOperatingCashFlowRatio: Array<number | null>, cashFlowCoverageRatios: Array<number | null>, shortTermCoverageRatios: Array<number | null>, capitalExpenditureCoverageRatio: Array<number | null>, dividendPaidAndCapexCoverageRatio: Array<number | null>, dividendPayoutRatio: Array<number | null>, priceBookValueRatio: Array<number | null>, priceToBookRatio: Array<number | null>, priceToSalesRatio: Array<number | null>, priceEarningsRatio: Array<number | null>, priceToFreeCashFlowsRatio: Array<number | null>, priceToOperatingCashFlowsRatio: Array<number | null>, priceCashFlowRatio: Array<number | null>, priceEarningsToGrowthRatio: Array<number | null>, priceSalesRatio: Array<number | null>, dividendYield: Array<number | null>, enterpriseValueMultiple: Array<number | null>, priceFairValue: Array<number | null> } | null };

export type QueryStockDetailsFinancialGrowthQueryVariables = Exact<{
  symbol: Scalars['String'];
  period: Scalars['String'];
  allData: Scalars['Boolean'];
}>;


export type QueryStockDetailsFinancialGrowthQuery = { __typename?: 'Query', queryStockDetailsFinancialGrowth?: { __typename?: 'STDetailsFinancialGrowth', symbol?: string | null, date: Array<string>, revenueGrowth: Array<number | null>, grossProfitGrowth: Array<number | null>, ebitgrowth: Array<number | null>, operatingIncomeGrowth: Array<number | null>, netIncomeGrowth: Array<number | null>, epsgrowth: Array<number | null>, epsdilutedGrowth: Array<number | null>, weightedAverageSharesGrowth: Array<number | null>, weightedAverageSharesDilutedGrowth: Array<number | null>, dividendsperShareGrowth: Array<number | null>, operatingCashFlowGrowth: Array<number | null>, freeCashFlowGrowth: Array<number | null>, tenYRevenueGrowthPerShare: Array<number | null>, fiveYRevenueGrowthPerShare: Array<number | null>, threeYRevenueGrowthPerShare: Array<number | null>, tenYOperatingCFGrowthPerShare: Array<number | null>, fiveYOperatingCFGrowthPerShare: Array<number | null>, threeYOperatingCFGrowthPerShare: Array<number | null>, tenYNetIncomeGrowthPerShare: Array<number | null>, fiveYNetIncomeGrowthPerShare: Array<number | null>, threeYNetIncomeGrowthPerShare: Array<number | null>, tenYShareholdersEquityGrowthPerShare: Array<number | null>, fiveYShareholdersEquityGrowthPerShare: Array<number | null>, threeYShareholdersEquityGrowthPerShare: Array<number | null>, tenYDividendperShareGrowthPerShare: Array<number | null>, fiveYDividendperShareGrowthPerShare: Array<number | null>, threeYDividendperShareGrowthPerShare: Array<number | null>, receivablesGrowth: Array<number | null>, inventoryGrowth: Array<number | null>, assetGrowth: Array<number | null>, bookValueperShareGrowth: Array<number | null>, debtGrowth: Array<number | null>, rdexpenseGrowth: Array<number | null>, sgaexpensesGrowth: Array<number | null> } | null };

export type QueryStockDetailsKeyMetricsQueryVariables = Exact<{
  symbol: Scalars['String'];
  period: Scalars['String'];
  allData: Scalars['Boolean'];
}>;


export type QueryStockDetailsKeyMetricsQuery = { __typename?: 'Query', queryStockDetailsKeyMetrics?: { __typename?: 'STDetailsKeyMetrics', symbol: string, date: Array<string>, revenuePerShare: Array<number | null>, netIncomePerShare: Array<number | null>, operatingCashFlowPerShare: Array<number | null>, freeCashFlowPerShare: Array<number | null>, cashPerShare: Array<number | null>, bookValuePerShare: Array<number | null>, tangibleBookValuePerShare: Array<number | null>, shareholdersEquityPerShare: Array<number | null>, interestDebtPerShare: Array<number | null>, marketCap: Array<number | null>, enterpriseValue: Array<number | null>, peRatio: Array<number | null>, priceToSalesRatio: Array<number | null>, pocfratio: Array<number | null>, pfcfRatio: Array<number | null>, pbRatio: Array<number | null>, ptbRatio: Array<number | null>, evToSales: Array<number | null>, enterpriseValueOverEBITDA: Array<number | null>, evToOperatingCashFlow: Array<number | null>, evToFreeCashFlow: Array<number | null>, earningsYield: Array<number | null>, freeCashFlowYield: Array<number | null>, debtToEquity: Array<number | null>, debtToAssets: Array<number | null>, netDebtToEBITDA: Array<number | null>, currentRatio: Array<number | null>, interestCoverage: Array<number | null>, incomeQuality: Array<number | null>, dividendYield: Array<number | null>, payoutRatio: Array<number | null>, salesGeneralAndAdministrativeToRevenue: Array<number | null>, researchAndDdevelopementToRevenue: Array<number | null>, intangiblesToTotalAssets: Array<number | null>, capexToOperatingCashFlow: Array<number | null>, capexToRevenue: Array<number | null>, capexToDepreciation: Array<number | null>, stockBasedCompensationToRevenue: Array<number | null>, grahamNumber: Array<number | null>, roic: Array<number | null>, returnOnTangibleAssets: Array<number | null>, grahamNetNet: Array<number | null>, workingCapital: Array<number | null>, tangibleAssetValue: Array<number | null>, netCurrentAssetValue: Array<number | null>, investedCapital: Array<number | null>, averageReceivables: Array<number | null>, averagePayables: Array<number | null>, averageInventory: Array<number | null>, daysSalesOutstanding: Array<number | null>, daysPayablesOutstanding: Array<number | null>, daysOfInventoryOnHand: Array<number | null>, receivablesTurnover: Array<number | null>, payablesTurnover: Array<number | null>, inventoryTurnover: Array<number | null>, roe: Array<number | null>, capexPerShare: Array<number | null> } | null };

export type SetForceReloadStockDetailsMutationVariables = Exact<{ [key: string]: never; }>;


export type SetForceReloadStockDetailsMutation = { __typename?: 'Mutation', setForceReloadStockDetails?: boolean | null };

export type StTicketCommentFragmentFragment = { __typename?: 'STTicketComment', id: string, comment: string, createdAt: string, createdBy: { __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string } };

export type StTicketFragmentFragment = { __typename?: 'STTicket', id: string, name: string, type: StTicketTypes, createdAt: string, isOpen: boolean, createdBy: { __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string }, comments: Array<{ __typename?: 'STTicketComment', id: string, comment: string, createdAt: string, createdBy: { __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string } }> };

export type CreateTicketMutationVariables = Exact<{
  ticketValuse: StTicketCreateValues;
}>;


export type CreateTicketMutation = { __typename?: 'Mutation', createTicket?: { __typename?: 'STTicket', id: string, name: string, type: StTicketTypes, createdAt: string, isOpen: boolean, createdBy: { __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string }, comments: Array<{ __typename?: 'STTicketComment', id: string, comment: string, createdAt: string, createdBy: { __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string } }> } | null };

export type CommentTicketMutationVariables = Exact<{
  ticketId: Scalars['String'];
  comment: Scalars['String'];
}>;


export type CommentTicketMutation = { __typename?: 'Mutation', commentTicket?: { __typename?: 'STTicketComment', id: string, comment: string, createdAt: string, createdBy: { __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string } } | null };

export type CommentTicketEditMutationVariables = Exact<{
  commentEditValues: StTicketCommentEditValues;
}>;


export type CommentTicketEditMutation = { __typename?: 'Mutation', commentTicketEdit?: string | null };

export type CloseTicketMutationVariables = Exact<{
  ticketId: Scalars['String'];
}>;


export type CloseTicketMutation = { __typename?: 'Mutation', closeTicket?: boolean | null };

export type DeleteTicketMutationVariables = Exact<{
  ticketId: Scalars['String'];
}>;


export type DeleteTicketMutation = { __typename?: 'Mutation', deleteTicket?: boolean | null };

export type StHoldingInfoFragmentFragment = { __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number };

export type StHoldingFragmentFragment = { __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number, summary: { __typename?: 'Summary', avgVolume: number, ceo?: string | null, companyName: string, currency: string, dividendDate?: string | null, ePSTTM?: number | null, earningsDate?: string | null, exDividendDate?: string | null, exchangeName?: string | null, fiveTwoWeekRange?: string | null, forwardDividendRate?: number | null, forwardDividendYield?: number | null, forwardEPS?: number | null, forwardPE?: number | null, fullTimeEmployees?: string | null, id: string, symbolType?: SymbolType | null, industry?: string | null, ipoDate?: string | null, beta?: number | null, countryFullName?: string | null, lastSplitDate?: string | null, lastSplitFactor?: string | null, logo_url?: string | null, longBusinessSummary?: string | null, marketCap?: number | null, marketPrice: number, oneyTargetEst?: number | null, pERatioTTM?: number | null, previousClose: number, recommendationKey?: string | null, recommendationMean?: number | null, sandPFiveTwoWeekChange?: number | null, sector?: string | null, sharesOutstanding?: number | null, shortRatio?: number | null, symbol: string, targetEstOneyPercent?: number | null, volume: number, website?: string | null, weekRangeFiveTwoMax: number, weekRangeFiveTwoMin: number, yearToDatePrice: number, yearToDatePriceReturn?: number | null, isActivelyTrading?: boolean | null, residance?: { __typename?: 'SummaryResidance', city?: string | null, state?: string | null, country?: string | null, addressOne?: string | null, zip?: string | null } | null } };

export type StTransactionFragmentFragment = { __typename?: 'STTransaction', transactionId?: string | null, symbol: string, price: number, return?: number | null, returnChange?: number | null, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number };

export type StTransactionFragmentWithUserFragment = { __typename?: 'STTransaction', transactionId?: string | null, symbol: string, price: number, return?: number | null, returnChange?: number | null, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number, user?: { __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string } | null };

export type StTransactionSnapshotFragmentFragment = { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string };

export type PerformTransactionMutationVariables = Exact<{
  transactionInput: StTransactionInput;
}>;


export type PerformTransactionMutation = { __typename?: 'Mutation', performTransaction?: { __typename?: 'PerformedTransaction', holding?: { __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number, summary: { __typename?: 'Summary', avgVolume: number, ceo?: string | null, companyName: string, currency: string, dividendDate?: string | null, ePSTTM?: number | null, earningsDate?: string | null, exDividendDate?: string | null, exchangeName?: string | null, fiveTwoWeekRange?: string | null, forwardDividendRate?: number | null, forwardDividendYield?: number | null, forwardEPS?: number | null, forwardPE?: number | null, fullTimeEmployees?: string | null, id: string, symbolType?: SymbolType | null, industry?: string | null, ipoDate?: string | null, beta?: number | null, countryFullName?: string | null, lastSplitDate?: string | null, lastSplitFactor?: string | null, logo_url?: string | null, longBusinessSummary?: string | null, marketCap?: number | null, marketPrice: number, oneyTargetEst?: number | null, pERatioTTM?: number | null, previousClose: number, recommendationKey?: string | null, recommendationMean?: number | null, sandPFiveTwoWeekChange?: number | null, sector?: string | null, sharesOutstanding?: number | null, shortRatio?: number | null, symbol: string, targetEstOneyPercent?: number | null, volume: number, website?: string | null, weekRangeFiveTwoMax: number, weekRangeFiveTwoMin: number, yearToDatePrice: number, yearToDatePriceReturn?: number | null, isActivelyTrading?: boolean | null, residance?: { __typename?: 'SummaryResidance', city?: string | null, state?: string | null, country?: string | null, addressOne?: string | null, zip?: string | null } | null } } | null, transaction: { __typename?: 'STTransaction', transactionId?: string | null, symbol: string, price: number, return?: number | null, returnChange?: number | null, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number } } | null };

export type StUserIdentificationFragmentFragment = { __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string };

export type StUserIdentificationPortfolioFragmentFragment = { __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } };

export type StUserIdentificationBaseFragmentFragment = { __typename?: 'STUserIdentificationBase', nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string };

export type StUserIdentificationDataFragment = { __typename?: 'STUserPublicData', id: string, nickName: string, locale?: string | null, photoURL?: string | null, accountCreatedDate: string, lastSignInDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } };

export type StGroupMemberOverviewFragment = { __typename?: 'STUserPublicData', nickName: string, locale?: string | null, photoURL?: string | null, accountCreatedDate: string, lastSignInDate: string, activity?: User_Activity | null, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null }, transactionsSnippets: Array<{ __typename?: 'STTransaction', transactionId?: string | null, symbol: string, price: number, return?: number | null, returnChange?: number | null, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number }>, topTransactions: Array<{ __typename?: 'STTransaction', transactionId?: string | null, symbol: string, price: number, return?: number | null, returnChange?: number | null, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number }>, holdings: Array<{ __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number, summary: { __typename?: 'Summary', avgVolume: number, ceo?: string | null, companyName: string, currency: string, dividendDate?: string | null, ePSTTM?: number | null, earningsDate?: string | null, exDividendDate?: string | null, exchangeName?: string | null, fiveTwoWeekRange?: string | null, forwardDividendRate?: number | null, forwardDividendYield?: number | null, forwardEPS?: number | null, forwardPE?: number | null, fullTimeEmployees?: string | null, id: string, symbolType?: SymbolType | null, industry?: string | null, ipoDate?: string | null, beta?: number | null, countryFullName?: string | null, lastSplitDate?: string | null, lastSplitFactor?: string | null, logo_url?: string | null, longBusinessSummary?: string | null, marketCap?: number | null, marketPrice: number, oneyTargetEst?: number | null, pERatioTTM?: number | null, previousClose: number, recommendationKey?: string | null, recommendationMean?: number | null, sandPFiveTwoWeekChange?: number | null, sector?: string | null, sharesOutstanding?: number | null, shortRatio?: number | null, symbol: string, targetEstOneyPercent?: number | null, volume: number, website?: string | null, weekRangeFiveTwoMax: number, weekRangeFiveTwoMin: number, yearToDatePrice: number, yearToDatePriceReturn?: number | null, isActivelyTrading?: boolean | null, residance?: { __typename?: 'SummaryResidance', city?: string | null, state?: string | null, country?: string | null, addressOne?: string | null, zip?: string | null } | null } }>, userHistoricalData: { __typename?: 'STUserHistoricalData', userLogs: Array<{ __typename?: 'STLog', date: string, logText: string }>, resetedAccount: Array<{ __typename?: 'STUserResetedAccount', date: string, portfolioTotal: number }>, bestAchievedRanks: Array<{ __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null }>, portfolioSnapshots: Array<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, transactionSnapshots: Array<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }> } };

export type StUserPublicDataSearchFragment = { __typename?: 'STUserPublicData', nickName: string, locale?: string | null, photoURL?: string | null, accountCreatedDate: string, lastSignInDate: string, activity?: User_Activity | null, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, portfolioRisk?: { __typename?: 'STPortfolioRiskCalculations', date?: string | null, portfolioAlpha?: number | null, portfolioAnnualVariancePrct?: number | null, portfolioAnnualVolatilityPrct?: number | null, portfolioBeta?: number | null, portfolioEstimatedReturnPrct?: number | null, portfolioEstimatedReturnValue?: number | null, portfolioSharpRatio?: number | null, portfolioVolatilityMeanPrct?: number | null } | null, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null }, transactionsSnippets: Array<{ __typename?: 'STTransaction', transactionId?: string | null, symbol: string, price: number, return?: number | null, returnChange?: number | null, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number }>, topTransactions: Array<{ __typename?: 'STTransaction', transactionId?: string | null, symbol: string, price: number, return?: number | null, returnChange?: number | null, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number }>, holdings: Array<{ __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number, summary: { __typename?: 'Summary', avgVolume: number, ceo?: string | null, companyName: string, currency: string, dividendDate?: string | null, ePSTTM?: number | null, earningsDate?: string | null, exDividendDate?: string | null, exchangeName?: string | null, fiveTwoWeekRange?: string | null, forwardDividendRate?: number | null, forwardDividendYield?: number | null, forwardEPS?: number | null, forwardPE?: number | null, fullTimeEmployees?: string | null, id: string, symbolType?: SymbolType | null, industry?: string | null, ipoDate?: string | null, beta?: number | null, countryFullName?: string | null, lastSplitDate?: string | null, lastSplitFactor?: string | null, logo_url?: string | null, longBusinessSummary?: string | null, marketCap?: number | null, marketPrice: number, oneyTargetEst?: number | null, pERatioTTM?: number | null, previousClose: number, recommendationKey?: string | null, recommendationMean?: number | null, sandPFiveTwoWeekChange?: number | null, sector?: string | null, sharesOutstanding?: number | null, shortRatio?: number | null, symbol: string, targetEstOneyPercent?: number | null, volume: number, website?: string | null, weekRangeFiveTwoMax: number, weekRangeFiveTwoMin: number, yearToDatePrice: number, yearToDatePriceReturn?: number | null, isActivelyTrading?: boolean | null, residance?: { __typename?: 'SummaryResidance', city?: string | null, state?: string | null, country?: string | null, addressOne?: string | null, zip?: string | null } | null } }>, userHistoricalData: { __typename?: 'STUserHistoricalData', userLogs: Array<{ __typename?: 'STLog', date: string, logText: string }>, resetedAccount: Array<{ __typename?: 'STUserResetedAccount', date: string, portfolioTotal: number }>, bestAchievedRanks: Array<{ __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null }>, portfolioSnapshots: Array<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, transactionSnapshots: Array<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }> }, groups: { __typename?: 'STUserGroups', groupOwner: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null, imagePath?: string | null, imageUrl?: string | null, startDate: string, endDate?: string | null, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfMembersActive?: number | null, createdDate: string, watchedByUsers: number, lastUpdateDate: string, lastEditedDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null } }>, groupMember: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null, imagePath?: string | null, imageUrl?: string | null, startDate: string, endDate?: string | null, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfMembersActive?: number | null, createdDate: string, watchedByUsers: number, lastUpdateDate: string, lastEditedDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null } }> } };

export type StUserPrivateDataFragment = { __typename?: 'STUserPrivateData', tradingEnabledDate?: string | null, finnhubKey?: string | null, roles: Array<string>, email: string, displayName: string, providerId?: string | null, status: User_Status, nicknameLastChange?: string | null };

export type StUserGroupsFragment = { __typename?: 'STUserGroups', groupInvitationSent: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null, imagePath?: string | null, imageUrl?: string | null, startDate: string, endDate?: string | null, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfMembersActive?: number | null, createdDate: string, watchedByUsers: number, lastUpdateDate: string, lastEditedDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null } }>, groupInvitationReceived: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null, imagePath?: string | null, imageUrl?: string | null, startDate: string, endDate?: string | null, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfMembersActive?: number | null, createdDate: string, watchedByUsers: number, lastUpdateDate: string, lastEditedDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null } }>, groupOwner: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null, imagePath?: string | null, imageUrl?: string | null, startDate: string, endDate?: string | null, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfMembersActive?: number | null, createdDate: string, watchedByUsers: number, lastUpdateDate: string, lastEditedDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null } }>, groupMember: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null, imagePath?: string | null, imageUrl?: string | null, startDate: string, endDate?: string | null, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfMembersActive?: number | null, createdDate: string, watchedByUsers: number, lastUpdateDate: string, lastEditedDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null } }>, groupWatched: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null, imagePath?: string | null, imageUrl?: string | null, startDate: string, endDate?: string | null, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfMembersActive?: number | null, createdDate: string, watchedByUsers: number, lastUpdateDate: string, lastEditedDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null } }> };

export type StUserDataAdminFragment = { __typename?: 'STUserPublicData', id: string, nickName: string, locale?: string | null, photoURL?: string | null, accountCreatedDate: string, lastSignInDate: string, portfolioRisk?: { __typename?: 'STPortfolioRiskCalculations', date?: string | null, portfolioAlpha?: number | null, portfolioAnnualVariancePrct?: number | null, portfolioAnnualVolatilityPrct?: number | null, portfolioBeta?: number | null, portfolioEstimatedReturnPrct?: number | null, portfolioEstimatedReturnValue?: number | null, portfolioSharpRatio?: number | null, portfolioVolatilityMeanPrct?: number | null } | null, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null }, transactionsSnippets: Array<{ __typename?: 'STTransaction', transactionId?: string | null, symbol: string, price: number, return?: number | null, returnChange?: number | null, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number }>, topTransactions: Array<{ __typename?: 'STTransaction', transactionId?: string | null, symbol: string, price: number, return?: number | null, returnChange?: number | null, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number }>, holdings: Array<{ __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number }>, stockWatchlist: Array<{ __typename?: 'STStockWatchlist', id: string, name: string, date?: string | null, userId: string, symbols: Array<string> }>, groups: { __typename?: 'STUserGroups', groupInvitationSent: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null, imagePath?: string | null, imageUrl?: string | null, startDate: string, endDate?: string | null, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfMembersActive?: number | null, createdDate: string, watchedByUsers: number, lastUpdateDate: string, lastEditedDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null } }>, groupInvitationReceived: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null, imagePath?: string | null, imageUrl?: string | null, startDate: string, endDate?: string | null, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfMembersActive?: number | null, createdDate: string, watchedByUsers: number, lastUpdateDate: string, lastEditedDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null } }>, groupOwner: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null, imagePath?: string | null, imageUrl?: string | null, startDate: string, endDate?: string | null, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfMembersActive?: number | null, createdDate: string, watchedByUsers: number, lastUpdateDate: string, lastEditedDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null } }>, groupMember: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null, imagePath?: string | null, imageUrl?: string | null, startDate: string, endDate?: string | null, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfMembersActive?: number | null, createdDate: string, watchedByUsers: number, lastUpdateDate: string, lastEditedDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null } }>, groupWatched: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null, imagePath?: string | null, imageUrl?: string | null, startDate: string, endDate?: string | null, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfMembersActive?: number | null, createdDate: string, watchedByUsers: number, lastUpdateDate: string, lastEditedDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null } }> }, userHistoricalData: { __typename?: 'STUserHistoricalData', userLogs: Array<{ __typename?: 'STLog', date: string, logText: string }>, resetedAccount: Array<{ __typename?: 'STUserResetedAccount', date: string, portfolioTotal: number }> }, userPrivateData: { __typename?: 'STUserPrivateData', tradingEnabledDate?: string | null, finnhubKey?: string | null, roles: Array<string>, email: string, displayName: string, providerId?: string | null, status: User_Status, nicknameLastChange?: string | null }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } };

export type AuthenticateUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type AuthenticateUserQuery = { __typename?: 'Query', authenticateUser?: { __typename?: 'STUserPublicData', id: string, nickName: string, locale?: string | null, photoURL?: string | null, accountCreatedDate: string, lastSignInDate: string, activity?: User_Activity | null, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, portfolioRisk?: { __typename?: 'STPortfolioRiskCalculations', date?: string | null, portfolioAlpha?: number | null, portfolioAnnualVariancePrct?: number | null, portfolioAnnualVolatilityPrct?: number | null, portfolioBeta?: number | null, portfolioEstimatedReturnPrct?: number | null, portfolioEstimatedReturnValue?: number | null, portfolioSharpRatio?: number | null, portfolioVolatilityMeanPrct?: number | null } | null, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null }, transactionsSnippets: Array<{ __typename?: 'STTransaction', transactionId?: string | null, symbol: string, price: number, return?: number | null, returnChange?: number | null, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number }>, topTransactions: Array<{ __typename?: 'STTransaction', transactionId?: string | null, symbol: string, price: number, return?: number | null, returnChange?: number | null, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number }>, holdings: Array<{ __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number, summary: { __typename?: 'Summary', avgVolume: number, ceo?: string | null, companyName: string, currency: string, dividendDate?: string | null, ePSTTM?: number | null, earningsDate?: string | null, exDividendDate?: string | null, exchangeName?: string | null, fiveTwoWeekRange?: string | null, forwardDividendRate?: number | null, forwardDividendYield?: number | null, forwardEPS?: number | null, forwardPE?: number | null, fullTimeEmployees?: string | null, id: string, symbolType?: SymbolType | null, industry?: string | null, ipoDate?: string | null, beta?: number | null, countryFullName?: string | null, lastSplitDate?: string | null, lastSplitFactor?: string | null, logo_url?: string | null, longBusinessSummary?: string | null, marketCap?: number | null, marketPrice: number, oneyTargetEst?: number | null, pERatioTTM?: number | null, previousClose: number, recommendationKey?: string | null, recommendationMean?: number | null, sandPFiveTwoWeekChange?: number | null, sector?: string | null, sharesOutstanding?: number | null, shortRatio?: number | null, symbol: string, targetEstOneyPercent?: number | null, volume: number, website?: string | null, weekRangeFiveTwoMax: number, weekRangeFiveTwoMin: number, yearToDatePrice: number, yearToDatePriceReturn?: number | null, isActivelyTrading?: boolean | null, residance?: { __typename?: 'SummaryResidance', city?: string | null, state?: string | null, country?: string | null, addressOne?: string | null, zip?: string | null } | null } }>, groups: { __typename?: 'STUserGroups', groupInvitationSent: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null, imagePath?: string | null, imageUrl?: string | null, startDate: string, endDate?: string | null, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfMembersActive?: number | null, createdDate: string, watchedByUsers: number, lastUpdateDate: string, lastEditedDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null } }>, groupInvitationReceived: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null, imagePath?: string | null, imageUrl?: string | null, startDate: string, endDate?: string | null, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfMembersActive?: number | null, createdDate: string, watchedByUsers: number, lastUpdateDate: string, lastEditedDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null } }>, groupOwner: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null, imagePath?: string | null, imageUrl?: string | null, startDate: string, endDate?: string | null, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfMembersActive?: number | null, createdDate: string, watchedByUsers: number, lastUpdateDate: string, lastEditedDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null } }>, groupMember: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null, imagePath?: string | null, imageUrl?: string | null, startDate: string, endDate?: string | null, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfMembersActive?: number | null, createdDate: string, watchedByUsers: number, lastUpdateDate: string, lastEditedDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null } }>, groupWatched: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null, imagePath?: string | null, imageUrl?: string | null, startDate: string, endDate?: string | null, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfMembersActive?: number | null, createdDate: string, watchedByUsers: number, lastUpdateDate: string, lastEditedDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null } }> }, userHistoricalData: { __typename?: 'STUserHistoricalData', userLogs: Array<{ __typename?: 'STLog', date: string, logText: string }>, resetedAccount: Array<{ __typename?: 'STUserResetedAccount', date: string, portfolioTotal: number }>, bestAchievedRanks: Array<{ __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null }>, portfolioSnapshots: Array<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, transactionSnapshots: Array<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }> }, userPrivateData: { __typename?: 'STUserPrivateData', tradingEnabledDate?: string | null, finnhubKey?: string | null, roles: Array<string>, email: string, displayName: string, providerId?: string | null, status: User_Status, nicknameLastChange?: string | null, tickets: Array<{ __typename?: 'STTicket', id: string, name: string, type: StTicketTypes, createdAt: string, isOpen: boolean, createdBy: { __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string }, comments: Array<{ __typename?: 'STTicketComment', id: string, comment: string, createdAt: string, createdBy: { __typename?: 'STUserIdentification', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string } }> }> }, stockWatchlist: Array<{ __typename?: 'STStockWatchlist', id: string, name: string, date?: string | null, userId: string, symbols: Array<string>, summaries: Array<{ __typename?: 'Summary', avgVolume: number, ceo?: string | null, companyName: string, currency: string, dividendDate?: string | null, ePSTTM?: number | null, earningsDate?: string | null, exDividendDate?: string | null, exchangeName?: string | null, fiveTwoWeekRange?: string | null, forwardDividendRate?: number | null, forwardDividendYield?: number | null, forwardEPS?: number | null, forwardPE?: number | null, fullTimeEmployees?: string | null, id: string, symbolType?: SymbolType | null, industry?: string | null, ipoDate?: string | null, beta?: number | null, countryFullName?: string | null, lastSplitDate?: string | null, lastSplitFactor?: string | null, logo_url?: string | null, longBusinessSummary?: string | null, marketCap?: number | null, marketPrice: number, oneyTargetEst?: number | null, pERatioTTM?: number | null, previousClose: number, recommendationKey?: string | null, recommendationMean?: number | null, sandPFiveTwoWeekChange?: number | null, sector?: string | null, sharesOutstanding?: number | null, shortRatio?: number | null, symbol: string, targetEstOneyPercent?: number | null, volume: number, website?: string | null, weekRangeFiveTwoMax: number, weekRangeFiveTwoMin: number, yearToDatePrice: number, yearToDatePriceReturn?: number | null, isActivelyTrading?: boolean | null, residance?: { __typename?: 'SummaryResidance', city?: string | null, state?: string | null, country?: string | null, addressOne?: string | null, zip?: string | null } | null }> }> } | null };

export type QueryUserIdentificationByUsernameQueryVariables = Exact<{
  usernamePrefix: Scalars['String'];
}>;


export type QueryUserIdentificationByUsernameQuery = { __typename?: 'Query', queryUserPublicDataByUsername: Array<{ __typename?: 'STUserPublicData', id: string, nickName: string, locale?: string | null, photoURL?: string | null, accountCreatedDate: string, lastSignInDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } } | null> };

export type QueryStGroupMemberOverviewByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type QueryStGroupMemberOverviewByIdQuery = { __typename?: 'Query', queryUserPublicDataById?: { __typename?: 'STUserPublicData', nickName: string, locale?: string | null, photoURL?: string | null, accountCreatedDate: string, lastSignInDate: string, activity?: User_Activity | null, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null }, transactionsSnippets: Array<{ __typename?: 'STTransaction', transactionId?: string | null, symbol: string, price: number, return?: number | null, returnChange?: number | null, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number }>, topTransactions: Array<{ __typename?: 'STTransaction', transactionId?: string | null, symbol: string, price: number, return?: number | null, returnChange?: number | null, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number }>, holdings: Array<{ __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number, summary: { __typename?: 'Summary', avgVolume: number, ceo?: string | null, companyName: string, currency: string, dividendDate?: string | null, ePSTTM?: number | null, earningsDate?: string | null, exDividendDate?: string | null, exchangeName?: string | null, fiveTwoWeekRange?: string | null, forwardDividendRate?: number | null, forwardDividendYield?: number | null, forwardEPS?: number | null, forwardPE?: number | null, fullTimeEmployees?: string | null, id: string, symbolType?: SymbolType | null, industry?: string | null, ipoDate?: string | null, beta?: number | null, countryFullName?: string | null, lastSplitDate?: string | null, lastSplitFactor?: string | null, logo_url?: string | null, longBusinessSummary?: string | null, marketCap?: number | null, marketPrice: number, oneyTargetEst?: number | null, pERatioTTM?: number | null, previousClose: number, recommendationKey?: string | null, recommendationMean?: number | null, sandPFiveTwoWeekChange?: number | null, sector?: string | null, sharesOutstanding?: number | null, shortRatio?: number | null, symbol: string, targetEstOneyPercent?: number | null, volume: number, website?: string | null, weekRangeFiveTwoMax: number, weekRangeFiveTwoMin: number, yearToDatePrice: number, yearToDatePriceReturn?: number | null, isActivelyTrading?: boolean | null, residance?: { __typename?: 'SummaryResidance', city?: string | null, state?: string | null, country?: string | null, addressOne?: string | null, zip?: string | null } | null } }>, userHistoricalData: { __typename?: 'STUserHistoricalData', userLogs: Array<{ __typename?: 'STLog', date: string, logText: string }>, resetedAccount: Array<{ __typename?: 'STUserResetedAccount', date: string, portfolioTotal: number }>, bestAchievedRanks: Array<{ __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null }>, portfolioSnapshots: Array<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, transactionSnapshots: Array<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }> } } | null };

export type QueryStUserPublicDataSearchByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type QueryStUserPublicDataSearchByIdQuery = { __typename?: 'Query', queryUserPublicDataById?: { __typename?: 'STUserPublicData', nickName: string, locale?: string | null, photoURL?: string | null, accountCreatedDate: string, lastSignInDate: string, activity?: User_Activity | null, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, portfolioRisk?: { __typename?: 'STPortfolioRiskCalculations', date?: string | null, portfolioAlpha?: number | null, portfolioAnnualVariancePrct?: number | null, portfolioAnnualVolatilityPrct?: number | null, portfolioBeta?: number | null, portfolioEstimatedReturnPrct?: number | null, portfolioEstimatedReturnValue?: number | null, portfolioSharpRatio?: number | null, portfolioVolatilityMeanPrct?: number | null } | null, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null }, transactionsSnippets: Array<{ __typename?: 'STTransaction', transactionId?: string | null, symbol: string, price: number, return?: number | null, returnChange?: number | null, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number }>, topTransactions: Array<{ __typename?: 'STTransaction', transactionId?: string | null, symbol: string, price: number, return?: number | null, returnChange?: number | null, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number }>, holdings: Array<{ __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number, summary: { __typename?: 'Summary', avgVolume: number, ceo?: string | null, companyName: string, currency: string, dividendDate?: string | null, ePSTTM?: number | null, earningsDate?: string | null, exDividendDate?: string | null, exchangeName?: string | null, fiveTwoWeekRange?: string | null, forwardDividendRate?: number | null, forwardDividendYield?: number | null, forwardEPS?: number | null, forwardPE?: number | null, fullTimeEmployees?: string | null, id: string, symbolType?: SymbolType | null, industry?: string | null, ipoDate?: string | null, beta?: number | null, countryFullName?: string | null, lastSplitDate?: string | null, lastSplitFactor?: string | null, logo_url?: string | null, longBusinessSummary?: string | null, marketCap?: number | null, marketPrice: number, oneyTargetEst?: number | null, pERatioTTM?: number | null, previousClose: number, recommendationKey?: string | null, recommendationMean?: number | null, sandPFiveTwoWeekChange?: number | null, sector?: string | null, sharesOutstanding?: number | null, shortRatio?: number | null, symbol: string, targetEstOneyPercent?: number | null, volume: number, website?: string | null, weekRangeFiveTwoMax: number, weekRangeFiveTwoMin: number, yearToDatePrice: number, yearToDatePriceReturn?: number | null, isActivelyTrading?: boolean | null, residance?: { __typename?: 'SummaryResidance', city?: string | null, state?: string | null, country?: string | null, addressOne?: string | null, zip?: string | null } | null } }>, userHistoricalData: { __typename?: 'STUserHistoricalData', userLogs: Array<{ __typename?: 'STLog', date: string, logText: string }>, resetedAccount: Array<{ __typename?: 'STUserResetedAccount', date: string, portfolioTotal: number }>, bestAchievedRanks: Array<{ __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null }>, portfolioSnapshots: Array<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, transactionSnapshots: Array<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }> }, groups: { __typename?: 'STUserGroups', groupOwner: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null, imagePath?: string | null, imageUrl?: string | null, startDate: string, endDate?: string | null, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfMembersActive?: number | null, createdDate: string, watchedByUsers: number, lastUpdateDate: string, lastEditedDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null } }>, groupMember: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null, imagePath?: string | null, imageUrl?: string | null, startDate: string, endDate?: string | null, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfMembersActive?: number | null, createdDate: string, watchedByUsers: number, lastUpdateDate: string, lastEditedDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null } }> } } | null };

export type QueryStUserAdminInformationByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type QueryStUserAdminInformationByIdQuery = { __typename?: 'Query', queryUserPublicDataById?: { __typename?: 'STUserPublicData', id: string, nickName: string, locale?: string | null, photoURL?: string | null, accountCreatedDate: string, lastSignInDate: string, portfolioRisk?: { __typename?: 'STPortfolioRiskCalculations', date?: string | null, portfolioAlpha?: number | null, portfolioAnnualVariancePrct?: number | null, portfolioAnnualVolatilityPrct?: number | null, portfolioBeta?: number | null, portfolioEstimatedReturnPrct?: number | null, portfolioEstimatedReturnValue?: number | null, portfolioSharpRatio?: number | null, portfolioVolatilityMeanPrct?: number | null } | null, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null }, transactionsSnippets: Array<{ __typename?: 'STTransaction', transactionId?: string | null, symbol: string, price: number, return?: number | null, returnChange?: number | null, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number }>, topTransactions: Array<{ __typename?: 'STTransaction', transactionId?: string | null, symbol: string, price: number, return?: number | null, returnChange?: number | null, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees: number }>, holdings: Array<{ __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number }>, stockWatchlist: Array<{ __typename?: 'STStockWatchlist', id: string, name: string, date?: string | null, userId: string, symbols: Array<string> }>, groups: { __typename?: 'STUserGroups', groupInvitationSent: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null, imagePath?: string | null, imageUrl?: string | null, startDate: string, endDate?: string | null, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfMembersActive?: number | null, createdDate: string, watchedByUsers: number, lastUpdateDate: string, lastEditedDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null } }>, groupInvitationReceived: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null, imagePath?: string | null, imageUrl?: string | null, startDate: string, endDate?: string | null, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfMembersActive?: number | null, createdDate: string, watchedByUsers: number, lastUpdateDate: string, lastEditedDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null } }>, groupOwner: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null, imagePath?: string | null, imageUrl?: string | null, startDate: string, endDate?: string | null, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfMembersActive?: number | null, createdDate: string, watchedByUsers: number, lastUpdateDate: string, lastEditedDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null } }>, groupMember: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null, imagePath?: string | null, imageUrl?: string | null, startDate: string, endDate?: string | null, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfMembersActive?: number | null, createdDate: string, watchedByUsers: number, lastUpdateDate: string, lastEditedDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null } }>, groupWatched: Array<{ __typename?: 'STGroupAllData', id: string, name: string, description?: string | null, imagePath?: string | null, imageUrl?: string | null, startDate: string, endDate?: string | null, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfMembersActive?: number | null, createdDate: string, watchedByUsers: number, lastUpdateDate: string, lastEditedDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number }, topMembers: Array<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: string | null, photoURL: string, accountCreatedDate: string, previousPosition?: number | null, currentPosition?: number | null, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees: number, lastPortfolioBalance: number } }>, rank: { __typename?: 'STRank', highestPortfolio?: { __typename?: 'STRankHighestPortfolio', total: number, date: string, dateEvaluation: string, rankHighestPortfolioPlace: number, rankHighestPortfolio: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string } } | null } }> }, userHistoricalData: { __typename?: 'STUserHistoricalData', userLogs: Array<{ __typename?: 'STLog', date: string, logText: string }>, resetedAccount: Array<{ __typename?: 'STUserResetedAccount', date: string, portfolioTotal: number }> }, userPrivateData: { __typename?: 'STUserPrivateData', tradingEnabledDate?: string | null, finnhubKey?: string | null, roles: Array<string>, email: string, displayName: string, providerId?: string | null, status: User_Status, nicknameLastChange?: string | null }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber: number, lastPortfolioIncreasePrct: number, transactionFees: number, lastPortfolioBalance: number, lastPortfolioSnapshot: { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }, lastTransactionSnapshot: { __typename?: 'STTransactionSnapshot', transactionsBuy?: number | null, transactionsSell?: number | null, transactionFees?: number | null, date: string }, portfolioChange: { __typename?: 'STPortfolioChange', day_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, week_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_2_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_3_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, month_6_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, year_1_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null, from_beginning_change?: { __typename?: 'STPortfolioChangeData', portfolioIncreaseNumber: number, portfolioIncreasePrct: number, portfolioInvested: number, portfolioCash: number, portfolioBalance: number } | null } } } | null };

export type RegisterUserMutationVariables = Exact<{
  stUserAuthenticationInput: StUserAuthenticationInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser?: boolean | null };

export type EditUserMutationVariables = Exact<{
  editInput: StUserEditDataInput;
}>;


export type EditUserMutation = { __typename?: 'Mutation', editUser?: boolean | null };

export type ResetUserAccountMutationVariables = Exact<{
  userId: Scalars['String'];
}>;


export type ResetUserAccountMutation = { __typename?: 'Mutation', resetUserAccount?: { __typename?: 'STUserResetedAccount', date: string, portfolioTotal: number } | null };

export type StStockWatchlistIntoFragmentFragment = { __typename?: 'STStockWatchlist', id: string, name: string, date?: string | null, userId: string, symbols: Array<string> };

export type StStockWatchlistFragmentFragment = { __typename?: 'STStockWatchlist', id: string, name: string, date?: string | null, userId: string, symbols: Array<string>, summaries: Array<{ __typename?: 'Summary', avgVolume: number, ceo?: string | null, companyName: string, currency: string, dividendDate?: string | null, ePSTTM?: number | null, earningsDate?: string | null, exDividendDate?: string | null, exchangeName?: string | null, fiveTwoWeekRange?: string | null, forwardDividendRate?: number | null, forwardDividendYield?: number | null, forwardEPS?: number | null, forwardPE?: number | null, fullTimeEmployees?: string | null, id: string, symbolType?: SymbolType | null, industry?: string | null, ipoDate?: string | null, beta?: number | null, countryFullName?: string | null, lastSplitDate?: string | null, lastSplitFactor?: string | null, logo_url?: string | null, longBusinessSummary?: string | null, marketCap?: number | null, marketPrice: number, oneyTargetEst?: number | null, pERatioTTM?: number | null, previousClose: number, recommendationKey?: string | null, recommendationMean?: number | null, sandPFiveTwoWeekChange?: number | null, sector?: string | null, sharesOutstanding?: number | null, shortRatio?: number | null, symbol: string, targetEstOneyPercent?: number | null, volume: number, website?: string | null, weekRangeFiveTwoMax: number, weekRangeFiveTwoMin: number, yearToDatePrice: number, yearToDatePriceReturn?: number | null, isActivelyTrading?: boolean | null, residance?: { __typename?: 'SummaryResidance', city?: string | null, state?: string | null, country?: string | null, addressOne?: string | null, zip?: string | null } | null }> };

export type CreateStockWatchlistMutationVariables = Exact<{
  identifier: StStockWatchInputlistIdentifier;
}>;


export type CreateStockWatchlistMutation = { __typename?: 'Mutation', createStockWatchlist?: { __typename?: 'STStockWatchlist', id: string, name: string, date?: string | null, userId: string, symbols: Array<string>, summaries: Array<{ __typename?: 'Summary', avgVolume: number, ceo?: string | null, companyName: string, currency: string, dividendDate?: string | null, ePSTTM?: number | null, earningsDate?: string | null, exDividendDate?: string | null, exchangeName?: string | null, fiveTwoWeekRange?: string | null, forwardDividendRate?: number | null, forwardDividendYield?: number | null, forwardEPS?: number | null, forwardPE?: number | null, fullTimeEmployees?: string | null, id: string, symbolType?: SymbolType | null, industry?: string | null, ipoDate?: string | null, beta?: number | null, countryFullName?: string | null, lastSplitDate?: string | null, lastSplitFactor?: string | null, logo_url?: string | null, longBusinessSummary?: string | null, marketCap?: number | null, marketPrice: number, oneyTargetEst?: number | null, pERatioTTM?: number | null, previousClose: number, recommendationKey?: string | null, recommendationMean?: number | null, sandPFiveTwoWeekChange?: number | null, sector?: string | null, sharesOutstanding?: number | null, shortRatio?: number | null, symbol: string, targetEstOneyPercent?: number | null, volume: number, website?: string | null, weekRangeFiveTwoMax: number, weekRangeFiveTwoMin: number, yearToDatePrice: number, yearToDatePriceReturn?: number | null, isActivelyTrading?: boolean | null, residance?: { __typename?: 'SummaryResidance', city?: string | null, state?: string | null, country?: string | null, addressOne?: string | null, zip?: string | null } | null }> } | null };

export type AddStockIntoWatchlistMutationVariables = Exact<{
  identifier: StStockWatchInputlistIdentifier;
}>;


export type AddStockIntoWatchlistMutation = { __typename?: 'Mutation', addStockIntoStockWatchlist?: { __typename?: 'Summary', avgVolume: number, ceo?: string | null, companyName: string, currency: string, dividendDate?: string | null, ePSTTM?: number | null, earningsDate?: string | null, exDividendDate?: string | null, exchangeName?: string | null, fiveTwoWeekRange?: string | null, forwardDividendRate?: number | null, forwardDividendYield?: number | null, forwardEPS?: number | null, forwardPE?: number | null, fullTimeEmployees?: string | null, id: string, symbolType?: SymbolType | null, industry?: string | null, ipoDate?: string | null, beta?: number | null, countryFullName?: string | null, lastSplitDate?: string | null, lastSplitFactor?: string | null, logo_url?: string | null, longBusinessSummary?: string | null, marketCap?: number | null, marketPrice: number, oneyTargetEst?: number | null, pERatioTTM?: number | null, previousClose: number, recommendationKey?: string | null, recommendationMean?: number | null, sandPFiveTwoWeekChange?: number | null, sector?: string | null, sharesOutstanding?: number | null, shortRatio?: number | null, symbol: string, targetEstOneyPercent?: number | null, volume: number, website?: string | null, weekRangeFiveTwoMax: number, weekRangeFiveTwoMin: number, yearToDatePrice: number, yearToDatePriceReturn?: number | null, isActivelyTrading?: boolean | null, residance?: { __typename?: 'SummaryResidance', city?: string | null, state?: string | null, country?: string | null, addressOne?: string | null, zip?: string | null } | null } | null };

export type RemoveStockFromWatchlistMutationVariables = Exact<{
  identifier: StStockWatchInputlistIdentifier;
}>;


export type RemoveStockFromWatchlistMutation = { __typename?: 'Mutation', removeStockFromStockWatchlist?: boolean | null };

export type DeleteUserWatchlistMutationVariables = Exact<{
  identifier: StStockWatchInputlistIdentifier;
}>;


export type DeleteUserWatchlistMutation = { __typename?: 'Mutation', deleteWatchlist?: boolean | null };

export type RenameStockWatchlistMutationVariables = Exact<{
  identifier: StStockWatchInputlistIdentifier;
}>;


export type RenameStockWatchlistMutation = { __typename?: 'Mutation', renameStockWatchlist?: boolean | null };

export const StUserIdentificationBaseFragmentFragmentDoc = gql`
    fragment StUserIdentificationBaseFragment on STUserIdentificationBase {
  nickName
  locale
  photoURL
  accountCreatedDate
}
    `;
export const StUserIdentificationFragmentFragmentDoc = gql`
    fragment StUserIdentificationFragment on STUserIdentification {
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
    ...StUserIdentificationFragment
  }
  comment
  createdAt
}
    ${StUserIdentificationFragmentFragmentDoc}`;
export const StTicketFragmentFragmentDoc = gql`
    fragment STTicketFragment on STTicket {
  id
  name
  type
  createdBy {
    ...StUserIdentificationFragment
  }
  createdAt
  isOpen
  comments {
    ...STTicketCommentFragment
  }
}
    ${StUserIdentificationFragmentFragmentDoc}
${StTicketCommentFragmentFragmentDoc}`;
export const StAdminMainInformationsFragmentFragmentDoc = gql`
    fragment STAdminMainInformationsFragment on STAdminMainInformations {
  lastStockDetailsReload
  usersRegistrated
  usersActive
  usersRegistrationSnippets {
    ...StUserIdentificationBaseFragment
  }
  usersWeeklyRegistrated {
    data
    timestamp
  }
  tickets {
    ...STTicketFragment
  }
}
    ${StUserIdentificationBaseFragmentFragmentDoc}
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
  capitalLeaseObligations
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
  minorityInterest
  netDebt
  netReceivables
  otherAssets
  otherCurrentAssets
  otherCurrentLiabilities
  otherLiabilities
  otherNonCurrentAssets
  otherNonCurrentLiabilities
  othertotalStockholdersEquity
  totalEquity
  totalLiabilitiesAndTotalEquity
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
  interestIncome
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
export const StPortfolioChangeDataFragmentDoc = gql`
    fragment STPortfolioChangeData on STPortfolioChangeData {
  portfolioIncreaseNumber
  portfolioIncreasePrct
  portfolioInvested
  portfolioCash
  portfolioBalance
}
    `;
export const StPortfolioChangeFragmentDoc = gql`
    fragment STPortfolioChange on STPortfolioChange {
  day_1_change {
    ...STPortfolioChangeData
  }
  week_1_change {
    ...STPortfolioChangeData
  }
  week_2_change {
    ...STPortfolioChangeData
  }
  week_3_change {
    ...STPortfolioChangeData
  }
  month_1_change {
    ...STPortfolioChangeData
  }
  month_2_change {
    ...STPortfolioChangeData
  }
  month_3_change {
    ...STPortfolioChangeData
  }
  month_6_change {
    ...STPortfolioChangeData
  }
  year_1_change {
    ...STPortfolioChangeData
  }
  from_beginning_change {
    ...STPortfolioChangeData
  }
}
    ${StPortfolioChangeDataFragmentDoc}`;
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
  portfolioChange {
    ...STPortfolioChange
  }
  lastPortfolioBalance
}
    ${StPortfolioSnapshotFragmentFragmentDoc}
${StTransactionSnapshotFragmentFragmentDoc}
${StPortfolioChangeFragmentDoc}`;
export const StPortfolioSnapshotStartedFragmentFragmentDoc = gql`
    fragment STPortfolioSnapshotStartedFragment on STPortfolioSnapshotStarted {
  portfolioInvested
  portfolioCash
  date
  numberOfExecutedBuyTransactions
  numberOfExecutedSellTransactions
  transactionFees
  lastPortfolioBalance
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
  highestPortfolio {
    total
    date
    dateEvaluation
    rankHighestPortfolioPlace
    rankHighestPortfolio {
      ...STPortfolioSnapshotFragment
    }
  }
}
    ${StPortfolioSnapshotFragmentFragmentDoc}`;
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
  watchedByUsers
  isPrivate
  isInfinite
  isClosed
  numberOfMembers
  numberOfMembersActive
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
  rank {
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
export const StHoldingInfoFragmentFragmentDoc = gql`
    fragment STHoldingInfoFragment on STHolding {
  symbol
  breakEvenPrice
  units
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
  ...STHoldingInfoFragment
  summary {
    ...StockSummaryFragment
  }
}
    ${StHoldingInfoFragmentFragmentDoc}
${StockSummaryFragmentFragmentDoc}`;
export const StGroupAllDataGroupMemberHoldingsDataFragmentDoc = gql`
    fragment STGroupAllDataGroupMemberHoldingsData on STGroupAllData {
  id
  name
  groupMemberData {
    id
    holdings {
      holding {
        ...STHoldingFragment
      }
      numberOfUsers
    }
  }
}
    ${StHoldingFragmentFragmentDoc}`;
export const StGroupAllDataFragmentFragmentDoc = gql`
    fragment STGroupAllDataFragment on STGroupAllData {
  ...STGroupAllDataWithoutHoldings
  ...STGroupAllDataGroupMemberHoldingsData
}
    ${StGroupAllDataWithoutHoldingsFragmentDoc}
${StGroupAllDataGroupMemberHoldingsDataFragmentDoc}`;
export const StUserIdentificationPortfolioFragmentFragmentDoc = gql`
    fragment StUserIdentificationPortfolioFragment on STUserIdentification {
  id
  nickName
  locale
  photoURL
  accountCreatedDate
  portfolio {
    ...STPortfolioWrapperFragment
  }
}
    ${StPortfolioWrapperFragmentFragmentDoc}`;
export const StHallOfFameEntityGainsUsersFragmentDoc = gql`
    fragment STHallOfFameEntityGainsUsers on STHallOfFameEntityGainsUsers {
  day_1_change_prct {
    ...StUserIdentificationPortfolioFragment
  }
  day_1_change_number {
    ...StUserIdentificationPortfolioFragment
  }
  week_1_change_prct {
    ...StUserIdentificationPortfolioFragment
  }
  week_1_change_number {
    ...StUserIdentificationPortfolioFragment
  }
  week_2_change_prct {
    ...StUserIdentificationPortfolioFragment
  }
  week_2_change_number {
    ...StUserIdentificationPortfolioFragment
  }
  week_3_change_prct {
    ...StUserIdentificationPortfolioFragment
  }
  week_3_change_number {
    ...StUserIdentificationPortfolioFragment
  }
  month_1_change_prct {
    ...StUserIdentificationPortfolioFragment
  }
  month_1_change_number {
    ...StUserIdentificationPortfolioFragment
  }
}
    ${StUserIdentificationPortfolioFragmentFragmentDoc}`;
export const StHallOfFameUsersFragmentDoc = gql`
    fragment STHallOfFameUsers on STHallOfFameUsers {
  total
  lastUpdateDate
  highestPortfolio {
    ...StUserIdentificationPortfolioFragment
  }
  bestGainers {
    ...STHallOfFameEntityGainsUsers
  }
  wortGainers {
    ...STHallOfFameEntityGainsUsers
  }
}
    ${StUserIdentificationPortfolioFragmentFragmentDoc}
${StHallOfFameEntityGainsUsersFragmentDoc}`;
export const StGroupIdentificationDataFragmentDoc = gql`
    fragment STGroupIdentificationData on STGroupIdentificationInterface {
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
  numberOfMembersActive
  portfolio {
    ...STPortfolioWrapperFragment
  }
  startedPortfolio {
    ...STPortfolioSnapshotStartedFragment
  }
  topMembers {
    ...STGroupUserFragment
  }
  createdDate
  rank {
    ...STRankFragment
  }
  watchedByUsers
  lastUpdateDate
  lastEditedDate
}
    ${StGroupUserFragmentFragmentDoc}
${StPortfolioWrapperFragmentFragmentDoc}
${StPortfolioSnapshotStartedFragmentFragmentDoc}
${StRankFragmentFragmentDoc}`;
export const StHallOfFameGroupsFragmentDoc = gql`
    fragment STHallOfFameGroups on STHallOfFameGroups {
  total
  lastUpdateDate
  highestPortfolio {
    ...STGroupIdentificationData
  }
}
    ${StGroupIdentificationDataFragmentDoc}`;
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
export const StDetailsFinancialRatiosFragmentDoc = gql`
    fragment STDetailsFinancialRatios on STDetailsFinancialRatios {
  symbol
  date
  currentRatio
  quickRatio
  cashRatio
  daysOfSalesOutstanding
  daysOfInventoryOutstanding
  operatingCycle
  daysOfPayablesOutstanding
  cashConversionCycle
  grossProfitMargin
  operatingProfitMargin
  pretaxProfitMargin
  netProfitMargin
  effectiveTaxRate
  returnOnAssets
  returnOnEquity
  returnOnCapitalEmployed
  netIncomePerEBT
  ebtPerEbit
  ebitPerRevenue
  debtRatio
  debtEquityRatio
  longTermDebtToCapitalization
  totalDebtToCapitalization
  interestCoverage
  cashFlowToDebtRatio
  companyEquityMultiplier
  receivablesTurnover
  payablesTurnover
  inventoryTurnover
  fixedAssetTurnover
  assetTurnover
  operatingCashFlowPerShare
  freeCashFlowPerShare
  cashPerShare
  payoutRatio
  operatingCashFlowSalesRatio
  freeCashFlowOperatingCashFlowRatio
  cashFlowCoverageRatios
  shortTermCoverageRatios
  capitalExpenditureCoverageRatio
  dividendPaidAndCapexCoverageRatio
  dividendPayoutRatio
  priceBookValueRatio
  priceToBookRatio
  priceToSalesRatio
  priceEarningsRatio
  priceToFreeCashFlowsRatio
  priceToOperatingCashFlowsRatio
  priceCashFlowRatio
  priceEarningsToGrowthRatio
  priceSalesRatio
  dividendYield
  enterpriseValueMultiple
  priceFairValue
}
    `;
export const StDetailsFinancialGrowthFragmentDoc = gql`
    fragment STDetailsFinancialGrowth on STDetailsFinancialGrowth {
  symbol
  date
  revenueGrowth
  grossProfitGrowth
  ebitgrowth
  operatingIncomeGrowth
  netIncomeGrowth
  epsgrowth
  epsdilutedGrowth
  weightedAverageSharesGrowth
  weightedAverageSharesDilutedGrowth
  dividendsperShareGrowth
  operatingCashFlowGrowth
  freeCashFlowGrowth
  tenYRevenueGrowthPerShare
  fiveYRevenueGrowthPerShare
  threeYRevenueGrowthPerShare
  tenYOperatingCFGrowthPerShare
  fiveYOperatingCFGrowthPerShare
  threeYOperatingCFGrowthPerShare
  tenYNetIncomeGrowthPerShare
  fiveYNetIncomeGrowthPerShare
  threeYNetIncomeGrowthPerShare
  tenYShareholdersEquityGrowthPerShare
  fiveYShareholdersEquityGrowthPerShare
  threeYShareholdersEquityGrowthPerShare
  tenYDividendperShareGrowthPerShare
  fiveYDividendperShareGrowthPerShare
  threeYDividendperShareGrowthPerShare
  receivablesGrowth
  inventoryGrowth
  assetGrowth
  bookValueperShareGrowth
  debtGrowth
  rdexpenseGrowth
  sgaexpensesGrowth
}
    `;
export const StDetailsKeyMetricsFragmentDoc = gql`
    fragment STDetailsKeyMetrics on STDetailsKeyMetrics {
  symbol
  date
  revenuePerShare
  netIncomePerShare
  operatingCashFlowPerShare
  freeCashFlowPerShare
  cashPerShare
  bookValuePerShare
  tangibleBookValuePerShare
  shareholdersEquityPerShare
  interestDebtPerShare
  marketCap
  enterpriseValue
  peRatio
  priceToSalesRatio
  pocfratio
  pfcfRatio
  pbRatio
  ptbRatio
  evToSales
  enterpriseValueOverEBITDA
  evToOperatingCashFlow
  evToFreeCashFlow
  earningsYield
  freeCashFlowYield
  debtToEquity
  debtToAssets
  netDebtToEBITDA
  currentRatio
  interestCoverage
  incomeQuality
  dividendYield
  payoutRatio
  salesGeneralAndAdministrativeToRevenue
  researchAndDdevelopementToRevenue
  intangiblesToTotalAssets
  capexToOperatingCashFlow
  capexToRevenue
  capexToDepreciation
  stockBasedCompensationToRevenue
  grahamNumber
  roic
  returnOnTangibleAssets
  grahamNetNet
  workingCapital
  tangibleAssetValue
  netCurrentAssetValue
  investedCapital
  averageReceivables
  averagePayables
  averageInventory
  daysSalesOutstanding
  daysPayablesOutstanding
  daysOfInventoryOnHand
  receivablesTurnover
  payablesTurnover
  inventoryTurnover
  roe
  capexPerShare
}
    `;
export const StStockDetailsCalculationsFragmentDoc = gql`
    fragment STStockDetailsCalculations on STStockDetailsCalculations {
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
    `;
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
export const StUserIdentificationDataFragmentDoc = gql`
    fragment StUserIdentificationData on STUserPublicData {
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
export const StStockWatchlistIntoFragmentFragmentDoc = gql`
    fragment STStockWatchlistIntoFragment on STStockWatchlist {
  id
  name
  date
  userId
  symbols
}
    `;
export const StUserGroupsFragmentDoc = gql`
    fragment STUserGroups on STUserGroups {
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
  groupWatched {
    ...STGroupIdentificationData
  }
}
    ${StGroupIdentificationDataFragmentDoc}`;
export const StUserPrivateDataFragmentDoc = gql`
    fragment StUserPrivateData on STUserPrivateData {
  tradingEnabledDate
  finnhubKey
  roles
  email
  displayName
  providerId
  status
  nicknameLastChange
}
    `;
export const StUserDataAdminFragmentDoc = gql`
    fragment StUserDataAdmin on STUserPublicData {
  ...StUserIdentificationData
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
    ...STHoldingInfoFragment
  }
  stockWatchlist {
    ...STStockWatchlistIntoFragment
  }
  groups {
    ...STUserGroups
  }
  userHistoricalData {
    userLogs {
      ...STLogsFragment
    }
    resetedAccount {
      date
      portfolioTotal
    }
  }
  userPrivateData {
    ...StUserPrivateData
  }
}
    ${StUserIdentificationDataFragmentDoc}
${StPortfolioRiskCalculationsFragmentFragmentDoc}
${StRankFragmentFragmentDoc}
${StTransactionFragmentFragmentDoc}
${StHoldingInfoFragmentFragmentDoc}
${StStockWatchlistIntoFragmentFragmentDoc}
${StUserGroupsFragmentDoc}
${StLogsFragmentFragmentDoc}
${StUserPrivateDataFragmentDoc}`;
export const StStockWatchlistFragmentFragmentDoc = gql`
    fragment STStockWatchlistFragment on STStockWatchlist {
  ...STStockWatchlistIntoFragment
  summaries {
    ...StockSummaryFragment
  }
}
    ${StStockWatchlistIntoFragmentFragmentDoc}
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
    override document = QueryAdminMainInformationsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AdminToggleUserRolesDocument = gql`
    mutation AdminToggleUserRoles($userId: String!, $role: String!) {
  adminToggleUserRoles(userId: $userId, role: $role)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AdminToggleUserRolesGQL extends Apollo.Mutation<AdminToggleUserRolesMutation, AdminToggleUserRolesMutationVariables> {
    override document = AdminToggleUserRolesDocument;
    
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
    override document = ValidatorFinhubKeyValidityDocument;
    
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
    override document = QueryStGroupByGroupIdDocument;
    
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
    override document = QueryStGroupByGroupIdWithoutHoldingDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const QueryStGroupAllDataGroupMemberHoldingsDataDocument = gql`
    query QuerySTGroupAllDataGroupMemberHoldingsData($id: String!) {
  querySTGroupByGroupId(id: $id) {
    ...STGroupAllDataGroupMemberHoldingsData
  }
}
    ${StGroupAllDataGroupMemberHoldingsDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class QueryStGroupAllDataGroupMemberHoldingsDataGQL extends Apollo.Query<QueryStGroupAllDataGroupMemberHoldingsDataQuery, QueryStGroupAllDataGroupMemberHoldingsDataQueryVariables> {
    override document = QueryStGroupAllDataGroupMemberHoldingsDataDocument;
    
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
    override document = QueryStGroupByGroupNameDocument;
    
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
    override document = CreateGroupDocument;
    
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
    override document = EditGroupDocument;
    
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
    override document = DeleteGroupDocument;
    
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
    override document = ToggleInvitationRequestToGroupDocument;
    
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
    override document = AnswerReceivedGroupInvitationDocument;
    
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
    override document = LeaveGroupDocument;
    
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
    override document = RemoveMemberFromGroupDocument;
    
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
    override document = ToggleInviteUserIntoGroupDocument;
    
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
    override document = ToggleUsersInvitationRequestToGroupDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ToggleWatchGroupDocument = gql`
    mutation ToggleWatchGroup($groupId: String!) {
  toggleWatchGroup(groupId: $groupId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ToggleWatchGroupGQL extends Apollo.Mutation<ToggleWatchGroupMutation, ToggleWatchGroupMutationVariables> {
    override document = ToggleWatchGroupDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const QueryHallOfFameDocument = gql`
    query QueryHallOfFame {
  queryHallOfFame {
    users {
      ...STHallOfFameUsers
    }
    groups {
      ...STHallOfFameGroups
    }
  }
}
    ${StHallOfFameUsersFragmentDoc}
${StHallOfFameGroupsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class QueryHallOfFameGQL extends Apollo.Query<QueryHallOfFameQuery, QueryHallOfFameQueryVariables> {
    override document = QueryHallOfFameDocument;
    
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
    override document = QueryStMarketHistoryOverviewDocument;
    
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
    override document = QuerySymbolHistoricalPricesDocument;
    
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
    override document = QueryMarketDailyOverviewDocument;
    
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
    override document = QueryEtfDocumentDocument;
    
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
    override document = QueryStMarketAllCategoriesDocument;
    
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
    override document = QueryStMarketDataDocument;
    
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
    override document = QueryStockScreenerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const QueryEtfDetailsDocument = gql`
    query QueryEtfDetails($symbol: String!) {
  queryEtfDetails(symbol: $symbol) {
    id
    summary {
      ...StockSummaryFragment
    }
    calculations {
      ...STStockDetailsCalculations
    }
  }
}
    ${StockSummaryFragmentFragmentDoc}
${StStockDetailsCalculationsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class QueryEtfDetailsGQL extends Apollo.Query<QueryEtfDetailsQuery, QueryEtfDetailsQueryVariables> {
    override document = QueryEtfDetailsDocument;
    
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
      ...STStockDetailsCalculations
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
${StStockDetailsCalculationsFragmentDoc}
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
    override document = QueryStockDetailsDocument;
    
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
    override document = QueryStockFinancialReportsDocument;
    
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
    override document = QueryStockSummaryDocument;
    
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
    override document = QueryStockQuotesByPrefixDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const QueryStockDetailsFinancialRatiosDocument = gql`
    query QueryStockDetailsFinancialRatios($symbol: String!, $period: String!, $allData: Boolean!) {
  queryStockDetailsFinancialRatios(
    symbol: $symbol
    period: $period
    allData: $allData
  ) {
    ...STDetailsFinancialRatios
  }
}
    ${StDetailsFinancialRatiosFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class QueryStockDetailsFinancialRatiosGQL extends Apollo.Query<QueryStockDetailsFinancialRatiosQuery, QueryStockDetailsFinancialRatiosQueryVariables> {
    override document = QueryStockDetailsFinancialRatiosDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const QueryStockDetailsFinancialGrowthDocument = gql`
    query QueryStockDetailsFinancialGrowth($symbol: String!, $period: String!, $allData: Boolean!) {
  queryStockDetailsFinancialGrowth(
    symbol: $symbol
    period: $period
    allData: $allData
  ) {
    ...STDetailsFinancialGrowth
  }
}
    ${StDetailsFinancialGrowthFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class QueryStockDetailsFinancialGrowthGQL extends Apollo.Query<QueryStockDetailsFinancialGrowthQuery, QueryStockDetailsFinancialGrowthQueryVariables> {
    override document = QueryStockDetailsFinancialGrowthDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const QueryStockDetailsKeyMetricsDocument = gql`
    query QueryStockDetailsKeyMetrics($symbol: String!, $period: String!, $allData: Boolean!) {
  queryStockDetailsKeyMetrics(symbol: $symbol, period: $period, allData: $allData) {
    ...STDetailsKeyMetrics
  }
}
    ${StDetailsKeyMetricsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class QueryStockDetailsKeyMetricsGQL extends Apollo.Query<QueryStockDetailsKeyMetricsQuery, QueryStockDetailsKeyMetricsQueryVariables> {
    override document = QueryStockDetailsKeyMetricsDocument;
    
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
    override document = SetForceReloadStockDetailsDocument;
    
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
    override document = CreateTicketDocument;
    
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
    override document = CommentTicketDocument;
    
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
    override document = CommentTicketEditDocument;
    
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
    override document = CloseTicketDocument;
    
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
    override document = DeleteTicketDocument;
    
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
    override document = PerformTransactionDocument;
    
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
      groupWatched {
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
      ...StUserPrivateData
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
${StUserPrivateDataFragmentDoc}
${StTicketFragmentFragmentDoc}
${StStockWatchlistFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AuthenticateUserGQL extends Apollo.Query<AuthenticateUserQuery, AuthenticateUserQueryVariables> {
    override document = AuthenticateUserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const QueryUserIdentificationByUsernameDocument = gql`
    query QueryUserIdentificationByUsername($usernamePrefix: String!) {
  queryUserPublicDataByUsername(usernamePrefix: $usernamePrefix) {
    ...StUserIdentificationData
  }
}
    ${StUserIdentificationDataFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class QueryUserIdentificationByUsernameGQL extends Apollo.Query<QueryUserIdentificationByUsernameQuery, QueryUserIdentificationByUsernameQueryVariables> {
    override document = QueryUserIdentificationByUsernameDocument;
    
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
    override document = QueryStGroupMemberOverviewByIdDocument;
    
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
    override document = QueryStUserPublicDataSearchByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const QueryStUserAdminInformationByIdDocument = gql`
    query QueryStUserAdminInformationById($id: String!) {
  queryUserPublicDataById(id: $id) {
    ...StUserDataAdmin
  }
}
    ${StUserDataAdminFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class QueryStUserAdminInformationByIdGQL extends Apollo.Query<QueryStUserAdminInformationByIdQuery, QueryStUserAdminInformationByIdQueryVariables> {
    override document = QueryStUserAdminInformationByIdDocument;
    
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
    override document = RegisterUserDocument;
    
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
    override document = EditUserDocument;
    
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
    override document = ResetUserAccountDocument;
    
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
    override document = CreateStockWatchlistDocument;
    
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
    override document = AddStockIntoWatchlistDocument;
    
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
    override document = RemoveStockFromWatchlistDocument;
    
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
    override document = DeleteUserWatchlistDocument;
    
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
    override document = RenameStockWatchlistDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }