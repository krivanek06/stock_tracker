import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {groupTestData} from '../../../../model/groups.testdata';
import {PortfolioHistoricalWrapper, TIME_INTERVAL_ENUM, TradingFeatureFacadeService} from '@stock-trading-feature';
import {GroupStorageService} from '@core';

@Component({
    selector: 'app-group-details-overview',
    templateUrl: './group-details-overview.component.html',
    styleUrls: ['./group-details-overview.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupDetailsOverviewComponent implements OnInit {
    tradingChangeWrapper: PortfolioHistoricalWrapper[] = [];

    groupTestData = groupTestData;

    constructor(private groupStorageService: GroupStorageService,
                private tradingFeatureFacadeService: TradingFeatureFacadeService) {
    }

    ngOnInit() {
        this.groupStorageService.getActiveGroup().subscribe(res => {
            console.log('active group is', res);
        });
        this.tradingChangeWrapper = this.tradingFeatureFacadeService.createPortfolioHistoricalWrappers(
            this.groupTestData.portfolioSnapshots, [TIME_INTERVAL_ENUM.DAILY, TIME_INTERVAL_ENUM.WEEKLY, TIME_INTERVAL_ENUM.MONTHLY, TIME_INTERVAL_ENUM.FROM_BEGINNING]
        );
    }

}
