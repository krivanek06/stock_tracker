import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { Context } from './../../st-shared/st-shared.interface';
import { querySTGroupByGroupId } from './../st-group.query';

export const deleteGroup = async (groupId: string, { requesterUserId }: Context): Promise<boolean> => {
	try {
		const group = await querySTGroupByGroupId(groupId);
		if (group.owner.id !== requesterUserId) {
			throw new ApolloError('Only owner can delete a group');
		}

		await admin.firestore().collection(`${api.ST_GROUP_COLLECTION_GROUPS}`).doc(groupId).delete();
		return true;
	} catch (error) {
		throw new ApolloError(error);
	}
};
