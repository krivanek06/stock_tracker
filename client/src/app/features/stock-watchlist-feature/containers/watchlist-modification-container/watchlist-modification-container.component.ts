import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StStockWatchInputlistIdentifier, StStockWatchlist} from '../../../../api/customGraphql.service';
import {AuthFeatureService} from '../../../auth-feature/services/auth-feature.service';
import {WatchlistService} from '../../services/watchlist.service';

@Component({
    selector: 'app-watchlist-modification-container',
    templateUrl: './watchlist-modification-container.component.html',
    styleUrls: ['./watchlist-modification-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchlistModificationContainerComponent implements OnInit {
    @Input() watchlists: StStockWatchlist[];

    constructor(private authService: AuthFeatureService,
                private watchlistService: WatchlistService) {
    }

    ngOnInit() {
    }

    changeName(watchlistNewName: string, watchlist: StStockWatchlist) {
        const input: StStockWatchInputlistIdentifier = {
            id: watchlist.id,
            userId: this.authService.user.uid,
            additionalData: watchlistNewName
        };
        this.watchlistService.renameWatchlist(input);
    }

    deleteWatchlist(watchlist: StStockWatchlist) {
        const input: StStockWatchInputlistIdentifier = {
            id: watchlist.id,
            userId: this.authService.user.uid,
            additionalData: watchlist.name
        };
        this.watchlistService.deleteWatchlist(input);
    }
}
