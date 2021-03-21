import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ComponentScreenUpdateBaseDirective, FinnhubWebsocketService, Summary} from '@core';
import {marketValueChange} from '@shared';
import {filter, takeUntil} from 'rxjs/operators';


@Component({
    selector: 'app-details-summary-container',
    templateUrl: './details-summary-container.component.html',
    styleUrls: ['./details-summary-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        marketValueChange
    ]
})
export class DetailsSummaryContainerComponent extends ComponentScreenUpdateBaseDirective implements OnInit, OnDestroy {
    @Input() summary: Summary;
    currentPrice: number;

    constructor(private finnhubWebsocketService: FinnhubWebsocketService,
                public cd: ChangeDetectorRef) {
        super(cd, 'DetailsSummaryContainerComponent');
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
