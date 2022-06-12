import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as api from 'stock-tracker-common-interfaces';
import {
	getLivePriceAPI,
	getPortfolioRiskCustomRest,
	getUserHistoricalData,
	getUsersToUpdatePortfolio,
	updateUserHistoricalData,
	updateUsersCollection,
} from '../../api';
import { calculatePortfolioChange, customSleep } from '../../util';
/* 
For each user who already performed a transaction calculate
- portfolioChange
- portfolio
- portfolioRisk
- historical.portfolioSnapshots

*/
const symbolPriceMap: Map<string, number> = new Map<string, number>();

// functions.https.onRequest(async () => {
// functions.pubsub.topic('createUserPortfolioSnapshot').onPublish(async () => {
export const createUserPortfolioSnapshot = functions.pubsub.topic('createUserPortfolioSnapshot').onPublish(async () => {
	const start = admin.firestore.Timestamp.now();
	console.log(`Started updating at ${start.toDate()}`);

	// load users who has non empty holdings
	const yesterday = new Date();
	yesterday.setHours(12, 0, 0, 0); // today noon
	console.log('date: ', yesterday.toISOString());
	const usersWithHoldings = await getUsersToUpdatePortfolio(yesterday.toISOString());
	const total = usersWithHoldings.length;
	console.log('users with holdings: ', total);
	console.log(`Starting distinct symbols: ${symbolPriceMap.size}`);

	let counter = 1;
	for await (const user of usersWithHoldings) {
		try {
			console.log(`updating user: ${user.id}, nickname: ${user.nickName}, [${counter} / ${total}]`);
			// not cached holdings => query live price for symbols
			const unsavedSymbols = user.holdings.map((h) => h.symbol).filter((symbol) => !symbolPriceMap.has(symbol));
			await cacheDataForUnsavedSymbols(unsavedSymbols);

			// construct portfolio snapshot and save it into DB
			const portfolioSnapshot = constructPortfolioSnapshot(user);
			const portfolioWrapper = await getPortfolioWrapper(user, portfolioSnapshot);
			const userHistoricalData = await getUserHistoricalData(user);
			const portfolioRisk = await getPortfolioRisk(user, counter === total);
			const portfolioChange = calculatePortfolioChange(userHistoricalData.portfolioSnapshots);

			// update user historical data
			await updateUserHistoricalData(user, { portfolioSnapshots: [...userHistoricalData.portfolioSnapshots.slice(-100), portfolioSnapshot] });

			// update user main data

			await updateUsersCollection(user, {
				portfolioRisk,
				portfolio: { ...portfolioWrapper, portfolioChange },
				lastPortfolioUpdateDate: new Date().toISOString(),
			} as api.STUserPublicData);

			counter += 1;
		} catch (error) {
			console.log(`Error for user: ${user.id}, error:`, error);
		}
	}

	console.log(`Distinct symbols: ${symbolPriceMap.size}`);
	console.log(`Completed updating at ${admin.firestore.Timestamp.now().toDate()}`);
	console.log(`Total run: ${admin.firestore.Timestamp.now().seconds - start.seconds} seconds`);
});

const cacheDataForUnsavedSymbols = async (unsavedSymbols: string[]) => {
	const prices = await getLivePriceAPI(unsavedSymbols);
	if (!prices) {
		console.error(`Trying to fetch ${unsavedSymbols}, but failed`);
		return;
	}

	// sleep to not hit API all the time
	await customSleep(1000);

	try {
		for (const p of prices) {
			symbolPriceMap.set(p?.symbol, p?.price);
		}
	} catch (e) {
		console.error(e);
		console.log(`Unloaded symbols: `, unsavedSymbols);
	}
};
const getPortfolioWrapper = async (user: api.STUserPublicData, portfolioSnapshot: api.STPortfolioSnapshot) => {
	const previousBalance = user.portfolio.lastPortfolioSnapshot.portfolioCash + user.portfolio.lastPortfolioSnapshot.portfolioInvested;
	const currentBalance = portfolioSnapshot.portfolioCash + portfolioSnapshot.portfolioInvested;

	const lastPortfolioIncreaseNumber = Number(currentBalance - previousBalance);
	const lastPortfolioIncreasePrct = Number((currentBalance - previousBalance) / previousBalance);

	const portfolioWrapper: Partial<api.STPortfolioWrapper> = {
		lastPortfolioBalance: currentBalance,
		lastPortfolioSnapshot: portfolioSnapshot,
		lastPortfolioIncreaseNumber: !isNaN(lastPortfolioIncreaseNumber) && previousBalance !== 0 ? Number(lastPortfolioIncreaseNumber.toFixed(2)) : 0,
		lastPortfolioIncreasePrct: !isNaN(lastPortfolioIncreasePrct) && previousBalance !== 0 ? Number(lastPortfolioIncreasePrct.toFixed(4)) : 0,
	};

	return portfolioWrapper;
};

const constructPortfolioSnapshot = (user: api.STUserPublicData): api.STPortfolioSnapshot => {
	// from fetched prices calculate how much invested money the user have
	const portfolioInvested = user.holdings.map((h) => (symbolPriceMap.get(h.symbol) ?? 0) * h.units).reduce((a, b) => a + b, 0);

	const portfolioSnapshot: api.STPortfolioSnapshot = {
		portfolioInvested,
		portfolioCash: user.portfolio.portfolioCash,
		date: admin.firestore.Timestamp.now().toDate().toISOString(),
	};
	return portfolioSnapshot;
};

const getPortfolioRisk = async (user: api.STUserPublicData, isLastUser = false): Promise<api.STPortfolioRiskCalculations | null> => {
	const portfolioInvested = user.holdings.map((h) => (symbolPriceMap.get(h.symbol) ?? 0) * h.units).reduce((a, b) => a + b, 0);
	// can be 0 - then error for division
	if (!portfolioInvested) {
		return null;
	}

	const symbols = user.holdings.map((h) => h.symbol);
	const weights = user.holdings.map((h) => (1 / portfolioInvested) * ((symbolPriceMap.get(h.symbol) ?? 0) * h.units));

	const result = await getPortfolioRiskCustomRest(symbols, weights, isLastUser);

	return result;
};
