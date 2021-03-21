import {Injectable} from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {InlineInputPopUpComponent, SymbolIdentification} from '@shared';
import {WatchlistPickerModalContainerComponent} from '../entry-components';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {
    Confirmable,
    FinnhubWebsocketService,
    IonicDialogService,
    MarketSymbolResult,
    Maybe,
    StStockWatchInputlistIdentifier,
    StStockWatchlistFragmentFragment,
    UserStorageService
} from '@core';
import {GraphqlWatchlistService} from './graphql-watchlist.service';

@Injectable({
    providedIn: 'root'
})
export class WatchlistFeatureService {
    private serviceName = 'WatchlistService';

    constructor(private popoverController: PopoverController,
                private finnhubWebsocketService: FinnhubWebsocketService,
                private graphqlWatchlistService: GraphqlWatchlistService,
                private userStorageService: UserStorageService) {
    }

    getUserStockWatchlists(): Observable<Array<Maybe<{ __typename?: 'STStockWatchlist' } & StStockWatchlistFragmentFragment>> | null> {
        return this.userStorageService.getUser().pipe(
            map(u => u.stockWatchlist)
        );
    }

    // return updated price tags for symbol from watchlist
    initSubscriptionForWatchlist(): Observable<MarketSymbolResult> {
        const userWatchlist = this.userStorageService.user.stockWatchlist;
        const distinctStocks = [...new Set([].concat(...userWatchlist.map(w => w.summaries.map(x => x.symbol))))] as string[];

        distinctStocks.forEach(stock => this.finnhubWebsocketService.createSubscribeForSymbol(this.serviceName, stock));

        return this.finnhubWebsocketService.getSubscribedSymbolsResult();
    }

    closeMarketSubscription() {
        this.finnhubWebsocketService.closeConnection(this.serviceName);
    }


    // if user has only one watchlist, return it automatically, else show pop-up to pick
    async addSymbolToWatchlist(symbol: string): Promise<void> {
        if (this.userStorageService.user.stockWatchlist.length === 0) {
            const confirmation = await IonicDialogService.presentAlertConfirm(`You have not created your watchlist yet. Do you with to create one ?`);
            if (confirmation) {
                await this.createWatchlist();
            } else {
                return;
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
            IonicDialogService.presentToast(`Symbol ${symbol} has been added into watchlist ${watchlistName}`);
        }
    }

    async createWatchlist() {
        const popover = await this.popoverController.create({
            component: InlineInputPopUpComponent,
            cssClass: 'custom-popover',
            translucent: true,
            componentProps: {inputLabel: 'Watchlist name'}
        });

        await popover.present();
        const res = await popover.onDidDismiss();
        const name = res.data ? res.data.inputData : undefined;

        if (name) {
            this.graphqlWatchlistService.createWatchList(name)
                .subscribe(() => IonicDialogService.presentToast(`Watchlist ${name} has been created`));
        }
    }

    async removeStockFromWatchlist(data: SymbolIdentification, documentId: string) {
        const watchlistName = this.userStorageService.user.stockWatchlist.find(s => s.id === documentId).name;

        const confirmation = await IonicDialogService.presentAlertConfirm(
            `Do your really wanna remove ${data.name} from your watchlist: ${watchlistName} ?`);

        if (confirmation) {
            await this.graphqlWatchlistService.removeStockFromWatchlist(documentId, data.symbol).toPromise();
            IonicDialogService.presentToast(`Symbol deleted from watchlist: ${watchlistName}`);
        }
    }

    @Confirmable('Please confirm deleting watchlist')
    async deleteWatchlist(input: StStockWatchInputlistIdentifier) {
        this.graphqlWatchlistService.deleteUserWatchlist(input.id)
            .subscribe(() => IonicDialogService.presentToast(`Watchlist ${input.additionalData} has been removed`));
    }

    @Confirmable('Please confirm renaming watchlist')
    async renameWatchlist(input: StStockWatchInputlistIdentifier) {
        this.graphqlWatchlistService.renameStockWatchlist(input.id, input.additionalData)
            .subscribe(() => IonicDialogService.presentToast('Watchlist has been renamed'));
    }
}
