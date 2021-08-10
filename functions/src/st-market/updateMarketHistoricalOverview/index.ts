import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as api from 'stock-tracker-common-interfaces';
import { stockDataAPI } from './../../environment';

const SEARCH_ENDPOINT = `${stockDataAPI}/search`;
const fetch = require('node-fetch');

export const updateMarketHistoricalOverview = functions.pubsub.topic('updateMarketHistoricalOverview').onPublish(async () => {
  console.log(`Started updating at ${admin.firestore.Timestamp.now().toDate()}`);

  const res = await fetch(`${SEARCH_ENDPOINT}/market_history_overview`);
  const data = (await res.json()) as api.STMarketHistoryOverview;

  data['lastUpdate'] = admin.firestore.Timestamp.now().toDate().toISOString();

  await admin.firestore().collection(api.ST_SHARED_ENUM.ST_COLLECTION).doc(api.ST_SHARED_ENUM.MARKET_HISTORY_OVERVIEW).set(data);

  console.log(`Completed updating at ${admin.firestore.Timestamp.now().toDate()}`);
});
