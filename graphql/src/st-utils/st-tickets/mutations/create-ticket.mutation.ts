import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { queryUserIdentification } from '../../../st-user/user.query';

export const createTicket = async (ticketValuse: api.STTicketCreateValues, requesterUserId: string): Promise<api.STTicket> => {
	try {
		const ref = admin.firestore().collection(api.ST_TICKETS_COLLECTIONS).doc();
		const userIdentification = await queryUserIdentification(requesterUserId);

		const ticket: api.STTicket = {
			name: ticketValuse.name,
			type: ticketValuse.type,
			id: ref.id,
			comments: [createComment(userIdentification, ticketValuse.name)],
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

const createComment = (userIdentification: api.STUserIndentification, comment: string): api.STTicketComment => {
	const ticketComment: api.STTicketComment = {
		id: Date.now().toString(),
		createdBy: userIdentification,
		comment: comment,
		createdAt: admin.firestore.Timestamp.now().toDate().toISOString(),
	};
	return ticketComment;
};
