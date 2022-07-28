import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StPortfolioChange, StPortfolioChangeData, StUserIdentificationDataFragment, StUserIdentificationPortfolioFragmentFragment } from '@core';
import { MomentService } from '@shared';

@Component({
	selector: 'app-user-account-info-list',
	templateUrl: './user-account-info-list.component.html',
	styleUrls: ['./user-account-info-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserAccountInfoListComponent implements OnInit {
	@Output() deleteEmitter: EventEmitter<any> = new EventEmitter<any>();
	@Output() clickedEmitter: EventEmitter<any> = new EventEmitter<any>();

	@Input() stUserPublicData!: StUserIdentificationDataFragment | StUserIdentificationPortfolioFragmentFragment;
	@Input() clickable = false;
	@Input() showDeleteButton = false;
	@Input() fullWith = false;

	/* 
		used to tell what portfolio change to display, 
		may be daily, weekly, monthly change
	*/
	@Input() portfolioChangeKey?: keyof StPortfolioChange;

	portfolioChange?: StPortfolioChangeData | null;

	get isAccountInactive(): boolean {
		return !MomentService.isMoreThan(this.stUserPublicData.lastSignInDate, 14);
	}

	constructor() {}

	ngOnInit() {
		const portfolioChange = this.portfolioChangeKey
			? (this.stUserPublicData.portfolio.portfolioChange[this.portfolioChangeKey] as StPortfolioChangeData)
			: null;
		this.portfolioChange = portfolioChange ?? this.stUserPublicData.portfolio.portfolioChange.day_1_change;
	}

	deletePerson() {
		this.deleteEmitter.emit();
	}

	clickedPerson() {
		this.clickedEmitter.emit();
	}
}
