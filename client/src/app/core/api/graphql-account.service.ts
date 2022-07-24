import { Injectable } from '@angular/core';
import { DataProxy, FetchResult } from '@apollo/client/core';
import { Observable } from 'rxjs';
import {
	AuthenticateUserDocument,
	AuthenticateUserQuery,
	EditUserGQL,
	EditUserMutation,
	ResetUserAccountGQL,
	ResetUserAccountMutation,
	StUserEditDataInput,
	StUserResetedAccount,
} from '../graphql-schema';
import { STARTING_PORTFOLIO } from '../model';
import { UserStorageService } from '../services';

@Injectable({
	providedIn: 'root',
})
export class GraphqlAccountService {
	constructor(private userStorageService: UserStorageService, private editUserGQL: EditUserGQL, private resetUserAccountGQL: ResetUserAccountGQL) {}

	editUser(editInput: StUserEditDataInput): Observable<FetchResult<EditUserMutation>> {
		return this.editUserGQL.mutate(
			{
				editInput: {
					userId: editInput.userId,
					photoURL: editInput.photoURL,
					finnhubKey: editInput.finnhubKey,
				},
			},
			{
				optimisticResponse: {
					__typename: 'Mutation',
					editUser: true,
				},
				update: (store: DataProxy, { data }) => {
					const cache = store.readQuery<AuthenticateUserQuery>({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
					});

					if (!cache?.authenticateUser) {
						return;
					}

					const initPortfolio = !cache.authenticateUser.userPrivateData.tradingEnabledDate && !!editInput.finnhubKey;

					// update watchlist inside cache
					store.writeQuery({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
						data: {
							...cache,
							authenticateUser: {
								...cache.authenticateUser,
								photoURL: editInput.photoURL,
								userPrivateData: {
									...cache.authenticateUser.userPrivateData,
									finnhubKey: editInput.finnhubKey,
								},
								portfolio: {
									...cache.authenticateUser.portfolio,
									portfolioCash: initPortfolio ? STARTING_PORTFOLIO : cache.authenticateUser.portfolio.portfolioCash,
								},
							},
						},
					});
				},
			}
		);
	}

	resetUserAccount(): Observable<FetchResult<ResetUserAccountMutation>> {
		return this.resetUserAccountGQL.mutate(
			{
				userId: this.userStorageService.user.id,
			},
			{
				update: (store: DataProxy, { data }) => {
					const resetUserAccount = data?.resetUserAccount as StUserResetedAccount;
					const cache = store.readQuery<AuthenticateUserQuery>({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
					});

					if (!cache?.authenticateUser) {
						return;
					}

					// update watchlist inside cache
					store.writeQuery({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
						data: {
							...cache,
							authenticateUser: {
								...cache.authenticateUser,
								holdings: [],
								userHistoricalData: {
									...cache.authenticateUser.userHistoricalData,
									resetedAccount: [...cache.authenticateUser.userHistoricalData.resetedAccount, resetUserAccount],
									transactionSnapshots: [],
									portfolioSnapshots: [],
								},
								portfolio: {
									...cache.authenticateUser.portfolio,
									portfolioCash: STARTING_PORTFOLIO,
									numberOfExecutedBuyTransactions: 0,
									numberOfExecutedSellTransactions: 0,
									transactionFees: 0,
								},
								transactionsSnippets: [],
								topTransactions: [],
							},
						},
					});
				},
			}
		);
	}
}
