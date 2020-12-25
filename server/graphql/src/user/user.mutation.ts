import {ApolloError} from 'apollo-server';
import * as api from 'stock-tracker-common-interfaces';
import * as admin from "firebase-admin";
import {createSTUserPrivateData, createSTUserPublicData} from "./user.utils";

export const registerUser = async (user: api.STUserAuthenticationInput) => {
    try {
        const newUserPrivateData = createSTUserPrivateData(user);
        const newUserPublicData = createSTUserPublicData(user);

        // save public data
        let userRef = admin.firestore().collection(api.ST_USER_COLLECTION_USER).doc(`${user.uid}`);
        await userRef.set(newUserPublicData);

        // save private data
        userRef = userRef.collection(api.ST_USER_COLLECTION_MORE_INFORMATION).doc(api.ST_USER_DOCUMENT_PRIVATE_DATA);
        await userRef.set(newUserPrivateData);

        return true;
    } catch (error) {
        throw new ApolloError(error);
    }
}


// TODO secure updating "status" field only for authorized users
/*
export const updateUserPublicData = async(userPublicData: STUserPublicData) => {
    try{
        const userRef = admin.firestore().collection('users').doc(`${userPublicData.uid}`);

        await userRef.set(userPublicData, {merge: true});

        const data = await userRef.get();

        return data.data();

    }catch (error) {
      throw new ApolloError(error);
    }
}*/

export const updateUserPrivateData = async (userPrivateData: api.STUserPrivateData) => {
    try {
        const userPrivateDocsRef = await admin.firestore()
            .collection('users')
            .doc(userPrivateData.uid)
            .collection(api.ST_USER_COLLECTION_MORE_INFORMATION)
            .doc(api.ST_USER_DOCUMENT_PRIVATE_DATA);

        await userPrivateDocsRef.set(userPrivateData, {merge: true});

        return userPrivateData;

    } catch (error) {
        throw new ApolloError(error);
    }
}
