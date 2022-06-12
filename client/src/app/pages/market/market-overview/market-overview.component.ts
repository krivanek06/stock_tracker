import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GraphqlQueryService, StMarketOverviewPartialData } from '@core';
import { MarketFeatureFacadeService } from '@market-feature';
import { WindowService } from '@shared';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-market-overview',
	templateUrl: './market-overview.component.html',
	styleUrls: ['./market-overview.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketOverviewComponent implements OnInit {
	marketOverview$!: Observable<StMarketOverviewPartialData>;
	chartHeight!: number;
	chartHeightMain!: number;

	constructor(private graphqlQueryService: GraphqlQueryService, private marketPageFacadeService: MarketFeatureFacadeService) {}

	ngOnInit() {
		this.marketOverview$ = this.graphqlQueryService.queryStMarketHistoryOverview();
		this.chartHeight = WindowService.getWindowHeightPrctInPx(20);
		this.chartHeightMain = WindowService.getWindowHeightPrctInPx(25);
	}

	async expand(documentKey: string) {
		await this.marketPageFacadeService.showMarketChartBuilder(documentKey);
	}
}
