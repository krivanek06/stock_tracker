import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewRef} from '@angular/core';
import {WatchlistService} from '../../features/stock-watchlist-feature/services/watchlist.service';
import {Router} from '@angular/router';
import {AuthFeatureService} from '../../features/auth-feature/services/auth-feature.service';
import {ModalController} from '@ionic/angular';
import {StStockWatchlistFragmentFragment} from '../../api/customGraphql.service';
import {ChartDataIdentification} from '../../shared/models/sharedModel';
import {SymbolLookupModalComponent} from '../../features/stock-details-feature/components/modal/symbol-lookup-modal/symbol-lookup-modal.component';
import {takeUntil} from 'rxjs/operators';
import {cloneDeep} from 'lodash';
import {ComponentBase} from '../../shared/utils/component-base/component.base';

@Component({
    selector: 'app-watchlist',
    templateUrl: './watchlist.page.html',
    styleUrls: ['./watchlist.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchlistPage extends ComponentBase implements OnInit, OnDestroy {
    private interval: any;

    constructor(private watchlistService: WatchlistService,
                private router: Router,
                private cdr: ChangeDetectorRef,
                private authFeatureService: AuthFeatureService,
                private modalController: ModalController) {
        super();
    }

    stockWatchlists: StStockWatchlistFragmentFragment[];


    ngOnInit() {
        this.subscribeForWatchlistChange();
        this.subscribeForSymbolPriceChange();
        this.updateScreen();
    }


    ngOnDestroy(): void {
        this.watchlistService.closeSubscriptionForWatchlist();
        clearInterval(this.interval);
    }


    async showChartForSymbol(chartDataIdentification: ChartDataIdentification) {
        const modal = await this.modalController.create({
            component: SymbolLookupModalComponent,
            componentProps: {chartDataIdentification},
            cssClass: 'custom-modal'
        });
        return await modal.present();
    }

    async deleteSymbolFromDocument(data: ChartDataIdentification, documentId: string, watchlistName: string) {
        this.watchlistService.removeStockFromWatchlist(data, documentId, watchlistName);
    }

    private subscribeForWatchlistChange() {
        this.watchlistService.getUserStockWatchlists().pipe(
            takeUntil(this.destroy$)
        ).subscribe(watchlists => {
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

    private updateScreen(): void {
        // websockets update view
        this.interval = setInterval(() => {
            if (this.cdr && !(this.cdr as ViewRef).destroyed) {
                this.cdr.detectChanges();
            }
        }, 1200);
    }

}
