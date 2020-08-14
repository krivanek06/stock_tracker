import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {ChartDataApiService} from '../../../../api/chart-data-api.service';

@Component({
    selector: 'app-financial-chart-container',
    templateUrl: './financial-chart-container.component.html',
    styleUrls: ['./financial-chart-container.component.scss'],
})
export class FinancialChartContainerComponent implements OnInit, OnDestroy {
    destroy$: Subject<boolean> = new Subject<boolean>();
    volume: number[] = [];
    price: number[] = [];
    currentPrice: number;

    @Input() symbol: string;
    @Input() name: string;

    constructor(private chartDataService: ChartDataApiService) {
    }

    ngOnInit() {
        this.loadChartData();
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

    loadChartData(period: string = '1y') {
        this.chartDataService.getHistoricalDataForSymbol(this.symbol, period).pipe(
            takeUntil(this.destroy$)
        ).subscribe(res => {
            console.log(res);
            this.currentPrice = res.livePrice;
            this.volume = res.volume;
            this.price = res.price;
        });
    }


}
