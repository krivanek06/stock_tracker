import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    ViewRef
} from '@angular/core';
import {WatchlistService} from '../../../../features/stock-watchlist-feature/services/watchlist.service';
import {IonicDialogService} from '../../../../shared/services/ionic-dialog.service';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {ChartDataIdentification, DocumentIdentification} from '../../../../shared/models/sharedModel';
import {FinancialChartModalContainerComponent} from '../../../../shared/containers/modal/financial-chart-modal-container/financial-chart-modal-container.component';
import {StockWatchlistInformationFragment} from '../../../../api/customGraphql.service';
import {MarketPriceWebsocketService} from '../../../../shared/services/market-price-websocket.service';
import {Subject} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';
import Maybe from "graphql/tsutils/Maybe";

@Component({
    selector: 'app-watchlist-tables-container',
    templateUrl: './watchlist-tables-container.component.html',
    styleUrls: ['./watchlist-tables-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchlistTablesContainerComponent implements OnInit, OnDestroy, OnChanges {
    private interval: any;
    private destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private watchlistService: WatchlistService,
                private ionicDialogService: IonicDialogService,
                private router: Router,
                private marketPriceWebsocket: MarketPriceWebsocketService,
                private modalController: ModalController,
                private cdr: ChangeDetectorRef) {
    }

    stockWatchlists: Array<Maybe<{ __typename?: 'StockWatchlist' } & StockWatchlistInformationFragment>> = [];


    ngOnInit() {
        this.watchlistService.getUserStockWatchlists().pipe(
            takeUntil(this.destroy$)
        ).subscribe(
            res => {
                console.log('getUserStockWatchlists', res);
                this.stockWatchlists = res;
                this.cdr.detectChanges();
            }
        );

        this.initSubscriptionForWatchlist();

        // websockets update view
        this.interval = setInterval(() => {
            if (this.cdr && !(this.cdr as ViewRef).destroyed) {
                this.cdr.detectChanges();
            }
        }, 1200);
    }

    private async initSubscriptionForWatchlist() {
        const stocks = await this.watchlistService.getDistinctStocks();
        stocks.forEach(stock => this.marketPriceWebsocket.createSubscribeForSymbol(stock));

        this.marketPriceWebsocket.getSubscribedSymbolsResult().pipe(
            filter(res => !!res), // filter null & undefined
            takeUntil(this.destroy$)
        ).subscribe(res => {

            // update price change
            for (const watchlist of this.stockWatchlists) {
                const objIndex = watchlist.summary.findIndex(obj => obj.symbol === res.s);

                if (objIndex !== -1) {
                    watchlist.summary[objIndex].marketPrice = res.p;
                }
            }
        });
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy on watchlist table containers');
        clearInterval(this.interval);
        this.marketPriceWebsocket.closeConnection();
        this.destroy$.next(true);
        this.destroy$.complete();
    }


    createWatchList(watchlistName: string) {
        this.watchlistService.createWatchList( watchlistName)
            .subscribe(res => this.ionicDialogService.presentToast('Symbol deleted from watchlist'));
    }

    async showChartForSymbol(chartDataIdentification: ChartDataIdentification) {
        const modal = await this.modalController.create({
            component: FinancialChartModalContainerComponent,
            componentProps: {chartDataIdentification},
            cssClass: 'custom-modal'
        });
        return await modal.present();
    }

    async deleteSymbolFromDocument(data: ChartDataIdentification, documentId: string) {
        const confirmation = await this.ionicDialogService.presentAlertConfirm(
            `Do your really wanna remove ${data.name} from your watchlist ?`);

        if (confirmation) {
            this.watchlistService.removeStockFromWatchlist(documentId, data.symbol)
                .subscribe(x => this.ionicDialogService.presentToast('Symbol deleted from watchlist'));
        }
    }

    redirectToDetails(data: ChartDataIdentification) {
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
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('watchlist table', changes);
    }

}
