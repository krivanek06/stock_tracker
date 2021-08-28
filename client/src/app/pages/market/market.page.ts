import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MARKET_PAGE_ENUM, MARKET_PAGE_PATH } from './model/market.model';

@Component({
	selector: 'app-market',
	templateUrl: './market.page.html',
	styleUrls: ['./market.page.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketPage implements OnInit {
	MARKET_PAGE_PATH = MARKET_PAGE_PATH;
	MARKET_PAGE_ENUM = MARKET_PAGE_ENUM;
	segment = MARKET_PAGE_PATH[0].value;

	constructor() {}

	ngOnInit() {}

	segmentChanged(event: any) {
		this.segment = event.detail.value;
	}
}
