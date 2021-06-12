import {ChangeDetectorRef, Directive, OnDestroy, OnInit, ViewRef} from '@angular/core';
import {TradingChangeModel} from '../models';
import {componentDestroyed, StTransaction, StUserPublicData, SubscriptionWebsocketService, Summary, UserStorageService} from '@core';
import {filter, takeUntil} from 'rxjs/operators';
import {cloneDeep} from 'lodash';

@Directive()
export abstract class TradingScreenUpdateBaseDirective implements OnInit, OnDestroy {
    user: StUserPublicData;
    daily: TradingChangeModel;
    selectedSummary: Summary;

    clonedHoldings: StTransaction[] = [];
    portfolioInvested: number;

    private interval: any;

    protected constructor(public userStorageService: UserStorageService,
                          public subscriptionWebsocketService: SubscriptionWebsocketService,
                          public cdr: ChangeDetectorRef) {
    }

    ngOnInit(): void {
        this.initComponentAttributes();
        this.subscribeForSymbolPriceChange();
        this.updateScreen();
    }

    ngOnDestroy() {
        this.subscriptionWebsocketService.closeSubscriptionHoldings();
        clearInterval(this.interval);
    }

    /**
     * All components which will extend TradingScreenUpdateBase needs these attributes
     */
    private initComponentAttributes() {
        this.userStorageService.getUser().pipe(
            filter(x => !!x),
            takeUntil(componentDestroyed(this))
        ).subscribe(user => {
            this.clonedHoldings = cloneDeep(user.holdings);
            this.calculateTotalPortfolio();

            this.user = user;

            // select first summary in holdings
            if (!this.selectedSummary) {
                this.selectedSummary = user.holdings.length > 0 ? user.holdings[0].summary : undefined;
            }
        });
    }

    /**
     * Init subscription for symbols which are in holdings
     */
    private subscribeForSymbolPriceChange() {
        this.subscriptionWebsocketService.initSubscriptionHoldings().pipe(
            takeUntil(componentDestroyed(this))
        ).subscribe(res => {
            const transaction = this.clonedHoldings.find(s => s.symbol === res.s);
            if (transaction) {
                transaction.summary.marketPrice = res.p;
            }
        });
    }

    // websockets update view
    private updateScreen(): void {
        this.interval = setInterval(() => {
            if (this.cdr && !(this.cdr as ViewRef).destroyed) {
                this.calculateTotalPortfolio();
                this.calculateDailyPortfolioChange();
                this.cdr.detectChanges();
            }
        }, 2000);
    }

    /**
     * Calculate by how much user's portfolio is changing this day
     */
    private calculateDailyPortfolioChange() {
        const holdingsDiff = this.clonedHoldings.map(h => [h.units * h.summary.marketPrice, h.units * h.summary.previousClose]);

        if (holdingsDiff.length > 0) {
            const tmp = holdingsDiff.reduce((acc, val) => [acc[0] + val[0], acc[1] + val[1]]);

            this.daily = {
                growth: tmp[0] - tmp[1],
                change: (tmp[0] - tmp[1]) / Math.abs(tmp[1]) * 100
            };
        }
    }

    private calculateTotalPortfolio() {
        this.portfolioInvested = this.clonedHoldings.map(h => h.summary.marketPrice * h.units).reduce((a, b) => a + b, 0);
    }

}


