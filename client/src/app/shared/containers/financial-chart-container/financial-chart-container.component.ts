import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {filter, takeUntil} from 'rxjs/operators';
import {ChartDataApiService} from '../../../api/chart-data-api.service';
import {marketValueChange} from '../../animations/marketValueChange.animation';
import {MarketPriceWebsocketService} from '../../services/market-price-websocket.service';
import {ComponentScreenUpdateBase} from '../../utils/component-base/component-screen-update.base';

@Component({
    selector: 'app-financial-chart-container',
    templateUrl: './financial-chart-container.component.html',
    styleUrls: ['./financial-chart-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        marketValueChange
    ]
})
export class FinancialChartContainerComponent extends ComponentScreenUpdateBase implements OnInit, OnDestroy, OnChanges {
    volume: number[] = [];
    price: number[] = []; // [open, high, low, close]
    currentPrice: number;
    closedPrice: number;
    selectedRange = '1d';
    priceRangeFrom: number;
    priceRangeTo: number;

    @Input() symbol: string;
    @Input() logoUrl: string;
    @Input() name: string;
    @Input() height = 300;
    @Input() showYAxis = false;

    constructor(private chartDataService: ChartDataApiService,
                private marketPriceWebsocket: MarketPriceWebsocketService,
                private cd: ChangeDetectorRef) {
        super(cd);
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
    }

    segmentChanged(event: CustomEvent) {
        this.selectedRange = event.detail.value;
        this.loadChartData();
    }

    savePriceRange(priceRange: number[]) {
        this.priceRangeFrom = priceRange[0];
        this.priceRangeTo = priceRange[1];
    }

    private initWebsocketConnection() {
        this.marketPriceWebsocket.createSubscribeForSymbol(this.symbol);
        this.marketPriceWebsocket.getSubscribedSymbolsResult().pipe(
            filter(res => !!res), // filter null & undefined
            filter(res => res.s === this.symbol),
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
            this.closedPrice = this.priceRangeTo;
        });
    }


}
