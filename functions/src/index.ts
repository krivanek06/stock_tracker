//import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { updateGroupStats } from './st-group/updateGroupStats';
import { updateMarketDailyOverview } from './st-market/updateMarketDailyOverview';
import { updateMarketHistoricalOverview } from './st-market/updateMarketHistoricalOverview';
import { createUserPortfolioSnapshot } from './st-portfolio/createUserPortfolioSnapshot';

const serviceAccount = require('../firebase_key.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://stocktrackertest-e51fc.firebaseio.com',
});

export const functionUpdateMarketDailyOverview = updateMarketDailyOverview;
export const functionUpdateMarketHistoricalOverview = updateMarketHistoricalOverview;
export const functionCreateUserPortfolioSnapshot = createUserPortfolioSnapshot;
export const functionUpdateGroupStats = updateGroupStats;
