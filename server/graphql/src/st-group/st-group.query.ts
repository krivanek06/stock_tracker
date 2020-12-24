import {ST_GROUP_COLLECTION_GROUPS, STGroupAllData, STGroupPartialData} from "./st-group.model";
import {ApolloError} from "apollo-server";
import * as admin from "firebase-admin";


export const querySTGroupAllDataByGroupId = async (groupId: string): Promise<STGroupAllData> => {
    try {
        const groupDoc = await admin.firestore().collection(ST_GROUP_COLLECTION_GROUPS).doc(groupId).get();
        const data = groupDoc.data() as STGroupAllData;

        return data ? {...data, groupId} : undefined;
    } catch (error) {
        throw new ApolloError(error);
    }
}
