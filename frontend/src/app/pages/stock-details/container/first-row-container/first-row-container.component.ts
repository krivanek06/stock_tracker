import {Component, Input, OnInit} from '@angular/core';
import {StockDetails} from '../../../../features/stock-details-feature/model/stockDetails';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {ModalController} from '@ionic/angular';
import {DetailsSummaryModalComponent} from '../../../../features/stock-details-feature/components/modal/details-summary-modal/details-summary-modal.component';
import {WatchlistPickerModalContainerComponent} from '../../../../features/stock-watchlist-feature/containers/watchlist-picker-modal-container/watchlist-picker-modal-container.component';
import {ChartDataApiService} from '../../../../api/chart-data-api.service';
import {HistoricalChartData} from '../../../../shared/models/chartDataModel';

@Component({
    selector: 'app-first-row-container',
    templateUrl: './first-row-container.component.html',
    styleUrls: ['./first-row-container.component.scss'],
})
export class FirstRowContainerComponent implements OnInit {
    @Input() stockDetails: StockDetails;

    chartData$: Observable<HistoricalChartData>;
    symbol: string;

    constructor(private chartDataService: ChartDataApiService,
                private modalController: ModalController,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.symbol = this.route.snapshot.paramMap.get('symbol');
        this.loadChartData();
    }

    loadChartData(period: string = '1y') {
        this.chartData$ = this.chartDataService.getHistoricalDataForSymbol(this.symbol, period);
    }

    async showSummary() {
        const modal = await this.modalController.create({
            component: DetailsSummaryModalComponent,
            componentProps: {basicInfo: this.stockDetails.basicInfo},
            cssClass: 'custom-modal'
        });
        return await modal.present();
    }

    async showWatchlist() {
        const modal = await this.modalController.create({
            component: WatchlistPickerModalContainerComponent,
            componentProps: {symbol: this.symbol},
            cssClass: 'custom-modal'
        });
        return await modal.present();
    }
}


