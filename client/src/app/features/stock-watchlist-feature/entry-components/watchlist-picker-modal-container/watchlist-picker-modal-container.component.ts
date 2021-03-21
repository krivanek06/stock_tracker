import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NavParams, PopoverController} from '@ionic/angular';
import {WatchlistFeatureService} from '../../services';

@Component({
    selector: 'app-watchlist-picker-modal-container',
    templateUrl: './watchlist-picker-modal-container.component.html',
    styleUrls: ['./watchlist-picker-modal-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchlistPickerModalContainerComponent implements OnInit {
    symbol: string;

    constructor(private navParams: NavParams,
                private watchlistService: WatchlistFeatureService,
                private popoverController: PopoverController) {
        this.symbol = this.navParams.get('symbol');
    }

    stockWatchLists$ = this.watchlistService.getUserStockWatchlists();


    ngOnInit(): void {

    }

    dismissModal() {
        this.popoverController.dismiss();
    }

    addSymbolToWatchlist(watchListId: string, watchlistName: string) {
        this.popoverController.dismiss({watchListId, watchlistName});
    }

}
