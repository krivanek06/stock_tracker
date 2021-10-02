import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { marketValueChange } from '@shared';

@Component({
	selector: 'app-trading-bid-ask',
	templateUrl: './trading-bid-ask.page.html',
	styleUrls: ['./trading-bid-ask.page.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [marketValueChange],
})
export class TradingBidAskPage implements OnInit {
	@Input() bidPrice: number;
	@Input() askPrice: number;

	constructor() {}

	ngOnInit(): void {}
}
