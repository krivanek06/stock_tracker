import {Injectable} from '@angular/core';
import {FinancialChartModalComponent, SymbolIdentification} from '@shared';
import {ModalController} from '@ionic/angular';
import {MarketChartBuilderComponent} from '../entry-components';

@Injectable({
    providedIn: 'root'
})
export class MarketFeatureFacadeService {

    constructor(private modalController: ModalController) {
    }

    async showFinancialChart(symbolIdentification: SymbolIdentification, logoUrl: string, isCrypto: boolean) {
        const modal = await this.modalController.create({
            component: FinancialChartModalComponent,
            componentProps: {
                symbolIdentification,
                logoUrl,
                isCrypto
            },
            cssClass: 'custom-modal'
        });
        await modal.present();
    }

    async showMarketChartBuilder(documentKey: string) {
        const modal = await this.modalController.create({
            component: MarketChartBuilderComponent,
            componentProps: {documentKey},
            cssClass: 'custom-modal'
        });
        return await modal.present();
    }
}
