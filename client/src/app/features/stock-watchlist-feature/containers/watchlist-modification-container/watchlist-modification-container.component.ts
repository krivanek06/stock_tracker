import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StStockWatchInputlistIdentifier, StStockWatchlist, UserStorageService } from '@core';
import { Confirmable } from '@shared';
import { WatchlistFeatureFacadeService } from '../../services';

@Component({
	selector: 'app-watchlist-modification-container',
	templateUrl: './watchlist-modification-container.component.html',
	styleUrls: ['./watchlist-modification-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WatchlistModificationContainerComponent implements OnInit {
	@Input() watchlists: StStockWatchlist[] = [];

	constructor(private userStorageService: UserStorageService, private watchlistService: WatchlistFeatureFacadeService) {}

	ngOnInit() {}

	@Confirmable('Please confirm renaming watchlist')
	changeName(watchlistNewName: string, watchlist: StStockWatchlist) {
		const input: StStockWatchInputlistIdentifier = {
			id: watchlist.id,
			userId: this.userStorageService.user.id,
			additionalData: watchlistNewName,
		};
		this.watchlistService.renameWatchlist(input);
	}

	@Confirmable('Please confirm deleting watchlist')
	deleteWatchlist(watchlist: StStockWatchlist) {
		const input: StStockWatchInputlistIdentifier = {
			id: watchlist.id,
			userId: this.userStorageService.user.id,
			additionalData: watchlist.name,
		};
		this.watchlistService.deleteWatchlist(input);
	}

	createWatchlist() {
		this.watchlistService.createWatchlist();
	}
}
