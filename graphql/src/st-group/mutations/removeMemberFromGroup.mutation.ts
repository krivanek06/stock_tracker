import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { Context } from '../../st-shared/st-shared.interface';
import { querySTGroupByGroupId, querySTGroupMemberDataByGroupId } from '../st-group.query';

/* 
    Remove user from members array
	Remove group from user.group.groupMember
    Adjust group starting portfolio
    Adjust group portfolio
*/
export const removeMemberFromGroup = async (groupId: string, removingUserId: string, { requesterUserId }: Context): Promise<true> => {
	try {
		const group = await querySTGroupByGroupId(groupId);
		const groupMembers = await querySTGroupMemberDataByGroupId(groupId);

		const removingMember = groupMembers.members.find((m) => m.id === removingUserId);
		const updatedMembers = groupMembers.members.filter((m) => m.id !== removingUserId);

		if (!removingMember) {
			throw new ApolloError(`Removing user prohibited. User is no longer member of group: ${group.name}`);
		}
		if (group.owner.id !== requesterUserId) {
			throw new ApolloError(`Removing user prohibited. Only group owner can remove members`);
		}

		await removeGroupRefFromUser(groupId, removingMember);
		await updateGroupDocument(groupId, removingMember);
		await updateGroupMembersDocument(groupId, updatedMembers);
		return true;
	} catch (error) {
		throw new ApolloError(error);
	}
};

const removeGroupRefFromUser = async (groupId: string, { id }: api.STGroupUser) => {
	await admin
		.firestore()
		.collection(api.ST_USER_COLLECTION_USER)
		.doc(id)
		.set(
			{
				groups: {
					groupMember: admin.firestore.FieldValue.arrayRemove(groupId),
				},
			},
			{ merge: true }
		);
};

/* 
    decrement number of members
    decrement starting portfolio
    decrement last portfolio snapshot
*/
const updateGroupDocument = async (groupId: string, removingMember: api.STGroupUser) => {
	await admin
		.firestore()
		.collection(api.ST_GROUP_COLLECTION_GROUPS)
		.doc(groupId)
		.set(
			{
				numberOfMembers: admin.firestore.FieldValue.increment(-1),
				portfolio: {
					lastPortfolioSnapshot: {
						portfolioCash: admin.firestore.FieldValue.increment(-removingMember.portfolio.lastPortfolioSnapshot.portfolioCash),
						portfolioInvested: admin.firestore.FieldValue.increment(-removingMember.portfolio.lastPortfolioSnapshot.portfolioInvested),
					},
					numberOfExecutedBuyTransactions: admin.firestore.FieldValue.increment(-removingMember.portfolio.numberOfExecutedBuyTransactions),
					numberOfExecutedSellTransactions: admin.firestore.FieldValue.increment(-removingMember.portfolio.numberOfExecutedSellTransactions),
				},
				startedPortfolio: {
					numberOfExecutedBuyTransactions: admin.firestore.FieldValue.increment(-removingMember.startedPortfolio.numberOfExecutedBuyTransactions),
					numberOfExecutedSellTransactions: admin.firestore.FieldValue.increment(-removingMember.startedPortfolio.numberOfExecutedSellTransactions),
					portfolioCash: admin.firestore.FieldValue.increment(-removingMember.startedPortfolio.portfolioCash),
					portfolioInvested: admin.firestore.FieldValue.increment(-removingMember.startedPortfolio.portfolioInvested),
				},
			},
			{ merge: true }
		);
};

const updateGroupMembersDocument = async (groupId: string, updatedMembers: api.STGroupUser[]) => {
	await admin
		.firestore()
		.collection(api.ST_GROUP_COLLECTION_GROUPS)
		.doc(groupId)
		.collection(api.ST_GROUP_COLLECTION_MORE_INFORMATION)
		.doc(api.ST_GROUP_COLLECTION_MEMBERS)
		.set(
			{
				members: updatedMembers,
			},
			{ merge: true }
		);
};
