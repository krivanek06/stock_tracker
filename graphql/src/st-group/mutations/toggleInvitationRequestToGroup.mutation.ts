import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { queryUserPublicDataById } from '../../user/user.query';
import { createSTGroupUser } from '../st-group.util';
import { Context } from './../../st-shared/st-shared.interface';
import { querySTGroupByGroupId, querySTGroupMemberDataByGroupId } from './../st-group.query';

/***
 * User can send or cancel his sent invitation request to group
 * @param uid
 * @param groupId
 */
export const toggleInvitationRequestToGroup = async (
	groupId: string,
	sendInvitation: boolean,
	{ requesterUserId }: Context
): Promise<api.STGroupAllData> => {
	try {
		const groupMembersDoc = await querySTGroupMemberDataByGroupId(groupId);
		const user = await queryUserPublicDataById(requesterUserId);

		if (groupMembersDoc.members.map((x) => x.id).includes(requesterUserId)) {
			throw new ApolloError(`Cannot send / cancel invitation, you are already a member in this group`);
		}

		if (sendInvitation && groupMembersDoc.invitationSent.map((x) => x.id).includes(requesterUserId)) {
			throw new ApolloError(`You are already invited from this group, please refresh your site`);
		}

		if (sendInvitation && user.groups.groupInvitationSent.includes(groupId)) {
			throw new ApolloError(`You have already sent your invitation into this group`);
		}

		if (!sendInvitation) {
			// already sent invitation -> cancel it
			groupMembersDoc.invitationReceived = groupMembersDoc.invitationReceived.filter((x) => x.id !== requesterUserId);

			// remove group id for user groupInvitationSent
			await updateGroupInvitationSentForUser(user, groupId, false);

			// decrese numberOfInvitationReceived
			await updateNumberOfInvitationReceivedForGoup(groupId, false);
		} else {
			// sent invitation request to group
			groupMembersDoc.invitationReceived = [...groupMembersDoc.invitationReceived, createSTGroupUser(user)];

			// add group id for user groupInvitationSent
			await updateGroupInvitationSentForUser(user, groupId, true);

			// increase numberOfInvitationReceived
			await updateNumberOfInvitationReceivedForGoup(groupId, true);
		}

		// save invitationReceived for group
		await updateInvitationReceivedForGroup(groupMembersDoc);

		return await querySTGroupByGroupId(groupId);
	} catch (error) {
		throw new ApolloError(error);
	}
};

const updateNumberOfInvitationReceivedForGoup = async (groupId: string, addInvitaiton: boolean): Promise<void> => {
	await admin
		.firestore()
		.collection(api.ST_GROUP_COLLECTION_GROUPS)
		.doc(groupId)
		.set(
			{
				numberOfInvitationReceived: addInvitaiton ? admin.firestore.FieldValue.increment(1) : admin.firestore.FieldValue.increment(-1),
			},
			{ merge: true }
		);
};

const updateGroupInvitationSentForUser = async (user: api.STUserPublicData, groupId: string, addInvitaiton: boolean): Promise<void> => {
	const groupInvitationSent = addInvitaiton
		? [...user.groups.groupInvitationSent, groupId]
		: user.groups.groupInvitationSent.filter((d) => d !== groupId);

	await admin
		.firestore()
		.collection(api.ST_USER_COLLECTION_USER)
		.doc(user.id)
		.set(
			{
				groups: {
					groupInvitationSent: groupInvitationSent,
				},
			},
			{ merge: true }
		);
};

const updateInvitationReceivedForGroup = async (groupMembersDoc: api.STGroupMembersDocument): Promise<void> => {
	await admin
		.firestore()
		.collection(api.ST_GROUP_COLLECTION_GROUPS)
		.doc(groupMembersDoc.id)
		.collection(api.ST_GROUP_COLLECTION_MORE_INFORMATION)
		.doc(api.ST_GROUP_COLLECTION_MEMBERS)
		.set(
			{
				invitationReceived: groupMembersDoc.invitationReceived,
			},
			{ merge: true }
		);
};
