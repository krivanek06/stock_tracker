import {Injectable} from '@angular/core';
import {
    AddStockIntoWatchlistGQL,
    AddStockIntoWatchlistMutation,
    CreateStockWatchlistGQL,
    CreateStockWatchlistMutation,
    DeleteUserWatchlistGQL,
    Maybe,
    QueryUserStockWatchlistsDocument,
    QueryUserStockWatchlistsGQL,
    QueryUserStockWatchlistsQuery,
    RemoveStockFromWatchlistGQL,
    RenameStockWatchlistGQL, StStockWatchlistFragmentFragment, StStockWatchlistFragmentFragmentDoc
} from '../../../api/customGraphql.service';
import {map, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {FetchResult} from 'apollo-link';
import {AuthFeatureService} from '../../auth-feature/services/auth-feature.service';

@Injectable({
    providedIn: 'root'
})
export class WatchlistService {
    constructor(private authService: AuthFeatureService,
                private createStockWatchlistGQL: CreateStockWatchlistGQL,
                private addStockIntoWatchlistGQL: AddStockIntoWatchlistGQL,
                private deleteUserWatchlistGQL: DeleteUserWatchlistGQL,
                private renameStockWatchlistGQL: RenameStockWatchlistGQL,
                private removeStockFromWatchlistGQL: RemoveStockFromWatchlistGQL,
                private queryUserStockWatchlistsGQL: QueryUserStockWatchlistsGQL) {
    }


    getUserStockWatchlists(): Observable<Array<Maybe<{ __typename?: 'STStockWatchlist' } & StStockWatchlistFragmentFragment>> | null> {
        return this.authService.getUser().pipe(
            map(u => u.stockWatchlist)
        );
    }

    async getDistinctStocks(): Promise<string[]> {
        const userId = await this.authService.getUser().toPromise();
        const watchlists = await this.queryUserStockWatchlistsGQL.fetch({uid: userId.uid}).toPromise();
        const stockArrays = watchlists.data.queryUserStockWatchlists.map(watchlist => watchlist.summaries.map(x => x.symbol));
        console.log('getDistinctStocks', stockArrays);
        return [...new Set([].concat(...stockArrays))] as string[]; // distinct stocks
    }


    createWatchList(watchlistName: string): Observable<FetchResult<CreateStockWatchlistMutation>> {
        return this.authService.getUser().pipe(
            switchMap(user => this.createStockWatchlistGQL.mutate({
                    identifier: {
                        userId: user.uid,
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
                    update: (store, {data: {createStockWatchlist}}) => {
                        // fetch user's watchlist array from cache
                        const data = store.readQuery<QueryUserStockWatchlistsQuery>({
                            query: QueryUserStockWatchlistsDocument,
                            variables: {
                                uid: user.uid
                            }
                        });

                        // add newly created watchlist into array
                        data.queryUserStockWatchlists = [...data.queryUserStockWatchlists, createStockWatchlist];

                        // update cache
                        store.writeQuery({
                            query: QueryUserStockWatchlistsDocument,
                            variables: {
                                uid: user.uid
                            },
                            data
                        });

                    }
                }
            ))
        );
    }

    renameStockWatchlist(watchlistId: string, newWatchlistName: string) {
        return this.authService.getUser().pipe(
            switchMap(user => this.renameStockWatchlistGQL.mutate({
                identifier: {
                    id: watchlistId,
                    userId: user.uid,
                    additionalData: newWatchlistName
                },
            }, {
                optimisticResponse: {
                    __typename: 'Mutation',
                    renameStockWatchlist: true
                },
                update: (store, {data: {renameStockWatchlist}}) => {
                    const watchlist = store.readFragment<StStockWatchlistFragmentFragment>({
                        id: `STStockWatchlist:${watchlistId}`,
                        fragment: StStockWatchlistFragmentFragmentDoc,
                        fragmentName: 'STStockWatchlistFragment'
                    });

                    // update watchlist with stock information
                    watchlist.name = newWatchlistName;

                    // update watchlist inside cache
                    store.writeFragment({
                        id: `STStockWatchlist:${watchlistId}`,
                        fragment: StStockWatchlistFragmentFragmentDoc,
                        fragmentName: 'STStockWatchlistFragment',
                        data: watchlist
                    });
                }
            }))
        );
    }

    deleteUserWatchlist(watchlistId: string) {
        return this.authService.getUser().pipe(
            switchMap(user => this.deleteUserWatchlistGQL.mutate({
                identifier: {
                    id: watchlistId,
                    userId: user.uid,
                    additionalData: undefined
                },
            }, {
                optimisticResponse: {
                    __typename: 'Mutation',
                    deleteWatchlist: true
                },
                update: (store, {data: {deleteWatchlist}}) => {
                    const data = store.readQuery<QueryUserStockWatchlistsQuery>({
                        query: QueryUserStockWatchlistsDocument,
                        variables: {
                            uid: user.uid
                        }
                    });
                    data.queryUserStockWatchlists = data.queryUserStockWatchlists.filter(x => x.id !== watchlistId);
                    console.log('deleting document : ', watchlistId);

                    // update watchlist inside cache
                    store.writeQuery({
                        query: QueryUserStockWatchlistsDocument,
                        variables: {
                            uid: user.uid
                        },
                        data
                    });
                }
            }))
        );
    }


    removeStockFromWatchlist(watchlistId: string, symbol: string) {
        return this.authService.getUser().pipe(
            switchMap(user => this.removeStockFromWatchlistGQL.mutate({
                identifier: {
                    id: watchlistId,
                    userId: user.uid,
                    additionalData: symbol
                },
            }, {
                optimisticResponse: {
                    __typename: 'Mutation',
                    removeStockFromStockWatchlist: true
                },
                update: (store, {data: {removeStockFromStockWatchlist}}) => {
                    const watchlist = store.readFragment<StStockWatchlistFragmentFragment>({
                        id: `StockWatchlist:${watchlistId}`,
                        fragment: StStockWatchlistFragmentFragmentDoc,
                        fragmentName: 'StockWatchlistInformation'
                    });

                    // update watchlist with stock information
                    watchlist.summaries = watchlist.summaries.filter(x => x.symbol !== symbol);

                    // update watchlist inside cache
                    store.writeFragment({
                        id: `StockWatchlist:${watchlistId}`,
                        fragment: StStockWatchlistFragmentFragmentDoc,
                        fragmentName: 'StockWatchlistInformation',
                        data: watchlist
                    });
                }
            }))
        );
    }


    addSymbolToWatchlist(watchListId: string, symbol: string): Observable<FetchResult<AddStockIntoWatchlistMutation>> {
        return this.authService.getUser().pipe(
            switchMap(user => this.addStockIntoWatchlistGQL.mutate({
                identifier: {
                    id: watchListId,
                    userId: user.uid,
                    additionalData: symbol
                }
            }, {
                optimisticResponse: {
                    __typename: 'Mutation',
                    addStockIntoStockWatchlist: {
                        __typename: 'Summary',
                        symbol,
                        currency: 'USD',
                        EarningsDate: new Date().toISOString(),
                        EPSTTM: '-1',
                        ExDividendDate: '-1',
                        FiveTwoWeekRange: '-1',
                        industry: 'None',
                        logo_url: '',
                        marketPrice: -1,
                        OneyTargetEst: -1,
                        PERatioTTM: '-1',
                        previousClose: -1,
                        recommendationKey: '-1',
                        recommendationMean: -1,
                        sector: 'None',
                        targetEstOneyPercent: -1
                    }

                },
                update: (store, {data: {addStockIntoStockWatchlist}}) => {
                    const watchlist = store.readFragment<StStockWatchlistFragmentFragment>({
                        id: `STStockWatchlist:${watchListId}`,
                        fragment: StStockWatchlistFragmentFragmentDoc,
                        fragmentName: 'STStockWatchlistFragment'
                    });

                    // update watchlist with stock information
                    watchlist.summaries = [...watchlist.summaries, addStockIntoStockWatchlist];

                    // update watchlist inside cache
                    store.writeFragment({
                        id: `STStockWatchlist:${watchListId}`,
                        fragment: StStockWatchlistFragmentFragmentDoc,
                        fragmentName: 'STStockWatchlistFragment',
                        data: watchlist
                    });
                },
            }))
        );
    }


}
