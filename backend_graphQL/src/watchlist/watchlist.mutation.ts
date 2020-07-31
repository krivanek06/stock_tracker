import * as admin from "firebase-admin";
import { User } from "../user/user.model";
import { ApolloError, ValidationError } from "apollo-server";
import {
  StockWatchlist,
  StockWatchlistIdentifier,
  StockWatchlistCommonData,
} from "./watchList.model";
import { stockDataAPI } from "../enviroment";

const fetch = require("node-fetch");

export const createStockWatchlist = async (identifier: StockWatchlistCommonData) => {
  try {
    const watchlists = await admin
      .firestore()
      .collection("stockWatchlist")
      .where("userId", "==", identifier.userId)
      .where("id", "==", identifier.id)
      .get();
    
    if(!watchlists.empty){
        throw new ApolloError( `watchlist ${identifier.id} already exists`);
    }

    const watchlist: StockWatchlist = {
      id: identifier.id,
      userId: identifier.userId,
      stocks: [],
      timestamp: new Date().getTime(),
    };

    const documentRef = await admin.firestore().collection("stockWatchlist").add(watchlist);
 
    await sleep(3000);
    return {...watchlist, documentId: documentRef.id};
  } catch (error) {
    throw new ApolloError(error);
  }
};

export const addStockIntoStockWatchlist = async (identifier: StockWatchlistIdentifier) => {
  try {
    const watchlistRef = await admin
      .firestore()
      .collection("stockWatchlist")
      .doc(identifier.documentId);
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
    if (watchlist.stocks.includes(identifier.stockName)) {
      throw new ApolloError("Your watchlist already contains this stock");
    }

    // get overview from custom server
    const response = await fetch(
      `${stockDataAPI}/ticker/details/overview?symbol=${identifier.stockName}`
    );
    const overview = await response.json();
    
    
    await sleep(3000);

    // add stock into watchlist
    watchlist.stocks = [...watchlist.stocks, identifier.stockName];
    await watchlistRef.update({ stocks: watchlist.stocks });

    return overview;
  } catch (error) {
    throw new ApolloError(error);
  }
};


function sleep(ms) {
    return new Promise((resolve) => {
      console.log('sleeping');
      setTimeout(resolve, ms);
    });
  }   

export const removeStockFromStockWatchlist = async (identifier: StockWatchlistIdentifier) => {
  try {
    const watchlistRef = await admin
      .firestore()
      .collection("stockWatchlist")
      .doc(identifier.documentId);
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
      (stockName) => stockName !== identifier.stockName
    );

    watchlist.stocks = filtered;
    await watchlistRef.update({ stocks: filtered });

    await sleep(3000);

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
      .doc(identifier.documentId);
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

    await sleep(3000);

    return true;
  } catch (error) {
    throw new ApolloError(error);
  }
};
