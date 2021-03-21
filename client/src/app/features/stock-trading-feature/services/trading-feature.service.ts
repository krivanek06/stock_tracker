import {Injectable} from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {TradeConfirmationPopOverComponent} from '../entry-components';
import {FinnhubWebsocketService, IonicDialogService, MarketSymbolResult, StTransactionInput, Summary, UserStorageService} from '@core';
import {GraphqlTradingService} from './graphql-trading.service';
import {Observable} from 'rxjs';
import {filter, first, switchMap, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TradingFeatureService {
    private serviceName = 'TradingService';

    constructor(
        private popoverController: PopoverController,
        private userStorageService: UserStorageService,
        private graphqlTradingService: GraphqlTradingService,
        private finnhubWebsocket: FinnhubWebsocketService) {
    }

    initSubscriptionForHoldings(): Observable<MarketSymbolResult> {
        return this.userStorageService.getUser().pipe(
            filter(x => !!x),
            first(),
            tap(user => user.holdings.forEach(h => this.finnhubWebsocket.createSubscribeForSymbol(this.serviceName, h.symbol))),
            switchMap(() => this.finnhubWebsocket.getSubscribedSymbolsResult()));
    }

    closeMarketSubscription() {
        this.finnhubWebsocket.closeConnection(this.serviceName);
    }

    async performTransaction(summary: Summary) {
        const popover = await this.popoverController.create({
            component: TradeConfirmationPopOverComponent,
            cssClass: 'custom-popover',
            translucent: true,
            componentProps: {
                symbol: summary.symbol,
                price: summary.marketPrice,
                symbolLogoUrl: summary.logo_url
            }
        });

        await popover.present();
        const res = await popover.onDidDismiss();
        const data = res?.data?.data as StTransactionInput;

        if (!!data) {
            this.graphqlTradingService.performTransaction(data)
                .subscribe(() => IonicDialogService.presentToast(`${data.operation} operation on ${data.symbol} has been completed `));
        }
    }
}
