import {
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewRef
} from '@angular/core';
import {WatchlistService} from '../../features/stock-watchlist-feature/services/watchlist.service';
import {Router} from '@angular/router';
import {AuthFeatureService} from '../../features/auth-feature/services/auth-feature.service';
import {ModalController} from '@ionic/angular';
import {StStockWatchlistFragmentFragment} from '../../api/customGraphql.service';
import {SymbolIdentification} from '../../shared/models/sharedModel';
import {SymbolLookupModalComponent} from '../../features/stock-details-feature/entry-components/symbol-lookup-modal/symbol-lookup-modal.component';
import {takeUntil} from 'rxjs/operators';
import {cloneDeep} from 'lodash';
import {ComponentScreenUpdateBase} from '../../shared/utils/component-base/component-screen-update.base';
import {fromEvent} from 'rxjs';

@Component({
    selector: 'app-watchlist',
    templateUrl: './watchlist.page.html',
    styleUrls: ['./watchlist.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchlistPage extends ComponentScreenUpdateBase implements OnInit, OnDestroy {
    stockWatchlists: StStockWatchlistFragmentFragment[];

    constructor(private watchlistService: WatchlistService,
                private router: Router,
                private authFeatureService: AuthFeatureService,
                private modalController: ModalController,
                cdr: ChangeDetectorRef) {
        super(cdr);
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


    async showChartForSymbol(chartDataIdentification: SymbolIdentification, watchlistId: string) {
        const modal = await this.modalController.create({
            component: SymbolLookupModalComponent,
            componentProps: {chartDataIdentification, watchlistId},
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
