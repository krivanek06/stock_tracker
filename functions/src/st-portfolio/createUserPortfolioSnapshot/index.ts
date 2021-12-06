import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as api from 'stock-tracker-common-interfaces';
import { getPortfolioRiskCustomRest, getStockSummaryFirebase, getUsersToUpdatePortfolio } from '../../api';

interface SymbolPriceMap {
	price: number;
	beta: number;
}

const symbolPriceMap: Map<string, SymbolPriceMap> = new Map<string, SymbolPriceMap>();

// functions.https.onRequest(async () => {
//
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

	let counter = 1;
	for await (const user of usersWithHoldings) {
		try {
			console.log(`updating user: ${user.id}, nickname: ${user.nickName}, [${counter} / ${total}]`);
			// not cached holdings => query live price for symbols
			const unsavedSymbols = user.holdings.map((h) => h.symbol).filter((symbol) => !symbolPriceMap.has(symbol));
			await cacheDataForUnsavedSymbols(unsavedSymbols);

			// construct portfolio snapshot and save it into DB
			await savePortfolioSnapShot(user, constructPortfolioSnapshot(user));

			// calculate & save portfolio metrics
			const portfolioRisk = await getPortfolioRisk(user, counter === total);
			await savePortfolioRisk(user, portfolioRisk);

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
	for await (const unsavedSymbol of unsavedSymbols) {
		const summary = await getStockSummaryFirebase(unsavedSymbol);
		const map: SymbolPriceMap = { price: summary?.marketPrice || 0, beta: summary?.beta || 1 };

		symbolPriceMap.set(unsavedSymbol, map);
	}
};
const savePortfolioSnapShot = async ({ id, portfolio }: api.STUserPublicData, portfolioSnapshot: api.STPortfolioSnapshot) => {
	// save into array
	await admin
		.firestore()
		.collection('users')
		.doc(id)
		.collection('more_information')
		.doc('historical_data')
		.set(
			{
				portfolioSnapshots: admin.firestore.FieldValue.arrayUnion(portfolioSnapshot),
			},
			{ merge: true }
		);

	const previousBalance = portfolio.lastPortfolioSnapshot.portfolioCash + portfolio.lastPortfolioSnapshot.portfolioInvested;
	const currentBalance = portfolioSnapshot.portfolioCash + portfolioSnapshot.portfolioInvested;

	const lastPortfolioIncreaseNumber = Number(currentBalance - previousBalance);
	const lastPortfolioIncreasePrct = Number((currentBalance - previousBalance) / previousBalance);

	// save as latest snapshot
	await admin
		.firestore()
		.collection('users')
		.doc(id)
		.set(
			{
				portfolio: {
					lastPortfolioSnapshot: portfolioSnapshot,
					lastPortfolioIncreaseNumber:
						!isNaN(lastPortfolioIncreaseNumber) && previousBalance !== 0 ? Number(lastPortfolioIncreaseNumber.toFixed(2)) : 0,
					lastPortfolioIncreasePrct: !isNaN(lastPortfolioIncreasePrct) && previousBalance !== 0 ? Number(lastPortfolioIncreasePrct.toFixed(4)) : 0,
				},
			} as api.STUserPublicData,
			{ merge: true }
		);
};

const constructPortfolioSnapshot = (user: api.STUserPublicData): api.STPortfolioSnapshot => {
	// from fetched prices calculate how much invested money the user have
	const portfolioInvested = user.holdings.map((h) => (symbolPriceMap.get(h.symbol)?.price ?? 0) * h.units).reduce((a, b) => a + b, 0);

	const portfolioSnapshot: api.STPortfolioSnapshot = {
		portfolioInvested,
		portfolioCash: user.portfolio.portfolioCash,
		date: admin.firestore.Timestamp.now().toDate().toISOString(),
	};
	return portfolioSnapshot;
};

const getPortfolioRisk = async (user: api.STUserPublicData, isLastUser = false): Promise<api.STPortfolioRiskCalculations | null> => {
	const portfolioInvested = user.holdings.map((h) => (symbolPriceMap.get(h.symbol)?.price ?? 0) * h.units).reduce((a, b) => a + b, 0);

	// can be 0 - then error for division
	if (!portfolioInvested) {
		return null;
	}

	const symbols = user.holdings.map((h) => h.symbol);
	const weights = user.holdings.map((h) => (1 / portfolioInvested) * ((symbolPriceMap.get(h.symbol)?.price ?? 0) * h.units));
	const symbolsBeta = user.holdings.map((h) => symbolPriceMap.get(h.symbol)?.beta ?? 1);

	const result = await getPortfolioRiskCustomRest(symbols, weights, symbolsBeta, false);
	return result;
};

const savePortfolioRisk = async (user: api.STUserPublicData, portfolioRisk: api.STPortfolioRiskCalculations | null = null): Promise<void> => {
	await admin.firestore().collection('users').doc(user.id).set(
		{
			portfolioRisk,
		},
		{ merge: true }
	);
};
