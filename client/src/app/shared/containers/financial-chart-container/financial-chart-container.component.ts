import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {ChartDataApiService} from '../../../api/chart-data-api.service';
import {ComponentBase} from '../../utils/component-base/component.base';

@Component({
    selector: 'app-financial-chart-container',
    templateUrl: './financial-chart-container.component.html',
    styleUrls: ['./financial-chart-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinancialChartContainerComponent extends ComponentBase implements OnInit, OnDestroy {
    volume: number[] = [];
    price: number[] = []; // [open, high, low, close]
    currentPrice: number;
    selectedRange = '1d';
    priceRangeFrom: number;
    priceRangeTo: number;

    @Input() symbol: string;
    @Input() logoUrl: string;
    @Input() name: string;
    @Input() height = 300;
    @Input() showYAxis = false;

    constructor(private chartDataService: ChartDataApiService,
                private cd: ChangeDetectorRef) {
        super();
    }

    ngOnInit() {
        this.loadChartData();
    }

    segmentChanged(event: CustomEvent) {
        this.selectedRange = event.detail.value;
        this.loadChartData();
    }

    savePriceRange(priceRange: number[]) {
        this.priceRangeFrom = priceRange[0];
        this.priceRangeTo = priceRange[1];
    }

    private loadChartData() {
        this.chartDataService.getHistoricalDataForSymbol(this.symbol, this.selectedRange).pipe(
            takeUntil(this.destroy$)
        ).subscribe(res => {
            this.currentPrice = res.livePrice;
            this.volume = res.volume;
            this.price = res.price;
            this.priceRangeFrom = this.price[0][3];
            this.priceRangeTo = this.price[this.price.length - 1][3];

            this.cd.detectChanges();
        });
    }


}
