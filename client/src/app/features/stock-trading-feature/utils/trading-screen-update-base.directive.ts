import {ChangeDetectorRef, Directive, OnDestroy, OnInit, ViewRef} from '@angular/core';
import {TradingChangeModel} from '../models';
import {ComponentBaseDirective, StTransaction, StUserPublicData, SubscriptionWebsocketService, Summary, UserStorageService} from '@core';
import {filter, takeUntil} from 'rxjs/operators';
import {cloneDeep} from 'lodash';

@Directive()
export abstract class TradingScreenUpdateBaseDirective extends ComponentBaseDirective implements OnInit, OnDestroy {
    user: StUserPublicData;
    daily: TradingChangeModel;
    selectedSummary: Summary;

    clonedHoldings: StTransaction[] = [];
    portfolioInvested: number;

    private interval: any;

    protected constructor(public userStorageService: UserStorageService,
                          public subscriptionWebsocketService: SubscriptionWebsocketService,
                          public cdr: ChangeDetectorRef) {
        super();
    }

    ngOnInit(): void {
        super.ngOnInit();
        this.initComponentAttributes();
        this.subscribeForSymbolPriceChange();
        this.updateScreen();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
        this.subscriptionWebsocketService.closeSubscriptionHoldings();
        clearInterval(this.interval);
    }

    /**
     * All components which will extend TradingScreenUpdateBase needs these attributes
     */
    private initComponentAttributes() {
        this.userStorageService.getUser().pipe(
            filter(x => !!x),
            takeUntil(this.destroy$)
        ).subscribe(user => {
            this.user = user;
            this.clonedHoldings = cloneDeep(this.user.holdings);

            // select first summary in holdings
            this.selectedSummary = user.holdings.length > 0 ? user.holdings[0].summary : undefined;
        });
    }

    /**
     * Init subscription for symbols which are in holdings
     */
    private subscribeForSymbolPriceChange() {
        this.subscriptionWebsocketService.initSubscriptionHoldings().pipe(takeUntil(this.destroy$)).subscribe(res => {
            const transaction = this.clonedHoldings.find(s => s.symbol === res.s);
            if (transaction) {
                transaction.summary.marketPrice = res.p;
            }
        });
    }

    // websockets update view
    private updateScreen(): void {
        // console.log('updateScreen');
        this.interval = setInterval(() => {
            if (this.cdr && !(this.cdr as ViewRef).destroyed) {
                // console.log('bb');
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

    private calculateTotalPortfolio(){
        this.portfolioInvested = this.clonedHoldings.map(h => h.price * h.units).reduce((a, b) => a + b, 0);
    }

}


