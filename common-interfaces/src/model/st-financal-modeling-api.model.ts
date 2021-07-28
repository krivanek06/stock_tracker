export interface STFMHolder {
  change: number;
  dateReported: Date;
  holder: string;
  shares: number;
}

export interface STFMHolderWithWeight extends STFMHolder {
  weightPercent?: number;
}

export interface STFMCompanyOutlook {
  financialsAnnual: STFMFinancials;
  financialsQuarter: STFMFinancials;
  insideTrades: STFMInsideTrade[];
  keyExecutives: STFMKeyExecutive[];
  metrics: STFMMetrics;
  profile: STFMProfile;
  rating: STFMRating;
  ratios: STFMRatios;
  splitHistory?: STFMSplitHistory[];
  stockDividend?: STFMStockDividend[];
  stockNews: STFMStockNew[];
}

export interface STFMFinancials {
  balance: STFMBalanceSheet[];
  cash: STFMCashFlow[];
  income: STFMIncomeStatement[];
}

export interface STFMInsideTrade {
  acquistionOrDisposition: string;
  companyCik: string;
  formType: string;
  link: string;
  price: number;
  reportingCik: string;
  reportingName: string;
  securitiesOwned: number;
  securitiesTransacted: number;
  securityName: string;
  symbol: string;
  transactionDate: string;
  transactionType: string;
  typeOfOwner: string;
}

export interface STFMKeyExecutive {
  currencyPay: string;
  gender: string;
  name: string;
  pay?: number;
  title: string;
}

export interface STFMMetrics {
  dividendYielTTM: number;
  volume: number;
  yearHigh: number;
  yearLow: number;
}

export interface STFMProfile {
  address: string;
  beta: number;
  ceo: string;
  changes: number;
  cik: string;
  city: string;
  companyName: string;
  country: string;
  currency: string;
  cusip: string;
  dcf: number;
  dcfDiff: number;
  defaultImage: boolean;
  description: string;
  exchange: string;
  exchangeShortName: string;
  fullTimeEmployees: string;
  image: string;
  industry: string;
  ipoDate: string;
  isActivelyTrading: boolean;
  isEtf: boolean;
  isin: string;
  lastDiv: number;
  mktCap: number;
  phone: string;
  price: number;
  range: string;
  sector: string;
  state: string;
  symbol: string;
  volAvg: number;
  website: string;
  zip: string;
}

export interface STFMStockNew {
  image: string;
  publishedDate: string;
  site: string;
  symbol: string;
  text: string;
  title: string;
  url: string;
}
export interface STFMStockDividend {
  adjDividend: number;
  date: string;
  declarationDate: string;
  dividend: number;
  label: string;
  paymentDate: string;
  recordDate: string;
  symbol: string;
}

export interface STFMSplitHistory {
  date: string;
  denominator: number;
  label: string;
  numerator: number;
  symbol: string;
}

export interface STFMRating {
  date: string;
  rating: string;
  ratingDetailsDCFRecommendation: STFMRatingEnum;
  ratingDetailsDCFScore: number;
  ratingDetailsDERecommendation: STFMRatingEnum;
  ratingDetailsDEScore: number;
  ratingDetailsPBRecommendation: STFMRatingEnum;
  ratingDetailsPBScore: number;
  ratingDetailsPERecommendation: STFMRatingEnum;
  ratingDetailsPEScore: number;
  ratingDetailsROARecommendation: STFMRatingEnum;
  ratingDetailsROAScore: number;
  ratingDetailsROERecommendation: STFMRatingEnum;
  ratingDetailsROEScore: number;
  ratingRecommendation: STFMRatingEnum;
  ratingScore: number;
  symbol: string;
}

export enum STFMRatingEnum {
  STRONG_BUY = "Strong Buy",
  BUY = "Buy",
  NEUTRAL = "Neutral",
  SELL = "Sell",
  STRONG_SELL = "Strong Sell",
}

export interface STFMRatios {
  assetTurnoverTTM?: number;
  capitalExpenditureCoverageRatioTTM?: number;
  cashConversionCycleTTM?: number;
  cashFlowCoverageRatiosTTM?: number;
  cashFlowToDebtRatioTTM?: number;
  cashPerShareTTM?: number;
  cashRatioTTM?: number;
  companyEquityMultiplierTTM?: number;
  currentRatioTTM?: number;
  daysOfInventoryOutstandingTTM?: number;
  daysOfPayablesOutstandingTTM?: number;
  daysOfSalesOutstandingTTM?: number;
  debtEquityRatioTTM?: number;
  debtRatioTTM?: number;
  dividendPaidAndCapexCoverageRatioTTM?: number;
  dividendPerShareTTM?: number;
  dividendYielPercentageTTM?: number;
  dividendYielTTM?: number;
  dividendYieldTTM?: number;
  ebitPerRevenueTTM?: number;
  ebtPerEbitTTM?: number;
  effectiveTaxRateTTM?: number;
  enterpriseValueMultipleTTM?: number;
  fixedAssetTurnoverTTM?: number;
  freeCashFlowOperatingCashFlowRatioTTM?: number;
  freeCashFlowPerShareTTM?: number;
  grossProfitMarginTTM?: number;
  interestCoverageTTM?: number;
  inventoryTurnoverTTM?: number;
  longTermDebtToCapitalizationTTM?: number;
  netIncomePerEBTTTM?: number;
  netProfitMarginTTM?: number;
  operatingCashFlowPerShareTTM?: number;
  operatingCashFlowSalesRatioTTM?: number;
  operatingCycleTTM?: number;
  operatingProfitMarginTTM?: number;
  payablesTurnoverTTM?: number;
  payoutRatioTTM?: number;
  peRatioTTM?: number;
  pegRatioTTM?: number;
  pretaxProfitMarginTTM?: number;
  priceBookValueRatioTTM?: number;
  priceCashFlowRatioTTM?: number;
  priceEarningsRatioTTM?: number;
  priceEarningsToGrowthRatioTTM?: number;
  priceFairValueTTM?: number;
  priceSalesRatioTTM?: number;
  priceToBookRatioTTM?: number;
  priceToFreeCashFlowsRatioTTM?: number;
  priceToOperatingCashFlowsRatioTTM?: number;
  priceToSalesRatioTTM?: number;
  quickRatioTTM?: number;
  receivablesTurnoverTTM?: number;
  returnOnAssetsTTM?: number;
  returnOnCapitalEmployedTTM?: number;
  returnOnEquityTTM?: number;
  shortTermCoverageRatiosTTM?: number;
  totalDebtToCapitalizationTTM?: number;
}

export interface STFMIncomeStatement {
  acceptedDate?: string;
  costAndExpenses?: number;
  costOfRevenue?: number;
  date?: string;
  depreciationAndAmortization?: number;
  ebitda?: number;
  ebitdaratio?: number;
  eps?: number;
  epsdiluted?: number;
  fillingDate?: string;
  finalLink?: string;
  generalAndAdministrativeExpenses?: number;
  grossProfit?: number;
  grossProfitRatio?: number;
  incomeBeforeTax?: number;
  incomeBeforeTaxRatio?: number;
  incomeTaxExpense?: number;
  interestExpense?: number;
  link?: string;
  netIncome?: number;
  netIncomeRatio?: number;
  operatingExpenses?: number;
  operatingIncome?: number;
  operatingIncomeRatio?: number;
  otherExpenses?: number;
  period?: string;
  reportedCurrency?: string;
  researchAndDevelopmentExpenses?: number;
  revenue?: number;
  sellingAndMarketingExpenses?: number;
  sellingGeneralAndAdministrativeExpenses?: number;
  symbol?: string;
  totalOtherIncomeExpensesNet?: number;
  weightedAverageShsOut?: number;
  weightedAverageShsOutDil?: number;
}

export interface STFMCashFlow {
  acceptedDate?: string;
  accountsPayables?: number;
  accountsReceivables?: number;
  acquisitionsNet?: number;
  capitalExpenditure?: number;
  cashAtBeginningOfPeriod?: number;
  cashAtEndOfPeriod?: number;
  changeInWorkingCapital?: number;
  commonStockIssued?: number;
  commonStockRepurchased?: number;
  date?: string;
  debtRepayment?: number;
  deferredIncomeTax?: number;
  depreciationAndAmortization?: number;
  dividendsPaid?: number;
  effectOfForexChangesOnCash?: number;
  fillingDate?: string;
  finalLink?: string;
  freeCashFlow?: number;
  inventory?: number;
  investmentsInPropertyPlantAndEquipment?: number;
  link?: string;
  netCashProvidedByOperatingActivities?: number;
  netCashUsedForInvestingActivites?: number;
  netCashUsedProvidedByFinancingActivities?: number;
  netChangeInCash?: number;
  netIncome?: number;
  operatingCashFlow?: number;
  otherFinancingActivites?: number;
  otherInvestingActivites?: number;
  otherNonCashItems?: number;
  otherWorkingCapital?: number;
  period?: string;
  purchasesOfInvestments?: number;
  reportedCurrency?: string;
  salesMaturitiesOfInvestments?: number;
  stockBasedCompensation?: number;
  symbol?: string;
}

export interface STFMBalanceSheet {
  acceptedDate?: string;
  accountPayables?: number;
  accumulatedOtherComprehensiveIncomeLoss?: number;
  cashAndCashEquivalents?: number;
  cashAndShortTermInvestments?: number;
  commonStock?: number;
  date?: string;
  deferredRevenue?: number;
  deferredRevenueNonCurrent?: number;
  deferredTaxLiabilitiesNonCurrent?: number;
  fillingDate?: string;
  finalLink?: string;
  goodwill?: number;
  goodwillAndIntangibleAssets?: number;
  intangibleAssets?: number;
  inventory?: number;
  link?: string;
  longTermDebt?: number;
  longTermInvestments?: number;
  netDebt?: number;
  netReceivables?: number;
  otherAssets?: number;
  otherCurrentAssets?: number;
  otherCurrentLiabilities?: number;
  otherLiabilities?: number;
  otherNonCurrentAssets?: number;
  otherNonCurrentLiabilities?: number;
  othertotalStockholdersEquity?: number;
  period?: string;
  propertyPlantEquipmentNet?: number;
  reportedCurrency?: string;
  retainedEarnings?: number;
  shortTermDebt?: number;
  shortTermInvestments?: number;
  symbol?: string;
  taxAssets?: number;
  taxPayables?: number;
  totalAssets?: number;
  totalCurrentAssets?: number;
  totalCurrentLiabilities?: number;
  totalDebt?: number;
  totalInvestments?: number;
  totalLiabilities?: number;
  totalLiabilitiesAndStockholdersEquity?: number;
  totalNonCurrentAssets?: number;
  totalNonCurrentLiabilities?: number;
  totalStockholdersEquity?: number;
}

export interface STFMCompanyQuote {
  avgVolume: number;
  change: number;
  changesPercentage: number;
  dayHigh: number;
  dayLow: number;
  earningsAnnouncement: string;
  eps: number;
  exchange: string;
  marketCap: number;
  name: string;
  open: number;
  pe: number;
  previousClose: number;
  price: number;
  priceAvg200: number;
  priceAvg50: number;
  sharesOutstanding: number;
  symbol: string;
  timestamp: number;
  volume: number;
  yearHigh: number;
  yearLow: number;
  image: string;
}

export interface STFMHistoricalPricesLine {
  date: string;
  close: number;
}

export interface STFMHistoricalPrices extends STFMHistoricalPricesLine {
  open: number;
  low: number;
  high: number;
  volume: number;
}

export interface STFMHistoricalDailyPrices extends STFMHistoricalPrices {
  adjClose: number;
  unadjustedVolume: number;
  change: number;
  changePercent: number;
  vwap: number;
  label: string;
  changeOverTime: number;
}


export interface STFMLivePrice {
  symbol: string;
  price: number;
  volume: number;
}

export interface STFMTopStocks {
  ticker: string;
  changes: number;
  price: string;
  changesPercentage: string;
  companyName: string;
}

export interface STFMExchangeSectorPE {
  date: string;
  sector: string;
  exchange: string;
  pe: number;
}

export interface STFMExchangeIndustryPE {
  date: string;
  industry: string;
  exchange: string;
  pe: number;
}

export interface STFMCalendarEarnings {
  date:             Date;
  symbol:           string;
  eps:              number;
  epsEstimated:     number;
  time:             string;
  revenue:          number;
  revenueEstimated: number;
}

export interface STFMCalendarIpo {
  date:       Date;
  company:    string;
  symbol:     string;
  exchange:   string;
  actions:    string;
  shares:     number;
  priceRange: string;
  marketCap:  number;
}

export interface STFMCalendarEconomic {
  event:            string;
  date:             Date;
  country:          string;
  actual:           number;
  previous:         number;
  change:           number;
  changePercentage: number;
  estimate:         number;
}

export interface STFMEtfHolder {
  asset:            string;
  sharesNumber:     number;
  weightPercentage: number;
}

export interface STFMEtfSectorWeight {
  sector:           string;
  weightPercentage: string;
}

export interface STFMEtfCountryWeight {
  country: string;
  weightPercentage: string;
}

export interface STFMSectorPerformance {
  sector:            string;
  changesPercentage: string;
}