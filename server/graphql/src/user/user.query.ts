import * as admin from "firebase-admin";
import {ST_USER_COLLECTION_USER, STUserPartialInformation, STUserPrivateData, STUserPublicData} from "./user.model";
import {ApolloError, ValidationError} from "apollo-server";
import {convertSTUserPublicDataToSTUserPartialInformation} from "./user.utils";

export const queryUserPublicData = async (uid: string) => {
    try {
        const userDoc = await admin.firestore().doc(`${ST_USER_COLLECTION_USER}/${uid}`).get();
        const user = userDoc.data() as STUserPublicData | undefined;

        return user || new ValidationError('User ID not found');
    } catch (error) {
        throw new ApolloError(error);
    }
}


export const querySTUserPartialInformation = async (uid: string): Promise<STUserPartialInformation> => {
    try {
        const user = await queryUserPublicData(uid) as STUserPublicData;
        return convertSTUserPublicDataToSTUserPartialInformation(user);
    } catch (error) {
        throw new ApolloError(error);
    }
}
