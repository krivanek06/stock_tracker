import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { Context } from './../../st-shared/st-shared.interface';
import { querySTGroupByGroupId, querySTGroupMemberDataByGroupId } from './../st-group.query';

export const leaveGroup = async (groupId: string, { requesterUserId }: Context): Promise<boolean> => {
	try {
		const group = await querySTGroupByGroupId(groupId);
		const groupMembersDoc = await querySTGroupMemberDataByGroupId(groupId);

		if (!groupMembersDoc.members.map((x) => x.id).includes(requesterUserId) && !group.managers.map((x) => x.id).includes(requesterUserId)) {
			throw new ApolloError('You cannot leave a group you are not a member or manager');
		}
		if (group.owner.id === groupId) {
			throw new ApolloError('Owner can only delete whole group');
		}

		const filteredManagers = group.managers.filter((x) => x.id !== requesterUserId);
		const filteredMembers = groupMembersDoc.members.filter((x) => x.id !== requesterUserId);
		const person = groupMembersDoc.members.find((member) => member.id === requesterUserId);

		// remove starting balance when leaving group
		if (!person) {
			group.portfolio.startingPortfolioSnapshot.portfolioCash -= person.portfolio.startingPortfolioSnapshot.portfolioCash;
			group.portfolio.startingPortfolioSnapshot.portfolioInvested -= person.portfolio.startingPortfolioSnapshot.portfolioInvested;
			group.numberOfMembers -= 1;
		}

		// save group data
		await admin
			.firestore()
			.collection(api.ST_GROUP_COLLECTION_GROUPS)
			.doc(groupId)
			.set(
				{
					managers: filteredManagers,
					portfolio: {
						...group.portfolio,
					},
				},
				{ merge: true }
			);

		// save group members data
		await admin
			.firestore()
			.collection(api.ST_GROUP_COLLECTION_GROUPS)
			.doc(groupId)
			.collection(api.ST_GROUP_COLLECTION_MORE_INFORMATION)
			.doc(api.ST_GROUP_COLLECTION_MEMBERS)
			.set(
				{
					members: filteredMembers,
				},
				{ merge: true }
			);

		return true;
	} catch (error) {
		throw new ApolloError(error);
	}
};
