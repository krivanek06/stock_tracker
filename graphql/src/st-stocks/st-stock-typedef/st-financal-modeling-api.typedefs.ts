import { gql } from 'apollo-server';

export const STFinancialModelingAPITypeDefs = gql`

type STFMHolder {
  change: Float
  dateReported: String
  holder: String
  shares: Float
}

type STFMHolderWithWeight {
  change: Float
  dateReported: String
  holder: String
  shares: Float
  weightPercent: Float
}

type STFMCompanyOutlook {
  financialsAnnual: STFMFinancials
  financialsQuarter: STFMFinancials
  insideTrades: [STFMInsideTrade]
  keyExecutives: [STFMKeyExecutive]
  metrics: STFMMetrics
  profile: STFMProfile
  rating: STFMRating
  ratios: STFMRatios
  splitHistory: [STFMSplitHistory]
  stockDividend: [STFMStockDividend]
  stockNews: [STFMStockNew]
}

type STFMFinancials {
  balance: [STFMBalanceSheet]
  cash: [STFMCashFlow]
  income: [STFMIncomeStatement]
}

type STFMInsideTrade {
  acquistionOrDisposition: String
  companyCik: String
  formType: String
  link: String
  price: Float
  reportingCik: String
  reportingName: String
  securitiesOwned: Float
  securitiesTransacted: Float
  securityName: String
  symbol: String
  transactionDate: String
  transactionType: String
  typeOfOwner: String
}

type STFMKeyExecutive {
  currencyPay: String
  gender: String
  name: String
  pay: Float
  title: String
}

type STFMMetrics {
  dividendYielTTM: Float
  volume: Float
  yearHigh: Float
  yearLow: Float
}

type STFMProfile {
  address: String
  beta: Float
  ceo: String
  changes: Float
  cik: String
  city: String
  companyName: String
  country: String
  currency: String
  cusip: String
  dcf: Float
  dcfDiff: Float
  defaultImage: Boolean
  description: String
  exchange: String
  exchangeShortName: String
  fullTimeEmployees: String
  image: String
  industry: String
  ipoDate: String
  isActivelyTrading: Boolean
  isEtf: Boolean
  isin: String
  lastDiv: Float
  mktCap: Float
  phone: String
  price: Float
  range: String
  sector: String
  state: String
  symbol: String
  volAvg: Float
  website: String
  zip: String
}

type STFMStockNew {
  image: String
  publishedDate: String
  site: String
  symbol: String
  text: String
  title: String
  url: String
}
type STFMStockDividend {
  adjDividend: Float
  date: String
  declarationDate: String
  dividend: Float
  label: String
  paymentDate: String
  recordDate: String
}

type STFMSplitHistory {
  date: String
  denominator: Float
  label: String
  numerator: Float
}

type STFMRating {
  date: String
  rating: String
  ratingDetailsDCFRecommendation: String
  ratingDetailsDCFScore: Float
  ratingDetailsDERecommendation: String
  ratingDetailsDEScore: Float
  ratingDetailsPBRecommendation: String
  ratingDetailsPBScore: Float
  ratingDetailsPERecommendation: String
  ratingDetailsPEScore: Float
  ratingDetailsROARecommendation: String
  ratingDetailsROAScore: Float
  ratingDetailsROERecommendation: String
  ratingDetailsROEScore: Float
  ratingRecommendation: String
  ratingScore: Float
  symbol: String
}

type STFMRatios {
  assetTurnoverTTM: Float
  capitalExpenditureCoverageRatioTTM: Float
  cashConversionCycleTTM: Float
  cashFlowCoverageRatiosTTM: Float
  cashFlowToDebtRatioTTM: Float
  cashPerShareTTM: Float
  cashRatioTTM: Float
  companyEquityMultiplierTTM: Float
  currentRatioTTM: Float
  daysOfInventoryOutstandingTTM: Float
  daysOfPayablesOutstandingTTM: Float
  daysOfSalesOutstandingTTM: Float
  debtEquityRatioTTM: Float
  debtRatioTTM: Float
  dividendPaidAndCapexCoverageRatioTTM: Float
  dividendPerShareTTM: Float
  dividendYielPercentageTTM: Float
  dividendYielTTM: Float
  dividendYieldTTM: Float
  ebitPerRevenueTTM: Float
  ebtPerEbitTTM: Float
  effectiveTaxRateTTM: Float
  enterpriseValueMultipleTTM: Float
  fixedAssetTurnoverTTM: Float
  freeCashFlowOperatingCashFlowRatioTTM: Float
  freeCashFlowPerShareTTM: Float
  grossProfitMarginTTM: Float
  interestCoverageTTM: Float
  inventoryTurnoverTTM: Float
  longTermDebtToCapitalizationTTM: Float
  netIncomePerEBTTTM: Float
  netProfitMarginTTM: Float
  operatingCashFlowPerShareTTM: Float
  operatingCashFlowSalesRatioTTM: Float
  operatingCycleTTM: Float
  operatingProfitMarginTTM: Float
  payablesTurnoverTTM: Float
  payoutRatioTTM: Float
  peRatioTTM: Float
  pegRatioTTM: Float
  pretaxProfitMarginTTM: Float
  priceBookValueRatioTTM: Float
  priceCashFlowRatioTTM: Float
  priceEarningsRatioTTM: Float
  priceEarningsToGrowthRatioTTM: Float
  priceFairValueTTM: Float
  priceSalesRatioTTM: Float
  priceToBookRatioTTM: Float
  priceToFreeCashFlowsRatioTTM: Float
  priceToOperatingCashFlowsRatioTTM: Float
  priceToSalesRatioTTM: Float
  quickRatioTTM: Float
  receivablesTurnoverTTM: Float
  returnOnAssetsTTM: Float
  returnOnCapitalEmployedTTM: Float
  returnOnEquityTTM: Float
  shortTermCoverageRatiosTTM: Float
  totalDebtToCapitalizationTTM: Float
}

type STFMIncomeStatement {
  acceptedDate: String
  costAndExpenses: Float
  costOfRevenue: Float
  date: String
  depreciationAndAmortization: Float
  ebitda: Float
  ebitdaratio: Float
  eps: Float
  epsdiluted: Float
  fillingDate: String
  finalLink: String
  generalAndAdministrativeExpenses: Float
  grossProfit: Float
  grossProfitRatio: Float
  incomeBeforeTax: Float
  incomeBeforeTaxRatio: Float
  incomeTaxExpense: Float
  interestExpense: Float
  link: String
  netIncome: Float
  netIncomeRatio: Float
  operatingExpenses: Float
  operatingIncome: Float
  operatingIncomeRatio: Float
  otherExpenses: Float
  period: String
  reportedCurrency: String
  researchAndDevelopmentExpenses: Float
  revenue: Float
  sellingAndMarketingExpenses: Float
  sellingGeneralAndAdministrativeExpenses: Float
  symbol: String
  totalOtherIncomeExpensesNet: Float
  weightedAverageShsOut: Float
  weightedAverageShsOutDil: Float
}

type STFMCashFlow {
  acceptedDate: String
  accountsPayables: Float
  accountsReceivables: Float
  acquisitionsNet: Float
  capitalExpenditure: Float
  cashAtBeginningOfPeriod: Float
  cashAtEndOfPeriod: Float
  changeInWorkingCapital: Float
  commonStockIssued: Float
  commonStockRepurchased: Float
  date: String
  debtRepayment: Float
  deferredIncomeTax: Float
  depreciationAndAmortization: Float
  dividendsPaid: Float
  effectOfForexChangesOnCash: Float
  fillingDate: String
  finalLink: String
  freeCashFlow: Float
  inventory: Float
  investmentsInPropertyPlantAndEquipment: Float
  link: String
  netCashProvidedByOperatingActivities: Float
  netCashUsedForInvestingActivites: Float
  netCashUsedProvidedByFinancingActivities: Float
  netChangeInCash: Float
  netIncome: Float
  operatingCashFlow: Float
  otherFinancingActivites: Float
  otherInvestingActivites: Float
  otherNonCashItems: Float
  otherWorkingCapital: Float
  period: String
  purchasesOfInvestments: Float
  reportedCurrency: String
  salesMaturitiesOfInvestments: Float
  stockBasedCompensation: Float
  symbol: String
}

type STFMBalanceSheet {
  acceptedDate: String
  accountPayables: Float
  accumulatedOtherComprehensiveIncomeLoss: Float
  cashAndCashEquivalents: Float
  cashAndShortTermInvestments: Float
  commonStock: Float
  date: String
  deferredRevenue: Float
  deferredRevenueNonCurrent: Float
  deferredTaxLiabilitiesNonCurrent: Float
  fillingDate: String
  finalLink: String
  goodwill: Float
  goodwillAndIntangibleAssets: Float
  intangibleAssets: Float
  inventory: Float
  link: String
  longTermDebt: Float
  longTermInvestments: Float
  netDebt: Float
  netReceivables: Float
  otherAssets: Float
  otherCurrentAssets: Float
  otherCurrentLiabilities: Float
  otherLiabilities: Float
  otherNonCurrentAssets: Float
  otherNonCurrentLiabilities: Float
  othertotalStockholdersEquity: Float
  period: String
  propertyPlantEquipmentNet: Float
  reportedCurrency: String
  retainedEarnings: Float
  shortTermDebt: Float
  shortTermInvestments: Float
  symbol: String
  taxAssets: Float
  taxPayables: Float
  totalAssets: Float
  totalCurrentAssets: Float
  totalCurrentLiabilities: Float
  totalDebt: Float
  totalInvestments: Float
  totalLiabilities: Float
  totalLiabilitiesAndStockholdersEquity: Float
  totalNonCurrentAssets: Float
  totalNonCurrentLiabilities: Float
  totalStockholdersEquity: Float
}

type STFMCompanyQuote {
  avgVolume: Float
  change: Float
  changesPercentage: Float
  dayHigh: Float
  dayLow: Float
  earningsAnnouncement: String
  eps: Float
  exchange: String
  marketCap: Float
  name: String
  open: Float
  pe: Float
  previousClose: Float
  price: Float
  priceAvg200: Float
  priceAvg50: Float
  sharesOutstanding: Float
  symbol: String
  timestamp: Float
  volume: Float
  yearHigh: Float
  yearLow: Float
}




`;
