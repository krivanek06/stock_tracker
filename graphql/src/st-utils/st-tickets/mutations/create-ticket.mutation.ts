import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { queryUserIdentificationBase } from './../../../user/user.query';

export const createTicket = async (ticketValuse: api.STTicketCreateValues, requesterUserId: string): Promise<api.STTicket> => {
	try {
		const ref = admin.firestore().collection(api.ST_TICKETS_COLLECTIONS).doc();
		const userIdentification = await queryUserIdentificationBase(requesterUserId);

		const ticket: api.STTicket = {
			...ticketValuse,
			id: ref.id,
			comments: [],
			isOpen: true,
			createdBy: userIdentification,
			createdAt: admin.firestore.Timestamp.now().toDate().toISOString(),
		};

		// save ticket into its own collections
		await admin.firestore().collection(api.ST_TICKETS_COLLECTIONS).doc(ticket.id).set(ticket);

		return ticket;
	} catch (error) {
		throw new ApolloError(error);
	}
};
