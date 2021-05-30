import { gql } from 'apollo-server';
export const STFreeCashFlowFormulaTypeDefs = gql`
    type STFreeCashFlowFormula {
        avgFcf: Float!
        estimatedIntrinsicMarketCap: Float!
        estimatedIntrinsicValue: Float!
        historicalYears: [String]
        minimumRateReturn: Float!
        netBorrowings: [Float]!
        freeCashFlows: [Float]!
        sharesOutstanding: Float!
    }

`;