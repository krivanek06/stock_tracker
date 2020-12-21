import {Summary} from './../stockDetails/stockDetails.model';
import * as admin from "firebase-admin";
import {STUserPrivateData} from "../user/user.model";
import {ApolloError, ValidationError} from "apollo-server";
import {
    ST_WATCHLIST_COLLECTION,
    STStockWatchlist,
    STStockWatchlistIdentifier,
} from "./watchList.model";
import {stockDataAPI} from "../enviroment";
import {getCurrentIOSDate, stSeep} from "../st-shared/st-shared.functions";
import {queryStockSummary} from "../stockDetails/stockDetails.query";

const fetch = require("node-fetch");

export const createStockWatchlist = async (identifier: STStockWatchlistIdentifier) => {
    try {
        const watchlists = await admin
            .firestore()
            .collection(ST_WATCHLIST_COLLECTION)
            .where("userId", "==", identifier.userId)
            .where("name", "==", identifier.additionalData)
            .get();

        if (!watchlists.empty) {
            throw new ApolloError(`watchlist ${identifier.additionalData} already exists`);
        }

        const watchlist: STStockWatchlist = {
            name: identifier.additionalData,
            userId: identifier.userId,
            summaries: [],
            date: getCurrentIOSDate(),
        };

        const documentRef = await admin.firestore().collection(ST_WATCHLIST_COLLECTION).add(watchlist);

        return {...watchlist, id: documentRef.id};
    } catch (error) {
        throw new ApolloError(error);
    }
};

export const addStockIntoStockWatchlist = async (identifier: STStockWatchlistIdentifier) => {
    try {
        const watchlistRef = await admin
            .firestore()
            .collection(ST_WATCHLIST_COLLECTION)
            .doc(identifier.id);
        const watchlist = (await watchlistRef.get()).data() as STStockWatchlist;

        // was not found
        if (!watchlist) {
            throw new ApolloError("Cloud not access watchlist, probably does not exists");
        }

        // watchlist not mine
        if (watchlist.userId !== identifier.userId) {
            throw new ApolloError("You are trying to access someone else watchlist. Request denied.");
        }

        // watchlist already contains specific stock
        if (watchlist.summaries.find(x => x.symbol === identifier.additionalData)) {
            throw new ApolloError("Your watchlist already contains this stock");
        }

        // get summary from custom server
        const summary = await queryStockSummary(identifier.additionalData);

        // add stock into watchlist
        watchlist.summaries = [...watchlist.summaries, summary];
        await watchlistRef.update({summaries: admin.firestore.FieldValue.arrayUnion(summary)});

        return summary;
    } catch (error) {
        throw new ApolloError(error);
    }
};


export const removeStockFromStockWatchlist = async (identifier: STStockWatchlistIdentifier) => {
    try {
        const watchlistRef = await admin
            .firestore()
            .collection(ST_WATCHLIST_COLLECTION)
            .doc(identifier.id);
        const watchlist = (await watchlistRef.get()).data() as STStockWatchlist;

        // was not found
        if (!watchlist) {
            throw new ApolloError("Cloud not access watchlist, probably does not exists");
        }

        // watchlist not mine
        if (watchlist.userId !== identifier.userId) {
            throw new ApolloError("You are trying to access someone else watchlist. Request denied.");
        }

        // filter out unwanted stock
        const filtered = watchlist.summaries.filter((summary) => summary.symbol !== identifier.additionalData);

        watchlist.summaries = filtered;
        await watchlistRef.update({summaries: filtered});

        return true;
    } catch (error) {
        throw new ApolloError(error);
    }
};

export const deleteWatchlist = async (identifier: STStockWatchlistIdentifier) => {
    try {
        const watchlistRef = await admin
            .firestore()
            .collection(ST_WATCHLIST_COLLECTION)
            .doc(identifier.id);
        const watchlist = (await watchlistRef.get()).data() as STStockWatchlist;

        // was not found
        if (!watchlist) {
            throw new ApolloError("Cloud not access watchlist, probably does not exists");
        }

        // watchlist not mine
        if (watchlist.userId !== identifier.userId) {
            throw new ApolloError("You are trying to access someone else watchlist. Request denied.");
        }

        await watchlistRef.delete();

        return true;
    } catch (error) {
        throw new ApolloError(error);
    }
};


export const renameStockWatchlist = async (identifier: STStockWatchlistIdentifier) => {
    try {
        const watchlistRef = await admin
            .firestore()
            .collection(ST_WATCHLIST_COLLECTION)
            .doc(identifier.id);
        const watchlist = (await watchlistRef.get()).data() as STStockWatchlist;

        // was not found
        if (!watchlist) {
            throw new ApolloError("Cloud not access watchlist, probably does not exists");
        }

        // watchlist not mine
        if (watchlist.userId !== identifier.userId) {
            throw new ApolloError("You are trying to access someone else watchlist. Request denied.");
        }

        // rename in firestore
        await watchlistRef.update({name: identifier.additionalData});

        return true;
    } catch (error) {
        throw new ApolloError(error);
    }
};


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
