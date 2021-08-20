import {gql} from "apollo-server"

export const stockDetailsTypeDefs = gql`
    ##### TYPE

    type SearchSymbol {
        summaries: [Summary]!
    }

    type StockDetailsFinancialReports {
        id: String!
        allFinancialReportsQuarterly: [FinancialReport]
        allFinancialReportsYearly: [FinancialReport]
    }

    type StockDetails {
        id: String!
        recommendation: [Recommendations]
        companyData: CompanyData
        summary: Summary!
        metric: Metric
        dividends: Dividens
        historicalMetrics: HistoricalMetrics
        calculations: STStockDetailsCalculations
        calculatedPredictions: STStockDetailsCalculatedPredictions
        allFinancialReportsQuarterly: [FinancialReport]
        allFinancialReportsYearly: [FinancialReport]
        institutionalHolders: [STFMHolder]
        mutualFundHolders: [STFMHolderWithWeight]
        companyOutlook: STFMCompanyOutlook
        sectorPeers: [STFMCompanyQuote]
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
        bs: [FinancialReportStatementData]
        cf: [FinancialReportStatementData]
        ic: [FinancialReportStatementData]
    }

    type FinancialReportStatementData {
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
        avgVolume: Float
        ceo: String
        companyName: String
        currency: String
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
        fullTimeEmployees: String
        id: String
        industry: String
        ipoDate: String
        lastSplitDate: Float
        lastSplitFactor: String
        logo_url: String
        longBusinessSummary: String
        marketCap: Float
        marketPrice: Float
        oneyTargetEst: Float
        pERatioTTM: Float
        previousClose: Float
        recommendationKey: String
        recommendationMean: Float
        residance: SummaryResidance
        sandPFiveTwoWeekChange: Float
        sector: String
        sharesOutstanding: Float
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
        dividendPayoutRatioTTM: Float
        dividendsPerShareTTM: Float
        exDividendDate: Float
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



    type SymbolHistoricalPrices {
        livePrice: Float
        symbol: String
        period: String
        price: [[Float]]
        volume: [[Float]]
    }


`;