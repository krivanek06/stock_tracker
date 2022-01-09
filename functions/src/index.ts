//import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { databaseAdjustment } from './database-adjustment';
import { IS_PRODUCTION } from './environment';
import { updateGroupStats } from './st-group/updateGroupStats';
import { updateMarketDailyOverview } from './st-market/updateMarketDailyOverview';
import { updateMarketHistoricalOverview } from './st-market/updateMarketHistoricalOverview';
import { createUserPortfolioSnapshot } from './st-portfolio/createUserPortfolioSnapshot';
import { calculateHallOfFame } from './st-public/hall-of-fame';
import { updateStocksSummary } from './st-stock/updateStocksSummary';

const serviceAccount = IS_PRODUCTION ? require('../firebase_key_prod.json') : require('../firebase_key.json');
const databaseURL = IS_PRODUCTION ? 'https://stock-tracker-prod.firebaseio.com' : 'https://stocktrackertest-e51fc.firebaseio.com';

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: databaseURL,
});

export const functionUpdateMarketDailyOverview = updateMarketDailyOverview;
export const functionUpdateMarketHistoricalOverview = updateMarketHistoricalOverview;
export const functionCreateUserPortfolioSnapshot = createUserPortfolioSnapshot;
export const functionUpdateGroupStats = updateGroupStats;
export const functionUpdateStocksSummary = updateStocksSummary;
export const functionCalculateHallOfFame = calculateHallOfFame;

// test
export const functionDatabaseAdjustment = databaseAdjustment;
