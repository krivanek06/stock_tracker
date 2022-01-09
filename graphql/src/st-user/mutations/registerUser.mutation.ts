import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as moment from 'moment';
import * as api from 'stock-tracker-common-interfaces';
import { convertSTUserPublicDataToSTUserIndentification } from '../utils/user.convertor';
import { createSTUserHistoricalData, createSTUserPrivateData, createSTUserPublicData } from '../utils/user.creator';

export const registerUser = async (user: api.STUserAuthenticationInput): Promise<boolean> => {
	try {
		const newUserPrivateData = createSTUserPrivateData(user);
		const newUserPublicData = createSTUserPublicData(user);
		const newUserHistoricalData = createSTUserHistoricalData(user.uid);
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

const addNewUserIntoUserRegistration = async (userIdentification: api.STUserIndentification): Promise<void> => {
	try {
		const userRegistrationDoc = await admin
			.firestore()
			.collection(api.ST_ADMIN_COLLECTION_ENUM.ADMIN_COL)
			.doc(api.ST_ADMIN_COLLECTION_ENUM.MAIN_INFORMATIONS_DOC)
			.get();
		const userRegistrationData = userRegistrationDoc.data() as api.STAdminMainInformations;

		const weeklyRegistratedUsers = [...userRegistrationData.usersWeeklyRegistrated];

		// check if in same week
		if (weeklyRegistratedUsers.length > 0 && moment().isSame(moment(weeklyRegistratedUsers.slice(-1)[0].timestamp), 'week')) {
			weeklyRegistratedUsers.slice(-1)[0].data += 1;
		} else {
			// user is registrated on different week than last registrated user
			weeklyRegistratedUsers.push({
				data: 1,
				timestamp: new Date().getTime(),
			});
		}

		await admin
			.firestore()
			.collection(api.ST_ADMIN_COLLECTION_ENUM.ADMIN_COL)
			.doc(api.ST_ADMIN_COLLECTION_ENUM.MAIN_INFORMATIONS_DOC)
			.update({
				usersRegistrated: userRegistrationData.usersRegistrated + 1,
				usersRegistrationSnippets: [userIdentification, ...userRegistrationData.usersRegistrationSnippets.slice(0, 10)],
				usersWeeklyRegistrated: weeklyRegistratedUsers,
			});
	} catch (error) {
		throw new ApolloError(error);
	}
};
