import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StGroupMemberOverviewFragment, StPortfolioSnapshot, StUserPublicDataSearchFragment } from '@core';
import { PortfolioHistoricalWrapper, TIME_INTERVAL_ENUM, TradingFeatureFacadeService } from '@stock-trading-feature';

@Component({
	selector: 'app-composed-searched-user-data',
	templateUrl: './composed-searched-user-data.component.html',
	styleUrls: ['./composed-searched-user-data.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComposedSearchedUserDataComponent implements OnInit {
	@Output() clearEmitter: EventEmitter<void> = new EventEmitter<void>();
	@Input() userData!: StUserPublicDataSearchFragment | StGroupMemberOverviewFragment;
	@Input() showHeaderInformation = true;

	tradingChangeWrapper: PortfolioHistoricalWrapper[] = [];

	constructor(private tradingFeatureFacadeService: TradingFeatureFacadeService) {}

	ngOnInit(): void {
		this.tradingChangeWrapper = this.tradingFeatureFacadeService.createPortfolioHistoricalWrappers(
			this.userData.userHistoricalData.portfolioSnapshots as StPortfolioSnapshot[],
			[TIME_INTERVAL_ENUM.DAILY, TIME_INTERVAL_ENUM.WEEKLY, TIME_INTERVAL_ENUM.MONTHLY, TIME_INTERVAL_ENUM.FROM_BEGINNING]
		);
	}

	clearResult(): void {
		this.clearEmitter.emit();
	}
}
