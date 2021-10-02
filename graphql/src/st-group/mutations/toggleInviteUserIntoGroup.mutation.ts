import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { queryUserPublicDataById } from '../../st-user/user.query';
import { querySTGroupMemberDataByGroupId } from '../st-group.query';
import { createSTGroupUser } from '../st-group.util';

/* 
    Group manager / owner can invite / remove invitation for user
*/
export const toggleInviteUserIntoGroup = async (inviteUser: boolean, userId: string, groupId: string): Promise<api.STGroupUser> => {
	try {
		const userPublicData = await queryUserPublicDataById(userId);
		const groupMembers = await querySTGroupMemberDataByGroupId(groupId);
		const newGroupUser = createSTGroupUser(userPublicData);

		if (inviteUser) {
			if (!!groupMembers.members.find((m) => m.id === userId)) {
				throw new ApolloError(`User ${newGroupUser.nickName} is already invited into this group`);
			}
		} else {
			if (!groupMembers.invitationSent.find((m) => m.id === userId)) {
				throw new ApolloError(`Group invitaiton for user ${newGroupUser.nickName} has been already removed. Refresh your site`);
			}
		}

		// decrese / increase number of users who received invitation
		await incrementNmberOfInvitationReceivedForGroup(inviteUser, groupId);

		// add or not user as invited
		await addUserAsInvited(inviteUser, newGroupUser, groupMembers);

		// remove / add group invitation from user.groups.groupInvitationReceived
		await toggleGroupInvitationSentForUser(inviteUser, userPublicData, groupId);

		return newGroupUser;
	} catch (error) {
		throw new ApolloError(error);
	}
};

const toggleGroupInvitationSentForUser = async (inviteUser: boolean, userPublicData: api.STUserPublicData, groupId: string): Promise<void> => {
	await admin
		.firestore()
		.collection(api.ST_USER_COLLECTION_USER)
		.doc(userPublicData.id)
		.set(
			{
				groups: {
					groupInvitationReceived: inviteUser
						? [...userPublicData.groups.groupInvitationReceived, groupId]
						: userPublicData.groups.groupInvitationReceived.filter((id) => id !== groupId),
				},
			},
			{ merge: true }
		);
};

const addUserAsInvited = async (inviteUser: boolean, newGroupUser: api.STGroupUser, groupMembers: api.STGroupMembersDocument): Promise<void> => {
	await admin
		.firestore()
		.collection(api.ST_GROUP_COLLECTION_GROUPS)
		.doc(groupMembers.id)
		.collection(api.ST_GROUP_COLLECTION_MORE_INFORMATION)
		.doc(api.ST_GROUP_COLLECTION_MEMBERS)
		.set(
			{
				invitationSent: inviteUser
					? [...groupMembers.invitationSent, newGroupUser]
					: groupMembers.invitationSent.filter((invited) => invited.id !== newGroupUser.id),
			},
			{ merge: true }
		);
};

const incrementNmberOfInvitationReceivedForGroup = async (inviteUser: boolean, groupId: string): Promise<void> => {
	await admin
		.firestore()
		.collection(api.ST_GROUP_COLLECTION_GROUPS)
		.doc(groupId)
		.set(
			{
				numberOfInvitationSent: inviteUser ? admin.firestore.FieldValue.increment(1) : admin.firestore.FieldValue.increment(-1),
			},
			{ merge: true }
		);
};
