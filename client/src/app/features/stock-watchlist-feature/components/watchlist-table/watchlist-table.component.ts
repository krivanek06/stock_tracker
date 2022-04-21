import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StStockWatchlist, Summary } from '@core';
import { marketValueChange, SymbolIdentification } from '@shared';

@Component({
	selector: 'app-watchlist-table',
	templateUrl: './watchlist-table.component.html',
	styleUrls: ['./watchlist-table.component.scss'],
	animations: [marketValueChange],
})
export class WatchlistTableComponent implements OnInit, OnChanges {
	@Output() itemClickedEmitter: EventEmitter<SymbolIdentification> = new EventEmitter<SymbolIdentification>();

	@Input() watchlist!: StStockWatchlist;

	showDailyChange = true;

	displayedColumns: string[] = ['symbol', 'price', 'daily', 'yearly', 'volume', 'marketCap', 'peRatio', 'recommend', '52WeekRange'];
	dataSource!: MatTableDataSource<Summary>;

	constructor() {}

	ngOnInit() {}

	ngOnChanges(changes: SimpleChanges): void {
		if (this.watchlist) {
			this.dataSource = new MatTableDataSource(this.watchlist.summaries);
		}
	}

	itemClicked(identification: Summary) {
		this.itemClickedEmitter.emit({ symbol: identification.symbol, name: identification.companyName });
	}

	toggleDailyChange() {
		this.showDailyChange = !this.showDailyChange;
	}

	identify(index: any, item: Summary) {
		return item?.symbol || index;
	}
}
