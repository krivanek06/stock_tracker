import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {StockDetails} from '../../../../features/stock-details-feature/model/stockDetails';
import {takeUntil} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {ModalController} from '@ionic/angular';
import {DetailsSummaryModalComponent} from '../../../../features/stock-details-feature/components/modal/details-summary-modal/details-summary-modal.component';
import {WatchlistPickerModalContainerComponent} from '../../../../features/stock-watchlist-feature/containers/watchlist-picker-modal-container/watchlist-picker-modal-container.component';
import {ChartDataApiService} from '../../../../api/chart-data-api.service';
import {HistoricalChartData} from '../../../../features/stock-data-feature/model/chartDataModel';

@Component({
    selector: 'app-first-row-container',
    templateUrl: './first-row-container.component.html',
    styleUrls: ['./first-row-container.component.scss'],
})
export class FirstRowContainerComponent implements OnInit, OnDestroy {
    private destroy$: Subject<boolean> = new Subject<boolean>();

    @Input() stockDetails: StockDetails;

    chartData: HistoricalChartData;
    symbol: string;

    constructor(private chartDataService: ChartDataApiService,
                private modalController: ModalController,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.symbol = this.route.snapshot.paramMap.get('symbol');
        this.loadChartData();
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

    loadChartData(period: string = '1y') {
        this.chartDataService.getHistoricalDataForSymbol(this.symbol, period).pipe(
            takeUntil(this.destroy$)
        ).subscribe(res => {
            this.chartData = res;
        });
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


