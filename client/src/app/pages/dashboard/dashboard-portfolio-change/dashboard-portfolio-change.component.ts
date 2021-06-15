import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StPortfolioSnapshot} from '@core';
import {PortfolioHistoricalWrapper, TIME_INTERVAL_ENUM, TradingFeatureFacadeService} from '@stock-trading-feature';

@Component({
    selector: 'app-dashboard-portfolio-change',
    templateUrl: './dashboard-portfolio-change.component.html',
    styleUrls: ['./dashboard-portfolio-change.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPortfolioChangeComponent implements OnInit {
    @Input() stPortfolioSnapshots: StPortfolioSnapshot[];
    @Input() portfolioCash: number;
    @Input() portfolioInvested: number;

    tradingChangeWrapper: PortfolioHistoricalWrapper[] = [];

    constructor(private tradingFeatureFacadeService: TradingFeatureFacadeService) {
    }

    ngOnInit() {
        this.tradingChangeWrapper = this.tradingFeatureFacadeService.createPortfolioHistoricalWrappers(
            this.stPortfolioSnapshots, [TIME_INTERVAL_ENUM.DAILY, TIME_INTERVAL_ENUM.WEEKLY, TIME_INTERVAL_ENUM.MONTHLY, TIME_INTERVAL_ENUM.FROM_BEGINNING]
        );
    }

}
