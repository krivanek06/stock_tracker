import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GraphqlWatchlistService, StStockWatchInputlistIdentifier, UserStorageService } from '@core';
import { DialogService, IdNameContainer, SymbolIdentification } from '@shared';
import { SymbolLookupModalComponent } from '../entry-components'; // TODO circular dependency

@Injectable({
	providedIn: 'root',
})
export class WatchlistFeatureFacadeService {
	constructor(
		private graphqlWatchlistService: GraphqlWatchlistService,
		private userStorageService: UserStorageService,
		private dialog: MatDialog,
		private router: Router
	) {}

	async presentSymbolLookupModal(symbolIdentification: SymbolIdentification, showAddToWatchlistOption: boolean, watchlistId: string | null = null) {
		const dialogRef = this.dialog.open(SymbolLookupModalComponent, {
			data: {
				symbolIdentification,
				showAddToWatchlistOption,
				watchlistId,
			},
			maxWidth: '100vw',
			minWidth: '60vw',
			panelClass: 'g-mat-dialog-big',
		});

		const dismiss = await dialogRef.afterClosed().toPromise();
		console.log('dismiss', dismiss);

		if (dismiss.data?.redirect) {
			const symbol = symbolIdentification.symbol.split('.')[0]; // ex: MMM.DE => MMM
			this.router.navigateByUrl(`/menu/search/stock-details/${symbol}`);
		} else if (dismiss.data?.addSymbol) {
			this.addSymbolToWatchlist(symbolIdentification.symbol);
		} else if (dismiss.data?.removeSymbol && watchlistId) {
			this.removeStockFromWatchlist(symbolIdentification, watchlistId);
		}
	}

	async addSymbolToWatchlist(symbol: string): Promise<void> {
		if (this.userStorageService.user.stockWatchlist.length === 0) {
			const confirmation = await DialogService.showConfirmDialog(`You have not created your watchlist yet. Do you with to create one ?`);
			if (confirmation) {
				await this.createWatchlist();
			} else {
				return; // refused to create watchlist
			}
		}

		const watchlists = this.userStorageService.user.stockWatchlist;

		let watchlistId: string;
		let watchlistName: string;

		if (watchlists.length === 1) {
			// default, only 1 watchlist
			watchlistId = watchlists[0].id;
			watchlistName = watchlists[0].name;
		} else {
			// multiple watchlist, present entry-containers for user to choose
			const options = watchlists.map((watchlist) => {
				return { name: `${watchlist.name}  [ ${watchlist?.summaries.length} ]`, id: watchlist.id } as IdNameContainer;
			});
			watchlistId = await DialogService.presentOptionsPopOver('Select watchlist', options);
			watchlistName = watchlists.find((watchlist) => watchlist.id === watchlistId)?.name || '';
		}

		if (watchlistId) {
			await this.graphqlWatchlistService.addSymbolToWatchlist(watchlistId, symbol).toPromise();
			await DialogService.showNotificationBar(`Symbol ${symbol} has been added into watchlist ${watchlistName}`);
		}
	}

	async createWatchlist() {
		const name = await DialogService.presentInlineInputPopOver('Watchlist name');

		if (name) {
			await this.graphqlWatchlistService.createWatchList(name).toPromise();
			DialogService.showNotificationBar(`Watchlist ${name} has been created`);
		}
	}

	async removeStockFromWatchlist(data: SymbolIdentification, documentId: string) {
		const userWatlist = this.userStorageService.user?.stockWatchlist || [];
		if (userWatlist) {
			const watchlistName = userWatlist.find((s) => s.id === documentId)?.name;
			await this.graphqlWatchlistService.removeStockFromWatchlist(documentId, data.symbol).toPromise();
			DialogService.showNotificationBar(`Symbol deleted from watchlist: ${watchlistName}`);
		}
	}

	async deleteWatchlist(input: StStockWatchInputlistIdentifier) {
		if (!input.id) {
			return;
		}
		await this.graphqlWatchlistService.deleteUserWatchlist(input.id).toPromise();
		DialogService.showNotificationBar(`Watchlist ${input.additionalData} has been removed`);
	}

	async renameWatchlist(input: StStockWatchInputlistIdentifier) {
		if (!input.id || !input.additionalData) {
			return;
		}
		await this.graphqlWatchlistService.renameStockWatchlist(input.id, input.additionalData).toPromise();
		DialogService.showNotificationBar('Watchlist has been renamed');
	}
}
