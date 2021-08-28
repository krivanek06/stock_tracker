import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GraphqlQueryService, StfmStockScreenerInput, StfmStockScreenerResult } from '@core';
import { SymbolIdentification } from '@shared';
import { WatchlistFeatureFacadeService } from '@stock-watchlist-feature';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-search-stock-page',
	templateUrl: './search-stock-page.component.html',
	styleUrls: ['./search-stock-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchStockPageComponent implements OnInit {
	stockScreenerResult$: Observable<StfmStockScreenerResult[]>;
	stockScreener: StfmStockScreenerInput;

	constructor(private graphqlQueryService: GraphqlQueryService, private watchlistFeatureFacadeService: WatchlistFeatureFacadeService) {}

	ngOnInit() {
		this.stockScreenerResult$ = this.graphqlQueryService.queryMarketDailyOverview().pipe(map((res) => res.stockScreener));
		this.stockScreenerResult$.subscribe(console.log);
	}

	changedFormResult(stockScreener: StfmStockScreenerInput) {
		this.stockScreener = stockScreener;
	}

	filterSymbols() {
		this.stockScreenerResult$ = this.graphqlQueryService.queryStockScreener(this.stockScreener);
	}

	showSummarySymbol(symbolIdentification: SymbolIdentification) {
		this.watchlistFeatureFacadeService.presentSymbolLookupModal(symbolIdentification, true);
	}
}
