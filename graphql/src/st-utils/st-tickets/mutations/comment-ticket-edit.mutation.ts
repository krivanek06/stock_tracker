import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';

export const commentTicketEdit = async (commentEditValues: api.STTicketCommentEditValues, requesterUserId: string): Promise<string> => {
	try {
		const ticketDocRef = admin.firestore().collection(api.ST_TICKETS_COLLECTIONS).doc(commentEditValues.ticketId);
		const ticketDocData = (await ticketDocRef.get()).data() as api.STTicket;

		const comment = ticketDocData.comments.find((x) => x.id === commentEditValues.commentId);

		// no comment or not I created it
		if (!comment || comment.createdBy.id !== requesterUserId) {
			return null;
		}

		comment.comment = commentEditValues.newComment;

		// save comments
		await ticketDocRef.update({
			comments: ticketDocData.comments,
		});

		return commentEditValues.newComment;
	} catch (error) {
		throw new ApolloError(error);
	}
};
