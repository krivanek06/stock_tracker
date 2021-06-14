import {Injectable} from '@angular/core';
import {ModalController, PopoverController} from '@ionic/angular';
import {Confirmable, DialogService, IdNameContainer, SymbolIdentification} from '@shared';
import {SymbolLookupModalComponent, WatchlistPickerPopOverContainerComponent} from '../entry-components'; // TODO circular dependency
import {FinnhubWebsocketService, GraphqlWatchlistService, StStockWatchInputlistIdentifier, UserStorageService} from '@core';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class WatchlistFeatureFacadeService {

    constructor(private finnhubWebsocketService: FinnhubWebsocketService,
                private graphqlWatchlistService: GraphqlWatchlistService,
                private userStorageService: UserStorageService,
                private modalController: ModalController,
                private popoverController: PopoverController,
                private router: Router,) {
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
            this.addSymbolToWatchlist(symbolIdentification.symbol);
        } else if (dismiss.data?.removeSymbol) {
            this.removeStockFromWatchlist(symbolIdentification, watchlistId);
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


    async addSymbolToWatchlist(symbol: string): Promise<void> {
        if (this.userStorageService.user.stockWatchlist.length === 0) {
            const confirmation = await DialogService.presentAlertConfirm(`You have not created your watchlist yet. Do you with to create one ?`);
            if (confirmation) {
                await this.createWatchlist();
            } else {
                return; // refused to create watchlist
            }
        }

        const watchlists = this.userStorageService.user.stockWatchlist;

        let watchlistId;
        let watchlistName;

        if (watchlists.length === 1) {
            watchlistId = watchlists[0].id; // default, only 1 watchlist
            watchlistName = watchlists[0].name;
        } else {
            // multiple watchlist, present entry-components for user to choose
            const popOver = await this.popoverController.create({
                component: WatchlistPickerPopOverContainerComponent,
                componentProps: {symbol},
                cssClass: 'custom-popover',
                translucent: true,
            });
            await popOver.present();

            const dismiss = await popOver.onDidDismiss(); // get data on dismiss

            watchlistId = dismiss.data ? dismiss.data.watchListId : undefined;
            watchlistName = dismiss.data ? dismiss.data.watchlistName : undefined;
        }

        if (watchlistId) {
            await this.graphqlWatchlistService.addSymbolToWatchlist(watchlistId, symbol).toPromise();
            DialogService.presentToast(`Symbol ${symbol} has been added into watchlist ${watchlistName}`);
        }
    }

    async createWatchlist() {
        const name = await DialogService.presentInlineInputPopOver();

        if (name) {
            await this.graphqlWatchlistService.createWatchList(name).toPromise();
            DialogService.presentToast(`Watchlist ${name} has been created`);
        }
    }

    @Confirmable('Please confirm removing symbol from watchlist')
    async removeStockFromWatchlist(data: SymbolIdentification, documentId: string) {
        const watchlistName = this.userStorageService.user.stockWatchlist.find(s => s.id === documentId).name;
        await this.graphqlWatchlistService.removeStockFromWatchlist(documentId, data.symbol).toPromise();
        DialogService.presentToast(`Symbol deleted from watchlist: ${watchlistName}`);
    }

    @Confirmable('Please confirm deleting watchlist')
    async deleteWatchlist(input: StStockWatchInputlistIdentifier) {
        await this.graphqlWatchlistService.deleteUserWatchlist(input.id).toPromise();
        DialogService.presentToast(`Watchlist ${input.additionalData} has been removed`);
    }

    @Confirmable('Please confirm renaming watchlist')
    async renameWatchlist(input: StStockWatchInputlistIdentifier) {
        await this.graphqlWatchlistService.renameStockWatchlist(input.id, input.additionalData).toPromise();
        DialogService.presentToast('Watchlist has been renamed');
    }
}
