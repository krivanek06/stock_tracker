import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { queryUserPublicData } from './../../user/user.query';
import { querySTGroupMemberDataByGroupId } from './../st-group.query';
import { createSTGroupUser } from './../st-group.util';

/* 
    Group owner / manager can accept / deny users request into group
*/
export const toggleUsersInvitationRequestToGroup = async (acceptUser: boolean, userId: string, groupId: string): Promise<api.STGroupUser> => {
	try {
		const userPublicData = await queryUserPublicData(userId);
		const groupMembers = await querySTGroupMemberDataByGroupId(groupId);
		const newGroupUser = createSTGroupUser(userPublicData);

		// decrese users who sent invitation into groups
		await decresenNmberOfInvitationReceivedForGroup(groupId);

		// add or not user as member
		await addUserAsMember(acceptUser, newGroupUser, groupMembers);

		// remove group invitation from user.groups.groupInvitationSent
		await removeGroupInvitationSentForUser(userPublicData, groupId);

		return newGroupUser;
	} catch (error) {
		throw new ApolloError(error);
	}
};

const removeGroupInvitationSentForUser = async (userPublicData: api.STUserPublicData, groupId: string): Promise<void> => {
	await admin
		.firestore()
		.collection(api.ST_USER_COLLECTION_USER)
		.doc(userPublicData.id)
		.set(
			{
				['groups.groupInvitationSent']: userPublicData.groups.groupInvitationSent.filter((invitation) => invitation !== groupId),
			},
			{ merge: true }
		);
};

const addUserAsMember = async (acceptUser: boolean, newGroupUser: api.STGroupUser, groupMembers: api.STGroupMembersDocument): Promise<void> => {
	await admin
		.firestore()
		.collection(api.ST_GROUP_COLLECTION_GROUPS)
		.doc(groupMembers.id)
		.collection(api.ST_GROUP_COLLECTION_MORE_INFORMATION)
		.doc(api.ST_GROUP_COLLECTION_MEMBERS)
		.set(
			{
				invitationReceived: groupMembers.invitationReceived.filter((invitation) => invitation.id !== newGroupUser.id),
				members: acceptUser ? [...groupMembers.members, newGroupUser] : [...groupMembers.members],
			},
			{ merge: true }
		);
};

const decresenNmberOfInvitationReceivedForGroup = async (groupId: string): Promise<void> => {
	await admin
		.firestore()
		.collection(api.ST_GROUP_COLLECTION_GROUPS)
		.doc(groupId)
		.set(
			{
				numberOfInvitationReceived: admin.firestore.FieldValue.increment(-1),
			},
			{ merge: true }
		);
};
