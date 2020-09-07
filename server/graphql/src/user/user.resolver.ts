import {User, PrivateData} from "./user.model";
import * as admin from "firebase-admin";
import {StockWatchlist} from "../watchlist/watchList.model";
import {ApolloError} from "apollo-server";
import { queryUser } from "./user.query";



const resolveStockWatchlistForUser = async (user: User) => {
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

const resolveUserPrivateData = async (user: User) => {
    try {
        const privateDoc = await admin
            .firestore()
            .collection('users')
            .doc(user.uid)
            .collection('privateData')
            .get();

        if(privateDoc.docs.length === 0){
            return null;
        }
        
        const privateData = privateDoc.docs.pop();
        
        return privateData.data() as PrivateData;

    } catch (error) {
        throw new ApolloError(error);
    }
}



export const userResolvers = {
    User: {
        stockWatchlist: async (user: User) => await resolveStockWatchlistForUser(user),
        userPrivateData: async (user: User) => await resolveUserPrivateData(user)
    }
};