import { Injectable } from '@angular/core';
import { DataProxy, FetchResult } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import {
	AuthenticateUserDocument,
	AuthenticateUserQuery,
	PerformedTransaction,
	PerformTransactionGQL,
	PerformTransactionMutation,
	StHolding,
	StTransactionInput,
	StTransactionOperationEnum,
} from '../graphql-schema';
import { UserStorageService } from '../services';

@Injectable({
	providedIn: 'root',
})
export class GraphqlTradingService {
	constructor(private userStorageService: UserStorageService, private performTransactionGQL: PerformTransactionGQL, private apollo: Apollo) {}

	performTransaction(transactionInput: StTransactionInput): Observable<FetchResult<PerformTransactionMutation>> {
		return this.performTransactionGQL.mutate(
			{
				transactionInput,
			},
			{
				update: (store: DataProxy, { data }) => {
					const performTransaction = data?.performTransaction as PerformedTransaction;

					const user = store.readQuery<AuthenticateUserQuery>({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
					});

					if (!user?.authenticateUser) {
						return;
					}

					const { transaction, holding } = performTransaction;

					const updatedHoldingIndex = user.authenticateUser.holdings.findIndex((h) => h.symbol === transaction.symbol);

					let userNewHoldings = [...user.authenticateUser.holdings];
					let addCash: number;

					if (transactionInput.operation === StTransactionOperationEnum.Buy) {
						addCash = -(transaction.price * transaction.units) - transaction.transactionFees;
						if (updatedHoldingIndex !== -1) {
							userNewHoldings.splice(updatedHoldingIndex, 1, holding as StHolding); // update data
						} else {
							userNewHoldings = [...userNewHoldings, holding as StHolding]; // new holding
						}
					} else {
						addCash = transaction.price * transaction.units - transaction.transactionFees;
						if (!performTransaction.holding) {
							userNewHoldings.splice(updatedHoldingIndex, 1); // no longer exists
						} else {
							userNewHoldings.splice(updatedHoldingIndex, 1, holding as StHolding); // update data
						}
					}

					// calculate topTransactions
					const topTransactions = [...user.authenticateUser.topTransactions, transaction]
						.filter((t) => t.returnChange) // only which have return === SELL
						.sort((a, b) => Math.abs(b.returnChange ?? 0) - Math.abs(a.returnChange ?? 0)) // order abs(returnChange) desc
						.slice(0, 20)
						.sort((a, b) => (b.returnChange ?? 0) - (a.returnChange ?? 0)); // order returnChange desc

					// update cache - store
					this.apollo.client.writeQuery({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
						data: {
							...user,
							authenticateUser: {
								...user.authenticateUser,
								holdings: userNewHoldings,
								portfolio: {
									...user.authenticateUser.portfolio,
									portfolioCash: user.authenticateUser.portfolio.portfolioCash + addCash,
									numberOfExecutedBuyTransactions:
										addCash < 0
											? user.authenticateUser.portfolio.numberOfExecutedBuyTransactions + 1
											: user.authenticateUser.portfolio.numberOfExecutedBuyTransactions,
									numberOfExecutedSellTransactions:
										addCash > 0
											? user.authenticateUser.portfolio.numberOfExecutedSellTransactions + 1
											: user.authenticateUser.portfolio.numberOfExecutedSellTransactions,
									transactionFees: (user.authenticateUser.portfolio.transactionFees || 0) + transaction.transactionFees,
								},
								transactionsSnippets: [transaction, ...user.authenticateUser.transactionsSnippets].splice(0, 20),
								topTransactions: [...topTransactions],
							},
						},
					});
				},
			}
		);
	}
}
