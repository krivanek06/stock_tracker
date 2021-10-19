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
  dividendPayoutRatioTTM?: Maybe<Scalars['Float']>;
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
  editGroup?: Maybe<Scalars['Boolean']>;
  deleteGroup?: Maybe<Scalars['Boolean']>;
  toggleInvitationRequestToGroup?: Maybe<StGroupAllData>;
  answerReceivedGroupInvitation?: Maybe<StGroupAllData>;
  toggleInviteUserIntoGroup?: Maybe<StGroupUser>;
  toggleUsersInvitationRequestToGroup?: Maybe<StGroupUser>;
  leaveGroup?: Maybe<Scalars['Boolean']>;
  removeMemberFromGroup?: Maybe<Scalars['Boolean']>;
  createStockWatchlist?: Maybe<StStockWatchlist>;
  renameStockWatchlist?: Maybe<Scalars['Boolean']>;
  deleteWatchlist?: Maybe<Scalars['Boolean']>;
  addStockIntoStockWatchlist?: Maybe<Summary>;
  removeStockFromStockWatchlist?: Maybe<Scalars['Boolean']>;
  performTransaction?: Maybe<PerformedTransaction>;
  setForceReloadStockDetails?: Maybe<Scalars['Boolean']>;
  createTicket?: Maybe<StTicket>;
  commentTicket?: Maybe<StTicketComment>;
  commentTicketEdit?: Maybe<Scalars['String']>;
  closeTicket?: Maybe<Scalars['Boolean']>;
  deleteTicket?: Maybe<Scalars['Boolean']>;
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
  id: Scalars['String'];
};


export type MutationToggleInvitationRequestToGroupArgs = {
  id: Scalars['String'];
  sendInvitation: Scalars['Boolean'];
};


export type MutationAnswerReceivedGroupInvitationArgs = {
  id: Scalars['String'];
  accept: Scalars['Boolean'];
};


export type MutationToggleInviteUserIntoGroupArgs = {
  inviteUser: Scalars['Boolean'];
  userId: Scalars['String'];
  groupId: Scalars['String'];
};


export type MutationToggleUsersInvitationRequestToGroupArgs = {
  acceptUser: Scalars['Boolean'];
  userId: Scalars['String'];
  groupId: Scalars['String'];
};


export type MutationLeaveGroupArgs = {
  id: Scalars['String'];
};


export type MutationRemoveMemberFromGroupArgs = {
  groupId: Scalars['String'];
  removingUserId: Scalars['String'];
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


export type MutationCreateTicketArgs = {
  ticketValuse: StTicketCreateValues;
};


export type MutationCommentTicketArgs = {
  ticketId: Scalars['String'];
  comment: Scalars['String'];
};


export type MutationCommentTicketEditArgs = {
  commentEditValues: StTicketCommentEditValues;
};


export type MutationCloseTicketArgs = {
  ticketId: Scalars['String'];
};


export type MutationDeleteTicketArgs = {
  ticketId: Scalars['String'];
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
  queryUserPublicDataById?: Maybe<StUserPublicData>;
  queryUserPublicDataByUsername: Array<Maybe<StUserPublicData>>;
  authenticateUser?: Maybe<StUserPublicData>;
  querySTGroupByGroupId?: Maybe<StGroupAllData>;
  querySTGroupByGroupName: Array<Maybe<StGroupAllData>>;
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
  queryStockScreener?: Maybe<StfmStockScreenerResultWrapper>;
  queryAdminMainInformations?: Maybe<StAdminMainInformations>;
  validatorFinhubKeyValidity?: Maybe<Scalars['Boolean']>;
};


export type QueryQueryUserPublicDataByIdArgs = {
  id: Scalars['String'];
};


export type QueryQueryUserPublicDataByUsernameArgs = {
  usernamePrefix: Scalars['String'];
};


export type QueryAuthenticateUserArgs = {
  id: Scalars['String'];
};


export type QueryQueryStGroupByGroupIdArgs = {
  id: Scalars['String'];
};


export type QueryQueryStGroupByGroupNameArgs = {
  groupName: Scalars['String'];
};


export type QueryQueryStockDetailsArgs = {
  symbol: Scalars['String'];
  reload?: Maybe<Scalars['Boolean']>;
};


export type QueryQueryStockSummaryArgs = {
  symbol: Scalars['String'];
  allowReload?: Maybe<Scalars['Boolean']>;
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


export type QueryQueryStockScreenerArgs = {
  stockScreenerInput: StfmStockScreenerInput;
  offset: Scalars['Int'];
  limit: Scalars['Int'];
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
  usersRegistrationSnippets: Array<Maybe<StUserIndetificationBase>>;
  usersWeeklyRegistrated: Array<Maybe<StSeriesNumber>>;
  tickets: Array<Maybe<StTicket>>;
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

export type StfmStockScreenerInput = {
  marketCapMoreThan?: Maybe<Scalars['Float']>;
  marketCapLowerThan?: Maybe<Scalars['Float']>;
  priceMoreThan?: Maybe<Scalars['Float']>;
  priceLowerThan?: Maybe<Scalars['Float']>;
  betaMoreThan?: Maybe<Scalars['Float']>;
  betaLowerThan?: Maybe<Scalars['Float']>;
  volumeMoreThan?: Maybe<Scalars['Float']>;
  volumeLowerThan?: Maybe<Scalars['Float']>;
  dividendMoreThan?: Maybe<Scalars['Float']>;
  dividendLowerThan?: Maybe<Scalars['Float']>;
  isEtf?: Maybe<Scalars['Boolean']>;
  isActivelyTrading?: Maybe<Scalars['Boolean']>;
  sector?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  exchange?: Maybe<Scalars['String']>;
};

export type StfmStockScreenerResult = {
  __typename?: 'STFMStockScreenerResult';
  symbol?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  marketCap?: Maybe<Scalars['Float']>;
  sector?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
  beta?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  lastAnnualDividend?: Maybe<Scalars['Float']>;
  volume?: Maybe<Scalars['Float']>;
  exchange?: Maybe<Scalars['String']>;
  exchangeShortName?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  isEtf?: Maybe<Scalars['Boolean']>;
  isActivelyTrading?: Maybe<Scalars['Boolean']>;
  companyQuote?: Maybe<StfmCompanyQuote>;
};

export type StfmStockScreenerResultWrapper = {
  __typename?: 'STFMStockScreenerResultWrapper';
  result?: Maybe<Array<Maybe<StfmStockScreenerResult>>>;
  found?: Maybe<Scalars['Float']>;
  offset?: Maybe<Scalars['Float']>;
  limit?: Maybe<Scalars['Float']>;
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
  id: Scalars['String'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  imagePath?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  owner: StGroupUser;
  lastUpdateDate: Scalars['String'];
  lastEditedDate: Scalars['String'];
  createdDate: Scalars['String'];
  currentAchievedRanks?: Maybe<StRank>;
  startDate: Scalars['String'];
  endDate?: Maybe<Scalars['String']>;
  isInfinite: Scalars['Boolean'];
  isPrivate: Scalars['Boolean'];
  isClosed: Scalars['Boolean'];
  portfolio: StPortfolioWrapper;
  startedPortfolio: StPortfolioSnapshotStarted;
  numberOfMembers: Scalars['Float'];
  numberOfInvitationReceived: Scalars['Float'];
  numberOfInvitationSent: Scalars['Float'];
  topTransactions: Array<Maybe<StTransaction>>;
  lastTransactions: Array<Maybe<StTransaction>>;
  managers: Array<Maybe<StGroupUser>>;
  groupHistoricalData: StGroupHistoricalData;
  groupMemberData: StGroupMemberData;
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

export type StGroupMemberData = {
  __typename?: 'STGroupMemberData';
  id: Scalars['String'];
  members: Array<Maybe<StGroupUser>>;
  holdings: Array<Maybe<StGroupHoldings>>;
  invitationSent: Array<Maybe<StGroupUser>>;
  invitationReceived?: Maybe<Array<Maybe<StGroupUser>>>;
};

export type StGroupUser = {
  __typename?: 'STGroupUser';
  id: Scalars['String'];
  nickName: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  photoURL: Scalars['String'];
  accountCreatedDate: Scalars['String'];
  portfolio: StPortfolioWrapper;
  startedPortfolio: StPortfolioSnapshotStarted;
  previousPosition?: Maybe<Scalars['Float']>;
  currentPosition?: Maybe<Scalars['Float']>;
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
  lastUpdateTopStocks?: Maybe<Scalars['String']>;
  stockScreener?: Maybe<Array<Maybe<StfmStockScreenerResult>>>;
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

export type StPortfolioSnapshotStarted = {
  __typename?: 'STPortfolioSnapshotStarted';
  portfolioInvested: Scalars['Float'];
  portfolioCash: Scalars['Float'];
  date: Scalars['String'];
  numberOfExecutedBuyTransactions: Scalars['Float'];
  numberOfExecutedSellTransactions: Scalars['Float'];
  transactionFees?: Maybe<Scalars['Float']>;
};

export type StPortfolioWrapper = {
  __typename?: 'STPortfolioWrapper';
  portfolioCash: Scalars['Float'];
  numberOfExecutedBuyTransactions: Scalars['Float'];
  numberOfExecutedSellTransactions: Scalars['Float'];
  lastPortfolioIncreaseNumber?: Maybe<Scalars['Float']>;
  lastPortfolioIncreasePrct?: Maybe<Scalars['Float']>;
  lastPortfolioSnapshot?: Maybe<StPortfolioSnapshot>;
  lastTransactionSnapshot?: Maybe<StTransactionSnapshot>;
  transactionFees?: Maybe<Scalars['Float']>;
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

export type StTicket = {
  __typename?: 'STTicket';
  id: Scalars['String'];
  name: Scalars['String'];
  type: StTicketTypes;
  createdBy: StUserIndetification;
  createdAt: Scalars['String'];
  isOpen: Scalars['Boolean'];
  comments: Array<Maybe<StTicketComment>>;
};

export type StTicketComment = {
  __typename?: 'STTicketComment';
  id: Scalars['String'];
  createdBy: StUserIndetification;
  comment: Scalars['String'];
  createdAt: Scalars['String'];
};

export type StTicketCommentEditValues = {
  ticketId: Scalars['String'];
  commentId: Scalars['String'];
  newComment: Scalars['String'];
};

export type StTicketCreateValues = {
  name: Scalars['String'];
  type: StTicketTypes;
  message: Scalars['String'];
};

export enum StTicketTypes {
  Improvement = 'IMPROVEMENT',
  Defect = 'DEFECT'
}

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
  transactionFees?: Maybe<Scalars['Float']>;
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
  transactionFees?: Maybe<Scalars['Float']>;
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

export type StUserIndetificationBase = {
  __typename?: 'STUserIndetificationBase';
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
  roles: Array<Maybe<Scalars['String']>>;
  tickets: Array<Maybe<StTicket>>;
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
  rank?: Maybe<StRank>;
  holdings: Array<Maybe<StHolding>>;
  transactionsSnippets: Array<Maybe<StTransaction>>;
  topTransactions: Array<Maybe<StTransaction>>;
  activity?: Maybe<User_Activity>;
  groups: StUserGroups;
  portfolio: StPortfolioWrapper;
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
  dividendDate?: Maybe<Scalars['String']>;
  ePSTTM?: Maybe<Scalars['Float']>;
  earningsDate?: Maybe<Scalars['String']>;
  exDividendDate?: Maybe<Scalars['String']>;
  exchangeName?: Maybe<Scalars['String']>;
  beta?: Maybe<Scalars['String']>;
  countryFullName?: Maybe<Scalars['String']>;
  fiveTwoWeekRange?: Maybe<Scalars['String']>;
  forwardDividendRate?: Maybe<Scalars['Float']>;
  forwardDividendYield?: Maybe<Scalars['Float']>;
  forwardEPS?: Maybe<Scalars['Float']>;
  forwardPE?: Maybe<Scalars['Float']>;
  fullTimeEmployees?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  symbolType?: Maybe<SymbolType>;
  industry?: Maybe<Scalars['String']>;
  ipoDate?: Maybe<Scalars['String']>;
  lastSplitDate?: Maybe<Scalars['String']>;
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
  isActivelyTrading?: Maybe<Scalars['Boolean']>;
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

export enum SymbolType {
  Stock = 'STOCK',
  Etf = 'ETF',
  Fund = 'FUND',
  Adr = 'ADR'
}

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

export type StAdminMainInformationsFragmentFragment = { __typename?: 'STAdminMainInformations', lastStockDetailsReload?: Maybe<string>, usersRegistrated: number, usersActive: number, usersRegistrationSnippets: Array<Maybe<{ __typename?: 'STUserIndetificationBase', nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string }>>, usersWeeklyRegistrated: Array<Maybe<{ __typename?: 'STSeriesNumber', data: number, timestamp: number }>>, tickets: Array<Maybe<{ __typename?: 'STTicket', id: string, name: string, type: StTicketTypes, createdAt: string, isOpen: boolean, createdBy: { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string }, comments: Array<Maybe<{ __typename?: 'STTicketComment', id: string, comment: string, createdAt: string, createdBy: { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string } }>> }>> };

export type QueryAdminMainInformationsQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryAdminMainInformationsQuery = { __typename?: 'Query', queryAdminMainInformations?: Maybe<{ __typename?: 'STAdminMainInformations', lastStockDetailsReload?: Maybe<string>, usersRegistrated: number, usersActive: number, usersRegistrationSnippets: Array<Maybe<{ __typename?: 'STUserIndetificationBase', nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string }>>, usersWeeklyRegistrated: Array<Maybe<{ __typename?: 'STSeriesNumber', data: number, timestamp: number }>>, tickets: Array<Maybe<{ __typename?: 'STTicket', id: string, name: string, type: StTicketTypes, createdAt: string, isOpen: boolean, createdBy: { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string }, comments: Array<Maybe<{ __typename?: 'STTicketComment', id: string, comment: string, createdAt: string, createdBy: { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string } }>> }>> }> };

export type ValidatorFinhubKeyValidityQueryVariables = Exact<{
  finuhbKey: Scalars['String'];
}>;


export type ValidatorFinhubKeyValidityQuery = { __typename?: 'Query', validatorFinhubKeyValidity?: Maybe<boolean> };

export type StfmHolderFragmentFragment = { __typename?: 'STFMHolder', change?: Maybe<number>, dateReported?: Maybe<string>, holder?: Maybe<string>, shares?: Maybe<number> };

export type StfmHolderWithWeightFragmentFragment = { __typename?: 'STFMHolderWithWeight', change?: Maybe<number>, dateReported?: Maybe<string>, holder?: Maybe<string>, shares?: Maybe<number>, weightPercent?: Maybe<number> };

export type StfmBalanceSheetFragmentFragment = { __typename?: 'STFMBalanceSheet', acceptedDate?: Maybe<string>, accountPayables?: Maybe<number>, accumulatedOtherComprehensiveIncomeLoss?: Maybe<number>, cashAndCashEquivalents?: Maybe<number>, cashAndShortTermInvestments?: Maybe<number>, commonStock?: Maybe<number>, date?: Maybe<string>, deferredRevenue?: Maybe<number>, deferredRevenueNonCurrent?: Maybe<number>, deferredTaxLiabilitiesNonCurrent?: Maybe<number>, fillingDate?: Maybe<string>, finalLink?: Maybe<string>, goodwill?: Maybe<number>, goodwillAndIntangibleAssets?: Maybe<number>, intangibleAssets?: Maybe<number>, inventory?: Maybe<number>, link?: Maybe<string>, longTermDebt?: Maybe<number>, longTermInvestments?: Maybe<number>, netDebt?: Maybe<number>, netReceivables?: Maybe<number>, otherAssets?: Maybe<number>, otherCurrentAssets?: Maybe<number>, otherCurrentLiabilities?: Maybe<number>, otherLiabilities?: Maybe<number>, otherNonCurrentAssets?: Maybe<number>, otherNonCurrentLiabilities?: Maybe<number>, othertotalStockholdersEquity?: Maybe<number>, period?: Maybe<string>, propertyPlantEquipmentNet?: Maybe<number>, reportedCurrency?: Maybe<string>, retainedEarnings?: Maybe<number>, shortTermDebt?: Maybe<number>, shortTermInvestments?: Maybe<number>, symbol?: Maybe<string>, taxAssets?: Maybe<number>, taxPayables?: Maybe<number>, totalAssets?: Maybe<number>, totalCurrentAssets?: Maybe<number>, totalCurrentLiabilities?: Maybe<number>, totalDebt?: Maybe<number>, totalInvestments?: Maybe<number>, totalLiabilities?: Maybe<number>, totalLiabilitiesAndStockholdersEquity?: Maybe<number>, totalNonCurrentAssets?: Maybe<number>, totalNonCurrentLiabilities?: Maybe<number>, totalStockholdersEquity?: Maybe<number> };

export type StfmCashFlowFragmentFragment = { __typename?: 'STFMCashFlow', acceptedDate?: Maybe<string>, accountsPayables?: Maybe<number>, accountsReceivables?: Maybe<number>, acquisitionsNet?: Maybe<number>, capitalExpenditure?: Maybe<number>, cashAtBeginningOfPeriod?: Maybe<number>, cashAtEndOfPeriod?: Maybe<number>, changeInWorkingCapital?: Maybe<number>, commonStockIssued?: Maybe<number>, commonStockRepurchased?: Maybe<number>, date?: Maybe<string>, debtRepayment?: Maybe<number>, deferredIncomeTax?: Maybe<number>, depreciationAndAmortization?: Maybe<number>, dividendsPaid?: Maybe<number>, effectOfForexChangesOnCash?: Maybe<number>, fillingDate?: Maybe<string>, finalLink?: Maybe<string>, freeCashFlow?: Maybe<number>, inventory?: Maybe<number>, investmentsInPropertyPlantAndEquipment?: Maybe<number>, link?: Maybe<string>, netCashProvidedByOperatingActivities?: Maybe<number>, netCashUsedForInvestingActivites?: Maybe<number>, netCashUsedProvidedByFinancingActivities?: Maybe<number>, netChangeInCash?: Maybe<number>, netIncome?: Maybe<number>, operatingCashFlow?: Maybe<number>, otherFinancingActivites?: Maybe<number>, otherInvestingActivites?: Maybe<number>, otherNonCashItems?: Maybe<number>, otherWorkingCapital?: Maybe<number>, period?: Maybe<string>, purchasesOfInvestments?: Maybe<number>, reportedCurrency?: Maybe<string>, salesMaturitiesOfInvestments?: Maybe<number>, stockBasedCompensation?: Maybe<number>, symbol?: Maybe<string> };

export type StfmIncomeStatementFragmentFragment = { __typename?: 'STFMIncomeStatement', acceptedDate?: Maybe<string>, costAndExpenses?: Maybe<number>, costOfRevenue?: Maybe<number>, date?: Maybe<string>, depreciationAndAmortization?: Maybe<number>, ebitda?: Maybe<number>, ebitdaratio?: Maybe<number>, eps?: Maybe<number>, epsdiluted?: Maybe<number>, fillingDate?: Maybe<string>, finalLink?: Maybe<string>, generalAndAdministrativeExpenses?: Maybe<number>, grossProfit?: Maybe<number>, grossProfitRatio?: Maybe<number>, incomeBeforeTax?: Maybe<number>, incomeBeforeTaxRatio?: Maybe<number>, incomeTaxExpense?: Maybe<number>, interestExpense?: Maybe<number>, link?: Maybe<string>, netIncome?: Maybe<number>, netIncomeRatio?: Maybe<number>, operatingExpenses?: Maybe<number>, operatingIncome?: Maybe<number>, operatingIncomeRatio?: Maybe<number>, otherExpenses?: Maybe<number>, period?: Maybe<string>, reportedCurrency?: Maybe<string>, researchAndDevelopmentExpenses?: Maybe<number>, revenue?: Maybe<number>, sellingAndMarketingExpenses?: Maybe<number>, sellingGeneralAndAdministrativeExpenses?: Maybe<number>, symbol?: Maybe<string>, totalOtherIncomeExpensesNet?: Maybe<number>, weightedAverageShsOut?: Maybe<number>, weightedAverageShsOutDil?: Maybe<number> };

export type StfmInsideTradeFragmentFragment = { __typename?: 'STFMInsideTrade', acquistionOrDisposition?: Maybe<string>, companyCik?: Maybe<string>, formType?: Maybe<string>, link?: Maybe<string>, price?: Maybe<number>, reportingCik?: Maybe<string>, reportingName?: Maybe<string>, securitiesOwned?: Maybe<number>, securitiesTransacted?: Maybe<number>, securityName?: Maybe<string>, symbol?: Maybe<string>, transactionDate?: Maybe<string>, transactionType?: Maybe<string>, typeOfOwner?: Maybe<string> };

export type StfmKeyExecutiveFragmentFragment = { __typename?: 'STFMKeyExecutive', currencyPay?: Maybe<string>, gender?: Maybe<string>, name?: Maybe<string>, pay?: Maybe<number>, title?: Maybe<string> };

export type StfmStockNewFragmentFragment = { __typename?: 'STFMStockNew', image?: Maybe<string>, publishedDate?: Maybe<string>, site?: Maybe<string>, symbol?: Maybe<string>, text?: Maybe<string>, title?: Maybe<string>, url?: Maybe<string> };

export type StfmStockDividendFragmentFragment = { __typename?: 'STFMStockDividend', adjDividend?: Maybe<number>, date?: Maybe<string>, declarationDate?: Maybe<string>, dividend?: Maybe<number>, label?: Maybe<string>, paymentDate?: Maybe<string>, recordDate?: Maybe<string>, symbol?: Maybe<string> };

export type StfmSplitHistoryFragmentFragment = { __typename?: 'STFMSplitHistory', date?: Maybe<string>, denominator?: Maybe<number>, label?: Maybe<string>, numerator?: Maybe<number>, symbol?: Maybe<string> };

export type StfmRatingFragmentFragment = { __typename?: 'STFMRating', date?: Maybe<string>, rating?: Maybe<string>, ratingDetailsDCFRecommendation?: Maybe<string>, ratingDetailsDCFScore?: Maybe<number>, ratingDetailsDERecommendation?: Maybe<string>, ratingDetailsDEScore?: Maybe<number>, ratingDetailsPBRecommendation?: Maybe<string>, ratingDetailsPBScore?: Maybe<number>, ratingDetailsPERecommendation?: Maybe<string>, ratingDetailsPEScore?: Maybe<number>, ratingDetailsROARecommendation?: Maybe<string>, ratingDetailsROAScore?: Maybe<number>, ratingDetailsROERecommendation?: Maybe<string>, ratingDetailsROEScore?: Maybe<number>, ratingRecommendation?: Maybe<string>, ratingScore?: Maybe<number>, symbol?: Maybe<string> };

export type StfmRatiosFragmentFragment = { __typename?: 'STFMRatios', assetTurnoverTTM?: Maybe<number>, capitalExpenditureCoverageRatioTTM?: Maybe<number>, cashConversionCycleTTM?: Maybe<number>, cashFlowCoverageRatiosTTM?: Maybe<number>, cashFlowToDebtRatioTTM?: Maybe<number>, cashPerShareTTM?: Maybe<number>, cashRatioTTM?: Maybe<number>, companyEquityMultiplierTTM?: Maybe<number>, currentRatioTTM?: Maybe<number>, daysOfInventoryOutstandingTTM?: Maybe<number>, daysOfPayablesOutstandingTTM?: Maybe<number>, daysOfSalesOutstandingTTM?: Maybe<number>, debtEquityRatioTTM?: Maybe<number>, debtRatioTTM?: Maybe<number>, dividendPaidAndCapexCoverageRatioTTM?: Maybe<number>, dividendPerShareTTM?: Maybe<number>, dividendYielPercentageTTM?: Maybe<number>, dividendYielTTM?: Maybe<number>, dividendYieldTTM?: Maybe<number>, ebitPerRevenueTTM?: Maybe<number>, ebtPerEbitTTM?: Maybe<number>, effectiveTaxRateTTM?: Maybe<number>, enterpriseValueMultipleTTM?: Maybe<number>, fixedAssetTurnoverTTM?: Maybe<number>, freeCashFlowOperatingCashFlowRatioTTM?: Maybe<number>, freeCashFlowPerShareTTM?: Maybe<number>, grossProfitMarginTTM?: Maybe<number>, interestCoverageTTM?: Maybe<number>, inventoryTurnoverTTM?: Maybe<number>, longTermDebtToCapitalizationTTM?: Maybe<number>, netIncomePerEBTTTM?: Maybe<number>, netProfitMarginTTM?: Maybe<number>, operatingCashFlowPerShareTTM?: Maybe<number>, operatingCashFlowSalesRatioTTM?: Maybe<number>, operatingCycleTTM?: Maybe<number>, operatingProfitMarginTTM?: Maybe<number>, payablesTurnoverTTM?: Maybe<number>, payoutRatioTTM?: Maybe<number>, peRatioTTM?: Maybe<number>, pegRatioTTM?: Maybe<number>, pretaxProfitMarginTTM?: Maybe<number>, priceBookValueRatioTTM?: Maybe<number>, priceCashFlowRatioTTM?: Maybe<number>, priceEarningsRatioTTM?: Maybe<number>, priceEarningsToGrowthRatioTTM?: Maybe<number>, priceFairValueTTM?: Maybe<number>, priceSalesRatioTTM?: Maybe<number>, priceToBookRatioTTM?: Maybe<number>, priceToFreeCashFlowsRatioTTM?: Maybe<number>, priceToOperatingCashFlowsRatioTTM?: Maybe<number>, priceToSalesRatioTTM?: Maybe<number>, quickRatioTTM?: Maybe<number>, receivablesTurnoverTTM?: Maybe<number>, returnOnAssetsTTM?: Maybe<number>, returnOnCapitalEmployedTTM?: Maybe<number>, returnOnEquityTTM?: Maybe<number>, shortTermCoverageRatiosTTM?: Maybe<number>, totalDebtToCapitalizationTTM?: Maybe<number> };

export type StfmCompanyQuoteFragmentFragment = { __typename?: 'STFMCompanyQuote', avgVolume?: Maybe<number>, change?: Maybe<number>, changesPercentage?: Maybe<number>, dayHigh?: Maybe<number>, dayLow?: Maybe<number>, earningsAnnouncement?: Maybe<string>, eps?: Maybe<number>, exchange?: Maybe<string>, marketCap?: Maybe<number>, name?: Maybe<string>, open?: Maybe<number>, pe?: Maybe<number>, previousClose?: Maybe<number>, price?: Maybe<number>, priceAvg200?: Maybe<number>, priceAvg50?: Maybe<number>, sharesOutstanding?: Maybe<number>, symbol?: Maybe<string>, timestamp?: Maybe<number>, volume?: Maybe<number>, yearHigh?: Maybe<number>, yearLow?: Maybe<number>, image?: Maybe<string> };

export type StfmTopStocksFragmentFragment = { __typename?: 'STFMTopStocks', ticker?: Maybe<string>, changes?: Maybe<number>, price?: Maybe<string>, changesPercentage?: Maybe<string>, companyName?: Maybe<string> };

export type StfmExchangeSectorPeFragmentFragment = { __typename?: 'STFMExchangeSectorPE', date?: Maybe<string>, sector?: Maybe<string>, exchange?: Maybe<string>, pe?: Maybe<number> };

export type StfmExchangeIndustryPeFragmentFragment = { __typename?: 'STFMExchangeIndustryPE', date?: Maybe<string>, industry?: Maybe<string>, exchange?: Maybe<string>, pe?: Maybe<number> };

export type StfmCalendarEarningsFragmentFragment = { __typename?: 'STFMCalendarEarnings', date?: Maybe<string>, symbol?: Maybe<string>, eps?: Maybe<number>, epsEstimated?: Maybe<number>, time?: Maybe<string>, revenue?: Maybe<number>, revenueEstimated?: Maybe<number> };

export type StfmCalendarIpoFragmentFragment = { __typename?: 'STFMCalendarIpo', date?: Maybe<string>, company?: Maybe<string>, symbol?: Maybe<string>, exchange?: Maybe<string>, actions?: Maybe<string>, shares?: Maybe<number>, priceRange?: Maybe<string>, marketCap?: Maybe<number> };

export type StfmCalendarEconomicFragmentFragment = { __typename?: 'STFMCalendarEconomic', event?: Maybe<string>, date?: Maybe<string>, country?: Maybe<string>, actual?: Maybe<number>, previous?: Maybe<number>, change?: Maybe<number>, changePercentage?: Maybe<number>, estimate?: Maybe<number> };

export type StfmEtfHolderFragmentFragment = { __typename?: 'STFMEtfHolder', asset?: Maybe<string>, sharesNumber?: Maybe<number>, weightPercentage?: Maybe<number> };

export type StfmEtfSectorWeightFragmentFragment = { __typename?: 'STFMEtfSectorWeight', sector?: Maybe<string>, weightPercentage?: Maybe<string> };

export type StfmEtfCountryWeightFragmentFragment = { __typename?: 'STFMEtfCountryWeight', country?: Maybe<string>, weightPercentage?: Maybe<string> };

export type StfmSectorPerformanceFragmentFragment = { __typename?: 'STFMSectorPerformance', sector?: Maybe<string>, changesPercentage?: Maybe<string> };

export type StGroupUserFragmentFragment = { __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } };

export type StGroupIdentificationDataFragment = { __typename?: 'STGroupAllData', id: string, name: string, description?: Maybe<string>, imagePath?: Maybe<string>, imageUrl?: Maybe<string>, startDate: string, endDate?: Maybe<string>, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfInvitationSent: number, numberOfInvitationReceived: number, lastUpdateDate: string, lastEditedDate: string, createdDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> }, topMembers: Array<Maybe<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }>>, currentAchievedRanks?: Maybe<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }> };

export type StGroupAllDataFragmentFragment = { __typename?: 'STGroupAllData', id: string, name: string, description?: Maybe<string>, imageUrl?: Maybe<string>, imagePath?: Maybe<string>, lastUpdateDate: string, lastEditedDate: string, createdDate: string, startDate: string, endDate?: Maybe<string>, isPrivate: boolean, isInfinite: boolean, isClosed: boolean, numberOfMembers: number, numberOfInvitationSent: number, numberOfInvitationReceived: number, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> }, lastTransactions: Array<Maybe<{ __typename?: 'STTransaction', transactionId?: Maybe<string>, symbol: string, price: number, return?: Maybe<number>, returnChange?: Maybe<number>, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees?: Maybe<number>, user?: Maybe<{ __typename?: 'STUserIndetification', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string }> }>>, groupMemberData: { __typename?: 'STGroupMemberData', id: string, members: Array<Maybe<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }>>, holdings: Array<Maybe<{ __typename?: 'STGroupHoldings', numberOfUsers: number, holding: { __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number, summary?: Maybe<{ __typename?: 'Summary', avgVolume?: Maybe<number>, ceo?: Maybe<string>, companyName?: Maybe<string>, currency?: Maybe<string>, dividendDate?: Maybe<string>, ePSTTM?: Maybe<number>, earningsDate?: Maybe<string>, exDividendDate?: Maybe<string>, exchangeName?: Maybe<string>, fiveTwoWeekRange?: Maybe<string>, forwardDividendRate?: Maybe<number>, forwardDividendYield?: Maybe<number>, forwardEPS?: Maybe<number>, forwardPE?: Maybe<number>, fullTimeEmployees?: Maybe<string>, id?: Maybe<string>, symbolType?: Maybe<SymbolType>, industry?: Maybe<string>, ipoDate?: Maybe<string>, beta?: Maybe<string>, countryFullName?: Maybe<string>, lastSplitDate?: Maybe<string>, lastSplitFactor?: Maybe<string>, logo_url?: Maybe<string>, longBusinessSummary?: Maybe<string>, marketCap?: Maybe<number>, marketPrice?: Maybe<number>, oneyTargetEst?: Maybe<number>, pERatioTTM?: Maybe<number>, previousClose?: Maybe<number>, recommendationKey?: Maybe<string>, recommendationMean?: Maybe<number>, sandPFiveTwoWeekChange?: Maybe<number>, sector?: Maybe<string>, sharesOutstanding?: Maybe<number>, shortRatio?: Maybe<number>, symbol?: Maybe<string>, targetEstOneyPercent?: Maybe<number>, volume?: Maybe<number>, website?: Maybe<string>, weekRangeFiveTwoMax?: Maybe<number>, weekRangeFiveTwoMin?: Maybe<number>, yearToDatePrice?: Maybe<number>, yearToDatePriceReturn?: Maybe<number>, isActivelyTrading?: Maybe<boolean>, residance?: Maybe<{ __typename?: 'SummaryResidance', city?: Maybe<string>, state?: Maybe<string>, country?: Maybe<string>, addressOne?: Maybe<string>, zip?: Maybe<string> }> }> } }>>, invitationSent: Array<Maybe<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }>>, invitationReceived?: Maybe<Array<Maybe<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }>>> }, currentAchievedRanks?: Maybe<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }>, topTransactions: Array<Maybe<{ __typename?: 'STTransaction', transactionId?: Maybe<string>, symbol: string, price: number, return?: Maybe<number>, returnChange?: Maybe<number>, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees?: Maybe<number>, user?: Maybe<{ __typename?: 'STUserIndetification', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string }> }>>, groupHistoricalData: { __typename?: 'STGroupHistoricalData', portfolioSnapshots: Array<Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>>, transactionSnapshots: Array<Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }>>, bestAchievedRanks: Array<Maybe<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }>>, groupLogs: Array<Maybe<{ __typename?: 'STLog', date: string, logText: string }>> }, managers: Array<Maybe<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }>> };

export type QueryStGroupByGroupIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type QueryStGroupByGroupIdQuery = { __typename?: 'Query', querySTGroupByGroupId?: Maybe<{ __typename?: 'STGroupAllData', id: string, name: string, description?: Maybe<string>, imageUrl?: Maybe<string>, imagePath?: Maybe<string>, lastUpdateDate: string, lastEditedDate: string, createdDate: string, startDate: string, endDate?: Maybe<string>, isPrivate: boolean, isInfinite: boolean, isClosed: boolean, numberOfMembers: number, numberOfInvitationSent: number, numberOfInvitationReceived: number, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> }, lastTransactions: Array<Maybe<{ __typename?: 'STTransaction', transactionId?: Maybe<string>, symbol: string, price: number, return?: Maybe<number>, returnChange?: Maybe<number>, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees?: Maybe<number>, user?: Maybe<{ __typename?: 'STUserIndetification', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string }> }>>, groupMemberData: { __typename?: 'STGroupMemberData', id: string, members: Array<Maybe<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }>>, holdings: Array<Maybe<{ __typename?: 'STGroupHoldings', numberOfUsers: number, holding: { __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number, summary?: Maybe<{ __typename?: 'Summary', avgVolume?: Maybe<number>, ceo?: Maybe<string>, companyName?: Maybe<string>, currency?: Maybe<string>, dividendDate?: Maybe<string>, ePSTTM?: Maybe<number>, earningsDate?: Maybe<string>, exDividendDate?: Maybe<string>, exchangeName?: Maybe<string>, fiveTwoWeekRange?: Maybe<string>, forwardDividendRate?: Maybe<number>, forwardDividendYield?: Maybe<number>, forwardEPS?: Maybe<number>, forwardPE?: Maybe<number>, fullTimeEmployees?: Maybe<string>, id?: Maybe<string>, symbolType?: Maybe<SymbolType>, industry?: Maybe<string>, ipoDate?: Maybe<string>, beta?: Maybe<string>, countryFullName?: Maybe<string>, lastSplitDate?: Maybe<string>, lastSplitFactor?: Maybe<string>, logo_url?: Maybe<string>, longBusinessSummary?: Maybe<string>, marketCap?: Maybe<number>, marketPrice?: Maybe<number>, oneyTargetEst?: Maybe<number>, pERatioTTM?: Maybe<number>, previousClose?: Maybe<number>, recommendationKey?: Maybe<string>, recommendationMean?: Maybe<number>, sandPFiveTwoWeekChange?: Maybe<number>, sector?: Maybe<string>, sharesOutstanding?: Maybe<number>, shortRatio?: Maybe<number>, symbol?: Maybe<string>, targetEstOneyPercent?: Maybe<number>, volume?: Maybe<number>, website?: Maybe<string>, weekRangeFiveTwoMax?: Maybe<number>, weekRangeFiveTwoMin?: Maybe<number>, yearToDatePrice?: Maybe<number>, yearToDatePriceReturn?: Maybe<number>, isActivelyTrading?: Maybe<boolean>, residance?: Maybe<{ __typename?: 'SummaryResidance', city?: Maybe<string>, state?: Maybe<string>, country?: Maybe<string>, addressOne?: Maybe<string>, zip?: Maybe<string> }> }> } }>>, invitationSent: Array<Maybe<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }>>, invitationReceived?: Maybe<Array<Maybe<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }>>> }, currentAchievedRanks?: Maybe<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }>, topTransactions: Array<Maybe<{ __typename?: 'STTransaction', transactionId?: Maybe<string>, symbol: string, price: number, return?: Maybe<number>, returnChange?: Maybe<number>, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees?: Maybe<number>, user?: Maybe<{ __typename?: 'STUserIndetification', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string }> }>>, groupHistoricalData: { __typename?: 'STGroupHistoricalData', portfolioSnapshots: Array<Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>>, transactionSnapshots: Array<Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }>>, bestAchievedRanks: Array<Maybe<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }>>, groupLogs: Array<Maybe<{ __typename?: 'STLog', date: string, logText: string }>> }, managers: Array<Maybe<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }>> }> };

export type QueryStGroupByGroupNameQueryVariables = Exact<{
  groupName: Scalars['String'];
}>;


export type QueryStGroupByGroupNameQuery = { __typename?: 'Query', querySTGroupByGroupName: Array<Maybe<{ __typename?: 'STGroupAllData', id: string, name: string, description?: Maybe<string>, imagePath?: Maybe<string>, imageUrl?: Maybe<string>, startDate: string, endDate?: Maybe<string>, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfInvitationSent: number, numberOfInvitationReceived: number, lastUpdateDate: string, lastEditedDate: string, createdDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> }, topMembers: Array<Maybe<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }>>, currentAchievedRanks?: Maybe<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }> }>> };

export type CreateGroupMutationVariables = Exact<{
  groupInput: StGroupAllDataInput;
}>;


export type CreateGroupMutation = { __typename?: 'Mutation', createGroup?: Maybe<{ __typename?: 'STGroupAllData', id: string, name: string, description?: Maybe<string>, imagePath?: Maybe<string>, imageUrl?: Maybe<string>, startDate: string, endDate?: Maybe<string>, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfInvitationSent: number, numberOfInvitationReceived: number, lastUpdateDate: string, lastEditedDate: string, createdDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> }, topMembers: Array<Maybe<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }>>, currentAchievedRanks?: Maybe<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }> }> };

export type EditGroupMutationVariables = Exact<{
  groupInput: StGroupAllDataInput;
}>;


export type EditGroupMutation = { __typename?: 'Mutation', editGroup?: Maybe<boolean> };

export type DeleteGroupMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteGroupMutation = { __typename?: 'Mutation', deleteGroup?: Maybe<boolean> };

export type ToggleInvitationRequestToGroupMutationVariables = Exact<{
  id: Scalars['String'];
  sendInvitation: Scalars['Boolean'];
}>;


export type ToggleInvitationRequestToGroupMutation = { __typename?: 'Mutation', toggleInvitationRequestToGroup?: Maybe<{ __typename?: 'STGroupAllData', id: string, name: string, description?: Maybe<string>, imagePath?: Maybe<string>, imageUrl?: Maybe<string>, startDate: string, endDate?: Maybe<string>, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfInvitationSent: number, numberOfInvitationReceived: number, lastUpdateDate: string, lastEditedDate: string, createdDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> }, topMembers: Array<Maybe<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }>>, currentAchievedRanks?: Maybe<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }> }> };

export type AnswerReceivedGroupInvitationMutationVariables = Exact<{
  id: Scalars['String'];
  accept: Scalars['Boolean'];
}>;


export type AnswerReceivedGroupInvitationMutation = { __typename?: 'Mutation', answerReceivedGroupInvitation?: Maybe<{ __typename?: 'STGroupAllData', id: string, name: string, description?: Maybe<string>, imagePath?: Maybe<string>, imageUrl?: Maybe<string>, startDate: string, endDate?: Maybe<string>, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfInvitationSent: number, numberOfInvitationReceived: number, lastUpdateDate: string, lastEditedDate: string, createdDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> }, topMembers: Array<Maybe<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }>>, currentAchievedRanks?: Maybe<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }> }> };

export type LeaveGroupMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type LeaveGroupMutation = { __typename?: 'Mutation', leaveGroup?: Maybe<boolean> };

export type RemoveMemberFromGroupMutationVariables = Exact<{
  groupId: Scalars['String'];
  removingUserId: Scalars['String'];
}>;


export type RemoveMemberFromGroupMutation = { __typename?: 'Mutation', removeMemberFromGroup?: Maybe<boolean> };

export type ToggleInviteUserIntoGroupMutationVariables = Exact<{
  inviteUser: Scalars['Boolean'];
  userId: Scalars['String'];
  groupId: Scalars['String'];
}>;


export type ToggleInviteUserIntoGroupMutation = { __typename?: 'Mutation', toggleInviteUserIntoGroup?: Maybe<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }> };

export type ToggleUsersInvitationRequestToGroupMutationVariables = Exact<{
  acceptUser: Scalars['Boolean'];
  userId: Scalars['String'];
  groupId: Scalars['String'];
}>;


export type ToggleUsersInvitationRequestToGroupMutation = { __typename?: 'Mutation', toggleUsersInvitationRequestToGroup?: Maybe<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }> };

export type StMarketChartDataResultCombinedFragmentFragment = { __typename?: 'STMarketChartDataResultCombined', currentDate?: Maybe<string>, currentValue?: Maybe<number>, data?: Maybe<Array<Maybe<Array<Maybe<number>>>>>, documentKey?: Maybe<string>, name?: Maybe<string>, parentName?: Maybe<string>, lastUpdate?: Maybe<string> };

export type StMarketTopTableCryptoDataFragmentFragment = { __typename?: 'STMarketTopTableCryptoData', circulatingSupply?: Maybe<number>, coinImageUrl?: Maybe<string>, currency?: Maybe<string>, fiftyTwoWeekHigh?: Maybe<number>, fiftyTwoWeekLow?: Maybe<number>, marketCap?: Maybe<number>, quoteType?: Maybe<string>, regularMarketChange?: Maybe<number>, regularMarketChangePercent?: Maybe<number>, regularMarketClosed?: Maybe<number>, regularMarketOpen?: Maybe<number>, regularMarketPrice?: Maybe<number>, regularMarketVolume?: Maybe<number>, shortName?: Maybe<string>, symbol?: Maybe<string>, volume24Hr?: Maybe<number>, volumeAllCurrencies?: Maybe<number> };

export type QueryStMarketHistoryOverviewQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryStMarketHistoryOverviewQuery = { __typename?: 'Query', querySTMarketHistoryOverview?: Maybe<{ __typename?: 'STMarketOverviewPartialData', lastUpdate?: Maybe<string>, sp500?: Maybe<Array<Maybe<{ __typename?: 'STMarketChartDataResultCombined', currentDate?: Maybe<string>, currentValue?: Maybe<number>, data?: Maybe<Array<Maybe<Array<Maybe<number>>>>>, documentKey?: Maybe<string>, name?: Maybe<string>, parentName?: Maybe<string>, lastUpdate?: Maybe<string> }>>>, bonds?: Maybe<Array<Maybe<{ __typename?: 'STMarketChartDataResultCombined', currentDate?: Maybe<string>, currentValue?: Maybe<number>, data?: Maybe<Array<Maybe<Array<Maybe<number>>>>>, documentKey?: Maybe<string>, name?: Maybe<string>, parentName?: Maybe<string>, lastUpdate?: Maybe<string> }>>>, inflation_rate?: Maybe<Array<Maybe<{ __typename?: 'STMarketChartDataResultCombined', currentDate?: Maybe<string>, currentValue?: Maybe<number>, data?: Maybe<Array<Maybe<Array<Maybe<number>>>>>, documentKey?: Maybe<string>, name?: Maybe<string>, parentName?: Maybe<string>, lastUpdate?: Maybe<string> }>>>, misery_index?: Maybe<Array<Maybe<{ __typename?: 'STMarketChartDataResultCombined', currentDate?: Maybe<string>, currentValue?: Maybe<number>, data?: Maybe<Array<Maybe<Array<Maybe<number>>>>>, documentKey?: Maybe<string>, name?: Maybe<string>, parentName?: Maybe<string>, lastUpdate?: Maybe<string> }>>>, treasury_yield?: Maybe<Array<Maybe<{ __typename?: 'STMarketChartDataResultCombined', currentDate?: Maybe<string>, currentValue?: Maybe<number>, data?: Maybe<Array<Maybe<Array<Maybe<number>>>>>, documentKey?: Maybe<string>, name?: Maybe<string>, parentName?: Maybe<string>, lastUpdate?: Maybe<string> }>>>, investor_sentiment?: Maybe<Array<Maybe<{ __typename?: 'STMarketChartDataResultCombined', currentDate?: Maybe<string>, currentValue?: Maybe<number>, data?: Maybe<Array<Maybe<Array<Maybe<number>>>>>, documentKey?: Maybe<string>, name?: Maybe<string>, parentName?: Maybe<string>, lastUpdate?: Maybe<string> }>>>, bitcoin?: Maybe<Array<Maybe<{ __typename?: 'STMarketChartDataResultCombined', currentDate?: Maybe<string>, currentValue?: Maybe<number>, data?: Maybe<Array<Maybe<Array<Maybe<number>>>>>, documentKey?: Maybe<string>, name?: Maybe<string>, parentName?: Maybe<string>, lastUpdate?: Maybe<string> }>>> }> };

export type QuerySymbolHistoricalPricesQueryVariables = Exact<{
  symbol: Scalars['String'];
  period: Scalars['String'];
}>;


export type QuerySymbolHistoricalPricesQuery = { __typename?: 'Query', querySymbolHistoricalPrices?: Maybe<{ __typename?: 'SymbolHistoricalPrices', livePrice?: Maybe<number>, symbol?: Maybe<string>, period?: Maybe<string>, price?: Maybe<Array<Maybe<Array<Maybe<number>>>>>, volume?: Maybe<Array<Maybe<Array<Maybe<number>>>>> }> };

export type QueryMarketDailyOverviewQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryMarketDailyOverviewQuery = { __typename?: 'Query', queryMarketDailyOverview?: Maybe<{ __typename?: 'STMarketDailyOverview', id?: Maybe<string>, lastUpdate?: Maybe<string>, lastUpdateTopStocks?: Maybe<string>, dailyGainers?: Maybe<Array<Maybe<{ __typename?: 'STFMCompanyQuote', avgVolume?: Maybe<number>, change?: Maybe<number>, changesPercentage?: Maybe<number>, dayHigh?: Maybe<number>, dayLow?: Maybe<number>, earningsAnnouncement?: Maybe<string>, eps?: Maybe<number>, exchange?: Maybe<string>, marketCap?: Maybe<number>, name?: Maybe<string>, open?: Maybe<number>, pe?: Maybe<number>, previousClose?: Maybe<number>, price?: Maybe<number>, priceAvg200?: Maybe<number>, priceAvg50?: Maybe<number>, sharesOutstanding?: Maybe<number>, symbol?: Maybe<string>, timestamp?: Maybe<number>, volume?: Maybe<number>, yearHigh?: Maybe<number>, yearLow?: Maybe<number>, image?: Maybe<string> }>>>, dailyLosers?: Maybe<Array<Maybe<{ __typename?: 'STFMCompanyQuote', avgVolume?: Maybe<number>, change?: Maybe<number>, changesPercentage?: Maybe<number>, dayHigh?: Maybe<number>, dayLow?: Maybe<number>, earningsAnnouncement?: Maybe<string>, eps?: Maybe<number>, exchange?: Maybe<string>, marketCap?: Maybe<number>, name?: Maybe<string>, open?: Maybe<number>, pe?: Maybe<number>, previousClose?: Maybe<number>, price?: Maybe<number>, priceAvg200?: Maybe<number>, priceAvg50?: Maybe<number>, sharesOutstanding?: Maybe<number>, symbol?: Maybe<string>, timestamp?: Maybe<number>, volume?: Maybe<number>, yearHigh?: Maybe<number>, yearLow?: Maybe<number>, image?: Maybe<string> }>>>, mostActive?: Maybe<Array<Maybe<{ __typename?: 'STFMCompanyQuote', avgVolume?: Maybe<number>, change?: Maybe<number>, changesPercentage?: Maybe<number>, dayHigh?: Maybe<number>, dayLow?: Maybe<number>, earningsAnnouncement?: Maybe<string>, eps?: Maybe<number>, exchange?: Maybe<string>, marketCap?: Maybe<number>, name?: Maybe<string>, open?: Maybe<number>, pe?: Maybe<number>, previousClose?: Maybe<number>, price?: Maybe<number>, priceAvg200?: Maybe<number>, priceAvg50?: Maybe<number>, sharesOutstanding?: Maybe<number>, symbol?: Maybe<string>, timestamp?: Maybe<number>, volume?: Maybe<number>, yearHigh?: Maybe<number>, yearLow?: Maybe<number>, image?: Maybe<string> }>>>, stockSuggestions?: Maybe<Array<Maybe<{ __typename?: 'STStockSuggestion', historicalData?: Maybe<Array<Maybe<number>>>, summary?: Maybe<{ __typename?: 'Summary', avgVolume?: Maybe<number>, ceo?: Maybe<string>, companyName?: Maybe<string>, currency?: Maybe<string>, dividendDate?: Maybe<string>, ePSTTM?: Maybe<number>, earningsDate?: Maybe<string>, exDividendDate?: Maybe<string>, exchangeName?: Maybe<string>, fiveTwoWeekRange?: Maybe<string>, forwardDividendRate?: Maybe<number>, forwardDividendYield?: Maybe<number>, forwardEPS?: Maybe<number>, forwardPE?: Maybe<number>, fullTimeEmployees?: Maybe<string>, id?: Maybe<string>, symbolType?: Maybe<SymbolType>, industry?: Maybe<string>, ipoDate?: Maybe<string>, beta?: Maybe<string>, countryFullName?: Maybe<string>, lastSplitDate?: Maybe<string>, lastSplitFactor?: Maybe<string>, logo_url?: Maybe<string>, longBusinessSummary?: Maybe<string>, marketCap?: Maybe<number>, marketPrice?: Maybe<number>, oneyTargetEst?: Maybe<number>, pERatioTTM?: Maybe<number>, previousClose?: Maybe<number>, recommendationKey?: Maybe<string>, recommendationMean?: Maybe<number>, sandPFiveTwoWeekChange?: Maybe<number>, sector?: Maybe<string>, sharesOutstanding?: Maybe<number>, shortRatio?: Maybe<number>, symbol?: Maybe<string>, targetEstOneyPercent?: Maybe<number>, volume?: Maybe<number>, website?: Maybe<string>, weekRangeFiveTwoMax?: Maybe<number>, weekRangeFiveTwoMin?: Maybe<number>, yearToDatePrice?: Maybe<number>, yearToDatePriceReturn?: Maybe<number>, isActivelyTrading?: Maybe<boolean>, residance?: Maybe<{ __typename?: 'SummaryResidance', city?: Maybe<string>, state?: Maybe<string>, country?: Maybe<string>, addressOne?: Maybe<string>, zip?: Maybe<string> }> }> }>>>, topCrypto?: Maybe<Array<Maybe<{ __typename?: 'STMarketTopTableCryptoData', circulatingSupply?: Maybe<number>, coinImageUrl?: Maybe<string>, currency?: Maybe<string>, fiftyTwoWeekHigh?: Maybe<number>, fiftyTwoWeekLow?: Maybe<number>, marketCap?: Maybe<number>, quoteType?: Maybe<string>, regularMarketChange?: Maybe<number>, regularMarketChangePercent?: Maybe<number>, regularMarketClosed?: Maybe<number>, regularMarketOpen?: Maybe<number>, regularMarketPrice?: Maybe<number>, regularMarketVolume?: Maybe<number>, shortName?: Maybe<string>, symbol?: Maybe<string>, volume24Hr?: Maybe<number>, volumeAllCurrencies?: Maybe<number> }>>>, news?: Maybe<Array<Maybe<{ __typename?: 'STFMStockNew', image?: Maybe<string>, publishedDate?: Maybe<string>, site?: Maybe<string>, symbol?: Maybe<string>, text?: Maybe<string>, title?: Maybe<string>, url?: Maybe<string> }>>>, calendar?: Maybe<{ __typename?: 'STMarketCalendar', calendarEconomic?: Maybe<Array<Maybe<{ __typename?: 'STFMCalendarEconomic', event?: Maybe<string>, date?: Maybe<string>, country?: Maybe<string>, actual?: Maybe<number>, previous?: Maybe<number>, change?: Maybe<number>, changePercentage?: Maybe<number>, estimate?: Maybe<number> }>>>, calendarDividend?: Maybe<Array<Maybe<{ __typename?: 'STFMStockDividend', adjDividend?: Maybe<number>, date?: Maybe<string>, declarationDate?: Maybe<string>, dividend?: Maybe<number>, label?: Maybe<string>, paymentDate?: Maybe<string>, recordDate?: Maybe<string>, symbol?: Maybe<string> }>>>, calendarSplit?: Maybe<Array<Maybe<{ __typename?: 'STFMSplitHistory', date?: Maybe<string>, denominator?: Maybe<number>, label?: Maybe<string>, numerator?: Maybe<number>, symbol?: Maybe<string> }>>>, calendarIpo?: Maybe<Array<Maybe<{ __typename?: 'STFMCalendarIpo', date?: Maybe<string>, company?: Maybe<string>, symbol?: Maybe<string>, exchange?: Maybe<string>, actions?: Maybe<string>, shares?: Maybe<number>, priceRange?: Maybe<string>, marketCap?: Maybe<number> }>>>, calendarEarnings?: Maybe<Array<Maybe<{ __typename?: 'STFMCalendarEarnings', date?: Maybe<string>, symbol?: Maybe<string>, eps?: Maybe<number>, epsEstimated?: Maybe<number>, time?: Maybe<string>, revenue?: Maybe<number>, revenueEstimated?: Maybe<number> }>>> }>, mutulaFunds?: Maybe<Array<Maybe<{ __typename?: 'STFMCompanyQuote', avgVolume?: Maybe<number>, change?: Maybe<number>, changesPercentage?: Maybe<number>, dayHigh?: Maybe<number>, dayLow?: Maybe<number>, earningsAnnouncement?: Maybe<string>, eps?: Maybe<number>, exchange?: Maybe<string>, marketCap?: Maybe<number>, name?: Maybe<string>, open?: Maybe<number>, pe?: Maybe<number>, previousClose?: Maybe<number>, price?: Maybe<number>, priceAvg200?: Maybe<number>, priceAvg50?: Maybe<number>, sharesOutstanding?: Maybe<number>, symbol?: Maybe<string>, timestamp?: Maybe<number>, volume?: Maybe<number>, yearHigh?: Maybe<number>, yearLow?: Maybe<number>, image?: Maybe<string> }>>>, etfs?: Maybe<Array<Maybe<{ __typename?: 'STFMCompanyQuote', avgVolume?: Maybe<number>, change?: Maybe<number>, changesPercentage?: Maybe<number>, dayHigh?: Maybe<number>, dayLow?: Maybe<number>, earningsAnnouncement?: Maybe<string>, eps?: Maybe<number>, exchange?: Maybe<string>, marketCap?: Maybe<number>, name?: Maybe<string>, open?: Maybe<number>, pe?: Maybe<number>, previousClose?: Maybe<number>, price?: Maybe<number>, priceAvg200?: Maybe<number>, priceAvg50?: Maybe<number>, sharesOutstanding?: Maybe<number>, symbol?: Maybe<string>, timestamp?: Maybe<number>, volume?: Maybe<number>, yearHigh?: Maybe<number>, yearLow?: Maybe<number>, image?: Maybe<string> }>>>, commodities?: Maybe<Array<Maybe<{ __typename?: 'STFMCompanyQuote', avgVolume?: Maybe<number>, change?: Maybe<number>, changesPercentage?: Maybe<number>, dayHigh?: Maybe<number>, dayLow?: Maybe<number>, earningsAnnouncement?: Maybe<string>, eps?: Maybe<number>, exchange?: Maybe<string>, marketCap?: Maybe<number>, name?: Maybe<string>, open?: Maybe<number>, pe?: Maybe<number>, previousClose?: Maybe<number>, price?: Maybe<number>, priceAvg200?: Maybe<number>, priceAvg50?: Maybe<number>, sharesOutstanding?: Maybe<number>, symbol?: Maybe<string>, timestamp?: Maybe<number>, volume?: Maybe<number>, yearHigh?: Maybe<number>, yearLow?: Maybe<number>, image?: Maybe<string> }>>>, exchange?: Maybe<{ __typename?: 'STMarketExchange', id?: Maybe<string>, exchangeIndustryPE?: Maybe<Array<Maybe<{ __typename?: 'STFMExchangeIndustryPE', date?: Maybe<string>, industry?: Maybe<string>, exchange?: Maybe<string>, pe?: Maybe<number> }>>>, exchangeSectorPE?: Maybe<Array<Maybe<{ __typename?: 'STFMExchangeSectorPE', date?: Maybe<string>, sector?: Maybe<string>, exchange?: Maybe<string>, pe?: Maybe<number> }>>> }>, sectorPerformance?: Maybe<Array<Maybe<{ __typename?: 'STFMSectorPerformance', sector?: Maybe<string>, changesPercentage?: Maybe<string> }>>>, stockScreener?: Maybe<Array<Maybe<{ __typename?: 'STFMStockScreenerResult', symbol?: Maybe<string>, companyName?: Maybe<string>, marketCap?: Maybe<number>, sector?: Maybe<string>, industry?: Maybe<string>, beta?: Maybe<number>, price?: Maybe<number>, lastAnnualDividend?: Maybe<number>, volume?: Maybe<number>, exchange?: Maybe<string>, exchangeShortName?: Maybe<string>, country?: Maybe<string>, isEtf?: Maybe<boolean>, isActivelyTrading?: Maybe<boolean>, companyQuote?: Maybe<{ __typename?: 'STFMCompanyQuote', avgVolume?: Maybe<number>, change?: Maybe<number>, changesPercentage?: Maybe<number>, dayHigh?: Maybe<number>, dayLow?: Maybe<number>, earningsAnnouncement?: Maybe<string>, eps?: Maybe<number>, exchange?: Maybe<string>, marketCap?: Maybe<number>, name?: Maybe<string>, open?: Maybe<number>, pe?: Maybe<number>, previousClose?: Maybe<number>, price?: Maybe<number>, priceAvg200?: Maybe<number>, priceAvg50?: Maybe<number>, sharesOutstanding?: Maybe<number>, symbol?: Maybe<string>, timestamp?: Maybe<number>, volume?: Maybe<number>, yearHigh?: Maybe<number>, yearLow?: Maybe<number>, image?: Maybe<string> }> }>>> }> };

export type QueryEtfDocumentQueryVariables = Exact<{
  etfName: Scalars['String'];
}>;


export type QueryEtfDocumentQuery = { __typename?: 'Query', queryEtfDocument?: Maybe<{ __typename?: 'STMarketEtfDocument', id?: Maybe<string>, lastUpdate?: Maybe<string>, etfHolders?: Maybe<Array<Maybe<{ __typename?: 'STFMEtfHolder', asset?: Maybe<string>, sharesNumber?: Maybe<number>, weightPercentage?: Maybe<number> }>>>, etfSectorWeight?: Maybe<Array<Maybe<{ __typename?: 'STFMEtfSectorWeight', sector?: Maybe<string>, weightPercentage?: Maybe<string> }>>>, etfCountryWeight?: Maybe<Array<Maybe<{ __typename?: 'STFMEtfCountryWeight', country?: Maybe<string>, weightPercentage?: Maybe<string> }>>> }> };

export type QueryStMarketAllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryStMarketAllCategoriesQuery = { __typename?: 'Query', queryStMarketAllCategories?: Maybe<{ __typename?: 'STMarketDatasetKeyCategories', categories: Array<Maybe<{ __typename?: 'STMarketDatasetKeyCategory', name: string, data: Array<Maybe<{ __typename?: 'STMarketDatasetKey', documentKey: string, name: string }>> }>> }> };

export type QueryStMarketDataQueryVariables = Exact<{
  key: Scalars['String'];
}>;


export type QueryStMarketDataQuery = { __typename?: 'Query', queryStMarketData?: Maybe<{ __typename?: 'STMarketChartDataResultCombined', currentDate?: Maybe<string>, currentValue?: Maybe<number>, data?: Maybe<Array<Maybe<Array<Maybe<number>>>>>, documentKey?: Maybe<string>, name?: Maybe<string>, parentName?: Maybe<string>, lastUpdate?: Maybe<string> }> };

export type QueryStockScreenerQueryVariables = Exact<{
  stockScreenerInput: StfmStockScreenerInput;
  offset: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type QueryStockScreenerQuery = { __typename?: 'Query', queryStockScreener?: Maybe<{ __typename?: 'STFMStockScreenerResultWrapper', found?: Maybe<number>, offset?: Maybe<number>, limit?: Maybe<number>, result?: Maybe<Array<Maybe<{ __typename?: 'STFMStockScreenerResult', symbol?: Maybe<string>, companyName?: Maybe<string>, marketCap?: Maybe<number>, sector?: Maybe<string>, industry?: Maybe<string>, beta?: Maybe<number>, price?: Maybe<number>, lastAnnualDividend?: Maybe<number>, volume?: Maybe<number>, exchange?: Maybe<string>, exchangeShortName?: Maybe<string>, country?: Maybe<string>, isEtf?: Maybe<boolean>, isActivelyTrading?: Maybe<boolean>, companyQuote?: Maybe<{ __typename?: 'STFMCompanyQuote', avgVolume?: Maybe<number>, change?: Maybe<number>, changesPercentage?: Maybe<number>, dayHigh?: Maybe<number>, dayLow?: Maybe<number>, earningsAnnouncement?: Maybe<string>, eps?: Maybe<number>, exchange?: Maybe<string>, marketCap?: Maybe<number>, name?: Maybe<string>, open?: Maybe<number>, pe?: Maybe<number>, previousClose?: Maybe<number>, price?: Maybe<number>, priceAvg200?: Maybe<number>, priceAvg50?: Maybe<number>, sharesOutstanding?: Maybe<number>, symbol?: Maybe<string>, timestamp?: Maybe<number>, volume?: Maybe<number>, yearHigh?: Maybe<number>, yearLow?: Maybe<number>, image?: Maybe<string> }> }>>> }> };

export type StPortfolioFragmentFragment = { __typename?: 'STPortfolio', portfolioInvested: number, portfolioCash: number };

export type StPortfolioSnapshotFragmentFragment = { __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string };

export type StPortfolioWrapperFragmentFragment = { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> };

export type StPortfolioSnapshotStartedFragmentFragment = { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> };

export type StRankFragmentFragment = { __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string };

export type StLogsFragmentFragment = { __typename?: 'STLog', date: string, logText: string };

export type SummaryResidanceFragmentFragment = { __typename?: 'SummaryResidance', city?: Maybe<string>, state?: Maybe<string>, country?: Maybe<string>, addressOne?: Maybe<string>, zip?: Maybe<string> };

export type StockSummaryFragmentFragment = { __typename?: 'Summary', avgVolume?: Maybe<number>, ceo?: Maybe<string>, companyName?: Maybe<string>, currency?: Maybe<string>, dividendDate?: Maybe<string>, ePSTTM?: Maybe<number>, earningsDate?: Maybe<string>, exDividendDate?: Maybe<string>, exchangeName?: Maybe<string>, fiveTwoWeekRange?: Maybe<string>, forwardDividendRate?: Maybe<number>, forwardDividendYield?: Maybe<number>, forwardEPS?: Maybe<number>, forwardPE?: Maybe<number>, fullTimeEmployees?: Maybe<string>, id?: Maybe<string>, symbolType?: Maybe<SymbolType>, industry?: Maybe<string>, ipoDate?: Maybe<string>, beta?: Maybe<string>, countryFullName?: Maybe<string>, lastSplitDate?: Maybe<string>, lastSplitFactor?: Maybe<string>, logo_url?: Maybe<string>, longBusinessSummary?: Maybe<string>, marketCap?: Maybe<number>, marketPrice?: Maybe<number>, oneyTargetEst?: Maybe<number>, pERatioTTM?: Maybe<number>, previousClose?: Maybe<number>, recommendationKey?: Maybe<string>, recommendationMean?: Maybe<number>, sandPFiveTwoWeekChange?: Maybe<number>, sector?: Maybe<string>, sharesOutstanding?: Maybe<number>, shortRatio?: Maybe<number>, symbol?: Maybe<string>, targetEstOneyPercent?: Maybe<number>, volume?: Maybe<number>, website?: Maybe<string>, weekRangeFiveTwoMax?: Maybe<number>, weekRangeFiveTwoMin?: Maybe<number>, yearToDatePrice?: Maybe<number>, yearToDatePriceReturn?: Maybe<number>, isActivelyTrading?: Maybe<boolean>, residance?: Maybe<{ __typename?: 'SummaryResidance', city?: Maybe<string>, state?: Maybe<string>, country?: Maybe<string>, addressOne?: Maybe<string>, zip?: Maybe<string> }> };

export type FinancialReportStatementDataFragmentFragment = { __typename?: 'FinancialReportStatementData', concept?: Maybe<string>, label?: Maybe<string>, unit?: Maybe<string>, value?: Maybe<number> };

export type FinancialReportFragmentFragment = { __typename?: 'FinancialReport', acceptedDate?: Maybe<string>, accessNumber?: Maybe<string>, cik?: Maybe<string>, endDate?: Maybe<string>, filedDate?: Maybe<string>, form?: Maybe<string>, quarter?: Maybe<number>, startDate?: Maybe<string>, symbol?: Maybe<string>, year?: Maybe<number>, report?: Maybe<{ __typename?: 'FinancialReportStatement', bs?: Maybe<Array<Maybe<{ __typename?: 'FinancialReportStatementData', concept?: Maybe<string>, label?: Maybe<string>, unit?: Maybe<string>, value?: Maybe<number> }>>>, cf?: Maybe<Array<Maybe<{ __typename?: 'FinancialReportStatementData', concept?: Maybe<string>, label?: Maybe<string>, unit?: Maybe<string>, value?: Maybe<number> }>>>, ic?: Maybe<Array<Maybe<{ __typename?: 'FinancialReportStatementData', concept?: Maybe<string>, label?: Maybe<string>, unit?: Maybe<string>, value?: Maybe<number> }>>> }> };

export type RecommendationFragmentFragment = { __typename?: 'Recommendations', buy?: Maybe<number>, hold?: Maybe<number>, period?: Maybe<string>, sell?: Maybe<number>, strongBuy?: Maybe<number>, strongSell?: Maybe<number>, symbol?: Maybe<string> };

export type NewsArticleFragmentFragment = { __typename?: 'NewsArticle', datetime?: Maybe<number>, headline?: Maybe<string>, image?: Maybe<string>, sourceName?: Maybe<string>, summary?: Maybe<string>, url?: Maybe<string> };

export type CalculationFragmentFragment = { __typename?: 'Calculation', avg?: Maybe<number>, max?: Maybe<number>, min?: Maybe<number> };

export type EsgScoreFragmentFragment = { __typename?: 'EsgScores', totalEsg?: Maybe<number>, environmentScore?: Maybe<number>, governanceScore?: Maybe<number>, highestControversy?: Maybe<number>, esgPerformance?: Maybe<string>, socialScore?: Maybe<number>, peerCount?: Maybe<number>, percentile?: Maybe<number>, peerGroup?: Maybe<string>, relatedControversy?: Maybe<Array<Maybe<string>>>, peerEnvironmentPerformance?: Maybe<{ __typename?: 'Calculation', avg?: Maybe<number>, max?: Maybe<number>, min?: Maybe<number> }>, peerEsgScorePerformance?: Maybe<{ __typename?: 'Calculation', avg?: Maybe<number>, max?: Maybe<number>, min?: Maybe<number> }>, peerGovernancePerformance?: Maybe<{ __typename?: 'Calculation', avg?: Maybe<number>, max?: Maybe<number>, min?: Maybe<number> }>, peerHighestControversyPerformance?: Maybe<{ __typename?: 'Calculation', avg?: Maybe<number>, max?: Maybe<number>, min?: Maybe<number> }>, peerSocialPerformance?: Maybe<{ __typename?: 'Calculation', avg?: Maybe<number>, max?: Maybe<number>, min?: Maybe<number> }> };

export type DefaultKeyStatisticsFragmentFragment = { __typename?: 'DefaultKeyStatistics', bookValue?: Maybe<number>, dateShortInterest?: Maybe<number>, earningsQuarterlyGrowth?: Maybe<number>, enterpriseToEbitda?: Maybe<number>, enterpriseToRevenue?: Maybe<number>, enterpriseValue?: Maybe<number>, fiveYearAverageReturn?: Maybe<number>, floatShares?: Maybe<number>, forwardEps?: Maybe<number>, forwardPE?: Maybe<number>, heldPercentInsiders?: Maybe<number>, heldPercentInstitutions?: Maybe<number>, lastFiscalYearEnd?: Maybe<number>, lastSplitDate?: Maybe<number>, lastSplitFactor?: Maybe<string>, mostRecentQuarter?: Maybe<number>, netIncomeToCommon?: Maybe<number>, nextFiscalYearEnd?: Maybe<number>, pegRatio?: Maybe<number>, priceHint?: Maybe<number>, priceToBook?: Maybe<number>, profitMargins?: Maybe<number>, sharesOutstanding?: Maybe<number>, sharesPercentSharesOut?: Maybe<number>, sharesShort?: Maybe<number>, sharesShortPreviousMonthDate?: Maybe<number>, sharesShortPriorMonth?: Maybe<number>, shortPercentOfFloat?: Maybe<number>, shortRatio?: Maybe<number>, trailingEps?: Maybe<number> };

export type FinancialDataFragmentFragment = { __typename?: 'FinancialData', currentPrice?: Maybe<number>, currentRatio?: Maybe<number>, debtToEquity?: Maybe<number>, earningsGrowth?: Maybe<number>, ebitda?: Maybe<number>, ebitdaMargins?: Maybe<number>, financialCurrency?: Maybe<string>, freeCashflow?: Maybe<number>, grossMargins?: Maybe<number>, grossProfits?: Maybe<number>, numberOfAnalystOpinions?: Maybe<number>, operatingCashflow?: Maybe<number>, operatingMargins?: Maybe<number>, profitMargins?: Maybe<number>, quickRatio?: Maybe<number>, recommendationKey?: Maybe<string>, recommendationMean?: Maybe<number>, returnOnAssets?: Maybe<number>, returnOnEquity?: Maybe<number>, revenueGrowth?: Maybe<number>, revenuePerShare?: Maybe<number>, targetHighPrice?: Maybe<number>, targetLowPrice?: Maybe<number>, targetMeanPrice?: Maybe<number>, targetMedianPrice?: Maybe<number>, totalCash?: Maybe<number>, totalCashPerShare?: Maybe<number>, totalDebt?: Maybe<number>, totalRevenue?: Maybe<number> };

export type MetricFragmentFragment = { __typename?: 'Metric', fiveDayPriceReturnDaily?: Maybe<number>, fiveTwoWeekHigh?: Maybe<number>, fiveTwoWeekHighDate?: Maybe<string>, fiveTwoWeekLow?: Maybe<number>, fiveTwoWeekLowDate?: Maybe<string>, fiveTwoWeekPriceReturnDaily?: Maybe<number>, oneDayAverageTradingVolume?: Maybe<number>, oneThreeWeekPriceReturnDaily?: Maybe<number>, threeMonthAverageTradingVolume?: Maybe<number>, twoSixWeekPriceReturnDaily?: Maybe<number>, assetTurnoverAnnual?: Maybe<number>, assetTurnoverTTM?: Maybe<number>, beta?: Maybe<number>, bookValuePerShareAnnual?: Maybe<number>, bookValuePerShareQuarterly?: Maybe<number>, bookValueShareGrowthFiveY?: Maybe<number>, capitalSpendingGrowthFiveY?: Maybe<number>, cashFlowPerShareAnnual?: Maybe<number>, cashFlowPerShareTTM?: Maybe<number>, cashPerSharePerShareAnnual?: Maybe<number>, cashPerSharePerShareQuarterly?: Maybe<number>, currentEvfreeCashFlowAnnual?: Maybe<number>, currentEvfreeCashFlowTTM?: Maybe<number>, currentRatioAnnual?: Maybe<number>, currentRatioQuarterly?: Maybe<number>, ebitdPerShareTTM?: Maybe<number>, ebitdaCagrFiveY?: Maybe<number>, ebitdaInterimCagrFiveY?: Maybe<number>, epsBasicExclExtraItemsAnnual?: Maybe<number>, epsBasicExclExtraItemsTTM?: Maybe<number>, epsExclExtraItemsAnnual?: Maybe<number>, epsExclExtraItemsTTM?: Maybe<number>, epsGrowthFiveY?: Maybe<number>, epsGrowthQuarterlyYoy?: Maybe<number>, epsGrowthTTMYoy?: Maybe<number>, epsGrowthThreeY?: Maybe<number>, epsInclExtraItemsAnnual?: Maybe<number>, epsInclExtraItemsTTM?: Maybe<number>, epsNormalizedAnnual?: Maybe<number>, focfCagrFiveY?: Maybe<number>, freeCashFlowAnnual?: Maybe<number>, freeCashFlowPerShareTTM?: Maybe<number>, freeCashFlowTTM?: Maybe<number>, freeOperatingCashFlowrevenueFiveY?: Maybe<number>, freeOperatingCashFlowrevenueTTM?: Maybe<number>, grossMarginAnnual?: Maybe<number>, grossMarginFiveY?: Maybe<number>, grossMarginTTM?: Maybe<number>, inventoryTurnoverAnnual?: Maybe<number>, inventoryTurnoverTTM?: Maybe<number>, longTermDebtequityAnnual?: Maybe<number>, longTermDebtequityQuarterly?: Maybe<number>, marketCapitalization?: Maybe<number>, monthToDatePriceReturnDaily?: Maybe<number>, netDebtAnnual?: Maybe<number>, netDebtInterim?: Maybe<number>, netIncomeEmployeeAnnual?: Maybe<number>, netIncomeEmployeeTTM?: Maybe<number>, netInterestCoverageAnnual?: Maybe<number>, netInterestCoverageTTM?: Maybe<number>, netMarginGrowthFiveY?: Maybe<number>, netProfitMarginAnnual?: Maybe<number>, netProfitMarginFiveY?: Maybe<number>, netProfitMarginTTM?: Maybe<number>, operatingMarginAnnual?: Maybe<number>, operatingMarginFiveY?: Maybe<number>, operatingMarginTTM?: Maybe<number>, payoutRatioAnnual?: Maybe<number>, payoutRatioTTM?: Maybe<number>, pbAnnual?: Maybe<number>, pbQuarterly?: Maybe<number>, pcfShareTTM?: Maybe<number>, peBasicExclExtraTTM?: Maybe<number>, peExclExtraAnnual?: Maybe<number>, peExclExtraHighTTM?: Maybe<number>, peExclExtraTTM?: Maybe<number>, peExclLowTTM?: Maybe<number>, peInclExtraTTM?: Maybe<number>, peNormalizedAnnual?: Maybe<number>, pfcfShareAnnual?: Maybe<number>, pfcfShareTTM?: Maybe<number>, pretaxMarginAnnual?: Maybe<number>, pretaxMarginFiveY?: Maybe<number>, pretaxMarginTTM?: Maybe<number>, priceRelativeToSPFiveFiveTwoWeek?: Maybe<number>, priceRelativeToSPFiveFourWeek?: Maybe<number>, priceRelativeToSPFiveOneThreeWeek?: Maybe<number>, priceRelativeToSPFiveTwoSixWeek?: Maybe<number>, priceRelativeToSPFiveYtd?: Maybe<number>, psAnnual?: Maybe<number>, psTTM?: Maybe<number>, ptbvAnnual?: Maybe<number>, ptbvQuarterly?: Maybe<number>, quickRatioAnnual?: Maybe<number>, quickRatioQuarterly?: Maybe<number>, receivablesTurnoverAnnual?: Maybe<number>, receivablesTurnoverTTM?: Maybe<number>, revenueEmployeeAnnual?: Maybe<number>, revenueEmployeeTTM?: Maybe<number>, revenueGrowthFiveY?: Maybe<number>, revenueGrowthQuarterlyYoy?: Maybe<number>, revenueGrowthTTMYoy?: Maybe<number>, revenueGrowthThreeY?: Maybe<number>, revenuePerShareAnnual?: Maybe<number>, revenuePerShareTTM?: Maybe<number>, revenueShareGrowthFiveY?: Maybe<number>, roaRfy?: Maybe<number>, roaaFiveY?: Maybe<number>, roaeFiveY?: Maybe<number>, roaeTTM?: Maybe<number>, roeRfy?: Maybe<number>, roeTTM?: Maybe<number>, roiAnnual?: Maybe<number>, roiFiveY?: Maybe<number>, roiTTM?: Maybe<number>, tangibleBookValuePerShareAnnual?: Maybe<number>, tangibleBookValuePerShareQuarterly?: Maybe<number>, tbvCagrFiveY?: Maybe<number>, totalDebtCagrFiveY?: Maybe<number>, totalDebttotalEquityAnnual?: Maybe<number>, totalDebttotalEquityQuarterly?: Maybe<number>, yearToDatePriceReturnDaily?: Maybe<number> };

export type DividensFragmentFragment = { __typename?: 'Dividens', currentDividendYieldTTM?: Maybe<number>, dividendGrowthRateFiveY?: Maybe<number>, dividendPerShareAnnual?: Maybe<number>, dividendPerShareFiveY?: Maybe<number>, dividendYieldFiveY?: Maybe<number>, dividendYieldIndicatedAnnual?: Maybe<number>, dividendPayoutRatioTTM?: Maybe<number>, dividendsPerShareTTM?: Maybe<number>, exDividendDate?: Maybe<string>, trailingAnnualDividendRate?: Maybe<string>, trailingAnnualDividendYield?: Maybe<string>, forwardDividendYield?: Maybe<string> };

export type EarningsChartFragmentFragment = { __typename?: 'EarningsChart', currentQuarterEstimate?: Maybe<number>, currentQuarterEstimateDate?: Maybe<string>, currentQuarterEstimateYear?: Maybe<number>, earningsDate?: Maybe<Array<Maybe<number>>>, quarterly?: Maybe<Array<Maybe<{ __typename?: 'EarningsChartData', actual?: Maybe<number>, date?: Maybe<string>, estimate?: Maybe<number> }>>> };

export type FinancialChartDataFragmentFragment = { __typename?: 'FinancialsChartData', categories?: Maybe<Array<Maybe<string>>>, series?: Maybe<Array<Maybe<{ __typename?: 'Series', data?: Maybe<Array<Maybe<number>>>, name?: Maybe<string> }>>> };

export type EarningsFragmentFragment = { __typename?: 'Earnings', financialCurrency?: Maybe<string>, earningsChart?: Maybe<{ __typename?: 'EarningsChart', currentQuarterEstimate?: Maybe<number>, currentQuarterEstimateDate?: Maybe<string>, currentQuarterEstimateYear?: Maybe<number>, earningsDate?: Maybe<Array<Maybe<number>>>, quarterly?: Maybe<Array<Maybe<{ __typename?: 'EarningsChartData', actual?: Maybe<number>, date?: Maybe<string>, estimate?: Maybe<number> }>>> }>, financialsChart?: Maybe<{ __typename?: 'FinancialsChart', quarterly?: Maybe<{ __typename?: 'FinancialsChartData', categories?: Maybe<Array<Maybe<string>>>, series?: Maybe<Array<Maybe<{ __typename?: 'Series', data?: Maybe<Array<Maybe<number>>>, name?: Maybe<string> }>>> }>, yearly?: Maybe<{ __typename?: 'FinancialsChartData', categories?: Maybe<Array<Maybe<string>>>, series?: Maybe<Array<Maybe<{ __typename?: 'Series', data?: Maybe<Array<Maybe<number>>>, name?: Maybe<string> }>>> }> }> };

export type HistoricalMetricsDataFragmentFragment = { __typename?: 'HistoricalMetricsData', name?: Maybe<string>, dates?: Maybe<Array<Maybe<string>>>, data?: Maybe<Array<Maybe<number>>> };

export type CapmFragmentFragment = { __typename?: 'CAPM', Beta: number, Rf: number, Rm: number, result: number };

export type WaccFragmentFragment = { __typename?: 'WACC', Rd: number, Re: number, Wd: number, We: number, result: number, taxRate: number, CAPM?: Maybe<{ __typename?: 'CAPM', Beta: number, Rf: number, Rm: number, result: number }> };

export type QueryStockDetailsQueryVariables = Exact<{
  symbol: Scalars['String'];
  reload?: Maybe<Scalars['Boolean']>;
}>;


export type QueryStockDetailsQuery = { __typename?: 'Query', queryStockDetails?: Maybe<{ __typename?: 'StockDetails', id: string, recommendation?: Maybe<Array<Maybe<{ __typename?: 'Recommendations', buy?: Maybe<number>, hold?: Maybe<number>, period?: Maybe<string>, sell?: Maybe<number>, strongBuy?: Maybe<number>, strongSell?: Maybe<number>, symbol?: Maybe<string> }>>>, companyData?: Maybe<{ __typename?: 'CompanyData', defaultKeyStatistics?: Maybe<{ __typename?: 'DefaultKeyStatistics', bookValue?: Maybe<number>, dateShortInterest?: Maybe<number>, earningsQuarterlyGrowth?: Maybe<number>, enterpriseToEbitda?: Maybe<number>, enterpriseToRevenue?: Maybe<number>, enterpriseValue?: Maybe<number>, fiveYearAverageReturn?: Maybe<number>, floatShares?: Maybe<number>, forwardEps?: Maybe<number>, forwardPE?: Maybe<number>, heldPercentInsiders?: Maybe<number>, heldPercentInstitutions?: Maybe<number>, lastFiscalYearEnd?: Maybe<number>, lastSplitDate?: Maybe<number>, lastSplitFactor?: Maybe<string>, mostRecentQuarter?: Maybe<number>, netIncomeToCommon?: Maybe<number>, nextFiscalYearEnd?: Maybe<number>, pegRatio?: Maybe<number>, priceHint?: Maybe<number>, priceToBook?: Maybe<number>, profitMargins?: Maybe<number>, sharesOutstanding?: Maybe<number>, sharesPercentSharesOut?: Maybe<number>, sharesShort?: Maybe<number>, sharesShortPreviousMonthDate?: Maybe<number>, sharesShortPriorMonth?: Maybe<number>, shortPercentOfFloat?: Maybe<number>, shortRatio?: Maybe<number>, trailingEps?: Maybe<number> }>, earnings?: Maybe<{ __typename?: 'Earnings', financialCurrency?: Maybe<string>, earningsChart?: Maybe<{ __typename?: 'EarningsChart', currentQuarterEstimate?: Maybe<number>, currentQuarterEstimateDate?: Maybe<string>, currentQuarterEstimateYear?: Maybe<number>, earningsDate?: Maybe<Array<Maybe<number>>>, quarterly?: Maybe<Array<Maybe<{ __typename?: 'EarningsChartData', actual?: Maybe<number>, date?: Maybe<string>, estimate?: Maybe<number> }>>> }>, financialsChart?: Maybe<{ __typename?: 'FinancialsChart', quarterly?: Maybe<{ __typename?: 'FinancialsChartData', categories?: Maybe<Array<Maybe<string>>>, series?: Maybe<Array<Maybe<{ __typename?: 'Series', data?: Maybe<Array<Maybe<number>>>, name?: Maybe<string> }>>> }>, yearly?: Maybe<{ __typename?: 'FinancialsChartData', categories?: Maybe<Array<Maybe<string>>>, series?: Maybe<Array<Maybe<{ __typename?: 'Series', data?: Maybe<Array<Maybe<number>>>, name?: Maybe<string> }>>> }> }> }>, financialData?: Maybe<{ __typename?: 'FinancialData', currentPrice?: Maybe<number>, currentRatio?: Maybe<number>, debtToEquity?: Maybe<number>, earningsGrowth?: Maybe<number>, ebitda?: Maybe<number>, ebitdaMargins?: Maybe<number>, financialCurrency?: Maybe<string>, freeCashflow?: Maybe<number>, grossMargins?: Maybe<number>, grossProfits?: Maybe<number>, numberOfAnalystOpinions?: Maybe<number>, operatingCashflow?: Maybe<number>, operatingMargins?: Maybe<number>, profitMargins?: Maybe<number>, quickRatio?: Maybe<number>, recommendationKey?: Maybe<string>, recommendationMean?: Maybe<number>, returnOnAssets?: Maybe<number>, returnOnEquity?: Maybe<number>, revenueGrowth?: Maybe<number>, revenuePerShare?: Maybe<number>, targetHighPrice?: Maybe<number>, targetLowPrice?: Maybe<number>, targetMeanPrice?: Maybe<number>, targetMedianPrice?: Maybe<number>, totalCash?: Maybe<number>, totalCashPerShare?: Maybe<number>, totalDebt?: Maybe<number>, totalRevenue?: Maybe<number> }>, pageViews?: Maybe<{ __typename?: 'PageViews', longTermTrend?: Maybe<string>, midTermTrend?: Maybe<string>, shortTermTrend?: Maybe<string> }>, upgradeDowngradeHistory?: Maybe<Array<Maybe<{ __typename?: 'UpgradeDowngradeHistory', action?: Maybe<string>, epochGradeDate?: Maybe<number>, firm?: Maybe<string>, fromGrade?: Maybe<string>, toGrade?: Maybe<string> }>>>, esgScores?: Maybe<{ __typename?: 'EsgScores', totalEsg?: Maybe<number>, environmentScore?: Maybe<number>, governanceScore?: Maybe<number>, highestControversy?: Maybe<number>, esgPerformance?: Maybe<string>, socialScore?: Maybe<number>, peerCount?: Maybe<number>, percentile?: Maybe<number>, peerGroup?: Maybe<string>, relatedControversy?: Maybe<Array<Maybe<string>>>, peerEnvironmentPerformance?: Maybe<{ __typename?: 'Calculation', avg?: Maybe<number>, max?: Maybe<number>, min?: Maybe<number> }>, peerEsgScorePerformance?: Maybe<{ __typename?: 'Calculation', avg?: Maybe<number>, max?: Maybe<number>, min?: Maybe<number> }>, peerGovernancePerformance?: Maybe<{ __typename?: 'Calculation', avg?: Maybe<number>, max?: Maybe<number>, min?: Maybe<number> }>, peerHighestControversyPerformance?: Maybe<{ __typename?: 'Calculation', avg?: Maybe<number>, max?: Maybe<number>, min?: Maybe<number> }>, peerSocialPerformance?: Maybe<{ __typename?: 'Calculation', avg?: Maybe<number>, max?: Maybe<number>, min?: Maybe<number> }> }> }>, summary: { __typename?: 'Summary', avgVolume?: Maybe<number>, ceo?: Maybe<string>, companyName?: Maybe<string>, currency?: Maybe<string>, dividendDate?: Maybe<string>, ePSTTM?: Maybe<number>, earningsDate?: Maybe<string>, exDividendDate?: Maybe<string>, exchangeName?: Maybe<string>, fiveTwoWeekRange?: Maybe<string>, forwardDividendRate?: Maybe<number>, forwardDividendYield?: Maybe<number>, forwardEPS?: Maybe<number>, forwardPE?: Maybe<number>, fullTimeEmployees?: Maybe<string>, id?: Maybe<string>, symbolType?: Maybe<SymbolType>, industry?: Maybe<string>, ipoDate?: Maybe<string>, beta?: Maybe<string>, countryFullName?: Maybe<string>, lastSplitDate?: Maybe<string>, lastSplitFactor?: Maybe<string>, logo_url?: Maybe<string>, longBusinessSummary?: Maybe<string>, marketCap?: Maybe<number>, marketPrice?: Maybe<number>, oneyTargetEst?: Maybe<number>, pERatioTTM?: Maybe<number>, previousClose?: Maybe<number>, recommendationKey?: Maybe<string>, recommendationMean?: Maybe<number>, sandPFiveTwoWeekChange?: Maybe<number>, sector?: Maybe<string>, sharesOutstanding?: Maybe<number>, shortRatio?: Maybe<number>, symbol?: Maybe<string>, targetEstOneyPercent?: Maybe<number>, volume?: Maybe<number>, website?: Maybe<string>, weekRangeFiveTwoMax?: Maybe<number>, weekRangeFiveTwoMin?: Maybe<number>, yearToDatePrice?: Maybe<number>, yearToDatePriceReturn?: Maybe<number>, isActivelyTrading?: Maybe<boolean>, residance?: Maybe<{ __typename?: 'SummaryResidance', city?: Maybe<string>, state?: Maybe<string>, country?: Maybe<string>, addressOne?: Maybe<string>, zip?: Maybe<string> }> }, metric?: Maybe<{ __typename?: 'Metric', fiveDayPriceReturnDaily?: Maybe<number>, fiveTwoWeekHigh?: Maybe<number>, fiveTwoWeekHighDate?: Maybe<string>, fiveTwoWeekLow?: Maybe<number>, fiveTwoWeekLowDate?: Maybe<string>, fiveTwoWeekPriceReturnDaily?: Maybe<number>, oneDayAverageTradingVolume?: Maybe<number>, oneThreeWeekPriceReturnDaily?: Maybe<number>, threeMonthAverageTradingVolume?: Maybe<number>, twoSixWeekPriceReturnDaily?: Maybe<number>, assetTurnoverAnnual?: Maybe<number>, assetTurnoverTTM?: Maybe<number>, beta?: Maybe<number>, bookValuePerShareAnnual?: Maybe<number>, bookValuePerShareQuarterly?: Maybe<number>, bookValueShareGrowthFiveY?: Maybe<number>, capitalSpendingGrowthFiveY?: Maybe<number>, cashFlowPerShareAnnual?: Maybe<number>, cashFlowPerShareTTM?: Maybe<number>, cashPerSharePerShareAnnual?: Maybe<number>, cashPerSharePerShareQuarterly?: Maybe<number>, currentEvfreeCashFlowAnnual?: Maybe<number>, currentEvfreeCashFlowTTM?: Maybe<number>, currentRatioAnnual?: Maybe<number>, currentRatioQuarterly?: Maybe<number>, ebitdPerShareTTM?: Maybe<number>, ebitdaCagrFiveY?: Maybe<number>, ebitdaInterimCagrFiveY?: Maybe<number>, epsBasicExclExtraItemsAnnual?: Maybe<number>, epsBasicExclExtraItemsTTM?: Maybe<number>, epsExclExtraItemsAnnual?: Maybe<number>, epsExclExtraItemsTTM?: Maybe<number>, epsGrowthFiveY?: Maybe<number>, epsGrowthQuarterlyYoy?: Maybe<number>, epsGrowthTTMYoy?: Maybe<number>, epsGrowthThreeY?: Maybe<number>, epsInclExtraItemsAnnual?: Maybe<number>, epsInclExtraItemsTTM?: Maybe<number>, epsNormalizedAnnual?: Maybe<number>, focfCagrFiveY?: Maybe<number>, freeCashFlowAnnual?: Maybe<number>, freeCashFlowPerShareTTM?: Maybe<number>, freeCashFlowTTM?: Maybe<number>, freeOperatingCashFlowrevenueFiveY?: Maybe<number>, freeOperatingCashFlowrevenueTTM?: Maybe<number>, grossMarginAnnual?: Maybe<number>, grossMarginFiveY?: Maybe<number>, grossMarginTTM?: Maybe<number>, inventoryTurnoverAnnual?: Maybe<number>, inventoryTurnoverTTM?: Maybe<number>, longTermDebtequityAnnual?: Maybe<number>, longTermDebtequityQuarterly?: Maybe<number>, marketCapitalization?: Maybe<number>, monthToDatePriceReturnDaily?: Maybe<number>, netDebtAnnual?: Maybe<number>, netDebtInterim?: Maybe<number>, netIncomeEmployeeAnnual?: Maybe<number>, netIncomeEmployeeTTM?: Maybe<number>, netInterestCoverageAnnual?: Maybe<number>, netInterestCoverageTTM?: Maybe<number>, netMarginGrowthFiveY?: Maybe<number>, netProfitMarginAnnual?: Maybe<number>, netProfitMarginFiveY?: Maybe<number>, netProfitMarginTTM?: Maybe<number>, operatingMarginAnnual?: Maybe<number>, operatingMarginFiveY?: Maybe<number>, operatingMarginTTM?: Maybe<number>, payoutRatioAnnual?: Maybe<number>, payoutRatioTTM?: Maybe<number>, pbAnnual?: Maybe<number>, pbQuarterly?: Maybe<number>, pcfShareTTM?: Maybe<number>, peBasicExclExtraTTM?: Maybe<number>, peExclExtraAnnual?: Maybe<number>, peExclExtraHighTTM?: Maybe<number>, peExclExtraTTM?: Maybe<number>, peExclLowTTM?: Maybe<number>, peInclExtraTTM?: Maybe<number>, peNormalizedAnnual?: Maybe<number>, pfcfShareAnnual?: Maybe<number>, pfcfShareTTM?: Maybe<number>, pretaxMarginAnnual?: Maybe<number>, pretaxMarginFiveY?: Maybe<number>, pretaxMarginTTM?: Maybe<number>, priceRelativeToSPFiveFiveTwoWeek?: Maybe<number>, priceRelativeToSPFiveFourWeek?: Maybe<number>, priceRelativeToSPFiveOneThreeWeek?: Maybe<number>, priceRelativeToSPFiveTwoSixWeek?: Maybe<number>, priceRelativeToSPFiveYtd?: Maybe<number>, psAnnual?: Maybe<number>, psTTM?: Maybe<number>, ptbvAnnual?: Maybe<number>, ptbvQuarterly?: Maybe<number>, quickRatioAnnual?: Maybe<number>, quickRatioQuarterly?: Maybe<number>, receivablesTurnoverAnnual?: Maybe<number>, receivablesTurnoverTTM?: Maybe<number>, revenueEmployeeAnnual?: Maybe<number>, revenueEmployeeTTM?: Maybe<number>, revenueGrowthFiveY?: Maybe<number>, revenueGrowthQuarterlyYoy?: Maybe<number>, revenueGrowthTTMYoy?: Maybe<number>, revenueGrowthThreeY?: Maybe<number>, revenuePerShareAnnual?: Maybe<number>, revenuePerShareTTM?: Maybe<number>, revenueShareGrowthFiveY?: Maybe<number>, roaRfy?: Maybe<number>, roaaFiveY?: Maybe<number>, roaeFiveY?: Maybe<number>, roaeTTM?: Maybe<number>, roeRfy?: Maybe<number>, roeTTM?: Maybe<number>, roiAnnual?: Maybe<number>, roiFiveY?: Maybe<number>, roiTTM?: Maybe<number>, tangibleBookValuePerShareAnnual?: Maybe<number>, tangibleBookValuePerShareQuarterly?: Maybe<number>, tbvCagrFiveY?: Maybe<number>, totalDebtCagrFiveY?: Maybe<number>, totalDebttotalEquityAnnual?: Maybe<number>, totalDebttotalEquityQuarterly?: Maybe<number>, yearToDatePriceReturnDaily?: Maybe<number> }>, dividends?: Maybe<{ __typename?: 'Dividens', currentDividendYieldTTM?: Maybe<number>, dividendGrowthRateFiveY?: Maybe<number>, dividendPerShareAnnual?: Maybe<number>, dividendPerShareFiveY?: Maybe<number>, dividendYieldFiveY?: Maybe<number>, dividendYieldIndicatedAnnual?: Maybe<number>, dividendPayoutRatioTTM?: Maybe<number>, dividendsPerShareTTM?: Maybe<number>, exDividendDate?: Maybe<string>, trailingAnnualDividendRate?: Maybe<string>, trailingAnnualDividendYield?: Maybe<string>, forwardDividendYield?: Maybe<string> }>, historicalMetrics?: Maybe<{ __typename?: 'HistoricalMetrics', cashRatio?: Maybe<{ __typename?: 'HistoricalMetricsData', name?: Maybe<string>, dates?: Maybe<Array<Maybe<string>>>, data?: Maybe<Array<Maybe<number>>> }>, currentRatio?: Maybe<{ __typename?: 'HistoricalMetricsData', name?: Maybe<string>, dates?: Maybe<Array<Maybe<string>>>, data?: Maybe<Array<Maybe<number>>> }>, ebitPerShare?: Maybe<{ __typename?: 'HistoricalMetricsData', name?: Maybe<string>, dates?: Maybe<Array<Maybe<string>>>, data?: Maybe<Array<Maybe<number>>> }>, eps?: Maybe<{ __typename?: 'HistoricalMetricsData', name?: Maybe<string>, dates?: Maybe<Array<Maybe<string>>>, data?: Maybe<Array<Maybe<number>>> }>, grossMargin?: Maybe<{ __typename?: 'HistoricalMetricsData', name?: Maybe<string>, dates?: Maybe<Array<Maybe<string>>>, data?: Maybe<Array<Maybe<number>>> }>, longtermDebtTotalAsset?: Maybe<{ __typename?: 'HistoricalMetricsData', name?: Maybe<string>, dates?: Maybe<Array<Maybe<string>>>, data?: Maybe<Array<Maybe<number>>> }>, longtermDebtTotalCapital?: Maybe<{ __typename?: 'HistoricalMetricsData', name?: Maybe<string>, dates?: Maybe<Array<Maybe<string>>>, data?: Maybe<Array<Maybe<number>>> }>, longtermDebtTotalEquity?: Maybe<{ __typename?: 'HistoricalMetricsData', name?: Maybe<string>, dates?: Maybe<Array<Maybe<string>>>, data?: Maybe<Array<Maybe<number>>> }>, netDebtToTotalCapital?: Maybe<{ __typename?: 'HistoricalMetricsData', name?: Maybe<string>, dates?: Maybe<Array<Maybe<string>>>, data?: Maybe<Array<Maybe<number>>> }>, netDebtToTotalEquity?: Maybe<{ __typename?: 'HistoricalMetricsData', name?: Maybe<string>, dates?: Maybe<Array<Maybe<string>>>, data?: Maybe<Array<Maybe<number>>> }>, netMargin?: Maybe<{ __typename?: 'HistoricalMetricsData', name?: Maybe<string>, dates?: Maybe<Array<Maybe<string>>>, data?: Maybe<Array<Maybe<number>>> }>, operatingMargin?: Maybe<{ __typename?: 'HistoricalMetricsData', name?: Maybe<string>, dates?: Maybe<Array<Maybe<string>>>, data?: Maybe<Array<Maybe<number>>> }>, pretaxMargin?: Maybe<{ __typename?: 'HistoricalMetricsData', name?: Maybe<string>, dates?: Maybe<Array<Maybe<string>>>, data?: Maybe<Array<Maybe<number>>> }>, salesPerShare?: Maybe<{ __typename?: 'HistoricalMetricsData', name?: Maybe<string>, dates?: Maybe<Array<Maybe<string>>>, data?: Maybe<Array<Maybe<number>>> }>, sgaToSale?: Maybe<{ __typename?: 'HistoricalMetricsData', name?: Maybe<string>, dates?: Maybe<Array<Maybe<string>>>, data?: Maybe<Array<Maybe<number>>> }>, totalDebtToEquity?: Maybe<{ __typename?: 'HistoricalMetricsData', name?: Maybe<string>, dates?: Maybe<Array<Maybe<string>>>, data?: Maybe<Array<Maybe<number>>> }>, totalDebtToTotalAsset?: Maybe<{ __typename?: 'HistoricalMetricsData', name?: Maybe<string>, dates?: Maybe<Array<Maybe<string>>>, data?: Maybe<Array<Maybe<number>>> }>, totalDebtToTotalCapital?: Maybe<{ __typename?: 'HistoricalMetricsData', name?: Maybe<string>, dates?: Maybe<Array<Maybe<string>>>, data?: Maybe<Array<Maybe<number>>> }>, totalRatio?: Maybe<{ __typename?: 'HistoricalMetricsData', name?: Maybe<string>, dates?: Maybe<Array<Maybe<string>>>, data?: Maybe<Array<Maybe<number>>> }> }>, calculations?: Maybe<{ __typename?: 'STStockDetailsCalculations', CAPM?: Maybe<{ __typename?: 'CAPM', Beta: number, Rf: number, Rm: number, result: number }>, WACC?: Maybe<{ __typename?: 'WACC', Rd: number, Re: number, Wd: number, We: number, result: number, taxRate: number, CAPM?: Maybe<{ __typename?: 'CAPM', Beta: number, Rf: number, Rm: number, result: number }> }> }>, calculatedPredictions?: Maybe<{ __typename?: 'STStockDetailsCalculatedPredictions', DCF_V1?: Maybe<{ __typename?: 'STDiscountedCashFlowFormula', estimatedCompanyTodayValue: number, estimatedDiscountedFactors: Array<Maybe<number>>, estimatedDiscountedTerminalValue: number, estimatedFreeCashFlowRate: number, estimatedFreeCashFlowRates: Array<Maybe<number>>, estimatedFreeCashFlows: Array<Maybe<number>>, estimatedIntrinsicValue: number, estimatedNetIncomeMargin: number, estimatedNetIncomes: Array<Maybe<number>>, estimatedPresentValueOfFutureCashFlows: Array<Maybe<number>>, estimatedRevenueGrowthRate: number, estimatedRevenues: Array<Maybe<number>>, estimatedTerminalValue: number, years: Array<Maybe<string>>, historical: { __typename?: 'STDiscountedCashFlowFormulaHistorical', freeCashFlows: Array<Maybe<number>>, sharesOutstanding: number, netIncomeMargins: Array<Maybe<number>>, netIncome: Array<Maybe<number>>, revenue: Array<Maybe<number>>, revenueGrowthRates: Array<Maybe<number>>, historicalYears: Array<Maybe<string>> }, variable: { __typename?: 'STDiscountedCashFlowFormulaVariable', perpetualGrowthRate: number, requiredRateOfReturn: number } }>, DDF_V1?: Maybe<{ __typename?: 'STDividendDiscountedFormula', dividendGrowthRate: number, dividendsPerShareTTM: number, minimumRateReturn: number, estimatedIntrinsicValue: number }>, FCF_V1?: Maybe<{ __typename?: 'STFreeCashFlowFormula', avgFcf: number, estimatedIntrinsicMarketCap: number, estimatedIntrinsicValue: number, historicalYears?: Maybe<Array<Maybe<string>>>, minimumRateReturn: number, operatingActivities: Array<Maybe<number>>, capitalExpenditures: Array<Maybe<number>>, freeCashFlows: Array<Maybe<number>>, sharesOutstanding: number }>, INTRINSIC_V1?: Maybe<{ __typename?: 'STEarningsValuationFormula', dates: Array<Maybe<string>>, eps: number, estimatedDiscountedPV: Array<Maybe<number>>, estimatedEarnings: Array<Maybe<number>>, estimatedIntrinsicValue: number, variable: { __typename?: 'STEarningsValuationFormulaVariable', growthRateFrom5yTo10y: number, growthRateNext5y: number, minimumRateReturn: number, terminalMultiple: number } }> }>, allFinancialReportsYearly?: Maybe<Array<Maybe<{ __typename?: 'FinancialReport', acceptedDate?: Maybe<string>, accessNumber?: Maybe<string>, cik?: Maybe<string>, endDate?: Maybe<string>, filedDate?: Maybe<string>, form?: Maybe<string>, quarter?: Maybe<number>, startDate?: Maybe<string>, symbol?: Maybe<string>, year?: Maybe<number>, report?: Maybe<{ __typename?: 'FinancialReportStatement', bs?: Maybe<Array<Maybe<{ __typename?: 'FinancialReportStatementData', concept?: Maybe<string>, label?: Maybe<string>, unit?: Maybe<string>, value?: Maybe<number> }>>>, cf?: Maybe<Array<Maybe<{ __typename?: 'FinancialReportStatementData', concept?: Maybe<string>, label?: Maybe<string>, unit?: Maybe<string>, value?: Maybe<number> }>>>, ic?: Maybe<Array<Maybe<{ __typename?: 'FinancialReportStatementData', concept?: Maybe<string>, label?: Maybe<string>, unit?: Maybe<string>, value?: Maybe<number> }>>> }> }>>>, allFinancialReportsQuarterly?: Maybe<Array<Maybe<{ __typename?: 'FinancialReport', acceptedDate?: Maybe<string>, accessNumber?: Maybe<string>, cik?: Maybe<string>, endDate?: Maybe<string>, filedDate?: Maybe<string>, form?: Maybe<string>, quarter?: Maybe<number>, startDate?: Maybe<string>, symbol?: Maybe<string>, year?: Maybe<number>, report?: Maybe<{ __typename?: 'FinancialReportStatement', bs?: Maybe<Array<Maybe<{ __typename?: 'FinancialReportStatementData', concept?: Maybe<string>, label?: Maybe<string>, unit?: Maybe<string>, value?: Maybe<number> }>>>, cf?: Maybe<Array<Maybe<{ __typename?: 'FinancialReportStatementData', concept?: Maybe<string>, label?: Maybe<string>, unit?: Maybe<string>, value?: Maybe<number> }>>>, ic?: Maybe<Array<Maybe<{ __typename?: 'FinancialReportStatementData', concept?: Maybe<string>, label?: Maybe<string>, unit?: Maybe<string>, value?: Maybe<number> }>>> }> }>>>, institutionalHolders?: Maybe<Array<Maybe<{ __typename?: 'STFMHolder', change?: Maybe<number>, dateReported?: Maybe<string>, holder?: Maybe<string>, shares?: Maybe<number> }>>>, mutualFundHolders?: Maybe<Array<Maybe<{ __typename?: 'STFMHolderWithWeight', change?: Maybe<number>, dateReported?: Maybe<string>, holder?: Maybe<string>, shares?: Maybe<number>, weightPercent?: Maybe<number> }>>>, companyOutlook?: Maybe<{ __typename?: 'STFMCompanyOutlook', financialsAnnual?: Maybe<{ __typename?: 'STFMFinancials', balance?: Maybe<Array<Maybe<{ __typename?: 'STFMBalanceSheet', acceptedDate?: Maybe<string>, accountPayables?: Maybe<number>, accumulatedOtherComprehensiveIncomeLoss?: Maybe<number>, cashAndCashEquivalents?: Maybe<number>, cashAndShortTermInvestments?: Maybe<number>, commonStock?: Maybe<number>, date?: Maybe<string>, deferredRevenue?: Maybe<number>, deferredRevenueNonCurrent?: Maybe<number>, deferredTaxLiabilitiesNonCurrent?: Maybe<number>, fillingDate?: Maybe<string>, finalLink?: Maybe<string>, goodwill?: Maybe<number>, goodwillAndIntangibleAssets?: Maybe<number>, intangibleAssets?: Maybe<number>, inventory?: Maybe<number>, link?: Maybe<string>, longTermDebt?: Maybe<number>, longTermInvestments?: Maybe<number>, netDebt?: Maybe<number>, netReceivables?: Maybe<number>, otherAssets?: Maybe<number>, otherCurrentAssets?: Maybe<number>, otherCurrentLiabilities?: Maybe<number>, otherLiabilities?: Maybe<number>, otherNonCurrentAssets?: Maybe<number>, otherNonCurrentLiabilities?: Maybe<number>, othertotalStockholdersEquity?: Maybe<number>, period?: Maybe<string>, propertyPlantEquipmentNet?: Maybe<number>, reportedCurrency?: Maybe<string>, retainedEarnings?: Maybe<number>, shortTermDebt?: Maybe<number>, shortTermInvestments?: Maybe<number>, symbol?: Maybe<string>, taxAssets?: Maybe<number>, taxPayables?: Maybe<number>, totalAssets?: Maybe<number>, totalCurrentAssets?: Maybe<number>, totalCurrentLiabilities?: Maybe<number>, totalDebt?: Maybe<number>, totalInvestments?: Maybe<number>, totalLiabilities?: Maybe<number>, totalLiabilitiesAndStockholdersEquity?: Maybe<number>, totalNonCurrentAssets?: Maybe<number>, totalNonCurrentLiabilities?: Maybe<number>, totalStockholdersEquity?: Maybe<number> }>>>, cash?: Maybe<Array<Maybe<{ __typename?: 'STFMCashFlow', acceptedDate?: Maybe<string>, accountsPayables?: Maybe<number>, accountsReceivables?: Maybe<number>, acquisitionsNet?: Maybe<number>, capitalExpenditure?: Maybe<number>, cashAtBeginningOfPeriod?: Maybe<number>, cashAtEndOfPeriod?: Maybe<number>, changeInWorkingCapital?: Maybe<number>, commonStockIssued?: Maybe<number>, commonStockRepurchased?: Maybe<number>, date?: Maybe<string>, debtRepayment?: Maybe<number>, deferredIncomeTax?: Maybe<number>, depreciationAndAmortization?: Maybe<number>, dividendsPaid?: Maybe<number>, effectOfForexChangesOnCash?: Maybe<number>, fillingDate?: Maybe<string>, finalLink?: Maybe<string>, freeCashFlow?: Maybe<number>, inventory?: Maybe<number>, investmentsInPropertyPlantAndEquipment?: Maybe<number>, link?: Maybe<string>, netCashProvidedByOperatingActivities?: Maybe<number>, netCashUsedForInvestingActivites?: Maybe<number>, netCashUsedProvidedByFinancingActivities?: Maybe<number>, netChangeInCash?: Maybe<number>, netIncome?: Maybe<number>, operatingCashFlow?: Maybe<number>, otherFinancingActivites?: Maybe<number>, otherInvestingActivites?: Maybe<number>, otherNonCashItems?: Maybe<number>, otherWorkingCapital?: Maybe<number>, period?: Maybe<string>, purchasesOfInvestments?: Maybe<number>, reportedCurrency?: Maybe<string>, salesMaturitiesOfInvestments?: Maybe<number>, stockBasedCompensation?: Maybe<number>, symbol?: Maybe<string> }>>>, income?: Maybe<Array<Maybe<{ __typename?: 'STFMIncomeStatement', acceptedDate?: Maybe<string>, costAndExpenses?: Maybe<number>, costOfRevenue?: Maybe<number>, date?: Maybe<string>, depreciationAndAmortization?: Maybe<number>, ebitda?: Maybe<number>, ebitdaratio?: Maybe<number>, eps?: Maybe<number>, epsdiluted?: Maybe<number>, fillingDate?: Maybe<string>, finalLink?: Maybe<string>, generalAndAdministrativeExpenses?: Maybe<number>, grossProfit?: Maybe<number>, grossProfitRatio?: Maybe<number>, incomeBeforeTax?: Maybe<number>, incomeBeforeTaxRatio?: Maybe<number>, incomeTaxExpense?: Maybe<number>, interestExpense?: Maybe<number>, link?: Maybe<string>, netIncome?: Maybe<number>, netIncomeRatio?: Maybe<number>, operatingExpenses?: Maybe<number>, operatingIncome?: Maybe<number>, operatingIncomeRatio?: Maybe<number>, otherExpenses?: Maybe<number>, period?: Maybe<string>, reportedCurrency?: Maybe<string>, researchAndDevelopmentExpenses?: Maybe<number>, revenue?: Maybe<number>, sellingAndMarketingExpenses?: Maybe<number>, sellingGeneralAndAdministrativeExpenses?: Maybe<number>, symbol?: Maybe<string>, totalOtherIncomeExpensesNet?: Maybe<number>, weightedAverageShsOut?: Maybe<number>, weightedAverageShsOutDil?: Maybe<number> }>>> }>, financialsQuarter?: Maybe<{ __typename?: 'STFMFinancials', balance?: Maybe<Array<Maybe<{ __typename?: 'STFMBalanceSheet', acceptedDate?: Maybe<string>, accountPayables?: Maybe<number>, accumulatedOtherComprehensiveIncomeLoss?: Maybe<number>, cashAndCashEquivalents?: Maybe<number>, cashAndShortTermInvestments?: Maybe<number>, commonStock?: Maybe<number>, date?: Maybe<string>, deferredRevenue?: Maybe<number>, deferredRevenueNonCurrent?: Maybe<number>, deferredTaxLiabilitiesNonCurrent?: Maybe<number>, fillingDate?: Maybe<string>, finalLink?: Maybe<string>, goodwill?: Maybe<number>, goodwillAndIntangibleAssets?: Maybe<number>, intangibleAssets?: Maybe<number>, inventory?: Maybe<number>, link?: Maybe<string>, longTermDebt?: Maybe<number>, longTermInvestments?: Maybe<number>, netDebt?: Maybe<number>, netReceivables?: Maybe<number>, otherAssets?: Maybe<number>, otherCurrentAssets?: Maybe<number>, otherCurrentLiabilities?: Maybe<number>, otherLiabilities?: Maybe<number>, otherNonCurrentAssets?: Maybe<number>, otherNonCurrentLiabilities?: Maybe<number>, othertotalStockholdersEquity?: Maybe<number>, period?: Maybe<string>, propertyPlantEquipmentNet?: Maybe<number>, reportedCurrency?: Maybe<string>, retainedEarnings?: Maybe<number>, shortTermDebt?: Maybe<number>, shortTermInvestments?: Maybe<number>, symbol?: Maybe<string>, taxAssets?: Maybe<number>, taxPayables?: Maybe<number>, totalAssets?: Maybe<number>, totalCurrentAssets?: Maybe<number>, totalCurrentLiabilities?: Maybe<number>, totalDebt?: Maybe<number>, totalInvestments?: Maybe<number>, totalLiabilities?: Maybe<number>, totalLiabilitiesAndStockholdersEquity?: Maybe<number>, totalNonCurrentAssets?: Maybe<number>, totalNonCurrentLiabilities?: Maybe<number>, totalStockholdersEquity?: Maybe<number> }>>>, cash?: Maybe<Array<Maybe<{ __typename?: 'STFMCashFlow', acceptedDate?: Maybe<string>, accountsPayables?: Maybe<number>, accountsReceivables?: Maybe<number>, acquisitionsNet?: Maybe<number>, capitalExpenditure?: Maybe<number>, cashAtBeginningOfPeriod?: Maybe<number>, cashAtEndOfPeriod?: Maybe<number>, changeInWorkingCapital?: Maybe<number>, commonStockIssued?: Maybe<number>, commonStockRepurchased?: Maybe<number>, date?: Maybe<string>, debtRepayment?: Maybe<number>, deferredIncomeTax?: Maybe<number>, depreciationAndAmortization?: Maybe<number>, dividendsPaid?: Maybe<number>, effectOfForexChangesOnCash?: Maybe<number>, fillingDate?: Maybe<string>, finalLink?: Maybe<string>, freeCashFlow?: Maybe<number>, inventory?: Maybe<number>, investmentsInPropertyPlantAndEquipment?: Maybe<number>, link?: Maybe<string>, netCashProvidedByOperatingActivities?: Maybe<number>, netCashUsedForInvestingActivites?: Maybe<number>, netCashUsedProvidedByFinancingActivities?: Maybe<number>, netChangeInCash?: Maybe<number>, netIncome?: Maybe<number>, operatingCashFlow?: Maybe<number>, otherFinancingActivites?: Maybe<number>, otherInvestingActivites?: Maybe<number>, otherNonCashItems?: Maybe<number>, otherWorkingCapital?: Maybe<number>, period?: Maybe<string>, purchasesOfInvestments?: Maybe<number>, reportedCurrency?: Maybe<string>, salesMaturitiesOfInvestments?: Maybe<number>, stockBasedCompensation?: Maybe<number>, symbol?: Maybe<string> }>>>, income?: Maybe<Array<Maybe<{ __typename?: 'STFMIncomeStatement', acceptedDate?: Maybe<string>, costAndExpenses?: Maybe<number>, costOfRevenue?: Maybe<number>, date?: Maybe<string>, depreciationAndAmortization?: Maybe<number>, ebitda?: Maybe<number>, ebitdaratio?: Maybe<number>, eps?: Maybe<number>, epsdiluted?: Maybe<number>, fillingDate?: Maybe<string>, finalLink?: Maybe<string>, generalAndAdministrativeExpenses?: Maybe<number>, grossProfit?: Maybe<number>, grossProfitRatio?: Maybe<number>, incomeBeforeTax?: Maybe<number>, incomeBeforeTaxRatio?: Maybe<number>, incomeTaxExpense?: Maybe<number>, interestExpense?: Maybe<number>, link?: Maybe<string>, netIncome?: Maybe<number>, netIncomeRatio?: Maybe<number>, operatingExpenses?: Maybe<number>, operatingIncome?: Maybe<number>, operatingIncomeRatio?: Maybe<number>, otherExpenses?: Maybe<number>, period?: Maybe<string>, reportedCurrency?: Maybe<string>, researchAndDevelopmentExpenses?: Maybe<number>, revenue?: Maybe<number>, sellingAndMarketingExpenses?: Maybe<number>, sellingGeneralAndAdministrativeExpenses?: Maybe<number>, symbol?: Maybe<string>, totalOtherIncomeExpensesNet?: Maybe<number>, weightedAverageShsOut?: Maybe<number>, weightedAverageShsOutDil?: Maybe<number> }>>> }>, insideTrades?: Maybe<Array<Maybe<{ __typename?: 'STFMInsideTrade', acquistionOrDisposition?: Maybe<string>, companyCik?: Maybe<string>, formType?: Maybe<string>, link?: Maybe<string>, price?: Maybe<number>, reportingCik?: Maybe<string>, reportingName?: Maybe<string>, securitiesOwned?: Maybe<number>, securitiesTransacted?: Maybe<number>, securityName?: Maybe<string>, symbol?: Maybe<string>, transactionDate?: Maybe<string>, transactionType?: Maybe<string>, typeOfOwner?: Maybe<string> }>>>, keyExecutives?: Maybe<Array<Maybe<{ __typename?: 'STFMKeyExecutive', currencyPay?: Maybe<string>, gender?: Maybe<string>, name?: Maybe<string>, pay?: Maybe<number>, title?: Maybe<string> }>>>, rating?: Maybe<{ __typename?: 'STFMRating', date?: Maybe<string>, rating?: Maybe<string>, ratingDetailsDCFRecommendation?: Maybe<string>, ratingDetailsDCFScore?: Maybe<number>, ratingDetailsDERecommendation?: Maybe<string>, ratingDetailsDEScore?: Maybe<number>, ratingDetailsPBRecommendation?: Maybe<string>, ratingDetailsPBScore?: Maybe<number>, ratingDetailsPERecommendation?: Maybe<string>, ratingDetailsPEScore?: Maybe<number>, ratingDetailsROARecommendation?: Maybe<string>, ratingDetailsROAScore?: Maybe<number>, ratingDetailsROERecommendation?: Maybe<string>, ratingDetailsROEScore?: Maybe<number>, ratingRecommendation?: Maybe<string>, ratingScore?: Maybe<number>, symbol?: Maybe<string> }>, ratios?: Maybe<{ __typename?: 'STFMRatios', assetTurnoverTTM?: Maybe<number>, capitalExpenditureCoverageRatioTTM?: Maybe<number>, cashConversionCycleTTM?: Maybe<number>, cashFlowCoverageRatiosTTM?: Maybe<number>, cashFlowToDebtRatioTTM?: Maybe<number>, cashPerShareTTM?: Maybe<number>, cashRatioTTM?: Maybe<number>, companyEquityMultiplierTTM?: Maybe<number>, currentRatioTTM?: Maybe<number>, daysOfInventoryOutstandingTTM?: Maybe<number>, daysOfPayablesOutstandingTTM?: Maybe<number>, daysOfSalesOutstandingTTM?: Maybe<number>, debtEquityRatioTTM?: Maybe<number>, debtRatioTTM?: Maybe<number>, dividendPaidAndCapexCoverageRatioTTM?: Maybe<number>, dividendPerShareTTM?: Maybe<number>, dividendYielPercentageTTM?: Maybe<number>, dividendYielTTM?: Maybe<number>, dividendYieldTTM?: Maybe<number>, ebitPerRevenueTTM?: Maybe<number>, ebtPerEbitTTM?: Maybe<number>, effectiveTaxRateTTM?: Maybe<number>, enterpriseValueMultipleTTM?: Maybe<number>, fixedAssetTurnoverTTM?: Maybe<number>, freeCashFlowOperatingCashFlowRatioTTM?: Maybe<number>, freeCashFlowPerShareTTM?: Maybe<number>, grossProfitMarginTTM?: Maybe<number>, interestCoverageTTM?: Maybe<number>, inventoryTurnoverTTM?: Maybe<number>, longTermDebtToCapitalizationTTM?: Maybe<number>, netIncomePerEBTTTM?: Maybe<number>, netProfitMarginTTM?: Maybe<number>, operatingCashFlowPerShareTTM?: Maybe<number>, operatingCashFlowSalesRatioTTM?: Maybe<number>, operatingCycleTTM?: Maybe<number>, operatingProfitMarginTTM?: Maybe<number>, payablesTurnoverTTM?: Maybe<number>, payoutRatioTTM?: Maybe<number>, peRatioTTM?: Maybe<number>, pegRatioTTM?: Maybe<number>, pretaxProfitMarginTTM?: Maybe<number>, priceBookValueRatioTTM?: Maybe<number>, priceCashFlowRatioTTM?: Maybe<number>, priceEarningsRatioTTM?: Maybe<number>, priceEarningsToGrowthRatioTTM?: Maybe<number>, priceFairValueTTM?: Maybe<number>, priceSalesRatioTTM?: Maybe<number>, priceToBookRatioTTM?: Maybe<number>, priceToFreeCashFlowsRatioTTM?: Maybe<number>, priceToOperatingCashFlowsRatioTTM?: Maybe<number>, priceToSalesRatioTTM?: Maybe<number>, quickRatioTTM?: Maybe<number>, receivablesTurnoverTTM?: Maybe<number>, returnOnAssetsTTM?: Maybe<number>, returnOnCapitalEmployedTTM?: Maybe<number>, returnOnEquityTTM?: Maybe<number>, shortTermCoverageRatiosTTM?: Maybe<number>, totalDebtToCapitalizationTTM?: Maybe<number> }>, splitHistory?: Maybe<Array<Maybe<{ __typename?: 'STFMSplitHistory', date?: Maybe<string>, denominator?: Maybe<number>, label?: Maybe<string>, numerator?: Maybe<number>, symbol?: Maybe<string> }>>>, stockDividend?: Maybe<Array<Maybe<{ __typename?: 'STFMStockDividend', adjDividend?: Maybe<number>, date?: Maybe<string>, declarationDate?: Maybe<string>, dividend?: Maybe<number>, label?: Maybe<string>, paymentDate?: Maybe<string>, recordDate?: Maybe<string>, symbol?: Maybe<string> }>>>, stockNews?: Maybe<Array<Maybe<{ __typename?: 'STFMStockNew', image?: Maybe<string>, publishedDate?: Maybe<string>, site?: Maybe<string>, symbol?: Maybe<string>, text?: Maybe<string>, title?: Maybe<string>, url?: Maybe<string> }>>> }>, sectorPeers?: Maybe<Array<Maybe<{ __typename?: 'STFMCompanyQuote', avgVolume?: Maybe<number>, change?: Maybe<number>, changesPercentage?: Maybe<number>, dayHigh?: Maybe<number>, dayLow?: Maybe<number>, earningsAnnouncement?: Maybe<string>, eps?: Maybe<number>, exchange?: Maybe<string>, marketCap?: Maybe<number>, name?: Maybe<string>, open?: Maybe<number>, pe?: Maybe<number>, previousClose?: Maybe<number>, price?: Maybe<number>, priceAvg200?: Maybe<number>, priceAvg50?: Maybe<number>, sharesOutstanding?: Maybe<number>, symbol?: Maybe<string>, timestamp?: Maybe<number>, volume?: Maybe<number>, yearHigh?: Maybe<number>, yearLow?: Maybe<number>, image?: Maybe<string> }>>> }> };

export type QueryStockFinancialReportsQueryVariables = Exact<{
  symbol: Scalars['String'];
}>;


export type QueryStockFinancialReportsQuery = { __typename?: 'Query', queryStockFinancialReports?: Maybe<{ __typename?: 'StockDetailsFinancialReports', id: string, allFinancialReportsQuarterly?: Maybe<Array<Maybe<{ __typename?: 'FinancialReport', acceptedDate?: Maybe<string>, accessNumber?: Maybe<string>, cik?: Maybe<string>, endDate?: Maybe<string>, filedDate?: Maybe<string>, form?: Maybe<string>, quarter?: Maybe<number>, startDate?: Maybe<string>, symbol?: Maybe<string>, year?: Maybe<number>, report?: Maybe<{ __typename?: 'FinancialReportStatement', bs?: Maybe<Array<Maybe<{ __typename?: 'FinancialReportStatementData', concept?: Maybe<string>, label?: Maybe<string>, unit?: Maybe<string>, value?: Maybe<number> }>>>, cf?: Maybe<Array<Maybe<{ __typename?: 'FinancialReportStatementData', concept?: Maybe<string>, label?: Maybe<string>, unit?: Maybe<string>, value?: Maybe<number> }>>>, ic?: Maybe<Array<Maybe<{ __typename?: 'FinancialReportStatementData', concept?: Maybe<string>, label?: Maybe<string>, unit?: Maybe<string>, value?: Maybe<number> }>>> }> }>>>, allFinancialReportsYearly?: Maybe<Array<Maybe<{ __typename?: 'FinancialReport', acceptedDate?: Maybe<string>, accessNumber?: Maybe<string>, cik?: Maybe<string>, endDate?: Maybe<string>, filedDate?: Maybe<string>, form?: Maybe<string>, quarter?: Maybe<number>, startDate?: Maybe<string>, symbol?: Maybe<string>, year?: Maybe<number>, report?: Maybe<{ __typename?: 'FinancialReportStatement', bs?: Maybe<Array<Maybe<{ __typename?: 'FinancialReportStatementData', concept?: Maybe<string>, label?: Maybe<string>, unit?: Maybe<string>, value?: Maybe<number> }>>>, cf?: Maybe<Array<Maybe<{ __typename?: 'FinancialReportStatementData', concept?: Maybe<string>, label?: Maybe<string>, unit?: Maybe<string>, value?: Maybe<number> }>>>, ic?: Maybe<Array<Maybe<{ __typename?: 'FinancialReportStatementData', concept?: Maybe<string>, label?: Maybe<string>, unit?: Maybe<string>, value?: Maybe<number> }>>> }> }>>> }> };

export type QueryStockSummaryQueryVariables = Exact<{
  symbol: Scalars['String'];
  allowReload?: Maybe<Scalars['Boolean']>;
}>;


export type QueryStockSummaryQuery = { __typename?: 'Query', queryStockSummary?: Maybe<{ __typename?: 'Summary', avgVolume?: Maybe<number>, ceo?: Maybe<string>, companyName?: Maybe<string>, currency?: Maybe<string>, dividendDate?: Maybe<string>, ePSTTM?: Maybe<number>, earningsDate?: Maybe<string>, exDividendDate?: Maybe<string>, exchangeName?: Maybe<string>, fiveTwoWeekRange?: Maybe<string>, forwardDividendRate?: Maybe<number>, forwardDividendYield?: Maybe<number>, forwardEPS?: Maybe<number>, forwardPE?: Maybe<number>, fullTimeEmployees?: Maybe<string>, id?: Maybe<string>, symbolType?: Maybe<SymbolType>, industry?: Maybe<string>, ipoDate?: Maybe<string>, beta?: Maybe<string>, countryFullName?: Maybe<string>, lastSplitDate?: Maybe<string>, lastSplitFactor?: Maybe<string>, logo_url?: Maybe<string>, longBusinessSummary?: Maybe<string>, marketCap?: Maybe<number>, marketPrice?: Maybe<number>, oneyTargetEst?: Maybe<number>, pERatioTTM?: Maybe<number>, previousClose?: Maybe<number>, recommendationKey?: Maybe<string>, recommendationMean?: Maybe<number>, sandPFiveTwoWeekChange?: Maybe<number>, sector?: Maybe<string>, sharesOutstanding?: Maybe<number>, shortRatio?: Maybe<number>, symbol?: Maybe<string>, targetEstOneyPercent?: Maybe<number>, volume?: Maybe<number>, website?: Maybe<string>, weekRangeFiveTwoMax?: Maybe<number>, weekRangeFiveTwoMin?: Maybe<number>, yearToDatePrice?: Maybe<number>, yearToDatePriceReturn?: Maybe<number>, isActivelyTrading?: Maybe<boolean>, residance?: Maybe<{ __typename?: 'SummaryResidance', city?: Maybe<string>, state?: Maybe<string>, country?: Maybe<string>, addressOne?: Maybe<string>, zip?: Maybe<string> }> }> };

export type QueryStockQuotesByPrefixQueryVariables = Exact<{
  symbolPrefix: Scalars['String'];
}>;


export type QueryStockQuotesByPrefixQuery = { __typename?: 'Query', queryStockQuotesByPrefix: Array<Maybe<{ __typename?: 'STFMCompanyQuote', avgVolume?: Maybe<number>, change?: Maybe<number>, changesPercentage?: Maybe<number>, dayHigh?: Maybe<number>, dayLow?: Maybe<number>, earningsAnnouncement?: Maybe<string>, eps?: Maybe<number>, exchange?: Maybe<string>, marketCap?: Maybe<number>, name?: Maybe<string>, open?: Maybe<number>, pe?: Maybe<number>, previousClose?: Maybe<number>, price?: Maybe<number>, priceAvg200?: Maybe<number>, priceAvg50?: Maybe<number>, sharesOutstanding?: Maybe<number>, symbol?: Maybe<string>, timestamp?: Maybe<number>, volume?: Maybe<number>, yearHigh?: Maybe<number>, yearLow?: Maybe<number>, image?: Maybe<string> }>> };

export type SetForceReloadStockDetailsMutationVariables = Exact<{ [key: string]: never; }>;


export type SetForceReloadStockDetailsMutation = { __typename?: 'Mutation', setForceReloadStockDetails?: Maybe<boolean> };

export type StTicketCommentFragmentFragment = { __typename?: 'STTicketComment', id: string, comment: string, createdAt: string, createdBy: { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string } };

export type StTicketFragmentFragment = { __typename?: 'STTicket', id: string, name: string, type: StTicketTypes, createdAt: string, isOpen: boolean, createdBy: { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string }, comments: Array<Maybe<{ __typename?: 'STTicketComment', id: string, comment: string, createdAt: string, createdBy: { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string } }>> };

export type CreateTicketMutationVariables = Exact<{
  ticketValuse: StTicketCreateValues;
}>;


export type CreateTicketMutation = { __typename?: 'Mutation', createTicket?: Maybe<{ __typename?: 'STTicket', id: string, name: string, type: StTicketTypes, createdAt: string, isOpen: boolean, createdBy: { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string }, comments: Array<Maybe<{ __typename?: 'STTicketComment', id: string, comment: string, createdAt: string, createdBy: { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string } }>> }> };

export type CommentTicketMutationVariables = Exact<{
  ticketId: Scalars['String'];
  comment: Scalars['String'];
}>;


export type CommentTicketMutation = { __typename?: 'Mutation', commentTicket?: Maybe<{ __typename?: 'STTicketComment', id: string, comment: string, createdAt: string, createdBy: { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string } }> };

export type CommentTicketEditMutationVariables = Exact<{
  commentEditValues: StTicketCommentEditValues;
}>;


export type CommentTicketEditMutation = { __typename?: 'Mutation', commentTicketEdit?: Maybe<string> };

export type CloseTicketMutationVariables = Exact<{
  ticketId: Scalars['String'];
}>;


export type CloseTicketMutation = { __typename?: 'Mutation', closeTicket?: Maybe<boolean> };

export type DeleteTicketMutationVariables = Exact<{
  ticketId: Scalars['String'];
}>;


export type DeleteTicketMutation = { __typename?: 'Mutation', deleteTicket?: Maybe<boolean> };

export type StHoldingFragmentFragment = { __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number, summary?: Maybe<{ __typename?: 'Summary', avgVolume?: Maybe<number>, ceo?: Maybe<string>, companyName?: Maybe<string>, currency?: Maybe<string>, dividendDate?: Maybe<string>, ePSTTM?: Maybe<number>, earningsDate?: Maybe<string>, exDividendDate?: Maybe<string>, exchangeName?: Maybe<string>, fiveTwoWeekRange?: Maybe<string>, forwardDividendRate?: Maybe<number>, forwardDividendYield?: Maybe<number>, forwardEPS?: Maybe<number>, forwardPE?: Maybe<number>, fullTimeEmployees?: Maybe<string>, id?: Maybe<string>, symbolType?: Maybe<SymbolType>, industry?: Maybe<string>, ipoDate?: Maybe<string>, beta?: Maybe<string>, countryFullName?: Maybe<string>, lastSplitDate?: Maybe<string>, lastSplitFactor?: Maybe<string>, logo_url?: Maybe<string>, longBusinessSummary?: Maybe<string>, marketCap?: Maybe<number>, marketPrice?: Maybe<number>, oneyTargetEst?: Maybe<number>, pERatioTTM?: Maybe<number>, previousClose?: Maybe<number>, recommendationKey?: Maybe<string>, recommendationMean?: Maybe<number>, sandPFiveTwoWeekChange?: Maybe<number>, sector?: Maybe<string>, sharesOutstanding?: Maybe<number>, shortRatio?: Maybe<number>, symbol?: Maybe<string>, targetEstOneyPercent?: Maybe<number>, volume?: Maybe<number>, website?: Maybe<string>, weekRangeFiveTwoMax?: Maybe<number>, weekRangeFiveTwoMin?: Maybe<number>, yearToDatePrice?: Maybe<number>, yearToDatePriceReturn?: Maybe<number>, isActivelyTrading?: Maybe<boolean>, residance?: Maybe<{ __typename?: 'SummaryResidance', city?: Maybe<string>, state?: Maybe<string>, country?: Maybe<string>, addressOne?: Maybe<string>, zip?: Maybe<string> }> }> };

export type StTransactionFragmentFragment = { __typename?: 'STTransaction', transactionId?: Maybe<string>, symbol: string, price: number, return?: Maybe<number>, returnChange?: Maybe<number>, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees?: Maybe<number> };

export type StTransactionFragmentWithUserFragment = { __typename?: 'STTransaction', transactionId?: Maybe<string>, symbol: string, price: number, return?: Maybe<number>, returnChange?: Maybe<number>, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees?: Maybe<number>, user?: Maybe<{ __typename?: 'STUserIndetification', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string }> };

export type StTransactionSnapshotFragmentFragment = { __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string };

export type PerformTransactionMutationVariables = Exact<{
  transactionInput: StTransactionInput;
}>;


export type PerformTransactionMutation = { __typename?: 'Mutation', performTransaction?: Maybe<{ __typename?: 'PerformedTransaction', holding?: Maybe<{ __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number, summary?: Maybe<{ __typename?: 'Summary', avgVolume?: Maybe<number>, ceo?: Maybe<string>, companyName?: Maybe<string>, currency?: Maybe<string>, dividendDate?: Maybe<string>, ePSTTM?: Maybe<number>, earningsDate?: Maybe<string>, exDividendDate?: Maybe<string>, exchangeName?: Maybe<string>, fiveTwoWeekRange?: Maybe<string>, forwardDividendRate?: Maybe<number>, forwardDividendYield?: Maybe<number>, forwardEPS?: Maybe<number>, forwardPE?: Maybe<number>, fullTimeEmployees?: Maybe<string>, id?: Maybe<string>, symbolType?: Maybe<SymbolType>, industry?: Maybe<string>, ipoDate?: Maybe<string>, beta?: Maybe<string>, countryFullName?: Maybe<string>, lastSplitDate?: Maybe<string>, lastSplitFactor?: Maybe<string>, logo_url?: Maybe<string>, longBusinessSummary?: Maybe<string>, marketCap?: Maybe<number>, marketPrice?: Maybe<number>, oneyTargetEst?: Maybe<number>, pERatioTTM?: Maybe<number>, previousClose?: Maybe<number>, recommendationKey?: Maybe<string>, recommendationMean?: Maybe<number>, sandPFiveTwoWeekChange?: Maybe<number>, sector?: Maybe<string>, sharesOutstanding?: Maybe<number>, shortRatio?: Maybe<number>, symbol?: Maybe<string>, targetEstOneyPercent?: Maybe<number>, volume?: Maybe<number>, website?: Maybe<string>, weekRangeFiveTwoMax?: Maybe<number>, weekRangeFiveTwoMin?: Maybe<number>, yearToDatePrice?: Maybe<number>, yearToDatePriceReturn?: Maybe<number>, isActivelyTrading?: Maybe<boolean>, residance?: Maybe<{ __typename?: 'SummaryResidance', city?: Maybe<string>, state?: Maybe<string>, country?: Maybe<string>, addressOne?: Maybe<string>, zip?: Maybe<string> }> }> }>, transaction: { __typename?: 'STTransaction', transactionId?: Maybe<string>, symbol: string, price: number, return?: Maybe<number>, returnChange?: Maybe<number>, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees?: Maybe<number> } }> };

export type StUserIndetificationFragmentFragment = { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string };

export type StUserIndetificationBaseFragmentFragment = { __typename?: 'STUserIndetificationBase', nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string };

export type StUserIndentificationDataFragment = { __typename?: 'STUserPublicData', id: string, nickName: string, locale?: Maybe<string>, photoURL?: Maybe<string>, accountCreatedDate: string, lastSignInDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> } };

export type StGroupMemberOverviewFragment = { __typename?: 'STUserPublicData', nickName: string, locale?: Maybe<string>, photoURL?: Maybe<string>, accountCreatedDate: string, lastSignInDate: string, activity?: Maybe<User_Activity>, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, rank?: Maybe<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }>, transactionsSnippets: Array<Maybe<{ __typename?: 'STTransaction', transactionId?: Maybe<string>, symbol: string, price: number, return?: Maybe<number>, returnChange?: Maybe<number>, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees?: Maybe<number> }>>, topTransactions: Array<Maybe<{ __typename?: 'STTransaction', transactionId?: Maybe<string>, symbol: string, price: number, return?: Maybe<number>, returnChange?: Maybe<number>, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees?: Maybe<number> }>>, holdings: Array<Maybe<{ __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number, summary?: Maybe<{ __typename?: 'Summary', avgVolume?: Maybe<number>, ceo?: Maybe<string>, companyName?: Maybe<string>, currency?: Maybe<string>, dividendDate?: Maybe<string>, ePSTTM?: Maybe<number>, earningsDate?: Maybe<string>, exDividendDate?: Maybe<string>, exchangeName?: Maybe<string>, fiveTwoWeekRange?: Maybe<string>, forwardDividendRate?: Maybe<number>, forwardDividendYield?: Maybe<number>, forwardEPS?: Maybe<number>, forwardPE?: Maybe<number>, fullTimeEmployees?: Maybe<string>, id?: Maybe<string>, symbolType?: Maybe<SymbolType>, industry?: Maybe<string>, ipoDate?: Maybe<string>, beta?: Maybe<string>, countryFullName?: Maybe<string>, lastSplitDate?: Maybe<string>, lastSplitFactor?: Maybe<string>, logo_url?: Maybe<string>, longBusinessSummary?: Maybe<string>, marketCap?: Maybe<number>, marketPrice?: Maybe<number>, oneyTargetEst?: Maybe<number>, pERatioTTM?: Maybe<number>, previousClose?: Maybe<number>, recommendationKey?: Maybe<string>, recommendationMean?: Maybe<number>, sandPFiveTwoWeekChange?: Maybe<number>, sector?: Maybe<string>, sharesOutstanding?: Maybe<number>, shortRatio?: Maybe<number>, symbol?: Maybe<string>, targetEstOneyPercent?: Maybe<number>, volume?: Maybe<number>, website?: Maybe<string>, weekRangeFiveTwoMax?: Maybe<number>, weekRangeFiveTwoMin?: Maybe<number>, yearToDatePrice?: Maybe<number>, yearToDatePriceReturn?: Maybe<number>, isActivelyTrading?: Maybe<boolean>, residance?: Maybe<{ __typename?: 'SummaryResidance', city?: Maybe<string>, state?: Maybe<string>, country?: Maybe<string>, addressOne?: Maybe<string>, zip?: Maybe<string> }> }> }>>, userHistoricalData: { __typename?: 'STUserHistoricalData', userLogs: Array<Maybe<{ __typename?: 'STLog', date: string, logText: string }>>, resetedAccount: Array<Maybe<{ __typename?: 'STUserResetedAccount', date: string, portfolioTotal: number }>>, bestAchievedRanks: Array<Maybe<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }>>, portfolioSnapshots: Array<Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>>, transactionSnapshots: Array<Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }>> } };

export type StUserPublicDataSearchFragment = { __typename?: 'STUserPublicData', nickName: string, locale?: Maybe<string>, photoURL?: Maybe<string>, accountCreatedDate: string, lastSignInDate: string, activity?: Maybe<User_Activity>, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, rank?: Maybe<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }>, transactionsSnippets: Array<Maybe<{ __typename?: 'STTransaction', transactionId?: Maybe<string>, symbol: string, price: number, return?: Maybe<number>, returnChange?: Maybe<number>, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees?: Maybe<number> }>>, topTransactions: Array<Maybe<{ __typename?: 'STTransaction', transactionId?: Maybe<string>, symbol: string, price: number, return?: Maybe<number>, returnChange?: Maybe<number>, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees?: Maybe<number> }>>, holdings: Array<Maybe<{ __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number, summary?: Maybe<{ __typename?: 'Summary', avgVolume?: Maybe<number>, ceo?: Maybe<string>, companyName?: Maybe<string>, currency?: Maybe<string>, dividendDate?: Maybe<string>, ePSTTM?: Maybe<number>, earningsDate?: Maybe<string>, exDividendDate?: Maybe<string>, exchangeName?: Maybe<string>, fiveTwoWeekRange?: Maybe<string>, forwardDividendRate?: Maybe<number>, forwardDividendYield?: Maybe<number>, forwardEPS?: Maybe<number>, forwardPE?: Maybe<number>, fullTimeEmployees?: Maybe<string>, id?: Maybe<string>, symbolType?: Maybe<SymbolType>, industry?: Maybe<string>, ipoDate?: Maybe<string>, beta?: Maybe<string>, countryFullName?: Maybe<string>, lastSplitDate?: Maybe<string>, lastSplitFactor?: Maybe<string>, logo_url?: Maybe<string>, longBusinessSummary?: Maybe<string>, marketCap?: Maybe<number>, marketPrice?: Maybe<number>, oneyTargetEst?: Maybe<number>, pERatioTTM?: Maybe<number>, previousClose?: Maybe<number>, recommendationKey?: Maybe<string>, recommendationMean?: Maybe<number>, sandPFiveTwoWeekChange?: Maybe<number>, sector?: Maybe<string>, sharesOutstanding?: Maybe<number>, shortRatio?: Maybe<number>, symbol?: Maybe<string>, targetEstOneyPercent?: Maybe<number>, volume?: Maybe<number>, website?: Maybe<string>, weekRangeFiveTwoMax?: Maybe<number>, weekRangeFiveTwoMin?: Maybe<number>, yearToDatePrice?: Maybe<number>, yearToDatePriceReturn?: Maybe<number>, isActivelyTrading?: Maybe<boolean>, residance?: Maybe<{ __typename?: 'SummaryResidance', city?: Maybe<string>, state?: Maybe<string>, country?: Maybe<string>, addressOne?: Maybe<string>, zip?: Maybe<string> }> }> }>>, userHistoricalData: { __typename?: 'STUserHistoricalData', userLogs: Array<Maybe<{ __typename?: 'STLog', date: string, logText: string }>>, resetedAccount: Array<Maybe<{ __typename?: 'STUserResetedAccount', date: string, portfolioTotal: number }>>, bestAchievedRanks: Array<Maybe<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }>>, portfolioSnapshots: Array<Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>>, transactionSnapshots: Array<Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }>> }, groups: { __typename?: 'STUserGroups', groupOwner?: Maybe<Array<Maybe<{ __typename?: 'STGroupAllData', id: string, name: string, description?: Maybe<string>, imagePath?: Maybe<string>, imageUrl?: Maybe<string>, startDate: string, endDate?: Maybe<string>, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfInvitationSent: number, numberOfInvitationReceived: number, lastUpdateDate: string, lastEditedDate: string, createdDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> }, topMembers: Array<Maybe<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }>>, currentAchievedRanks?: Maybe<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }> }>>>, groupMember?: Maybe<Array<Maybe<{ __typename?: 'STGroupAllData', id: string, name: string, description?: Maybe<string>, imagePath?: Maybe<string>, imageUrl?: Maybe<string>, startDate: string, endDate?: Maybe<string>, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfInvitationSent: number, numberOfInvitationReceived: number, lastUpdateDate: string, lastEditedDate: string, createdDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> }, topMembers: Array<Maybe<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }>>, currentAchievedRanks?: Maybe<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }> }>>> } };

export type AuthenticateUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type AuthenticateUserQuery = { __typename?: 'Query', authenticateUser?: Maybe<{ __typename?: 'STUserPublicData', id: string, nickName: string, locale?: Maybe<string>, photoURL?: Maybe<string>, accountCreatedDate: string, lastSignInDate: string, activity?: Maybe<User_Activity>, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, rank?: Maybe<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }>, transactionsSnippets: Array<Maybe<{ __typename?: 'STTransaction', transactionId?: Maybe<string>, symbol: string, price: number, return?: Maybe<number>, returnChange?: Maybe<number>, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees?: Maybe<number> }>>, topTransactions: Array<Maybe<{ __typename?: 'STTransaction', transactionId?: Maybe<string>, symbol: string, price: number, return?: Maybe<number>, returnChange?: Maybe<number>, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees?: Maybe<number> }>>, holdings: Array<Maybe<{ __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number, summary?: Maybe<{ __typename?: 'Summary', avgVolume?: Maybe<number>, ceo?: Maybe<string>, companyName?: Maybe<string>, currency?: Maybe<string>, dividendDate?: Maybe<string>, ePSTTM?: Maybe<number>, earningsDate?: Maybe<string>, exDividendDate?: Maybe<string>, exchangeName?: Maybe<string>, fiveTwoWeekRange?: Maybe<string>, forwardDividendRate?: Maybe<number>, forwardDividendYield?: Maybe<number>, forwardEPS?: Maybe<number>, forwardPE?: Maybe<number>, fullTimeEmployees?: Maybe<string>, id?: Maybe<string>, symbolType?: Maybe<SymbolType>, industry?: Maybe<string>, ipoDate?: Maybe<string>, beta?: Maybe<string>, countryFullName?: Maybe<string>, lastSplitDate?: Maybe<string>, lastSplitFactor?: Maybe<string>, logo_url?: Maybe<string>, longBusinessSummary?: Maybe<string>, marketCap?: Maybe<number>, marketPrice?: Maybe<number>, oneyTargetEst?: Maybe<number>, pERatioTTM?: Maybe<number>, previousClose?: Maybe<number>, recommendationKey?: Maybe<string>, recommendationMean?: Maybe<number>, sandPFiveTwoWeekChange?: Maybe<number>, sector?: Maybe<string>, sharesOutstanding?: Maybe<number>, shortRatio?: Maybe<number>, symbol?: Maybe<string>, targetEstOneyPercent?: Maybe<number>, volume?: Maybe<number>, website?: Maybe<string>, weekRangeFiveTwoMax?: Maybe<number>, weekRangeFiveTwoMin?: Maybe<number>, yearToDatePrice?: Maybe<number>, yearToDatePriceReturn?: Maybe<number>, isActivelyTrading?: Maybe<boolean>, residance?: Maybe<{ __typename?: 'SummaryResidance', city?: Maybe<string>, state?: Maybe<string>, country?: Maybe<string>, addressOne?: Maybe<string>, zip?: Maybe<string> }> }> }>>, groups: { __typename?: 'STUserGroups', groupInvitationSent?: Maybe<Array<Maybe<{ __typename?: 'STGroupAllData', id: string, name: string, description?: Maybe<string>, imagePath?: Maybe<string>, imageUrl?: Maybe<string>, startDate: string, endDate?: Maybe<string>, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfInvitationSent: number, numberOfInvitationReceived: number, lastUpdateDate: string, lastEditedDate: string, createdDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> }, topMembers: Array<Maybe<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }>>, currentAchievedRanks?: Maybe<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }> }>>>, groupInvitationReceived?: Maybe<Array<Maybe<{ __typename?: 'STGroupAllData', id: string, name: string, description?: Maybe<string>, imagePath?: Maybe<string>, imageUrl?: Maybe<string>, startDate: string, endDate?: Maybe<string>, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfInvitationSent: number, numberOfInvitationReceived: number, lastUpdateDate: string, lastEditedDate: string, createdDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> }, topMembers: Array<Maybe<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }>>, currentAchievedRanks?: Maybe<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }> }>>>, groupOwner?: Maybe<Array<Maybe<{ __typename?: 'STGroupAllData', id: string, name: string, description?: Maybe<string>, imagePath?: Maybe<string>, imageUrl?: Maybe<string>, startDate: string, endDate?: Maybe<string>, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfInvitationSent: number, numberOfInvitationReceived: number, lastUpdateDate: string, lastEditedDate: string, createdDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> }, topMembers: Array<Maybe<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }>>, currentAchievedRanks?: Maybe<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }> }>>>, groupMember?: Maybe<Array<Maybe<{ __typename?: 'STGroupAllData', id: string, name: string, description?: Maybe<string>, imagePath?: Maybe<string>, imageUrl?: Maybe<string>, startDate: string, endDate?: Maybe<string>, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfInvitationSent: number, numberOfInvitationReceived: number, lastUpdateDate: string, lastEditedDate: string, createdDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> }, topMembers: Array<Maybe<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }>>, currentAchievedRanks?: Maybe<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }> }>>> }, userHistoricalData: { __typename?: 'STUserHistoricalData', userLogs: Array<Maybe<{ __typename?: 'STLog', date: string, logText: string }>>, resetedAccount: Array<Maybe<{ __typename?: 'STUserResetedAccount', date: string, portfolioTotal: number }>>, bestAchievedRanks: Array<Maybe<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }>>, portfolioSnapshots: Array<Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>>, transactionSnapshots: Array<Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }>> }, userPrivateData: { __typename?: 'STUserPrivateData', tradingEnabledDate?: Maybe<string>, finnhubKey?: Maybe<string>, roles: Array<Maybe<string>>, email: string, displayName: string, providerId?: Maybe<string>, status: User_Status, nicknameLastChange?: Maybe<string>, tickets: Array<Maybe<{ __typename?: 'STTicket', id: string, name: string, type: StTicketTypes, createdAt: string, isOpen: boolean, createdBy: { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string }, comments: Array<Maybe<{ __typename?: 'STTicketComment', id: string, comment: string, createdAt: string, createdBy: { __typename?: 'STUserIndetification', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string } }>> }>> }, stockWatchlist: Array<Maybe<{ __typename?: 'STStockWatchlist', id: string, name: string, date?: Maybe<string>, userId: string, summaries?: Maybe<Array<Maybe<{ __typename?: 'Summary', avgVolume?: Maybe<number>, ceo?: Maybe<string>, companyName?: Maybe<string>, currency?: Maybe<string>, dividendDate?: Maybe<string>, ePSTTM?: Maybe<number>, earningsDate?: Maybe<string>, exDividendDate?: Maybe<string>, exchangeName?: Maybe<string>, fiveTwoWeekRange?: Maybe<string>, forwardDividendRate?: Maybe<number>, forwardDividendYield?: Maybe<number>, forwardEPS?: Maybe<number>, forwardPE?: Maybe<number>, fullTimeEmployees?: Maybe<string>, id?: Maybe<string>, symbolType?: Maybe<SymbolType>, industry?: Maybe<string>, ipoDate?: Maybe<string>, beta?: Maybe<string>, countryFullName?: Maybe<string>, lastSplitDate?: Maybe<string>, lastSplitFactor?: Maybe<string>, logo_url?: Maybe<string>, longBusinessSummary?: Maybe<string>, marketCap?: Maybe<number>, marketPrice?: Maybe<number>, oneyTargetEst?: Maybe<number>, pERatioTTM?: Maybe<number>, previousClose?: Maybe<number>, recommendationKey?: Maybe<string>, recommendationMean?: Maybe<number>, sandPFiveTwoWeekChange?: Maybe<number>, sector?: Maybe<string>, sharesOutstanding?: Maybe<number>, shortRatio?: Maybe<number>, symbol?: Maybe<string>, targetEstOneyPercent?: Maybe<number>, volume?: Maybe<number>, website?: Maybe<string>, weekRangeFiveTwoMax?: Maybe<number>, weekRangeFiveTwoMin?: Maybe<number>, yearToDatePrice?: Maybe<number>, yearToDatePriceReturn?: Maybe<number>, isActivelyTrading?: Maybe<boolean>, residance?: Maybe<{ __typename?: 'SummaryResidance', city?: Maybe<string>, state?: Maybe<string>, country?: Maybe<string>, addressOne?: Maybe<string>, zip?: Maybe<string> }> }>>> }>> }> };

export type QueryUserIdentificationByUsernameQueryVariables = Exact<{
  usernamePrefix: Scalars['String'];
}>;


export type QueryUserIdentificationByUsernameQuery = { __typename?: 'Query', queryUserPublicDataByUsername: Array<Maybe<{ __typename?: 'STUserPublicData', id: string, nickName: string, locale?: Maybe<string>, photoURL?: Maybe<string>, accountCreatedDate: string, lastSignInDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> } }>> };

export type QueryStGroupMemberOverviewByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type QueryStGroupMemberOverviewByIdQuery = { __typename?: 'Query', queryUserPublicDataById?: Maybe<{ __typename?: 'STUserPublicData', nickName: string, locale?: Maybe<string>, photoURL?: Maybe<string>, accountCreatedDate: string, lastSignInDate: string, activity?: Maybe<User_Activity>, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, rank?: Maybe<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }>, transactionsSnippets: Array<Maybe<{ __typename?: 'STTransaction', transactionId?: Maybe<string>, symbol: string, price: number, return?: Maybe<number>, returnChange?: Maybe<number>, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees?: Maybe<number> }>>, topTransactions: Array<Maybe<{ __typename?: 'STTransaction', transactionId?: Maybe<string>, symbol: string, price: number, return?: Maybe<number>, returnChange?: Maybe<number>, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees?: Maybe<number> }>>, holdings: Array<Maybe<{ __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number, summary?: Maybe<{ __typename?: 'Summary', avgVolume?: Maybe<number>, ceo?: Maybe<string>, companyName?: Maybe<string>, currency?: Maybe<string>, dividendDate?: Maybe<string>, ePSTTM?: Maybe<number>, earningsDate?: Maybe<string>, exDividendDate?: Maybe<string>, exchangeName?: Maybe<string>, fiveTwoWeekRange?: Maybe<string>, forwardDividendRate?: Maybe<number>, forwardDividendYield?: Maybe<number>, forwardEPS?: Maybe<number>, forwardPE?: Maybe<number>, fullTimeEmployees?: Maybe<string>, id?: Maybe<string>, symbolType?: Maybe<SymbolType>, industry?: Maybe<string>, ipoDate?: Maybe<string>, beta?: Maybe<string>, countryFullName?: Maybe<string>, lastSplitDate?: Maybe<string>, lastSplitFactor?: Maybe<string>, logo_url?: Maybe<string>, longBusinessSummary?: Maybe<string>, marketCap?: Maybe<number>, marketPrice?: Maybe<number>, oneyTargetEst?: Maybe<number>, pERatioTTM?: Maybe<number>, previousClose?: Maybe<number>, recommendationKey?: Maybe<string>, recommendationMean?: Maybe<number>, sandPFiveTwoWeekChange?: Maybe<number>, sector?: Maybe<string>, sharesOutstanding?: Maybe<number>, shortRatio?: Maybe<number>, symbol?: Maybe<string>, targetEstOneyPercent?: Maybe<number>, volume?: Maybe<number>, website?: Maybe<string>, weekRangeFiveTwoMax?: Maybe<number>, weekRangeFiveTwoMin?: Maybe<number>, yearToDatePrice?: Maybe<number>, yearToDatePriceReturn?: Maybe<number>, isActivelyTrading?: Maybe<boolean>, residance?: Maybe<{ __typename?: 'SummaryResidance', city?: Maybe<string>, state?: Maybe<string>, country?: Maybe<string>, addressOne?: Maybe<string>, zip?: Maybe<string> }> }> }>>, userHistoricalData: { __typename?: 'STUserHistoricalData', userLogs: Array<Maybe<{ __typename?: 'STLog', date: string, logText: string }>>, resetedAccount: Array<Maybe<{ __typename?: 'STUserResetedAccount', date: string, portfolioTotal: number }>>, bestAchievedRanks: Array<Maybe<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }>>, portfolioSnapshots: Array<Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>>, transactionSnapshots: Array<Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }>> } }> };

export type QueryStUserPublicDataSearchByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type QueryStUserPublicDataSearchByIdQuery = { __typename?: 'Query', queryUserPublicDataById?: Maybe<{ __typename?: 'STUserPublicData', nickName: string, locale?: Maybe<string>, photoURL?: Maybe<string>, accountCreatedDate: string, lastSignInDate: string, activity?: Maybe<User_Activity>, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, rank?: Maybe<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }>, transactionsSnippets: Array<Maybe<{ __typename?: 'STTransaction', transactionId?: Maybe<string>, symbol: string, price: number, return?: Maybe<number>, returnChange?: Maybe<number>, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees?: Maybe<number> }>>, topTransactions: Array<Maybe<{ __typename?: 'STTransaction', transactionId?: Maybe<string>, symbol: string, price: number, return?: Maybe<number>, returnChange?: Maybe<number>, units: number, date: string, operation: StTransactionOperationEnum, symbol_logo_url: string, transactionFees?: Maybe<number> }>>, holdings: Array<Maybe<{ __typename?: 'STHolding', symbol: string, breakEvenPrice: number, units: number, summary?: Maybe<{ __typename?: 'Summary', avgVolume?: Maybe<number>, ceo?: Maybe<string>, companyName?: Maybe<string>, currency?: Maybe<string>, dividendDate?: Maybe<string>, ePSTTM?: Maybe<number>, earningsDate?: Maybe<string>, exDividendDate?: Maybe<string>, exchangeName?: Maybe<string>, fiveTwoWeekRange?: Maybe<string>, forwardDividendRate?: Maybe<number>, forwardDividendYield?: Maybe<number>, forwardEPS?: Maybe<number>, forwardPE?: Maybe<number>, fullTimeEmployees?: Maybe<string>, id?: Maybe<string>, symbolType?: Maybe<SymbolType>, industry?: Maybe<string>, ipoDate?: Maybe<string>, beta?: Maybe<string>, countryFullName?: Maybe<string>, lastSplitDate?: Maybe<string>, lastSplitFactor?: Maybe<string>, logo_url?: Maybe<string>, longBusinessSummary?: Maybe<string>, marketCap?: Maybe<number>, marketPrice?: Maybe<number>, oneyTargetEst?: Maybe<number>, pERatioTTM?: Maybe<number>, previousClose?: Maybe<number>, recommendationKey?: Maybe<string>, recommendationMean?: Maybe<number>, sandPFiveTwoWeekChange?: Maybe<number>, sector?: Maybe<string>, sharesOutstanding?: Maybe<number>, shortRatio?: Maybe<number>, symbol?: Maybe<string>, targetEstOneyPercent?: Maybe<number>, volume?: Maybe<number>, website?: Maybe<string>, weekRangeFiveTwoMax?: Maybe<number>, weekRangeFiveTwoMin?: Maybe<number>, yearToDatePrice?: Maybe<number>, yearToDatePriceReturn?: Maybe<number>, isActivelyTrading?: Maybe<boolean>, residance?: Maybe<{ __typename?: 'SummaryResidance', city?: Maybe<string>, state?: Maybe<string>, country?: Maybe<string>, addressOne?: Maybe<string>, zip?: Maybe<string> }> }> }>>, userHistoricalData: { __typename?: 'STUserHistoricalData', userLogs: Array<Maybe<{ __typename?: 'STLog', date: string, logText: string }>>, resetedAccount: Array<Maybe<{ __typename?: 'STUserResetedAccount', date: string, portfolioTotal: number }>>, bestAchievedRanks: Array<Maybe<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }>>, portfolioSnapshots: Array<Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>>, transactionSnapshots: Array<Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }>> }, groups: { __typename?: 'STUserGroups', groupOwner?: Maybe<Array<Maybe<{ __typename?: 'STGroupAllData', id: string, name: string, description?: Maybe<string>, imagePath?: Maybe<string>, imageUrl?: Maybe<string>, startDate: string, endDate?: Maybe<string>, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfInvitationSent: number, numberOfInvitationReceived: number, lastUpdateDate: string, lastEditedDate: string, createdDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> }, topMembers: Array<Maybe<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }>>, currentAchievedRanks?: Maybe<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }> }>>>, groupMember?: Maybe<Array<Maybe<{ __typename?: 'STGroupAllData', id: string, name: string, description?: Maybe<string>, imagePath?: Maybe<string>, imageUrl?: Maybe<string>, startDate: string, endDate?: Maybe<string>, isInfinite: boolean, isPrivate: boolean, isClosed: boolean, numberOfMembers: number, numberOfInvitationSent: number, numberOfInvitationReceived: number, lastUpdateDate: string, lastEditedDate: string, createdDate: string, owner: { __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> }, topMembers: Array<Maybe<{ __typename?: 'STGroupUser', id: string, nickName: string, locale?: Maybe<string>, photoURL: string, accountCreatedDate: string, previousPosition?: Maybe<number>, currentPosition?: Maybe<number>, sinceDate: string, portfolio: { __typename?: 'STPortfolioWrapper', portfolioCash: number, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, lastPortfolioIncreaseNumber?: Maybe<number>, lastPortfolioIncreasePrct?: Maybe<number>, transactionFees?: Maybe<number>, lastPortfolioSnapshot?: Maybe<{ __typename?: 'STPortfolioSnapshot', portfolioInvested: number, portfolioCash: number, date: string }>, lastTransactionSnapshot?: Maybe<{ __typename?: 'STTransactionSnapshot', transactionsBuy?: Maybe<number>, transactionsSell?: Maybe<number>, transactionFees?: Maybe<number>, date: string }> }, startedPortfolio: { __typename?: 'STPortfolioSnapshotStarted', portfolioInvested: number, portfolioCash: number, date: string, numberOfExecutedBuyTransactions: number, numberOfExecutedSellTransactions: number, transactionFees?: Maybe<number> } }>>, currentAchievedRanks?: Maybe<{ __typename?: 'STRank', rankGainers: number, rankLosers: number, rankPortfolio: number, rankProfit: number, rankNumberOfTrades: number, date: string }> }>>> } }> };

export type RegisterUserMutationVariables = Exact<{
  stUserAuthenticationInput: StUserAuthenticationInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser?: Maybe<boolean> };

export type EditUserMutationVariables = Exact<{
  editInput: StUserEditDataInput;
}>;


export type EditUserMutation = { __typename?: 'Mutation', editUser?: Maybe<boolean> };

export type ResetUserAccountMutationVariables = Exact<{
  userId: Scalars['String'];
}>;


export type ResetUserAccountMutation = { __typename?: 'Mutation', resetUserAccount?: Maybe<{ __typename?: 'STUserResetedAccount', date: string, portfolioTotal: number }> };

export type StStockWatchlistFragmentFragment = { __typename?: 'STStockWatchlist', id: string, name: string, date?: Maybe<string>, userId: string, summaries?: Maybe<Array<Maybe<{ __typename?: 'Summary', avgVolume?: Maybe<number>, ceo?: Maybe<string>, companyName?: Maybe<string>, currency?: Maybe<string>, dividendDate?: Maybe<string>, ePSTTM?: Maybe<number>, earningsDate?: Maybe<string>, exDividendDate?: Maybe<string>, exchangeName?: Maybe<string>, fiveTwoWeekRange?: Maybe<string>, forwardDividendRate?: Maybe<number>, forwardDividendYield?: Maybe<number>, forwardEPS?: Maybe<number>, forwardPE?: Maybe<number>, fullTimeEmployees?: Maybe<string>, id?: Maybe<string>, symbolType?: Maybe<SymbolType>, industry?: Maybe<string>, ipoDate?: Maybe<string>, beta?: Maybe<string>, countryFullName?: Maybe<string>, lastSplitDate?: Maybe<string>, lastSplitFactor?: Maybe<string>, logo_url?: Maybe<string>, longBusinessSummary?: Maybe<string>, marketCap?: Maybe<number>, marketPrice?: Maybe<number>, oneyTargetEst?: Maybe<number>, pERatioTTM?: Maybe<number>, previousClose?: Maybe<number>, recommendationKey?: Maybe<string>, recommendationMean?: Maybe<number>, sandPFiveTwoWeekChange?: Maybe<number>, sector?: Maybe<string>, sharesOutstanding?: Maybe<number>, shortRatio?: Maybe<number>, symbol?: Maybe<string>, targetEstOneyPercent?: Maybe<number>, volume?: Maybe<number>, website?: Maybe<string>, weekRangeFiveTwoMax?: Maybe<number>, weekRangeFiveTwoMin?: Maybe<number>, yearToDatePrice?: Maybe<number>, yearToDatePriceReturn?: Maybe<number>, isActivelyTrading?: Maybe<boolean>, residance?: Maybe<{ __typename?: 'SummaryResidance', city?: Maybe<string>, state?: Maybe<string>, country?: Maybe<string>, addressOne?: Maybe<string>, zip?: Maybe<string> }> }>>> };

export type CreateStockWatchlistMutationVariables = Exact<{
  identifier: StStockWatchInputlistIdentifier;
}>;


export type CreateStockWatchlistMutation = { __typename?: 'Mutation', createStockWatchlist?: Maybe<{ __typename?: 'STStockWatchlist', id: string, name: string, date?: Maybe<string>, userId: string, summaries?: Maybe<Array<Maybe<{ __typename?: 'Summary', avgVolume?: Maybe<number>, ceo?: Maybe<string>, companyName?: Maybe<string>, currency?: Maybe<string>, dividendDate?: Maybe<string>, ePSTTM?: Maybe<number>, earningsDate?: Maybe<string>, exDividendDate?: Maybe<string>, exchangeName?: Maybe<string>, fiveTwoWeekRange?: Maybe<string>, forwardDividendRate?: Maybe<number>, forwardDividendYield?: Maybe<number>, forwardEPS?: Maybe<number>, forwardPE?: Maybe<number>, fullTimeEmployees?: Maybe<string>, id?: Maybe<string>, symbolType?: Maybe<SymbolType>, industry?: Maybe<string>, ipoDate?: Maybe<string>, beta?: Maybe<string>, countryFullName?: Maybe<string>, lastSplitDate?: Maybe<string>, lastSplitFactor?: Maybe<string>, logo_url?: Maybe<string>, longBusinessSummary?: Maybe<string>, marketCap?: Maybe<number>, marketPrice?: Maybe<number>, oneyTargetEst?: Maybe<number>, pERatioTTM?: Maybe<number>, previousClose?: Maybe<number>, recommendationKey?: Maybe<string>, recommendationMean?: Maybe<number>, sandPFiveTwoWeekChange?: Maybe<number>, sector?: Maybe<string>, sharesOutstanding?: Maybe<number>, shortRatio?: Maybe<number>, symbol?: Maybe<string>, targetEstOneyPercent?: Maybe<number>, volume?: Maybe<number>, website?: Maybe<string>, weekRangeFiveTwoMax?: Maybe<number>, weekRangeFiveTwoMin?: Maybe<number>, yearToDatePrice?: Maybe<number>, yearToDatePriceReturn?: Maybe<number>, isActivelyTrading?: Maybe<boolean>, residance?: Maybe<{ __typename?: 'SummaryResidance', city?: Maybe<string>, state?: Maybe<string>, country?: Maybe<string>, addressOne?: Maybe<string>, zip?: Maybe<string> }> }>>> }> };

export type AddStockIntoWatchlistMutationVariables = Exact<{
  identifier: StStockWatchInputlistIdentifier;
}>;


export type AddStockIntoWatchlistMutation = { __typename?: 'Mutation', addStockIntoStockWatchlist?: Maybe<{ __typename?: 'Summary', avgVolume?: Maybe<number>, ceo?: Maybe<string>, companyName?: Maybe<string>, currency?: Maybe<string>, dividendDate?: Maybe<string>, ePSTTM?: Maybe<number>, earningsDate?: Maybe<string>, exDividendDate?: Maybe<string>, exchangeName?: Maybe<string>, fiveTwoWeekRange?: Maybe<string>, forwardDividendRate?: Maybe<number>, forwardDividendYield?: Maybe<number>, forwardEPS?: Maybe<number>, forwardPE?: Maybe<number>, fullTimeEmployees?: Maybe<string>, id?: Maybe<string>, symbolType?: Maybe<SymbolType>, industry?: Maybe<string>, ipoDate?: Maybe<string>, beta?: Maybe<string>, countryFullName?: Maybe<string>, lastSplitDate?: Maybe<string>, lastSplitFactor?: Maybe<string>, logo_url?: Maybe<string>, longBusinessSummary?: Maybe<string>, marketCap?: Maybe<number>, marketPrice?: Maybe<number>, oneyTargetEst?: Maybe<number>, pERatioTTM?: Maybe<number>, previousClose?: Maybe<number>, recommendationKey?: Maybe<string>, recommendationMean?: Maybe<number>, sandPFiveTwoWeekChange?: Maybe<number>, sector?: Maybe<string>, sharesOutstanding?: Maybe<number>, shortRatio?: Maybe<number>, symbol?: Maybe<string>, targetEstOneyPercent?: Maybe<number>, volume?: Maybe<number>, website?: Maybe<string>, weekRangeFiveTwoMax?: Maybe<number>, weekRangeFiveTwoMin?: Maybe<number>, yearToDatePrice?: Maybe<number>, yearToDatePriceReturn?: Maybe<number>, isActivelyTrading?: Maybe<boolean>, residance?: Maybe<{ __typename?: 'SummaryResidance', city?: Maybe<string>, state?: Maybe<string>, country?: Maybe<string>, addressOne?: Maybe<string>, zip?: Maybe<string> }> }> };

export type RemoveStockFromWatchlistMutationVariables = Exact<{
  identifier: StStockWatchInputlistIdentifier;
}>;


export type RemoveStockFromWatchlistMutation = { __typename?: 'Mutation', removeStockFromStockWatchlist?: Maybe<boolean> };

export type DeleteUserWatchlistMutationVariables = Exact<{
  identifier: StStockWatchInputlistIdentifier;
}>;


export type DeleteUserWatchlistMutation = { __typename?: 'Mutation', deleteWatchlist?: Maybe<boolean> };

export type RenameStockWatchlistMutationVariables = Exact<{
  identifier: StStockWatchInputlistIdentifier;
}>;


export type RenameStockWatchlistMutation = { __typename?: 'Mutation', renameStockWatchlist?: Maybe<boolean> };

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
export const StGroupAllDataFragmentFragmentDoc = gql`
    fragment STGroupAllDataFragment on STGroupAllData {
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
${StHoldingFragmentFragmentDoc}
${StRankFragmentFragmentDoc}
${StPortfolioSnapshotFragmentFragmentDoc}
${StTransactionSnapshotFragmentFragmentDoc}
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
  toggleInviteUserIntoGroup(inviteUser: $inviteUser, userId: $userId, groupId: $groupId) {
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
  toggleUsersInvitationRequestToGroup(acceptUser: $acceptUser, userId: $userId, groupId: $groupId) {
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
  queryStockScreener(stockScreenerInput: $stockScreenerInput, offset: $offset, limit: $limit) {
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