import {Injectable} from '@angular/core';
import {ModalController, PopoverController} from '@ionic/angular';
import {Confirmable, DialogService, SymbolIdentification} from '@shared';
import {SymbolLookupModalComponent, WatchlistPickerModalContainerComponent} from '../entry-components'; // TODO circular dependency
import {
    FinnhubWebsocketService,
    GraphqlWatchlistService,
    StStockWatchInputlistIdentifier,
    UserStorageService
} from '@core';

@Injectable()
export class WatchlistFeatureFacadeService {

    constructor(private popoverController: PopoverController,
                private finnhubWebsocketService: FinnhubWebsocketService,
                private graphqlWatchlistService: GraphqlWatchlistService,
                private userStorageService: UserStorageService) {
    }


    // if user has only one watchlist, return it automatically, else show pop-up to pick
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
                component: WatchlistPickerModalContainerComponent,
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
            this.graphqlWatchlistService.createWatchList(name)
                .subscribe(() => DialogService.presentToast(`Watchlist ${name} has been created`));
        }
    }

    async removeStockFromWatchlist(data: SymbolIdentification, documentId: string) {
        const watchlistName = this.userStorageService.user.stockWatchlist.find(s => s.id === documentId).name;

        if (await DialogService.presentAlertConfirm(`Please confirm removing ${data.name} from watchlist: ${watchlistName} ?`)) {
            await this.graphqlWatchlistService.removeStockFromWatchlist(documentId, data.symbol).toPromise();
            DialogService.presentToast(`Symbol deleted from watchlist: ${watchlistName}`);
        }
    }

    @Confirmable('Please confirm deleting watchlist')
    async deleteWatchlist(input: StStockWatchInputlistIdentifier) {
        this.graphqlWatchlistService.deleteUserWatchlist(input.id)
            .subscribe(() => DialogService.presentToast(`Watchlist ${input.additionalData} has been removed`));
    }

    @Confirmable('Please confirm renaming watchlist')
    async renameWatchlist(input: StStockWatchInputlistIdentifier) {
        this.graphqlWatchlistService.renameStockWatchlist(input.id, input.additionalData)
            .subscribe(() => DialogService.presentToast('Watchlist has been renamed'));
    }
}
