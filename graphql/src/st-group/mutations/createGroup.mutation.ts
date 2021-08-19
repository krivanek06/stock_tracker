import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { Context } from '../../st-shared/st-shared.interface';
import { queryUserPublicData } from '../../user/user.query';
import { createEmptySTGroupHistoricalData, createSTGroupUser, initGroupFromInput } from '../st-group.util';

export const createGroup = async (groupInput: api.STGroupAllDataInput, { requesterUserId }: Context): Promise<api.STGroupAllData> => {
	try {
		const group = await createGroupObject(groupInput, requesterUserId);

		// persist public & private data
		const result = await admin.firestore().collection(api.ST_GROUP_COLLECTION_GROUPS).add(group);
		group.id = result.id;

		// create collections
		await createHistoricalDataCollection(group.id);
		await createMemberDataCollection(groupInput, group);

		// update user's groupInvitationReceived
		await sendGroupInvitationToUser(groupInput, group.id);

		// update owner's group
		await updateGroupOwnersData(group.id, requesterUserId);

		return group;
	} catch (error) {
		throw new ApolloError(error);
	}
};

const createGroupObject = async (groupInput: api.STGroupAllDataInput, requesterUserId: string): Promise<api.STGroupAllData> => {
	const group = initGroupFromInput(groupInput);

	group.owner = createSTGroupUser(await queryUserPublicData(requesterUserId));

	// if owner wants to be a member
	if (groupInput.isOwnerAlsoMember) {
		group.startedPortfolio.portfolioCash = group.owner.portfolio.lastPortfolioSnapshot?.portfolioCash ?? 0;
		group.startedPortfolio.portfolioInvested = group.owner.portfolio.lastPortfolioSnapshot?.portfolioInvested ?? 0;
		group.startedPortfolio.numberOfExecutedTransactions = group.owner.portfolio.numberOfExecutedTransactions;
		group.startedPortfolio.numberOfExecutedSellTransactions = group.owner.portfolio.numberOfExecutedSellTransactions;
		group.startedPortfolio.numberOfExecutedBuyTransactions = group.owner.portfolio.numberOfExecutedBuyTransactions;
		group.numberOfMembers = 1;
	}

	return group;
};

const createHistoricalDataCollection = async (groupId: string): Promise<void> => {
	await admin
		.firestore()
		.collection(api.ST_GROUP_COLLECTION_GROUPS)
		.doc(groupId)
		.collection(api.ST_GROUP_COLLECTION_MORE_INFORMATION)
		.doc(api.ST_GROUP_COLLECTION_HISTORICAL_DATA)
		.set(createEmptySTGroupHistoricalData());
};

const createMemberDataCollection = async (groupInput: api.STGroupAllDataInput, group: api.STGroupAllData): Promise<void> => {
	// load distinct users who were invited
	const invitationSent = await Promise.all([...new Set(groupInput.invitationSent)].map((m) => queryUserPublicData(m)));
	const invitedGroupUsers = invitationSent.map((m) => createSTGroupUser(m));

	await admin
		.firestore()
		.collection(api.ST_GROUP_COLLECTION_GROUPS)
		.doc(group.id)
		.collection(api.ST_GROUP_COLLECTION_MORE_INFORMATION)
		.doc(api.ST_GROUP_COLLECTION_MEMBERS)
		.set({
			id: group.id,
			members: groupInput.isOwnerAlsoMember ? [group.owner] : [],
			holdings: [],
			invitationSent: invitedGroupUsers,
			invitationReceived: [],
		});
};

const updateGroupOwnersData = async (groupid: string, requesterUserId: string): Promise<void> => {
	await admin
		.firestore()
		.collection(api.ST_USER_COLLECTION_USER)
		.doc(requesterUserId)
		.set(
			{
				groups: {
					groupOwner: admin.firestore.FieldValue.arrayUnion(groupid),
				},
			},
			{ merge: true }
		);
};

const sendGroupInvitationToUser = async (groupInput: api.STGroupAllDataInput, groupId: string): Promise<void> => {
	await groupInput.invitationSent.forEach((userId) => {
		admin
			.firestore()
			.collection(api.ST_USER_COLLECTION_USER)
			.doc(userId)
			.set(
				{
					groups: {
						groupInvitationReceived: admin.firestore.FieldValue.arrayUnion(groupId),
					},
				},
				{ merge: true }
			);
	});
};
