import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as moment from 'moment';
import * as api from 'stock-tracker-common-interfaces';
import { getAllGroups, getAllUserWithExistingHoldingsFirebase, getGroupsHistoricalData, getUserHistoricalData } from '../../api';
import { convertSTGroupAllDataTOSTGroupIndentification, convertSTUserPublicDataToSTUserIndentificationWithPortfolio } from '../../util';

/* 

Get all users & groups 

Highest portfolio
- calculate users highest portfolio and save it into uses collection and public.hall_of_fame
- calculate groups highest portfolio and save it into groups collection and public.hall_of_fame

Weekly portfolio
- calculate users weekly portfolio gains
- calculate groups weekly portfolio gains

*/

type EntityWithPortfolio = api.STUserPublicData | api.STGroupAllData;
type EntityWithPortfolioHistoricalData = api.STUserHistoricalData | api.STGroupHistoricalData;

// TODO test ME !!!!!

// functions.pubsub.topic('updateStocksSummary').onPublish(async () => {
export const calculateHallOfFame = functions.https.onRequest(async (): Promise<void> => {
	const startTime = new Date().getTime();
	console.log(`Started updating at ${admin.firestore.Timestamp.now().toDate()}`);

	try {
		// get users
		console.log('Getting users & sorting by highest portfolio');
		const users = await getAllUserWithExistingHoldingsFirebase();
		console.log(`Received users: ${users.length}`);
		const usersHighestPortfolio = orderByHighestPortfolio<api.STUserPublicData>(users);

		// get groups
		console.log('Getting groups & sorting by highest portfolio');
		const groups = await getAllGroups();
		console.log(`Received groups: ${groups.length}`);
		const groupsHighestPortfolio = orderByHighestPortfolio<api.STGroupAllData>(groups);

		// update users & groups
		console.log('Updating users & groups');
		await updateHighestPortfolioOrder(usersHighestPortfolio, 'users');
		console.log('Updated users');
		await updateHighestPortfolioOrder(groupsHighestPortfolio, 'groups');
		console.log('Updated groups');

		// get hall of fame
		console.log('Calculate hall of fame for users');
		const [userHighestPortfolio, userWeeklyBestGainsPrct, userWeeklyWorstGainsPrct] = await entitiesGetSTHallOfFameUsers<
			api.STUserPublicData,
			Promise<api.STUserHistoricalData>
		>(usersHighestPortfolio, getUserHistoricalData);

		console.log('Calculate hall of fame for groups');
		const [groupHighestPortfolio, groupWeeklyBestGainsPrct, groupWeeklyWorstGainsPrct] = await entitiesGetSTHallOfFameUsers<
			api.STGroupAllData,
			Promise<api.STGroupHistoricalData>
		>(groupsHighestPortfolio, getGroupsHistoricalData);

		// get only 15 result of each
		console.log('Convert hall of fame entities to identification');
		const usersSTHallOfFameUsers: api.STHallOfFameUsers = {
			total: users.length,
			lastUpdateDate: new Date().toISOString().toString(),
			highestPortfolio: userHighestPortfolio.map((u) => convertSTUserPublicDataToSTUserIndentificationWithPortfolio(u)),
			weeklyBestGainsPrct: userWeeklyBestGainsPrct.map((u) => convertSTUserPublicDataToSTUserIndentificationWithPortfolio(u)),
			weeklyWorstGainsPrct: userWeeklyWorstGainsPrct.map((u) => convertSTUserPublicDataToSTUserIndentificationWithPortfolio(u)),
		} as api.STHallOfFameUsers;

		const groupsSTHallOfFameUsers: api.STHallOfFameGroups = {
			total: groups.length,
			lastUpdateDate: new Date().toISOString().toString(),
			highestPortfolio: groupHighestPortfolio.map((u) => convertSTGroupAllDataTOSTGroupIndentification(u)),
			weeklyBestGainsPrct: groupWeeklyBestGainsPrct.map((u) => convertSTGroupAllDataTOSTGroupIndentification(u)),
			weeklyWorstGainsPrct: groupWeeklyWorstGainsPrct.map((u) => convertSTGroupAllDataTOSTGroupIndentification(u)),
		} as api.STHallOfFameGroups;

		console.log('update hall of fame database');
		await updateHallOfFameEntity('users', usersSTHallOfFameUsers);
		await updateHallOfFameEntity('groups', groupsSTHallOfFameUsers);
	} catch (error) {
		console.log(`Error executing calculateHallOfFame', error:`, error);
		console.log('========================');
	}
	console.log(`Completed updating at ${admin.firestore.Timestamp.now().toDate()}, took ${(new Date().getTime() - startTime) / 1000} sec.`);
});

// ----------------------------------------
// USERS
/* 
    return Desc. order by highest portfolio
*/
const orderByHighestPortfolio = <T extends EntityWithPortfolio>(entity: T[]): T[] => {
	return entity.sort(
		(a, b) =>
			b.portfolio.lastPortfolioSnapshot.portfolioInvested +
			b.portfolio.lastPortfolioSnapshot.portfolioCash -
			(a.portfolio.lastPortfolioSnapshot.portfolioInvested + a.portfolio.lastPortfolioSnapshot.portfolioCash)
	);
};

/* 
    for each user update its order is users collection
*/
const updateHighestPortfolioOrder = async (entities: EntityWithPortfolio[], collection: 'users' | 'groups'): Promise<void> => {
	const total = entities.length;
	for (let i = 0; i < total; i++) {
		const entity = entities[i];
		try {
			const highestPortfolio: api.STRankHighestPortfolio = {
				rankHighestPortfolioPlace: i + 1,
				rankHighestPortfolio: entity.portfolio.lastPortfolioSnapshot,
				total,
				date: new Date().toISOString(),
				dateEvaluation: `Week ${moment().format('W')}, ${moment().format('YYYY')}`,
			};
			const rank: Partial<api.STRank> = {
				highestPortfolio,
			};

			await admin.firestore().collection(collection).doc(entity.id).set(
				{
					rank,
				},
				{ merge: true }
			);
		} catch (error) {
			console.log(`Error usersUpdateHighestPortfolioOrder index: ${i}, entity: ${entity.id}, collection: ${collection}', error:`, error);
			console.log('========================');
		}
	}
};
// const usersUpdateWeeklyGains = async (): Promise<void> => {};

/* 
    return order [Highest portfolio, biggest weekly gains, biggest weekly losses]
    to save into hall of fame
*/
const entitiesGetSTHallOfFameUsers = async <T extends EntityWithPortfolio, K extends Promise<EntityWithPortfolioHistoricalData>>(
	entities: T[],
	historicalDataFunction: (entity: T) => K
): Promise<[T[], T[], T[]]> => {
	const entitiesHistoricalDataRefs = entities.map((u) => historicalDataFunction(u));
	const entitiesHistoricalData = await Promise.all(entitiesHistoricalDataRefs);

	// get only those where one week progress can be counted
	const entitiesHistoricalDataUseful = entitiesHistoricalData.filter((data) => data.portfolioSnapshots.length >= 7);

	// order them
	const calculatePortfolioIncreasePrct = (latestPortfolio: api.STPortfolioSnapshot, weekSoonerPortfolio: api.STPortfolioSnapshot): number => {
		const previousBalance = weekSoonerPortfolio.portfolioCash + weekSoonerPortfolio.portfolioInvested;
		const currentBalance = latestPortfolio.portfolioCash + latestPortfolio.portfolioInvested;
		const lastPortfolioIncreasePrct = Number((currentBalance - previousBalance) / previousBalance);
		return lastPortfolioIncreasePrct;
	};
	const entitiesBiggestWeeklyGains = entitiesHistoricalDataUseful.sort(
		(a, b) =>
			calculatePortfolioIncreasePrct(b.portfolioSnapshots[0], b.portfolioSnapshots[6]) -
			calculatePortfolioIncreasePrct(a.portfolioSnapshots[0], a.portfolioSnapshots[6])
	);

	// get data
	const highestPortfolio = entities.slice(0, 15);
	const weeklyBestGainsPrct = entitiesBiggestWeeklyGains.slice(0, 15).map((u) => entities.find((user) => user.id === u.id)) as T[];
	const weeklyWorstGainsPrct = entitiesBiggestWeeklyGains
		.reverse()
		.slice(0, 15)
		.map((u) => entities.find((user) => user.id === u.id)) as T[];

	return [highestPortfolio, weeklyBestGainsPrct, weeklyWorstGainsPrct];
};

// Hall of fame
const updateHallOfFameEntity = async <STHallOfFameKey extends keyof api.STHallOfFame>(
	key: STHallOfFameKey,
	data: api.STHallOfFameUsers | api.STHallOfFameGroups
): Promise<void> => {
	await admin
		.firestore()
		.collection('public')
		.doc(api.ST_PUBLIC_DOC.HALL_OF_FAME)
		.set(
			{
				[key]: data,
			},
			{ merge: true }
		);
};
