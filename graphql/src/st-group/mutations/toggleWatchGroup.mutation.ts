import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { Context } from './../../st-shared/st-shared.interface';

export const toggleWatchGroup = async (groupId: string, { requesterUserId }: Context): Promise<boolean> => {
	try {
		const newWatchedUser = await toggleGroupIntoUser(groupId, requesterUserId);
		// await toggleUserIntoGroup(groupId, requesterUserId);
		await updateGroupWatchedMembers(groupId, newWatchedUser);

		return true;
	} catch (error) {
		throw new ApolloError(error);
	}
};

const toggleGroupIntoUser = async (groupId: string, requesterUserId: string): Promise<boolean> => {
	const userDoc = await admin.firestore().collection(api.ST_USER_COLLECTION_USER).doc(requesterUserId).get();
	const user = userDoc.data() as api.STUserPublicData;
	let addUsers = true;

	let groupWatched: string[] = [];
	if (user.groups.groupWatched.includes(groupId)) {
		// remove
		groupWatched = user.groups.groupWatched.filter((g) => g !== groupId);
		addUsers = false;
	} else {
		// add
		groupWatched = [...user.groups.groupWatched, groupId];
		addUsers = true;
	}

	await userDoc.ref.set(
		{
			groups: {
				groupWatched,
			},
		},
		{ merge: true }
	);
	return addUsers;
};

const updateGroupWatchedMembers = async (groupId: string, isNewUser) => {
	await admin
		.firestore()
		.collection(api.ST_GROUP_COLLECTION_GROUPS)
		.doc(groupId)
		.set(
			{
				watchedByUsers: isNewUser ? admin.firestore.FieldValue.increment(1) : admin.firestore.FieldValue.increment(-1),
			},
			{ merge: true }
		);
};

// const toggleUserIntoGroup = async (groupId: string, requesterUserId: string): Promise<void> => {
// 	const groupDoc = await admin
// 		.firestore()
// 		.collection(api.ST_GROUP_COLLECTION_GROUPS)
// 		.doc(groupId)
// 		.collection(api.ST_GROUP_COLLECTION_MORE_INFORMATION)
// 		.doc(api.ST_GROUP_COLLECTION_MEMBERS)
// 		.get();
// 	const data = groupDoc.data() as api.STGroupMembersDocument;

// 	let watchedByUser: api.STUserIndentification[] = [];
// 	const watchedUserIds = data.watchedByUser.map((u) => u.id);
// 	const removeUser = watchedUserIds.includes(requesterUserId);

// 	// toggle
// 	if (removeUser) {
// 		// Remove
// 		watchedByUser = data.watchedByUser.filter((u) => u.id !== requesterUserId);
// 	} else {
// 		// Add
// 		const user = await queryUserPublicDataById(requesterUserId);
// 		const userIdentification = convertSTUserPublicDataToSTUserIndentification(user);
// 		watchedByUser = [...data.watchedByUser, userIdentification];
// 	}

// 	// persist
// 	groupDoc.ref.update({
// 		watchedByUser,
// 	});
// };
