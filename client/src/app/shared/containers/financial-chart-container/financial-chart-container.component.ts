import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {filter, takeUntil} from 'rxjs/operators';
import {componentDestroyed, ComponentScreenUpdateBaseDirective, FinnhubWebsocketService, GraphqlQueryService} from '@core';
import {marketValueChange} from '../../animations';
import {HistoricalPricePeriods} from '../../models';

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
    @Input() currentPrice: number;
    @Input() closedPrice: number;
    @Input() symbol: string;
    @Input() logoUrl: string;
    @Input() name: string;
    @Input() height = 300;
    @Input() showYAxis = true;
    @Input() isCrypto = false;
    @Input() initWebsockets: boolean = true;
    @Input() financialChart = true;

    HistoricalPricePeriods = HistoricalPricePeriods;

    volume: number[][] = [];
    price: number[][] = []; // [open, high, low, close]
    selectedRange = '4hour';
    priceRangeFrom: number;
    priceRangeTo: number;
    noDataFound = false;

    constructor(private graphqlQueryService: GraphqlQueryService,
                private finnhubWebsocketService: FinnhubWebsocketService,
                public cd: ChangeDetectorRef) {
        super(cd, 'FinancialChartContainerComponent');
    }

    ngOnInit() {
        super.ngOnInit();
        this.loadChartData();
        if (this.initWebsockets) {
            this.initWebsocketConnection();
        }
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

    segmentChanged(period: string) {
        this.selectedRange = period;
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
            takeUntil(componentDestroyed(this))
        ).subscribe(res => {
            this.currentPrice = res.p;
        });
    }

    private loadChartData() {
        this.noDataFound = false;
        this.price = [];
        this.graphqlQueryService.querySymbolHistoricalPrices(this.symbol, this.selectedRange).pipe(
            takeUntil(componentDestroyed(this))
        ).subscribe(res => {
            if (res.price.length === 0) {
                this.noDataFound = true;
                return;
            }
            this.currentPrice = res.livePrice;
            this.volume = [...res.volume]; // needed copy because used to get error for read only
            this.price = [...res.price]; // needed copy because used to get error for read only
            this.priceRangeFrom = this.price[0][4];
            this.priceRangeTo = this.price[this.price.length - 1][4];

            if (!this.closedPrice) {
                this.closedPrice = this.priceRangeFrom;
            }
        });
    }

}
