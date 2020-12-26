import {ApolloError} from 'apollo-server';
import * as api from 'stock-tracker-common-interfaces';
import * as admin from "firebase-admin";
import {createSTUserPrivateData, createSTUserPublicData} from "./user.utils";
import {queryUserPublicData} from "./user.query";
import {getCurrentIOSDate, stSeep} from "../st-shared/st-shared.functions";
import {resetedPortfolio} from "../st-portfolio/st.portfolio.functions";
import {resolveUserPrivateData} from "./user.resolver";

export const registerUser = async (user: api.STUserAuthenticationInput): Promise<boolean> => {
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

// TODO - remove userId from editInput when token will be used with roles & encoded userId
export const editUser = async (editInput: api.STUserEditDataInput): Promise<boolean> => {
    try {

        // update private data
        const userPrivateData = await resolveUserPrivateData(editInput.userId);
        if (userPrivateData.finnhubKey !== editInput.finnhubKey) {
            admin
                .firestore()
                .collection(api.ST_USER_COLLECTION_USER)
                .doc(editInput.userId)
                .collection(api.ST_USER_COLLECTION_MORE_INFORMATION)
                .doc(api.ST_USER_DOCUMENT_PRIVATE_DATA)
                .set({
                    ...userPrivateData,
                    finnhubKey: !!editInput.finnhubKey ? editInput.finnhubKey : null,
                    finnhubKeyInsertedDate: userPrivateData.finnhubKeyInsertedDate || getCurrentIOSDate()
                } as api.STUserPrivateData, {merge: true})
        }

        const userPublicData = await queryUserPublicData(editInput.userId) as api.STUserPublicData;
        const initPortfolio = !userPrivateData.finnhubKeyInsertedDate && !!editInput.finnhubKey && !userPublicData.portfolio;

        // update public data - TODO cloud function propagate through groups
        if (initPortfolio || userPublicData.nickName !== editInput.nickName || userPublicData.photoURL !== editInput.photoURL) {
            admin.firestore().collection(api.ST_USER_COLLECTION_USER).doc(`${userPublicData.uid}`)
                .set({
                    ...userPublicData,
                    nickName: editInput.nickName,
                    photoURL: editInput.photoURL,
                    portfolio: initPortfolio ? resetedPortfolio() : userPublicData.portfolio
                } as api.STUserPublicData, {merge: true})
        }

        return true;

    } catch (error) {
        throw new ApolloError(error);
    }
};

// TODO prevent not reseting someone else account
export const resetUserAccount = async (userId: string): Promise<boolean> => {
    try {
        const user = await queryUserPublicData(userId) as api.STUserPublicData;

        const reset: api.STUserResetedAccount = {
            date: getCurrentIOSDate(),
            portfolioTotal: user.portfolio.portfolioTotal
        };

        const updatedUser: api.STUserPublicData = {
            ...user,
            portfolio: resetedPortfolio(),
            resetedAccount: [...user.resetedAccount, reset],
            holdings: [],
        };

        await admin.firestore().collection(api.ST_USER_COLLECTION_USER).doc(`${user.uid}`).set(updatedUser, {merge: true});

        return true;
    } catch (error) {
        throw new ApolloError(error);
    }
};

/*
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
}*/
