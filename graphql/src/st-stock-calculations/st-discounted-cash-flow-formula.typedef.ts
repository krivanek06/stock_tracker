import { gql } from 'apollo-server';
export const STDiscountedCashFlowFormulaTypeDefs = gql`
	type STDiscountedCashFlowFormula {
		estimatedCompanyTodayValue: Float!
		estimatedDiscountedFactors: [Float!]!
		estimatedDiscountedTerminalValue: Float!
		estimatedFreeCashFlowRate: Float!
		estimatedFreeCashFlowRates: [Float!]!
		estimatedFreeCashFlows: [Float!]!
		estimatedIntrinsicValue: Float!
		estimatedNetIncomeMargin: Float!
		estimatedNetIncomes: [Float!]!
		estimatedPresentValueOfFutureCashFlows: [Float]!
		estimatedRevenueGrowthRate: Float!
		estimatedRevenues: [Float!]!
		estimatedTerminalValue: Float!
		historical: STDiscountedCashFlowFormulaHistorical!
		variable: STDiscountedCashFlowFormulaVariable!
		years: [String]!
	}

	type STDiscountedCashFlowFormulaHistorical {
		freeCashFlows: [Float!]!
		sharesOutstanding: Float!
		netIncomeMargins: [Float!]!
		netIncome: [Float!]!
		revenue: [Float!]!
		revenueGrowthRates: [Float!]!
		historicalYears: [String!]!
	}

	type STDiscountedCashFlowFormulaVariable {
		perpetualGrowthRate: Float!
		requiredRateOfReturn: Float!
	}
`;
