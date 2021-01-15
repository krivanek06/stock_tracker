import {Injectable} from '@angular/core';
import {ModalController, PopoverController} from '@ionic/angular';
import {IonicDialogService} from '../../../shared/services/ionic-dialog.service';
import {AuthFeatureService} from '../../auth-feature/services/auth-feature.service';
import {WatchlistPickerModalContainerComponent} from '../entry-components/watchlist-picker-modal-container/watchlist-picker-modal-container.component';
import {SymbolIdentification} from '../../../shared/models/sharedModel';
import {filter, first, map, takeUntil} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
import {
    Maybe,
    StStockWatchInputlistIdentifier,
    StStockWatchlist,
    StStockWatchlistFragmentFragment
} from '../../../api/customGraphql.service';
import {GraphqlWatchlistService} from './graphql-watchlist.service';
import {InlineInputPopUpComponent} from '../../../shared/components/pop-ups/inline-input-pop-up/inline-input-pop-up.component';
import {MarketPriceWebsocketService, MarketSymbolResult} from '../../../shared/services/market-price-websocket.service';

@Injectable({
    providedIn: 'root'
})
export class WatchlistService {
    constructor(private ionicDialogService: IonicDialogService,
                private popoverController: PopoverController,
                private marketPriceWebsocket: MarketPriceWebsocketService,
                private graphqlWatchlistService: GraphqlWatchlistService,
                private authService: AuthFeatureService) {
    }

    getUserStockWatchlists(): Observable<Array<Maybe<{ __typename?: 'STStockWatchlist' } & StStockWatchlistFragmentFragment>> | null> {
        return this.authService.getUser().pipe(
            map(u => u.stockWatchlist)
        );
    }

    // return updated price tags for symbol from watchlist
    initSubscriptionForWatchlist(): Observable<MarketSymbolResult> {
        const userWatchlist = this.authService.user.stockWatchlist;
        const distinctStocks = [...new Set([].concat(...userWatchlist.map(w => w.summaries.map(x => x.symbol))))] as string[];

        this.marketPriceWebsocket.getIsConnected().pipe(filter(x => !x), first()).subscribe(() => {
            distinctStocks.forEach(stock => this.marketPriceWebsocket.createSubscribeForSymbol(stock));
        });

        return this.marketPriceWebsocket.getSubscribedSymbolsResult().pipe(
            filter(res => !!res), // filter null & undefined
        );
    }

    closeMarketSubscription() {
        this.marketPriceWebsocket.closeConnection();
    }


    // if user has only one watchlist, return it automatically, else show pop-up to pick
    async addSymbolToWatchlist(symbol: string): Promise<void> {
        if (this.authService.user.stockWatchlist.length === 0) {
            const confirmation = await this.ionicDialogService.presentAlertConfirm(`You have not created your watchlist yet. Do you with to create one ?`);
            if (confirmation) {
                await this.createWatchlist();
            } else {
                return;
            }
        }

        const watchlists = this.authService.user.stockWatchlist;

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
            this.ionicDialogService.presentToast(`Symbol ${symbol} has been added into watchlist ${watchlistName}`);
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
                .subscribe(() => this.ionicDialogService.presentToast(`Watchlist ${name} has been created`));
        }
    }

    async removeStockFromWatchlist(data: SymbolIdentification, documentId: string) {
        const watchlistName = this.authService.user.stockWatchlist.find(s => s.id === documentId).name;

        const confirmation = await this.ionicDialogService.presentAlertConfirm(
            `Do your really wanna remove ${data.name} from your watchlist: ${watchlistName} ?`);

        if (confirmation) {
            await this.graphqlWatchlistService.removeStockFromWatchlist(documentId, data.symbol).toPromise();
            this.ionicDialogService.presentToast(`Symbol deleted from watchlist: ${watchlistName}`);
        }
    }

    async deleteWatchlist(input: StStockWatchInputlistIdentifier) {
        const confirmation = await this.ionicDialogService.presentAlertConfirm(`Do your really want to delete watchlist: ${input.additionalData} ?`);

        if (confirmation) {
            this.graphqlWatchlistService.deleteUserWatchlist(input.id)
                .subscribe(() => this.ionicDialogService.presentToast(`Watchlist ${input.additionalData} has been removed`));
        }
    }

    async renameWatchlist(input: StStockWatchInputlistIdentifier) {
        const confirmation = await this.ionicDialogService.presentAlertConfirm(`Do your really want to rename watchlist ?`);

        if (confirmation) {
            this.graphqlWatchlistService.renameStockWatchlist(input.id, input.additionalData)
                .subscribe(() => this.ionicDialogService.presentToast('Watchlist has been renamed'));
        }
    }
}
