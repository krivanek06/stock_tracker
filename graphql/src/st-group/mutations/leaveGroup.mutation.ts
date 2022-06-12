import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { queryUserPublicDataById } from '../../st-user/user.query';
import { decreaseGroupPortfolio } from '../st-group.util';
import { Context } from './../../st-shared/st-shared.interface';
import { querySTGroupByGroupId, querySTGroupMemberDataByGroupId } from './../st-group.query';

export const leaveGroup = async (groupId: string, { requesterUserId }: Context): Promise<boolean> => {
	try {
		const group = await querySTGroupByGroupId(groupId);
		const groupMembersDoc = await querySTGroupMemberDataByGroupId(groupId);

		if (!groupMembersDoc.members.map((x) => x.id).includes(requesterUserId) && !group.managers.map((x) => x.id).includes(requesterUserId)) {
			throw new ApolloError('You cannot leave a group you are not a member or manager');
		}

		const person = groupMembersDoc.members.find((member) => member.id === requesterUserId);

		// remove starting balance when leaving group
		if (!!person) {
			decreaseGroupPortfolio(group, person.portfolio);
		}

		// save group data
		await updateGroupDate(requesterUserId, group);

		// save group members data
		await updateGroupMemberDoc(requesterUserId, groupMembersDoc);

		// remove group from users
		await removeGroupFromUser(requesterUserId, groupId);

		return true;
	} catch (error) {
		throw new ApolloError(error);
	}
};

const updateGroupDate = async (requesterUserId: string, group: api.STGroupAllData) => {
	const filteredManagers = group.managers.filter((x) => x.id !== requesterUserId);

	await admin
		.firestore()
		.collection(api.ST_GROUP_COLLECTION_GROUPS)
		.doc(group.id)
		.set(
			{
				managers: filteredManagers,
				numberOfMembers: group.numberOfMembers,
				startedPortfolio: {
					...group.startedPortfolio,
				},
				portfolio: {
					...group.portfolio,
				},
			},
			{ merge: true }
		);
};

const updateGroupMemberDoc = async (requesterUserId: string, groupMembersDoc: api.STGroupMembersDocument): Promise<void> => {
	const filteredMembers = groupMembersDoc.members.filter((x) => x.id !== requesterUserId);
	await admin
		.firestore()
		.collection(api.ST_GROUP_COLLECTION_GROUPS)
		.doc(groupMembersDoc.id)
		.collection(api.ST_GROUP_COLLECTION_MORE_INFORMATION)
		.doc(api.ST_GROUP_COLLECTION_MEMBERS)
		.set(
			{
				members: filteredMembers,
			},
			{ merge: true }
		);
};

const removeGroupFromUser = async (requesterUserId: string, groupId: string): Promise<void> => {
	const userPublicData = await queryUserPublicDataById(requesterUserId);

	await admin
		.firestore()
		.collection(api.ST_USER_COLLECTION_USER)
		.doc(requesterUserId)
		.set(
			{
				groups: {
					groupMember: userPublicData.groups.groupMember.filter((g) => g !== groupId),
				},
			},
			{ merge: true }
		);
};
