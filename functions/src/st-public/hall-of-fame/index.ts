import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as moment from 'moment';
import * as api from 'stock-tracker-common-interfaces';
import { getEntityByHighestPortfolio } from '../../api';
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

type EntityIdentification = api.STUserIndentificationWithPortfolio | api.STGroupIdentification;

// functions.pubsub.topic('updateStocksSummary').onPublish(async () => {
export const calculateHallOfFame = functions.https.onRequest(async (): Promise<void> => {
	const startTime = new Date().getTime();
	console.log(`Started updating at ${admin.firestore.Timestamp.now().toDate()}`);

	try {
		// get users & groups
		console.log('Getting users & groups');
		const usersByHighestPortfolio = await getEntityByHighestPortfolio<api.STUserPublicData>('users');
		const groupsByHighestPortfolio = await getEntityByHighestPortfolio<api.STGroupAllData>('groups');
		console.log(`Received users: ${usersByHighestPortfolio.length}, groups: ${groupsByHighestPortfolio.length}`);

		// update users & groups
		console.log('Updating users & groups');
		await updateHighestPortfolioOrder(usersByHighestPortfolio, 'users');
		console.log('Updated users');
		await updateHighestPortfolioOrder(groupsByHighestPortfolio, 'groups');
		console.log('Updated groups');

		// get hall of fame users
		console.log('Calculate hall of fame for users');
		const topUsersByHighestPortfolio = usersByHighestPortfolio.slice(0, 9);
		const usersHallOfFame = await getEntityHallOfFame(
			usersByHighestPortfolio.length,
			topUsersByHighestPortfolio,
			'users',
			convertSTUserPublicDataToSTUserIndentificationWithPortfolio
		);
		console.log('Calculate hall of fame for users, received: usersHallOfFame');
		await updateHallOfFameEntity('users', usersHallOfFame);

		// hall of fame groups
		console.log('Calculate hall of fame for groups');
		const topGroupsByHighestPortfolio = groupsByHighestPortfolio.slice(0, 9);
		const groupsHallOfFame = await getEntityHallOfFame(
			groupsByHighestPortfolio.length,
			topGroupsByHighestPortfolio,
			'groups',
			convertSTGroupAllDataTOSTGroupIndentification
		);
		console.log('Calculate hall of fame for groups, received: groupsHallOfFame');
		await updateHallOfFameEntity('groups', groupsHallOfFame);
	} catch (error) {
		console.log(`Error executing calculateHallOfFame', error:`, error);
		console.log('========================');
	}
	console.log(`Completed updating at ${admin.firestore.Timestamp.now().toDate()}, took ${(new Date().getTime() - startTime) / 1000} sec.`);
});

// ----------------------------------------

/* 
	for users or groups returns 'STHallOfFameEntity'
*/
const getEntityHallOfFame = async <T extends EntityIdentification>(
	totalEntities: number,
	entitiesHighestPortfolio: api.STPortfolioEntity[],
	collection: api.STPortfolioEntityType,
	identificationFunction: (entity?: T | null) => api.STPortfolioEntity | null
): Promise<api.STHallOfFameEntity<api.STPortfolioEntity>> => {
	const bestGainers = await getSTHallOfFameEntityGains(collection, 'desc', identificationFunction);
	const wortGainers = await getSTHallOfFameEntityGains(collection, 'asc', identificationFunction);
	return {
		bestGainers,
		wortGainers,
		total: totalEntities,
		highestPortfolio: entitiesHighestPortfolio,
		lastUpdateDate: new Date().toISOString().toString(),
	};
};

/* 
	For users or groups return STHallOfFameEntityGains,
	return best or worts entities based on 'order'

*/
const getSTHallOfFameEntityGains = async <T extends EntityIdentification>(
	collection: api.STPortfolioEntityType,
	order: 'asc' | 'desc',
	identificationFunction: (entity?: T | null) => api.STPortfolioEntity | null
): Promise<api.STHallOfFameEntityGains<api.STPortfolioEntity>> => {
	const day_1_change_prct = await getEntityIdentification<T>(collection, 'day_1_change', 'portfolioIncreasePrct', order, identificationFunction);
	const day_1_change_number = await getEntityIdentification<T>(collection, 'day_1_change', 'portfolioIncreaseNumber', order, identificationFunction);

	const week_1_change_prct = await getEntityIdentification<T>(collection, 'week_1_change', 'portfolioIncreasePrct', order, identificationFunction);
	const week_1_change_number = await getEntityIdentification<T>(
		collection,
		'week_1_change',
		'portfolioIncreaseNumber',
		order,
		identificationFunction
	);
	const week_2_change_prct = await getEntityIdentification<T>(collection, 'week_2_change', 'portfolioIncreasePrct', order, identificationFunction);
	const week_2_change_number = await getEntityIdentification<T>(
		collection,
		'week_2_change',
		'portfolioIncreaseNumber',
		order,
		identificationFunction
	);
	const week_3_change_prct = await getEntityIdentification<T>(collection, 'week_3_change', 'portfolioIncreasePrct', order, identificationFunction);
	const week_3_change_number = await getEntityIdentification<T>(
		collection,
		'week_3_change',
		'portfolioIncreaseNumber',
		order,
		identificationFunction
	);

	const month_1_change_prct = await getEntityIdentification<T>(collection, 'month_1_change', 'portfolioIncreasePrct', order, identificationFunction);
	const month_1_change_number = await getEntityIdentification<T>(
		collection,
		'month_1_change',
		'portfolioIncreaseNumber',
		order,
		identificationFunction
	);
	const month_2_change_prct = await getEntityIdentification<T>(collection, 'month_2_change', 'portfolioIncreasePrct', order, identificationFunction);
	const month_2_change_number = await getEntityIdentification<T>(
		collection,
		'month_2_change',
		'portfolioIncreaseNumber',
		order,
		identificationFunction
	);
	const month_3_change_prct = await getEntityIdentification<T>(collection, 'month_3_change', 'portfolioIncreasePrct', order, identificationFunction);
	const month_3_change_number = await getEntityIdentification<T>(
		collection,
		'month_3_change',
		'portfolioIncreaseNumber',
		order,
		identificationFunction
	);
	const month_6_change_prct = await getEntityIdentification<T>(collection, 'month_6_change', 'portfolioIncreasePrct', order, identificationFunction);
	const month_6_change_number = await getEntityIdentification<T>(
		collection,
		'month_6_change',
		'portfolioIncreaseNumber',
		order,
		identificationFunction
	);

	const year_1_change_prct = await getEntityIdentification<T>(collection, 'year_1_change', 'portfolioIncreasePrct', order, identificationFunction);
	const year_1_change_number = await getEntityIdentification<T>(
		collection,
		'year_1_change',
		'portfolioIncreaseNumber',
		order,
		identificationFunction
	);

	return {
		day_1_change_number,
		day_1_change_prct,
		week_1_change_number,
		week_1_change_prct,
		week_2_change_number,
		week_2_change_prct,
		week_3_change_number,
		week_3_change_prct,
		month_1_change_number,
		month_1_change_prct,
		month_2_change_number,
		month_2_change_prct,
		month_3_change_number,
		month_3_change_prct,
		month_6_change_number,
		month_6_change_prct,
		year_1_change_number,
		year_1_change_prct,
	};
};

/*
    for each user update its order is users collection
*/
const updateHighestPortfolioOrder = async (entities: api.STPortfolioEntity[], collection: api.STPortfolioEntityType): Promise<void> => {
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

// Hall of fame
const updateHallOfFameEntity = async <STHallOfFameKey extends keyof api.STHallOfFame, T extends api.STPortfolioEntity>(
	key: STHallOfFameKey,
	data: api.STHallOfFameEntity<T>
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

/* 
	for users or groups return top 5 by portfolio change (prct or number)
*/
const getEntityIdentification = async <T extends EntityIdentification>(
	entityKey: 'users' | 'groups',
	portfolioChangeKey: keyof api.STPortfolioChange,
	portfolioChangeDataKey: keyof api.STPortfolioChangeData,
	order: 'desc' | 'asc',
	identificationFunction: (entity?: T | null) => api.STPortfolioEntity | null
): Promise<api.STPortfolioEntity[]> => {
	const doc = await admin
		.firestore()
		.collection(entityKey)
		.orderBy(`portfolio.portfolioChange.${portfolioChangeKey}.${portfolioChangeDataKey}`, order)
		.limit(5)
		.get();

	const data = doc.docs.map((d) => identificationFunction(d.data() as T) as api.STPortfolioEntity);
	return data;
};
