import {ApolloError} from "apollo-server";
import * as admin from "firebase-admin";
import * as api from 'stock-tracker-common-interfaces';


export const querySTMarketOverviewPartialData = async (): Promise<api.STMarketOverviewPartialData> => {
    try {
        // check if already saved
        const dataDoc = await admin.firestore()
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
        }

        return data;
    } catch (error) {
        throw new ApolloError(error);
    }
};

export const querySTMarketChartData = async (document: api.ST_MARKET_FIREBASE_DOCUMENTS_CHART_DATA_ENUM): Promise<api.STMarketChartData> => {
    try {
        // check if already saved
        const dataDoc = await admin.firestore().collection(api.ST_SHARED_ENUM.ST_STATIC_DATA).doc(document).get();

        let data = dataDoc.data() as api.STMarketChartData;

        // not exist, fetch from API
        if (!data) {
            data = await api.ST_MARKET_FETCH.FETCH_ST_MARKET_CHART_DATA(document);
            admin.firestore().collection(api.ST_SHARED_ENUM.ST_STATIC_DATA).doc(document).set(data);
        }
        return data;
    } catch (error) {
        throw new ApolloError(error);
    }
};

export const querySTMarketExports = async (): Promise<api.STMarketExports> => {
    try {
        // check if already saved
        const dataDoc = await admin.firestore()
            .collection(api.ST_SHARED_ENUM.ST_STATIC_DATA)
            .doc(api.ST_MARKET_FIREBASE_DOCUMENTS_ENUM.market_exports_all_data)
            .get();

        let data = dataDoc.data() as api.STMarketExports;

        // not exist, fetch from API
        if (!data) {
            data = await api.ST_MARKET_IMPORT_EXPORT_FETCH.FETCH_DATA_FROM_ALL_EXPORTS();
            admin.firestore()
                .collection(api.ST_SHARED_ENUM.ST_STATIC_DATA)
                .doc(api.ST_MARKET_FIREBASE_DOCUMENTS_ENUM.market_exports_all_data)
                .set(data);
        }
        return data;
    } catch (error) {
        throw new ApolloError(error);
    }
};

export const querySTMarketBonds = async (): Promise<api.STMarketBonds> => {
    try {
        // check if already saved
        const dataDoc = await admin.firestore()
            .collection(api.ST_SHARED_ENUM.ST_STATIC_DATA)
            .doc(api.ST_MARKET_FIREBASE_DOCUMENTS_ENUM.market_bonds_all_data)
            .get();

        let data = dataDoc.data() as api.STMarketBonds;

        // not exist, fetch from API
        if (!data) {
            data = await api.ST_MARKET_FETCH_BONDS_FETCH.FETCH_DATA_FROM_ALL_CATEGORY();
            admin.firestore()
                .collection(api.ST_SHARED_ENUM.ST_STATIC_DATA)
                .doc(api.ST_MARKET_FIREBASE_DOCUMENTS_ENUM.market_bonds_all_data)
                .set(data);
        }
        return data;
    } catch (error) {
        throw new ApolloError(error);
    }
};

export const querySTMarketSP500AllCategory = async (): Promise<api.STMarketSP500AllCategory> => {
    try {
        // check if already saved
        const dataDoc = await admin.firestore()
            .collection(api.ST_SHARED_ENUM.ST_STATIC_DATA)
            .doc(api.ST_MARKET_FIREBASE_DOCUMENTS_ENUM.market_sp500_all_category_data)
            .get();

        let data = dataDoc.data() as api.STMarketSP500AllCategory;

        // not exist, fetch from API
        if (!data) {
            data = await api.ST_MARKET_FETCH_SP500_FETCH.FETCH_DATA_FROM_ALL_CATEGORY();
            admin.firestore()
                .collection(api.ST_SHARED_ENUM.ST_STATIC_DATA)
                .doc(api.ST_MARKET_FIREBASE_DOCUMENTS_ENUM.market_sp500_all_category_data)
                .set(data);
        }
        return data;

    } catch (error) {
        throw new ApolloError(error);
    }
};
