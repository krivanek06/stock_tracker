import {
    STUserPrivateData,
    STUserIndentificationInformation,
    ST_USER_DOCUMENT_PRIVATE_DATA,
    ST_USER_COLLECTION_MORE_INFORMATION,
    ST_USER_COLLECTION_USER, STUserPublicData
} from "./user.model";
import * as admin from "firebase-admin";
import {STStockWatchlist} from "../watchlist/watchList.model";
import {ApolloError} from "apollo-server";
import {queryUserPublicData} from "./user.query";


const resolveStockWatchlistForUser = async (uid: string) => {
    try {
        const watchlistDocs = await admin
            .firestore()
            .collection('stockWatchlist')
            .where('userId', '==', uid)
            .get();

        return watchlistDocs.docs.map(list => { return { ...list.data(), id: list.id } }) as STStockWatchlist[];
    } catch (error) {
        throw new ApolloError(error);
    }
}

const resolveUserPrivateData = async (uid: string) => {
    try {
        const privateDoc = await admin
            .firestore()
            .collection(ST_USER_COLLECTION_USER)
            .doc(uid)
            .collection(ST_USER_COLLECTION_MORE_INFORMATION)
            .doc(ST_USER_DOCUMENT_PRIVATE_DATA)
            .get();

        return privateDoc.data() as STUserPrivateData;
    } catch (error) {
        throw new ApolloError(error);
    }
}


export const userResolvers = {
    STUserPublicData: {
        stockWatchlist: async (stUserPublicData: STUserPublicData) => await resolveStockWatchlistForUser(stUserPublicData.uid),
        userPrivateData: async (stUserPublicData: STUserPublicData) => await resolveUserPrivateData(stUserPublicData.uid)
    }
};
