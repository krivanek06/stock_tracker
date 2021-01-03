import {Injectable} from '@angular/core';
import {IonicDialogService} from '../../../shared/services/ionic-dialog.service';
import {PopoverController} from '@ionic/angular';
import {AuthFeatureService} from '../../auth-feature/services/auth-feature.service';
import {TradeConfirmationPopOverComponent} from '../entry-components/trade-confirmation-pop-over/trade-confirmation-pop-over.component';
import {StTransactionInput, Summary} from '../../../api/customGraphql.service';
import {GraphqlTradingService} from './graphql-trading.service';

@Injectable({
    providedIn: 'root'
})
export class TradingService {

    constructor(private ionicDialogService: IonicDialogService,
                private popoverController: PopoverController,
                private authService: AuthFeatureService,
                private graphqlTradingService: GraphqlTradingService) {
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
