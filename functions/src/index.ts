
//import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const serviceAccount = require('../firebase_key.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://stocktrackertest-e51fc.firebaseio.com"
});

import {updateMarketDailyOverview} from './st-market/updateMarketDailyOverview';
import {updateMarketHistoricalOverview} from './st-market/updateMarketHistoricalOverview';
import {updateStockPrices} from './st-stocks/updateStockPrices';


export const functionUpdateMarketDailyOverview = updateMarketDailyOverview;
export const functionUpdateMarketHistoricalOverview = updateMarketHistoricalOverview;
export const functionUpdateStockPrices = updateStockPrices;
