import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { getCurrentIOSDate } from '../../st-shared/st-shared.functions';
import { sumOfHoldings } from '../../st-transaction/st-transaction-util';
import { queryUserPublicDataById } from '../user.query';
import { createNewPortfolio } from '../utils/user.creator';

export const resetUserAccount = async (userId: string): Promise<api.STUserResetedAccount> => {
	try {
		const user = (await queryUserPublicDataById(userId)) as api.STUserPublicData;
		const newPortfolioWrapper = createNewPortfolio();
		const reset: api.STUserResetedAccount = {
			date: getCurrentIOSDate(),
			portfolioTotal: user.portfolio.portfolioCash + sumOfHoldings(user.holdings),
		};

		await resetUserMainData(user, newPortfolioWrapper);
		await resetUserHistoricalData(user, reset);
		await resetUserInGroups(user, newPortfolioWrapper);

		return reset;
	} catch (error) {
		throw new ApolloError(error);
	}
};

const resetUserHistoricalData = async ({ id }: api.STUserPublicData, reset: api.STUserResetedAccount): Promise<void> => {
	// save reseted account
	admin
		.firestore()
		.collection(api.ST_USER_COLLECTION_USER)
		.doc(id)
		.collection(api.ST_USER_COLLECTION_MORE_INFORMATION)
		.doc(api.ST_USER_DOCUMENT_HISTORICAL_DATA)
		.set(
			{
				resetedAccount: admin.firestore.FieldValue.arrayUnion(reset),
				portfolioSnapshots: [],
				transactionSnapshots: [],
			},
			{ merge: true }
		);
};

const resetUserMainData = async ({ id }: api.STUserPublicData, newPortfolioWrapper: api.STPortfolioWrapper): Promise<void> => {
	// save portfolio
	admin
		.firestore()
		.collection(api.ST_USER_COLLECTION_USER)
		.doc(id)
		.set(
			{
				portfolio: {
					...newPortfolioWrapper,
				},
				holdings: [],
				topTransactions: [],
				transactionsSnippets: [],
			},
			{ merge: true }
		);
};

/* 
	Reset only for those where user is member
	- reset groups starting portfolio
	- reset group portfolio
	- reset lastTransactionSnapshot for user
	- reset (top) transactions which made user
	- reset number of executed transactions
*/
const resetUserInGroups = async (oldUserData: api.STUserPublicData, newPortfolioWrapper: api.STPortfolioWrapper) => {
	for await (const groupId of oldUserData.groups.groupMember) {
		const groupRef = admin.firestore().collection(api.ST_GROUP_COLLECTION_GROUPS).doc(groupId);
		const groupMemberRef = groupRef.collection(api.ST_GROUP_COLLECTION_MORE_INFORMATION).doc(api.ST_GROUP_COLLECTION_MEMBERS);

		const group = (await groupRef.get()).data() as api.STGroupAllData;
		const groupMembers = (await groupMemberRef.get()).data() as api.STGroupMembersDocument;
		const groupMember = groupMembers.members.find((m) => m.id === oldUserData.id);

		if (groupMember) {
			// reset started portfolio data for groups
			group.startedPortfolio.numberOfExecutedBuyTransactions -= groupMember.startedPortfolio.numberOfExecutedBuyTransactions;
			group.startedPortfolio.numberOfExecutedSellTransactions -= groupMember.startedPortfolio.numberOfExecutedSellTransactions;
			group.startedPortfolio.portfolioCash -= groupMember.startedPortfolio.portfolioCash;
			group.startedPortfolio.portfolioInvested -= groupMember.startedPortfolio.portfolioInvested;
			group.startedPortfolio.transactionFees -= groupMember.startedPortfolio.transactionFees;

			// add cash of how much user starts
			group.startedPortfolio.portfolioCash += newPortfolioWrapper.portfolioCash;

			// reset portfolio for group user
			groupMember.portfolio = newPortfolioWrapper;
			groupMember.startedPortfolio.numberOfExecutedBuyTransactions = 0;
			groupMember.startedPortfolio.numberOfExecutedSellTransactions = 0;
			groupMember.startedPortfolio.portfolioCash = newPortfolioWrapper.portfolioCash;
			groupMember.startedPortfolio.portfolioInvested = 0;
			groupMember.startedPortfolio.transactionFees = 0;
		}

		// remove groupMembers stats from groups
		group.portfolio.numberOfExecutedBuyTransactions -= oldUserData.portfolio.numberOfExecutedBuyTransactions;
		group.portfolio.numberOfExecutedSellTransactions -= oldUserData.portfolio.numberOfExecutedSellTransactions;
		group.portfolio.portfolioCash -= oldUserData.portfolio.lastPortfolioSnapshot.portfolioCash;
		group.portfolio.transactionFees -= oldUserData.portfolio.transactionFees;
		group.portfolio.lastPortfolioSnapshot.portfolioInvested -= oldUserData.portfolio.lastPortfolioSnapshot.portfolioInvested;
		group.portfolio.lastPortfolioSnapshot.portfolioCash -= oldUserData.portfolio.lastPortfolioSnapshot.portfolioCash;
		group.topTransactions = group.topTransactions.filter((t) => t.user.id !== oldUserData.id);
		group.lastTransactions = group.lastTransactions.filter((t) => t.user.id !== oldUserData.id);

		// add group member cash for groups stats
		group.portfolio.lastPortfolioSnapshot.portfolioCash += newPortfolioWrapper.portfolioCash;

		// save main group data
		groupRef.set(
			{
				...group,
			},
			{ merge: true }
		);

		// save group members data
		groupMemberRef.set(
			{
				...groupMembers,
			},
			{ merge: true }
		);
	}
};
