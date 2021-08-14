import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as moment from 'moment';
import * as api from 'stock-tracker-common-interfaces';
import { stockDataAPI } from '../../environment';
import { getCurrentIOSDate } from '../../st-shared/st-shared.functions';

// check if details already exists in firestore, else fetch from api and save
export const queryStockDetails = async (symbol: string, reload = false): Promise<api.StockDetails> => {
	try {
		const upperSymbol = symbol.toUpperCase();
		const stockDetailsDocs = await admin.firestore().collection(`${api.ST_STOCK_DATA_COLLECTION}`).doc(upperSymbol).get();
		const data = stockDetailsDocs.data() as api.StockDetailsWrapper | undefined;

		// remove stock details collection
		// await removeAllStockFromFirestore();
		// console.log('delete')

		// delete previous data
		if (reload || data?.forceReload) {
			console.log(`Deleting data for symbol ${symbol}`);
			await admin.firestore().collection(api.ST_STOCK_DATA_COLLECTION).doc(symbol).delete();
		}

		// first fetch or older than 10 days
		if (!data || reload || data?.forceReload || Math.abs(moment(data.detailsLastUpdate).diff(new Date(), 'days')) > 10) {
			console.log(`Query all stock details for symbol: ${upperSymbol}`);
			const details = await getStockDetailsFromApi(upperSymbol);

			// no summary was found - insufficient data
			if (!details) {
				return null;
			}

			await saveFinancialReports(symbol, details);

			// remove FinancialReportStatement
			details.allFinancialReportsQuarterly = modifyFinancialReports(details.allFinancialReportsQuarterly);
			details.allFinancialReportsYearly = modifyFinancialReports(details.allFinancialReportsYearly);

			await saveDataIntoFirestore(symbol, details);

			return details;
		}

		// fetch fresh news
		if (!!data.details && Math.abs(moment(data.newsLastUpdate).diff(new Date(), 'days')) > 1) {
			console.log(`Query stock news for symbol: ${upperSymbol}`);
			data.details.companyOutlook.stockNews = await getAndSaveStockNewsFromApi(upperSymbol, data);
		}

		return data.details;
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

const saveFinancialReports = async (symbol: string, details: api.StockDetails) => {
	admin
		.firestore()
		.collection(api.ST_STOCK_DATA_COLLECTION)
		.doc(symbol)
		.collection(api.ST_STOCK_DATA_COLLECTION_MORE_INFORMATION)
		.doc(api.ST_STOCK_DATA_DOCUMENT_FINACIAL_REPORTS)
		.set({
			allFinancialReportsQuarterly: details.allFinancialReportsQuarterly,
			allFinancialReportsYearly: details.allFinancialReportsYearly,
		});
};

const modifyFinancialReports = (financialReports: api.STFinancialReport[]): api.STFinancialReport[] => {
	return financialReports.map((financialReport) => {
		return { ...financialReport, report: null };
	});
};

const getStockDetailsFromApi = async (symbol: string): Promise<api.StockDetails> => {
	const resolverPromise = await global.fetch(`${stockDataAPI}/fundamentals/all?symbol=${symbol}`);
	const response = (await resolverPromise.json()) as api.StockDetails;
	return !!response.summary ? response : null;
};

const saveDataIntoFirestore = async (symbol: string, detials: api.StockDetails | null) => {
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

const getAndSaveStockNewsFromApi = async (symbol: string, data: api.StockDetailsWrapper): Promise<api.STFMStockNew[]> => {
	const resolverPromise = await global.fetch(`${stockDataAPI}/fundamentals/stock_news?symbol=${symbol}`);
	const response = (await resolverPromise.json())['data'] as api.STFMStockNew[];

	// save details
	admin
		.firestore()
		.collection(`${api.ST_STOCK_DATA_COLLECTION}`)
		.doc(symbol)
		.set(
			{
				['details.companyOutlook.stockNews']: response,
				newsLastUpdate: getCurrentIOSDate(),
			},
			{ merge: true }
		);

	return response;
};
