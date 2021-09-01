import { Injectable } from '@angular/core';
import { FetchResult } from '@apollo/client';
import { DataProxy } from '@apollo/client/cache/core/types/DataProxy';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import {
	AuthenticateUserDocument,
	AuthenticateUserQuery,
	PerformTransactionGQL,
	PerformTransactionMutation,
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
				update: (store: DataProxy, { data: { performTransaction } }) => {
					const user = store.readQuery<AuthenticateUserQuery>({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
					});
					const { transaction, holding } = performTransaction;

					const updatedHoldingIndex = user.authenticateUser.holdings.findIndex((h) => h.symbol === transaction.symbol);

					let userNewHoldings = [...user.authenticateUser.holdings];
					let addCash: number;

					if (transactionInput.operation === StTransactionOperationEnum.Buy) {
						addCash = -(transaction.price * transaction.units);
						if (updatedHoldingIndex >= 0) {
							userNewHoldings[updatedHoldingIndex] = { ...holding }; // update data
						} else {
							userNewHoldings = [...userNewHoldings, holding]; // new holding
						}
					} else {
						addCash = transaction.price * transaction.units;
						if (!performTransaction.holding) {
							userNewHoldings.splice(updatedHoldingIndex, 1); // no longer exists
						} else {
							userNewHoldings[updatedHoldingIndex] = { ...holding }; // update data
						}
					}

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
								},
								transactionsSnippets: [transaction, ...user.authenticateUser.transactionsSnippets].splice(0, 10),
							},
						},
					});
				},
			}
		);
	}
}
