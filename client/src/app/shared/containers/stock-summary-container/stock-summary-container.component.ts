import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ComponentScreenUpdateBaseDirective, FinnhubWebsocketService, Summary} from '@core';
import {filter, takeUntil} from 'rxjs/operators';
import {marketValueChange} from '../../animations';


@Component({
    selector: 'app-stock-summary-container',
    templateUrl: './stock-summary-container.component.html',
    styleUrls: ['./stock-summary-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        marketValueChange
    ]
})
export class StockSummaryContainerComponent extends ComponentScreenUpdateBaseDirective implements OnInit, OnDestroy {
    @Input() summary: Summary;
    currentPrice: number;

    constructor(private finnhubWebsocketService: FinnhubWebsocketService,
                public cd: ChangeDetectorRef) {
        super(cd, 'StockSummaryContainerComponent');
    }

    ngOnInit() {
        super.ngOnInit();
        this.initWebsocketConnection();
        this.currentPrice = this.summary.marketPrice;
    }

    ngOnDestroy() {
        super.ngOnDestroy();
        this.finnhubWebsocketService.closeConnection(this.componentName);
    }

    private initWebsocketConnection() {
        this.finnhubWebsocketService.createSubscribeForSymbol(this.componentName, this.summary.symbol);
        this.finnhubWebsocketService.getSubscribedSymbolsResult().pipe(
            filter(res => res.s === this.summary.symbol),
            takeUntil(this.destroy$)
        ).subscribe(res => {
            this.currentPrice = res.p;
        });
    }

}
