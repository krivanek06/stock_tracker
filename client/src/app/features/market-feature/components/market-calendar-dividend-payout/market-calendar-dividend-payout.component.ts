import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StfmStockDividend } from '@core';

@Component({
	selector: 'app-market-calendar-dividend-payout',
	templateUrl: './market-calendar-dividend-payout.component.html',
	styleUrls: ['./market-calendar-dividend-payout.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketCalendarDividendPayoutComponent implements OnInit {
	@Input() dividendPayouts: StfmStockDividend[] = [];
	@Input() viewType: '1' | '2' = '1';

	constructor() {}

	ngOnInit() {}
}
