import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { getCurrentIOSDate } from '../../st-shared/st-shared.functions';
import { queryUserPublicDataById } from '../../st-user/user.query';
import { querySTGroupByGroupId, querySTGroupMemberDataByGroupId } from '../st-group.query';
import { createSTGroupUser } from '../st-group.util';
import { leaveGroup } from './leaveGroup.mutation';
import { acceptUser, addUserAsMember } from './toggleUsersInvitationRequestToGroup.mutation';

export const editGroup = async (groupInput: api.STGroupAllDataInput): Promise<boolean> => {
	try {
		// load group or create new
		const group = await querySTGroupByGroupId(groupInput.groupId);
		const groupMembersDoc = await querySTGroupMemberDataByGroupId(groupInput.groupId);
		const wasOwnerAlsoMember = !!groupMembersDoc.members.find((m) => m.id === group.owner.id);

		group.name = groupInput.name;
		group.description = groupInput.description;
		group.imagePath = groupInput.imagePath;
		group.imageUrl = groupInput.imageUrl;
		group.isInfinite = groupInput.isInfinite;
		group.isPrivate = groupInput.isPrivate;
		group.endDate = groupInput.endDate;
		group.lastEditedDate = getCurrentIOSDate();

		// if owner was also member and unchecked himself
		if (!groupInput.isOwnerAlsoMember && wasOwnerAlsoMember) {
			await leaveGroup(groupInput.groupId, { requesterUserId: group.owner.id });
		}
		// if owner was not member and wants to become
		else if (groupInput.isOwnerAlsoMember && !wasOwnerAlsoMember) {
			const userPublicData = await queryUserPublicDataById(group.owner.id);
			const newGroupUser = createSTGroupUser(userPublicData);
			await acceptUser(groupInput.groupId, group, userPublicData);
			await addUserAsMember(true, newGroupUser, groupMembersDoc);
		}

		// persist
		await admin.firestore().collection(`${api.ST_GROUP_COLLECTION_GROUPS}`).doc(`${group.id}`).set(group, { merge: true });

		//return querySTGroupAllDataByGroupId(group.groupId);
		return true;
	} catch (error) {
		throw new ApolloError(error);
	}
};
