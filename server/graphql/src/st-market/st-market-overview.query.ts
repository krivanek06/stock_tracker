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
        if (!data) {
            data = {
                sp500Stats: api.ST_MARKET_FETCH_SP500_FETCH.MODIFY_DATA_FROM_ALL_CATEGORY_PARTIAL(await querySTMarketSP500AllCategory()),
                bonds: null,
                exports: null,
                investorSentiment: null,
                treasuryYield: null
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
}
