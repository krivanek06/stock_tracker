import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StTransaction, StTransactionOperationEnum } from '@core';

@Component({
	selector: 'app-transactions-table',
	templateUrl: './transactions-table.component.html',
	styleUrls: ['./transactions-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsTableComponent implements OnInit, OnChanges {
	@Input() transactions: StTransaction[] = [];
	@Input() showUser = false;
	@Input() applyLastChildStyle = false;

	@Input() showUnits = false;
	@Input() showPrice = false;

	StTransactionOperationEnum = StTransactionOperationEnum;

	displayedColumns: string[] = ['symbol', 'return', 'value', 'fees'];
	dataSource!: MatTableDataSource<StTransaction>;

	constructor() {}

	ngOnInit() {
		if (this.showUser) {
			this.displayedColumns = ['symbol', 'user', 'return', 'value', 'fees'];
		}
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (this.transactions) {
			this.dataSource = new MatTableDataSource(this.transactions);
		}
	}
}
