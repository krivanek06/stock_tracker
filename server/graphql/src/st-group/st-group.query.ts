import {ApolloError} from "apollo-server";
import * as admin from "firebase-admin";
import * as api from 'stock-tracker-common-interfaces';

export const querySTGroupAllDataByGroupId = async (groupId: string): Promise<api.STGroupAllData> => {
    try {
        const groupDoc = await admin.firestore().collection(api.ST_GROUP_COLLECTION_GROUPS).doc(groupId).get();
        const data = groupDoc.data() as api.STGroupAllData;

        return data ? {...data, groupId} : undefined;
    } catch (error) {
        throw new ApolloError(error);
    }
}
