import {ApolloError} from 'apollo-server';
import {
    ST_USER_COLLECTION_MORE_INFORMATION, ST_USER_COLLECTION_USER,
    ST_USER_DOCUMENT_PRIVATE_DATA,
    STUserFirebaseAuthentication,
    STUserPrivateData,
} from './user.model';
import * as admin from "firebase-admin";
import {createSTUserPrivateData, createSTUserPublicData} from "./user.utils";

export const registerUser = async (user: STUserFirebaseAuthentication) => {
    try {
        const newUserPrivateData = createSTUserPrivateData(user);
        const newUserPublicData = createSTUserPublicData(user);

        // save public data
        let userRef = admin.firestore().collection(ST_USER_COLLECTION_USER).doc(`${user.uid}`);
        await userRef.set(newUserPublicData);

        // save private data
        userRef = userRef.collection(ST_USER_COLLECTION_MORE_INFORMATION).doc(ST_USER_DOCUMENT_PRIVATE_DATA);
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

export const updateUserPrivateData = async (userPrivateData: STUserPrivateData) => {
    try {
        console.log(userPrivateData)
        const userPrivateDocsRef = await admin.firestore()
            .collection('users')
            .doc(userPrivateData.uid)
            .collection(ST_USER_COLLECTION_MORE_INFORMATION)
            .doc(ST_USER_DOCUMENT_PRIVATE_DATA);

        await userPrivateDocsRef.set(userPrivateData, {merge: true});

        return userPrivateData;

    } catch (error) {
        throw new ApolloError(error);
    }
}
