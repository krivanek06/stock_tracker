import {ApolloError} from "apollo-server";
import * as admin from "firebase-admin";
import * as api from 'stock-tracker-common-interfaces';
import {stockDataAPI} from "../environment";
import {getCurrentIOSDate} from "../st-shared/st-shared.functions";
import {convertToSTMarketChartDataResultCombined} from "./st-market.functions";
import {getStMarketAllCategoriesLocal, searchStMarketDataLocal} from "../later_removable";

export const querySTMarketHistoryOverview = async (): Promise<api.STMarketHistoryOverview> => {
    try {
        console.time(); // TODO DELETE
        // check if already saved
        const dataDoc = await admin.firestore()
            .collection(api.ST_SHARED_ENUM.ST_COLLECTION)
            .doc(api.ST_SHARED_ENUM.MARKET_HISTORY_OVERVIEW)
            .get();

        // DELETE PREVIOUS DATA
        /*const docs = await admin.firestore().collection('quandl').get();
        console.log(`start delete ${docs.docs.length}`);
        for await (const d of docs.docs){
            await d.ref.delete();
        }
        console.log('deleted quandl');*/

        let docData = dataDoc.data() as api.STMarketHistoryOverview;

        // not exist, fetch from API
        if (!docData) {
            docData = {};
            const categories = await getStMarketAllCategoriesLocal(true);

            const resolvedPromises = await Promise.all(categories.categories.map(c => getSTMarketDatasetKeyCategory(c)));
            // UNCOMMENT ONLY WHEN INIT DATA INTO DB
            /*const resolvedPromises = [];
            for await (const c of categories.categories) {
                resolvedPromises.push(await getSTMarketDatasetKeyCategory(c));
            }*/

            resolvedPromises.forEach(promise => {
                docData[promise.key] = promise.result;
            });
            docData['lastUpdate'] = getCurrentIOSDate();

            // save
            admin.firestore()
                .collection(api.ST_SHARED_ENUM.ST_COLLECTION)
                .doc(api.ST_SHARED_ENUM.MARKET_HISTORY_OVERVIEW)
                .set(docData);

        }

        // convert into chart format -> [timestamp, value]
        const result = {};
        for (const [key, value] of Object.entries(docData)) {
            if (key !== 'lastUpdate') {
                result[key] = [];
                for (const v of value) {
                    result[key].push(convertToSTMarketChartDataResultCombined(v));
                }
            }
        }
        result['lastUpdate'] = getCurrentIOSDate();

        console.timeEnd(); // TODO DELETE
        return result;
    } catch (error) {
        throw new ApolloError(error);
    }
};


export const queryStMarketAllCategories = async (): Promise<api.STMarketDatasetKeyCategories> => {
    try {
        return await getStMarketAllCategoriesLocal(false);
    } catch (error) {
        throw new ApolloError(error);
    }
};


export const queryStMarketData = async (key: string): Promise<api.STMarketChartDataResultCombined> => {
    try {
        const data = await querySTMarketChartDataResultCombined(key);
        return convertToSTMarketChartDataResultCombined(data);
    } catch (error) {
        throw new ApolloError(error);
    }
};

export const queryStMarketCalendarEvents = async (date: string): Promise<api.StMarketCalendarEvents> => {
    try {
        const data = await global.fetch(`${stockDataAPI}/search/calendar_events?date=${date}`);
        return data.json();
    } catch (error) {
        throw new ApolloError(error);
    }
};

export const queryStMarketCalendarEventsEarnings = async (date: string): Promise<api.StMarketCalendarEventsEarnings> => {
    try {
        const data = await global.fetch(`${stockDataAPI}/search/calendar_events_earnings?date=${date}`);
        return data.json();
    } catch (error) {
        throw new ApolloError(error);
    }
};


export const querySTMarketSymbolHistoricalChartData = async (symbol: string, period: string): Promise<api.STMarketSymbolHistoricalChartData> => {
    try {
        const data = await global.fetch(`${stockDataAPI}/chart_data/historical_data?symbol=${symbol}&period=${period}`);
        return data.json();
    } catch (error) {
        throw new ApolloError(error);
    }
}


// ------------- PRIVATE ---------------

const getSTMarketDatasetKeyCategory = async (category: api.STMarketDatasetKeyCategory):
    Promise<{ result: api.STMarketChartDataResultAPI[], key: string }> => {

    try {
        const result: api.STMarketChartDataResultAPI[] = [];

        for await (const categoryData of category.data) {
            const data = await querySTMarketChartDataResultCombined(categoryData.documentKey);
            const slicedData = {
                ...data,
                data: data.data.slice(-30),
                timestamp: data.timestamp.slice(-30)
            } as api.STMarketChartDataResultAPI;
            result.push(slicedData);
        }
        return {result, key: category.key};
    } catch (error) {
        throw new ApolloError(error);
    }
};

const querySTMarketChartDataResultCombined = async (documentKey: string): Promise<api.STMarketChartDataResultAPI> => {
    try {
        // check if document exists in firestore
        const dataDoc = await admin.firestore().collection('quandl').doc(documentKey).get();
        let firebaseData = await dataDoc.data() as api.STMarketChartDataResultAPI;

        // does not exists or too old data
        if (!firebaseData) {
            const apiPromise = await searchStMarketDataLocal(documentKey);
            const apiData = apiPromise['result'] as api.STMarketChartDataResultAPI[];

            // getting multiple data, save in separated documents
            for await (const data of apiData) {
                await admin.firestore().collection('quandl').doc(data.documentKey).set(data);
            }

            // from multiple result find the right one
            firebaseData = apiData.find(s => s.documentKey === documentKey);
        }

        return firebaseData;

    } catch (error) {
        throw new ApolloError(error + `, documentKey: ${documentKey}`);
    }
};
