import { ApolloError, ValidationError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { convertSTUserPublicDataToSTUserIndentification, convertSTUserPublicDataToSTUserIndentificationBase } from './utils/user.convertor';

export const authenticateUser = async (uid: string) => {
	try {
		const userDoc = await admin.firestore().doc(`${api.ST_USER_COLLECTION_USER}/${uid}`).get();
		const user = userDoc.data() as api.STUserPublicData | undefined;

		console.log(`Singing in ${user?.nickName}`);

		return user || new ValidationError('User ID not found');

		// update lastSignIn
		/*admin.firestore()
            .collection(`${api.ST_USER_COLLECTION_USER}`)
            .doc(uid)
            .update({lastSignInDate: getCurrentIOSDate()});*/

		return user;
	} catch (error) {
		throw new ApolloError(error);
	}
};

export const queryUserPublicDataById = async (uid: string): Promise<api.STUserPublicData> => {
	try {
		const userDoc = await admin.firestore().doc(`${api.ST_USER_COLLECTION_USER}/${uid}`).get();
		const user = userDoc.data() as api.STUserPublicData;

		return user;
	} catch (error) {
		throw new ApolloError(error);
	}
};

export const queryUserPublicDataByUsername = async (usernamePrefix: string): Promise<api.STUserPublicData[]> => {
	try {
		// const userDocs = await admin.firestore().collection(api.ST_USER_COLLECTION_USER).where('nickName', '>=', usernamePrefix).limit(10).get();
		const userDocs = await admin
			.firestore()
			.collection(api.ST_USER_COLLECTION_USER)
			.orderBy('nickName')
			.where('nickName', '>=', usernamePrefix.toUpperCase())
			.where('nickName', '<=', usernamePrefix.toLowerCase() + '\uf8ff')
			.limit(10)
			.get();

		return userDocs.docs.map((d) => d.data() as api.STUserPublicData);
	} catch (error) {
		throw new ApolloError(error);
	}
};

export const queryUserIdentification = async (userId: string): Promise<api.STUserIndentification> => {
	try {
		const user = await queryUserPublicDataById(userId);
		return convertSTUserPublicDataToSTUserIndentification(user);
	} catch (error) {
		throw new ApolloError(error);
	}
};

export const queryUserIdentificationBase = async (userId: string): Promise<api.STUserIndentificationBase> => {
	try {
		const user = await queryUserPublicDataById(userId);
		return convertSTUserPublicDataToSTUserIndentificationBase(user);
	} catch (error) {
		throw new ApolloError(error);
	}
};
