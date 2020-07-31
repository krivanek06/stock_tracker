import {User} from "./user.model";
import * as admin from "firebase-admin";
import {StockWatchlist} from "../watchlist/watchList.model";
import {ApolloError} from "apollo-server";
import { queryUser } from "./user.query";



export const resolveStockWatchlistForUser = async (user: User) => {
    try {
        const userWatchlists = await admin
            .firestore()
            .collection('stockWatchlist')
            .where('userId', '==', user.uid)
            .get();

        return userWatchlists.docs.map(watchlist => watchlist.data()) as StockWatchlist[];

    } catch (error) {
        throw new ApolloError(error);
    }
}


export const userResolvers = {
    User: {
        stockWatchlist: async (user: User) => await resolveStockWatchlistForUser(user),
    }
};