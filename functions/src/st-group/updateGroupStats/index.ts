import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { uniqBy as _uniqBy } from 'lodash';
import * as moment from 'moment';
import * as api from 'stock-tracker-common-interfaces';
import {
	closeOpenButEndedGroups,
	getGroupMemberCollection,
	getGroupsHistoricalData,
	getOpenGroups,
	getUserPublicDataByUserId,
	updateGroupHistoricalDataCollection,
	updateGroupMembersCollection,
	updateGroupsCollection,
} from '../../api';
import { calculatePortfolioChange, convertSTUserPublicDataToSTUserGroup } from '../../util';
/* 
    For each existing group update:
        - portfolio
		- close if endDate is in past
        - top transactions > max 30
        - last transaction > max 30
		- portfolioChange
        more_information.members
            - members portfolio
            - member current & previous positions based on portfolio balance
            - group holdings - what stock and how many users hold it
        more_information.historical_data
            - portfolio for each member
            - transaction snapshot

*/
// functions.https.onRequest(async () => {
// functions.pubsub.topic('updateGroupStats').onPublish(async () => {
export const updateGroupStats = functions.pubsub.topic('updateGroupStats').onPublish(async () => {
	const startTime = new Date().getTime();
	console.log(`Started updating at ${admin.firestore.Timestamp.now().toDate()}`);

	// get every groups
	const groupAllDataArray = await getOpenGroups(true);
	for await (const groupAllData of groupAllDataArray) {
		try {
			console.log(`Loading data for group ${groupAllData.name} [${groupAllData.id}]`);

			// load data for group
			const groupMembersDoc = await getGroupMemberCollection(groupAllData.id);
			const groupMembersPublicData = await loadUserPublicDataForGroupDoc(groupMembersDoc.members);
			const groupInvitationSentPublicData = await loadUserPublicDataForGroupDoc(groupMembersDoc.invitationSent);
			const groupInvitationReceivedPublicData = await loadUserPublicDataForGroupDoc(groupMembersDoc.invitationReceived);
			const groupHistoricalData = await getGroupsHistoricalData(groupAllData);
			const groupOwner = await getUserPublicDataByUserId(groupAllData.owner.id);

			// calculate current data
			console.log('modifying data');
			const currentGroupHoldings = createGroupHoldings(groupMembersPublicData);
			console.log(`create group holdings for [${groupMembersPublicData.length}/${groupAllData.numberOfMembers}]`);

			const currentGroupPortfolio = createGroupPortfolioSnapshot(groupMembersPublicData, groupAllData.portfolio.lastPortfolioSnapshot);
			const portfolioChange = calculatePortfolioChange(groupHistoricalData.portfolioSnapshots);
			const groupMemberWithUpdatedPortfolio = constructGroupMembers(groupMembersDoc.members, groupMembersPublicData);
			const invitationSent = groupInvitationSentPublicData.map((u) => convertSTUserPublicDataToSTUserGroup(u));
			const invitationReceived = groupInvitationReceivedPublicData.map((u) => convertSTUserPublicDataToSTUserGroup(u));
			const [uniqueLastTransactions, topTransactionsUnique] = calculateGroupLastAndTopTransactions(groupAllData, groupMembersPublicData);
			const historicalDataUpdate = constructGroupHistoricalDataUpdate(currentGroupPortfolio, groupHistoricalData);

			// update data in firestore
			console.log('saving data');

			// update group collection
			await updateGroupsCollection(groupAllData, {
				lastTransactions: uniqueLastTransactions,
				topTransactions: topTransactionsUnique,
				portfolio: {
					...currentGroupPortfolio,
					portfolioChange,
				},
				lastUpdateDate: admin.firestore.Timestamp.now().toDate().toISOString(),
				owner: {
					portfolio: groupOwner.portfolio,
				} as api.STGroupUser,
			});

			// update historical data
			await updateGroupHistoricalDataCollection(groupAllData, historicalDataUpdate);

			// update members data
			await updateGroupMembersCollection(groupAllData, {
				holdings: currentGroupHoldings,
				members: groupMemberWithUpdatedPortfolio,
				invitationSent,
				invitationReceived,
			});

			console.log(`Ended updating group: ${groupAllData.name}`);
			console.log('========================');
		} catch (error) {
			console.log(`Error for group: ${groupAllData.id}, error:`, error);
			console.log('========================');
		}
	}

	await closeOpenButEndedGroups();

	console.log(`Completed updating at ${admin.firestore.Timestamp.now().toDate()}, took ${(new Date().getTime() - startTime) / 1000} sec.`);
});

/* 
	from each user create portfolio snapshot for group
*/
const createGroupPortfolioSnapshot = (
	usersPublicData: api.STUserPublicData[],
	groupPreviousLastPortfolioSnapshot: api.STPortfolioSnapshot
): api.STPortfolioWrapper => {
	// accumulate members data into one object
	const portfolioWrapperAccumulation: api.STPortfolioWrapper = usersPublicData
		.map((m) => m.portfolio)
		.reduce(
			(acc, cur) => {
				return {
					...acc,
					portfolioCash: acc.portfolioCash + cur.portfolioCash,
					numberOfExecutedBuyTransactions: acc.numberOfExecutedBuyTransactions + cur.numberOfExecutedBuyTransactions,
					numberOfExecutedSellTransactions: acc.numberOfExecutedSellTransactions + cur.numberOfExecutedSellTransactions,
					lastPortfolioBalance: acc.lastPortfolioBalance + cur.lastPortfolioBalance,
					lastPortfolioSnapshot: {
						portfolioCash: acc.portfolioCash + cur.portfolioCash,
						portfolioInvested: acc.lastPortfolioSnapshot.portfolioInvested + cur.lastPortfolioSnapshot.portfolioInvested,
						date: admin.firestore.Timestamp.now().toDate().toISOString(),
					},
					lastTransactionSnapshot: {
						transactionsBuy:
							acc.lastTransactionSnapshot.transactionsBuy +
							(moment(cur.lastTransactionSnapshot.date).isSame(new Date(), 'day') ? cur.lastTransactionSnapshot.transactionsBuy : 0),
						transactionsSell:
							acc.lastTransactionSnapshot.transactionsSell +
							(moment(cur.lastTransactionSnapshot.date).isSame(new Date(), 'day') ? cur.lastTransactionSnapshot.transactionsSell : 0),
						transactionFees:
							acc.lastTransactionSnapshot.transactionFees +
							(moment(cur.lastTransactionSnapshot.date).isSame(new Date(), 'day') ? cur.lastTransactionSnapshot.transactionFees : 0),
						date: admin.firestore.Timestamp.now().toDate().toISOString(),
					},
					transactionFees: acc.transactionFees + cur.transactionFees,
				} as api.STPortfolioWrapper;
			},
			{
				portfolioCash: 0,
				lastPortfolioSnapshot: {
					portfolioCash: 0,
					portfolioInvested: 0,
					date: admin.firestore.Timestamp.now().toDate().toISOString(),
				},
				lastPortfolioIncreaseNumber: 0,
				lastPortfolioIncreasePrct: 0,
				numberOfExecutedBuyTransactions: 0,
				numberOfExecutedSellTransactions: 0,
				transactionFees: 0,
				lastPortfolioBalance: 0,
				lastTransactionSnapshot: {
					transactionsBuy: 0,
					transactionsSell: 0,
					transactionFees: 0,
					date: admin.firestore.Timestamp.now().toDate().toISOString(),
				},
			} as api.STPortfolioWrapper
		);

	// calculate 'lastPortfolioIncreaseNumber' & 'lastPortfolioIncreasePrct'
	const currentBalance =
		portfolioWrapperAccumulation.lastPortfolioSnapshot.portfolioCash + portfolioWrapperAccumulation.lastPortfolioSnapshot.portfolioInvested;
	const previousBalance = groupPreviousLastPortfolioSnapshot.portfolioCash + groupPreviousLastPortfolioSnapshot.portfolioInvested;

	if (previousBalance > 0) {
		portfolioWrapperAccumulation.lastPortfolioIncreaseNumber = Number((currentBalance - previousBalance).toFixed(2));
		portfolioWrapperAccumulation.lastPortfolioIncreasePrct = Number(((currentBalance - previousBalance) / previousBalance).toFixed(4));
	} else {
		// at first snapshot 'previousBalance' is 0
		portfolioWrapperAccumulation.lastPortfolioIncreaseNumber = 0;
		portfolioWrapperAccumulation.lastPortfolioIncreasePrct = 0;
	}

	return portfolioWrapperAccumulation;
};

const createGroupHoldings = (usersPublicData: api.STUserPublicData[]): api.STGroupHoldings[] => {
	/* 
		example:
		{
			BABA: {
				numberOfUsers: 1,
				holding: { symbol: 'BABA', units: 4, breakEvenPrice: 188.62 }
			},
			AAPL: {
				numberOfUsers: 2,
				holding: { symbol: 'AAPL', units: 15, breakEvenPrice: 139.78 }
			},
		}
	*/
	const symbolsContainer = usersPublicData
		.map((u) => u.holdings)
		.flatMap((h) => h)
		.reduce((acc: any, cur) => {
			const groupHolding = {
				numberOfUsers: (acc[cur.symbol]?.numberOfUsers ?? 0) + 1,
				holding: {
					symbol: cur.symbol,
					units: (acc[cur.symbol]?.holding?.units ?? 0) + cur.units,
					breakEvenPrice: acc[cur.symbol]?.holding?.breakEvenPrice
						? (acc[cur.symbol]?.holding?.breakEvenPrice + cur.breakEvenPrice) / 2
						: cur.breakEvenPrice,
				},
			} as api.STGroupHoldings;

			acc[cur.symbol] = groupHolding;
			return acc;
		}, {});

	// return only values
	return Object.values(symbolsContainer);
};

// ---------------------------------------
const calculateGroupLastAndTopTransactions = (
	oldGroupAllData: api.STGroupAllData,
	groupMembers: api.STUserPublicData[]
): [api.STTransaction[], api.STTransaction[]] => {
	// ordered transaction by date desc
	const lastTransactions = groupMembers
		.flatMap((m) => m.transactionsSnippets)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	const uniqueLastTransactions = _uniqBy([...lastTransactions, ...oldGroupAllData.lastTransactions], 'transactionId').slice(0, 30);

	// sorted by Math.abs(b.returnChange)
	const topTransactions = [...oldGroupAllData.topTransactions, ...lastTransactions]
		.filter((t) => t.returnChange)
		.sort((a, b) => Math.abs(b.returnChange ?? 0) - Math.abs(a.returnChange ?? 0));

	// sorted by first positive then negative
	const topTransactionsUnique = _uniqBy(topTransactions, 'transactionId')
		.slice(0, 30)
		.sort((a, b) => (b.returnChange ?? 0) - (a.returnChange ?? 0));

	return [uniqueLastTransactions, topTransactionsUnique];
};

const constructGroupHistoricalDataUpdate = (
	groupCurrentPortfolio: api.STPortfolioWrapper,
	historical: api.STGroupHistoricalData
): Partial<api.STGroupHistoricalData> => {
	const data: Partial<api.STGroupHistoricalData> = {
		portfolioSnapshots: [...historical.portfolioSnapshots.slice(-120), groupCurrentPortfolio.lastPortfolioSnapshot],
		transactionSnapshots: [...historical.transactionSnapshots.slice(-120), groupCurrentPortfolio.lastTransactionSnapshot],
	};

	return data;
};

/* 
	Update holdings 
	Update member portfolio and sort then
*/
const constructGroupMembers = (groupMember: api.STGroupUser[], groupMembersCurrentData: api.STUserPublicData[]): api.STGroupUser[] => {
	// update member portfolio & currect / previous position
	const groupMemberWithUpdatedPortfolio = groupMember
		.map((member) => {
			// update portfolio for each member
			const updatedPortfolio = groupMembersCurrentData.find((m) => m.id === member.id)?.portfolio;
			return { ...member, portfolio: updatedPortfolio ?? member.portfolio } as api.STGroupUser;
		})
		.sort((a, b) => {
			// sort by higher portfolio balance
			const bBalance = b.portfolio.lastPortfolioSnapshot.portfolioInvested + b.portfolio.lastPortfolioSnapshot.portfolioCash;
			const aBalance = a.portfolio.lastPortfolioSnapshot.portfolioInvested + a.portfolio.lastPortfolioSnapshot.portfolioCash;
			return bBalance - aBalance;
		})
		.map((member, index) => {
			// update current and previous position for each member
			return { ...member, previousPosition: member.currentPosition, currentPosition: index + 1 } as api.STGroupUser;
		});

	return groupMemberWithUpdatedPortfolio;
};

// load api
const loadUserPublicDataForGroupDoc = async (usersArray: api.STGroupUser[]): Promise<api.STUserPublicData[]> => {
	const userIdsRefs = usersArray.map((m) => m.id).map((id) => admin.firestore().collection(api.ST_USER_COLLECTION_USER).doc(id));
	if (userIdsRefs.length === 0) {
		return [];
	}

	const lastSignInDateBreak = moment().startOf('day').subtract(14, 'days');
	const unsavedUserPublicDataDocs = await admin.firestore().getAll(...userIdsRefs);
	return unsavedUserPublicDataDocs
		.map((userDoc) => {
			return { ...userDoc.data(), id: userDoc.id } as api.STUserPublicData;
		})
		.filter((user) => user.lastSignInDate > lastSignInDateBreak.toISOString());
};
