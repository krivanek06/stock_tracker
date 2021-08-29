import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';

export const queryAllTicketsByUserId = async (userId: string): Promise<api.STTicket[]> => {
	try {
		const ticketDocs = await admin.firestore().collection(api.ST_TICKETS_COLLECTIONS).where('createdBy.id', '==', userId).get();
		const tickets = ticketDocs.docs.map((d) => d.data() as api.STTicket);
		return tickets;
	} catch (error) {
		throw new ApolloError(error);
	}
};
