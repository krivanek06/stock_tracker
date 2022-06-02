import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as moment from 'moment';
import * as api from 'stock-tracker-common-interfaces';
import { getStockDetailsFromApi, getStockDetailsFromFirestore, saveDataIntoFirestore } from './functions';

export const queryEtfDetails = async (symbol: string, reload: boolean = false): Promise<api.EtfDetails> => {
	try {
		const upperSymbol = symbol.toUpperCase();
		const data = await getStockDetailsFromFirestore(symbol);

		// delete previous data
		if (reload || data?.forceReload) {
			console.log(`Deleting data for symbol ${symbol}`);
			await admin.firestore().collection(api.ST_STOCK_DATA_COLLECTION).doc(symbol).delete();
		}

		// first fetch or older than 10 days
		if (!data || reload || data?.forceReload || !data.detailsLastUpdate || Math.abs(moment(data.detailsLastUpdate).diff(new Date(), 'days')) > 10) {
			console.log(`Query all stock details for symbol: ${symbol}`);
			const details = (await getStockDetailsFromApi(upperSymbol)) as api.EtfDetails;

			// no summary was found - insufficient data
			if (!details || !details.summary) {
				return null;
			}

			await saveDataIntoFirestore(symbol, details);

			return details;
		}

		return data.details;
	} catch (error) {
		throw new ApolloError(error);
	}
};
