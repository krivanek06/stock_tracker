import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {StockApiService} from '../../../../features/stock-tracker/endpoints/stock-api.service';
import {MatDialog} from '@angular/material/dialog';
import {WatchlistModalContainerComponent} from '../../../../features/stock-tracker/container/modal/watchlist-selector-modal-container/watchlist-modal-container.component';
import {ChartDataIdentification} from '../../../../shared/model/chartModel';
import {TopStockTableData} from '../../../../features/stock-tracker/model/tableModel';
import {ModalController, PopoverController} from '@ionic/angular';
import {FinancialChartCardModalContainerComponent} from '../../../../features/stock-tracker/container/modal/financial-chart-card-modal-container/financial-chart-card-modal-container.component';

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
                private popoverController: PopoverController) {
    }

    ngOnInit(): void {
        this.getTopActive$ = this.stockAPI.getTopActive();
        this.getTopGains$ = this.stockAPI.getTopGains();
        this.getTopLosers$ = this.stockAPI.getTopLosers();
    }

    async showChart(chartDataIdentification: ChartDataIdentification) {
        const popover = await this.popoverController.create({
            component: FinancialChartCardModalContainerComponent,
            componentProps:  {chartDataIdentification},
            translucent: true,
        });
        popover.style.cssText = '--min-width: 70%; --max-width: 70%;';
        return await popover.present();
    }

   /* async showWatchlist(chartDataIdentification: ChartDataIdentification) {
        const modal = await this.modalController.create({
            component: WatchlistModalContainerComponent,
            componentProps: {chartDataIdentification}
        });
        return await modal.present();
    }*/
}
