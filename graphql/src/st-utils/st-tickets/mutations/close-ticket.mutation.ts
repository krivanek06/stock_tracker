import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';

export const closeTicket = async (ticketId: string): Promise<boolean> => {
	try {
		await admin.firestore().collection(api.ST_TICKETS_COLLECTIONS).doc(ticketId).update({
			isOpen: false,
		});

		return true;
	} catch (error) {
		throw new ApolloError(error);
	}
};
