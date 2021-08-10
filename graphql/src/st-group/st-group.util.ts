import * as api from 'stock-tracker-common-interfaces';
import { getCurrentIOSDate } from '../st-shared/st-shared.functions';
import { convertSTUserPublicDataToSTUserIndentification } from '../user/user.convertor';

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
			startingPortfolioSnapshot: {
				portfolioCash: 0,
				portfolioInvested: 0,
				date: getCurrentIOSDate(),
			},
			lastPortfolioSnapshot: {
				portfolioCash: 0,
				portfolioInvested: 0,
				date: getCurrentIOSDate(),
			},
			lastTransactionSnapshot: {
				transactionsBuy: 0,
				transactionsSell: 0,
				date: getCurrentIOSDate(),
			},
			numberOfExecutedTransactions: 0,
			numberOfExecutedBuyTransactions: 0,
			numberOfExecutedSellTransactions: 0,
			lastPortfolioIncreaseNumber: null,
			lastPortfolioIncreasePrct: null,
			portfolioCash: 0,
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
			startingPortfolioSnapshot: {
				portfolioCash: userPublic.portfolio.lastPortfolioSnapshot.portfolioCash,
				portfolioInvested: userPublic.portfolio.lastPortfolioSnapshot.portfolioInvested,
				date: getCurrentIOSDate(),
			},
			lastPortfolioSnapshot: {
				portfolioCash: userPublic.portfolio.lastPortfolioSnapshot.portfolioCash,
				portfolioInvested: userPublic.portfolio.lastPortfolioSnapshot.portfolioInvested,
				date: getCurrentIOSDate(),
			},
			lastTransactionSnapshot: {
				transactionsBuy: userPublic.portfolio.lastTransactionSnapshot.transactionsBuy,
				transactionsSell: userPublic.portfolio.lastTransactionSnapshot.transactionsSell,
				date: getCurrentIOSDate(),
			},
			numberOfExecutedTransactions: userPublic.portfolio.numberOfExecutedTransactions,
			numberOfExecutedBuyTransactions: userPublic.portfolio.numberOfExecutedBuyTransactions,
			numberOfExecutedSellTransactions: userPublic.portfolio.numberOfExecutedSellTransactions,
			lastPortfolioIncreaseNumber: userPublic.portfolio.lastPortfolioIncreaseNumber,
			lastPortfolioIncreasePrct: userPublic.portfolio.lastPortfolioIncreasePrct,
			portfolioCash: userPublic.portfolio.portfolioCash,
		},

		previousPosition: null,
		currentPosition: null,
		sinceDate: getCurrentIOSDate(),
	};
	return groupUser;
};
