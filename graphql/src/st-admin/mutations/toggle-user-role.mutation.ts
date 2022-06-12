import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';

export const adminToggleUserRoles = async (userId: string, role: string): Promise<boolean> => {
	try {
		const userDoc = await admin
			.firestore()
			.collection(api.ST_USER_COLLECTION_USER)
			.doc(userId)
			.collection(api.ST_USER_COLLECTION_MORE_INFORMATION)
			.doc(api.ST_USER_DOCUMENT_PRIVATE_DATA)
			.get();

		const userPrivateData = userDoc.data() as api.STUserPrivateData;
		const newRoles = userPrivateData.roles.includes(role) ? userPrivateData.roles.filter((r) => r !== role) : [...userPrivateData.roles, role];

		await userDoc.ref.set(
			{
				roles: newRoles,
			},
			{ merge: true }
		);
		return true;
	} catch (error) {
		throw new ApolloError(error);
	}
};
