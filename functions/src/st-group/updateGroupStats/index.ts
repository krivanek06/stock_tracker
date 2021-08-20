import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { uniqBy as _uniqBy } from 'lodash';
import * as api from 'stock-tracker-common-interfaces';

/* 
    For each existing group update:
        - portfolio
        - top transactions > max 30
        - last transaction > max 30
        more_information.members
            - members portfolio
            - member current & previous positions based on potfolio balance
            - group holdings - what stock and how many users hold it
        more_information.historical_data
            - portfolio for each member
            - transaction snapshot

*/
// functions.https.onRequest(async () => {
export const updateGroupStats = functions.pubsub.topic('updateGroupStats').onPublish(async () => {
	console.log(`Started updating at ${admin.firestore.Timestamp.now().toDate()}`);

	// get every groups
	const groupDocs = await admin.firestore().collection(api.ST_GROUP_COLLECTION_GROUPS).get();
	for await (const groupDoc of groupDocs.docs) {
		console.log(`Start updating group: ${groupDoc.id}`);

		// load data for group
		const groupAllData = groupDoc.data() as api.STGroupAllData;
		const groupMembersDoc = await loadGroupMembersDoc(groupDoc.id);
		const groupMembersPublicData = await loadUserPublicDataForGroupDoc(groupMembersDoc);
		console.log('Loaded group data');

		// calculate current data
		const currentGroupHoldings = createGroupHoldings(groupMembersPublicData);
		console.log('created group holdings');
		const currentGroupPortfolio = createGroupPortfolioSnapshot(groupMembersPublicData, groupMembersDoc, groupAllData.portfolio.lastPortfolioSnapshot);
		console.log('created group portfolio');

		// update data in firestore
		await updateGroupDocument(groupDoc.id, groupAllData, currentGroupPortfolio, groupMembersPublicData);
		await updategroupMembersDocument(groupDoc.id, currentGroupHoldings, groupMembersDoc.members, groupMembersPublicData);
		await updateGroupHistoricalDataDocument(groupDoc.id, currentGroupPortfolio);
		console.log(`Ended updating group: ${groupDoc.id}`);
		console.log('========================');
	}

	console.log(`Completed updating at ${admin.firestore.Timestamp.now().toDate()}`);
});

/* 
	from each user create portfolio snapshot for group
*/
const createGroupPortfolioSnapshot = (
	usersPublicData: api.STUserPublicData[],
	groupMemberDoc: api.STGroupMembersDocument,
	groupPreviousLastPortfolioSnapshot: api.STPortfolioSnapshot
): api.STPortfolioWrapper => {
	const portfolioWrapperAccumulation: api.STPortfolioWrapper = usersPublicData
		.map((m) => m.portfolio)
		.reduce(
			(acc, cur) => {
				return {
					...acc,
					portfolioCash: acc.portfolioCash + cur.portfolioCash,
					numberOfExecutedTransactions: acc.numberOfExecutedTransactions + cur.numberOfExecutedTransactions,
					numberOfExecutedBuyTransactions: acc.numberOfExecutedBuyTransactions + cur.numberOfExecutedBuyTransactions,
					numberOfExecutedSellTransactions: acc.numberOfExecutedSellTransactions + cur.numberOfExecutedSellTransactions,
					lastPortfolioSnapshot: {
						portfolioCash: acc.portfolioCash + cur.portfolioCash,
						portfolioInvested: acc.lastPortfolioSnapshot.portfolioInvested + cur.lastPortfolioSnapshot.portfolioInvested,
						date: admin.firestore.Timestamp.now().toDate().toISOString(),
					},
					lastTransactionSnapshot: {
						transactionsBuy: acc.lastTransactionSnapshot.transactionsBuy + cur.lastTransactionSnapshot.transactionsBuy,
						transactionsSell: acc.lastTransactionSnapshot.transactionsSell + cur.lastTransactionSnapshot.transactionsSell,
						date: admin.firestore.Timestamp.now().toDate().toISOString(),
					},
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
				numberOfExecutedTransactions: 0,
				numberOfExecutedBuyTransactions: 0,
				numberOfExecutedSellTransactions: 0,
				lastTransactionSnapshot: {
					transactionsBuy: 0,
					transactionsSell: 0,
					date: admin.firestore.Timestamp.now().toDate().toISOString(),
				},
			} as api.STPortfolioWrapper
		);

	/* 
		for > numberOfExecutedTransactions, numberOfExecutedBuyTransactions, numberOfExecutedSellTransactions
		we must subscrat the starting snapshot when users joined group
	*/
	const startedPortfolioSnapshotAccumutaiton: api.STPortfolioSnapshotStarted = groupMemberDoc.members
		.map((m) => m.startedPortfolio)
		.reduce(
			(acc, cur) => {
				return {
					...acc,
					numberOfExecutedTransactions: acc.numberOfExecutedTransactions + cur.numberOfExecutedTransactions,
					numberOfExecutedBuyTransactions: acc.numberOfExecutedBuyTransactions + cur.numberOfExecutedBuyTransactions,
					numberOfExecutedSellTransactions: acc.numberOfExecutedSellTransactions + cur.numberOfExecutedSellTransactions,
				} as api.STPortfolioSnapshotStarted;
			},
			{
				date: admin.firestore.Timestamp.now().toDate().toISOString(),
				numberOfExecutedTransactions: 0,
				numberOfExecutedBuyTransactions: 0,
				numberOfExecutedSellTransactions: 0,
				portfolioCash: 0,
				portfolioInvested: 0,
			}
		);

	// remove starting > numberOfExecutedTransactions, numberOfExecutedBuyTransactions, numberOfExecutedSellTransactions from current values
	portfolioWrapperAccumulation.numberOfExecutedTransactions -= startedPortfolioSnapshotAccumutaiton.numberOfExecutedTransactions;
	portfolioWrapperAccumulation.numberOfExecutedBuyTransactions -= startedPortfolioSnapshotAccumutaiton.numberOfExecutedBuyTransactions;
	portfolioWrapperAccumulation.numberOfExecutedSellTransactions -= startedPortfolioSnapshotAccumutaiton.numberOfExecutedSellTransactions;

	// calculate 'lastPortfolioIncreaseNumber' & 'lastPortfolioIncreasePrct'
	const currentBalance =
		portfolioWrapperAccumulation.lastPortfolioSnapshot.portfolioCash + portfolioWrapperAccumulation.lastPortfolioSnapshot.portfolioInvested;
	const previousBalance = groupPreviousLastPortfolioSnapshot.portfolioCash + groupPreviousLastPortfolioSnapshot.portfolioInvested;

	if (previousBalance > 0) {
		portfolioWrapperAccumulation.lastPortfolioIncreaseNumber = Number((currentBalance - previousBalance).toFixed(2));
		portfolioWrapperAccumulation.lastPortfolioIncreasePrct = Number(((currentBalance - previousBalance) / previousBalance).toFixed(4));
	} else {
		// at first snapshot 'previousBalance' is 0
		portfolioWrapperAccumulation.lastPortfolioIncreaseNumber = Number((currentBalance - previousBalance).toFixed(2));
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
/* 
	Update last transactions
	Update top transaction
	Update group portfolio
	Update owner portfolio
*/
const updateGroupDocument = async (
	groupId: string,
	oldGroupAllData: api.STGroupAllData,
	currentGroupPortfolio: api.STPortfolioWrapper,
	groupMembers: api.STUserPublicData[]
): Promise<void> => {
	// load owner - needed to update portfolio
	const ownerDoc = await admin.firestore().collection(api.ST_USER_COLLECTION_USER).doc(oldGroupAllData.owner.id).get();
	const ownerPublicData = (await ownerDoc.data()) as api.STUserPublicData;

	// ordered transaction by date desc
	const lastTransactions = groupMembers
		.flatMap((m) => m.transactionsSnippets)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	const topTransactions = [...oldGroupAllData.topTransactions, ...lastTransactions]
		.filter((t) => t.returnChange)
		.sort((a, b) => (b.returnChange ?? 0) - (a.returnChange ?? 0));

	await admin
		.firestore()
		.collection(api.ST_GROUP_COLLECTION_GROUPS)
		.doc(groupId)
		.set(
			{
				lastTransactions: _uniqBy([...lastTransactions, ...oldGroupAllData.lastTransactions], 'transactionId').slice(0, 30),
				topTransactions: _uniqBy(topTransactions, 'transactionId').slice(0, 30),
				portfolio: currentGroupPortfolio,
				owner: {
					portfolio: ownerPublicData.portfolio,
				},
			},
			{ merge: true }
		);
};

/* 
	Update portfolio snapshot
	Update transaction snapshot
*/
const updateGroupHistoricalDataDocument = async (groupId: string, grouCurrentPortfolio: api.STPortfolioWrapper) => {
	await admin
		.firestore()
		.collection(api.ST_GROUP_COLLECTION_GROUPS)
		.doc(groupId)
		.collection(api.ST_GROUP_COLLECTION_MORE_INFORMATION)
		.doc(api.ST_GROUP_COLLECTION_HISTORICAL_DATA)
		.set(
			{
				portfolioSnapshots: admin.firestore.FieldValue.arrayUnion(grouCurrentPortfolio.lastPortfolioSnapshot),
				transactionSnapshots: admin.firestore.FieldValue.arrayUnion(grouCurrentPortfolio.lastTransactionSnapshot),
			},
			{ merge: true }
		);
};

/* 
	Update holdings 
	Update member portfolio and sort then
*/
const updategroupMembersDocument = async (
	groupId: string,
	groupHoldings: api.STGroupHoldings[],
	groupMember: api.STGroupUser[],
	groupMembersCurrentData: api.STUserPublicData[]
) => {
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

	await admin
		.firestore()
		.collection(api.ST_GROUP_COLLECTION_GROUPS)
		.doc(groupId)
		.collection(api.ST_GROUP_COLLECTION_MORE_INFORMATION)
		.doc(api.ST_GROUP_COLLECTION_MEMBERS)
		.set(
			{
				holdings: groupHoldings,
				members: groupMemberWithUpdatedPortfolio,
			},
			{ merge: true }
		);
};

// ---------------------------------------

// get group member doc from firestore
const loadGroupMembersDoc = async (groupId: string): Promise<api.STGroupMembersDocument> => {
	const groupMembersDoc = await admin
		.firestore()
		.collection(api.ST_GROUP_COLLECTION_GROUPS)
		.doc(groupId)
		.collection(api.ST_GROUP_COLLECTION_MORE_INFORMATION)
		.doc(api.ST_GROUP_COLLECTION_MEMBERS)
		.get();
	return groupMembersDoc.data() as api.STGroupMembersDocument;
};

// load api
const loadUserPublicDataForGroupDoc = async (groupMemberDoc: api.STGroupMembersDocument): Promise<api.STUserPublicData[]> => {
	const userIdsRefs = groupMemberDoc.members.map((m) => m.id).map((id) => admin.firestore().collection(api.ST_USER_COLLECTION_USER).doc(id));
	const unsavedUserPublicDataDocs = await admin.firestore().getAll(...userIdsRefs);
	return unsavedUserPublicDataDocs.map((userDoc) => {
		return { ...userDoc.data(), id: userDoc.id } as api.STUserPublicData;
	});
};