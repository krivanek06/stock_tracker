import {ST_GROUP_COLLECTION_GROUPS, STGroupAllData} from "./st-group.model";
import {ApolloError} from "apollo-server";
import * as admin from "firebase-admin";


export const getSTGroupAllDataByGroupId = async (groupId: string): Promise<STGroupAllData> => {
    try {
        const groupDoc = await admin.firestore().doc(`${ST_GROUP_COLLECTION_GROUPS}/${groupId}`).get();
        const data = groupDoc.data() as STGroupAllData;

        return data ? {...data, groupId} : undefined;
    } catch (error) {
        throw new ApolloError(error);
    }
}
