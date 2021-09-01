import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { queryUserPublicDataById } from './../../user/user.query';
import { querySTGroupByGroupId, querySTGroupMemberDataByGroupId } from './../st-group.query';
import { createSTGroupUser } from './../st-group.util';

/* 
    Group owner / manager can accept / deny users request into group
*/
export const toggleUsersInvitationRequestToGroup = async (accept: boolean, userId: string, groupId: string): Promise<api.STGroupUser> => {
	try {
		const userPublicData = await queryUserPublicDataById(userId);
		const groupMembers = await querySTGroupMemberDataByGroupId(groupId);
		const groupData = await querySTGroupByGroupId(groupId);

		const newGroupUser = createSTGroupUser(userPublicData);

		if (!groupMembers.invitationReceived.map((x) => x.id).includes(userId)) {
			throw new ApolloError(`No longer exists a request from user ${userPublicData.nickName} to join this group`);
		}

		// decrese users who sent invitation into groups
		if (accept) {
			await acceptUser(groupId, groupData, newGroupUser);
		} else {
			await denyUser(groupId);
		}

		// add or not user as member
		await addUserAsMember(accept, newGroupUser, groupMembers);

		// remove group invitation from user.groups.groupInvitationSent
		await removeGroupInvitationSentForUser(accept, userPublicData, groupId);

		return newGroupUser;
	} catch (error) {
		throw new ApolloError(error);
	}
};

const removeGroupInvitationSentForUser = async (acceptUser: boolean, userPublicData: api.STUserPublicData, groupId: string): Promise<void> => {
	await admin
		.firestore()
		.collection(api.ST_USER_COLLECTION_USER)
		.doc(userPublicData.id)
		.set(
			{
				groups: {
					groupInvitationSent: userPublicData.groups.groupInvitationSent.filter((invitation) => invitation !== groupId),
					groupMember: acceptUser ? [...userPublicData.groups.groupMember, groupId] : [...userPublicData.groups.groupMember],
				},
			},
			{ merge: true }
		);
};

export const addUserAsMember = async (
	acceptUser: boolean,
	newGroupUser: api.STGroupUser,
	groupMembers: api.STGroupMembersDocument
): Promise<void> => {
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

const denyUser = async (groupId: string): Promise<void> => {
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

export const acceptUser = async (groupId: string, groupData: api.STGroupAllData, newGroupUser: api.STGroupUser): Promise<void> => {
	// update group starting portfolio
	groupData.startedPortfolio.portfolioCash += newGroupUser.portfolio.lastPortfolioSnapshot.portfolioCash;
	groupData.startedPortfolio.portfolioInvested += newGroupUser.portfolio.lastPortfolioSnapshot.portfolioInvested;
	groupData.startedPortfolio.numberOfExecutedSellTransactions += newGroupUser.portfolio.numberOfExecutedSellTransactions;
	groupData.startedPortfolio.numberOfExecutedBuyTransactions += newGroupUser.portfolio.numberOfExecutedBuyTransactions;

	// update group portfolio
	groupData.portfolio.portfolioCash += newGroupUser.portfolio.lastPortfolioSnapshot.portfolioCash;
	groupData.portfolio.lastPortfolioSnapshot.portfolioInvested += newGroupUser.portfolio.lastPortfolioSnapshot.portfolioInvested;
	groupData.portfolio.lastPortfolioSnapshot.portfolioCash += newGroupUser.portfolio.lastPortfolioSnapshot.portfolioCash;
	groupData.portfolio.numberOfExecutedSellTransactions += newGroupUser.portfolio.numberOfExecutedSellTransactions;
	groupData.portfolio.numberOfExecutedBuyTransactions += newGroupUser.portfolio.numberOfExecutedBuyTransactions;

	await admin
		.firestore()
		.collection(api.ST_GROUP_COLLECTION_GROUPS)
		.doc(groupId)
		.set(
			{
				numberOfInvitationReceived: admin.firestore.FieldValue.increment(-1),
				numberOfMembers: admin.firestore.FieldValue.increment(1),
				portfolio: {
					...groupData.portfolio,
				},
				startedPortfolio: {
					...groupData.startedPortfolio,
				},
			},
			{ merge: true }
		);
};
