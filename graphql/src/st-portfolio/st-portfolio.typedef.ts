import { gql } from 'apollo-server';

export const STPortfolioTypeDefs = gql`
	# type
	type STPortfolio {
		portfolioInvested: Float!
		portfolioCash: Float!
	}

	type STPortfolioSnapshot {
		portfolioInvested: Float!
		portfolioCash: Float!
		date: String!
	}

	type STPortfolioWrapper {
		portfolioCash: Float!
		numberOfExecutedBuyTransactions: Float!
		numberOfExecutedSellTransactions: Float!
		lastPortfolioIncreaseNumber: Float
		lastPortfolioIncreasePrct: Float
		lastPortfolioSnapshot: STPortfolioSnapshot
		lastTransactionSnapshot: STTransactionSnapshot
		transactionFees: Float
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
		transactionFees: Float
	}
`;
