//import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { DATABASE_URL } from './environment';
import { updateGroupStats } from './st-group/updateGroupStats';
import { updateMarketDailyOverview } from './st-market/updateMarketDailyOverview';
import { updateMarketHistoricalOverview } from './st-market/updateMarketHistoricalOverview';
import { createUserPortfolioSnapshot } from './st-portfolio/createUserPortfolioSnapshot';
import { calculateHallOfFame } from './st-public/hall-of-fame';

const serviceAccount = require('../firebase_key.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: DATABASE_URL,
});

export const functionUpdateMarketDailyOverview = updateMarketDailyOverview;
export const functionUpdateMarketHistoricalOverview = updateMarketHistoricalOverview;
export const functionCreateUserPortfolioSnapshot = createUserPortfolioSnapshot;
export const functionUpdateGroupStats = updateGroupStats;
export const functionCalculateHallOfFame = calculateHallOfFame;
