import { gql } from 'apollo-server';
export const STEarningsValuationFormulaTypeDefs = gql`
    type STEarningsValuationFormula {
        dates: [String]!
        eps: Float!
        estimatedDiscountedPV: [Float]!
        estimatedEarnings: [Float]!
        estimatedIntrinsicValue: Float!
        variable: STEarningsValuationFormulaVariable!
    }

    type STEarningsValuationFormulaVariable {
        growthRateFrom5yTo10y: Float!
        growthRateNext5y: Float!
        minimumRateReturn: Float!
        terminalMultiple: Float!
    }

`;