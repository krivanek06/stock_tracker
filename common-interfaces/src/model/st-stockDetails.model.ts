import { STFMCompanyOutlook, STFMCompanyQuote, STFMHolder, STFMHolderWithWeight } from "./st-financal-modeling-api.model";
import {
  CAPM,
  WACC,
  STDiscountedCashFlowFormula,
  STDividendDiscountedFormula,
  STEarningsValuationFormula,
  STFreeCashFlowFormula,
} from "./st-stock-calculations";

export interface StockDetailsWrapper {
  details: StockDetails;
  forceReload?: boolean;
  detailsLastUpdate: string;
  summaryLastUpdate: string;
  newsLastUpdate: string;
}

export interface StockDetailsFinancialReports {
  id?: string;
  allFinancialReportsQuarterly: STFinancialReport[];
  allFinancialReportsYearly: STFinancialReport[];
}

export interface StockDetails {
  id: string;
  allFinancialReportsQuarterly: STFinancialReport[];
  allFinancialReportsYearly: STFinancialReport[];
  recommendation: STRecommendations[];
  companyData: STCompanyData;
  summary: STSummary;
  metric: STMetric;
  dividends: STDividens;
  historicalMetrics: STHistoricalMetrics;
  calculations: STStockDetailsCalculations;
  calculatedPredictions: STStockDetailsCalculatedPredictions;
  institutionalHolders: STFMHolder[];
  mutualFundHolders: STFMHolderWithWeight[];
  companyOutlook: STFMCompanyOutlook;
  sectorPeers: STFMCompanyQuote[];
}

export interface STFinancialReport {
  acceptedDate: string;
  accessNumber: string;
  cik: string;
  endDate: string;
  filedDate: string;
  form: FinancialReportForm;
  quarter: number;
  startDate: string;
  symbol: string;
  year: number;
  report: FinancialReportStatement;
}

export enum FinancialReportForm {
  The10K = "10-K",
  The10Q = "10-Q",
}

export interface FinancialReportStatement {
  bs: FinancialReportStatementData[];
  cf: FinancialReportStatementData[];
  ic: FinancialReportStatementData[];
}

export interface FinancialReportStatementData {
  concept: string;
  label: string;
  unit: string;
  value: FinancialReportStatementDataValue;
}

export interface FinancialReportStatementDataValue {
  increase?: number;
  increasePrct?: number;
  value?: number;
}

export interface STStockDetailsCalculatedPredictions {
  DCF_V1: STDiscountedCashFlowFormula;
  DDF_V1: STDividendDiscountedFormula;
  FCF_V1: STFreeCashFlowFormula;
  INTRINSIC_V1: STEarningsValuationFormula;
}

export interface STStockDetailsCalculations {
  CAPM: CAPM;
  WACC: WACC;
}

export interface STHistoricalMetrics {
  cashRatio: HistoricalMetricsData;
  currentRatio: HistoricalMetricsData;
  ebitPerShare: HistoricalMetricsData;
  eps: HistoricalMetricsData;
  grossMargin: HistoricalMetricsData;
  longtermDebtTotalAsset: HistoricalMetricsData;
  longtermDebtTotalCapital: HistoricalMetricsData;
  longtermDebtTotalEquity: HistoricalMetricsData;
  netDebtToTotalCapital: HistoricalMetricsData;
  netDebtToTotalEquity: HistoricalMetricsData;
  netMargin: HistoricalMetricsData;
  operatingMargin: HistoricalMetricsData;
  pretaxMargin: HistoricalMetricsData;
  salesPerShare: HistoricalMetricsData;
  sgaToSale: HistoricalMetricsData;
  totalDebtToEquity: HistoricalMetricsData;
  totalDebtToTotalAsset: HistoricalMetricsData;
  totalDebtToTotalCapital: HistoricalMetricsData;
  totalRatio: HistoricalMetricsData;
}

export interface HistoricalMetricsData {
  name: string;
  dates: string[];
  data: number[];
}

export interface NewsArticle {
  datetime: number;
  headline: string;
  image: string;
  sourceName: string;
  summary: string;
  url: string;
}

export interface STCompanyData {
  defaultKeyStatistics: DefaultKeyStatistics;
  earnings: Earnings;
  esgScores: EsgScores;
  financialData: FinancialData;
  pageViews: PageViews;
  summaryProfile: SummaryProfile;
  upgradeDowngradeHistory: UpgradeDowngradeHistory[];
}

export interface STRecommendations {
  buy: number;
  hold: number;
  period: string;
  sell: number;
  strongBuy: number;
  strongSell: number;
  symbol: string;
}

export interface DefaultKeyStatistics {
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
  sharesPercentSharesOut: number;
  sharesShortPreviousMonthDate: number;
  sharesShortPriorMonth: number;
  shortPercentOfFloat: number;
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
  earningsGrowth: number;
  ebitda: number;
  ebitdaMargins: number;
  financialCurrency: string;
  freeCashflow: number;
  grossMargins: number;
  grossProfits: number;
  numberOfAnalystOpinions: number;
  operatingCashflow: number;
  operatingMargins: number;
  profitMargins: number;
  quickRatio: number;
  recommendationKey: string;
  recommendationMean: number;
  returnOnAssets: number;
  returnOnEquity: number;
  revenueGrowth: number;
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
  action: string;
  epochGradeDate: number;
  firm: string;
  fromGrade: string;
  toGrade: string;
}

export interface STSummary {
  avgVolume: number;
  ceo: string;
  companyName: string;
  currency: string;
  dividendDate: number;
  ePSTTM: number;
  earningsDate: number;
  exDividendDate: number;
  exchangeName: string;
  fiveTwoWeekRange: string;
  forwardDividendRate: number;
  forwardDividendYield: number;
  forwardEPS: number;
  forwardPE: number;
  fullTimeEmployees: string;
  id: string;
  industry: string;
  ipoDate: Date;
  lastSplitDate: number;
  lastSplitFactor: string;
  logo_url: string;
  longBusinessSummary: string;
  marketCap: number;
  marketPrice: number;
  oneyTargetEst: number;
  pERatioTTM: number;
  previousClose: number;
  recommendationKey: string;
  recommendationMean: number;
  residance: Residance;
  sandPFiveTwoWeekChange: number;
  sector: string;
  sharesOutstanding: number;
  shortRatio: number;
  symbol: string;
  targetEstOneyPercent: number;
  volume: number;
  website: string;
  weekRangeFiveTwoMax: number;
  weekRangeFiveTwoMin: number;
  yearToDatePrice: number;
  yearToDatePriceReturn: number;
}

export interface Residance {
  addressOne: string;
  city: string;
  country: string;
  state: string;
  zip: string;
}

export interface STDividens {
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

export interface STMetric {
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

export const ST_STOCK_DATA_COLLECTION = "stock_data";
export const ST_STOCK_DATA_COLLECTION_MORE_INFORMATION = "more_information";
export const ST_STOCK_DATA_DOCUMENT_FINACIAL_REPORTS = "financial_reports";

// Shared data
export const ST_STOCK_DATA_SHARED_DOCUMENT = "shared_document";
export const ST_STOCK_DATA_DOCUMENT_SEARCH_SYMBOL = "search_symbol";
