import {AppOptions} from "firebase-admin";

import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
//import * as user from './st-user/st-user.function';

import * as updateMarketDailyOverview from './st-market/updateMarketDailyOverview';
import * as updateMarketHistoricalOverview from './st-market/updateMarketHistoricalOverview';

admin.initializeApp(functions.firebaseConfig() as AppOptions);



module.exports = {
    ...updateMarketDailyOverview,
    ...updateMarketHistoricalOverview,
};


//export const  updateGroupIdsForUsers = user.updateGroupIdsForUsers;
