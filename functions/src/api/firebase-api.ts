import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';

export const getStockSummaryFirebase = async (symbol: string): Promise<api.STSummary | null> => {
	const doc = await admin.firestore().collection(api.ST_STOCK_DATA_COLLECTION).doc(symbol).get();
	const data = doc.data() as api.StockDetailsWrapper | undefined;

	if (!data) {
		return null;
	}
	return data.details.summary;
};

// ------------------------–---------------------
// USERS

export const getUserPublicDataByUserId = async (userId: string): Promise<api.STUserPublicData> => {
	const ownerDoc = await admin.firestore().collection(api.ST_USER_COLLECTION_USER).doc(userId).get();
	const ownerPublicData = ownerDoc.data() as api.STUserPublicData;
	return ownerPublicData;
};

export const getAllUserWithExistingHoldingsFirebase = async (): Promise<api.STUserPublicData[]> => {
	// cannot use holdings for filtering because when somebody had increase 90% and sold everythin,
	// then he would not be filtered out
	const usersWithHoldings = await admin.firestore().collection('users').where('portfolio.numberOfExecutedBuyTransactions', '>', 0).get();
	return usersWithHoldings.docs.map((d) => d.data() as api.STUserPublicData);
};

export const getUserHistoricalData = async ({ id }: api.STUserPublicData): Promise<api.STUserHistoricalData> => {
	const doc = await admin
		.firestore()
		.collection('users')
		.doc(id)
		.collection(api.ST_USER_COLLECTION_MORE_INFORMATION)
		.doc(api.ST_USER_DOCUMENT_HISTORICAL_DATA)
		.get();

	const data = doc.data() as api.STUserHistoricalData;
	return data;
};

export const updateUserHistoricalData = async (
	{ id }: api.STUserPublicData,
	userHistoricalData: Partial<api.STUserHistoricalData>
): Promise<void> => {
	await admin
		.firestore()
		.collection('users')
		.doc(id)
		.collection(api.ST_USER_COLLECTION_MORE_INFORMATION)
		.doc(api.ST_USER_DOCUMENT_HISTORICAL_DATA)
		.set(
			{
				...userHistoricalData,
			},
			{ merge: true }
		);
};

export const updateUsersCollection = async ({ id }: api.STUserPublicData, userData: Partial<api.STUserPublicData>): Promise<void> => {
	await admin
		.firestore()
		.collection('users')
		.doc(id)
		.set({ ...userData }, { merge: true });
};

export const getUserPortfolioSnapshotsAsBalance = async (user: api.STUserPublicData, filterOutWeekends: boolean = false): Promise<number[]> => {
	const data = await getUserHistoricalData(user);
	return data.portfolioSnapshots
		.filter((snapshot) => {
			if (!filterOutWeekends) {
				return true;
			}
			const dayOfWeek = new Date(snapshot.date).getDay();
			return dayOfWeek === 6 || dayOfWeek === 0 ? false : true;
		})
		.map((snapshot) => snapshot.portfolioInvested + snapshot.portfolioCash);
};

// -----------—-----------—-----------—-----------—-----------—-----------—
// GROUPS

export const getGroupsHistoricalData = async ({ id }: api.STGroupIdentification): Promise<api.STGroupHistoricalData> => {
	const doc = await admin
		.firestore()
		.collection('groups')
		.doc(id)
		.collection(api.ST_GROUP_COLLECTION_MORE_INFORMATION)
		.doc(api.ST_GROUP_COLLECTION_HISTORICAL_DATA)
		.get();

	const data = doc.data() as api.STGroupHistoricalData;
	return data;
};

export const updateGroupHistoricalDataCollection = async (
	{ id }: api.STGroupIdentification,
	groupHistoricalData: Partial<api.STGroupHistoricalData>
) => {
	await admin
		.firestore()
		.collection(api.ST_GROUP_COLLECTION_GROUPS)
		.doc(id)
		.collection(api.ST_GROUP_COLLECTION_MORE_INFORMATION)
		.doc(api.ST_GROUP_COLLECTION_HISTORICAL_DATA)
		.set({ ...groupHistoricalData }, { merge: true });
};

export const getGroupMemberCollection = async (groupId: string): Promise<api.STGroupMembersDocument> => {
	const groupMembersDoc = await admin
		.firestore()
		.collection(api.ST_GROUP_COLLECTION_GROUPS)
		.doc(groupId)
		.collection(api.ST_GROUP_COLLECTION_MORE_INFORMATION)
		.doc(api.ST_GROUP_COLLECTION_MEMBERS)
		.get();
	return groupMembersDoc.data() as api.STGroupMembersDocument;
};

export const updateGroupMembersCollection = async (
	{ id }: api.STGroupIdentification,
	groupMembersData: Partial<api.STGroupMembersDocument>
): Promise<void> => {
	await admin
		.firestore()
		.collection(api.ST_GROUP_COLLECTION_GROUPS)
		.doc(id)
		.collection(api.ST_GROUP_COLLECTION_MORE_INFORMATION)
		.doc(api.ST_GROUP_COLLECTION_MEMBERS)
		.set({ ...groupMembersData }, { merge: true });
};

export const getAllGroups = async (): Promise<api.STGroupAllData[]> => {
	const docs = await admin.firestore().collection('groups').get();
	return docs.docs.map((d) => d.data() as api.STGroupAllData);
};

export const updateGroupsCollection = async ({ id }: api.STGroupIdentification, groupData: Partial<api.STGroupAllData>): Promise<void> => {
	await admin
		.firestore()
		.collection('groups')
		.doc(id)
		.set({ ...groupData }, { merge: true });
};

export const closeOpenButEndedGroups = async (): Promise<void> => {
	const openButEndedGroups = await admin
		.firestore()
		.collection(api.ST_GROUP_COLLECTION_GROUPS)
		.where('endDate', '<=', new Date().toISOString())
		.where('isClosed', '==', false)
		.get();

	for await (const doc of openButEndedGroups.docs) {
		console.log(`Closed group ${doc.id}`);
		await doc.ref.update({
			isClosed: true,
		});
	}
};

export const getOpenGroups = async (getAll = false): Promise<api.STGroupAllData[]> => {
	if (getAll) {
		const allGroups = await admin.firestore().collection(api.ST_GROUP_COLLECTION_GROUPS).get();
		return allGroups.docs.map((d) => d.data() as api.STGroupAllData);
	}
	const infiniteGroups = await admin.firestore().collection(api.ST_GROUP_COLLECTION_GROUPS).where('isInfinite', '==', true).get();
	const notEndedGroups = await admin.firestore().collection(api.ST_GROUP_COLLECTION_GROUPS).where('endDate', '>', new Date().toISOString()).get();

	return [...infiniteGroups.docs, ...notEndedGroups.docs].map((d) => d.data() as api.STGroupAllData);
};

// export const savePortfolioChange = async (entity: 'users' | 'groups', id: string, portfolioChange: api.STPortfolioChange | null): Promise<void> => {
// 	if (!portfolioChange) {
// 		return;
// 	}
// 	await admin.firestore().collection(entity).doc(id).set(
// 		{
// 			portfolio: {
// 				portfolioChange,
// 			},
// 		},
// 		{ merge: true }
// 	);
// };

export const getEntityByHighestPortfolio = async <T extends api.STPortfolioEntity>(entityKey: 'users' | 'groups'): Promise<T[]> => {
	const doc = await admin.firestore().collection(entityKey).orderBy(`portfolio.lastPortfolioBalance`, 'desc').get();

	const data = doc.docs.map((d) => d.data() as T);
	return data;
};
