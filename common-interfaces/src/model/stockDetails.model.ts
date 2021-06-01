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
  detailsLastUpdate: string;
  summaryLastUpdate: string;
  newsLastUpdate: string;
}

export interface SearchStockSummaries {
  summaries: Summary[];
}

export interface SearchStockSymbol {
  data: string[];
}

export interface StockDetails {
  id: string;
  analysis: Analysis;
  balanceSheet: BalanceSheet;
  cashFlow: CashFlow;
  incomeStatement: IncomeStatement;
  financialReports: any[];
  financialReportSnippets: string[];
  recommendation: Recommendations[];
  stockNews: NewsArticle[];
  companyData: CompanyData;
  summary: Summary;
  metric: Metric;
  dividends: Dividens;
  historicalMetrics: HistoricalMetrics;
  institutionOwnerships: InstitutionOwnership[];
  insiderTransactions: InsiderTransaction[];
  calculations: STStockDetailsCalculations;
  calculatedPredictions: STStockDetailsCalculatedPredictions;
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

export interface InsiderTransaction {
  filerName: string;
  filerRelation: string;
  shares: number;
  startDate: number;
  transactionText: string;
  value?: number;
}

export interface InstitutionOwnership {
  maxAge: number;
  organization: string;
  pctHeld: number;
  position: number;
  reportDate: number;
  value: number;
}

export interface HistoricalMetrics {
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

export interface CompanyData {
  defaultKeyStatistics: DefaultKeyStatistics;
  earnings: Earnings;
  esgScores: EsgScores;
  financialData: FinancialData;
  pageViews: PageViews;
  summaryProfile: SummaryProfile;
  upgradeDowngradeHistory: UpgradeDowngradeHistory[];
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
  incomeStatementHistoryQuarterly: IncomeStatementData;
  incomeStatementHistoryYearly: IncomeStatementData;
}

export interface IncomeStatementData {
  marketingExpense?: SheetData;
  interestExpense?: SheetData;
  costOfRevenue?: SheetData;
  discontinuedOperations?: SheetData;
  ebit?: SheetData;
  effectOfAccountingCharges?: SheetData;
  endDate?: SheetData;
  extraordinaryItems?: SheetData;
  grossProfit?: SheetData;
  incomeBeforeTax?: SheetData;
  incomeTaxExpense?: SheetData;
  netIncome?: SheetData;
  netIncomeApplicableToCommonShares?: SheetData;
  netIncomeFromContinuingOps?: SheetData;
  operatingIncome?: SheetData;
  otherOperatingExpenses?: SheetData;
  researchDevelopment?: SheetData;
  sellingGeneralAdministrative?: SheetData;
  totalOperatingExpenses?: SheetData;
  totalOtherIncomeExpenseNet?: SheetData;
  totalRevenue?: SheetData;
  dilutedEarnings?: SheetData;
  basicEarnings?: SheetData;
  dividendsInCash?: SheetData;
  administrativeExpense?: SheetData;
  costOfSales?: SheetData;
}

export interface CashFlow {
  cashflowStatementHistoryQuarterly: CashFlowData;
  cashflowStatementHistoryYearly: CashFlowData;
}

export interface CashFlowData {
  capitalExpenditures?: SheetData;
  changeInCash?: SheetData;
  changeToAccountReceivables?: SheetData;
  changeToInventory?: SheetData;
  changeToLiabilities?: SheetData;
  changeToNetincome?: SheetData;
  changeToOperatingActivities?: SheetData;
  depreciation?: SheetData;
  dividendsPaid?: SheetData;
  endDate?: SheetData;
  investments?: SheetData;
  maxAge?: SheetData;
  netBorrowings?: SheetData;
  netIncome?: SheetData;
  otherCashflowsFromFinancingActivities?: SheetData;
  otherCashflowsFromInvestingActivities?: SheetData;
  repurchaseOfStock?: SheetData;
  totalCashFromFinancingActivities?: SheetData;
  totalCashFromOperatingActivities?: SheetData;
  totalCashflowsFromInvestingActivities?: SheetData;
  shareBasedCompensation?: SheetData;
  accountsReceivable?: SheetData;
  accruedExpenses?: SheetData;
  purchasesOfSecuritie?: SheetData;
  marketSecurities?: SheetData;
  acquisitionsOfBusinesses?: SheetData;
  issuanceOfStock?: SheetData;
  salesOfSecurities?: SheetData;
  maturitiesOfSecurities?: SheetData;
  incomeTax?: SheetData;
  accruedEquipment?: SheetData;
  longTermDebtRepayments?: SheetData;
  commercialPaperRepayments?: SheetData;
  shortTermDebtRepayments?: SheetData;
  longTermDebtInsurance?: SheetData;
}

export interface BalanceSheet {
  balanceSheetHistoryQuarterly: BalanceSheetData;
  balanceSheetHistoryYearly: BalanceSheetData;
}

export interface BalanceSheetData {
  accountsPayable?: SheetData;
  cash?: SheetData;
  commonStock?: SheetData;
  endDate?: SheetData;
  inventory?: SheetData;
  longTermDebt?: SheetData;
  longTermInvestments?: SheetData;
  maxAge?: SheetData;
  netReceivables?: SheetData;
  netTangibleAssets?: SheetData;
  otherAssets?: SheetData;
  otherCurrentAssets?: SheetData;
  otherCurrentLiab?: SheetData;
  otherLiab?: SheetData;
  otherStockholderEquity?: SheetData;
  propertyPlantEquipment?: SheetData;
  retainedEarnings?: SheetData;
  shortLongTermDebt?: SheetData;
  shortTermInvestments?: SheetData;
  totalAssets?: SheetData;
  totalCurrentAssets?: SheetData;
  totalCurrentLiabilities?: SheetData;
  totalLiab?: SheetData;
  totalStockholderEquity?: SheetData;
  treasuryStock?: SheetData;
  accumulatedComprehensiveIncome?: SheetData;
  totalSecuritiesForSale?: SheetData;
  commonStockValue?: SheetData;
  deferredRevenue?: SheetData;
  operatingLeaseLiability?: SheetData;
  goodwill?: SheetData;
  prepaidExpense?: SheetData;
  netEquity?: SheetData;
  prepaidAssets?: SheetData;
}

export interface SheetData {
  change: number[];
  data: number[];
  name: string;
  isPercent?: boolean;
}

export interface DataSet {
  y: number;
  name: string;
}

export interface Estimates {
  avg: number;
  growth: number;
  high: number;
  low: number;
  name: string;
  noofAnalysts: number;
  yearAgo: number;
}

export interface Analysis {
  earningsEstimate: Estimates[];
  revenueEstimate: Estimates[];
  growthEstimates: DataSet[];
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

export interface Summary {
  id: string;
  avgVolume: number;
  currency: string;
  currencySymbol: string;
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
  fullTimeEmployees: number;
  industry: string;
  lastSplitDate: number;
  lastSplitFactor: string;
  logo_url: string;
  longBusinessSummary: string;
  longName: string;
  marketCap: number;
  marketPrice: number;
  oneyTargetEst: number;
  open: number;
  pERatioTTM: number;
  previousClose: number;
  recommendationKey: string;
  recommendationMean: number;
  residance: {
    addressOne: string;
    city: string;
    country: string;
    state: string;
    zip: string;
  };
  sandPFiveTwoWeekChange: null;
  sector: string;
  sharesOutstanding: number;
  shortName: string;
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

export const ST_STOCK_DATA_COLLECTION = "stock_data";
export const ST_STOCK_DATA_COLLECTION_MORE_INFORMATION = "more_information";
export const ST_STOCK_DATA_DOCUMENT_FINACIAL_REPORTS = "financial_reports";

// Shared data
export const ST_STOCK_DATA_SHARED_DOCUMENT = "shared_document";
export const ST_STOCK_DATA_DOCUMENT_SEARCH_SYMBOL = "search_symbol";
