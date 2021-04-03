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

@Injectable({
    providedIn: 'root'
})
export class GraphqlTradingService {

    constructor(private userStorageService: UserStorageService,
                private performTransactionGQL: PerformTransactionGQL) {
    }

    performTransaction(transactionInput: StTransactionInput): Observable<FetchResult<PerformTransactionMutation>> {
        return this.performTransactionGQL.mutate({
            transactionInput
        }, {
            update: (store: DataProxy, {data: {performTransaction}}) => {
                const user = store.readQuery<AuthenticateUserQuery>({
                    query: AuthenticateUserDocument,
                    variables: {
                        uid: this.userStorageService.user.uid
                    }
                });

                const lastTrans = performTransaction.lastTransaction;
                const addCash = lastTrans.operation === StTransactionOperationEnum.Buy ?
                    lastTrans.price * lastTrans.units : -(lastTrans.price * lastTrans.units);

                // update cache
                store.writeQuery({
                    query: AuthenticateUserDocument,
                    variables: {
                        uid: this.userStorageService.user.uid
                    },
                    data: {
                        ...user,
                        authenticateUser: {
                            ...user.authenticateUser,
                            holdings: performTransaction.holdings,
                            transactionsSnippets: [performTransaction.lastTransaction, ...user.authenticateUser.transactionsSnippets].splice(0, 10),
                            portfolioCash: user.authenticateUser.portfolioCash + addCash
                        }
                    }
                });

            }
        });

    }

}
