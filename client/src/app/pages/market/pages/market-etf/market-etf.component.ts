import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GraphqlQueryService, StMarketDailyOverview, StMarketEtfDocument } from '@core';
import { SymbolIdentification, WindowService } from '@shared';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-market-etf',
	templateUrl: './market-etf.component.html',
	styleUrls: ['./market-etf.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketEtfComponent implements OnInit {
	marketDailyOverview$: Observable<StMarketDailyOverview>;
	etfDocument$: Observable<StMarketEtfDocument>;
	chartHeight: number;
	chartHeighrPie: number;

	constructor(private graphqlQueryService: GraphqlQueryService) {}

	ngOnInit() {
		this.marketDailyOverview$ = this.graphqlQueryService.queryMarketDailyOverview();
		this.etfDocument$ = this.graphqlQueryService.queryEtfDocument('SPY');

		this.chartHeight = WindowService.getWindowHeightPrctInPx(42);
		this.chartHeighrPie = WindowService.getWindowHeightPrctInPx(38);
		this.etfDocument$.subscribe((r) => console.log('etf', r));
	}

	etfClicked(symbolIdentification: SymbolIdentification) {}
}
