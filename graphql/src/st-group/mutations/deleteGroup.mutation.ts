import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { Context } from './../../st-shared/st-shared.interface';
import { querySTGroupByGroupId, querySTGroupMemberDataByGroupId } from './../st-group.query';

export const deleteGroup = async (groupId: string, { requesterUserId }: Context): Promise<boolean> => {
	try {
		const group = await querySTGroupByGroupId(groupId);
		const groupMembersData = await querySTGroupMemberDataByGroupId(groupId);

		if (group.owner.id !== requesterUserId) {
			throw new ApolloError('Only owner can delete a group');
		}

		// remove group from owner
		removeGroupFromUser(groupId, [group.owner.id], 'groupOwner');
		// remove group from members
		removeGroupFromUser(
			groupId,
			groupMembersData.members.map((m) => m.id),
			'groupMember'
		);
		// remove group from invited people
		removeGroupFromUser(
			groupId,
			groupMembersData.invitationSent.map((m) => m.id),
			'groupInvitationReceived'
		);
		// remove group from received invitations
		removeGroupFromUser(
			groupId,
			groupMembersData.invitationReceived.map((m) => m.id),
			'groupInvitationSent'
		);

		// delete subcollection - historical data
		await admin
			.firestore()
			.collection(api.ST_GROUP_COLLECTION_GROUPS)
			.doc(groupId)
			.collection(api.ST_GROUP_COLLECTION_MORE_INFORMATION)
			.doc(api.ST_GROUP_COLLECTION_HISTORICAL_DATA)
			.delete();

		// delete subcollection - members
		await admin
			.firestore()
			.collection(api.ST_GROUP_COLLECTION_GROUPS)
			.doc(groupId)
			.collection(api.ST_GROUP_COLLECTION_MORE_INFORMATION)
			.doc(api.ST_GROUP_COLLECTION_MEMBERS)
			.delete();

		// delete main document
		await admin.firestore().collection(api.ST_GROUP_COLLECTION_GROUPS).doc(groupId).delete();
		return true;
	} catch (error) {
		throw new ApolloError(error);
	}
};

const removeGroupFromUser = async (groupId: string, userIds: string[], groupAttribute: string) => {
	try {
		for (const userId of userIds) {
			admin
				.firestore()
				.collection(api.ST_USER_COLLECTION_USER)
				.doc(userId)
				.set(
					{
						groups: {
							[groupAttribute]: admin.firestore.FieldValue.arrayRemove(groupId),
						},
					},
					{ merge: true }
				);
		}
	} catch (error) {
		throw new ApolloError(error);
	}
};
