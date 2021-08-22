import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {GraphqlQueryService, StfmStockScreenerInput, StfmStockScreenerResult} from '@core';
import {Observable} from 'rxjs';
import {SymbolIdentification} from '@shared';
import {WatchlistFeatureFacadeService} from '@stock-watchlist-feature';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-search-stock-screener',
    templateUrl: './search-stock-screener.component.html',
    styleUrls: ['./search-stock-screener.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchStockScreenerComponent implements OnInit {
    stockScreenerResult$: Observable<StfmStockScreenerResult[]>;
    stockScreener: StfmStockScreenerInput;

    constructor(private graphqlQueryService: GraphqlQueryService,
                private watchlistFeatureFacadeService: WatchlistFeatureFacadeService,) {
    }

    ngOnInit() {
        this.stockScreenerResult$ = this.graphqlQueryService.queryMarketDailyOverview().pipe(map(res => res.stockScreener));
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
