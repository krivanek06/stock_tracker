import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {WatchlistService} from '../../../../core/services/public/watchlist.service';
import {IonicDialogService} from '../../../../shared/services/ionic-dialog.service';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {ChartDataIdentification, DocumentIdentification} from '../../../../shared/models/chartModel';
import {FinancialChartCardModalContainerComponent} from '../../../../features/stock-tracker-feature/container/modal/financial-chart-card-modal-container/financial-chart-card-modal-container.component';
import {Maybe} from 'graphql/jsutils/Maybe';
import {
    QueryUserStockWatchlistsDocument, StockMainDetailsFragment,
    StockMainDetailsFragmentDoc,
    StockWatchlistInformationFragment
} from '../../../../core/services/private/watchlistGraphql.service';
import {MarketPriceWebsocketService} from '../../../../core/services/public/market-price-websocket.service';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-watchlist-tables-container',
    templateUrl: './watchlist-tables-container.component.html',
    styleUrls: ['./watchlist-tables-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchlistTablesContainerComponent implements OnInit, OnDestroy {
    private DELETE_THIS_LATER = '7eYTErOxXugeHg4JHLS1L5ZKosK2';


    constructor(private watchlistService: WatchlistService,
                private ionicDialogService: IonicDialogService,
                private router: Router,
                private apollo: Apollo,
                private modalController: ModalController) {
    }

    stockWatchLists$ = this.watchlistService.getUserStockWatchlists(this.DELETE_THIS_LATER);

    increment() {
        const fragment = this.apollo.getClient().readFragment({
            id: `StockDetails:MSFT`,
            fragment: StockMainDetailsFragmentDoc
        }) as StockMainDetailsFragment;


        const randomPrice = Math.random() * 100;
        // write data back to cache
        this.apollo.getClient().writeFragment({
            id: `StockDetails:MSFT`,
            fragment: StockMainDetailsFragmentDoc,
            data: {
                ...fragment,
                overview: {...fragment.overview, currentPrice: randomPrice}
            }
        });

        // trigger UI update -> should not work like this
        this.watchlistService.getUserStockWatchlists().subscribe();
    }

    ngOnInit() {
        this.watchlistService.startWatchlistRealTimeSubscription();
    }

    ngOnDestroy(): void {
        this.watchlistService.endWatchlistRealTimeSubscription();
    }


    createWatchList(watchlistName: string) {
        this.watchlistService.createWatchList({userId: this.DELETE_THIS_LATER, additionalData: watchlistName})
            .subscribe(res => this.ionicDialogService.presentToast('Symbol deleted from watchlist'));
    }

    async showChartForSymbol(chartDataIdentification: ChartDataIdentification) {
        const modal = await this.modalController.create({
            component: FinancialChartCardModalContainerComponent,
            componentProps: {chartDataIdentification},
            cssClass: 'custom-modal'
        });
        return await modal.present();
    }

    async deleteSymbolFromDocument(data: DocumentIdentification) {
        const confirmation = await this.ionicDialogService.presentAlertConfirm(
            `Do your really wanna remove ${data.additionalInfo} from your watchlist ?`);

        if (confirmation) {
            this.watchlistService.removeStockFromWatchlist({
                additionalData: data.additionalInfo,
                id: data.documentId,
                userId: this.DELETE_THIS_LATER,
            }).subscribe(x => this.ionicDialogService.presentToast('Symbol deleted from watchlist'));
        }
    }

    redirectToDetails(symbol: string) {
        this.router.navigate([`/menu/stock-details/${symbol}`]);
    }

    renameWatchlist(data: DocumentIdentification) {
        this.watchlistService.renameStockWatchlist({
            additionalData: data.additionalInfo,
            id: data.documentId,
            userId: this.DELETE_THIS_LATER
        }).subscribe(e => this.ionicDialogService.presentToast('Watchlist has been renamed'));
    }

    async deleteWatchlist(data: string) {
        const confirmation = await this.ionicDialogService.presentAlertConfirm(
            `Do your really want to delete your entire watchlist ?`);

        if (confirmation) {
            this.watchlistService.deleteUserWatchlist({
                userId: this.DELETE_THIS_LATER,
                id: data,
                additionalData: undefined
            }).subscribe(() => this.ionicDialogService.presentToast('Watchlist has been deleted'));
        }
    }

}
