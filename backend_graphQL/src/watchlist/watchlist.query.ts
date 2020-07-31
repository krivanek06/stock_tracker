import * as admin from "firebase-admin";
import {ApolloError, ValidationError} from "apollo-server";
import { StockWatchlist } from "./watchList.model";


export const queryUsersStockWatchlist = async (userId: string) => {
    try {
        const watchlistDoc = await admin
            .firestore()
            .collection('stockWatchlist')
            .where('userId', '==', userId)
            .get();
        
        return watchlistDoc.docs.map(list => { return { ...list.data(), documentId: list.id } }) as StockWatchlist[];
    } catch (error) {
        throw new ApolloError(error);
    }
}
