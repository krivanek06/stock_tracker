import {Injectable} from '@angular/core';
import {IonicDialogService} from '../../../shared/services/ionic-dialog.service';
import {PopoverController} from '@ionic/angular';
import {AuthFeatureService} from '../../auth-feature/services/auth-feature.service';
import {TradeConfirmationPopOverComponent} from '../entry-components/trade-confirmation-pop-over/trade-confirmation-pop-over.component';
import {StTransactionInput, Summary} from '../../../api/customGraphql.service';
import {GraphqlTradingService} from './graphql-trading.service';
import {Observable} from 'rxjs';
import {filter, first, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {FinnhubWebsocketService} from '../../../shared/services/finnhub-websocket.service';
import {MarketSymbolResult} from '../../../shared/models/sharedModel';

@Injectable({
    providedIn: 'root'
})
export class TradingService {
    private serviceName = 'TradingService';

    constructor(private ionicDialogService: IonicDialogService,
                private popoverController: PopoverController,
                private authService: AuthFeatureService,
                private graphqlTradingService: GraphqlTradingService,
                private finnhubWebsocket: FinnhubWebsocketService) {
    }

    initSubscriptionForHoldings(): Observable<MarketSymbolResult> {
        return this.authService.getUser().pipe(
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
                .subscribe(() => this.ionicDialogService.presentToast(`${data.operation} operation on ${data.symbol} has been completed `));
        }
    }
}
