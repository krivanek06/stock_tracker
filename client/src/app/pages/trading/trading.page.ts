import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {AuthFeatureService} from '../../features/auth-feature/services/auth-feature.service';
import {StStockSuggestion, Summary} from '../../api/customGraphql.service';
import {SymbolIdentification} from '../../shared/models/sharedModel';
import {StockDetailsService} from '../../features/stock-details-feature/services/stock-details.service';
import {map, takeUntil} from 'rxjs/operators';
import {TradingService} from '../../features/stock-trading-feature/services/trading.service';
import {Router} from '@angular/router';
import {SEARCH_PAGE_ENUM, SEARCH_PAGE_STOCK_ENUM} from '../search/models/pages.model';
import {TradingScreenUpdateBase} from '../../features/stock-trading-feature/utils/trading-screen-update.base';
import {MarketService} from '../../features/market-feature/services/market.service';
import {cloneDeep} from 'lodash';
import {PortfolioStateEnum} from '../../features/stock-trading-feature/components/portfolio/portfolio-state/portfolio-state.component';

@Component({
    selector: 'app-trading',
    templateUrl: './trading.page.html',
    styleUrls: ['./trading.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradingPage extends TradingScreenUpdateBase implements OnInit, OnDestroy {
    suggestions: StStockSuggestion[] = [];
    PortfolioStateEnum = PortfolioStateEnum;

    constructor(private stockDetailsService: StockDetailsService,
                private router: Router,
                private marketService: MarketService,
                public authService: AuthFeatureService,
                public tradingService: TradingService,
                public cdr: ChangeDetectorRef) {
        super(authService, tradingService, cdr);
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
        this.stockDetailsService.getStockSummary(symbolIdentification.symbol).pipe(takeUntil(this.destroy$)).subscribe(res => {
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
