import {Component, Input, OnInit} from '@angular/core';
import {StockWatchlist} from '../../model/tableModel';
import {Maybe} from 'graphql/jsutils/Maybe';
import {StockWatchlistInformationFragment} from '../../../../core/services/private/watchlistGraphql.service';
import {ChartDataIdentification, DocumentIdentification} from '../../../../shared/models/chartModel';
import {Router} from '@angular/router';
import {FinancialChartCardModalContainerComponent} from '../../../stock-tracker-feature/container/modal/financial-chart-card-modal-container/financial-chart-card-modal-container.component';
import {ModalController} from '@ionic/angular';
import {WatchlistService} from '../../../../core/services/public/watchlist.service';
import {IonicDialogService} from '../../../../shared/services/ionic-dialog.service';

@Component({
    selector: 'app-watchlist-table-with-sector-chart-container',
    templateUrl: './watchlist-table-with-sector-chart-container.component.html',
    styleUrls: ['./watchlist-table-with-sector-chart-container.component.scss'],
})
export class WatchlistTableWithSectorChartContainerComponent implements OnInit {
    @Input() stockWatchlist: Array<Maybe<{ __typename?: 'StockWatchlist' } & StockWatchlistInformationFragment>>;
    private DELETE_THIS_LATER = '7eYTErOxXugeHg4JHLS1L5ZKosK2';

    constructor(private router: Router,
                private ionicDialogService: IonicDialogService,
                private watchlistService: WatchlistService,
                private modalController: ModalController) {
    }

    ngOnInit() {
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
