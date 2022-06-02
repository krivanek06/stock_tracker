import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as api from 'stock-tracker-common-interfaces';

// 1. remove transactionSnapshots for each users where transactionFees does not exists
// 2. remove topTransactions and lastTransactions where  transactionFees does not exists
// 3. add watchedByUserIds: []
// 4. add ID field for group & users historical data, also for groupAllData
// 5. add empty rank
// 6. update startedPortfolio.lastPortfolioBalance (groups),  portfolio.lastPortfolioBalance (users & groups)
// 7. decompose stock_data details into details collection

export const databaseAdjustment = functions
	.runWith({
		memory: '4GB',
		timeoutSeconds: 540,
	})
	.https.onRequest(async () => {
		try {
			await updateUsersData();
			await updateGroupHistoricalData();
			await updateHallOfFame();
			// todo run this one multiple times
			await updateDecomposeStockDetails();
		} catch (error) {
			console.log(error);
		}
	});

// works - but need to run multiple times - slow
const updateDecomposeStockDetails = async (): Promise<void> => {
	console.log('Start: UpdateDecomposeStockDetails');
	const stockDataDocs = await admin.firestore().collection('stock_data').where('details', '!=', null).limit(30).get();
	const refs = stockDataDocs.docs.map((d) => d.ref);
	//console.log(`Got: ${stockDataDocs..length} results`);
	console.log('Loop');
	for await (const ref of refs) {
		try {
			const document = await ref.get();
			const data = document.data() as api.StockDetailsWrapper;
			console.log(`Updating ${ref.id}`);

			// add details into sub collection
			await ref.collection(api.ST_STOCK_DATA_COLLECTION_MORE_INFORMATION).doc(api.STOCK_DETAILS_MORE_INFORMATION.DETAILS).set(data.details);

			// remove details from DB
			await ref.update({
				id: data.details.id,
				summary: data.details.summary,
				detailsLastUpdate: new Date(),
				details: admin.firestore.FieldValue.delete(),
			});
		} catch (e) {
			console.log(`Removing ${ref.id}`);
			await ref.delete();
		}
	}
	console.log('End: UpdateDecomposeStockDetails');
};

const updateHallOfFame = async () => {
	console.log('updating hall of fame');

	const hallOfFameNewData: api.STHallOfFame = {
		users: {
			total: 0,
			highestPortfolio: [],
			bestGainers: {
				...getEmptySTHallOfFameEntityGains<any>(),
			},
			wortGainers: {
				...getEmptySTHallOfFameEntityGains<any>(),
			},
			lastUpdateDate: new Date().toISOString().toString(),
		},
		groups: {
			total: 0,
			highestPortfolio: [],
			bestGainers: {
				...getEmptySTHallOfFameEntityGains<any>(),
			},
			wortGainers: {
				...getEmptySTHallOfFameEntityGains<any>(),
			},
			lastUpdateDate: new Date().toISOString().toString(),
		},
	};

	await admin.firestore().collection('public').doc(api.ST_PUBLIC_DOC.HALL_OF_FAME).set(hallOfFameNewData);

	console.log('updated hall of fame');
};

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
			const groupMemberDoc = await admin
				.firestore()
				.collection('groups')
				.doc(ref.id)
				.collection(api.ST_USER_COLLECTION_MORE_INFORMATION)
				.doc(api.ST_GROUP_COLLECTION_MEMBERS)
				.get();

			const groupMemberData = groupMemberDoc.data() as api.STGroupMembersDocument;
			const members = groupMemberData.members.map((m) => {
				return {
					...m,
					startedPortfolio: {
						...m.startedPortfolio,
						lastPortfolioBalance: m.startedPortfolio.portfolioCash + m.startedPortfolio.portfolioInvested,
					},
				} as api.STGroupUser;
			});
			await groupMemberDoc.ref.set(
				{
					members,
				},
				{ merge: true }
			);

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
					owner: {
						startedPortfolio: {
							lastPortfolioBalance: groupAllData.startedPortfolio.portfolioCash + groupAllData.startedPortfolio.portfolioInvested,
						},
					},
					startedPortfolio: {
						lastPortfolioBalance: groupAllData.startedPortfolio.portfolioCash + groupAllData.startedPortfolio.portfolioInvested,
					},
					portfolio: {
						lastPortfolioBalance:
							groupAllData.portfolio.lastPortfolioSnapshot.portfolioInvested + groupAllData.portfolio.lastPortfolioSnapshot.portfolioCash,
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

			// removed if transaction fees not exist
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
						lastPortfolioBalance:
							userPublicData.portfolio.lastPortfolioSnapshot.portfolioCash + userPublicData.portfolio.lastPortfolioSnapshot.portfolioInvested,
						portfolioChange: {
							from_beginning_change: null,
							day_1_change: null,
							week_1_change: null,
							week_2_change: null,
							week_3_change: null,
							month_1_change: null,
							month_2_change: null,
							month_3_change: null,
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

const getEmptySTHallOfFameEntityGains = <T extends api.STPortfolioEntity>(): api.STHallOfFameEntityGains<T> => {
	return {
		day_1_change_number: [],
		day_1_change_prct: [],
		week_1_change_number: [],
		week_1_change_prct: [],
		week_2_change_number: [],
		week_2_change_prct: [],
		week_3_change_number: [],
		week_3_change_prct: [],
		month_1_change_number: [],
		month_1_change_prct: [],
		month_2_change_number: [],
		month_2_change_prct: [],
		month_3_change_number: [],
		month_3_change_prct: [],
	};
};
