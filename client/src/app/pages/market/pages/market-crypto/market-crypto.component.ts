import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MarketChartBuilderComponent, MarketFeatureService} from '@market-feature';
import {cloneDeep} from 'lodash';
import {FinancialChartModalComponent} from '@shared';
import {takeUntil} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ComponentScreenUpdateBaseDirective, FinnhubWebsocketService, StMarketOverviewPartialData, StMarketTopTableCryptoData} from '@core';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-market-crypto',
    templateUrl: './market-crypto.component.html',
    styleUrls: ['./market-crypto.component.scss'],
})
export class MarketCryptoComponent extends ComponentScreenUpdateBaseDirective implements OnInit, OnDestroy {
    marketOverview$: Observable<StMarketOverviewPartialData>;
    topCrypto: StMarketTopTableCryptoData[] = [];

    constructor(private marketService: MarketFeatureService,
                private finnhubWebsocketService: FinnhubWebsocketService,
                private modalController: ModalController,
                public cdr: ChangeDetectorRef) {
        super(cdr, 'MarketCryptoComponent');
    }


    ngOnInit() {
        super.ngOnInit();
        this.createCopyOfTopCrypto();
        this.marketOverview$ = this.marketService.queryStMarketHistoryOverview();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
        this.finnhubWebsocketService.closeConnection(this.componentName);
    }

    async showSummary(data: StMarketTopTableCryptoData) {
        const modal = await this.modalController.create({
            component: FinancialChartModalComponent,
            componentProps: {
                symbolIdentification: {
                    symbol: data.symbol,
                    name: data.shortName
                },
                logoUrl: data.coinImageUrl,
                isCrypto: true
            },
            cssClass: 'custom-modal'
        });
        await modal.present();
    }

    async expand(documentKey: string) {
        const modal = await this.modalController.create({
            component: MarketChartBuilderComponent,
            componentProps: {documentKey},
            cssClass: 'custom-modal'
        });
        return await modal.present();
    }

    private createCopyOfTopCrypto() {
        this.marketService.queryMarketDailyOverview().pipe(takeUntil(this.destroy$)).subscribe(res => {
            this.topCrypto = cloneDeep(res.top_crypto);
            this.initSubscriptionForTopCrypto();
        });
    }

    private initSubscriptionForTopCrypto() {
        this.topCrypto.forEach(data => this.finnhubWebsocketService.createSubscribeForSymbol(this.componentName, data.symbol, true));

        this.finnhubWebsocketService.getSubscribedSymbolsResult().pipe(
            takeUntil(this.destroy$)
        ).subscribe(res => {
            const symbol = res.s.replace('BINANCE:', '').slice(0, -1);
            const crypto = this.topCrypto.find(s => s.symbol.replace('-', '') === symbol);
            if (!!crypto) {
                crypto.regularMarketPrice = res.p;
            }
        });
    }

}
