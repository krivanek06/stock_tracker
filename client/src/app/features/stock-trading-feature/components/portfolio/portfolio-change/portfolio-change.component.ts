import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { marketValueChange } from '@shared';
import { PortfolioHistoricalWrapper, TIME_INTERVAL_ENUM } from '../../../models';

@Component({
	selector: 'app-portfolio-change',
	templateUrl: './portfolio-change.component.html',
	styleUrls: ['./portfolio-change.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [marketValueChange],
})
export class PortfolioChangeComponent implements OnInit {
	@Input() balance?: number | null;
	@Input() tradingChangeWrapper!: PortfolioHistoricalWrapper;
	@Input() inlinePriceWithIncrease = true;

	TIME_INTERVAL_ENUM = TIME_INTERVAL_ENUM;

	constructor() {}

	ngOnInit() {}
}
