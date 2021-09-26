import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StGroupAllData } from '@core';
import { PortfolioHistoricalWrapper, TIME_INTERVAL_ENUM, TradingFeatureFacadeService } from '@stock-trading-feature';

@Component({
	selector: 'app-group-details-overview-portfolio-container',
	templateUrl: './group-details-overview-portfolio-container.component.html',
	styleUrls: ['./group-details-overview-portfolio-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupDetailsOverviewPortfolioContainerComponent implements OnInit {
	@Input() groupAllData: StGroupAllData;

	tradingChangeWrapper: PortfolioHistoricalWrapper[] = [];

	constructor(private tradingFeatureFacadeService: TradingFeatureFacadeService) {}

	ngOnInit() {
		this.calculateGroupPortfolio();
	}

	private calculateGroupPortfolio(): void {
		this.tradingChangeWrapper = this.tradingFeatureFacadeService.createPortfolioHistoricalWrappers(
			this.groupAllData.groupHistoricalData.portfolioSnapshots,
			[TIME_INTERVAL_ENUM.DAILY, TIME_INTERVAL_ENUM.WEEKLY, TIME_INTERVAL_ENUM.MONTHLY, TIME_INTERVAL_ENUM.FROM_BEGINNING]
		);

		// adjust 'from beginning' -> subsctract user's starting portfolio
		const beginningRef = this.tradingChangeWrapper.find((wrapper) => wrapper.timeIntervalName === TIME_INTERVAL_ENUM.FROM_BEGINNING);
		if (beginningRef) {
			const usersStartedBalance = this.groupAllData.groupMemberData.members
				.map((m) => m.startedPortfolio.portfolioCash + m.startedPortfolio.portfolioInvested)
				.reduce((a, b) => a + b);

			beginningRef.historicalBalance = usersStartedBalance;
		}

		// add started with
		this.tradingChangeWrapper = [
			...this.tradingChangeWrapper,
			{
				timeIntervalName: TIME_INTERVAL_ENUM.STARTED_WITH,
				historicalBalance: this.groupAllData.startedPortfolio.portfolioCash + this.groupAllData.startedPortfolio.portfolioInvested,
			},
		];
	}
}
