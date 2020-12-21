import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewRef,
} from '@angular/core';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {ChartDataIdentification} from '../../../../shared/models/sharedModel';
import {StStockWatchlistFragmentFragment} from '../../../../api/customGraphql.service';
import {WatchlistService} from '../../../../features/stock-watchlist-feature/services/watchlist.service';
import {ComponentBase} from '../../../../shared/utils/component-base/component.base';
import {SymbolLookupModalComponent} from '../../../../features/stock-details-feature/components/modal/symbol-lookup-modal/symbol-lookup-modal.component';
import {AuthFeatureService} from '../../../../features/auth-feature/services/auth-feature.service';
import {cloneDeep} from 'lodash';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-watchlist-tables-container',
    templateUrl: './watchlist-tables-container.component.html',
    styleUrls: ['./watchlist-tables-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchlistTablesContainerComponent extends ComponentBase implements OnInit, OnDestroy {
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

    async createWatchlist() {
        this.watchlistService.createWatchlist();
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

    /*redirectToDetails(data: ChartDataIdentification) {
        this.router.navigate([`/menu/stock-details/${data.symbol}`]);
    }

    renameWatchlist(data: DocumentIdentification) {
        this.watchlistService.renameStockWatchlist(data.documentId, data.additionalInfo)
            .subscribe(e => this.ionicDialogService.presentToast('Watchlist has been renamed'));
    }

    async deleteWatchlist(watchlistId: string) {
        const confirmation = await this.ionicDialogService.presentAlertConfirm(
            `Do your really want to delete your entire watchlist ?`);

        if (confirmation) {
            this.watchlistService.deleteUserWatchlist(watchlistId)
                .subscribe(() => this.ionicDialogService.presentToast('Watchlist has been deleted'));
        }
    }*/

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
