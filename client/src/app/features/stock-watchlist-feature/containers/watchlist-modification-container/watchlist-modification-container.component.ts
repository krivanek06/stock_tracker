import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StStockWatchInputlistIdentifier, StStockWatchlist, UserStorageService} from '@core';
import {WatchlistFeatureService} from '../../services';

@Component({
    selector: 'app-watchlist-modification-container',
    templateUrl: './watchlist-modification-container.component.html',
    styleUrls: ['./watchlist-modification-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchlistModificationContainerComponent implements OnInit {
    @Input() watchlists: StStockWatchlist[];

    constructor(private userStorageService: UserStorageService,
                private watchlistService: WatchlistFeatureService) {
    }

    ngOnInit() {
    }

    changeName(watchlistNewName: string, watchlist: StStockWatchlist) {
        const input: StStockWatchInputlistIdentifier = {
            id: watchlist.id,
            userId: this.userStorageService.user.uid,
            additionalData: watchlistNewName
        };
        this.watchlistService.renameWatchlist(input);
    }

    deleteWatchlist(watchlist: StStockWatchlist) {
        const input: StStockWatchInputlistIdentifier = {
            id: watchlist.id,
            userId: this.userStorageService.user.uid,
            additionalData: watchlist.name
        };
        this.watchlistService.deleteWatchlist(input);
    }

    createWatchlist() {
        this.watchlistService.createWatchlist();
    }
}
