import { gql } from 'apollo-server';
export const STDividendDiscountedFormulaTypeDefs = gql`
    type STDividendDiscountedFormula {
        dividendGrowthRate: Float!
        dividendsPerShareTTM: Float!
        minimumRateReturn: Float!
        estimatedIntrinsicValue: Float!
    }
`;