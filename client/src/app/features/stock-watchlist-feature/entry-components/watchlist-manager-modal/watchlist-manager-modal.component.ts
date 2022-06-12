import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { StStockWatchInputlistIdentifier, StStockWatchlist, UserStorageService } from '@core';
import { Confirmable } from '@shared';
import { map, Observable } from 'rxjs';
import { WatchlistFeatureFacadeService } from '../../services';

@Component({
	selector: 'app-watchlist-manager-modal',
	templateUrl: './watchlist-manager-modal.component.html',
	styleUrls: ['./watchlist-manager-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WatchlistManagerModalComponent implements OnInit {
	watchlists$!: Observable<StStockWatchlist[]>;

	constructor(
		private watchlistService: WatchlistFeatureFacadeService,

		private dialogRef: MatDialogRef<WatchlistManagerModalComponent>,
		private userStorageService: UserStorageService
	) {}

	ngOnInit() {
		this.watchlists$ = this.userStorageService.getUser().pipe(map((user) => user.stockWatchlist));
	}

	@Confirmable('Please confirm renaming watchlist')
	changeName(watchlistNewName: string, watchlist: StStockWatchlist) {
		const input: StStockWatchInputlistIdentifier = {
			id: watchlist.id,
			additionalData: watchlistNewName,
		};
		this.watchlistService.renameWatchlist(input);
	}

	@Confirmable('Please confirm deleting watchlist')
	deleteWatchlist(watchlist: StStockWatchlist) {
		const input: StStockWatchInputlistIdentifier = {
			id: watchlist.id,
			additionalData: watchlist.name,
		};
		this.watchlistService.deleteWatchlist(input);
	}

	createWatchlist() {
		this.watchlistService.createWatchlist();
	}

	closeDialog(): void {
		this.dialogRef.close();
	}
}
