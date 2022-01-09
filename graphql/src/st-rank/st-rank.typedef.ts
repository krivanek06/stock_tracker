import { gql } from 'apollo-server';

export const STRankTypeDefs = gql`
	# type
	type STRank {
		highestPortfolio: STRankHighestPortfolio
	}

	type STRankHighestPortfolio {
		total: Float!
		date: String!
		dateEvaluation: String!
		rankHighestPortfolioPlace: Float!
		rankHighestPortfolio: STPortfolioSnapshot!
	}
`;
