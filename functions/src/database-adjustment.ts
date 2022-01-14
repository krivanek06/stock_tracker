import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as api from 'stock-tracker-common-interfaces';

// 1. remove transactionSnapshots for each users where transactionFees does not exists

export const databaseAdjustment = functions.https.onRequest(async () => {
	try {
		await updateUsersData();
		await updateGroupHistoricalData();
		await updateHallOfFame();
	} catch (error) {
		console.log(error);
	}
});

const updateHallOfFame = async () => {
	const hallOfFameDoc = await admin.firestore().collection('public').doc(api.ST_PUBLIC_DOC.HALL_OF_FAME).get();
	const hallOfFameData = hallOfFameDoc.data() as api.STHallOfFame;

	// if exists, return
	if (!!hallOfFameData) {
		return;
	}

	const hallOfFameNewData: api.STHallOfFame = {
		users: {
			total: 0,
			highestPortfolio: [],
			weeklyBestGainsPrct: [],
			weeklyWorstGainsPrct: [],
			lastUpdateDate: new Date().toISOString().toString(),
		},
		groups: {
			total: 0,
			highestPortfolio: [],
			weeklyBestGainsPrct: [],
			weeklyWorstGainsPrct: [],
			lastUpdateDate: new Date().toISOString().toString(),
		},
	};

	await admin.firestore().collection('public').doc(api.ST_PUBLIC_DOC.HALL_OF_FAME).set(hallOfFameNewData);

	console.log('updated hall of fame');
};

// 1. remove transactionSnapshots for each users where transactionFees does not exists
// 2. remove topTransactions and lastTransactions where  transactionFees does not exists
// 3. add watchedByUserIds: []
// 4. add ID field for group & users historical data, also for groupAllData
// 5. add empty rank

const updateGroupHistoricalData = async () => {
	console.log('Start updating groups historical data');
	const groupsDoc = await admin.firestore().collection('groups').get();
	const refs = groupsDoc.docs.map((d) => d.ref);
	console.log(`Updating ${refs.length} groups`);

	for (const ref of refs) {
		try {
			// remove transactionSnapshots for each users where transactionFees does not exists
			const groupHistoricalDoc = await admin
				.firestore()
				.collection('groups')
				.doc(ref.id)
				.collection(api.ST_USER_COLLECTION_MORE_INFORMATION)
				.doc(api.ST_USER_DOCUMENT_HISTORICAL_DATA)
				.get();

			const data = groupHistoricalDoc.data() as api.STGroupHistoricalData;

			const transactionSnapshots = data.transactionSnapshots.filter((t) => !!t.transactionFees);

			await groupHistoricalDoc.ref.set(
				{
					id: ref.id,
					transactionSnapshots,
				},
				{ merge: true }
			);
			console.log(`Group ${ref.id} updated, removed ${data.transactionSnapshots.length - transactionSnapshots.length} transaction snapshots`);

			// remove topTransactions and lastTransactions where  transactionFees does not exists
			const userPublicData = (await ref.get()).data() as api.STGroupAllData;
			const topTransactions = userPublicData.topTransactions.filter((trans) => trans.transactionFees !== undefined);
			const lastTransactions = userPublicData.lastTransactions.filter((trans) => trans.transactionFees !== undefined);

			// UPDATE GROUPS
			await ref.update({
				topMembers: [],
				topTransactions,
				lastTransactions,
			});
			console.log(`User ${ref.id} updated, removed ${userPublicData.topTransactions.length - topTransactions.length} top transaction`);
			console.log(`User ${ref.id} updated, removed ${userPublicData.lastTransactions.length - lastTransactions.length} transactions snippets`);

			// ==========================================
			// group members DOCS
			// const groupMemberDoc = await admin
			// 	.firestore()
			// 	.collection('groups')
			// 	.doc(ref.id)
			// 	.collection(api.ST_USER_COLLECTION_MORE_INFORMATION)
			// 	.doc(api.ST_GROUP_COLLECTION_MEMBERS)
			// 	.get();

			// const mamberData = groupMemberDoc.data() as api.STGroupMembersDocument;
			// const watchedByUser = mamberData.watchedByUser || [];
			// await groupMemberDoc.ref.set(
			// 	{
			// 		watchedByUser,
			// 	},
			// 	{ merge: true }
			// );

			// ==========================================
			// update groups
			const groupAllDataDoc = await admin.firestore().collection('groups').doc(ref.id).get();
			const groupAllData = groupAllDataDoc.data() as api.STGroupAllData;
			const watchedByUsersNumber = groupAllData.watchedByUsers || 0;
			await groupAllDataDoc.ref.set(
				{
					id: ref.id,
					rank: {
						...createEmptyRank(),
					},
					watchedByUsers: watchedByUsersNumber,
					portfolio: {
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
					},
				},
				{ merge: true }
			);
		} catch (error) {
			console.log('error for : ', ref.id);
			console.log(error);
		}
	}
	console.log('Ended updating user group data');
};

// 1. remove transactionSnapshots for each users where transactionFees does not exists
// 2. remove topTransactions and lastTransactions where  transactionFees does not exists
// 3. add watchedGroupsIds: []
// 4. add empty rank

const updateUsersData = async () => {
	console.log('Start updating users historical data');
	const usersDoc = await admin.firestore().collection('users').get();
	const refs = usersDoc.docs.map((d) => d.ref);
	console.log(`Updating ${refs.length} users`);

	for (const ref of refs) {
		try {
			// remove transactionSnapshots for each users where transactionFees does not exists
			const userHistoricalDoc = await admin
				.firestore()
				.collection('users')
				.doc(ref.id)
				.collection(api.ST_USER_COLLECTION_MORE_INFORMATION)
				.doc(api.ST_USER_DOCUMENT_HISTORICAL_DATA)
				.get();

			const data = userHistoricalDoc.data() as api.STUserHistoricalData;

			const transactionSnapshots = data.transactionSnapshots.filter((t) => !!t.transactionFees);

			await userHistoricalDoc.ref.set(
				{
					id: ref.id,
					transactionSnapshots,
				},
				{ merge: true }
			);
			console.log(`User ${ref.id} updated, removed ${data.transactionSnapshots.length - transactionSnapshots.length} transaction snapshots`);

			// remove topTransactions and lastTransactions where  transactionFees does not exists
			const userPublicData = (await ref.get()).data() as api.STUserPublicData;
			const topTransactions = userPublicData.topTransactions.filter((trans) => trans.transactionFees !== undefined);
			const transactionsSnippets = userPublicData.transactionsSnippets.filter((trans) => trans.transactionFees !== undefined);
			const groupWatched = userPublicData.groups.groupWatched || [];

			await ref.set(
				{
					rank: {
						...createEmptyRank(),
					},
					topTransactions,
					transactionsSnippets,
					groups: {
						groupWatched,
					},
					portfolio: {
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
					},
				},
				{ merge: true }
			);
			console.log(`User ${ref.id} updated, removed ${userPublicData.topTransactions.length - topTransactions.length} top transaction`);
			console.log(
				`User ${ref.id} updated, removed ${userPublicData.transactionsSnippets.length - transactionsSnippets.length} transactions snippets`
			);
		} catch (error) {
			console.log('error for : ', ref.id);
			console.log(error);
		}
	}
	console.log('Ended updating user historical data');
};

const createEmptyRank = (): api.STRank => {
	return {
		highestPortfolio: null,
	};
};
