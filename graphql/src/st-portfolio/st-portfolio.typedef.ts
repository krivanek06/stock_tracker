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
		startingPortfolioSnapshot: STPortfolioSnapshot!
		portfolioCash: Float!
		numberOfExecutedTransactions: Float!
		numberOfExecutedBuyTransactions: Float!
		numberOfExecutedSellTransactions: Float!
		lastPortfolioIncreaseNumber: Float
		lastPortfolioIncreasePrct: Float
		lastPortfolioSnapshot: STPortfolioSnapshot
		lastTransactionSnapshot: STTransactionSnapshot
	}
`;
