import {Injectable} from '@angular/core';
import {FinancialChartModalComponent, SymbolIdentification} from '@shared';
import {ModalController} from '@ionic/angular';
import {MarketChartBuilderComponent, MarketEarningsModalComponent} from '@market-feature';
import {SymbolLookupModalComponent} from '@stock-watchlist-feature';

@Injectable()
export class MarketPageFacadeService {

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

    async showStockEarningsOnDate(selectedDate: string) {
        const modal = await this.modalController.create({
            component: MarketEarningsModalComponent,
            componentProps: {selectedDate},
            cssClass: 'custom-modal'
        });
        await modal.present();
        const closed = await modal.onDidDismiss();
        const symbolIdentification = closed?.data?.symbolIdentification;

        if (symbolIdentification) {
            this.showSymbolSummary(symbolIdentification);
        }
    }

    async showSymbolSummary(symbolIdentification: SymbolIdentification, showAddToWatchlistOption = false) {
        const modal = await this.modalController.create({
            component: SymbolLookupModalComponent,
            componentProps: {symbolIdentification, showAddToWatchlistOption},
            cssClass: 'custom-modal'
        });
        await modal.present();
    }
}