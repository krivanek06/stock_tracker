import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {StockApiService} from '../../endpoints/stock-api.service';
import {MatDialog} from '@angular/material/dialog';
import {WatchlistModalContainerComponent} from '../modal/watchlist-selector-modal-container/watchlist-modal-container.component';
import {ChartDataIdentification} from '../../../../shared/model/chartModel';
import {TopStockTableData} from '../../model/tableModel';
import {ModalController} from '@ionic/angular';
import {FinancialChartCardModalContainerComponent} from '../modal/financial-chart-card-modal-container/financial-chart-card-modal-container.component';

@Component({
    selector: 'app-dashboard-top-table-container',
    templateUrl: './dashboard-top-table-container.component.html',
    styleUrls: ['./dashboard-top-table-container.component.scss'],
})
export class DashboardTopTableContainerComponent implements OnInit {
    getTopActive$: Observable<TopStockTableData[]>;
    getTopGains$: Observable<TopStockTableData[]>;
    getTopLosers$: Observable<TopStockTableData[]>;

    constructor(private stockAPI: StockApiService,
                private modalController: ModalController) {
    }

    ngOnInit(): void {
        this.getTopActive$ = this.stockAPI.getTopActive();
        this.getTopGains$ = this.stockAPI.getTopGains();
        this.getTopLosers$ = this.stockAPI.getTopLosers();
    }

    async showChart(chartDataIdentification: ChartDataIdentification) {
        const modal = await this.modalController.create({
            component: FinancialChartCardModalContainerComponent,
            componentProps: {chartDataIdentification}
        });
        return await modal.present();
    }

    async showWatchlist(chartDataIdentification: ChartDataIdentification) {
        const modal = await this.modalController.create({
            component: WatchlistModalContainerComponent,
            componentProps: {chartDataIdentification}
        });
        return await modal.present();
    }
}
