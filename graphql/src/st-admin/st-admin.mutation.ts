import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as moment from 'moment';
import * as api from 'stock-tracker-common-interfaces';
import { queryAdminMainInformations } from './st-admin.query';

export const addNewUserIntoUserRegistration = async (userIdentification: api.STUserIndentification): Promise<void> => {
	try {
		const userRegistrationDoc = await queryAdminMainInformations();
		const weeklyRegistratedUsers = [...userRegistrationDoc.usersWeeklyRegistrated];

		// check if in same week
		if (moment().isSame(moment(weeklyRegistratedUsers.slice(-1)[0].timestamp), 'week')) {
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
				usersRegistrated: userRegistrationDoc.usersRegistrated + 1,
				usersRegistrationSnippets: [userIdentification, ...userRegistrationDoc.usersRegistrationSnippets.slice(0, 10)],
				usersWeeklyRegistrated: weeklyRegistratedUsers,
			});
	} catch (error) {
		throw new ApolloError(error);
	}
};
