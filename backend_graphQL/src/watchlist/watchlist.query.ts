import * as admin from "firebase-admin";
import {ApolloError, ValidationError} from "apollo-server";
import { StockWatchlist } from "./watchList.model";


export const queryUserStockWatchlists = async (userId: string) => {
    try {
        const watchlistDoc = await admin
            .firestore()
            .collection('stockWatchlist')
            .where('userId', '==', userId)
            .get();

            console.log('queryUserStockWatchlists', watchlistDoc.size);
        
        return watchlistDoc.docs.map(list => { return { ...list.data(), id: list.id } }) as StockWatchlist[];
    } catch (error) {
        throw new ApolloError(error);
    }
}


export const queryUserStockWatchlistById = async(userId, documentId) => {
    try {
        const watchlistDoc = await admin
            .firestore()
            .collection('stockWatchlist')
            .doc(documentId)
            .get();

        const watchlist: StockWatchlist ={ ...watchlistDoc.data() as StockWatchlist, id: watchlistDoc.id };
        
      // was not found
      if (!watchlist) {
        throw new ApolloError("Cloud not access watchlist, probably does not exists");
      }
  
      // watchlist not mine
      if (watchlist.userId !== userId) {
        throw new ApolloError( "You are trying to access someone else watchlist. Request denied." );
      }
        
        return watchlist;
    } catch (error) {
        throw new ApolloError(error);
    }
}