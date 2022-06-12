import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { querySTGroupByGroupId } from '../st-group/st-group.query';

const resolveStockWatchlists = async (uid: string): Promise<api.STStockWatchlist[]> => {
	try {
		const watchlistDocs = await admin.firestore().collection(api.ST_WATCHLIST_COLLECTION).where('userId', '==', uid).get();

		return watchlistDocs.docs.map((list) => {
			return { ...list.data(), id: list.id };
		}) as api.STStockWatchlist[];
	} catch (error) {
		throw new ApolloError(error);
	}
};

export const resolveUserPrivateData = async (uid: string): Promise<api.STUserPrivateData> => {
	try {
		const privateDoc = await admin
			.firestore()
			.collection(api.ST_USER_COLLECTION_USER)
			.doc(uid)
			.collection(api.ST_USER_COLLECTION_MORE_INFORMATION)
			.doc(api.ST_USER_DOCUMENT_PRIVATE_DATA)
			.get();

		return privateDoc.data() as api.STUserPrivateData;
	} catch (error) {
		throw new ApolloError(error);
	}
};

export const resolveUserHistoricalData = async (uid: string): Promise<api.STUserHistoricalData> => {
	try {
		const historicalDataDoc = await admin
			.firestore()
			.collection(api.ST_USER_COLLECTION_USER)
			.doc(uid)
			.collection(api.ST_USER_COLLECTION_MORE_INFORMATION)
			.doc(api.ST_USER_DOCUMENT_HISTORICAL_DATA)
			.get();

		return historicalDataDoc.data() as api.STUserHistoricalData;
	} catch (error) {
		throw new ApolloError(error);
	}
};

const resolveGroups = async (stUserGroups: api.STUserGroupsIdentification): Promise<api.STUserGroups> => {
	try {
		const groupMember = Promise.all(stUserGroups.groupMember.map((groupId) => querySTGroupByGroupId(groupId)));
		const groupInvitationReceived = Promise.all(stUserGroups.groupInvitationReceived.map((groupId) => querySTGroupByGroupId(groupId)));
		const groupInvitationSent = Promise.all(stUserGroups.groupInvitationSent.map((groupId) => querySTGroupByGroupId(groupId)));
		const groupOwner = Promise.all(stUserGroups.groupOwner.map((groupId) => querySTGroupByGroupId(groupId)));
		const groupWatched = Promise.all(stUserGroups.groupWatched.map((groupId) => querySTGroupByGroupId(groupId)));

		const sTUserGroups: api.STUserGroups = {
			groupOwner: await groupOwner,
			groupMember: await groupMember,
			groupInvitationSent: await groupInvitationSent,
			groupInvitationReceived: await groupInvitationReceived,
			groupWatched: await groupWatched,
		};

		return sTUserGroups;
	} catch (error) {
		throw new ApolloError(error);
	}
};

export const userResolvers = {
	STUserPublicData: {
		groups: async (stUserPublicData: api.STUserPublicData) => await resolveGroups(stUserPublicData.groups),
		stockWatchlist: async (stUserPublicData: api.STUserPublicData) => await resolveStockWatchlists(stUserPublicData.id),
		userPrivateData: async (stUserPublicData: api.STUserPublicData) => await resolveUserPrivateData(stUserPublicData.id),
		userHistoricalData: async (stUserPublicData: api.STUserPublicData) => await resolveUserHistoricalData(stUserPublicData.id),
	},
};
