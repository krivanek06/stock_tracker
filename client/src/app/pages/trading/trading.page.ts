import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {
    componentDestroyed,
    GraphqlQueryService,
    StStockSuggestion,
    SubscriptionWebsocketService,
    Summary,
    SymbolStorageService,
    UserStorageService
} from '@core';
import {SymbolIdentification} from '@shared';
import {first, takeUntil} from 'rxjs/operators';
import {PortfolioStateEnum, TradingFeatureFacadeService, TradingScreenUpdateBaseDirective} from '@stock-trading-feature';
import {cloneDeep} from 'lodash';

@Component({
    selector: 'app-trading',
    templateUrl: './trading.page.html',
    styleUrls: ['./trading.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradingPage extends TradingScreenUpdateBaseDirective implements OnInit, OnDestroy {
    suggestions: StStockSuggestion[] = [];
    PortfolioStateEnum = PortfolioStateEnum;

    constructor(private symbolStorageService: SymbolStorageService,
                public subscriptionWebsocketService: SubscriptionWebsocketService,
                private graphqlQueryService: GraphqlQueryService,
                public userStorageService: UserStorageService,
                public tradingService: TradingFeatureFacadeService,
                public cdr: ChangeDetectorRef) {
        super(userStorageService, subscriptionWebsocketService, cdr);
    }

    ngOnInit() {
        super.ngOnInit();
        this.initSuggestions();
        this.subscribeForSuggestionPriceChange();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    changeSymbol(symbolIdentification: SymbolIdentification) {
        this.symbolStorageService.getStockSummary(symbolIdentification.symbol).pipe(
            takeUntil(componentDestroyed(this))
        ).subscribe(res => {
            this.selectedSummary = res;
        });
    }

    changeSummary(summary: Summary) {
        this.selectedSummary = summary;
        // TODO smooth scroll to top
    }

    async tradeSymbol() {
        await this.tradingService.performTransaction(this.selectedSummary);
    }

    private initSuggestions() {
        this.graphqlQueryService.queryMarketDailyOverview().pipe(first()).subscribe(overview => {
            this.suggestions = cloneDeep(overview.stock_suggestions);

            if (!this.selectedSummary) {
                this.selectedSummary = this.suggestions[0].summary;
            }
        });
    }

    private subscribeForSuggestionPriceChange() {
        this.subscriptionWebsocketService.initSubscriptionStockSuggestions().pipe(
            takeUntil(componentDestroyed(this))
        ).subscribe(res => {
            const suggestion = this.suggestions.find(s => s.summary.symbol === res.s);
            if (suggestion) {
                suggestion.summary.marketPrice = res.p;
            }
        });
    }

}
