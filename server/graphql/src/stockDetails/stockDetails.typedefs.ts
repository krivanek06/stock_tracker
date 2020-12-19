import { gql } from "apollo-server"

export const stockDetailsTypeDefs = gql`
    ##### TYPES
    type StockDetails {
        id: String!
        analysis: Analysis!
        balanceSheet: BalanceSheet!
        cashFlow: CashFlow!
        incomeStatement: IncomeStatement!
        financialReports: [FinancialReportNames]!
        stats: Stats!
        recommendation: [Recommendations]!
        stockNews: [NewsArticle]!
        companyData: CompanyData!
        summary: Summary!
        metric: Metric!
        dividends: Dividens!
    }

    type FinancialReportNames {
        collection: String
        name: String
    }

    type CompanyData {
        defaultKeyStatistics: DefaultKeyStatistics
        earnings: Earnings
        esgScores: EsgScores
        financialData: FinancialData
        pageViews: PageViews
        summaryProfile: SummaryProfile
        upgradeDowngradeHistory: UpgradeDowngradeHistory
    }

    type Recommendations {
        buy: Float
        hold: Float
        period: String
        sell: Float
        strongBuy: Float
        strongSell: Float
        symbol: String
    }

    type IncomeStatement {
        incomeStatementHistoryQuarterly: [IncomeStatementData]!
        incomeStatementHistoryYearly: [IncomeStatementData]
    }


    type IncomeStatementData {
        costOfRevenue: Float
        discontinuedOperations: Float
        ebit: Float
        effectOfAccountingCharges: Float
        endDate: Float
        extraordinaryItems: Float
        grossProfit: Float
        incomeBeforeTax: Float
        incomeTaxExpense: Float
        interestExpense: Float
        netIncome: Float
        netIncomeApplicableToCommonShares: Float
        netIncomeFromContinuingOps: Float
        operatingIncome: Float
        otherOperatingExpenses: Float
        researchDevelopment: Float
        sellingGeneralAdministrative: Float
        totalOperatingExpenses: Float
        totalOtherIncomeExpenseNet: Float
        totalRevenue: Float
    }

    type CashFlow {
        cashflowStatementHistoryQuarterly: [CashFlowData]
        cashflowStatementHistoryYearly: [CashFlowData]
    }

    type CashFlowData {
        capitalExpenditures: Float
        changeInCash: Float
        changeToAccountReceivables: Float
        changeToInventory: Float
        changeToLiabilities: Float
        changeToNetincome: Float
        changeToOperatingActivities: Float
        depreciation: Float
        dividendsPaid: Float
        endDate: Float
        investments: Float
        maxAge: Float
        netBorrowings: Float
        netIncome: Float
        otherCashflowsFromFinancingActivities: Float
        otherCashflowsFromInvestingActivities: Float
        repurchaseOfStock: Float
        totalCashFromFinancingActivities: Float
        totalCashFromOperatingActivities: Float
        totalCashflowsFromInvestingActivities: Float
    }

    type BalanceSheet {
        balanceSheetHistoryQuarterly: [BalanceSheetData]!
        balanceSheetHistoryYearly: [BalanceSheetData]!
    }

    type BalanceSheetData {
        accountsPayable: Float
        cash: Float
        commonStock: Float
        endDate: Float
        inventory: Float
        longTermDebt: Float
        longTermInvestments: Float
        maxAge: Float
        netReceivables: Float
        netTangibleAssets: Float
        otherAssets: Float
        otherCurrentAssets: Float
        otherCurrentLiab: Float
        otherLiab: Float
        otherStockholderEquity: Float
        propertyPlantEquipment: Float
        retainedEarnings: Float
        shortLongTermDebt: Float
        shortTermInvestments: Float
        totalAssets: Float
        totalCurrentAssets: Float
        totalCurrentLiabilities: Float
        totalLiab: Float
        totalStockholderEquity: Float
        treasuryStock: Float
    }

    type RevenueEstimate {
        avgEstimate: String
        avgEstimateNumber: Float
        highEstimate: String
        highEstimateNumber: Float
        lowEstimate: String
        lowEstimateNumber: Float
        noofAnalysts: Float
        salesGrowthyearest: String
        salesGrowthyearestNumber: Float
        yearAgoSales: String
        name: String
    }


    type GrowthEstimates {
        currentQtr: String
        currentQtrPrct: Float
        currentYear: String
        currentYearPrct: Float
        nextFiveYearsperannum: String
        nextFiveYearsperannumPrct: Float
        nextQtr: String
        nextQtrPrct: Float
        nextYear: String
        nextYearPrct: Float
        pastFiveYearsperannum: String
        pastFiveYearsperannumPrct: Float
        name: String
    }

    type Analysis {
        growthEstimates: GrowthEstimates!
        revenueEstimate: [RevenueEstimate]!
    }

    type DefaultKeyStatistics {
        fiveTwoWeekChange: Float ## *100
        sandPFiveTwoWeekChange: Float ## *100
        ## annualHoldingsTurnover: Float
        ## annualReportExpenseRatio: Float
        ## beta": 1.284838,
        ## betaThreeYear": null,
        bookValue: Float
        ## category": null,
        dateShortInterest: Float
        earningsQuarterlyGrowth: Float ## *100
        enterpriseToEbitda: Float
        enterpriseToRevenue: Float
        enterpriseValue: Float
        fiveYearAverageReturn: Float
        floatShares: Float
        forwardEps: Float
        forwardPE: Float
        ## fundFamily: Float
        ## fundInceptionDate: Float
        heldPercentInsiders: Float ## *100
        heldPercentInstitutions: Float ## *100
        ## lastCapGain: Float
        ## lastDividendValue: Float
        lastFiscalYearEnd: Float
        lastSplitDate: Float
        lastSplitFactor: String
        ## legalType": null,
        ## morningStarOverallRating": null,
        ## morningStarRiskRating": null,
        mostRecentQuarter: Float
        netIncomeToCommon: Float
        nextFiscalYearEnd: Float
        pegRatio: Float
        priceHint: Float
        priceToBook: Float
        ## priceToSalesTrailingOneTwoMonths": null,
        profitMargins: Float ## *100
        ## revenueQuarterlyGrowth": null,
        sharesOutstanding: Float
        ## sharesPercentSharesOut": 0.0055,
        sharesShort: Float
        sharesShortPreviousMonthDate: Float
        sharesShortPriorMonth: Float
        ## shortPercentOfFloat": 0.0055,
        shortRatio: Float
        ## threeYearAverageReturn": null,
        ## totalAssets": null,
        trailingEps: Float
        ## yield": null,
        ## ytdReturn": null
    }

    type Earnings {
        earningsChart: EarningsChart
        financialCurrency: String
        financialsChart: FinancialsChart
    }

    type EarningsChart {
        currentQuarterEstimate: Float
        currentQuarterEstimateDate: String
        currentQuarterEstimateYear: Float
        earningsDate: [Float]
        quarterly: [EarningsChartData]
    }

    type EarningsChartData {
        actual: Float
        date: String
        estimate: Float
    }

    type FinancialsChart {
        quarterly: FinancialsChartData
        yearly: FinancialsChartData
    }

    type FinancialsChartData {
        categories: [String]
        series: [Series]
    }

    type Series {
        data: [Float]
        name: String
    }


    type EsgScores {
        adult: Boolean
        alcoholic: Boolean
        animalTesting: Boolean
        catholic: Boolean
        coal: Boolean
        controversialWeapons: Boolean
        ## environmentPercentile": null,
        environmentScore: Float
        esgPerformance: String
        furLeather: Boolean
        gambling: Boolean
        gmo: Boolean
        ## governancePercentile": null,
        governanceScore: Float
        highestControversy: Float
        maxAge: Float
        militaryContract: Boolean
        nuclear: Boolean
        palmOil: Boolean
        peerCount: Float
        peerEnvironmentPerformance: Calculation
        peerEsgScorePerformance: Calculation
        peerGovernancePerformance: Calculation
        peerGroup: String
        peerHighestControversyPerformance: Calculation
        peerSocialPerformance: Calculation
        percentile: Float
        pesticides: Boolean
        ratingMonth: Float
        ratingYear: Float
        relatedControversy: [String]
        smallArms: Boolean
        ## socialPercentile": null,
        socialScore: Float
        tobacco: Boolean
        totalEsg: Float
    }

    type Calculation {
        avg: Float
        max: Float
        min: Float
    }


    type FinancialData {
        currentPrice: Float
        currentRatio: Float
        debtToEquity: Float
        ebitda: Float
        ebitdaMargins: Float ## *100
        financialCurrency: String
        freeCashflow: Float
        grossMargins: Float ## *100
        grossProfits: Float
        FloatOfAnalystOpinions: Float
        operatingCashflow: Float
        operatingMargins: Float ## *100
        profitMargins: Float ## *100
        quickRatio: Float
        recommendationKey: String
        recommendationMean: Float
        returnOnAssets: Float ## *100
        returnOnEquity: Float ## *100
        revenueGrowth: Float ## *100
        revenuePerShare: Float
        targetHighPrice: Float
        targetLowPrice: Float
        targetMeanPrice: Float
        targetMedianPrice: Float
        totalCash: Float
        totalCashPerShare: Float
        totalDebt: Float
        totalRevenue: Float
    }

    type PageViews {
        longTermTrend: String
        midTermTrend: String
        shortTermTrend: String
    }


    type SummaryProfile {
        address1: String
        city: String
        country: String
        fax: String
        fullTimeEmployees: Float
        industry: String
        logo_url: String
        longBusinessSummary: String
        phone: String
        sector: String
        state: String
        website: String
        zip: String
    }

    type UpgradeDowngradeHistory {
        history: [UpgradeDowngradeHistoryData]
    }

    type UpgradeDowngradeHistoryData {
        action: String
        epochGradeDate: Float
        firm: String
        fromGrade: String
        toGrade: String
    }

    type Stats {
        avgVolOnedayThree: String
        bookValuePerSharemrq: String
        currentRatiomrq: String
        dilutedEPSttm: String
        dividendDateThree: String
        eBITDA: String
        enterpriseValueEBITDASix: [String]
        enterpriseValueRevenueThree: [String]
        enterpriseValueThree: [String]
        fiveDayMovingAverageThree: String
        fiveTwoWeekChangeThree: String
        fiveTwoWeekHighThree: String
        fiveTwoWeekLowThree: String
        fiveYearAverageDividendYieldFour: String
        float: String
        forwardAnnualDividendYieldFour: String
        forwardPEOne: [String]
        grossProfitttm: String
        lastSplitDateThree: String
        lastSplitFactorTwo: String
        leveredFreeCashFlowttm: String
        marketCapintradayFive: [String]
        mostRecentQuartermrq: String
        netIncomeAvitoCommonttm: String
        operatingMarginttm: String
        pEGRatioFiveyrexpectedOne: [String]
        payoutRatioFour: String
        pctHeldbyInsidersOne: String
        pctHeldbyInstitutionsOne: String
        priceBookmrq: [String]
        priceSalesttm: [String]
        quarterlyEarningsGrowthyoy: String
        quarterlyRevenueGrowthyoy: String
        returnonEquityttm: String
        revenuePerSharettm: String
        sPFiveFiveTwoWeekChangeThree: String
        sharesOutstandingFive: String
        sharesShortAugOneThreeTwoTwoFour: String
        sharesShortpriormonthJulOneFourTwoTwoFour: String
        shortPctofFloatAugOneThreeTwoTwoFour: String
        shortPctofSharesOutstandingAugOneThreeTwoTwoFour: String
        shortRatioAugOneThreeTwoTwoFour: String
        totalCashPerSharemrq: String
        totalDebtEquitymrq: String
        totalDebtmrq: String
        trailingPE: [String]
        twoDayMovingAverageThree: String
        dateTime: [String]
    }

    type Summary {
        avgVolume: String
        ePSTTM: String
        earningsDate: String
        exDividendDate: String
        fiveTwoWeekRange: String
        forwardDividendYield: String
        oneyTargetEst: Float
        open: String
        pERatioTTM: String
        volume: String
        currency: String
        industry: String
        logo_url: String
        marketPrice: Float
        previousClose: Float
        recommendationKey: String
        recommendationMean: Float
        sector: String
        symbol: String
        targetEstOneyPercent: Float
        weekRangeFiveTwoMax: Float
        weekRangeFiveTwoMin: Float
        currencySymbol: String
        shortName: String
        longName: String
        marketCap: Float
        sharesOutstanding: Float
        longBusinessSummary: String
    }


    type Dividens {
        currentDividendYieldTTM: Float
        dividendGrowthRateFiveY: Float
        dividendPerShareAnnual: Float
        dividendPerShareFiveY: Float
        dividendYieldFiveY: Float
        dividendYieldIndicatedAnnual: Float
        dividendsPerShareTTM: Float
        exDividendDate: String
        trailingAnnualDividendRate: String
        trailingAnnualDividendYield: String
        forwardDividendYield: String
    }

    type Metric {
        fiveDayPriceReturnDaily: Float
        fiveTwoWeekHigh: Float
        fiveTwoWeekHighDate: String
        fiveTwoWeekLow: Float
        fiveTwoWeekLowDate: String
        fiveTwoWeekPriceReturnDaily: Float
        oneDayAverageTradingVolume: Float
        oneThreeWeekPriceReturnDaily: Float
        threeMonthAverageTradingVolume: Float
        twoSixWeekPriceReturnDaily: Float
        assetTurnoverAnnual: Float
        assetTurnoverTTM: Float
        beta: Float
        bookValuePerShareAnnual: Float
        bookValuePerShareQuarterly: Float
        bookValueShareGrowthFiveY: Float
        capitalSpendingGrowthFiveY: Float
        cashFlowPerShareAnnual: Float
        cashFlowPerShareTTM: Float
        cashPerSharePerShareAnnual: Float
        cashPerSharePerShareQuarterly: Float
        currentEvfreeCashFlowAnnual: Float
        currentEvfreeCashFlowTTM: Float
        currentRatioAnnual: Float
        currentRatioQuarterly: Float
        ebitdPerShareTTM: Float
        ebitdaCagrFiveY: Float
        ebitdaInterimCagrFiveY: Float
        epsBasicExclExtraItemsAnnual: Float
        epsBasicExclExtraItemsTTM: Float
        epsExclExtraItemsAnnual: Float
        epsExclExtraItemsTTM: Float
        epsGrowthFiveY: Float
        epsGrowthQuarterlyYoy: Float
        epsGrowthTTMYoy: Float
        epsGrowthThreeY: Float
        epsInclExtraItemsAnnual: Float
        epsInclExtraItemsTTM: Float
        epsNormalizedAnnual: Float
        focfCagrFiveY: Float
        freeCashFlowAnnual: Float
        freeCashFlowPerShareTTM: Float
        freeCashFlowTTM: Float
        freeOperatingCashFlowrevenueFiveY: Float
        freeOperatingCashFlowrevenueTTM: Float
        grossMarginAnnual: Float
        grossMarginFiveY: Float
        grossMarginTTM: Float
        inventoryTurnoverAnnual: Float
        inventoryTurnoverTTM: Float
        longTermDebtequityAnnual: Float
        longTermDebtequityQuarterly: Float
        marketCapitalization: Float
        monthToDatePriceReturnDaily: Float
        netDebtAnnual: Float
        netDebtInterim: Float
        netIncomeEmployeeAnnual: Float
        netIncomeEmployeeTTM: Float
        netInterestCoverageAnnual: Float
        netInterestCoverageTTM: Float
        netMarginGrowthFiveY: Float
        netProfitMarginAnnual: Float
        netProfitMarginFiveY: Float
        netProfitMarginTTM: Float
        operatingMarginAnnual: Float
        operatingMarginFiveY: Float
        operatingMarginTTM: Float
        payoutRatioAnnual: Float
        payoutRatioTTM: Float
        pbAnnual: Float
        pbQuarterly: Float
        pcfShareTTM: Float
        peBasicExclExtraTTM: Float
        peExclExtraAnnual: Float
        peExclExtraHighTTM: Float
        peExclExtraTTM: Float
        peExclLowTTM: Float
        peInclExtraTTM: Float
        peNormalizedAnnual: Float
        pfcfShareAnnual: Float
        pfcfShareTTM: Float
        pretaxMarginAnnual: Float
        pretaxMarginFiveY: Float
        pretaxMarginTTM: Float
        priceRelativeToSPFiveFiveTwoWeek: Float
        priceRelativeToSPFiveFourWeek: Float
        priceRelativeToSPFiveOneThreeWeek: Float
        priceRelativeToSPFiveTwoSixWeek: Float
        priceRelativeToSPFiveYtd: Float
        psAnnual: Float
        psTTM: Float
        ptbvAnnual: Float
        ptbvQuarterly: Float
        quickRatioAnnual: Float
        quickRatioQuarterly: Float
        receivablesTurnoverAnnual: Float
        receivablesTurnoverTTM: Float
        revenueEmployeeAnnual: Float
        revenueEmployeeTTM: Float
        revenueGrowthFiveY: Float
        revenueGrowthQuarterlyYoy: Float
        revenueGrowthTTMYoy: Float
        revenueGrowthThreeY: Float
        revenuePerShareAnnual: Float
        revenuePerShareTTM: Float
        revenueShareGrowthFiveY: Float
        roaRfy: Float
        roaaFiveY: Float
        roaeFiveY: Float
        roaeTTM: Float
        roeRfy: Float
        roeTTM: Float
        roiAnnual: Float
        roiFiveY: Float
        roiTTM: Float
        tangibleBookValuePerShareAnnual: Float
        tangibleBookValuePerShareQuarterly: Float
        tbvCagrFiveY: Float
        totalDebtCagrFiveY: Float
        totalDebttotalEquityAnnual: Float
        totalDebttotalEquityQuarterly: Float
        yearToDatePriceReturnDaily: Float
    }


    type NewsArticle {
        datetime: Float
        headline: String
        image: String
        sourceName: String
        summary: String
        url: String
    }



    ##----------------------
    ##### INTPUS


`;
