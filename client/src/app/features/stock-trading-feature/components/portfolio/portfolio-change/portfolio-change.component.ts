import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StPortfolioChangeData } from '@core';

@Component({
	selector: 'app-portfolio-change',
	templateUrl: './portfolio-change.component.html',
	styleUrls: ['./portfolio-change.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioChangeComponent implements OnInit {
	@Input() title!: string;
	@Input() portfolioChange!: StPortfolioChangeData;
	@Input() currentBalance?: number | null;

	// whether balanceChangePrct should be under (false) or next to (true) balanceChange
	@Input() inlinePriceWithIncrease = true;

	constructor() {}

	ngOnInit() {}
}
