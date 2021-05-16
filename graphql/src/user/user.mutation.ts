import { sumOfHoldings } from './../st-transaction/st-transaction-util';
import {ApolloError} from 'apollo-server';
import * as api from 'stock-tracker-common-interfaces';
import * as admin from "firebase-admin";
import {createSTUserHistoricalData, createSTUserPrivateData, createSTUserPublicData} from "./user.creator";
import {queryUserPublicData} from "./user.query";
import {getCurrentIOSDate, stSeep} from "../st-shared/st-shared.functions";
import {resolveUserPrivateData} from "./user.resolver";

export const registerUser = async (user: api.STUserAuthenticationInput): Promise<boolean> => {
    try {
        const newUserPrivateData = createSTUserPrivateData(user);
        const newUserPublicData = createSTUserPublicData(user);
        const newUserHistoricalData = createSTUserHistoricalData();
        console.log('registerUser')

        // save public data
        let userDocRef = admin.firestore().collection(api.ST_USER_COLLECTION_USER).doc(`${user.uid}`);
        await userDocRef.set(newUserPublicData);

        // save private data
        await userDocRef.collection(api.ST_USER_COLLECTION_MORE_INFORMATION)
            .doc(api.ST_USER_DOCUMENT_PRIVATE_DATA)
            .set(newUserPrivateData);

        // save historical data
        await userDocRef.collection(api.ST_USER_COLLECTION_MORE_INFORMATION)
            .doc(api.ST_USER_DOCUMENT_HISTORICAL_DATA)
            .set(newUserHistoricalData);

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
                    tradingEnabledDate: userPrivateData.tradingEnabledDate || getCurrentIOSDate()
                } as api.STUserPrivateData, {merge: true})
        }

        const userPublicData = await queryUserPublicData(editInput.userId) as api.STUserPublicData;
        const initPortfolio = !userPrivateData.tradingEnabledDate && !!editInput.finnhubKey && !userPublicData.portfolioCash;

        // update public data - TODO cloud function propagate through groups
        if (initPortfolio || userPublicData.nickName !== editInput.nickName || userPublicData.photoURL !== editInput.photoURL) {
            admin.firestore().collection(api.ST_USER_COLLECTION_USER).doc(`${userPublicData.id}`)
                .set({
                    ...userPublicData,
                    nickName: editInput.nickName,
                    photoURL: editInput.photoURL,
                    portfolioCash: initPortfolio ? 15000 : userPublicData.portfolioCash
                } as api.STUserPublicData, {merge: true})
        }

        return true;

    } catch (error) {
        throw new ApolloError(error);
    }
};

// TODO prevent not reseting someone else account
export const resetUserAccount = async (userId: string): Promise<api.STUserResetedAccount> => {
    try {
        const user = await queryUserPublicData(userId) as api.STUserPublicData;

        const reset: api.STUserResetedAccount = {
            date: getCurrentIOSDate(),
            portfolioTotal: user.portfolioCash + sumOfHoldings(user.holdings)
        };

        // save reseted account
        admin.firestore().collection(api.ST_USER_COLLECTION_USER).doc(user.id)
            .collection(api.ST_USER_COLLECTION_MORE_INFORMATION).doc(api.ST_USER_DOCUMENT_HISTORICAL_DATA)
            .set({ 
                resetedAccount: admin.firestore.FieldValue.arrayUnion(reset)
            }, {merge: true});

        // save portfolio
        admin.firestore().collection(api.ST_USER_COLLECTION_USER).doc(user.id).set({
            portfolioCash: 15000,
            holdings: [],
        }, {merge: true});

        return reset;
    } catch (error) {
        throw new ApolloError(error);
    }
};
