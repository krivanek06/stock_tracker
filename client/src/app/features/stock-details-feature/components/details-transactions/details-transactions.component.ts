import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StfmInsideTrade } from '@core';

@Component({
	selector: 'app-details-transactions',
	templateUrl: './details-transactions.component.html',
	styleUrls: ['./details-transactions.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsTransactionsComponent implements OnInit, OnChanges {
	@Input() insiderTrades: StfmInsideTrade[] = [];

	displayedColumns: string[] = ['person', 'securities', 'value', 'transacted', 'type', 'unitPrice', 'totalPrice', 'date'];
	dataSource!: MatTableDataSource<StfmInsideTrade>;

	constructor() {}

	ngOnInit() {}

	ngOnChanges(changes: SimpleChanges): void {
		if (this.insiderTrades && this.insiderTrades.length > 0) {
			this.dataSource = new MatTableDataSource(this.insiderTrades);
		}
	}
}
