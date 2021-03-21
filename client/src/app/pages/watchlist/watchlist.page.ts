import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {WatchlistFeatureService} from '@stock-watchlist-feature';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {ComponentScreenUpdateBaseDirective, StStockWatchlistFragmentFragment, UserStorageService} from '@core';
import {SymbolIdentification} from '@shared';
import {SymbolLookupModalComponent} from '@stock-details-feature';
import {takeUntil} from 'rxjs/operators';
import {cloneDeep} from 'lodash';

@Component({
    selector: 'app-watchlist',
    templateUrl: './watchlist.page.html',
    styleUrls: ['./watchlist.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchlistPage extends ComponentScreenUpdateBaseDirective implements OnInit, OnDestroy {
    stockWatchlists: StStockWatchlistFragmentFragment[];

    constructor(private watchlistService: WatchlistFeatureService,
                private router: Router,
                private userStorageService: UserStorageService,
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
        this.watchlistService.closeMarketSubscription();
    }


    async showChartForSymbol(symbolIdentification: SymbolIdentification, watchlistId: string) {
        const modal = await this.modalController.create({
            component: SymbolLookupModalComponent,
            componentProps: {symbolIdentification, watchlistId},
            cssClass: 'custom-modal'
        });
        return await modal.present();
    }

    private subscribeForWatchlistChange() {
        this.watchlistService.getUserStockWatchlists().pipe(takeUntil(this.destroy$)).subscribe(watchlists => {
            this.stockWatchlists = cloneDeep(watchlists);
        });
    }

    private subscribeForSymbolPriceChange() {
        this.watchlistService.initSubscriptionForWatchlist().pipe(
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
