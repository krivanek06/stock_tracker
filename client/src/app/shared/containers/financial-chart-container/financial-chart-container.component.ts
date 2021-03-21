import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {filter, takeUntil} from 'rxjs/operators';
import {ChartDataApiService, ComponentScreenUpdateBaseDirective, FinnhubWebsocketService} from '@core';
import {marketValueChange} from '../../animations';

@Component({
    selector: 'app-financial-chart-container',
    templateUrl: './financial-chart-container.component.html',
    styleUrls: ['./financial-chart-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        marketValueChange
    ]
})
export class FinancialChartContainerComponent extends ComponentScreenUpdateBaseDirective implements OnInit, OnDestroy, OnChanges {
    volume: number[] = [];
    price: number[][] = []; // [open, high, low, close]
    selectedRange = '1d';
    priceRangeFrom: number;
    priceRangeTo: number;
    financialChart = true;

    @Input() currentPrice: number;
    @Input() closedPrice: number;
    @Input() symbol: string;
    @Input() logoUrl: string;
    @Input() name: string;
    @Input() height = 300;
    @Input() showYAxis = true;
    @Input() isCrypto = false;

    constructor(private chartDataService: ChartDataApiService,
                private finnhubWebsocketService: FinnhubWebsocketService,
                public cd: ChangeDetectorRef) {
        super(cd, 'FinancialChartContainerComponent');
    }

    ngOnInit() {
        super.ngOnInit();
        this.loadChartData();
        this.initWebsocketConnection();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.symbol && changes.symbol.currentValue !== changes.symbol.previousValue) {
            this.loadChartData();
        }
    }

    ngOnDestroy() {
        super.ngOnDestroy();
        this.finnhubWebsocketService.closeConnection(this.componentName);
    }

    segmentChanged(event: CustomEvent) {
        this.selectedRange = event.detail.value;
        this.loadChartData();
    }

    savePriceRange(priceRange: number[]) {
        this.priceRangeFrom = priceRange[0];
        this.priceRangeTo = priceRange[1];
    }

    toggleFinancialChartView() {
        this.financialChart = !this.financialChart;
    }

    private initWebsocketConnection() {
        this.finnhubWebsocketService.createSubscribeForSymbol(this.componentName, this.symbol, this.isCrypto);
        this.finnhubWebsocketService.getSubscribedSymbolsResult().pipe(
            filter(res => {
                let symbol = res.s;
                if (this.isCrypto) {
                    symbol = res.s.replace('BINANCE:', '').slice(0, -1);
                    return this.symbol.replace('-', '') === symbol;
                }
                return symbol === this.symbol;
            }),
            //filter(res => res.s === this.symbol),
            takeUntil(this.destroy$)
        ).subscribe(res => {
            this.currentPrice = res.p;
        });
    }

    private loadChartData() {
        this.chartDataService.getHistoricalDataForSymbol(this.symbol, this.selectedRange).pipe(
            takeUntil(this.destroy$)
        ).subscribe(res => {
            this.currentPrice = res.livePrice;
            this.volume = res.volume;
            this.price = res.price;
            this.priceRangeFrom = this.price[0][4];
            this.priceRangeTo = this.price[this.price.length - 1][4];

            if (!this.closedPrice) {
                this.closedPrice = this.priceRangeFrom;
            }
        });
    }

}
