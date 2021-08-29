import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { Context } from '../../st-shared/st-shared.interface';

const resolveTicketsForUser = async (userId: string) => {
	try {
		const ticketDocs = await admin.firestore().collection(api.ST_TICKETS_COLLECTIONS).where('createdBy.id', '==', userId).get();
		const tickets = ticketDocs.docs.map((d) => d.data() as api.STTicket);
		return tickets;
	} catch (error) {
		throw new ApolloError(error);
	}
};

const resolveOnlyOpenTicketsForAdmin = async () => {
	try {
		const ticketDocs = await admin.firestore().collection(api.ST_TICKETS_COLLECTIONS).where('isOpen', '==', true).get();
		const tickets = ticketDocs.docs.map((d) => d.data() as api.STTicket);
		return tickets;
	} catch (error) {
		throw new ApolloError(error);
	}
};

export const stTicketsResolver = {
	STUserPrivateData: {
		tickets: async (userPrivateData: api.STUserPrivateData, _, context: Context) => await resolveTicketsForUser(context.requesterUserId),
	},

	STAdminMainInformations: {
		tickets: async () => await resolveOnlyOpenTicketsForAdmin(),
	},
};
