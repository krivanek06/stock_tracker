import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StHolding } from '@core';
import { marketValueChange, SymbolIdentification } from '@shared';

@Component({
	selector: 'app-holdings-table',
	templateUrl: './holdings-table.component.html',
	styleUrls: ['./holdings-table.component.scss'],
	animations: [marketValueChange],
	//changeDetection: ChangeDetectionStrategy.OnPush
})
export class HoldingsTableComponent implements OnInit, OnChanges {
	@Output() itemClickedEmitter: EventEmitter<SymbolIdentification> = new EventEmitter<SymbolIdentification>();

	@Input() holdings: StHolding[] = [];
	@Input() totalPortfolio?: number;
	@Input() clickable = true;

	showDailyChange = true;

	displayedColumns: string[] = ['symbol', 'price', 'bep', 'daily', 'total', 'value', 'units', 'portfolio', 'beta', 'Recommend'];
	dataSource!: MatTableDataSource<StHolding>;

	constructor() {}

	ngOnInit() {}

	ngOnChanges(changes: SimpleChanges): void {
		if (this.holdings) {
			const sorted = this.holdings.slice().sort((a, b) => (b.summary.marketPrice * b.units > a.summary.marketPrice * a.units ? 1 : -1));
			this.dataSource = new MatTableDataSource(sorted);
		}
	}

	itemClicked(holding: StHolding) {
		if (!this.clickable) {
			return;
		}
		this.itemClickedEmitter.emit({ symbol: holding.symbol, name: holding.summary.companyName });
	}

	toggleDailyChange() {
		this.showDailyChange = !this.showDailyChange;
	}

	identify(index: any, item: StHolding) {
		return item.symbol;
	}
}
