import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { Context } from './../../st-shared/st-shared.interface';
import { queryUserPublicData } from './../../user/user.query';
import { querySTGroupByGroupId, querySTGroupMemberDataByGroupId } from './../st-group.query';
import { createSTGroupUser } from './../st-group.util';

/**
 * Invited USERS may accept or decline received group invitation
 * @param uid
 * @param groupId
 * @param accept
 */
export const answerReceivedGroupInvitation = async (groupId: string, accept: boolean, { requesterUserId }: Context): Promise<api.STGroupAllData> => {
	try {
		const group = await querySTGroupByGroupId(groupId);
		const groupMembers = await querySTGroupMemberDataByGroupId(groupId);

		if (!groupMembers.invitationSent.map((x) => x.id).includes(requesterUserId)) {
			throw new ApolloError(`You have no invitation from group ${group.name}`);
		}

		const user = await queryUserPublicData(requesterUserId);
		const newGroupUser = createSTGroupUser(user);

		// update group
		await updateGroupData(accept, group, newGroupUser);
		await updateGroupMemberData(accept, groupMembers, newGroupUser);

		// remove invitation from user
		await updateUserReceivedInvitation(user, groupId, accept);

		return group;
	} catch (error) {
		throw new ApolloError(error);
	}
};

const updateUserReceivedInvitation = async (user: api.STUserPublicData, groupId: string, accept: boolean): Promise<void> => {
	await admin
		.firestore()
		.collection(api.ST_USER_COLLECTION_USER)
		.doc(user.id)
		.set(
			{
				groups: {
					groupInvitationReceived: user.groups.groupInvitationReceived.filter((invitation) => invitation !== groupId),
					groupMember: accept ? [...user.groups.groupMember, groupId] : [...user.groups.groupMember],
				},
			},
			{ merge: true }
		);
};

const updateGroupMemberData = async (accept: boolean, groupMembers: api.STGroupMembersDocument, newGroupUser: api.STGroupUser): Promise<void> => {
	await admin
		.firestore()
		.collection(api.ST_GROUP_COLLECTION_GROUPS)
		.doc(groupMembers.id)
		.collection(api.ST_GROUP_COLLECTION_MORE_INFORMATION)
		.doc(api.ST_GROUP_COLLECTION_MEMBERS)
		.set(
			{
				invitationSent: groupMembers.invitationSent.filter((x) => x.id !== newGroupUser.id),
				members: accept ? [...groupMembers.members, newGroupUser] : groupMembers.members,
			},
			{ merge: true }
		);
};

const updateGroupData = async (accept: boolean, group: api.STGroupAllData, newGroupUser: api.STGroupUser): Promise<void> => {
	if (accept) {
		group.startedPortfolio.portfolioCash += newGroupUser.portfolio.lastPortfolioSnapshot.portfolioCash;
		group.startedPortfolio.portfolioInvested += newGroupUser.portfolio.lastPortfolioSnapshot.portfolioInvested;
		group.startedPortfolio.numberOfExecutedTransactions += newGroupUser.portfolio.numberOfExecutedTransactions;
		group.startedPortfolio.numberOfExecutedSellTransactions += newGroupUser.portfolio.numberOfExecutedSellTransactions;
		group.startedPortfolio.numberOfExecutedBuyTransactions += newGroupUser.portfolio.numberOfExecutedBuyTransactions;
		group.numberOfMembers += 1;
	}

	await admin
		.firestore()
		.collection(`${api.ST_GROUP_COLLECTION_GROUPS}`)
		.doc(group.id)
		.set(
			{
				portfolio: {
					...group.portfolio,
				},
				startedPortfolio: {
					...group.startedPortfolio,
				},
				numberOfMembers: group.numberOfMembers,
				numberOfInvitationSent: group.numberOfInvitationSent - 1,
			},
			{ merge: true }
		);
};
