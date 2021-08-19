import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { getCurrentIOSDate } from '../../st-shared/st-shared.functions';
import { querySTGroupByGroupId } from '../st-group.query';

export const editGroup = async (groupInput: api.STGroupAllDataInput): Promise<api.STGroupAllData> => {
	try {
		// load group or create new
		const group = await querySTGroupByGroupId(groupInput.groupId);
		group.name = groupInput.name;
		group.description = groupInput.description;
		group.imagePath = groupInput.imagePath;
		group.imageUrl = groupInput.imageUrl;
		group.isInfinite = groupInput.isInfinite;
		group.isPrivate = groupInput.isPrivate;
		group.endDate = groupInput.endDate;
		group.lastEditedDate = getCurrentIOSDate();

		// persist
		await admin.firestore().collection(`${api.ST_GROUP_COLLECTION_GROUPS}`).doc(`${group.id}`).set(group, { merge: true });

		//return querySTGroupAllDataByGroupId(group.groupId);
		return group;
	} catch (error) {
		throw new ApolloError(error);
	}
};
