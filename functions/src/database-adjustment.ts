import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as api from 'stock-tracker-common-interfaces';

// 1. remove transactionSnapshots for each users where transactionFees does not exists

export const databaseAdjustment = functions.https.onRequest(async () => {
	try {
		await updateUsersHistoricalData();
		await updateGroupHistoricalData();
	} catch (error) {
		console.log(error);
	}
});

// 1. remove transactionSnapshots for each users where transactionFees does not exists
// 2. remove topTransactions and lastTransactions where  transactionFees does not exists
// 3. add watchedByUserIds: []

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
					transactionSnapshots,
				},
				{ merge: true }
			);
			console.log(`Group ${ref.id} updated, removed ${data.transactionSnapshots.length - transactionSnapshots.length} transaction snapshots`);

			// remove topTransactions and lastTransactions where  transactionFees does not exists
			const userPublicData = (await ref.get()).data() as api.STGroupAllData;
			const topTransactions = userPublicData.topTransactions.filter((trans) => trans.transactionFees !== undefined);
			const lastTransactions = userPublicData.lastTransactions.filter((trans) => trans.transactionFees !== undefined);
			await ref.update({
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
					watchedByUsers: watchedByUsersNumber,
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

const updateUsersHistoricalData = async () => {
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
					topTransactions,
					transactionsSnippets,
					groups: {
						groupWatched,
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
