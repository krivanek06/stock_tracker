import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StfmStockScreenerInput } from '@core';

@Component({
	selector: 'app-market-search-form-result',
	templateUrl: './market-search-form-result.component.html',
	styleUrls: ['./market-search-form-result.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketSearchFormResultComponent implements OnInit {
	@Input() stockScreener?: StfmStockScreenerInput | null = null;

	constructor() {}

	ngOnInit() {}
}
