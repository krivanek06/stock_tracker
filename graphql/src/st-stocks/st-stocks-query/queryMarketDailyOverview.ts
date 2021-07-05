import { ApolloError } from 'apollo-server';
import * as api from 'stock-tracker-common-interfaces';
import * as admin from "firebase-admin";

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
