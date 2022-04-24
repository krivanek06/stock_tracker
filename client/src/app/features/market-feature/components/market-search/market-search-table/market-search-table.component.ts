import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StfmStockScreenerResult } from '@core';
import { marketValueChange, SymbolIdentification } from '@shared';

@Component({
	selector: 'app-market-search-table',
	templateUrl: './market-search-table.component.html',
	styleUrls: ['./market-search-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [marketValueChange],
})
export class MarketSearchTableComponent implements OnInit, OnChanges {
	@Output() itemClickedEmitter: EventEmitter<SymbolIdentification> = new EventEmitter<SymbolIdentification>();

	@Input() stockScreenerResults?: StfmStockScreenerResult[] | null = [];

	displayedColumns: string[] = ['symbol', 'price', 'daily', 'volume', 'marketCap', 'shares', 'peRatio', 'eps', 'beta', 'industry', '52WeekRange'];
	dataSource!: MatTableDataSource<StfmStockScreenerResult>;

	constructor() {}

	ngOnInit() {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes?.['stockScreenerResults']?.currentValue) {
			this.dataSource = new MatTableDataSource(this.stockScreenerResults || []);
		}
	}

	itemClicked(result: StfmStockScreenerResult) {
		this.itemClickedEmitter.emit({ symbol: result.symbol, name: result.companyName, isEtf: result.isEtf });
	}

	identify(index: number, item: StfmStockScreenerResult): string {
		return item.symbol;
	}
}
