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

export const getAllGroups = async (): Promise<api.STGroupAllData[]> => {
	const docs = await admin.firestore().collection('groups').get();
	return docs.docs.map((d) => d.data() as api.STGroupAllData);
};
