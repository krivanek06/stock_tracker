import * as api from 'stock-tracker-common-interfaces';
import { getCurrentIOSDate } from '../st-shared/st-shared.functions';
import { convertSTUserPublicDataToSTUserIndentification } from '../st-user/utils/user.convertor';

export const initGroupFromInput = (groupId: string, groupInput: api.STGroupAllDataInput): api.STGroupAllData => {
	const newGroup: api.STGroupAllData = {
		...createEmptySTGroupAllData(groupId),
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

export const createEmptySTGroupAllData = (groupId: string): api.STGroupAllData => {
	const now = getCurrentIOSDate();
	const group: api.STGroupAllData = {
		id: groupId,
		rank: {
			highestPortfolio: null,
		},
		portfolio: {
			lastPortfolioBalance: 0,
			portfolioChange: {
				from_beginning_change: null,
				day_1_change: null,
				week_1_change: null,
				week_2_change: null,
				week_3_change: null,
				month_1_change: null,
				month_2_change: null,
				month_3_change: null,
				month_6_change: null,
				year_1_change: null,
			},
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
			lastPortfolioIncreaseNumber: 0,
			lastPortfolioIncreasePrct: 0,
			portfolioCash: 0,
			transactionFees: 0,
		},
		startedPortfolio: {
			lastPortfolioBalance: 0,
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
		description: null,
		watchedByUsers: 0,
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
		topMembers: [],
	};
	return group;
};

export const createEmptySTGroupHistoricalData = (groupId: string): api.STGroupHistoricalData => {
	return {
		id: groupId,
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
			...userPublic.portfolio,
		},
		startedPortfolio: {
			lastPortfolioBalance: userPublic.portfolio.lastPortfolioBalance,
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

export const increaseGroupPortfolio = (group: api.STGroupAllData, addedPortfolio: api.STPortfolioWrapper) => {
	group.startedPortfolio.portfolioCash += addedPortfolio.lastPortfolioSnapshot?.portfolioCash ?? 0;
	group.startedPortfolio.portfolioInvested += addedPortfolio.lastPortfolioSnapshot?.portfolioInvested ?? 0;
	group.startedPortfolio.lastPortfolioBalance += addedPortfolio.lastPortfolioBalance ?? 0;
	group.startedPortfolio.numberOfExecutedSellTransactions += addedPortfolio.numberOfExecutedSellTransactions;
	group.startedPortfolio.numberOfExecutedBuyTransactions += addedPortfolio.numberOfExecutedBuyTransactions;
	group.startedPortfolio.transactionFees += addedPortfolio.transactionFees;

	group.portfolio.lastPortfolioSnapshot.portfolioCash += addedPortfolio.lastPortfolioSnapshot.portfolioCash;
	group.portfolio.lastPortfolioSnapshot.portfolioInvested += addedPortfolio.lastPortfolioSnapshot.portfolioInvested;
	group.portfolio.lastPortfolioBalance += addedPortfolio.lastPortfolioBalance;
	group.portfolio.numberOfExecutedSellTransactions += addedPortfolio.numberOfExecutedSellTransactions;
	group.portfolio.numberOfExecutedBuyTransactions += addedPortfolio.numberOfExecutedBuyTransactions;
	group.portfolio.transactionFees += addedPortfolio.transactionFees;
	group.numberOfMembers += 1;
};

export const decreaseGroupPortfolio = (group: api.STGroupAllData, addedPortfolio: api.STPortfolioWrapper) => {
	group.startedPortfolio.portfolioCash -= addedPortfolio.lastPortfolioSnapshot?.portfolioCash ?? 0;
	group.startedPortfolio.portfolioInvested -= addedPortfolio.lastPortfolioSnapshot?.portfolioInvested ?? 0;
	group.startedPortfolio.lastPortfolioBalance -= addedPortfolio.lastPortfolioBalance ?? 0;
	group.startedPortfolio.numberOfExecutedSellTransactions -= addedPortfolio.numberOfExecutedSellTransactions;
	group.startedPortfolio.numberOfExecutedBuyTransactions -= addedPortfolio.numberOfExecutedBuyTransactions;
	group.startedPortfolio.transactionFees -= addedPortfolio.transactionFees;

	group.portfolio.lastPortfolioSnapshot.portfolioCash -= addedPortfolio.lastPortfolioSnapshot.portfolioCash;
	group.portfolio.lastPortfolioSnapshot.portfolioInvested -= addedPortfolio.lastPortfolioSnapshot.portfolioInvested;
	group.portfolio.lastPortfolioBalance -= addedPortfolio.lastPortfolioBalance;
	group.portfolio.numberOfExecutedSellTransactions -= addedPortfolio.numberOfExecutedSellTransactions;
	group.portfolio.numberOfExecutedBuyTransactions -= addedPortfolio.numberOfExecutedBuyTransactions;
	group.portfolio.transactionFees -= addedPortfolio.transactionFees;
	group.numberOfMembers -= 1;
};
