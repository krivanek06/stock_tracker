import { Injectable } from '@angular/core';
import { FetchResult } from '@apollo/client';
import { DataProxy } from '@apollo/client/cache/core/types/DataProxy';
import { Observable } from 'rxjs';
import {
	AuthenticateUserDocument,
	AuthenticateUserQuery,
	EditUserGQL,
	EditUserMutation,
	ResetUserAccountGQL,
	ResetUserAccountMutation,
	StUserEditDataInput,
} from '../graphql-schema';
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
					nickName: editInput.nickName,
					finnhubKey: editInput.finnhubKey,
				},
			},
			{
				optimisticResponse: {
					__typename: 'Mutation',
					editUser: true,
				},
				update: (store: DataProxy, { data: { editUser } }) => {
					const data = store.readQuery<AuthenticateUserQuery>({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
					});

					const initPortfolio = !data.authenticateUser.userPrivateData.tradingEnabledDate && !!editInput.finnhubKey;

					// update watchlist inside cache
					store.writeQuery({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
						data: {
							...data,
							authenticateUser: {
								...data.authenticateUser,
								photoURL: editInput.photoURL,
								nickName: editInput.nickName,
								userPrivateData: {
									...data.authenticateUser.userPrivateData,
									finnhubKey: editInput.finnhubKey,
								},
								portfolio: {
									...data.authenticateUser.portfolio,
									portfolioCash: initPortfolio ? 15000 : data.authenticateUser.portfolio.portfolioCash,
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
				update: (store: DataProxy, { data: { resetUserAccount } }) => {
					const data = store.readQuery<AuthenticateUserQuery>({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
					});

					// update watchlist inside cache
					store.writeQuery({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
						data: {
							...data,
							authenticateUser: {
								...data.authenticateUser,
								holdings: [],
								userHistoricalData: {
									...data.authenticateUser.userHistoricalData,
									resetedAccount: [...data.authenticateUser.userHistoricalData.resetedAccount, resetUserAccount],
								},
								portfolio: {
									...data.authenticateUser.portfolio,
									portfolioCash: 15000,
								},
							},
						},
					});
				},
			}
		);
	}
}
