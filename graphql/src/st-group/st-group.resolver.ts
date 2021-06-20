import { ApolloError } from 'apollo-server';
import { Context } from './../st-shared/st-shared.interface';
import * as api from "stock-tracker-common-interfaces";
import * as admin from "firebase-admin";

/**
 * Return top 3 members from each group and 4th member will be user who makes query ifhe is part of the group
 */
const resolveTopMembers = async(stGroupAllData: api.STGroupAllData, {requesterUserId}: Context) => {
    console.log('requesterUserId', requesterUserId)
    return [];
}

const resolveGroupHistoricalData = async({groupId}: api.STGroupAllData): Promise<api.STGroupHistoricalData> => {
    try {
        const historicalDataDoc = await admin.firestore()
                .collection(api.ST_GROUP_COLLECTION_GROUPS)
                .doc(groupId)
                .collection(api.ST_GROUP_COLLECTION_MORE_INFORMATION)
                .doc(api.ST_GROUP_COLLECTION_HISTORICAL_DATA)
                .get();

        return historicalDataDoc.data() as api.STGroupHistoricalData;
    } catch (error) {
        throw new ApolloError(error);
    }
}



export const stGroupResolvers = {
    STGroupAllData: {
        topMembers: async (stGroupAllData: api.STGroupAllData, _, context: Context) => await resolveTopMembers(stGroupAllData, context),
        groupHistoricalData: async (stGroupAllData: api.STGroupAllData) => await resolveGroupHistoricalData(stGroupAllData)
    }
};
