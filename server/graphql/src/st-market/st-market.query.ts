import {ApolloError} from "apollo-server";
import * as admin from "firebase-admin";
import * as api from 'stock-tracker-common-interfaces';


export const querySTMarketOverview = async (): Promise<api.STMarketOverviewPartialData> => {
    try {
        // check if already saved
        /* const dataDoc = await admin.firestore()
             .collection(api.ST_SHARED_ENUM.ST_STATIC_DATA)
             .doc(api.ST_MARKET_FIREBASE_DOCUMENTS_ENUM.market_overview)
             .get();

         let data = dataDoc.data() as api.STMarketOverviewPartialData;

         // not exist, fetch from API
         if (!data || !data.bonds || !data.exports || !data.investorSentiment || !data.sp500Stats || !data.treasuryYield) {
             data = {
                 sp500Stats: api.ST_MARKET_FETCH_SP500_FETCH.MODIFY_DATA_FROM_ALL_CATEGORY_PARTIAL(await querySTMarketSP500AllCategory()),
                 bonds: api.ST_MARKET_FETCH_BONDS_FETCH.MODIFY_DATA_FROM_ALL_CATEGORY_PARTIAL(await querySTMarketBonds()),
                 exports: api.ST_MARKET_IMPORT_EXPORT_FETCH.MODIFY_DATA_FROM_ALL_EXPORTS_PARTIAL(await querySTMarketExports()),
                 investorSentiment: api.getOnlyPartialData(await querySTMarketChartData(api.ST_MARKET_FIREBASE_DOCUMENTS_CHART_DATA_ENUM.market_investor_sentiment_data), 30),
                 treasuryYield: api.getOnlyPartialData(await querySTMarketChartData(api.ST_MARKET_FIREBASE_DOCUMENTS_CHART_DATA_ENUM.market_trasury_yield_curve_rates_data), 30)
             };

             admin.firestore()
                 .collection(api.ST_SHARED_ENUM.ST_STATIC_DATA)
                 .doc(api.ST_MARKET_FIREBASE_DOCUMENTS_ENUM.market_overview)
                 .set(data)
         }*/
        const data = await api.getStMarketOverview();
        return data;
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
