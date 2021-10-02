import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { addNewUserIntoUserRegistration } from '../../st-admin/st-admin.mutation';
import { convertSTUserPublicDataToSTUserIndentification } from '../utils/user.convertor';
import { createSTUserHistoricalData, createSTUserPrivateData, createSTUserPublicData } from '../utils/user.creator';

export const registerUser = async (user: api.STUserAuthenticationInput): Promise<boolean> => {
	try {
		const newUserPrivateData = createSTUserPrivateData(user);
		const newUserPublicData = createSTUserPublicData(user);
		const newUserHistoricalData = createSTUserHistoricalData();
		const newUserIdentification = convertSTUserPublicDataToSTUserIndentification(newUserPublicData);

		// save public data
		let userDocRef = admin.firestore().collection(api.ST_USER_COLLECTION_USER).doc(`${user.uid}`);
		await userDocRef.set(newUserPublicData);

		// save private data
		await userDocRef.collection(api.ST_USER_COLLECTION_MORE_INFORMATION).doc(api.ST_USER_DOCUMENT_PRIVATE_DATA).set(newUserPrivateData);

		// save historical data
		await userDocRef.collection(api.ST_USER_COLLECTION_MORE_INFORMATION).doc(api.ST_USER_DOCUMENT_HISTORICAL_DATA).set(newUserHistoricalData);

		// add user into admin statistics
		await addNewUserIntoUserRegistration(newUserIdentification);

		return true;
	} catch (error) {
		throw new ApolloError(error);
	}
};
