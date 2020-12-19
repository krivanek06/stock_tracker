import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StockDetailsService} from '../../../../features/stock-details-feature/services/stock-details.service';
import {QueryStockDetailsQuery} from '../../../../api/customGraphql.service';
import {ActivatedRoute, Router} from '@angular/router';
import {WatchlistPickerModalContainerComponent} from '../../../../features/stock-watchlist-feature/containers/watchlist-picker-modal-container/watchlist-picker-modal-container.component';
import {DetailsFinancialReportModalComponent} from '../../../../features/stock-details-feature/components/modal/details-financial-report-modal/details-financial-report-modal.component';
import {ChartDataApiService} from '../../../../api/chart-data-api.service';
import {ModalController} from '@ionic/angular';
import {ChartType} from '../../../../shared/models/sharedModel';

@Component({
    selector: 'app-stock-details-statistic-container',
    templateUrl: './stock-details-statistic-container-page.component.html',
    styleUrls: ['./stock-details-statistic-container-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockDetailsStatisticContainerPage implements OnInit {
    @Input() stockDetails: QueryStockDetailsQuery;
    ChartType = ChartType;

    constructor(private modalController: ModalController) {
    }


    ngOnInit(): void {

    }


    async showSummary() {
        /*const modal = await this.modalController.create({
            component: DetailsSummaryModalComponent,
            componentProps: {
                logo: this.stockDetails.queryStockDetails.companyData.summaryProfile.logo_url,
                summary: this.stockDetails.queryStockDetails.companyData.summaryProfile.longBusinessSummary,
                symbol: this.stockDetails.queryStockDetails.summary.symbol
            },
            cssClass: 'custom-modal'
        });
        return await modal.present();*/
    }

    async showWatchlist() {
        const modal = await this.modalController.create({
            component: WatchlistPickerModalContainerComponent,
            componentProps: {symbol: this.stockDetails.queryStockDetails.summary.symbol},
            cssClass: 'custom-modal'
        });
        return await modal.present();
    }

    async showFinancialReport(financialReport: string) {
        const modal = await this.modalController.create({
            component: DetailsFinancialReportModalComponent,
            componentProps: {symbol: this.stockDetails.queryStockDetails.summary.symbol, financialReport},
            cssClass: 'custom-modal'
        });
        return await modal.present();
    }
}
