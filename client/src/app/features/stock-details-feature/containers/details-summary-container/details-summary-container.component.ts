import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Summary} from '../../../../api/customGraphql.service';
import {ComponentScreenUpdateBase} from '../../../../shared/utils/component-base/component-screen-update.base';
import {MarketPriceWebsocketService} from '../../../../shared/services/market-price-websocket.service';
import {filter, takeUntil} from 'rxjs/operators';
import {marketValueChange} from '../../../../shared/animations/marketValueChange.animation';

@Component({
    selector: 'app-details-summary-container',
    templateUrl: './details-summary-container.component.html',
    styleUrls: ['./details-summary-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        marketValueChange
    ]
})
export class DetailsSummaryContainerComponent extends ComponentScreenUpdateBase implements OnInit, OnDestroy {
    @Input() summary: Summary;
    currentPrice: number;

    constructor(private marketPriceWebsocket: MarketPriceWebsocketService,
                private cd: ChangeDetectorRef) {
        super(cd);
    }

    ngOnInit() {
        super.ngOnInit();
        this.initWebsocketConnection();
        this.currentPrice = this.summary.marketPrice;
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    private initWebsocketConnection() {
        this.marketPriceWebsocket.createSubscribeForSymbol(this.summary.symbol);
        this.marketPriceWebsocket.getSubscribedSymbolsResult().pipe(
            filter(res => !!res), // filter null & undefined
            filter(res => res.s === this.summary.symbol),
            takeUntil(this.destroy$)
        ).subscribe(res => {
            this.currentPrice = res.p;
        });
    }

}
