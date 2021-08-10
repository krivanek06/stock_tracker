import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';

export const querySTGroupByGroupId = async (groupId: string): Promise<api.STGroupAllData> => {
	try {
		const groupDoc = await admin.firestore().collection(api.ST_GROUP_COLLECTION_GROUPS).doc(groupId).get();
		const data = groupDoc.data() as api.STGroupAllData;

		return data ? { ...data, id: groupId } : undefined;
	} catch (error) {
		throw new ApolloError(error);
	}
};

export const querySTGroupMemberDataByGroupId = async (groupId: string): Promise<api.STGroupMembersDocument> => {
	try {
		const groupDoc = await admin
			.firestore()
			.collection(api.ST_GROUP_COLLECTION_GROUPS)
			.doc(groupId)
			.collection(api.ST_GROUP_COLLECTION_MORE_INFORMATION)
			.doc(api.ST_GROUP_COLLECTION_MEMBERS)
			.get();
		const data = groupDoc.data() as api.STGroupMembersDocument;

		return data;
	} catch (error) {
		throw new ApolloError(error);
	}
};

export const querySTGroupByGroupName = async (groupNamePrefix: string): Promise<api.STGroupAllData[]> => {
	try {
		const groupDocs = await admin.firestore().collection(api.ST_GROUP_COLLECTION_GROUPS).where('name', '>=', groupNamePrefix).limit(5).get();

		const data = groupDocs.docs.map((x) => {
			return { ...x.data(), id: x.id } as api.STGroupAllData;
		}) as api.STGroupAllData[];

		return data;
	} catch (error) {
		throw new ApolloError(error);
	}
};
