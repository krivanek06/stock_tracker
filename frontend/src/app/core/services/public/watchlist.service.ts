import {Injectable} from '@angular/core';
import {
    AddStockIntoWatchlistGQL,
    CreateStockWatchlistGQL, CreateStockWatchlistMutation, Maybe,
    StockWatchlistIdentifier, StockWatchlistInformationFragment, UserStcokWatchlistsDocument,
    UserStcokWatchlistsGQL, UserStcokWatchlistsQuery
} from '../private/watchlistGraphql.service';
import {map, shareReplay} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {FetchResult} from 'apollo-link';

@Injectable({
    providedIn: 'root'
})
export class WatchlistService {

    constructor(private createStockWatchlistGQL: CreateStockWatchlistGQL,
                private addStockIntoWatchlistGQL: AddStockIntoWatchlistGQL,
                private userStockWatchlistsGQL: UserStcokWatchlistsGQL) {
    }


    getUserStockWatchlists(userId: string): Observable<Array<Maybe<{ __typename?: 'StockWatchlist' } & StockWatchlistInformationFragment>> | null> {
        return this.userStockWatchlistsGQL.watch({
            uid: userId
        }).valueChanges.pipe(
            map(res => res.data.stockWatchlist)
        );
    }

    createWatchList(identifier: StockWatchlistIdentifier): Observable<FetchResult<CreateStockWatchlistMutation>> {
        return this.createStockWatchlistGQL.mutate({
                identifier: {
                    id: identifier.id,
                    userId: identifier.userId
                },
            }, {
                optimisticResponse: {
                    __typename: 'Mutation',
                    createStockWatchlist: {
                        __typename: 'StockWatchlist',
                        id: identifier.id,
                        timestamp: new Date().getTime(),
                        documentId: undefined,
                        stocksOverview: [],
                        stocks: []

                    }
                },
                update: (store, {data: {createStockWatchlist}}) => {
                    // fetch user's watchlist array from cache
                    const data = store.readQuery<UserStcokWatchlistsQuery>({
                        query: UserStcokWatchlistsDocument,
                        variables: {
                            uid: identifier.userId
                        }
                    });

                    // add newly created watchlist into array
                    data.stockWatchlist = [...data.stockWatchlist, createStockWatchlist];

                    // update cache
                    store.writeQuery({
                        query: UserStcokWatchlistsDocument,
                        variables: {
                            uid: identifier.userId
                        },
                        data
                    });

                }
            }
        );
    }


    addSymbolToWatchlist(identifier: StockWatchlistIdentifier): Observable<FetchResult<CreateStockWatchlistMutation>> {
        return this.addStockIntoWatchlistGQL.mutate({
            identifier: {
                id: identifier.id,
                documentId: identifier.documentId,
                userId: identifier.userId,
                stockName: identifier.stockName
            }
        }, {
            optimisticResponse: {
                __typename: 'Mutation',
                addStockIntoStockWatchlist: {
                    __typename: 'OverView',
                    id: 'TEST',
                    symbol: identifier.stockName,
                    currentPrice: 123,
                    earningsDate: '12.5',
                    exDividendDate: '12.5',
                    forwardDividendAndYield: '12.5',
                    previousClose: 56,
                    targetEst1y: 45,
                    weekHigh52: 22,
                    weekLow52: 33
                }

            },
            update: (store, {data: {addStockIntoStockWatchlist}}) => {
                const data = store.readQuery<UserStcokWatchlistsQuery>({
                    query: UserStcokWatchlistsDocument,
                    variables: {
                        uid: identifier.userId
                    }
                });
                const watchlist = data.stockWatchlist.find(list => list.documentId === identifier.documentId);

                // update watchlist with stock information
                watchlist.stocks = [...watchlist.stocks, identifier.stockName];
                watchlist.stocksOverview = [...watchlist.stocksOverview, addStockIntoStockWatchlist];

                // update watchlist inside cache
                store.writeQuery({
                    query: UserStcokWatchlistsDocument,
                    variables: {
                        uid: identifier.userId
                    },
                    data
                });
            },
        });
    }
}
