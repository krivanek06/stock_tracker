import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { stockDataAPI } from '../../environment';
import { getCurrentIOSDate } from '../../st-shared/st-shared.functions';

export const getStockDetailsFromApi = async (symbol: string): Promise<api.AssetDetails> => {
	const resolverPromise = await global.fetch(`${stockDataAPI}/fundamentals/all?symbol=${symbol}`);
	const response = (await resolverPromise.json()) as api.AssetDetails;
	return !!response.summary ? response : null;
};

export const getStockDetailsFromFirestore = async (symbol: string): Promise<api.StockDetailsWrapper | undefined> => {
	const upperSymbol = symbol.toUpperCase();
	const stockSummaryDocs = await admin.firestore().collection(api.ST_STOCK_DATA_COLLECTION).doc(upperSymbol).get();
	const stockDetailsDocs = await admin
		.firestore()
		.collection(api.ST_STOCK_DATA_COLLECTION)
		.doc(upperSymbol)
		.collection(api.ST_STOCK_DATA_COLLECTION_MORE_INFORMATION)
		.doc(api.STOCK_DETAILS_MORE_INFORMATION.DETAILS)
		.get();

	// combine summary & details
	const summary = stockSummaryDocs.data() as api.StockDetailsWrapper | undefined;
	const details = stockDetailsDocs.data() as api.StockDetails | undefined;

	return { ...summary, details };
};

export const saveDataIntoFirestore = async (symbol: string, details: api.AssetDetails | null) => {
	await admin
		.firestore()
		.collection(api.ST_STOCK_DATA_COLLECTION)
		.doc(symbol)
		.set(
			{
				summary: details.summary,
				detailsLastUpdate: !details ? null : getCurrentIOSDate(),
				summaryLastUpdate: !details ? null : getCurrentIOSDate(),
				newsLastUpdate: getCurrentIOSDate(),
			},
			{ merge: true }
		);

	await admin
		.firestore()
		.collection(api.ST_STOCK_DATA_COLLECTION)
		.doc(symbol)
		.collection(api.ST_STOCK_DATA_COLLECTION_MORE_INFORMATION)
		.doc(api.STOCK_DETAILS_MORE_INFORMATION.DETAILS)
		.set(details);
};
