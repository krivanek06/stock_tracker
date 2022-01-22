import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { getCurrentIOSDate } from '../st-shared/st-shared.functions';
import { Context } from '../st-shared/st-shared.interface';
import { queryStockSummary } from '../st-stocks/st-stocks-query';

const fetch = require('node-fetch');

export const createStockWatchlist = async (identifier: api.STStockWatchlistIdentifier, { requesterUserId }: Context) => {
	try {
		const watchlists = await admin
			.firestore()
			.collection(api.ST_WATCHLIST_COLLECTION)
			.where('userId', '==', requesterUserId)
			.where('name', '==', identifier.additionalData)
			.get();

		if (!watchlists.empty) {
			throw new ApolloError(`watchlist ${identifier.additionalData} already exists`);
		}

		const watchlist: api.STStockWatchlist = {
			name: identifier.additionalData,
			userId: requesterUserId,
			symbols: [],
			date: getCurrentIOSDate(),
		};

		const documentRef = await admin.firestore().collection(api.ST_WATCHLIST_COLLECTION).add(watchlist);

		return { ...watchlist, id: documentRef.id };
	} catch (error) {
		throw new ApolloError(error);
	}
};

export const addStockIntoStockWatchlist = async (identifier: api.STStockWatchlistIdentifier, { requesterUserId }: Context) => {
	try {
		const watchlistRef = await admin.firestore().collection(api.ST_WATCHLIST_COLLECTION).doc(identifier.id);
		const watchlist = (await watchlistRef.get()).data() as api.STStockWatchlist;
		const newSymbol = identifier.additionalData;
		// was not found
		if (!watchlist) {
			throw new ApolloError('Cloud not access watchlist, probably does not exists');
		}

		// watchlist not mine
		if (watchlist.userId !== requesterUserId) {
			throw new ApolloError('You are trying to access someone else watchlist. Request denied.');
		}

		// watchlist already contains specific stock
		if (watchlist.symbols.find((x) => x === newSymbol)) {
			throw new ApolloError('Your watchlist already contains this stock');
		}

		// get summary from custom server
		const summary = await queryStockSummary(newSymbol);

		// add stock into watchlist
		watchlist.symbols = [...watchlist.symbols, newSymbol];
		await watchlistRef.update({ symbols: admin.firestore.FieldValue.arrayUnion(newSymbol) });

		return summary;
	} catch (error) {
		throw new ApolloError(error);
	}
};

export const removeStockFromStockWatchlist = async (identifier: api.STStockWatchlistIdentifier, { requesterUserId }: Context) => {
	try {
		const watchlistRef = admin.firestore().collection(api.ST_WATCHLIST_COLLECTION).doc(identifier.id);
		const watchlist = (await watchlistRef.get()).data() as api.STStockWatchlist;

		// was not found
		if (!watchlist) {
			throw new ApolloError('Cloud not access watchlist, probably does not exists');
		}

		// watchlist not mine
		if (watchlist.userId !== requesterUserId) {
			throw new ApolloError('You are trying to access someone else watchlist. Request denied.');
		}

		// filter out unwanted stock
		const filtered = watchlist.symbols.filter((symbol) => symbol !== identifier.additionalData);

		await watchlistRef.update({ symbols: filtered });

		return true;
	} catch (error) {
		throw new ApolloError(error);
	}
};

export const deleteWatchlist = async (identifier: api.STStockWatchlistIdentifier, { requesterUserId }: Context) => {
	try {
		const watchlistRef = await admin.firestore().collection(api.ST_WATCHLIST_COLLECTION).doc(identifier.id);
		const watchlist = (await watchlistRef.get()).data() as api.STStockWatchlist;

		// was not found
		if (!watchlist) {
			throw new ApolloError('Cloud not access watchlist, probably does not exists');
		}

		// watchlist not mine
		if (watchlist.userId !== requesterUserId) {
			throw new ApolloError('You are trying to access someone else watchlist. Request denied.');
		}

		await watchlistRef.delete();

		return true;
	} catch (error) {
		throw new ApolloError(error);
	}
};

export const renameStockWatchlist = async (identifier: api.STStockWatchlistIdentifier, { requesterUserId }: Context) => {
	try {
		const watchlistRef = await admin.firestore().collection(api.ST_WATCHLIST_COLLECTION).doc(identifier.id);
		const watchlist = (await watchlistRef.get()).data() as api.STStockWatchlist;

		// was not found
		if (!watchlist) {
			throw new ApolloError('Cloud not access watchlist, probably does not exists');
		}

		// watchlist not mine
		if (watchlist.userId !== requesterUserId) {
			throw new ApolloError('You are trying to access someone else watchlist. Request denied.');
		}

		// rename in firestore
		await watchlistRef.update({ name: identifier.additionalData });

		return true;
	} catch (error) {
		throw new ApolloError(error);
	}
};
