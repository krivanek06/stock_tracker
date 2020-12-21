import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
} from '@angular/core';
import {IonicDialogService} from '../../../../shared/services/ionic-dialog.service';
import {Router} from '@angular/router';
import {ModalController, PopoverController} from '@ionic/angular';
import {ChartDataIdentification} from '../../../../shared/models/sharedModel';
import {SymbolLookupModalComponent} from '../../../../features/stock-details-feature/components/modal/symbol-lookup-modal/symbol-lookup-modal.component';
import {MarketPriceWebsocketService} from '../../../../shared/services/market-price-websocket.service';
import Maybe from 'graphql/tsutils/Maybe';
import {StStockWatchlistFragmentFragment} from '../../../../api/customGraphql.service';
import {ComponentBase} from '../../../../shared/utils/component-base/component.base';
import {WatchlistService} from '../../../../features/stock-watchlist-feature/services/watchlist.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-watchlist-tables-container',
    templateUrl: './watchlist-tables-container.component.html',
    styleUrls: ['./watchlist-tables-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchlistTablesContainerComponent extends ComponentBase implements OnInit, OnDestroy, OnChanges {
    private interval: any;

    constructor(private watchlistService: WatchlistService,
                private ionicDialogService: IonicDialogService,
                private router: Router,
                private marketPriceWebsocket: MarketPriceWebsocketService,
                private modalController: ModalController) {
        super();
    }

    stockWatchlists$: Observable<Array<Maybe<{ __typename?: 'STStockWatchlist' } & StStockWatchlistFragmentFragment>>>;


    ngOnInit() {
        this.stockWatchlists$ = this.watchlistService.getUserStockWatchlists();


        /*this.initSubscriptionForWatchlist();

        // websockets update view
        this.interval = setInterval(() => {
            if (this.cdr && !(this.cdr as ViewRef).destroyed) {
                this.cdr.detectChanges();
            }
        }, 1200);*/
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('watchlist table', changes);
    }


    ngOnDestroy(): void {
        console.log('ngOnDestroy on watchlist table containers');
        // clearInterval(this.interval);
        // this.marketPriceWebsocket.closeConnection();
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


    /*private async initSubscriptionForWatchlist() {
        const stocks = await this.watchlistService.getDistinctStocks();
        stocks.forEach(stock => this.marketPriceWebsocket.createSubscribeForSymbol(stock));

        this.marketPriceWebsocket.getSubscribedSymbolsResult().pipe(
            filter(res => !!res), // filter null & undefined
            takeUntil(this.destroy$)
        ).subscribe(res => {

            // update price change
            for (const watchlist of this.stockWatchlists$) {
                const objIndex = watchlist.summaries.findIndex(obj => obj.symbol === res.s);

                if (objIndex !== -1) {
                    watchlist.summaries[objIndex].marketPrice = res.p;
                }
            }
        });
    }*/

}
