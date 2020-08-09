import { StockDetails } from './stockDetails.model';
import * as admin from "firebase-admin";
import { User } from "../user/user.model";
import { ApolloError, ValidationError } from "apollo-server";
import {
  StockWatchlist,
  StockWatchlistIdentifier,
} from "./watchList.model";
import { stockDataAPI } from "../enviroment";

const fetch = require("node-fetch");

export const createStockWatchlist = async (identifier: StockWatchlistIdentifier) => {
  try {
    const watchlists = await admin
      .firestore()
      .collection("stockWatchlist")
      .where("userId", "==", identifier.userId)
      .where("name", "==", identifier.additionalData)
      .get();
    
    if(!watchlists.empty){
        throw new ApolloError( `watchlist ${identifier.additionalData} already exists`);
    }

    const watchlist: StockWatchlist = {
      name: identifier.additionalData,
      userId: identifier.userId,
      stocks: [],
      timestamp: new Date().getTime(),
    };

    const documentRef = await admin.firestore().collection("stockWatchlist").add(watchlist);
 

    return {...watchlist, id: documentRef.id};
  } catch (error) {
    throw new ApolloError(error);
  }
};

export const addStockIntoStockWatchlist = async (identifier: StockWatchlistIdentifier) => {
  try {
    const watchlistRef = await admin
      .firestore()
      .collection("stockWatchlist")
      .doc(identifier.id);
    const watchlist = (await watchlistRef.get()).data() as StockWatchlist;

    // was not found
    if (!watchlist) {
      throw new ApolloError(
        "Cloud not access watchlist, probably does not exists"
      );
    }

    // watchlist not mine
    if (watchlist.userId !== identifier.userId) {
      throw new ApolloError(
        "You are trying to access someone else watchlist. Request denied."
      );
    }

    // watchlist already contains specific stock
    if (watchlist.stocks.includes(identifier.additionalData)) {
      throw new ApolloError("Your watchlist already contains this stock");
    }

    // get fundaments from custom server
    const response = await fetch(
      `${stockDataAPI}/ticker/details/fundamentals?symbol=${identifier.additionalData}`
    );

    const stockDetails = await response.json() as StockDetails;
    

    // add stock into watchlist
    watchlist.stocks = [...watchlist.stocks, identifier.additionalData];
    await watchlistRef.update({ stocks: watchlist.stocks });

    return stockDetails;
  } catch (error) {
    throw new ApolloError(error);
  }
};


export const removeStockFromStockWatchlist = async (identifier: StockWatchlistIdentifier) => {
  try {
    const watchlistRef = await admin
      .firestore()
      .collection("stockWatchlist")
      .doc(identifier.id);
    const watchlist = (await watchlistRef.get()).data() as StockWatchlist;

    // was not found
    if (!watchlist) {
      throw new ApolloError(
        "Cloud not access watchlist, probably does not exists"
      );
    }

    // watchlist not mine
    if (watchlist.userId !== identifier.userId) {
      throw new ApolloError(
        "You are trying to access someone else watchlist. Request denied."
      );
    }

    // filter out unwanted stock
    const filtered = watchlist.stocks.filter(
      (stockName) => stockName !== identifier.additionalData
    );

    watchlist.stocks = filtered;
    await watchlistRef.update({ stocks: filtered });

    return true;
  } catch (error) {
    throw new ApolloError(error);
  }
};

export const deleteWatchlist = async (identifier: StockWatchlistIdentifier) => {
  try {
    const watchlistRef = await admin
      .firestore()
      .collection("stockWatchlist")
      .doc(identifier.id);
    const watchlist = (await watchlistRef.get()).data() as StockWatchlist;

    // was not found
    if (!watchlist) {
      throw new ApolloError(
        "Cloud not access watchlist, probably does not exists"
      );
    }

    // watchlist not mine
    if (watchlist.userId !== identifier.userId) {
      throw new ApolloError(
        "You are trying to access someone else watchlist. Request denied."
      );
    }

    await watchlistRef.delete();

    return true;
  } catch (error) {
    throw new ApolloError(error);
  }
};



export const renameStockWatchlist = async (identifier: StockWatchlistIdentifier) => {
    try {
      const watchlistRef = await admin
        .firestore()
        .collection("stockWatchlist")
        .doc(identifier.id);
      const watchlist = (await watchlistRef.get()).data() as StockWatchlist;
  
      // was not found
      if (!watchlist) {
        throw new ApolloError(
          "Cloud not access watchlist, probably does not exists"
        );
      }
  
      // watchlist not mine
      if (watchlist.userId !== identifier.userId) {
        throw new ApolloError(
          "You are trying to access someone else watchlist. Request denied."
        );
      }
      
      // rename in firestore
      await watchlistRef.update({id: identifier.additionalData})  
  
      return true;
    } catch (error) {
      throw new ApolloError(error);
    }
  };
  