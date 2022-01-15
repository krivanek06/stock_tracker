import { gql } from 'apollo-server';

export const STPortfolioTypeDefs = gql`
	# type
	# type STPortfolio {
	# 	portfolioInvested: Float!
	# 	portfolioCash: Float!
	# }

	type STPortfolioSnapshot {
		portfolioInvested: Float!
		portfolioCash: Float!
		date: String!
	}

	type STPortfolioChangeData {
		portfolioIncreaseNumber: Float!
		portfolioIncreasePrct: Float!
	}

	type STPortfolioChange {
		from_beginning_change: STPortfolioChangeData
		day_1_change: STPortfolioChangeData
		week_1_change: STPortfolioChangeData
		week_2_change: STPortfolioChangeData
		week_3_change: STPortfolioChangeData
		month_1_change: STPortfolioChangeData
		month_2_change: STPortfolioChangeData
		month_3_change: STPortfolioChangeData
		month_6_change: STPortfolioChangeData
		year_1_change: STPortfolioChangeData
	}

	type STPortfolioWrapper {
		portfolioCash: Float!
		numberOfExecutedBuyTransactions: Float!
		numberOfExecutedSellTransactions: Float!
		lastPortfolioIncreaseNumber: Float!
		lastPortfolioIncreasePrct: Float!
		lastPortfolioSnapshot: STPortfolioSnapshot!
		lastTransactionSnapshot: STTransactionSnapshot!
		transactionFees: Float!
		portfolioChange: STPortfolioChange!
		lastPortfolioBalance: Float!
	}

	type STPortfolioRiskCalculations {
		date: String
		portfolioAlpha: Float
		portfolioAnnualVariancePrct: Float
		portfolioAnnualVolatilityPrct: Float
		portfolioBeta: Float
		portfolioEstimatedReturnPrct: Float
		portfolioEstimatedReturnValue: Float
		portfolioSharpRatio: Float
		portfolioVolatilityMeanPrct: Float
	}

	type STPortfolioSnapshotStarted {
		portfolioInvested: Float!
		portfolioCash: Float!
		date: String!
		numberOfExecutedBuyTransactions: Float!
		numberOfExecutedSellTransactions: Float!
		transactionFees: Float!
		lastPortfolioBalance: Float!
	}
`;
