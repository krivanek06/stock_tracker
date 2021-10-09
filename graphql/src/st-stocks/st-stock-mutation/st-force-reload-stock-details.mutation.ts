import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';

/** Set forceReload = true for all stock details in firebase to reload them on next visst */
export const setForceReloadStockDetails = async (): Promise<boolean> => {
	try {
		console.log('Set reload prop to all stocks');
		const collection = await admin.firestore().collection(api.ST_STOCK_DATA_COLLECTION).get();

		collection.forEach((doc) => {
			doc.ref.set({ forceReload: true }, { merge: true });
		});
		console.log(`Reload true has been set on ${collection.size} stocks`);

		return true;
	} catch (error) {
		throw new ApolloError(error);
	}
};
