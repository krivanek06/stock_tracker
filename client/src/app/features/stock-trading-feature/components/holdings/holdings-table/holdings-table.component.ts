import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StHolding } from '@core';
import { marketValueChange, SymbolIdentification } from '@shared';

@Component({
	selector: 'app-holdings-table',
	templateUrl: './holdings-table.component.html',
	styleUrls: ['./holdings-table.component.scss'],
	animations: [marketValueChange],
	//changeDetection: ChangeDetectionStrategy.OnPush
})
export class HoldingsTableComponent implements OnInit {
	@Output() itemClickedEmitter: EventEmitter<SymbolIdentification> = new EventEmitter<SymbolIdentification>();

	@Input() holdings: StHolding[];
	@Input() totalPortfolio: number;
	@Input() clickable = true;

	showDailyChange = true;

	constructor() {}

	ngOnInit() {}

	itemClicked(holding: StHolding) {
		if (!this.clickable) {
			return;
		}
		this.itemClickedEmitter.emit({ symbol: holding.symbol, name: holding.summary.companyName });
	}

	toggleDailyChange() {
		this.showDailyChange = !this.showDailyChange;
	}

	identify(index, item: StHolding) {
		return item.symbol;
	}

	sortByValue() {
		return this.holdings.slice().sort((a, b) => (b.summary.marketPrice * b.units > a.summary.marketPrice * a.units ? 1 : -1));
	}
}
