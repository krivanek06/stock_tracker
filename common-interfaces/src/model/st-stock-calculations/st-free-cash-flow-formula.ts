export interface STFreeCashFlowFormula {
    avgFcf: number;
    estimatedIntrinsicMarketCap: number;
    estimatedIntrinsicValue: number;
    historicalYears: string[];
    minimumRateReturn: number;
    netBorrowings: number[];
    operatingActivities: number[];
    capitalExpenditures: number[];
    freeCashFlows: number[];
    sharesOutstanding: number;
}