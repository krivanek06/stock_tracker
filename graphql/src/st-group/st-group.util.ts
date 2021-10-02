import * as api from 'stock-tracker-common-interfaces';
import { getCurrentIOSDate } from '../st-shared/st-shared.functions';
import { convertSTUserPublicDataToSTUserIndentification } from '../st-user/utils/user.convertor';

export const initGroupFromInput = (groupInput: api.STGroupAllDataInput): api.STGroupAllData => {
	const newGroup: api.STGroupAllData = {
		...createEmptySTGroupAllData(),
		name: groupInput.name,
		description: groupInput.description,
		imagePath: groupInput.imagePath,
		imageUrl: groupInput.imageUrl,
		startDate: groupInput.startDate,
		endDate: groupInput.endDate,
		isInfinite: groupInput.isInfinite,
		isPrivate: groupInput.isPrivate,
		numberOfInvitationSent: groupInput.invitationSent.length,
	};
	return newGroup;
};

export const createEmptySTGroupAllData = (): api.STGroupAllData => {
	const now = getCurrentIOSDate();
	const group: api.STGroupAllData = {
		portfolio: {
			lastPortfolioSnapshot: {
				portfolioCash: 0,
				portfolioInvested: 0,
				date: getCurrentIOSDate(),
			},
			lastTransactionSnapshot: {
				transactionsBuy: 0,
				transactionsSell: 0,
				transactionFees: 0,
				date: getCurrentIOSDate(),
			},
			numberOfExecutedBuyTransactions: 0,
			numberOfExecutedSellTransactions: 0,
			lastPortfolioIncreaseNumber: null,
			lastPortfolioIncreasePrct: null,
			portfolioCash: 0,
			transactionFees: 0,
		},
		startedPortfolio: {
			portfolioCash: 0,
			portfolioInvested: 0,
			numberOfExecutedBuyTransactions: 0,
			numberOfExecutedSellTransactions: 0,
			transactionFees: 0,
			date: getCurrentIOSDate(),
		},
		createdDate: now,
		lastUpdateDate: now,
		lastEditedDate: now,
		currentAchievedRank: null,
		description: null,
		lastTransactions: [],
		managers: [],
		name: null,
		owner: null,
		endDate: null,
		isInfinite: null,
		startDate: null,
		topTransactions: [],
		isPrivate: false,
		isClosed: false,
		imagePath: null,
		imageUrl: null,
		numberOfMembers: 0,
		numberOfInvitationReceived: 0,
		numberOfInvitationSent: 0,
	};
	return group;
};

export const createEmptySTGroupHistoricalData = (): api.STGroupHistoricalData => {
	return {
		bestAchievedRanks: [],
		groupLogs: [],
		portfolioSnapshots: [],
		transactionSnapshots: [],
	};
};

export const createSTGroupUser = (userPublic: api.STUserPublicData): api.STGroupUser => {
	const groupUser: api.STGroupUser = {
		...convertSTUserPublicDataToSTUserIndentification(userPublic),
		portfolio: {
			lastPortfolioSnapshot: userPublic.portfolio.lastPortfolioSnapshot,
			lastTransactionSnapshot: userPublic.portfolio.lastTransactionSnapshot,
			numberOfExecutedBuyTransactions: userPublic.portfolio.numberOfExecutedBuyTransactions,
			numberOfExecutedSellTransactions: userPublic.portfolio.numberOfExecutedSellTransactions,
			lastPortfolioIncreaseNumber: userPublic.portfolio.lastPortfolioIncreaseNumber,
			lastPortfolioIncreasePrct: userPublic.portfolio.lastPortfolioIncreasePrct,
			portfolioCash: userPublic.portfolio.portfolioCash,
			transactionFees: userPublic.portfolio.transactionFees,
		},
		startedPortfolio: {
			numberOfExecutedSellTransactions: userPublic.portfolio.numberOfExecutedSellTransactions,
			numberOfExecutedBuyTransactions: userPublic.portfolio.numberOfExecutedBuyTransactions,
			portfolioCash: userPublic.portfolio.lastPortfolioSnapshot.portfolioCash,
			portfolioInvested: userPublic.portfolio.lastPortfolioSnapshot.portfolioInvested,
			transactionFees: userPublic.portfolio.transactionFees,
			date: getCurrentIOSDate(),
		},

		previousPosition: null,
		currentPosition: null,
		sinceDate: getCurrentIOSDate(),
	};

	/* 
		may happen taht user accept group invitation same day as he activated his account then userPublic.portfolio.lastPortfolioSnapshot is 0,
		need to change to userPublic.portfolio.portfolioCash as starting point
	*/
	if (groupUser.startedPortfolio.portfolioCash === 0 && groupUser.startedPortfolio.portfolioInvested === 0) {
		groupUser.startedPortfolio.portfolioCash = userPublic.portfolio.portfolioCash;
	}

	return groupUser;
};
