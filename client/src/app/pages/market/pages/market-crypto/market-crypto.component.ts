import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {cloneDeep} from 'lodash';
import {SymbolIdentification} from '@shared';
import {takeUntil} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {
    componentDestroyed,
    ComponentScreenUpdateBaseDirective,
    FinnhubWebsocketService,
    GraphqlQueryService,
    StMarketOverviewPartialData,
    StMarketTopTableCryptoData
} from '@core';
import {MarketFeatureFacadeService} from '@market-feature';

@Component({
    selector: 'app-market-crypto',
    templateUrl: './market-crypto.component.html',
    styleUrls: ['./market-crypto.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketCryptoComponent extends ComponentScreenUpdateBaseDirective implements OnInit, OnDestroy {
    marketOverview$: Observable<StMarketOverviewPartialData>;
    topCrypto: StMarketTopTableCryptoData[] = [];

    constructor(private graphqlQueryService: GraphqlQueryService,
                private finnhubWebsocketService: FinnhubWebsocketService,
                private marketPageFacadeService: MarketFeatureFacadeService,
                public cdr: ChangeDetectorRef) {
        super(cdr, 'MarketCryptoComponent');
    }


    ngOnInit() {
        super.ngOnInit();
        this.createCopyOfTopCrypto();
        this.marketOverview$ = this.graphqlQueryService.queryStMarketHistoryOverview();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
        this.finnhubWebsocketService.closeConnection(this.componentName);
    }

    async showSummary(data: StMarketTopTableCryptoData) {
        const symbolIdentification: SymbolIdentification = {symbol: data.symbol, name: data.shortName};
        await this.marketPageFacadeService.showFinancialChart(symbolIdentification, data.coinImageUrl, true);
    }

    async expand(documentKey: string) {
        await this.marketPageFacadeService.showMarketChartBuilder(documentKey);
    }

    private createCopyOfTopCrypto() {
        this.graphqlQueryService.queryMarketDailyOverview().pipe(takeUntil(componentDestroyed(this))).subscribe(res => {
            this.topCrypto = cloneDeep(res.top_crypto);
            this.initSubscriptionForTopCrypto();
        });
    }

    private initSubscriptionForTopCrypto() {
        this.topCrypto.forEach(data => this.finnhubWebsocketService.createSubscribeForSymbol(this.componentName, data.symbol, true));

        this.finnhubWebsocketService.getSubscribedSymbolsResult().pipe(
            takeUntil(componentDestroyed(this))
        ).subscribe(res => {
            const symbol = res.s.replace('BINANCE:', '').slice(0, -1);
            const crypto = this.topCrypto.find(s => s.symbol.replace('-', '') === symbol);
            if (!!crypto) {
                crypto.regularMarketPrice = res.p;
            }
        });
    }

}
