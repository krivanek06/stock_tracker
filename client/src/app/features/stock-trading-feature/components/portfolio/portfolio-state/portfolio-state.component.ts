import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { STARTING_PORTFOLIO } from '@core';

@Component({
	selector: 'app-portfolio-state',
	templateUrl: './portfolio-state.component.html',
	styleUrls: ['./portfolio-state.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioStateComponent implements OnInit {
	@Input() portfolioCash?: number;
	@Input() portfolioInvested?: number;
	@Input() startedBalance = STARTING_PORTFOLIO;
	@Input() portfolioState: 'CARD' | 'PARTIAL' = 'CARD';

	constructor() {}

	ngOnInit() {}

	get cashOnHand(): number {
		return this.portfolioCash || 0;
	}

	get invested(): number {
		return this.invested || 0;
	}
}
