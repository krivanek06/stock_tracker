export interface STDiscountedCashFlowFormula {
    estimatedCompanyTodayValue: number;
    estimatedDiscountedFactors: number[];
    estimatedDiscountedTerminalValue: number;
    estimatedFreeCashFlowRate: number;
    estimatedFreeCashFlowRates: number[];
    estimatedFreeCashFlows: number[];
    estimatedIntrinsicValue: number;
    estimatedNetIncomeMargin: number;
    estimatedNetIncomes: number[];
    estimatedPresentValueOfFutureCashFlows: number[];
    estimatedRevenueGrowthRate: number;
    estimatedRevenues: number[];
    estimatedTerminalValue: number;
    historical: STDiscountedCashFlowFormulaHistorical;
    variable: STDiscountedCashFlowFormulaVariable;
    years: string[];
}

export interface STDiscountedCashFlowFormulaHistorical {
    freeCashFlows: number[];
    sharesOutstanding: number;
    netIncomeMargins: number[];
    netIncome: number[];
    revenue: number[];
    revenueGrowthRates: number[];
    historicalYears: string[];
}

export interface STDiscountedCashFlowFormulaVariable {
    perpetualGrowthRate: number;
    requiredRateOfReturn: number;
}