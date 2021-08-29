import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
export const queryAdminMainInformations = async (): Promise<api.STAdminMainInformations> => {
	try {
		const userRegistrationDoc = await admin
			.firestore()
			.collection(api.ST_ADMIN_COLLECTION_ENUM.ADMIN_COL)
			.doc(api.ST_ADMIN_COLLECTION_ENUM.MAIN_INFORMATIONS_DOC)
			.get();
		const userRegistrationData = userRegistrationDoc.data() as api.STAdminMainInformations;

		return userRegistrationData;
	} catch (error) {
		throw new ApolloError(error);
	}
};
