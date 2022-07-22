import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StGroupMemberOverviewFragment, StUserPublicDataSearchFragment } from '@core';
import { GenericChartSeries, WindowService } from '@shared';
import { TradingFeatureFacadeService } from '@stock-trading-feature';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-composed-searched-user-data',
	templateUrl: './composed-searched-user-data.component.html',
	styleUrls: ['./composed-searched-user-data.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComposedSearchedUserDataComponent implements OnInit {
	@Input() userData!: StUserPublicDataSearchFragment | StGroupMemberOverviewFragment;
	@Input() showHeaderInformation = true;

	portfolioChartHeight!: number;
	portfolioComparisonSeries!: Observable<GenericChartSeries[]>;

	constructor(private tradingFeatureFacadeService: TradingFeatureFacadeService) {}

	ngOnInit(): void {
		this.portfolioChartHeight = WindowService.getWindowHeightPrctInPx(34);
		this.portfolioComparisonSeries = this.tradingFeatureFacadeService.comparePortfolioWithIndexes(
			this.userData.userHistoricalData.portfolioSnapshots
		);
	}
}
