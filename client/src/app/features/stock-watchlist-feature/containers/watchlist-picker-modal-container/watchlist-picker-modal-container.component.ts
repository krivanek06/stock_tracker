import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {WatchlistService} from '../../services/watchlist.service';

@Component({
    selector: 'app-watchlist-picker-modal-container',
    templateUrl: './watchlist-picker-modal-container.component.html',
    styleUrls: ['./watchlist-picker-modal-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchlistPickerModalContainerComponent implements OnInit {
    symbol: string;

    constructor(private navParams: NavParams,
                private watchlistService: WatchlistService,
                private modalController: ModalController) {
        this.symbol = this.navParams.get('symbol');
    }

    stockWatchLists$ = this.watchlistService.getUserStockWatchlists();


    ngOnInit(): void {

    }

    dismissModal() {
        this.modalController.dismiss();
    }

    addSymbolToWatchlist(watchListId: string, watchlistName: string) {
        this.modalController.dismiss({watchListId, watchlistName});
    }

}
