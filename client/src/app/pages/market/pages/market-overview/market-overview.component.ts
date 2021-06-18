import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {GraphqlQueryService, StMarketOverviewPartialData} from '@core';
import {Observable} from 'rxjs';
import {MarketFeatureFacadeService} from '@market-feature';

@Component({
    selector: 'app-market-overview',
    templateUrl: './market-overview.component.html',
    styleUrls: ['./market-overview.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketOverviewComponent implements OnInit {
    marketOverview$: Observable<StMarketOverviewPartialData>;

    chartHeight = 185;

    constructor(private graphqlQueryService: GraphqlQueryService,
                private marketPageFacadeService: MarketFeatureFacadeService) {
    }

    ngOnInit() {
        this.marketOverview$ = this.graphqlQueryService.queryStMarketHistoryOverview();
    }

    async expand(documentKey: string) {
        await this.marketPageFacadeService.showMarketChartBuilder(documentKey);
    }
}
