import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StPortfolioSnapshotStarted, StPortfolioWrapper, StTransaction, StTransactionSnapshot } from '@core';
import { WindowService } from '@shared';

@Component({
	selector: 'app-composed-transactions',
	templateUrl: './composed-transactions.component.html',
	styleUrls: ['./composed-transactions.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComposedTransactionsComponent implements OnInit {
	@Input() portfolioWrapper: StPortfolioWrapper;
	@Input() startedPortfolio: StPortfolioSnapshotStarted;
	@Input() transactions: StTransaction[] = [];
	@Input() topTransactions: StTransaction[] = [];
	@Input() stTransactionSnapshots: StTransactionSnapshot[];
	@Input() transactionHeightPrct: number = 45;

	transactionHeight: number;

	constructor() {}

	ngOnInit(): void {
		this.transactionHeight = WindowService.getWindowHeightPrctInPx(this.transactionHeightPrct);
	}
}
