import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StPortfolioChange, StPortfolioChangeData } from '@core';
import { GroupButtonsBaseDirective } from '../../classes';

@Component({
	selector: 'app-group-base-information',
	templateUrl: './group-base-information.component.html',
	styleUrls: ['./group-base-information.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupBaseInformationComponent extends GroupButtonsBaseDirective implements OnInit {
	/* 
		used to tell what portfolio change to display, 
		may be daily, weekly, monthly change
	*/
	@Input() portfolioChangeKey?: keyof StPortfolioChange;

	portfolioChange?: StPortfolioChangeData | null;

	constructor() {
		super();
	}

	ngOnInit() {
		const portfolioChange = this.portfolioChangeKey
			? (this.groupIdentification.portfolio.portfolioChange[this.portfolioChangeKey] as StPortfolioChangeData)
			: null;
		this.portfolioChange = portfolioChange ?? this.groupIdentification.portfolio.portfolioChange.day_1_change;
	}
}
