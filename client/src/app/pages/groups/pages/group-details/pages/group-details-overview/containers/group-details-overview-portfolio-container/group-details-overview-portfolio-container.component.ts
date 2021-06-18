import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StGroupAllData} from '@core';
import {PortfolioHistoricalWrapper, TIME_INTERVAL_ENUM, TradingFeatureFacadeService} from '@stock-trading-feature';

@Component({
    selector: 'app-group-details-overview-portfolio-container',
    templateUrl: './group-details-overview-portfolio-container.component.html',
    styleUrls: ['./group-details-overview-portfolio-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupDetailsOverviewPortfolioContainerComponent implements OnInit {
    @Input() groupAllData: StGroupAllData;

    tradingChangeWrapper: PortfolioHistoricalWrapper[] = [];

    constructor(private tradingFeatureFacadeService: TradingFeatureFacadeService,) {
    }

    ngOnInit() {
      this.tradingChangeWrapper = this.tradingFeatureFacadeService.createPortfolioHistoricalWrappers(
          this.groupAllData.groupHistoricalData.portfolioSnapshots,
          [TIME_INTERVAL_ENUM.DAILY, TIME_INTERVAL_ENUM.WEEKLY, TIME_INTERVAL_ENUM.MONTHLY, TIME_INTERVAL_ENUM.FROM_BEGINNING]
      );
    }

}
