import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {GraphqlQueryService, StMarketDailyOverview} from '@core';

@Component({
    selector: 'app-market-daily-change',
    templateUrl: './market-daily-change.component.html',
    styleUrls: ['./market-daily-change.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketDailyChangeComponent implements OnInit {
    dailyOverview$: Observable<StMarketDailyOverview>;

    constructor(private graphqlQueryService: GraphqlQueryService) {
    }

    ngOnInit() {
        this.dailyOverview$ = this.graphqlQueryService.queryMarketDailyOverview();
    }

}
