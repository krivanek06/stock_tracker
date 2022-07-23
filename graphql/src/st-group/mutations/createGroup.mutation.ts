import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { Context } from '../../st-shared/st-shared.interface';
import { queryUserPublicDataById } from '../../st-user/user.query';
import { createEmptySTGroupHistoricalData, createSTGroupUser, increaseGroupPortfolio, initGroupFromInput } from '../st-group.util';

export const createGroup = async (groupInput: api.STGroupAllDataInput, { requesterUserId }: Context): Promise<api.STGroupAllData> => {
	try {
		if (groupInput.invitationSent.length > 40) {
			throw new Error('Maximum allowed number of users in one group is 40');
		}
		const ref = admin.firestore().collection('groups').doc();
		const newId = ref.id;

		const group = await createGroupObject(newId, groupInput, requesterUserId);

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

const createGroupObject = async (groupId: string, groupInput: api.STGroupAllDataInput, requesterUserId: string): Promise<api.STGroupAllData> => {
	const group = initGroupFromInput(groupId, groupInput);

	group.owner = createSTGroupUser(await queryUserPublicDataById(requesterUserId));

	// if owner wants to be a member
	if (groupInput.isOwnerAlsoMember) {
		increaseGroupPortfolio(group, group.owner.portfolio);
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
		.set(createEmptySTGroupHistoricalData(groupId));
};

const createMemberDataCollection = async (groupInput: api.STGroupAllDataInput, group: api.STGroupAllData): Promise<void> => {
	// load distinct users who were invited
	const invitationSent = await Promise.all([...new Set(groupInput.invitationSent)].map((m) => queryUserPublicDataById(m)));
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
	for (const userId of groupInput.invitationSent) {
		await admin
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
	}
};
