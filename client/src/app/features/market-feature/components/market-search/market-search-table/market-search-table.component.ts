import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StfmStockScreenerResult } from '@core';
import { SymbolIdentification } from '@shared';

@Component({
	selector: 'app-market-search-table',
	templateUrl: './market-search-table.component.html',
	styleUrls: ['./market-search-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketSearchTableComponent implements OnInit {
	@Output() itemClickedEmitter: EventEmitter<SymbolIdentification> = new EventEmitter<SymbolIdentification>();

	@Input() stockScreenerResults?: StfmStockScreenerResult[] | null = [];

	constructor() {}

	ngOnInit() {}

	itemClicked(result: StfmStockScreenerResult) {
		this.itemClickedEmitter.emit({ symbol: result.symbol, name: result.companyName, isEtf: result.isEtf });
	}

	identify(index: number, item: StfmStockScreenerResult): string {
		return item.symbol;
	}
}
