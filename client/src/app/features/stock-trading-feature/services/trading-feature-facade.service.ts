import {Injectable} from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {TradeConfirmationPopOverComponent} from '../entry-components';
import {GraphqlTradingService, StTransactionInput, Summary, UserStorageService} from '@core';
import {DialogService} from '@shared';

@Injectable()
export class TradingFeatureFacadeService {

    constructor(private popoverController: PopoverController,
                private userStorageService: UserStorageService,
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
            await this.graphqlTradingService.performTransaction(data).toPromise();
            await DialogService.presentToast(`${data.operation} operation on ${data.symbol} has been completed `);
        }
    }
}
