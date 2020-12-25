import * as admin from "firebase-admin";
import * as api from 'stock-tracker-common-interfaces';
import {ApolloError, ValidationError} from "apollo-server";
import {convertSTUserPublicDataToSTUserPartialInformation} from "./user.utils";
import {getCurrentIOSDate} from "../st-shared/st-shared.functions";

export const authenticateUser = async (uid: string) => {
    try {
        const user = queryUserPublicData(uid);

        // update lastSignIn
        admin.firestore()
            .collection(`${api.ST_USER_COLLECTION_USER}`)
            .doc(uid)
            .update({lastSignInDate: getCurrentIOSDate()});

        return user;
    } catch (error) {
        throw new ApolloError(error);
    }
}

export const queryUserPublicData = async (uid: string) => {
    try {
        const userDoc = await admin.firestore().doc(`${api.ST_USER_COLLECTION_USER}/${uid}`).get();
        const user = userDoc.data() as api.STUserPublicData | undefined;

        return user || new ValidationError('User ID not found');
    } catch (error) {
        throw new ApolloError(error);
    }
}


export const querySTUserPartialInformationByUid = async (uid: string): Promise<api.STUserPartialInformation> => {
    try {
        const user = await queryUserPublicData(uid) as api.STUserPublicData;

        return convertSTUserPublicDataToSTUserPartialInformation(user);
    } catch (error) {
        throw new ApolloError(error);
    }
}


export const querySTUserPartialInformationByUsername = async (usernamePrefix): Promise<api.STUserPartialInformation[]> => {
    try {
        const userDocs = await admin.firestore()
            .collection(`${api.ST_USER_COLLECTION_USER}`)
            .where('nickName', '>=', usernamePrefix)
            .limit(5)
            .get();

        return userDocs.docs.map(d => d.data() as api.STUserPartialInformation);
    } catch (error) {
        throw new ApolloError(error);
    }
}
