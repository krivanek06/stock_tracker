import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewRef} from '@angular/core';
import {AuthFeatureService} from '../../features/auth-feature/services/auth-feature.service';
import {StPortfolio, StTransaction, StUserPublicData, Summary} from '../../api/customGraphql.service';
import {takeUntil} from 'rxjs/operators';
import {ComponentBase} from '../../shared/utils/component-base/component.base';
import {fakeDataTransactionTable, getFakeTransactionTable} from '../../features/trading-feature/models/trading.fakeData';
import {ChartType} from '../../shared/models/sharedModel';
import {cloneDeep} from 'lodash';
import {TradingService} from '../../features/trading-feature/services/trading.service';
import {TradingChangeModel} from '../../features/trading-feature/models/trading.model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPage extends ComponentBase implements OnInit, OnDestroy {
    private interval: any;

    user: StUserPublicData;
    daily: TradingChangeModel;
    clonedPortfolio: StPortfolio;
    clonedHoldings: StTransaction[] = [];
    stPortfolioHistory: StPortfolio[] = [];
    fakeDataTransactionTable = getFakeTransactionTable();

    ChartType = ChartType;

    constructor(private authService: AuthFeatureService,
                private tradingService: TradingService,
                private cdr: ChangeDetectorRef) {
        super();
    }

    ngOnInit(): void {
        this.initComponentAttributes();
        this.subscribeForSymbolPriceChange();
        this.updateScreen();
    }

    ngOnDestroy(): void {
        this.tradingService.closeMarketSubscription();
        clearInterval(this.interval);
    }

    private initComponentAttributes() {
        this.authService.getUser().pipe(takeUntil(this.destroy$)).subscribe(user => {
            this.user = user;
            this.clonedPortfolio = cloneDeep(this.user.portfolio);
            this.clonedHoldings = cloneDeep(user.holdings);
        });

        this.stPortfolioHistory = this.fakeDataTransactionTable.map(x => x.portfolio);
    }

    // updates stock prices in holdings
    private subscribeForSymbolPriceChange() {
        this.tradingService.initSubscriptionForHoldings().pipe(
            takeUntil(this.destroy$)
        ).subscribe(res => {
            const transaction = this.clonedHoldings.find(s => s.symbol === res.s);
            transaction.summary.marketPrice = res.p;
        });
    }

    private updateUsersPortfolio() {
        const invested = this.clonedHoldings
            .map(transaction => transaction.summary.marketPrice * transaction.units)
            .reduce((a, b) => a + b);
        this.clonedPortfolio = {
            ...this.clonedPortfolio,
            portfolioInvested: invested
        };
    }

    // websockets update view
    private updateScreen(): void {
        this.interval = setInterval(() => {
            if (this.cdr && !(this.cdr as ViewRef).destroyed) {
                this.updateUsersPortfolio();
                this.calculateDailyPortfolioChange();
                this.cdr.detectChanges();
            }
        }, 2000);
    }

    private calculateDailyPortfolioChange() {
        const tmp = this.clonedHoldings.map(h => [h.units * h.summary.marketPrice, h.units * h.summary.previousClose])
            .reduce((acc, val) => [acc[0] + val[0], acc[1] + val[1]]);

        this.daily = {
            growth: tmp[0] - tmp[1],
            change: (tmp[0] - tmp[1]) / Math.abs(tmp[1]) * 100
        };
    }
}
