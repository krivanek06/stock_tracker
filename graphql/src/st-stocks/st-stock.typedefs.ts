import {gql} from "apollo-server"

export const stockDetailsTypeDefs = gql`
    ##### TYPE

    type SearchSymbol {
        summaries: [Summary]!
    }

    type StockDetailsFinancialReports {
        allFinancialReportsQuarterly: [FinancialReport]
        allFinancialReportsYearly: [FinancialReport]
    }

    type StockDetails {
        id: String!
        analysis: Analysis
        balanceSheet: BalanceSheet
        cashFlow: CashFlow
        incomeStatement: IncomeStatement
        recommendation: [Recommendations]
        stockNews: [NewsArticle]
        companyData: CompanyData
        summary: Summary!
        metric: Metric
        dividends: Dividens
        historicalMetrics: HistoricalMetrics
        institutionOwnerships: [InstitutionOwnership]
        insiderTransactions: [InsiderTransaction]
        calculations: STStockDetailsCalculations
        calculatedPredictions: STStockDetailsCalculatedPredictions
        allFinancialReportsQuarterly: [FinancialReport]
        allFinancialReportsYearly: [FinancialReport]
    }

    type FinancialReport  {
        acceptedDate: String
        accessNumber: String
        cik: String
        endDate: String
        filedDate: String
        form: String
        quarter: Float
        startDate: String
        symbol: String
        year: Float
        report: FinancialReportStatement
    }

    type FinancialReportStatement {
        bs: [FinancialReportStatementeportStatementData]
        cf: [FinancialReportStatementeportStatementData]
        ic: [FinancialReportStatementeportStatementData]
    }

    type FinancialReportStatementeportStatementData {
        concept: String
        label: String
        unit: String
        value: Float
    }

    type STStockDetailsCalculatedPredictions {
        DCF_V1: STDiscountedCashFlowFormula
        DDF_V1: STDividendDiscountedFormula
        FCF_V1: STFreeCashFlowFormula
        INTRINSIC_V1: STEarningsValuationFormula
    }

    type STStockDetailsCalculations {
        CAPM: CAPM
        WACC: WACC
    }

    type InsiderTransaction {
        filerName: String
        filerRelation: String
        shares: Float
        startDate: Float
        transactionText: String
        value: Float
    }

    type InstitutionOwnership {
        maxAge: Float
        organization: String
        pctHeld: Float
        position: Float
        reportDate: Float
        value: Float
    }

    type HistoricalMetrics {
        cashRatio: HistoricalMetricsData
        currentRatio: HistoricalMetricsData
        ebitPerShare: HistoricalMetricsData
        eps: HistoricalMetricsData
        grossMargin: HistoricalMetricsData
        longtermDebtTotalAsset: HistoricalMetricsData
        longtermDebtTotalCapital: HistoricalMetricsData
        longtermDebtTotalEquity: HistoricalMetricsData
        netDebtToTotalCapital: HistoricalMetricsData
        netDebtToTotalEquity: HistoricalMetricsData
        netMargin: HistoricalMetricsData
        operatingMargin: HistoricalMetricsData
        pretaxMargin: HistoricalMetricsData
        salesPerShare: HistoricalMetricsData
        sgaToSale: HistoricalMetricsData
        totalDebtToEquity: HistoricalMetricsData
        totalDebtToTotalAsset: HistoricalMetricsData
        totalDebtToTotalCapital: HistoricalMetricsData
        totalRatio: HistoricalMetricsData
    }

    type HistoricalMetricsData {
        name: String
        dates: [String]
        data: [Float]
    }


    type CompanyData {
        defaultKeyStatistics: DefaultKeyStatistics
        earnings: Earnings
        esgScores: EsgScores
        financialData: FinancialData
        pageViews: PageViews
        upgradeDowngradeHistory: [UpgradeDowngradeHistory]
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
        quarterly: IncomeStatementData
        yearly: IncomeStatementData
    }


    type IncomeStatementData {
        costOfRevenue: SheetData
        discontinuedOperations: SheetData
        ebit: SheetData
        effectOfAccountingCharges: SheetData
        endDate: SheetData
        extraordinaryItems: SheetData
        grossProfit: SheetData
        incomeBeforeTax: SheetData
        incomeTaxExpense: SheetData
        interestExpense: SheetData
        netIncome: SheetData
        netIncomeApplicableToCommonShares: SheetData
        netIncomeFromContinuingOps: SheetData
        operatingIncome: SheetData
        otherOperatingExpenses: SheetData
        researchDevelopment: SheetData
        sellingGeneralAdministrative: SheetData
        totalOperatingExpenses: SheetData
        totalOtherIncomeExpenseNet: SheetData
        totalRevenue: SheetData
        dilutedEarnings: SheetData
        basicEarnings: SheetData
        dividendsInCash: SheetData
        administrativeExpense: SheetData
        costOfSales: SheetData
        incomeTaxProvision: SheetData
        marketingExpense: SheetData
        netIncomeMargin: SheetData
        revenue: SheetData
        researchAndDevelopment: SheetData
        operatingExpenses: SheetData
        operatingIncomeLoss: SheetData
        changeInMarketableDebtSecurities: SheetData
        adjustedNetGainsIncludedInNetIncome: SheetData
        otherComprehensiveIncome: SheetData
        salesAndMarketing: SheetData
    }

    type CashFlow {
        quarterly: CashFlowData
        yearly: CashFlowData
    }

    type CashFlowData {
        capitalExpenditures: SheetData
        changeInCash: SheetData
        changeToAccountReceivables: SheetData
        changeToInventory: SheetData
        deferredTaxes: SheetData
        changeToLiabilities: SheetData
        changeToNetincome: SheetData
        changeToOperatingActivities: SheetData
        depreciation: SheetData
        dividendsPaid: SheetData
        endDate: SheetData
        investments: SheetData
        maxAge: SheetData
        netBorrowings: SheetData
        netIncome: SheetData
        otherCashflowsFromFinancingActivities: SheetData
        otherCashflowsFromInvestingActivities: SheetData
        repurchaseOfStock: SheetData
        totalCashFromFinancingActivities: SheetData
        totalCashFromOperatingActivities: SheetData
        totalCashflowsFromInvestingActivities: SheetData
        shareBasedCompensation: SheetData
        accountsReceivable: SheetData
        accruedExpenses: SheetData
        purchasesOfSecuritie: SheetData
        marketableSecurities: SheetData
        acquisitionsOfBusinesses: SheetData
        issuanceOfStock: SheetData
        salesOfSecurities: SheetData
        maturitiesOfSecurities: SheetData
        incomeTax: SheetData
        accruedEquipment: SheetData
        longTermDebtRepayments: SheetData
        commercialPaperRepayments: SheetData
        shortTermDebtRepayments: SheetData
        longTermDebtInsurance: SheetData
        customerDeposits: SheetData
        freeCashFlow: SheetData
        paymentsOfDividends: SheetData
        paymentsOfEquipment: SheetData
        DepreciationDepletionAndAmortization: SheetData
        increaseDecreaseInInventories: SheetData
        increaseDecreaseInOtherReceivables: SheetData
        otherOperatingAssets: SheetData
        accountsPayable: SheetData
        otherOperatingLiabilities: SheetData
        operatingActivities: SheetData
        paymentsToAcquireSaleSecurities: SheetData
        paymentsToAcquireOtherInvestments: SheetData
        maturityOfOtherInvestments: SheetData
        investingActivities: SheetData
        shareBasedCompensationTax: SheetData
        paymentsForRepurchaseOfCommonStock: SheetData
        proceedsFromIssuanceOfLongTermDebt: SheetData
        financingActivities: SheetData
        interestPaidNet: SheetData
        paymentsToAcquireInvestments: SheetData
        repaymentsOfDebt: SheetData
    }

    type BalanceSheet {
        quarterly: BalanceSheetData
        yearly: BalanceSheetData
    }

    type BalanceSheetData {
        accountsPayable: SheetData
        cash: SheetData
        commonStock: SheetData
        endDate: SheetData
        inventory: SheetData
        longTermDebt: SheetData
        longTermInvestments: SheetData
        maxAge: SheetData
        netReceivables: SheetData
        netTangibleAssets: SheetData
        otherAssets: SheetData
        otherCurrentAssets: SheetData
        otherCurrentLiab: SheetData
        otherLiab: SheetData
        otherStockholderEquity: SheetData
        propertyPlantEquipment: SheetData
        retainedEarnings: SheetData
        shortLongTermDebt: SheetData
        shortTermInvestments: SheetData
        totalAssets: SheetData
        totalCurrentAssets: SheetData
        totalCurrentLiabilities: SheetData
        totalLiab: SheetData
        totalStockholderEquity: SheetData
        treasuryStock: SheetData
        accumulatedComprehensiveIncome: SheetData
        totalSecuritiesForSale: SheetData
        commonStockValue: SheetData
        deferredRevenue: SheetData
        operatingLeaseLiability: SheetData
        goodwill: SheetData
        prepaidExpense: SheetData
        netEquity: SheetData
        prepaidAssets: SheetData
        paidInCapital: SheetData
        intangibleAssets: SheetData
        cashAndCashEquivalents: SheetData
        marketableSecuritiesCurrent: SheetData
        accountsReceivableNetCurrent: SheetData
        inventoryNet: SheetData
        nontradeReceivablesCurrent: SheetData
        assetsCurrent: SheetData
        marketableSecurities: SheetData
        otherAssetsNoncurrent: SheetData
        assetsNoncurrent: SheetData
        assets: SheetData
        otherLiabilitiesCurrent: SheetData
        commercialPaper: SheetData
        currentDebt: SheetData
        liabilitiesCurrent: SheetData
        otherLongTermLiabilities: SheetData
        currentLiabilities: SheetData
        commitmentsAndContingencies: SheetData
        retainedEarningsAccumulatedDeficit: SheetData
        stockholdersEquity: SheetData
        incomeTaxesLongTerm: SheetData
        incomeTaxesShortTerm: SheetData
    }

    type SheetData {
        change: [Float]
        data: [Float]
        name: String
        isPercent: Boolean
    }

    type Estimates {
        avg: Float
        growth: Float
        high: Float
        low: Float
        name: String
        noofAnalysts: Float
        yearAgo: Float
    }

    type DataSet {
        y: Float
        name: String
    }

    type Analysis {
        earningsEstimate: [Estimates]
        revenueEstimate: [Estimates]
        growthEstimates: [DataSet]
    }

    type DefaultKeyStatistics {
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
        sharesPercentSharesOut: Float
        sharesShort: Float
        sharesShortPreviousMonthDate: Float
        sharesShortPriorMonth: Float
        shortPercentOfFloat: Float
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
        earningsGrowth: Float
        ebitda: Float
        ebitdaMargins: Float
        financialCurrency: String
        freeCashflow: Float
        grossMargins: Float
        grossProfits: Float
        numberOfAnalystOpinions: Float
        operatingCashflow: Float
        operatingMargins: Float
        profitMargins: Float
        quickRatio: Float
        recommendationKey: String
        recommendationMean: Float
        returnOnAssets: Float
        returnOnEquity: Float
        revenueGrowth: Float
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
        action: String
        epochGradeDate: Float
        firm: String
        fromGrade: String
        toGrade: String
    }

    type SummaryResidance {
        city: String
        state: String
        country: String
        addressOne: String
        zip: String
    }

    type Summary {
        residance: SummaryResidance
        id: String
        avgVolume: Float
        currency: String
        currencySymbol: String
        dividendDate: Float
        ePSTTM: Float
        earningsDate: Float
        exDividendDate: Float
        exchangeName: String
        fiveTwoWeekRange: String
        forwardDividendRate: Float
        forwardDividendYield: Float
        forwardEPS: Float
        forwardPE: Float
        fullTimeEmployees: Float
        industry: String
        lastSplitDate: Float
        lastSplitFactor: String
        logo_url: String
        longBusinessSummary: String
        longName: String
        marketCap: Float
        marketPrice: Float
        oneyTargetEst: Float
        open: Float
        pERatioTTM: Float
        previousClose: Float
        recommendationKey: String
        recommendationMean: Float
        sandPFiveTwoWeekChange: Float
        sector: String
        sharesOutstanding: Float
        shortName: String
        shortRatio: Float
        symbol: String
        targetEstOneyPercent: Float
        volume: Float
        website: String
        weekRangeFiveTwoMax: Float
        weekRangeFiveTwoMin: Float
        yearToDatePrice: Float
        yearToDatePriceReturn: Float
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
