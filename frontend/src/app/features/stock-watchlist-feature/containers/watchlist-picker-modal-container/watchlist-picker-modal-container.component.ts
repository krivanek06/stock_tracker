import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {StockWatchlist, StockWatchlistIdentifier} from '../../model/watchlistModel';
import {WatchlistService} from '../../services/watchlist.service';

@Component({
    selector: 'app-watchlist-picker-modal-container',
    templateUrl: './watchlist-picker-modal-container.component.html',
    styleUrls: ['./watchlist-picker-modal-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchlistPickerModalContainerComponent implements OnInit {
    symbol: string;

    private DELETE_THIS_LATER = '7eYTErOxXugeHg4JHLS1L5ZKosK2';

    constructor(private navParams: NavParams,
                private watchlistService: WatchlistService,
                private modalController: ModalController) {
        this.symbol = this.navParams.get('symbol');
    }

    stockWatchLists$ = this.watchlistService.getUserStockWatchlists(this.DELETE_THIS_LATER);


    ngOnInit(): void {
        this.stockWatchLists$.subscribe(console.log); // delete later
    }


    dismissModal() {
        this.modalController.dismiss();
    }

    addSymbolToWatchlist(watchListId: string) {
        const identifier: StockWatchlistIdentifier = {
            userId: this.DELETE_THIS_LATER,
            additionalData: this.symbol,
            id: watchListId
        };
        this.watchlistService.addSymbolToWatchlist(identifier)
            .subscribe(res => {
                console.log(res);
            });
    }


    createWatchList(watchlistName: string) {
        this.watchlistService.createWatchList({userId: this.DELETE_THIS_LATER, additionalData: watchlistName})
            .subscribe(res => {
                console.log(res);
            });
    }

}
