import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {GraphqlQueryService, StMarketDailyOverview} from '@core';
import {ChartType} from '@shared';

@Component({
    selector: 'app-market-other',
    templateUrl: './market-other.component.html',
    styleUrls: ['./market-other.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketOtherComponent implements OnInit {

    dailyOverview$: Observable<StMarketDailyOverview>;

    ChartType = ChartType;

    constructor(private graphqlQueryService: GraphqlQueryService) {
    }

    ngOnInit() {
        this.dailyOverview$ = this.graphqlQueryService.queryMarketDailyOverview();
    }
}
