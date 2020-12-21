import {FetchResult} from '@apollo/client/core';
import {Injectable} from '@angular/core';
import {
    AddStockIntoWatchlistGQL,
    AddStockIntoWatchlistMutation, AuthenticateUserDocument, AuthenticateUserQuery,
    CreateStockWatchlistGQL,
    CreateStockWatchlistMutation,
    DeleteUserWatchlistGQL,
    Maybe,
    QueryUserStockWatchlistsDocument,
    QueryUserStockWatchlistsGQL,
    QueryUserStockWatchlistsQuery, RegisterUserDocument,
    RemoveStockFromWatchlistGQL, RemoveStockFromWatchlistMutation,
    RenameStockWatchlistGQL, StStockWatchlistFragmentFragment, StStockWatchlistFragmentFragmentDoc
} from '../../../api/customGraphql.service';
import {Observable} from 'rxjs';

import {AuthFeatureService} from '../../auth-feature/services/auth-feature.service';
import {DataProxy} from '@apollo/client/cache/core/types/DataProxy';

@Injectable({
    providedIn: 'root'
})
export class GraphqlWatchlistService {
    constructor(private authService: AuthFeatureService,
                private createStockWatchlistGQL: CreateStockWatchlistGQL,
                private addStockIntoWatchlistGQL: AddStockIntoWatchlistGQL,
                private deleteUserWatchlistGQL: DeleteUserWatchlistGQL,
                private renameStockWatchlistGQL: RenameStockWatchlistGQL,
                private removeStockFromWatchlistGQL: RemoveStockFromWatchlistGQL) {
    }


    createWatchList(watchlistName: string): Observable<FetchResult<CreateStockWatchlistMutation>> {
        return this.createStockWatchlistGQL.mutate({
                identifier: {
                    userId: this.authService.user.uid,
                    additionalData: watchlistName
                },
            }, {
                optimisticResponse: {
                    __typename: 'Mutation',
                    createStockWatchlist: {
                        __typename: 'STStockWatchlist',
                        name: watchlistName,
                        id: 'test',
                        summaries: [],
                        date: '',
                        userId: ''
                    }
                },
                update: (store: DataProxy, {data: {createStockWatchlist}}) => {
                    // fetch user's watchlist array from cache
                    const data = store.readQuery<AuthenticateUserQuery>({
                        query: AuthenticateUserDocument,
                        variables: {
                            uid: this.authService.user.uid
                        }
                    });

                    // update cache
                    store.writeQuery({
                        query: AuthenticateUserDocument,
                        variables: {
                            uid: this.authService.user.uid
                        },
                        data: {
                            ...data,
                            authenticateUser: {
                                ...data.authenticateUser,
                                stockWatchlist: [...data.authenticateUser.stockWatchlist, createStockWatchlist]
                            }
                        }
                    });

                }
            }
        );
    }

    renameStockWatchlist(watchlistId: string, newWatchlistName: string) {
        return this.renameStockWatchlistGQL.mutate({
            identifier: {
                id: watchlistId,
                userId: this.authService.user.uid,
                additionalData: newWatchlistName
            },
        }, {
            optimisticResponse: {
                __typename: 'Mutation',
                renameStockWatchlist: true
            },
            update: (store: DataProxy, {data: {renameStockWatchlist}}) => {
                const watchlist = store.readFragment<StStockWatchlistFragmentFragment>({
                    id: `STStockWatchlist:${watchlistId}`,
                    fragment: StStockWatchlistFragmentFragmentDoc,
                    fragmentName: 'STStockWatchlistFragment'
                });

                // update watchlist inside cache
                store.writeFragment({
                    id: `STStockWatchlist:${watchlistId}`,
                    fragment: StStockWatchlistFragmentFragmentDoc,
                    fragmentName: 'STStockWatchlistFragment',
                    data: {...watchlist, name: newWatchlistName}
                });
            }
        });
    }

    deleteUserWatchlist(watchlistId: string) {
        return this.deleteUserWatchlistGQL.mutate({
            identifier: {
                id: watchlistId,
                userId: this.authService.user.uid,
                additionalData: undefined
            },
        }, {
            optimisticResponse: {
                __typename: 'Mutation',
                deleteWatchlist: true
            },
            update: (store: DataProxy, {data: {deleteWatchlist}}) => {
                const data = store.readQuery<AuthenticateUserQuery>({
                    query: AuthenticateUserDocument,
                    variables: {
                        uid: this.authService.user.uid
                    }
                });
                const updatedWatchlist = data.authenticateUser.stockWatchlist.filter(x => x.id !== watchlistId);
                console.log('deleting document : ', watchlistId);

                // update watchlist inside cache
                store.writeQuery({
                    query: AuthenticateUserDocument,
                    variables: {
                        uid: this.authService.user.uid
                    },
                    data: {
                        ...data,
                        authenticateUser: {
                            ...data.authenticateUser,
                            stockWatchlist: {
                                ...updatedWatchlist
                            }
                        }
                    }
                });
            }
        });
    }


    removeStockFromWatchlist(watchlistId: string, symbol: string): Observable<FetchResult<RemoveStockFromWatchlistMutation>> {
        return this.removeStockFromWatchlistGQL.mutate({
            identifier: {
                id: watchlistId,
                userId: this.authService.user.uid,
                additionalData: symbol
            },
        }, {
            optimisticResponse: {
                __typename: 'Mutation',
                removeStockFromStockWatchlist: true
            },
            update: (store: DataProxy, {data: {removeStockFromStockWatchlist}}) => {
                const watchlist = store.readFragment<StStockWatchlistFragmentFragment>({
                    id: `STStockWatchlist:${watchlistId}`,
                    fragment: StStockWatchlistFragmentFragmentDoc,
                    fragmentName: 'STStockWatchlistFragment'
                });

                // update watchlist with stock information
                const updatedSummary = watchlist.summaries.filter(x => x.symbol !== symbol);

                // update watchlist inside cache
                store.writeFragment({
                    id: `STStockWatchlist:${watchlistId}`,
                    fragment: StStockWatchlistFragmentFragmentDoc,
                    fragmentName: 'STStockWatchlistFragment',
                    data: {...watchlist, summaries: updatedSummary}
                });
            }
        });
    }


    addSymbolToWatchlist(watchListId: string, symbol: string): Observable<FetchResult<AddStockIntoWatchlistMutation>> {
        return this.addStockIntoWatchlistGQL.mutate({
            identifier: {
                id: watchListId,
                userId: this.authService.user.uid,
                additionalData: symbol
            }
        }, {
            optimisticResponse: {
                __typename: 'Mutation',
                addStockIntoStockWatchlist: {
                    __typename: 'Summary',
                    symbol,
                    currency: 'USD',
                    earningsDate: new Date().toISOString(),
                    ePSTTM: '-1',
                    exDividendDate: '-1',
                    fiveTwoWeekRange: '-1',
                    industry: 'None',
                    logo_url: '',
                    marketPrice: -1,
                    oneyTargetEst: -1,
                    pERatioTTM: '-1',
                    previousClose: -1,
                    recommendationKey: '-1',
                    recommendationMean: -1,
                    sector: 'None',
                    targetEstOneyPercent: -1,
                    longBusinessSummary: '',
                    longName: '',
                    marketCap: -1,
                    sharesOutstanding: -1,
                    weekRangeFiveTwoMax: -1,
                    weekRangeFiveTwoMin: -1
                }

            },
            update: (store: DataProxy, {data: {addStockIntoStockWatchlist}}) => {
                const watchlist = store.readFragment<StStockWatchlistFragmentFragment>({
                    id: `STStockWatchlist:${watchListId}`,
                    fragment: StStockWatchlistFragmentFragmentDoc,
                    fragmentName: 'STStockWatchlistFragment'
                });

                // update watchlist with stock information
                const updatedSummary = [...watchlist.summaries, addStockIntoStockWatchlist];

                // update watchlist inside cache
                store.writeFragment({
                    id: `STStockWatchlist:${watchListId}`,
                    fragment: StStockWatchlistFragmentFragmentDoc,
                    fragmentName: 'STStockWatchlistFragment',
                    data: {...watchlist, summaries: updatedSummary}
                });
            },
        });
    }

}
