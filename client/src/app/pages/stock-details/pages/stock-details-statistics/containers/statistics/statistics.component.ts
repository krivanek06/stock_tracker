import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ChartDataApiService} from '../../../../../../api/chart-data-api.service';
import {ModalController} from '@ionic/angular';
import {DetailsSummaryModalComponent} from '../../../../../../features/stock-details-feature/components/modal/details-summary-modal/details-summary-modal.component';
import {WatchlistPickerModalContainerComponent} from '../../../../../../features/stock-watchlist-feature/containers/watchlist-picker-modal-container/watchlist-picker-modal-container.component';
import {DetailsFinancialReportModalComponent} from '../../../../../../features/stock-details-feature/components/modal/details-financial-report-modal/details-financial-report-modal.component';
import {QueryStockDetailsQuery} from '../../../../../../api/customGraphql.service';
import {ChartType} from '../../../../../../shared/models/sharedModel';

@Component({
    selector: 'app-statistics',
    templateUrl: './statistics.component.html',
    styleUrls: ['./statistics.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticsComponent implements OnInit {

    @Input() stockDetails: QueryStockDetailsQuery;

    ChartType = ChartType;

    constructor(private chartDataService: ChartDataApiService,
                private modalController: ModalController) {
    }

    ngOnInit() {

    }

    async showSummary() {
        const modal = await this.modalController.create({
            component: DetailsSummaryModalComponent,
            componentProps: {
                logo: this.stockDetails.queryStockDetails.companyData.summaryProfile.logo_url,
                summary: this.stockDetails.queryStockDetails.companyData.summaryProfile.longBusinessSummary,
                symbol: this.stockDetails.queryStockDetails.summary.symbol
            },
            cssClass: 'custom-modal'
        });
        return await modal.present();
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
