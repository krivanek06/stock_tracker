import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { marketValueChange } from '@shared';
import { PortfolioHistoricalWrapper } from '../../../models';

@Component({
	selector: 'app-portfolio-change',
	templateUrl: './portfolio-change.component.html',
	styleUrls: ['./portfolio-change.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [marketValueChange],
})
export class PortfolioChangeComponent implements OnInit {
	@Input() balance: number;
	@Input() tradingChangeWrapper: PortfolioHistoricalWrapper;
	@Input() inlinePriceWithIncrease = true;

	constructor() {}

	ngOnInit() {}
}
