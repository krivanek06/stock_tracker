import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { getCurrentIOSDate } from '../../st-shared/st-shared.functions';
import { queryUserPublicDataById, queryUserPublicDataByUsername } from '../user.query';
import { resolveUserPrivateData } from '../user.resolver';

export const editUser = async (editInput: api.STUserEditDataInput): Promise<boolean> => {
	try {
		// update private data
		const userPrivateData = await resolveUserPrivateData(editInput.userId);
		if (userPrivateData.finnhubKey !== editInput.finnhubKey) {
			console.log(`upadting finnhub key for user ${userPrivateData.id}`);
			await updateUserPrivateData(editInput, userPrivateData);
		}

		const userPublicData = (await queryUserPublicDataById(editInput.userId)) as api.STUserPublicData;
		const initPortfolio = !userPrivateData.tradingEnabledDate && !!editInput.finnhubKey && !userPublicData.portfolio.portfolioCash;

		// init portfolio
		if (initPortfolio) {
			await initUserPortfolio(userPublicData);
		}

		// update nickname or photo
		if (userPublicData.nickName !== editInput.nickName || userPublicData.photoURL !== editInput.photoURL) {
			const similarUserNames = await queryUserPublicDataByUsername(editInput.nickName);
			const existsSameName = similarUserNames.find((u) => u.nickName.toLocaleLowerCase() === editInput.nickName.toLowerCase());

			// somebody else already has this nickname
			if (existsSameName && existsSameName.id !== editInput.userId) {
				throw new ApolloError(`User with name ${editInput.nickName} aleady exists`);
			}

			await updateUserPublicData(editInput, userPublicData);
			await updateUserPublicDataInGroups(editInput, userPublicData);
		}

		return true;
	} catch (error) {
		throw new ApolloError(error);
	}
};

const updateGroupMemberStats = async (editInput: api.STUserEditDataInput, groupId: string): Promise<void> => {
	const groupMemberRef = admin
		.firestore()
		.collection(api.ST_GROUP_COLLECTION_GROUPS)
		.doc(groupId)
		.collection(api.ST_GROUP_COLLECTION_MORE_INFORMATION)
		.doc(api.ST_GROUP_COLLECTION_MEMBERS);

	const groupMemberDoc = (await groupMemberRef.get()).data() as api.STGroupMembersDocument;

	// update nickname & photo for gorup member
	const groupMember = groupMemberDoc.members.find((m) => m.id === editInput.userId);
	if (groupMember) {
		groupMember.nickName = editInput.nickName;
		groupMember.photoURL = editInput.photoURL;

		groupMemberRef.set(
			{
				...groupMemberDoc,
			},
			{ merge: true }
		);
	}
};

const updateUserPublicDataInGroups = async (editInput: api.STUserEditDataInput, userPublicData: api.STUserPublicData): Promise<void> => {
	// update for groups where user is member
	for await (const groupId of userPublicData.groups.groupMember) {
		await updateGroupMemberStats(editInput, groupId);
	}

	// update for groups where user is owner
	for await (const groupId of userPublicData.groups.groupOwner) {
		const groupRef = admin.firestore().collection(api.ST_GROUP_COLLECTION_GROUPS).doc(groupId);
		const groupDoc = (await groupRef.get()).data() as api.STGroupAllData;

		groupDoc.owner.photoURL = editInput.photoURL;
		groupDoc.owner.nickName = editInput.nickName;

		groupRef.set(
			{
				...groupDoc,
			},
			{ merge: true }
		);

		// if owner is also group member then IT IS NOT INCLUDED in  userPublicData.groups.groupMember
		await updateGroupMemberStats(editInput, groupId);
	}
};

const initUserPortfolio = async ({ id }: api.STUserPublicData): Promise<void> => {
	admin
		.firestore()
		.collection(api.ST_USER_COLLECTION_USER)
		.doc(id)
		.set(
			{
				portfolio: {
					portfolioCash: 100000,
					lastPortfolioSnapshot: {
						portfolioCash: 100000,
					},
				},
			},
			{ merge: true }
		);
};

const updateUserPublicData = async (editInput: api.STUserEditDataInput, userPublicData: api.STUserPublicData): Promise<void> => {
	admin.firestore().collection(api.ST_USER_COLLECTION_USER).doc(userPublicData.id).set(
		{
			nickName: editInput.nickName,
			photoURL: editInput.photoURL,
		},
		{ merge: true }
	);
};

const updateUserPrivateData = async (editInput: api.STUserEditDataInput, userPrivateData: api.STUserPrivateData): Promise<void> => {
	admin
		.firestore()
		.collection(api.ST_USER_COLLECTION_USER)
		.doc(editInput.userId)
		.collection(api.ST_USER_COLLECTION_MORE_INFORMATION)
		.doc(api.ST_USER_DOCUMENT_PRIVATE_DATA)
		.set(
			{
				finnhubKey: !!editInput.finnhubKey ? editInput.finnhubKey : null,
				tradingEnabledDate: userPrivateData.tradingEnabledDate || getCurrentIOSDate(),
			} as api.STUserPrivateData,
			{ merge: true }
		);
};
