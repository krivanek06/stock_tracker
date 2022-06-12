import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GraphqlQueryService, StfmStockNew } from '@core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-market-news',
	templateUrl: './market-news.component.html',
	styleUrls: ['./market-news.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketNewsComponent implements OnInit {
	stockNews$!: Observable<StfmStockNew[]>;

	constructor(private graphqlQueryService: GraphqlQueryService) {}

	ngOnInit() {
		this.stockNews$ = this.graphqlQueryService.queryMarketDailyOverview().pipe(map((res) => res.news));
	}
}
