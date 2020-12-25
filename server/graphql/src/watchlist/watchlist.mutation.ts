import * as admin from "firebase-admin";
import {ApolloError, ValidationError} from "apollo-server";
import * as api from 'stock-tracker-common-interfaces';
import {getCurrentIOSDate, stSeep} from "../st-shared/st-shared.functions";
import {queryStockSummary} from "../stockDetails/stockDetails.query";

const fetch = require("node-fetch");

export const createStockWatchlist = async (identifier: api.STStockWatchlistIdentifier) => {
    try {
        const watchlists = await admin
            .firestore()
            .collection(api.ST_WATCHLIST_COLLECTION)
            .where("userId", "==", identifier.userId)
            .where("name", "==", identifier.additionalData)
            .get();

        if (!watchlists.empty) {
            throw new ApolloError(`watchlist ${identifier.additionalData} already exists`);
        }

        const watchlist: api.STStockWatchlist = {
            name: identifier.additionalData,
            userId: identifier.userId,
            summaries: [],
            date: getCurrentIOSDate(),
        };

        const documentRef = await admin.firestore().collection(api.ST_WATCHLIST_COLLECTION).add(watchlist);

        return {...watchlist, id: documentRef.id};
    } catch (error) {
        throw new ApolloError(error);
    }
};

export const addStockIntoStockWatchlist = async (identifier: api.STStockWatchlistIdentifier) => {
    try {
        const watchlistRef = await admin
            .firestore()
            .collection(api.ST_WATCHLIST_COLLECTION)
            .doc(identifier.id);
        const watchlist = (await watchlistRef.get()).data() as api.STStockWatchlist;

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


export const removeStockFromStockWatchlist = async (identifier: api.STStockWatchlistIdentifier) => {
    try {
        const watchlistRef = await admin
            .firestore()
            .collection(api.ST_WATCHLIST_COLLECTION)
            .doc(identifier.id);
        const watchlist = (await watchlistRef.get()).data() as api.STStockWatchlist;

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

export const deleteWatchlist = async (identifier: api.STStockWatchlistIdentifier) => {
    try {
        const watchlistRef = await admin
            .firestore()
            .collection(api.ST_WATCHLIST_COLLECTION)
            .doc(identifier.id);
        const watchlist = (await watchlistRef.get()).data() as api.STStockWatchlist;

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


export const renameStockWatchlist = async (identifier: api.STStockWatchlistIdentifier) => {
    try {
        const watchlistRef = await admin
            .firestore()
            .collection(api.ST_WATCHLIST_COLLECTION)
            .doc(identifier.id);
        const watchlist = (await watchlistRef.get()).data() as api.STStockWatchlist;

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
