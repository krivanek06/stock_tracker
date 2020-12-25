import * as admin from "firebase-admin";
import {ApolloError, ValidationError} from "apollo-server";

/*
export const queryUserStockWatchlists = async (userId: string) => {
    try {
        const watchlistDoc = await admin
            .firestore()
            .collection(ST_WATCHLIST_COLLECTION)
            .where('userId', '==', userId)
            .get();

            console.log('queryUserStockWatchlists', watchlistDoc.size);
        
        return watchlistDoc.docs.map(list => { return { ...list.data(), id: list.id } }) as STStockWatchlist[];
    } catch (error) {
        throw new ApolloError(error);
    }
}*/
