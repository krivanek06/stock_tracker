
//import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

//admin.initializeApp(functions.config().firebase);

const serviceAccount = require('../firebase_key.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://stocktrackertest-e51fc.firebaseio.com"
});



//import * as user from './st-user/st-user.function';
// import * as marketDailyOverview from './st-market/updateMarketDailyOverview';
import {updateMarketDailyOverview} from './st-market/updateMarketDailyOverview';
import {updateMarketHistoricalOverview} from './st-market/updateMarketHistoricalOverview';


export const functionUpdateMarketDailyOverview = updateMarketDailyOverview;
export const functionUpdateMarketHistoricalOverview = updateMarketHistoricalOverview;
/*
module.exports = {
    ...updateMarketDailyOverview,
    ...updateMarketHistoricalOverview,
};*/


//export const  updateGroupIdsForUsers = user.updateGroupIdsForUsers;
