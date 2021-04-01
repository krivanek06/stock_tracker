import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NavParams, PopoverController} from '@ionic/angular';
import {UserStorageService} from '@core';

@Component({
    selector: 'app-watchlist-picker-modal-container',
    templateUrl: './watchlist-picker-modal-container.component.html',
    styleUrls: ['./watchlist-picker-modal-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchlistPickerModalContainerComponent implements OnInit {
    symbol: string;
    stockWatchLists$ = this.userStorageService.getUserWatchlists();

    constructor(private navParams: NavParams,
                private userStorageService: UserStorageService,
                private popoverController: PopoverController) {
        this.symbol = this.navParams.get('symbol');
    }

    ngOnInit(): void {

    }

    dismissModal() {
        this.popoverController.dismiss();
    }

    addSymbolToWatchlist(watchListId: string, watchlistName: string) {
        this.popoverController.dismiss({watchListId, watchlistName});
    }

}
