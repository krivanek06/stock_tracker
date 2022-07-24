import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StMarketTopTableCryptoData } from '@core';
import { marketValueChange } from '@shared';

@Component({
	selector: 'app-market-top-table-crypto',
	templateUrl: './market-top-table-crypto.component.html',
	styleUrls: ['./market-top-table-crypto.component.scss'],
	animations: [marketValueChange],
})
export class MarketTopTableCryptoComponent implements OnInit {
	@Output() itemClickedEmitter: EventEmitter<StMarketTopTableCryptoData> = new EventEmitter<StMarketTopTableCryptoData>();
	@Input() topTableCryptoData: StMarketTopTableCryptoData[] = [];

	displayedColumns: string[] = ['symbol', 'price', 'dailyChange', 'supply', 'marketCap', '52WeekRange'];
	dataSource!: MatTableDataSource<StMarketTopTableCryptoData>;

	constructor() {}

	ngOnInit() {}

	ngOnChanges(changes: SimpleChanges): void {
		if (this.topTableCryptoData) {
			this.dataSource = new MatTableDataSource(this.topTableCryptoData);
		}
	}

	itemClicked(data: StMarketTopTableCryptoData) {
		this.itemClickedEmitter.emit(data);
	}
}
