import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StockDetailsService} from '../../../../../../features/stock-details-feature/services/stock-details.service';
import {
    FinancialReport,
    FinancialReportsFragmentFragment,
    QueryStockDetailsQuery,
    StockDetails
} from '../../../../../../api/customGraphql.service';
import {ModalController} from '@ionic/angular';
import {ChartType} from '../../../../../../shared/models/sharedModel';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-stock-details-statistic',
    templateUrl: './stock-details-statistic.component.html',
    styleUrls: ['./stock-details-statistic.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockDetailsStatisticComponent implements OnInit {
    stockDetails$: Observable<StockDetails>;
    ChartType = ChartType;

    constructor(private stockDetailsService: StockDetailsService,
                private modalController: ModalController) {
    }


    ngOnInit(): void {
        this.stockDetails$ = this.stockDetailsService.getStockDetails();
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

    async showFinancialReport(financialReport: FinancialReport) {
        console.log('show report', financialReport);
        /*const modal = await this.modalController.create({
            component: DetailsFinancialReportModalComponent,
            componentProps: {symbol: this.stockDetailsService.activeSymbol, financialReport},
            cssClass: 'custom-modal'
        });
        return await modal.present();*/
    }
}
