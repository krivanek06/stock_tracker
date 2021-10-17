import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as moment from 'moment';
import * as api from 'stock-tracker-common-interfaces';
import {
	getCalendarDividend,
	getCalendarEarnings,
	getCalendarEconomic,
	getCalendarIpo,
	getCalendarSplit,
	getCommodity,
	getCompanyQuoteBatch,
	getEtf,
	getExchangeIndustryPE,
	getExchangeSectorPE,
	getHistoricalPricesAPI,
	getMostActiveStocks,
	getMutualFund,
	getNews,
	getSectorPerformance,
	getTopGainersStocks,
	getTopLosersStocks,
	queryStockScreener,
} from '../../api';
import { stockDataAPI } from './../../environment';
import { LodashFuntions } from './../../util/lodash.functions';

const fetch = require('node-fetch');
const SEARCH_ENDPOINT = `${stockDataAPI}/search`;

// functions.https.onRequest(
// functions.pubsub.topic('updateMarketDailyOverview').onPublish(async () => {
export const updateMarketDailyOverview = functions.pubsub.topic('updateMarketDailyOverview').onPublish(async () => {
	console.log(`Started updating at ${admin.firestore.Timestamp.now().toDate()}`);
	const oldOverview = await getDailyOverview();

	console.log('Fetched top stocks');
	let newOverview = await fetchTopStock();

	if (moment(new Date()).diff(moment(oldOverview.lastUpdate), 'hours') > 0) {
		console.log('Fetched overview rest data');
		const newOverviewRestData = await fetchDailyOverviewFromApi();

		// combine data into one
		newOverview = { ...newOverview, ...newOverviewRestData };

		console.log('Fetched suggestions');
		newOverview.stockSuggestions = await fetchSuggestions();
	}

	console.log('Save into firestore');
	await updateMarketOverviewCollection(newOverview);
	console.log(`Completed updating at ${admin.firestore.Timestamp.now().toDate()}`);
});

const getDailyOverview = async (): Promise<api.STMarketDailyOverview> => {
	const doc = await admin.firestore().collection(api.ST_SHARED_ENUM.ST_COLLECTION).doc(api.ST_SHARED_ENUM.MARKET_DAILY_OVERVIEW).get();
	return doc.data() as api.STMarketDailyOverview;
};

const fetchTopStock = async (): Promise<Partial<api.STMarketDailyOverview>> => {
	const topDailyGainers = await getTopGainersStocks();
	const topDailyLosers = await getTopLosersStocks();
	const topMostActive = await getMostActiveStocks();

	const dailyGainers = (
		await Promise.all(
			LodashFuntions.createChunks(
				topDailyGainers.slice(0, 15).map((top) => top.ticker),
				5
			).map((chunk) => getCompanyQuoteBatch(chunk))
		)
	).reduce((a, b) => a.concat(b), []);
	const dailyLosers = (
		await Promise.all(
			LodashFuntions.createChunks(
				topDailyLosers.slice(0, 15).map((top) => top.ticker),
				5
			).map((chunk) => getCompanyQuoteBatch(chunk))
		)
	).reduce((a, b) => a.concat(b), []);
	const mostActive = (
		await Promise.all(
			LodashFuntions.createChunks(
				topMostActive.slice(0, 15).map((top) => top.ticker),
				5
			).map((chunk) => getCompanyQuoteBatch(chunk))
		)
	).reduce((a, b) => a.concat(b), []);

	const topCrypto = (await (await fetch(`${SEARCH_ENDPOINT}/top_crypto`)).json())['top_crypto'] as api.STMarketTopTableCryptoData[];

	const result: Partial<api.STMarketDailyOverview> = {
		id: 'STMarketDailyOverview',
		dailyGainers,
		dailyLosers,
		mostActive,
		topCrypto,
		lastUpdateTopStocks: admin.firestore.Timestamp.now().toDate().toISOString(),
	};

	return result;
};

const fetchDailyOverviewFromApi = async (): Promise<Partial<api.STMarketDailyOverview>> => {
	const news = await getNews();
	const exchangeSectorPE = await getExchangeSectorPE();
	const exchangeIndustryPE = await getExchangeIndustryPE();
	const commodities = await getCommodity();
	const etfs = (await getEtf()).sort((a, b) => b.changesPercentage - a.changesPercentage).slice(0, 15);
	const mutulaFunds = (await getMutualFund()).sort((a, b) => b.changesPercentage - a.changesPercentage).slice(0, 15);
	const sectorPerformance = await getSectorPerformance();

	const calendarEarnings = (await getCalendarEarnings()).slice(0, 20);
	const calendarIpo = (await getCalendarIpo()).slice(0, 20);
	const calendarSplit = (await getCalendarSplit()).slice(0, 20);
	const calendarDividend = (await getCalendarDividend()).slice(0, 20);
	const calendarEconomic = (await getCalendarEconomic()).slice(0, 20);

	const stockScreener = await queryStockScreener({
		marketCapMoreThan: 166840000000,
		priceMoreThan: 15,
		betaMoreThan: 0.5,
		volumeMoreThan: 10000000,
	});

	const result: Partial<api.STMarketDailyOverview> = {
		id: 'STMarketDailyOverview',
		commodities,
		etfs,
		exchange: {
			id: 'NYSE',
			exchangeIndustryPE,
			exchangeSectorPE,
		},
		mutulaFunds,
		news,
		stockSuggestions: [],
		calendar: {
			calendarDividend,
			calendarEarnings,
			calendarEconomic,
			calendarIpo,
			calendarSplit,
		},
		sectorPerformance,
		stockScreener,
		lastUpdate: admin.firestore.Timestamp.now().toDate().toISOString(),
	};

	return result;
};

const fetchSuggestions = async (): Promise<api.STStockSuggestion[]> => {
	const randomDetailDocs = await admin
		.firestore()
		.collection('stock_data')
		.where('summaryLastUpdate', '>=', '')
		.orderBy('summaryLastUpdate', 'desc')
		.limit(8)
		.get();

	const randomSummaries = randomDetailDocs.docs
		.map((d) => d.data() as api.StockDetailsWrapper)
		.filter((d) => !!d.details)
		.map((d) => d.details.summary);

	const suggestions: api.STStockSuggestion[] = [];
	for await (const summary of randomSummaries) {
		const historicalPrices = await getHistoricalPricesAPI(summary.symbol, '4hour');
		const historicalData = LodashFuntions.takeRight(
			historicalPrices.map((price) => price.close),
			50
		);
		suggestions.push({ summary, historicalData });
	}

	return suggestions;
};

const updateMarketOverviewCollection = async (newOverview: Partial<api.STMarketDailyOverview>): Promise<void> => {
	await admin
		.firestore()
		.collection(api.ST_SHARED_ENUM.ST_COLLECTION)
		.doc(api.ST_SHARED_ENUM.MARKET_DAILY_OVERVIEW)
		.set(newOverview, { merge: true });
};
