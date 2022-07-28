import * as api from 'stock-tracker-common-interfaces';

export const convertSTUserPublicDataToSTUserIndentification = (publicData: api.STUserIndentification): api.STUserIndentification => {
	const identification: api.STUserIndentification = {
		accountCreatedDate: publicData.accountCreatedDate,
		locale: publicData.locale,
		nickName: publicData.nickName,
		photoURL: publicData.photoURL,
		id: publicData.id,
		lastSignInDate: publicData.lastSignInDate,
	};
	return identification;
};

export const convertSTUserPublicDataToSTUserIndentificationWithPortfolio = (
	publicData?: api.STUserIndentificationWithPortfolio | null
): api.STUserIndentificationWithPortfolio | null => {
	if (!publicData) {
		return null;
	}

	const identification: api.STUserIndentificationWithPortfolio = {
		...convertSTUserPublicDataToSTUserIndentification(publicData),
		portfolio: {
			...publicData.portfolio,
		},
	};
	return identification;
};

export const convertSTUserPublicDataToSTUserGroup = (userPublicData: api.STUserPublicData): api.STGroupUser => {
	return {
		accountCreatedDate: userPublicData.accountCreatedDate,
		lastSignInDate: userPublicData.lastSignInDate,
		locale: userPublicData.locale,
		nickName: userPublicData.nickName,
		photoURL: userPublicData.photoURL,
		id: userPublicData.id,
		startedPortfolio: {
			lastPortfolioBalance: userPublicData.portfolio.lastPortfolioBalance,
			transactionFees: userPublicData.portfolio.transactionFees,
			numberOfExecutedBuyTransactions: userPublicData.portfolio.numberOfExecutedBuyTransactions,
			numberOfExecutedSellTransactions: userPublicData.portfolio.numberOfExecutedSellTransactions,
			portfolioCash: userPublicData.portfolio.lastPortfolioSnapshot.portfolioCash,
			portfolioInvested: userPublicData.portfolio.lastPortfolioSnapshot.portfolioInvested,
			date: userPublicData.portfolio.lastPortfolioSnapshot.date,
		},
		sinceDate: new Date().toISOString().toString(),
		portfolio: {
			...userPublicData.portfolio,
		},
	};
};
