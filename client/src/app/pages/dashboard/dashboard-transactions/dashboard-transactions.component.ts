import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StTransaction, StTransactionSnapshot } from '@core';

@Component({
	selector: 'app-dashboard-transactions',
	templateUrl: './dashboard-transactions.component.html',
	styleUrls: ['./dashboard-transactions.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardTransactionsComponent implements OnInit {
	@Input() stTransactionSnapshots: StTransactionSnapshot[];
	@Input() transactions: StTransaction[] = [];

	constructor() {}

	ngOnInit() {}
}
