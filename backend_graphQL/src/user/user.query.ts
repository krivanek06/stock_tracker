import * as admin from "firebase-admin";
import {User} from "./user.model";
import {ApolloError, ValidationError} from "apollo-server";
import {StockWatchlist} from "../watchlist/watchList.model";

export const queryUser = async (uid: string) => {
    try {
        const userDoc = await admin
            .firestore()
            .doc(`users/${uid}`)
            .get();
        const user = userDoc.data() as User | undefined;

        return user || new ValidationError('User ID not found');
    } catch (error) {
        throw new ApolloError(error);
    }
}


