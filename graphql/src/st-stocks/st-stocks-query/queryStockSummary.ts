import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { IS_PRODUCTION } from '../../environment';
import { queryStockDetails } from './queryStockDetails';

export const queryStockSummary = async (symbol: string, allowReload: boolean = false): Promise<api.STSummary> => {
	try {
		const upperSymbol = symbol.toUpperCase();

		if (!IS_PRODUCTION) {
			console.log(`Summary for ${symbol}`);
		}

		const stockDetailsDocs = await admin.firestore().collection(api.ST_STOCK_DATA_COLLECTION).doc(upperSymbol).get();
		const wrapper = stockDetailsDocs.data() as api.StockDetailsWrapper | undefined;

		// no data in DB
		if (!wrapper) {
			const details = await queryStockDetails(upperSymbol);
			return details?.summary;
		}

		// if hard reset is true, allow reload
		if (wrapper.forceReload && allowReload) {
			const details = await queryStockDetails(upperSymbol);
			return details?.summary;
		}

		// update with current data
		// multiple upsers may access the same symbol summary in same time so do not load data from API all the time
		// const minutesDelay = IS_PRODUCTION ? 10 : 90;
		// if (Math.abs(moment(wrapper.summaryLastUpdate).diff(new Date(), 'minute')) > minutesDelay) {
		// 	console.log('updating summary for: ', upperSymbol, ', time diff: ', Math.abs(moment(wrapper.summaryLastUpdate).diff(new Date(), 'minute')));
		// 	wrapper.details.summary = await updateStockSummary(upperSymbol, wrapper.details.summary);
		// 	await persistStockSummary(upperSymbol, wrapper.details.summary);
		// }

		return wrapper?.summary;
	} catch (error) {
		throw new ApolloError(error);
	}
};

// const updateStockSummary = async (symbol: string, summary: api.STSummary): Promise<api.STSummary> => {
// 	try {
// 		const companyQuote = await getCompanyQuoteBatch([symbol]);
// 		const symbolQUote = companyQuote[0];

// 		summary.marketPrice = symbolQUote.price;
// 		summary.previousClose = symbolQUote.previousClose;
// 		summary.ePSTTM = symbolQUote.eps;
// 		summary.pERatioTTM = symbolQUote.pe;
// 		summary.volume = symbolQUote.volume;
// 		summary.weekRangeFiveTwoMax = symbolQUote.yearHigh;
// 		summary.weekRangeFiveTwoMin = symbolQUote.yearLow;

// 		return summary;
// 	} catch (error) {
// 		console.log(`Error updating summary for symbol: ${symbol}`);
// 	}
// 	return summary;
// };

// const persistStockSummary = async (symbol: string, summary: api.STSummary): Promise<void> => {
// 	await admin
// 		.firestore()
// 		.collection(api.ST_STOCK_DATA_COLLECTION)
// 		.doc(symbol)
// 		.set(
// 			{
// 				details: {
// 					summary: summary,
// 				},
// 				summaryLastUpdate: admin.firestore.Timestamp.now().toDate().toISOString(),
// 			},
// 			{ merge: true }
// 		);
// };
