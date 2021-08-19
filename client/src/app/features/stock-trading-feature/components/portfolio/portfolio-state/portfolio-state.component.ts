import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StPortfolioWrapper } from '@core';
import { STARTING_PORTFOLIO } from './../../../models';

@Component({
	selector: 'app-portfolio-state',
	templateUrl: './portfolio-state.component.html',
	styleUrls: ['./portfolio-state.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioStateComponent implements OnInit {
	@Input() portfolio: StPortfolioWrapper;
	@Input() portfolioInvested: number;
	@Input() portfolioState: 'CARD' | 'PARTIAL' = 'CARD';

	STARTING_PORTFOLIO = STARTING_PORTFOLIO;

	constructor() {}

	ngOnInit() {}
}
