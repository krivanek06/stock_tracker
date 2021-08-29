import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { queryUserIdentificationBase } from '../../../user/user.query';

export const commentTicket = async (ticketId: string, comment: string, requesterUserId: string): Promise<api.STTicketComment> => {
	try {
		const userIdentification = await queryUserIdentificationBase(requesterUserId);

		// create comment
		const ticketComment: api.STTicketComment = {
			id: Date.now().toString(),
			createdBy: userIdentification,
			comment: comment,
			createdAt: admin.firestore.Timestamp.now().toDate().toISOString(),
		};

		// save comment
		await admin
			.firestore()
			.collection(api.ST_TICKETS_COLLECTIONS)
			.doc(ticketId)
			.update({
				comments: admin.firestore.FieldValue.arrayUnion(ticketComment),
			});

		return ticketComment;
	} catch (error) {
		throw new ApolloError(error);
	}
};
