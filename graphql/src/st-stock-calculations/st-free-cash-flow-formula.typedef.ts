import { gql } from 'apollo-server';
export const STFreeCashFlowFormulaTypeDefs = gql`
    type STFreeCashFlowFormula {
        avgFcf: Float!
        estimatedIntrinsicMarketCap: Float!
        estimatedIntrinsicValue: Float!
        historicalYears: [String]
        minimumRateReturn: Float!
        netBorrowings: [Float]!
        capitalExpenditures: [Float]!
        operatingActivities: [Float]!
        freeCashFlows: [Float]!
        sharesOutstanding: Float!
    }

`;