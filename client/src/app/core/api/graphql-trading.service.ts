import {Injectable} from '@angular/core';
import {
    AuthenticateUserDocument,
    AuthenticateUserQuery,
    PerformTransactionGQL,
    PerformTransactionMutation,
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
                const {transaction, holding} = performTransaction;

                const updatedHoldingIndex = user.authenticateUser.holdings.findIndex(h => h.symbol === transaction.symbol);

                let userNewHoldings = [...user.authenticateUser.holdings];
                let addCash: number;

                if (transactionInput.operation === StTransactionOperationEnum.Buy) {
                    addCash = -(transaction.price * transaction.units);
                    if (updatedHoldingIndex >= 0) {
                        userNewHoldings[updatedHoldingIndex] = {...holding}; // update data
                    } else {
                        userNewHoldings = [...userNewHoldings, holding]; // new holding
                    }
                } else {
                    addCash = (transaction.price * transaction.units);
                    if (!performTransaction.holding) {
                        userNewHoldings.splice(updatedHoldingIndex, 1); // no longer exists
                    } else {
                        userNewHoldings[updatedHoldingIndex] = {...holding}; // update data
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
                            holdings: userNewHoldings,
                            transactionsSnippets: [transaction, ...user.authenticateUser.transactionsSnippets].splice(0, 10),
                            portfolioCash: user.authenticateUser.portfolioCash + addCash
                        }
                    }
                });

            }
        });

    }

}
