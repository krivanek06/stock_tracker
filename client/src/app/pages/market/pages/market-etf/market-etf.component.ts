import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GraphqlQueryService, StMarketDailyOverview, StMarketEtfDocument } from '@core';
import { ChartType, GenericChartSeriesData, SymbolIdentification, WindowService } from '@shared';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-market-etf',
	templateUrl: './market-etf.component.html',
	styleUrls: ['./market-etf.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketEtfComponent implements OnInit {
	marketDailyOverview$: Observable<StMarketDailyOverview>;
	etfDocument$: Observable<StMarketEtfDocument>;
	etfHolders$: Observable<GenericChartSeriesData[]>;
	chartHeight: number;
	chartHeighrPie: number;

	ChartType = ChartType;

	constructor(private graphqlQueryService: GraphqlQueryService) {}

	ngOnInit() {
		this.marketDailyOverview$ = this.graphqlQueryService.queryMarketDailyOverview();
		this.chartHeight = WindowService.getWindowHeightPrctInPx(42);
		this.chartHeighrPie = WindowService.getWindowHeightPrctInPx(38);
		this.etfClicked({ symbol: 'SPY', name: 'S&P 500' });
	}

	etfClicked(symbolIdentification: SymbolIdentification) {
		this.etfDocument$ = this.graphqlQueryService.queryEtfDocument(symbolIdentification.symbol);
		this.etfHolders$ = this.etfDocument$.pipe(
			map((document) =>
				document.etfHolders.map((x) => {
					return { name: x.asset, y: x.sharesNumber } as GenericChartSeriesData;
				})
			)
		);
		this.etfDocument$.subscribe((r) => console.log('etf', r));
	}
}
