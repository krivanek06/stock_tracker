import {Injectable} from '@angular/core';
import {
    AuthenticateUserDocument,
    AuthenticateUserQuery,
    PerformTransactionGQL, PerformTransactionMutation,
    StTransaction,
    StTransactionInput,
    StTransactionOperationEnum, StUserPublicData
} from '../../../api/customGraphql.service';
import {DataProxy} from '@apollo/client/cache/core/types/DataProxy';
import {AuthFeatureService} from '../../auth-feature/services/auth-feature.service';
import {addTransactionToUserHolding, substractTransactionFromUserHolding} from '../utils/trading-feature.functions';
import {Observable} from 'rxjs';
import {FetchResult} from '@apollo/client';

@Injectable({
    providedIn: 'root'
})
export class GraphqlTradingService {

    constructor(private authService: AuthFeatureService,
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
                        uid: this.authService.user.uid
                    }
                });

                let holdings: StTransaction[];
                const totalPrice = transactionInput.price * transactionInput.units;
                const portfolio = {...user.authenticateUser.portfolio};

                if (transactionInput.operation === StTransactionOperationEnum.Buy) {
                    portfolio.portfolioCash -= totalPrice;
                    portfolio.portfolioInvested += totalPrice;
                    holdings = addTransactionToUserHolding(user.authenticateUser as StUserPublicData, performTransaction as StTransaction);
                } else {
                    portfolio.portfolioCash += totalPrice;
                    portfolio.portfolioInvested -= totalPrice;
                    holdings = substractTransactionFromUserHolding(user.authenticateUser as StUserPublicData, performTransaction as StTransaction);
                }

                // update cache
                store.writeQuery({
                    query: AuthenticateUserDocument,
                    variables: {
                        uid: this.authService.user.uid
                    },
                    data: {
                        ...user,
                        authenticateUser: {
                            ...user.authenticateUser,
                            holdings,
                            transactionsSnippets: [performTransaction, ...user.authenticateUser.transactionsSnippets].splice(0, 10),
                            portfolio: {
                                ...portfolio
                            }
                        }
                    }
                });

            }
        });

    }

}
