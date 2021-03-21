import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {StStockSuggestion, Summary, SymbolStorageService, UserStorageService} from '@core';
import {SymbolIdentification} from '@shared';
import {takeUntil} from 'rxjs/operators';
import {PortfolioStateEnum, TradingScreenUpdateBaseDirective, TradingFeatureService} from '@stock-trading-feature';
import {Router} from '@angular/router';
import {SEARCH_PAGE_ENUM, SEARCH_PAGE_STOCK_ENUM} from '../search/models/pages.model';
import {MarketFeatureService} from '@market-feature';
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
                private router: Router,
                private marketService: MarketFeatureService,
                public userStorageService: UserStorageService,
                public tradingService: TradingFeatureService,
                public cdr: ChangeDetectorRef) {
        super(userStorageService, tradingService, cdr);
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
        this.symbolStorageService.getStockSummary(symbolIdentification.symbol).pipe(takeUntil(this.destroy$)).subscribe(res => {
            this.selectedSummary = res;
        });
    }

    changeSummary(summary: Summary) {
        this.selectedSummary = summary;
        // TODO smooth scroll to top
    }

    tradeSymbol() {
        this.tradingService.performTransaction(this.selectedSummary);
    }

    redirectToDetails() {
        this.router.navigate([`/menu/search/${SEARCH_PAGE_ENUM.STOCK}/${SEARCH_PAGE_STOCK_ENUM.DETAILS}/${this.selectedSummary.symbol}`]);
    }

    private initSuggestions() {
        this.marketService.queryMarketDailyOverview().pipe(takeUntil(this.destroy$)).subscribe(overview => {
            this.suggestions = cloneDeep(overview.stock_suggestions);
            console.log('this.suggestions', this.suggestions);
            if (!this.selectedSummary) {
                this.selectedSummary = this.suggestions[0].summary;
            }
        });
    }

    private subscribeForSuggestionPriceChange() {
        this.marketService.initSubscriptionForStockSuggestions().pipe(takeUntil(this.destroy$)).subscribe(res => {
            const suggestion = this.suggestions.find(s => s.summary.symbol === res.s);
            if (suggestion) {
                suggestion.summary.marketPrice = res.p;
            }
        });
    }

}
