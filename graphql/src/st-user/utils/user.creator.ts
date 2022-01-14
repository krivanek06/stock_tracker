import * as api from 'stock-tracker-common-interfaces';
import { getCurrentIOSDate } from '../../st-shared/st-shared.functions';

const defaultImage =
	'https://firebasestorage.googleapis.com/v0/b/stocktrackertest-e51fc.appspot.com/o/default%2Fdefault_user.png?alt=media&token=d1c21428-de0c-4dde-ad29-8d646616aa11';

export const createSTUserPrivateData = (user: api.STUserAuthenticationInput): api.STUserPrivateData => {
	const stUserPrivateData: api.STUserPrivateData = {
		displayName: user.displayName,
		email: user.email,
		providerId: user.providerId,
		finnhubKey: null,
		tradingEnabledDate: null,
		geographic: null,
		id: user.uid,
		nicknameLastChange: null,
		roles: [],
		status: api.USER_STATUS.PENDING,
	};
	return stUserPrivateData;
};

export const createSTUserPublicData = (user: api.STUserAuthenticationInput): api.STUserPublicData => {
	const stUserPublicData: api.STUserPublicData = {
		nickName: user.email.split('@')[0],
		id: user.uid,
		activity: api.USER_ACTIVITY.SIGNED_IN,
		locale: user.locale || null,
		photoURL: user.photoURL || defaultImage,
		accountCreatedDate: getCurrentIOSDate(),
		lastSignInDate: getCurrentIOSDate(),
		transactionsSnippets: [],
		portfolioRisk: null,
		portfolio: {
			...createNewPortfolio(0),
		},
		groups: {
			groupInvitationReceived: [],
			groupInvitationSent: [],
			groupMember: [],
			groupOwner: [],
			groupWatched: [],
		},
		topTransactions: [],
		holdings: [],
		rank: {
			highestPortfolio: null,
		},
	};
	return stUserPublicData;
};

export const createSTUserHistoricalData = (userId: string): api.STUserHistoricalData => {
	const historicalData: api.STUserHistoricalData = {
		id: userId,
		portfolioSnapshots: [],
		transactionSnapshots: [],
		resetedAccount: [],
		bestAchievedRanks: [],
		userLogs: [],
	};
	return historicalData;
};

export const createNewPortfolio = (cashAmount = 100000): api.STPortfolioWrapper => {
	return {
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
			portfolioCash: 100000,
			portfolioInvested: 0,
			date: getCurrentIOSDate(),
		},
		lastTransactionSnapshot: {
			transactionsBuy: 0,
			transactionsSell: 0,
			transactionFees: 0,
			date: getCurrentIOSDate(),
		},
		lastPortfolioIncreaseNumber: 0,
		lastPortfolioIncreasePrct: 0,
		numberOfExecutedBuyTransactions: 0,
		numberOfExecutedSellTransactions: 0,
		portfolioCash: 100000,
		transactionFees: 0,
	};
};
