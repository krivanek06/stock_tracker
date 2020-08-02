import { gql } from "apollo-server";

export const watchlistTypeDefs = gql`

    ##### TYPES
    type StockWatchlist {
        id: String!
        name: String!
        timestamp: Float!
        userId: String!
        stocks: [String]!
        stocksDetails: [StockDetails]!
    }

    type StockDetails {
        id: String!
        basicInfo: BasicInfo
        chartInfo: ChartInfo
        dividend: Dividend
        analysis: Analysis
        balanceSheet: BalanceSheet
        cashFlow: CashFlow
        overview: OverView
        perShare: PerShare
        valuation: Valuation
        financialStrength: FinancialStrength
        financialReports: [FinancialReportNames]
        financialStrengthRatio: FinancialStrengthRatio
        incomeStatement: IncomeStatement
        recommendation: [Recommendations]
        stockNewsSnippets: [StockArticle]
    }

    type PerShare{
        bookValuePerShareMRQ: Float
        cashFlowPerShareAnnual: Float
        cashFlowPerShareTTM: Float
        cashPerSharePerShareAnnual: Float
        cashPerSharePerShareQuarterly: Float
        ebitdPerShareTTM: Float
        freeCashFlowPerShareTTM: Float
        revenuePerShareTTM: Float
        tangibleBookValuePerShareQuarterly: Float
        totalCashPerShareMRQ: Float
    }

    type FinancialStrengthRatio {
        currentRatioQuarterly: Float
        freeOperatingCashFlowToRevenue5Y: Float
        longTermDebtToEquityQuarterly: Float
        quickRatioQuarterly: Float
        totalDebtToEquityAnnual: Float
        totalDebtToEquityQuarterly: Float
    }

    type FinancialStrength {
        ebitda: String
        grossProfitTTM: String
        leveredFreeCashFlowTTM: String
        marketCap: String
        netIncomeAvitoCommonTTM: String
        operatingCashFlowTTM: String
        revenueTTM: String
        totalCashMRQ: String
        totalDebtMRQ: String
    }

    type FinancialReportNames {
        collection: String
        name: String
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
        Basic_Average_Shares: [Float]
        Basic_EPS: [Float]
        Cost_of_Revenue: [Float]
        Diluted_Average_Shares: [Float]
        Diluted_EPS: [Float]
        Diluted_NI_Available_to_Com_Stockholders: [Float]
        Gross_Profit: [Float]
        Interest_Expense: [Float]
        Net_Income_Common_Stockholders: [Float]
        Net_Income_from_Continuing_And_Discontinued_Operation: [Float]
        Net_Income_from_Continuing_Operation_Net_Minority_Interest: [Float]
        Net_Interest_Income: [Float]
        Net_Non_Operating_Interest_Income_Expense: [Float]
        Normalized_EBITDA: [Float]
        Normalized_Income: [Float]
        Operating_Expense: [Float]
        Operating_Income: [Float]
        Other_Income_Expense: [Float]
        Pretax_Income: [Float]
        Reconciled_Cost_of_Revenue: [Float]
        Reconciled_Depreciation: [Float]
        Tax_Effect_of_Unusual_Items: [Float]
        Tax_Provision: [Float]
        Tax_Rate_for_Calcs: [Float]
        Total_Expenses: [Float]
        Total_Operating_Income_as_Reported: [Float]
        Total_Revenue: [Float]
        Total_Unusual_Items: [Float]
        Total_Unusual_Items_Excluding_Goodwill: [Float]
        date: [String]
    }

    type CashFlow {
        Capital_Expenditure: [Float]
        End_Cash_Position: [Float]
        Financing_Cash_Flow: [Float]
        Free_Cash_Flow: [Float]
        Investing_Cash_Flow: [Float]
        Issuance_of_Capital_Stock: [Float]
        Issuance_of_Debt: [Float]
        Operating_Cash_Flow: [Float]
        Repayment_of_Debt: [Float]
        Repurchase_of_Capital_Stock: [Float]
        date: [String]
    }

    type BalanceSheet {
        Capital_Lease_Obligations: [Float]
        Common_Stock_Equity: [Float]
        Invested_Capital: [Float]
        Net_Debt: [Float]
        Net_Tangible_Assets: [Float]
        Ordinary_Shares_Float: [Float]
        Share_Issued: [Float]
        Tangible_Book_Value: [Float]
        Total_Assets: [Float]
        Total_Capitalization: [Float]
        Total_Debt: [Float]
        Total_Equity_Gross_Minority_Interest: [Float]
        Total_Liabilities_Net_Minority_Interest: [Float]
        Working_Capital: [Float]
        date: [String]
    }

    type RevenueEstimate {
        currentQuarter: RevenueEstimateData
        currentYear: RevenueEstimateData
        nextQuarter: RevenueEstimateData
        nextYear: RevenueEstimateData
    }

    type RevenueEstimateData {
        average: Float
        high: Float
        low: Float
        growthPercent: Float
        average_String: String
        high_String: String
        low_String: String
        FloatOfAnalysis: Float
        timeEstimation: String
        yearAgo: String
    }

    type GrowthEstimatesPercent {
        fiveYear: GrowthEstimatesPercentData
        quarter: GrowthEstimatesPercentData
        year: GrowthEstimatesPercentData
    }

    type GrowthEstimatesPercentData {
        current: Float
        next: Float
    }

    type Earnings {
        dates: [String]
        epsActual: [Float]
        epsEst: [Float]
    }

    type Analysis {
        growthEstimatesPercent: GrowthEstimatesPercent
        revenueEstimate: RevenueEstimate
        earnings: Earnings
    }




    type ChartInfo {
        assetsToDebtInfo: AssetsToDebtInfo
        equityToAssets: EquityToAssets
        effectiveness: Effectiveness
        margin: Margin
        otherGrowthInformation: OtherGrowthInformation
        profitMargin: ProfitMargin
    }

    type ProfitMargin {
        expenseTTM: Float
        netProfitMarginTTM: Float
    }

    type OtherGrowthInformation {
        bookValueShareGrowth5Y: Float
        capitalSpendingGrowth5Y: Float
        dividendGrowthRate5Y: Float
        epsGrowth5Y: Float
        epsGrowthQuarterlyYOY: Float
        quarterlyRevenueGrowthYOY: Float
        revenueGrowthTTMYoy: Float
        revenueShareGrowth5Y: Float
    }

    type Margin {
        grossMarginTTM: Float
        netMarginGrowth5Y: Float
        netProfitMargin5Y: Float
        netProfitMarginTTM: Float
        operatingMarginTTM: Float
        pretaxMarginTTM: Float
    }

    type Effectiveness {
        returnOnAssetsTTM: Float
        returnOnEquityTTM: Float
        returnOnInvestmentsTTM: Float
    }

    type AssetsToDebtInfo {
        totalAssets: Float
        totalDebt: Float
        prctDiff: Float
    }

    type EquityToAssets {
        totalAssets: Float
        totalEquity: Float
        prctDiff: Float
    }

    type Valuation {
        currentEvToFreeCashFlowAnnual: Float
        currentEvToFreeCashFlowTTM: Float
        enterpriseValueToEBITDA: Float
        enterpriseValueToRevenue: Float
        forwardPE: Float
        customPE: Float
        peRatioTTM: Float
        pegRatioFiveYearExpected: Float
        priceToBookMRQ: Float
        priceToSalesTTM: Float
        trailingPE: Float
    }

    type OverView {
        currentPrice: Float
        currentPriceChange: Float
        previousClose: Float
        weekHigh52: Float
        weekLow52: Float
        symbol: String
        earningsDate: String
        exDividendDate: String
        forwardDividendAndYield: String
        targetEst1y: Float
        targetEst1yPercent: Float
    }


    type Dividend {
        dividendDate: String
        dividendPerShare5Y: Float
        dividendPerShareAnnual: Float
        exDividendDate: String
        fiveYearAverageDividendYield: String
        forwardAnnualDividendRate: String
        forwardAnnualDividendYield: String
        payoutRatio: String
        trailingAnnualDividendRate: String
        trailingAnnualDividendYield: String
    }

    type BasicInfo {
        address1: String
        city: String
        country: String
        exchangeTimezoneName: String
        fullTimeEmployees: Float
        industry: String
        sector: String
        shortName: String
        state: String
        website: String
        zip: String
        netIncomeEmployeeAnnual: Float
        revenueEmployeeAnnual: Float
        sharesOutstanding: Float
        summary: String
        symbol: String
        logoUrl: String
    }


    type StockArticleWrapper {
        stockNews: [StockArticle]
    }

    type StockArticle {
        datetime: String
        headline: String
        image: String
        related: String
        source: String
        sourceName: String
        summary: String
        url: String
    }


    ##----------------------
    ##### INTPUS

    input StockWatchlistIdentifier {
        userId: String!
        id: String
        additionalData: String
    }

    
    
`;
