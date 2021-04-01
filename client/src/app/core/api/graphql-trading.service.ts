import {Injectable} from '@angular/core';
import {
    AuthenticateUserDocument,
    AuthenticateUserQuery,
    PerformTransactionGQL,
    PerformTransactionMutation,
    StTransaction,
    StTransactionInput,
    StTransactionOperationEnum,
    StUserPublicData
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
                        uid: this.userStorageService.user.uid
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



const addTransactionToUserHolding = (user: StUserPublicData, transaction: StTransaction): StTransaction[] => {
    let holdings = [...user.holdings];
    const index = holdings.map(x => x.symbol).indexOf(transaction.symbol);
    if (index > -1) {
        // symbol already in user's holdings
        const oldHolding = holdings[index];
        const updatedHolding: StTransaction = {
            ...oldHolding,
            price: (oldHolding.price * oldHolding.units + transaction.price * transaction.units) / (oldHolding.units + transaction.units),
            units: oldHolding.units + transaction.units,
            date: transaction.date
        };
        holdings[index] = updatedHolding;
    } else {
        holdings = [...holdings, transaction];    // user is not needed
    }
    return holdings;
};


const substractTransactionFromUserHolding = (user: StUserPublicData, transaction: StTransaction): StTransaction[] => {
    let holdings: StTransaction[] = [...user.holdings];
    const userHolding = user.holdings.find(x => x.symbol === transaction.symbol);

    if (userHolding.units > transaction.units) {
        const updatedHolding: StTransaction = {
            ...userHolding,
            units: userHolding.units - transaction.units,
            date: transaction.date
        };
        const index = user.holdings.map(x => x.symbol).indexOf(transaction.symbol);
        holdings[index] = updatedHolding;
    } else {
        holdings = holdings.filter(x => x.symbol !== transaction.symbol);
    }
    return holdings;
};
