import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MarketService} from '../../../../features/market-feature/services/market.service';
import {cloneDeep} from 'lodash';
import {ComponentScreenUpdateBase} from '../../../../shared/utils/component-base/component-screen-update.base';
import {filter, first, takeUntil} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {StMarketOverviewPartialData, StMarketTopTableCryptoData} from '../../../../api/customGraphql.service';
import {FinnhubWebsocketService} from '../../../../shared/services/finnhub-websocket.service';
import {MarketChartBuilderComponent} from '../../../../features/market-feature/entry-components/market-chart-builder/market-chart-builder.component';
import {ModalController} from '@ionic/angular';
import {FinancialChartModalComponent} from '../../../../shared/entry-components/financial-chart-modal/financial-chart-modal.component';

@Component({
    selector: 'app-market-crypto',
    templateUrl: './market-crypto.component.html',
    styleUrls: ['./market-crypto.component.scss'],
})
export class MarketCryptoComponent extends ComponentScreenUpdateBase implements OnInit, OnDestroy {
    marketOverview$: Observable<StMarketOverviewPartialData>;
    topCrypto: StMarketTopTableCryptoData[] = [];

    constructor(private marketService: MarketService,
                private finnhubWebsocketService: FinnhubWebsocketService,
                private modalController: ModalController,
                cdr: ChangeDetectorRef) {
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
