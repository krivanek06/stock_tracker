import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StPortfolioSnapshotStarted, StPortfolioWrapper } from '@core';

interface TransactionSummary {
	color: string;
	name: string;
	value: number;
	isCurrency: boolean;
}

@Component({
	selector: 'app-transactions-summary',
	templateUrl: './transactions-summary.component.html',
	styleUrls: ['./transactions-summary.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsSummaryComponent implements OnInit {
	@Input() portfolioWrapper!: StPortfolioWrapper;
	@Input() startedPortfolio!: StPortfolioSnapshotStarted;
	transactionSummary: TransactionSummary[] = [];

	constructor() {}

	ngOnInit(): void {
		this.initTransactionSummary();
		this.substractStartedPortfolio();
	}

	private initTransactionSummary() {
		const trasactionTotal: TransactionSummary = {
			color: '#fefefe',
			name: 'Transactions total',
			value: this.portfolioWrapper.numberOfExecutedBuyTransactions + this.portfolioWrapper.numberOfExecutedSellTransactions,
			isCurrency: false,
		};
		const buyTransaction: TransactionSummary = {
			color: '#f77e0a',
			name: 'Transactions buy',
			value: this.portfolioWrapper.numberOfExecutedBuyTransactions,
			isCurrency: false,
		};

		const sellTransaction: TransactionSummary = {
			color: '#dd1ec2',
			name: 'Transactions sell',
			value: this.portfolioWrapper.numberOfExecutedSellTransactions,
			isCurrency: false,
		};

		const feesTransaction: TransactionSummary = {
			color: '#7cb5ec',
			name: 'Transactions fees',
			value: this.portfolioWrapper?.transactionFees || 0,
			isCurrency: true,
		};

		this.transactionSummary = [trasactionTotal, buyTransaction, sellTransaction, feesTransaction];
	}

	private substractStartedPortfolio() {
		if (!this.startedPortfolio) {
			return;
		}
		const startedTotal = this.startedPortfolio.numberOfExecutedBuyTransactions + this.startedPortfolio.numberOfExecutedSellTransactions;
		const buy = this.startedPortfolio.numberOfExecutedBuyTransactions;
		const sell = this.startedPortfolio.numberOfExecutedSellTransactions;
		const fees = this.startedPortfolio.transactionFees ?? 0;

		this.transactionSummary[0].value -= startedTotal;
		this.transactionSummary[1].value -= buy;
		this.transactionSummary[2].value -= sell;
		this.transactionSummary[3].value -= fees;
	}
}
