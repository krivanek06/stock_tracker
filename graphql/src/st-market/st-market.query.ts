import { getEtfHolders, getEtfSectorWeight, getEtfCountryWeight, getCompanyQuoteBatch, stockScreener } from './../api';
import { ApolloError } from "apollo-server";
import * as admin from "firebase-admin";
import * as moment from 'moment';
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


export const queryMarketDailyOverview = async (): Promise<api.STMarketDailyOverview> => {
    try {
        const dailyInfoDoc = await admin.firestore()
            .collection(api.ST_SHARED_ENUM.ST_COLLECTION)
            .doc(api.ST_SHARED_ENUM.MARKET_DAILY_OVERVIEW)
            .get();

        const dailyInfoData = dailyInfoDoc.data() as api.STMarketDailyOverview;

        return dailyInfoData;
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


export const queryEtfDocument = async(etfName: string): Promise<api.STMarketEtfDocument> => {
    try {
        const etfDoc = await admin.firestore().collection('etfs').doc(etfName).get();
        const etfData = etfDoc.data() as api.STMarketEtfDocument;

        if(!!etfData && moment(etfData.lastUpdate).isSame(new Date(), 'days')){
            return etfData;
        }

        console.log(`Reloading data for etf: ${etfName}`);

        // reload
        const etfHolders = await getEtfHolders(etfName);
        const etfSectorWeight = await getEtfSectorWeight(etfName);
        const etfCountryWeight = await getEtfCountryWeight(etfName);
        
        const newEtfDate: api.STMarketEtfDocument = {
            id: etfName,
            etfCountryWeight,
            etfHolders,
            etfSectorWeight,
            lastUpdate: admin.firestore.Timestamp.now().toDate().toISOString()
        }
        
        // save
        await admin.firestore().collection('etfs').doc(etfName).set(newEtfDate);

        return newEtfDate;

    } catch (error) {
        throw new ApolloError(error);
    }
}