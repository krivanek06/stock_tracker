import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StfmStockDividend } from '@core';

@Component({
	selector: 'app-market-calendar-dividend-payout',
	templateUrl: './market-calendar-dividend-payout.component.html',
	styleUrls: ['./market-calendar-dividend-payout.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketCalendarDividendPayoutComponent implements OnInit, OnChanges {
	@Input() dividendPayouts: StfmStockDividend[] = [];
	displayedColumns: string[] = ['paid', 'declaration', 'payment'];
	dataSource!: MatTableDataSource<StfmStockDividend>;

	constructor() {}

	ngOnInit() {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes?.['dividendPayouts']?.currentValue) {
			this.dataSource = new MatTableDataSource(this.dividendPayouts);
		}
	}
}
