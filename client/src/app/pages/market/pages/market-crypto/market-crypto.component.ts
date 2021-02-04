import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MarketService} from '../../../../features/market-feature/services/market.service';
import {cloneDeep} from 'lodash';
import {ComponentScreenUpdateBase} from '../../../../shared/utils/component-base/component-screen-update.base';
import {MarketPriceWebsocketService} from '../../../../shared/services/market-price-websocket.service';
import {filter, first, takeUntil} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {StMarketOverviewPartialData, StMarketTopTableCryptoData} from '../../../../api/customGraphql.service';

@Component({
    selector: 'app-market-crypto',
    templateUrl: './market-crypto.component.html',
    styleUrls: ['./market-crypto.component.scss'],
})
export class MarketCryptoComponent extends ComponentScreenUpdateBase implements OnInit, OnDestroy {
    marketOverview$: Observable<StMarketOverviewPartialData>;
    topCrypto: StMarketTopTableCryptoData[] = [];

    constructor(private marketService: MarketService,
                private marketPriceWebsocket: MarketPriceWebsocketService,
                cdr: ChangeDetectorRef) {
        super(cdr);
    }


    ngOnInit() {
        super.ngOnInit();
        this.createCopyOfTopCrypto();
        this.marketOverview$ = this.marketService.queryStMarketHistoryOverview();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
        this.marketPriceWebsocket.closeConnection();
    }

    private createCopyOfTopCrypto() {
        this.marketService.queryMarketDailyOverview().pipe(takeUntil(this.destroy$)).subscribe(res => {
            this.topCrypto = cloneDeep(res.top_crypto);
            this.initSubscriptionForTopCrypto();
        });
    }

    private initSubscriptionForTopCrypto() {
        this.marketPriceWebsocket.getIsConnected().pipe(filter(x => !x), first()).subscribe(() => {
            this.topCrypto.forEach(data => this.marketPriceWebsocket.createSubscribeForSymbol(data.symbol, true));
        });

        this.marketPriceWebsocket.getSubscribedSymbolsResult().pipe(
            filter(res => !!res), // filter null & undefined
            takeUntil(this.destroy$)
        ).subscribe(res => {
            console.log('res', res);
        });
    }

}
