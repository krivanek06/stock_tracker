import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as moment from 'moment';
import * as api from 'stock-tracker-common-interfaces';
import { getNews } from '../../api';
import { getStockDetailsFromApi, getStockDetailsFromFirestore, saveDataIntoFirestore } from './functions';

// check if details already exists in firestore, else fetch from api and save
export const queryStockDetails = async (symbol: string, reload = false): Promise<api.StockDetails> => {
	try {
		const upperSymbol = symbol.toUpperCase();
		const data = await getStockDetailsFromFirestore(symbol);

		// remove stock details collection
		// await removeAllStockFromFirestore();
		// console.log('delete');

		// delete previous data
		if (reload || data?.forceReload) {
			console.log(`Deleting data for symbol ${symbol}`);
			await admin.firestore().collection(api.ST_STOCK_DATA_COLLECTION).doc(symbol).delete();
		}

		// first fetch or older than 10 days
		if (!data || reload || data?.forceReload || !data.detailsLastUpdate || Math.abs(moment(data.detailsLastUpdate).diff(new Date(), 'days')) > 10) {
			console.log(`Query all stock details for symbol: ${upperSymbol}`);
			const details = (await getStockDetailsFromApi(upperSymbol)) as api.StockDetails;

			// no summary was found - insufficient data
			if (!details || !details.summary) {
				return null;
			}

			await saveDataIntoFirestore(symbol, details);

			return details;
		}

		const dataDetails = data.details as api.StockDetails;

		// fetch fresh news
		if (!!data.details && Math.abs(moment(data.newsLastUpdate).diff(new Date(), 'days')) > 1 && !!dataDetails?.companyOutlook?.stockNews) {
			console.log(`Query stock news for symbol: ${upperSymbol}`);
			dataDetails.companyOutlook.stockNews = await getAndSaveStockNewsFromApi(upperSymbol, data);
		}

		return dataDetails;
	} catch (error) {
		throw new ApolloError(error);
	}
};

const removeAllStockFromFirestore = async () => {
	console.log('Start deleting');
	const ref = admin.firestore().collection(api.ST_STOCK_DATA_COLLECTION);
	ref.onSnapshot((snapshot) => {
		snapshot.docs.forEach((doc) => {
			console.log(`Deleting ${doc.id}`);
			ref.doc(doc.id).delete();
		});
	});
	console.log('Deleting done');
};

const getAndSaveStockNewsFromApi = async (symbol: string, data: api.StockDetailsWrapper): Promise<api.STFMStockNew[]> => {
	const response = (await getNews(symbol)) as api.STFMStockNew[];

	// save details
	admin
		.firestore()
		.collection(api.ST_STOCK_DATA_COLLECTION)
		.doc(symbol)
		.collection(api.ST_STOCK_DATA_COLLECTION_MORE_INFORMATION)
		.doc(api.STOCK_DETAILS_MORE_INFORMATION.DETAILS)
		.set(
			{
				companyOutlook: {
					stockNews: response,
				},
			},
			{ merge: true }
		);

	return response;
};
