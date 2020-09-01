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
    RenameStockWatchlistGQL, StockMainDetailsFragment, StockMainDetailsFragmentDoc,
    StockWatchlistIdentifier,
    StockWatchlistInformationFragment, StockWatchlistInformationFragmentDoc,
} from '../../../api/customGraphql.service';
import {filter, map, shareReplay, takeUntil} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
import {FetchResult} from 'apollo-link';
import {ApolloQueryResult} from 'apollo-client';
import {MarketPriceWebsocketService} from '../../../shared/services/market-price-websocket.service';
import {Apollo} from 'apollo-angular';

@Injectable({
    providedIn: 'root'
})
export class WatchlistService {
    constructor(private createStockWatchlistGQL: CreateStockWatchlistGQL,
                private addStockIntoWatchlistGQL: AddStockIntoWatchlistGQL,
                private deleteUserWatchlistGQL: DeleteUserWatchlistGQL,
                private renameStockWatchlistGQL: RenameStockWatchlistGQL,
                private removeStockFromWatchlistGQL: RemoveStockFromWatchlistGQL,
                private queryUserStockWatchlistsGQL: QueryUserStockWatchlistsGQL) {
    }


    getUserStockWatchlists(userId?: string): Observable<Array<Maybe<{ __typename?: 'StockWatchlist' } & StockWatchlistInformationFragment>> | null> {
        return this.queryUserStockWatchlistsGQL.watch({
            uid: '7eYTErOxXugeHg4JHLS1L5ZKosK2'
        }).valueChanges.pipe(
            map(res => res.data.queryUserStockWatchlists)
        );
    }

    async getDistinctStocks(): Promise<string[]> {
        const watchlists = await this.queryUserStockWatchlistsGQL.fetch({uid: '7eYTErOxXugeHg4JHLS1L5ZKosK2'}).toPromise();
        const stockArrays = watchlists.data.queryUserStockWatchlists.map(watchlist => watchlist.stocks);
        const distinctStocks = [...new Set([].concat(...stockArrays))] as string[];
        return distinctStocks;
    }


    createWatchList(identifier: StockWatchlistIdentifier): Observable<FetchResult<CreateStockWatchlistMutation>> {
        return this.createStockWatchlistGQL.mutate({
                identifier: {
                    userId: identifier.userId,
                    additionalData: identifier.additionalData
                },
            }, {
                optimisticResponse: {
                    __typename: 'Mutation',
                    createStockWatchlist: {
                        __typename: 'StockWatchlist',
                        name: identifier.additionalData,
                        timestamp: new Date().getTime(),
                        id: 'test',
                        stocks: [],
                        stocksDetails: []
                    }
                },
                update: (store, {data: {createStockWatchlist}}) => {
                    // fetch user's watchlist array from cache
                    const data = store.readQuery<QueryUserStockWatchlistsQuery>({
                        query: QueryUserStockWatchlistsDocument,
                        variables: {
                            uid: identifier.userId
                        }
                    });

                    // add newly created watchlist into array
                    data.queryUserStockWatchlists = [...data.queryUserStockWatchlists, createStockWatchlist];

                    // update cache
                    store.writeQuery({
                        query: QueryUserStockWatchlistsDocument,
                        variables: {
                            uid: identifier.userId
                        },
                        data
                    });

                }
            }
        );
    }

    renameStockWatchlist(identifier: StockWatchlistIdentifier) {
        return this.renameStockWatchlistGQL.mutate({
            identifier: {
                id: identifier.id,
                userId: identifier.userId,
                additionalData: identifier.additionalData
            },
        }, {
            optimisticResponse: {
                __typename: 'Mutation',
                renameStockWatchlist: true
            },
            update: (store, {data: {renameStockWatchlist}}) => {
                const watchlist = store.readFragment<StockWatchlistInformationFragment>({
                    id: `StockWatchlist:${identifier.id}`,
                    fragment: StockWatchlistInformationFragmentDoc,
                    fragmentName: 'StockWatchlistInformation'
                });

                // update watchlist with stock information
                watchlist.name = identifier.additionalData;

                // update watchlist inside cache
                store.writeFragment({
                    id: `StockWatchlist:${identifier.id}`,
                    fragment: StockWatchlistInformationFragmentDoc,
                    fragmentName: 'StockWatchlistInformation',
                    data: watchlist
                });
            }
        });
    }

    deleteUserWatchlist(identifier: StockWatchlistIdentifier) {
        return this.deleteUserWatchlistGQL.mutate({
            identifier: {
                id: identifier.id,
                userId: identifier.userId,
                additionalData: identifier.additionalData
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
                        uid: identifier.userId
                    }
                });
                data.queryUserStockWatchlists = data.queryUserStockWatchlists.filter(x => x.id !== identifier.id);
                console.log('deleting document : ', identifier.id);

                // update watchlist inside cache
                store.writeQuery({
                    query: QueryUserStockWatchlistsDocument,
                    variables: {
                        uid: identifier.userId
                    },
                    data
                });
            }
        });
    }


    removeStockFromWatchlist(identifier: StockWatchlistIdentifier) {
        return this.removeStockFromWatchlistGQL.mutate({
            identifier: {
                id: identifier.id,
                userId: identifier.userId,
                additionalData: identifier.additionalData
            },
        }, {
            optimisticResponse: {
                __typename: 'Mutation',
                removeStockFromStockWatchlist: true
            },
            update: (store, {data: {removeStockFromStockWatchlist}}) => {
                const watchlist = store.readFragment<StockWatchlistInformationFragment>({
                    id: `StockWatchlist:${identifier.id}`,
                    fragment: StockWatchlistInformationFragmentDoc,
                    fragmentName: 'StockWatchlistInformation'
                });

                // update watchlist with stock information
                watchlist.stocks = watchlist.stocks.filter(x => x !== identifier.additionalData);
                watchlist.stocksDetails = watchlist.stocksDetails.filter(x => x.id !== identifier.additionalData);

                // update watchlist inside cache
                store.writeFragment({
                    id: `StockWatchlist:${identifier.id}`,
                    fragment: StockWatchlistInformationFragmentDoc,
                    fragmentName: 'StockWatchlistInformation',
                    data: watchlist
                });
            }
        });
    }


    addSymbolToWatchlist(identifier: StockWatchlistIdentifier): Observable<FetchResult<AddStockIntoWatchlistMutation>> {
        return this.addStockIntoWatchlistGQL.mutate({
            identifier: {
                id: identifier.id,
                userId: identifier.userId,
                additionalData: identifier.additionalData
            }
        }, {
            optimisticResponse: {
                __typename: 'Mutation',
                addStockIntoStockWatchlist: {
                    __typename: 'StockDetails',
                    id: identifier.additionalData,
                    basicInfo: {
                        __typename: 'BasicInfo',
                        industry: 'test',
                        logoUrl: 'test',
                        sector: 'test',
                        shortName: 'test',
                        website: 'test'
                    },
                    overview: {
                        __typename: 'OverView',
                        symbol: identifier.additionalData,
                        currentPrice: -1,
                        earningsDate: 'test',
                        exDividendDate: 'test',
                        forwardDividendAndYield: 'test',
                        previousClose: -1,
                        targetEst1y: -1,
                        weekHigh52: -1,
                        weekLow52: -1
                    }
                }

            },
            update: (store, {data: {addStockIntoStockWatchlist}}) => {
                const watchlist = store.readFragment<StockWatchlistInformationFragment>({
                    id: `StockWatchlist:${identifier.id}`,
                    fragment: StockWatchlistInformationFragmentDoc,
                    fragmentName: 'StockWatchlistInformation'
                });

                // update watchlist with stock information
                watchlist.stocks = [...watchlist.stocks, identifier.additionalData];
                watchlist.stocksDetails = [...watchlist.stocksDetails, addStockIntoStockWatchlist];

                // update watchlist inside cache
                store.writeFragment({
                    id: `StockWatchlist:${identifier.id}`,
                    fragment: StockWatchlistInformationFragmentDoc,
                    fragmentName: 'StockWatchlistInformation',
                    data: watchlist
                });
            },
        });
    }


}
