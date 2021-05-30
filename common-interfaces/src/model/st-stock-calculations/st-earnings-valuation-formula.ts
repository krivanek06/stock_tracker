export interface STEarningsValuationFormula {
    dates: string[];
    eps: number;
    estimatedDiscountedPV: number[];
    estimatedEarnings: number[];
    estimatedIntrinsicValue: number;
    variable: STEarningsValuationFormulaVariable;
}

export interface STEarningsValuationFormulaVariable {
    growthRateFrom5yTo10y: number;
    growthRateNext5y: number;
    minimumRateReturn: number;
    terminalMultiple: number;
}