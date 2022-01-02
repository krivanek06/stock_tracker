import { Injectable } from '@angular/core';
import { DataProxy, FetchResult } from '@apollo/client/core';
import { Observable } from 'rxjs';
import {
	AddStockIntoWatchlistGQL,
	AddStockIntoWatchlistMutation,
	AuthenticateUserDocument,
	AuthenticateUserQuery,
	CreateStockWatchlistGQL,
	CreateStockWatchlistMutation,
	DeleteUserWatchlistGQL,
	RemoveStockFromWatchlistGQL,
	RemoveStockFromWatchlistMutation,
	RenameStockWatchlistGQL,
	StStockWatchlist,
	StStockWatchlistFragmentFragment,
	StStockWatchlistFragmentFragmentDoc,
	Summary,
} from '../graphql-schema';
import { UserStorageService } from '../services';

@Injectable({
	providedIn: 'root',
})
export class GraphqlWatchlistService {
	constructor(
		private userStorageService: UserStorageService,
		private createStockWatchlistGQL: CreateStockWatchlistGQL,
		private addStockIntoWatchlistGQL: AddStockIntoWatchlistGQL,
		private deleteUserWatchlistGQL: DeleteUserWatchlistGQL,
		private renameStockWatchlistGQL: RenameStockWatchlistGQL,
		private removeStockFromWatchlistGQL: RemoveStockFromWatchlistGQL
	) {}

	createWatchList(watchlistName: string): Observable<FetchResult<CreateStockWatchlistMutation>> {
		return this.createStockWatchlistGQL.mutate(
			{
				identifier: {
					userId: this.userStorageService.user.id,
					additionalData: watchlistName,
				},
			},
			{
				optimisticResponse: {
					__typename: 'Mutation',
					createStockWatchlist: {
						__typename: 'STStockWatchlist',
						name: watchlistName,
						id: 'test',
						summaries: [],
						date: '',
						userId: '',
						symbols: [],
					},
				},
				update: (store: DataProxy, { data }) => {
					const createStockWatchlist = data?.createStockWatchlist as StStockWatchlist;
					// fetch user's watchlist array from cache
					const cache = store.readQuery<AuthenticateUserQuery>({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
					});

					const user = cache?.authenticateUser;

					if (!user) {
						return;
					}

					// update cache
					store.writeQuery({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
						data: {
							...cache,
							authenticateUser: {
								...user,
								stockWatchlist: [...user.stockWatchlist, createStockWatchlist],
							},
						},
					});
				},
			}
		);
	}

	renameStockWatchlist(watchlistId: string, newWatchlistName: string) {
		return this.renameStockWatchlistGQL.mutate(
			{
				identifier: {
					id: watchlistId,
					userId: this.userStorageService.user.id,
					additionalData: newWatchlistName,
				},
			},
			{
				optimisticResponse: {
					__typename: 'Mutation',
					renameStockWatchlist: true,
				},
				update: (store: DataProxy, { data }) => {
					const watchlist = store.readFragment<StStockWatchlistFragmentFragment>({
						id: `STStockWatchlist:${watchlistId}`,
						fragment: StStockWatchlistFragmentFragmentDoc,
						fragmentName: 'STStockWatchlistFragment',
					});

					// update watchlist inside cache
					store.writeFragment({
						id: `STStockWatchlist:${watchlistId}`,
						fragment: StStockWatchlistFragmentFragmentDoc,
						fragmentName: 'STStockWatchlistFragment',
						data: { ...watchlist, name: newWatchlistName },
					});
				},
			}
		);
	}

	deleteUserWatchlist(watchlistId: string) {
		return this.deleteUserWatchlistGQL.mutate(
			{
				identifier: {
					id: watchlistId,
					userId: this.userStorageService.user.id,
					additionalData: undefined,
				},
			},
			{
				optimisticResponse: {
					__typename: 'Mutation',
					deleteWatchlist: true,
				},
				update: (store: DataProxy, { data }) => {
					const cache = store.readQuery<AuthenticateUserQuery>({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
					});

					const user = cache?.authenticateUser;

					if (!user) {
						return;
					}

					const updatedWatchlist = user.stockWatchlist.filter((x) => x.id !== watchlistId);

					// update watchlist inside cache
					store.writeQuery({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
						data: {
							...cache,
							authenticateUser: {
								...user,
								stockWatchlist: [...updatedWatchlist],
							},
						},
					});
				},
			}
		);
	}

	removeStockFromWatchlist(watchlistId: string, symbol: string): Observable<FetchResult<RemoveStockFromWatchlistMutation>> {
		return this.removeStockFromWatchlistGQL.mutate(
			{
				identifier: {
					id: watchlistId,
					userId: this.userStorageService.user.id,
					additionalData: symbol,
				},
			},
			{
				optimisticResponse: {
					__typename: 'Mutation',
					removeStockFromStockWatchlist: true,
				},
				update: (store: DataProxy, { data }) => {
					const watchlist = store.readFragment<StStockWatchlistFragmentFragment>({
						id: `STStockWatchlist:${watchlistId}`,
						fragment: StStockWatchlistFragmentFragmentDoc,
						fragmentName: 'STStockWatchlistFragment',
					});

					if (!watchlist) {
						return;
					}

					// update watchlist with stock information
					const updatedSummary = watchlist.summaries.filter((x) => x.symbol !== symbol);

					// update watchlist inside cache
					store.writeFragment({
						id: `STStockWatchlist:${watchlistId}`,
						fragment: StStockWatchlistFragmentFragmentDoc,
						fragmentName: 'STStockWatchlistFragment',
						data: { ...watchlist, summaries: updatedSummary },
					});
				},
			}
		);
	}

	addSymbolToWatchlist(watchListId: string, symbol: string): Observable<FetchResult<AddStockIntoWatchlistMutation>> {
		return this.addStockIntoWatchlistGQL.mutate(
			{
				identifier: {
					id: watchListId,
					userId: this.userStorageService.user.id,
					additionalData: symbol,
				},
			},
			{
				update: (store: DataProxy, { data }) => {
					const addStockIntoStockWatchlist = data?.addStockIntoStockWatchlist as Summary;

					const watchlist = store.readFragment<StStockWatchlistFragmentFragment>({
						id: `STStockWatchlist:${watchListId}`,
						fragment: StStockWatchlistFragmentFragmentDoc,
						fragmentName: 'STStockWatchlistFragment',
					});

					if (!watchlist) {
						return;
					}

					// update watchlist with stock information
					const updatedSummary = [...watchlist.summaries, addStockIntoStockWatchlist];

					// update watchlist inside cache
					store.writeFragment({
						id: `STStockWatchlist:${watchListId}`,
						fragment: StStockWatchlistFragmentFragmentDoc,
						fragmentName: 'STStockWatchlistFragment',
						data: { ...watchlist, summaries: updatedSummary },
					});
				},
			}
		);
	}
}
