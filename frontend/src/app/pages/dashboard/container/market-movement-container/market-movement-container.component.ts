import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ChartDataApiService} from '../../../../api/chart-data-api.service';
import {InvestorSentimentData, SymbolMovementData} from '../../../../features/stock-data-feature/model/chartDataModel';
import {SearchDataApiService} from '../../../../api/search-data-api.service';
import {ChartDataIdentification} from '../../../../shared/models/sharedModel';
import {DetailsFinancialReportModalComponent} from '../../../../features/stock-details-feature/components/modal/details-financial-report-modal/details-financial-report-modal.component';
import {ModalController} from '@ionic/angular';
import {FinancialChartModalContainerComponent} from '../../../../features/stock-data-feature/container/modal/financial-chart-modal-container/financial-chart-modal-container.component';

@Component({
    selector: 'app-market-movement-container',
    templateUrl: './market-movement-container.component.html',
    styleUrls: ['./market-movement-container.component.scss'],
})
export class MarketMovementContainerComponent implements OnInit {
    topGains$: Observable<SymbolMovementData[]>;
    topLosses$: Observable<SymbolMovementData[]>;


    constructor(private searchDataAPI: SearchDataApiService,
                private modalController: ModalController) {
    }

    ngOnInit() {
        this.topGains$ = this.searchDataAPI.getTopGains();
        this.topLosses$ = this.searchDataAPI.getTopLosers();

        this.topGains$.subscribe(x => console.log({x}));
        this.topLosses$.subscribe(x => console.log({x}));
    }

    async showMoreInformation(chartDataIdentification: ChartDataIdentification) {
        const modal = await this.modalController.create({
            component: FinancialChartModalContainerComponent,
            componentProps: {chartDataIdentification},
            cssClass: 'custom-modal'
        });
        return await modal.present();
    }
}
