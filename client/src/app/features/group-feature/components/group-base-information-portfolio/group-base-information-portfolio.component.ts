import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GroupButtonsBaseDirective } from '../../classes';

@Component({
	selector: 'app-group-base-information-portfolio',
	templateUrl: './group-base-information-portfolio.component.html',
	styleUrls: ['./group-base-information-portfolio.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupBaseInformationPortfolioComponent extends GroupButtonsBaseDirective implements OnInit {
	constructor() {
		super();
	}

	ngOnInit(): void {}
}
