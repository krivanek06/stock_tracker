import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { stockDataAPI } from '../../environment';
import { getCurrentIOSDate } from '../../st-shared/st-shared.functions';

export const getStockDetailsFromApi = async (symbol: string): Promise<api.AssetDetails> => {
	const resolverPromise = await global.fetch(`${stockDataAPI}/fundamentals/all?symbol=${symbol}`);
	const response = (await resolverPromise.json()) as api.AssetDetails;
	return !!response.summary ? response : null;
};

export const saveDataIntoFirestore = async (symbol: string, detials: api.AssetDetails | null) => {
	admin
		.firestore()
		.collection(api.ST_STOCK_DATA_COLLECTION)
		.doc(symbol)
		.set(
			{
				details: detials,
				detailsLastUpdate: !detials ? null : getCurrentIOSDate(),
				summaryLastUpdate: !detials ? null : getCurrentIOSDate(),
				newsLastUpdate: getCurrentIOSDate(),
			},
			{ merge: true }
		);
};
