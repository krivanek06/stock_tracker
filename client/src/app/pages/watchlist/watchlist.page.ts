import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {
    ComponentScreenUpdateBaseDirective,
    StStockWatchlistFragmentFragment,
    SubscriptionWebsocketService,
    UserStorageService
} from '@core';
import {SymbolIdentification} from '@shared';
import {takeUntil} from 'rxjs/operators';
import {cloneDeep} from 'lodash';
import {SymbolLookupModalComponent, WatchlistFeatureFacadeService} from '@stock-watchlist-feature';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-watchlist',
    templateUrl: './watchlist.page.html',
    styleUrls: ['./watchlist.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchlistPage extends ComponentScreenUpdateBaseDirective implements OnInit, OnDestroy {
    stockWatchlists: StStockWatchlistFragmentFragment[];

    constructor(private watchlistFeatureFacadeService: WatchlistFeatureFacadeService,
                private userStorageService: UserStorageService,
                private subscriptionWebsocketService: SubscriptionWebsocketService,
                private modalController: ModalController,
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
        const modal = await this.modalController.create({
            component: SymbolLookupModalComponent,
            componentProps: {symbolIdentification, showAddToWatchlistOption: true, watchlistId},
            cssClass: 'custom-modal'
        });
        await modal.present();
    }

    private subscribeForWatchlistChange() {
        this.userStorageService.getUserWatchlists().pipe(takeUntil(this.destroy$)).subscribe(watchlists => {
            this.stockWatchlists = cloneDeep(watchlists);
        });
    }

    private subscribeForSymbolPriceChange() {
        this.subscriptionWebsocketService.initSubscriptionWatchlist().pipe(
            takeUntil(this.destroy$)
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
