import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { getCurrentIOSDate } from '../../st-shared/st-shared.functions';
import { queryUserPublicDataById } from '../user.query';
import { resolveUserPrivateData } from '../user.resolver';

export const editUser = async (editInput: api.STUserEditDataInput): Promise<boolean> => {
	try {
		// update private data
		const userPrivateData = await resolveUserPrivateData(editInput.userId);
		if (userPrivateData.finnhubKey !== editInput.finnhubKey) {
			admin
				.firestore()
				.collection(api.ST_USER_COLLECTION_USER)
				.doc(editInput.userId)
				.collection(api.ST_USER_COLLECTION_MORE_INFORMATION)
				.doc(api.ST_USER_DOCUMENT_PRIVATE_DATA)
				.set(
					{
						...userPrivateData,
						finnhubKey: !!editInput.finnhubKey ? editInput.finnhubKey : null,
						tradingEnabledDate: userPrivateData.tradingEnabledDate || getCurrentIOSDate(),
					} as api.STUserPrivateData,
					{ merge: true }
				);
		}

		const userPublicData = (await queryUserPublicDataById(editInput.userId)) as api.STUserPublicData;
		const initPortfolio = !userPrivateData.tradingEnabledDate && !!editInput.finnhubKey && !userPublicData.portfolio.portfolioCash;

		// update public data - TODO cloud function propagate through groups
		if (initPortfolio || userPublicData.nickName !== editInput.nickName || userPublicData.photoURL !== editInput.photoURL) {
			admin
				.firestore()
				.collection(api.ST_USER_COLLECTION_USER)
				.doc(userPublicData.id)
				.set(
					{
						...userPublicData,
						nickName: editInput.nickName,
						photoURL: editInput.photoURL,
						portfolio: {
							portfolioCash: initPortfolio ? 100000 : userPublicData.portfolio.portfolioCash,
							lastPortfolioSnapshot: {
								portfolioCash: initPortfolio ? 100000 : userPublicData.portfolio.lastPortfolioSnapshot.portfolioCash,
							},
						},
					},
					{ merge: true }
				);
		}

		return true;
	} catch (error) {
		throw new ApolloError(error);
	}
};
