import {Injectable} from '@angular/core';
import {ModalController, PopoverController} from '@ionic/angular';
import {IdNameContainer, SymbolIdentification} from '@shared';
import {SymbolLookupModalComponent, WatchlistPickerPopOverContainerComponent} from '../entry-components';
import {WatchlistFeatureFacadeService} from './watchlist-feature-facade.service';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class WatchlistFeatureEntryPointsFacadeService {

    constructor(private popoverController: PopoverController,
                private modalController: ModalController,
                private router: Router,
                private watchlistFeatureFacadeService: WatchlistFeatureFacadeService,) {
    }

    async presentSymbolLookupModal(symbolIdentification: SymbolIdentification,
                                   showAddToWatchlistOption: boolean,
                                   watchlistId: string = null) {
        const modal = await this.modalController.create({
            component: SymbolLookupModalComponent,
            componentProps: {symbolIdentification, showAddToWatchlistOption, watchlistId},
            cssClass: 'custom-modal'
        });
        await modal.present();

        const dismiss = await modal.onDidDismiss();
        console.log('dismiss', dismiss);

        if (dismiss.data?.redirect) {
            this.router.navigate([`/menu/search/stock/details/${symbolIdentification.symbol}`]);
        } else if (dismiss.data?.addSymbol) {
            this.watchlistFeatureFacadeService.addSymbolToWatchlist(symbolIdentification.symbol);
        } else if (dismiss.data?.removeSymbol) {
            this.watchlistFeatureFacadeService.removeStockFromWatchlist(symbolIdentification, watchlistId);
        }
    }

    async presentWatchlistPickerPopOver(symbol: string): Promise<IdNameContainer> {
        const popOver = await this.popoverController.create({
            component: WatchlistPickerPopOverContainerComponent,
            componentProps: {symbol},
            cssClass: 'custom-popover',
            translucent: true,
        });
        await popOver.present();

        const dismiss = await popOver.onDidDismiss(); // get data on dismiss

        const watchlistId = dismiss?.data?.watchListId;
        const watchlistName = dismiss?.data?.watchlistName;

        return {id: watchlistId, name: watchlistName};
    }
}
