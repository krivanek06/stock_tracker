import { StGroupUser, StUserPublicData } from '../graphql-schema';

export const createSTGroupUser = (userPublic: StUserPublicData): StGroupUser => {
	const groupUser: StGroupUser = {
		__typename: 'STGroupUser',
		accountCreatedDate: userPublic.accountCreatedDate,
		locale: userPublic.locale,
		nickName: userPublic.nickName,
		photoURL: userPublic.photoURL || '',
		id: userPublic.id,
		portfolio: {
			lastPortfolioSnapshot: userPublic.portfolio.lastPortfolioSnapshot,
			lastTransactionSnapshot: userPublic.portfolio.lastTransactionSnapshot,
			numberOfExecutedBuyTransactions: userPublic.portfolio.numberOfExecutedBuyTransactions,
			numberOfExecutedSellTransactions: userPublic.portfolio.numberOfExecutedSellTransactions,
			lastPortfolioIncreaseNumber: userPublic.portfolio.lastPortfolioIncreaseNumber,
			lastPortfolioIncreasePrct: userPublic.portfolio.lastPortfolioIncreasePrct,
			portfolioCash: userPublic.portfolio.portfolioCash,
			transactionFees: userPublic.portfolio.transactionFees,
			portfolioChange: {
				...userPublic.portfolio.portfolioChange,
			},
		},
		startedPortfolio: {
			date: new Date().toISOString(),
			portfolioInvested: userPublic.portfolio.lastPortfolioSnapshot.portfolioInvested,
			portfolioCash: userPublic.portfolio.portfolioCash,
			numberOfExecutedBuyTransactions: userPublic.portfolio.numberOfExecutedBuyTransactions,
			numberOfExecutedSellTransactions: userPublic.portfolio.numberOfExecutedSellTransactions,
		},

		previousPosition: null,
		currentPosition: null,
		sinceDate: new Date().toISOString(),
	};
	return groupUser;
};
