import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GraphqlQueryService, StMarketDailyOverview } from '@core';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-market-calendar',
	templateUrl: './market-calendar.component.html',
	styleUrls: ['./market-calendar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketCalendarComponent implements OnInit {
	dailyOverview$!: Observable<StMarketDailyOverview>;

	constructor(private graphqlQueryService: GraphqlQueryService) {}

	ngOnInit() {
		this.dailyOverview$ = this.graphqlQueryService.queryMarketDailyOverview();
	}
}
