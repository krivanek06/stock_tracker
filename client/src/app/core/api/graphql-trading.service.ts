import {Injectable} from '@angular/core';
import {
    AuthenticateUserDocument,
    AuthenticateUserQuery,
    PerformTransactionGQL,
    PerformTransactionMutation, StTransaction,
    StTransactionInput,
    StTransactionOperationEnum
} from '../graphql-schema';
import {DataProxy} from '@apollo/client/cache/core/types/DataProxy';
import {Observable} from 'rxjs';
import {FetchResult} from '@apollo/client';
import {UserStorageService} from '../services';
import {Apollo} from 'apollo-angular';

@Injectable({
    providedIn: 'root'
})
export class GraphqlTradingService {

    constructor(private userStorageService: UserStorageService,
                private performTransactionGQL: PerformTransactionGQL,
                private apollo: Apollo) {
    }

    performTransaction(transactionInput: StTransactionInput): Observable<FetchResult<PerformTransactionMutation>> {
        return this.performTransactionGQL.mutate({
            transactionInput
        }, {
            update: (store: DataProxy, {data: {performTransaction}}) => {
                const user = store.readQuery<AuthenticateUserQuery>({
                    query: AuthenticateUserDocument,
                    variables: {
                        id: this.userStorageService.user.id
                    }
                });

                const updatedHoldingIndex = user.authenticateUser.holdings.findIndex(h => h.symbol === performTransaction.symbol);

                let holdings: StTransaction[] = [];
                let addCash = 0;
                if (transactionInput.operation === StTransactionOperationEnum.Buy) {
                    addCash = -(performTransaction.price * performTransaction.units);

                    if (user.authenticateUser.holdings.map(h => h.symbol).includes(performTransaction.symbol)) {
                        // symbol already exists in my portfolio
                        holdings = user.authenticateUser.holdings.map(h => {
                            return h.symbol !== performTransaction.symbol ? h : {...h, units: h.units + performTransaction.units};
                        });
                    } else {
                        // new symbol in my portfolio
                        holdings = [...user.authenticateUser.holdings, performTransaction];
                    }

                } else {
                    addCash = performTransaction.price * performTransaction.units;

                    if (user.authenticateUser.holdings[updatedHoldingIndex].units === performTransaction.units) {
                        // sold everything
                        holdings = user.authenticateUser.holdings.filter(h => h.symbol !== performTransaction.symbol);
                    } else {
                        // sold only few stocks
                        holdings = user.authenticateUser.holdings.map(h => {
                            return h.symbol !== performTransaction.symbol ? h : {...h, units: h.units - performTransaction.units};
                        });
                    }
                }

                // update cache - store
                this.apollo.client.writeQuery({
                    query: AuthenticateUserDocument,
                    variables: {
                        id: this.userStorageService.user.id
                    },
                    data: {
                        ...user,
                        authenticateUser: {
                            ...user.authenticateUser,
                            holdings: holdings,
                            transactionsSnippets: [performTransaction, ...user.authenticateUser.transactionsSnippets].splice(0, 10),
                            portfolioCash: user.authenticateUser.portfolioCash + addCash
                        }
                    }
                });

            }
        });

    }

}
