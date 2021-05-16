import { ApolloError } from "apollo-server";
import * as admin from "firebase-admin";
import * as api from 'stock-tracker-common-interfaces';
import { stockDataAPI } from "../environment";
import { convertToSTMarketChartDataResultCombined } from "./st-market.functions";

export const querySTMarketHistoryOverview = async (): Promise<api.STMarketHistoryOverview> => {
    try {
        // check if already saved
        const dataDoc = await admin.firestore()
            .collection(api.ST_SHARED_ENUM.ST_COLLECTION)
            .doc(api.ST_SHARED_ENUM.MARKET_HISTORY_OVERVIEW)
            .get();


        const docData = dataDoc.data() as api.STMarketHistoryOverview;
        // not exist, fetch from API
       /* if (!docData) {
            await updateStMarketOverview();
            console.log('recursion');
            docData = await querySTMarketHistoryOverview();
        }*/

        // convert into chart format -> [timestamp, value]
        const result = {};
        for (const [key, value] of Object.entries(docData)) {
            if (key !== 'lastUpdate' && key !== 'status') {
                result[key] = [];
                for (const v of value) {
                    result[key].push(convertToSTMarketChartDataResultCombined(v));
                }
            }
        }
        return result;
    } catch (error) {
        throw new ApolloError(error);
    }
};


export const queryStMarketAllCategories = async (): Promise<api.STMarketDatasetKeyCategories> => {
    try {
        const res = await fetch(`${stockDataAPI}/search/quandl_categories?onlyMain=${false}`);
        return res.json();
    } catch (error) {
        throw new ApolloError(error);
    }
};


export const queryStMarketData = async (key: string): Promise<api.STMarketChartDataResultCombined> => {
    try {
         // check if document exists in firestore
         const dataDoc = await admin.firestore().collection('quandl').doc(key).get();
         let firebaseData = await dataDoc.data() as api.STMarketChartDataResultAPI;
 
         // does not exists or too old data
         if (!firebaseData) {
            const resPromise = await fetch(`${stockDataAPI}/chart_data/quandl?documentKey=${key}`);
            const apiData = await resPromise.json() as api.STMarketChartDataResultSearch;
    
            // getting multiple data, save in separated documents
            for await (const data of apiData.result) {
                await admin.firestore().collection('quandl').doc(data.documentKey).set(data);
            }
    
            // from multiple result find the right one
            firebaseData = apiData.result.find(s => s.documentKey === key);
        }

        return convertToSTMarketChartDataResultCombined(firebaseData);
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
/*
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
        return { result, key: category.key };
    } catch (error) {
        throw new ApolloError(error);
    }
};*/
/*
const querySTMarketChartDataResultCombined = async (documentKey: string): Promise<api.STMarketChartDataResultAPI> => {
    try {
        // check if document exists in firestore
        const dataDoc = await admin.firestore().collection('quandl').doc(documentKey).get();
        let firebaseData = await dataDoc.data() as api.STMarketChartDataResultAPI;

        // does not exists or too old data
        if (!firebaseData) {
        const apiPromise = await searchStMarketDataLocal(documentKey); // TODO find by key
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
*/