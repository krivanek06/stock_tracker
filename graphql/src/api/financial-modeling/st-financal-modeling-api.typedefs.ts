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
		financialsAnnual: STFMFinancials!
		financialsQuarter: STFMFinancials!
		insideTrades: [STFMInsideTrade!]!
		keyExecutives: [STFMKeyExecutive!]!
		metrics: STFMMetrics!
		profile: STFMProfile!
		rating: STFMRating
		ratios: STFMRatios
		splitHistory: [STFMSplitHistory!]!
		stockDividend: [STFMStockDividend!]!
		stockNews: [STFMStockNew!]!
	}

	type STFMFinancials {
		balance: [STFMBalanceSheet]!
		cash: [STFMCashFlow]!
		income: [STFMIncomeStatement]!
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
		symbol: String
	}

	type STFMSplitHistory {
		date: String
		denominator: Float
		label: String
		numerator: Float
		symbol: String
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
		image: String
	}

	type STFMTopStocks {
		ticker: String
		changes: Float
		price: String
		changesPercentage: String
		companyName: String
	}

	type STFMExchangeSectorPE {
		date: String
		sector: String
		exchange: String
		pe: Float
	}

	type STFMExchangeIndustryPE {
		date: String
		industry: String
		exchange: String
		pe: Float
	}

	type STFMCalendarEarnings {
		date: String
		symbol: String
		eps: Float
		epsEstimated: Float
		time: String
		revenue: Float
		revenueEstimated: Float
	}

	type STFMCalendarIpo {
		date: String
		company: String
		symbol: String
		exchange: String
		actions: String
		shares: Float
		priceRange: String
		marketCap: Float
	}

	type STFMCalendarEconomic {
		event: String
		date: String
		country: String
		actual: Float
		previous: Float
		change: Float
		changePercentage: Float
		estimate: Float
	}

	type STFMEtfHolder {
		asset: String
		sharesNumber: Float
		weightPercentage: Float
	}

	type STFMEtfSectorWeight {
		sector: String
		weightPercentage: String
	}

	type STFMEtfCountryWeight {
		country: String
		weightPercentage: String
	}

	type STFMSectorPerformance {
		sector: String
		changesPercentage: String
	}

	type STFMStockScreenerResult {
		symbol: String!
		companyName: String!
		marketCap: Float!
		sector: String
		industry: String
		beta: Float
		price: Float
		lastAnnualDividend: Float
		volume: Float!
		exchange: String
		exchangeShortName: String
		country: String
		isEtf: Boolean
		isActivelyTrading: Boolean
		companyQuote: STFMCompanyQuote
	}

	type STFMStockScreenerResultWrapper {
		result: [STFMStockScreenerResult]
		found: Float
		offset: Float
		limit: Float
	}

	type STFMSocialSentiment {
		absoluteIndex: Float
		date: String
		generalPerception: Float
		redditCommentMentions: Float
		redditCommentSentiment: Float
		redditPostMentions: Float
		redditPostSentiment: Float
		relativeIndex: Float
		sentiment: Float
		stocktwitsPostMentions: Float
		stocktwitsPostSentiment: Float
		symbol: String
		tweetMentions: Float
		tweetSentiment: Float
		yahooFinanceCommentMentions: Float
		yahooFinanceCommentSentiment: Float
	}

	type STAnalystEstimates {
		date: String
		estimatedEbitAvg: Float
		estimatedEbitHigh: Float
		estimatedEbitLow: Float
		estimatedEbitdaAvg: Float
		estimatedEbitdaHigh: Float
		estimatedEbitdaLow: Float
		estimatedEpsAvg: Float
		estimatedEpsHigh: Float
		estimatedEpsLow: Float
		estimatedNetIncomeAvg: Float
		estimatedNetIncomeHigh: Float
		estimatedNetIncomeLow: Float
		estimatedRevenueAvg: Float
		estimatedRevenueHigh: Float
		estimatedRevenueLow: Float
		estimatedSgaExpenseAvg: Float
		estimatedSgaExpenseHigh: Float
		estimatedSgaExpenseLow: Float
		numberAnalystEstimatedRevenue: Float
		numberAnalystsEstimatedEps: Float
		symbol: String
	}

	# input

	input STFMStockScreenerInput {
		marketCapMoreThan: Float
		marketCapLowerThan: Float
		priceMoreThan: Float
		priceLowerThan: Float
		betaMoreThan: Float
		betaLowerThan: Float
		volumeMoreThan: Float
		volumeLowerThan: Float
		dividendMoreThan: Float
		dividendLowerThan: Float
		isEtf: Boolean
		isActivelyTrading: Boolean
		sector: String
		industry: String
		country: String
		exchange: String
	}
`;
