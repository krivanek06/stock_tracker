import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {
    componentDestroyed,
    ComponentScreenUpdateBaseDirective,
    StStockWatchlistFragmentFragment,
    SubscriptionWebsocketService,
    UserStorageService
} from '@core';
import {SymbolIdentification} from '@shared';
import {takeUntil} from 'rxjs/operators';
import {cloneDeep} from 'lodash';
import {WatchlistFeatureEntryPointsFacadeService, WatchlistFeatureFacadeService} from '@stock-watchlist-feature';


@Component({
    selector: 'app-watchlist',
    templateUrl: './watchlist.page.html',
    styleUrls: ['./watchlist.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchlistPage extends ComponentScreenUpdateBaseDirective implements OnInit, OnDestroy {
    stockWatchlists: StStockWatchlistFragmentFragment[];

    constructor(private watchlistFeatureFacadeService: WatchlistFeatureFacadeService,
                private watchlistFeatureEntryPointsFacadeService: WatchlistFeatureEntryPointsFacadeService,
                private userStorageService: UserStorageService,
                private subscriptionWebsocketService: SubscriptionWebsocketService,
                public cdr: ChangeDetectorRef) {
        super(cdr, 'WatchlistPage');
    }


    ngOnInit() {
        super.ngOnInit();
        this.subscribeForWatchlistChange();
        this.subscribeForSymbolPriceChange();
    }


    ngOnDestroy(): void {
        super.ngOnDestroy();
        this.subscriptionWebsocketService.closeSubscriptionWatchlist();
    }


    async showChartForSymbol(symbolIdentification: SymbolIdentification, watchlistId: string) {
        this.watchlistFeatureEntryPointsFacadeService.presentSymbolLookupModal(symbolIdentification, true, watchlistId);
    }

    private subscribeForWatchlistChange() {
        this.userStorageService.getUserWatchlists().pipe(
            takeUntil(componentDestroyed(this))
        ).subscribe(watchlists => {
            this.stockWatchlists = cloneDeep(watchlists) || [];
        });
    }

    private subscribeForSymbolPriceChange() {
        this.subscriptionWebsocketService.initSubscriptionWatchlist().pipe(
            takeUntil(componentDestroyed(this))
        ).subscribe(res => {
            for (const watchlist of this.stockWatchlists) {
                const objIndex = watchlist.summaries.findIndex(obj => obj.symbol === res.s);

                if (objIndex !== -1) {
                    watchlist.summaries[objIndex].marketPrice = res.p;
                }
            }
        });
    }

}
