import { ApolloError } from 'apollo-server';
import * as admin from 'firebase-admin';
import * as api from 'stock-tracker-common-interfaces';
import { getCurrentIOSDate } from '../../st-shared/st-shared.functions';
import { sumOfHoldings } from '../../st-transaction/st-transaction-util';
import { queryUserPublicDataById } from '../user.query';
import { createNewPortfolio } from '../utils/user.creator';

export const resetUserAccount = async (userId: string): Promise<api.STUserResetedAccount> => {
	try {
		const user = (await queryUserPublicDataById(userId)) as api.STUserPublicData;

		const reset: api.STUserResetedAccount = {
			date: getCurrentIOSDate(),
			portfolioTotal: user.portfolio.portfolioCash + sumOfHoldings(user.holdings),
		};

		// save reseted account
		admin
			.firestore()
			.collection(api.ST_USER_COLLECTION_USER)
			.doc(user.id)
			.collection(api.ST_USER_COLLECTION_MORE_INFORMATION)
			.doc(api.ST_USER_DOCUMENT_HISTORICAL_DATA)
			.set(
				{
					resetedAccount: admin.firestore.FieldValue.arrayUnion(reset),
					portfolioSnapshots: [],
					transactionSnapshots: [],
				},
				{ merge: true }
			);

		// save portfolio
		const newPortfolioWrapper = createNewPortfolio();
		admin
			.firestore()
			.collection(api.ST_USER_COLLECTION_USER)
			.doc(user.id)
			.set(
				{
					portfolio: {
						...newPortfolioWrapper,
					},
					holdings: [],
					topTransactions: [],
					transactionsSnippets: [],
				},
				{ merge: true }
			);

		return reset;
	} catch (error) {
		throw new ApolloError(error);
	}
};
