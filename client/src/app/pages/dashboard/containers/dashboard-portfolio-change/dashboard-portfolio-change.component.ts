import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StPortfolioRiskCalculations, StPortfolioSnapshot } from '@core';
import { PortfolioHistoricalWrapper, TIME_INTERVAL_ENUM, TradingFeatureFacadeService } from '@stock-trading-feature';

@Component({
	selector: 'app-dashboard-portfolio-change',
	templateUrl: './dashboard-portfolio-change.component.html',
	styleUrls: ['./dashboard-portfolio-change.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPortfolioChangeComponent implements OnInit {
	@Input() stPortfolioRiskCalculations: StPortfolioRiskCalculations;
	@Input() stPortfolioSnapshots: StPortfolioSnapshot[];
	@Input() portfolioCash: number;
	@Input() portfolioInvested: number;

	// this is used only if (this.tradingChangeWrapper[0].historicalBalance === this.portfolioCash + this.portfolioInvested), which means it
	// is weekend or closed trading day
	@Input() lastPortfolioIncreaseNumber: number;

	tradingChangeWrapper: PortfolioHistoricalWrapper[] = [];

	constructor(private tradingFeatureFacadeService: TradingFeatureFacadeService) {}

	ngOnInit() {
		if (this.stPortfolioSnapshots.length === 0) {
			return;
		}
		this.tradingChangeWrapper = this.tradingFeatureFacadeService.createPortfolioHistoricalWrappers(this.stPortfolioSnapshots, [
			TIME_INTERVAL_ENUM.CURRENTLY,
			TIME_INTERVAL_ENUM.DAILY,
			TIME_INTERVAL_ENUM.WEEKLY,
			TIME_INTERVAL_ENUM.MONTHLY,
			TIME_INTERVAL_ENUM.FROM_BEGINNING,
		]);

		// weekend or closed market => show gains from previous day
		// if ((this.tradingChangeWrapper[0].historicalBalance, this.portfolioCash + this.portfolioInvested)) {
		// 	this.tradingChangeWrapper[0].historicalBalance = this.tradingChangeWrapper[0].historicalBalance - this.lastPortfolioIncreaseNumber;
		// }
	}
}
