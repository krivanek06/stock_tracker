import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {StockApiService} from '../../endpoints/stock-api.service';
import {PriceRangeData} from '../../../../shared/models/chartModel';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {FinancialChartComponent} from '../../../../shared/components/financial-chart/financial-chart.component';

@Component({
    selector: 'app-financial-chart-container',
    templateUrl: './financial-chart-container.component.html',
    styleUrls: ['./financial-chart-container.component.scss'],
})
export class FinancialChartContainerComponent implements OnInit, OnDestroy {
    destroy$: Subject<boolean> = new Subject<boolean>();
    volume: number[] = [];
    price: number[] = [];
    priceRange: PriceRangeData;
    currentPrice: number;

    @Input() symbol: string;
    @Input() name: string;
    @ViewChild('myChart') SpChart: FinancialChartComponent;

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
        this.stockAPI.getChartDataForSymbol(this.symbol, period).pipe(
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
