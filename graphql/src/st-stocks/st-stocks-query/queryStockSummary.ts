import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as moment from 'moment';
import * as api from 'stock-tracker-common-interfaces';
import { getCompanyQuoteBatch } from '../../api';
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
		if (!wrapper || (wrapper.forceReload && allowReload)) {
			const details = await queryStockDetails(upperSymbol);
			return details?.summary;
		}

		let summary = wrapper.summary;

		// update with current data
		const minutesDelay = IS_PRODUCTION ? 15 : 90;
		if (Math.abs(moment(wrapper.summaryLastUpdate).diff(new Date(), 'minute')) > minutesDelay) {
			console.log('updating summary for: ', upperSymbol, ', time diff: ', Math.abs(moment(wrapper.summaryLastUpdate).diff(new Date(), 'minute')));
			summary = await updateStockSummary(upperSymbol, summary);
			await persistStockSummary(upperSymbol, summary);
		}

		return summary;
	} catch (error) {
		throw new ApolloError(error);
	}
};

const updateStockSummary = async (symbol: string, summary: api.STSummary): Promise<api.STSummary> => {
	try {
		const companyQuote = await getCompanyQuoteBatch([symbol]);
		const symbolQUote = companyQuote[0];

		summary.marketPrice = symbolQUote.price;
		summary.previousClose = symbolQUote.previousClose;
		summary.ePSTTM = symbolQUote.eps;
		summary.pERatioTTM = symbolQUote.pe;
		summary.volume = symbolQUote.volume;
		summary.weekRangeFiveTwoMax = symbolQUote.yearHigh;
		summary.weekRangeFiveTwoMin = symbolQUote.yearLow;
		summary.marketCap = symbolQUote.marketCap;
		summary.sharesOutstanding = symbolQUote.sharesOutstanding;
		summary.logo_url = symbolQUote.image;

		return summary;
	} catch (error) {
		console.log(`Error updating summary for symbol: ${symbol}`);
	}
	return summary;
};

const persistStockSummary = async (symbol: string, summary: api.STSummary): Promise<void> => {
	await admin
		.firestore()
		.collection(api.ST_STOCK_DATA_COLLECTION)
		.doc(symbol)
		.set(
			<api.StockDetailsWrapper>{
				summary,
				summaryLastUpdate: admin.firestore.Timestamp.now().toDate().toISOString(),
			},
			{ merge: true }
		);
};
