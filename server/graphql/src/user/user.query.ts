import * as admin from "firebase-admin";
import {ST_USER_COLLECTION_USER, STUserPartialInformation, STUserPrivateData, STUserPublicData} from "./user.model";
import {ApolloError, ValidationError} from "apollo-server";
import {convertSTUserPublicDataToSTUserPartialInformation} from "./user.utils";
import {getCurrentIOSDate} from "../st-shared/st-shared.functions";

export const authenticateUser = async (uid: string) => {
    try {
        const user = queryUserPublicData(uid);

        // update lastSignIn
        admin.firestore()
            .collection(`${ST_USER_COLLECTION_USER}`)
            .doc(uid)
            .update({lastSignInDate: getCurrentIOSDate()});

        return user;
    } catch (error) {
        throw new ApolloError(error);
    }
}

export const queryUserPublicData = async (uid: string) => {
    try {
        const userDoc = await admin.firestore().doc(`${ST_USER_COLLECTION_USER}/${uid}`).get();
        const user = userDoc.data() as STUserPublicData | undefined;

        return user || new ValidationError('User ID not found');
    } catch (error) {
        throw new ApolloError(error);
    }
}


export const querySTUserPartialInformationByUid = async (uid: string): Promise<STUserPartialInformation> => {
    try {
        const user = await queryUserPublicData(uid) as STUserPublicData;

        return convertSTUserPublicDataToSTUserPartialInformation(user);
    } catch (error) {
        throw new ApolloError(error);
    }
}


export const querySTUserPartialInformationByUsername = async (usernamePrefix): Promise<STUserPartialInformation[]> => {
    try {
        const userDocs = await admin.firestore()
            .collection(`${ST_USER_COLLECTION_USER}`)
            .where('nickName', '>=', usernamePrefix)
            .limit(5)
            .get();

        return userDocs.docs.map(d => d.data() as STUserPartialInformation);
    } catch (error) {
        throw new ApolloError(error);
    }
}
