import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {StockApiService} from '../../endpoints/stock-api.service';
import {PriceRangeData} from '../../../../shared/model/chartModel';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {FinancialChartTimelineButtonsComponent} from '../../../../shared/components/financial-chart-timeline-buttons/financial-chart-timeline-buttons.component';
import {FinancialChartComponent} from '../../../../shared/components/financial-chart/financial-chart.component';

@Component({
    selector: 'app-dashboard-chart-container',
    templateUrl: './dashboard-chart-container.component.html',
    styleUrls: ['./dashboard-chart-container.component.scss'],
})
export class DashboardChartContainerComponent implements OnInit, OnDestroy {
    destroy$: Subject<boolean> = new Subject<boolean>();
    volume: number[] = [];
    price: number[] = [];
    priceRange: PriceRangeData;
    currentPrice: number;

    @ViewChild('SpChart') SpChart: FinancialChartComponent;

    constructor(private stockAPI: StockApiService) {
    }

    ngOnInit() {
        this.loadChartData();
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

    loadChartData(period: string = '1y') {
        this.stockAPI.getChartDataForSymbol('^GSPC', period).pipe(
            takeUntil(this.destroy$)
        ).subscribe(res => {
            this.currentPrice = res.livePrice;
            this.volume = res.volume;
            this.price = res.price;

            this.SpChart.updateChart();
        });
    }

    changePriceRange(priceRange: PriceRangeData) {
        console.log('priceRange', priceRange);
        this.priceRange = priceRange;
    }

}
