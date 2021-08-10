import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { Context } from './../st-shared/st-shared.interface';

/**
 * Return top 3 members from each group and 4th member will be user who makes query ifhe is part of the group
 */
const resolveTopMembers = async (stGroupAllData: api.STGroupAllData, { requesterUserId }: Context) => {
	console.log('requesterUserId', requesterUserId);
	return [];
};

const resolveGroupHistoricalData = async ({ id }: api.STGroupAllData): Promise<api.STGroupHistoricalData> => {
	try {
		const historicalDataDoc = await admin
			.firestore()
			.collection(api.ST_GROUP_COLLECTION_GROUPS)
			.doc(id)
			.collection(api.ST_GROUP_COLLECTION_MORE_INFORMATION)
			.doc(api.ST_GROUP_COLLECTION_HISTORICAL_DATA)
			.get();

		return historicalDataDoc.data() as api.STGroupHistoricalData;
	} catch (error) {
		throw new ApolloError(error);
	}
};

const resolveGroupMembersData = async ({ id }: api.STGroupAllData): Promise<api.STGroupMembersDocument> => {
	try {
		const groupDoc = await admin
			.firestore()
			.collection(api.ST_GROUP_COLLECTION_GROUPS)
			.doc(id)
			.collection(api.ST_GROUP_COLLECTION_MORE_INFORMATION)
			.doc(api.ST_GROUP_COLLECTION_MEMBERS)
			.get();
		const data = groupDoc.data() as api.STGroupMembersDocument;

		return data;
	} catch (error) {
		throw new ApolloError(error);
	}
};

export const stGroupResolvers = {
	STGroupAllData: {
		topMembers: async (stGroupAllData: api.STGroupAllData, _, context: Context) => await resolveTopMembers(stGroupAllData, context),
		groupHistoricalData: async (stGroupAllData: api.STGroupAllData) => await resolveGroupHistoricalData(stGroupAllData),
		groupMemberData: async (stGroupAllData: api.STGroupAllData) => await resolveGroupMembersData(stGroupAllData),
	},
};
