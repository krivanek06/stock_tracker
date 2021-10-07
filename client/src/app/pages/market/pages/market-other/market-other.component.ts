import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GraphqlQueryService, StMarketDailyOverview } from '@core';
import { ChartType, WindowService } from '@shared';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-market-other',
	templateUrl: './market-other.component.html',
	styleUrls: ['./market-other.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketOtherComponent implements OnInit {
	dailyOverview$: Observable<StMarketDailyOverview>;

	ChartType = ChartType;
	chartHeight: number;

	constructor(private graphqlQueryService: GraphqlQueryService) {}

	ngOnInit() {
		this.dailyOverview$ = this.graphqlQueryService.queryMarketDailyOverview();
		this.chartHeight = WindowService.getWindowHeightPrctInPx(45);
	}
}
