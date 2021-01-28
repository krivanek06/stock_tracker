import {ApolloError} from "apollo-server";
import * as admin from "firebase-admin";
import * as api from 'stock-tracker-common-interfaces';


export const querySTMarketHistoryOverview = async (): Promise<api.STMarketHistoryOverview> => {
    try {
        // check if already saved
        const dataDoc = await admin.firestore()
             .collection(api.ST_SHARED_ENUM.ST_COLLECTION)
             .doc(api.ST_SHARED_ENUM.MARKET_HISTORY_OVERVIEW)
             .get();

         let docData = dataDoc.data() as api.STMarketHistoryOverview;

         // not exist, fetch from API
         if (!docData) {
             docData = await api.getStMarketOverview();

             admin.firestore()
                 .collection(api.ST_SHARED_ENUM.ST_COLLECTION)
                 .doc(api.ST_SHARED_ENUM.MARKET_HISTORY_OVERVIEW)
                 .set(docData)
         }
        return docData;
    } catch (error) {
        throw new ApolloError(error);
    }
};


export const queryStMarketAllCategories = async (): Promise<api.STMarketDatasetKeyCategories> => {
    try {
        return await api.getStMarketAllCategories();
    } catch (error) {
        throw new ApolloError(error);
    }
};


export const queryMultipleStMarketData = async (key: string): Promise<api.STMarketChartDataResultSearch> => {
    try {
        return await api.searchMultilpleStMarketData(key);
    } catch (error) {
        throw new ApolloError(error);
    }
};

export const queryStMarketData = async (key: string): Promise<api.STMarketChartDataResultCombined> => {
    try {
        return await api.searchStMarketData(key);
    } catch (error) {
        throw new ApolloError(error);
    }
};
