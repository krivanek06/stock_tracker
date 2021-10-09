import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FinnhubWebsocketService, GraphqlWatchlistService, StStockWatchInputlistIdentifier, UserStorageService } from '@core';
import { ModalController, PopoverController } from '@ionic/angular';
import { DialogService, IdNameContainer, SymbolIdentification } from '@shared';
import { SymbolLookupModalComponent } from '../entry-components'; // TODO circular dependency

@Injectable({
	providedIn: 'root',
})
export class WatchlistFeatureFacadeService {
	constructor(
		private finnhubWebsocketService: FinnhubWebsocketService,
		private graphqlWatchlistService: GraphqlWatchlistService,
		private userStorageService: UserStorageService,
		private modalController: ModalController,
		private popoverController: PopoverController,
		private router: Router
	) {}

	async presentSymbolLookupModal(symbolIdentification: SymbolIdentification, showAddToWatchlistOption: boolean, watchlistId: string = null) {
		const modal = await this.modalController.create({
			component: SymbolLookupModalComponent,
			componentProps: { symbolIdentification, showAddToWatchlistOption, watchlistId },
			cssClass: 'custom-modal',
		});
		await modal.present();

		const dismiss = await modal.onDidDismiss();
		console.log('dismiss', dismiss);

		if (dismiss.data?.redirect) {
			const symbol = symbolIdentification.symbol.split('.')[0]; // ex: MMM.DE => MMM
			this.router.navigateByUrl(`/menu/search/stock-details/${symbol}`);
		} else if (dismiss.data?.addSymbol) {
			this.addSymbolToWatchlist(symbolIdentification.symbol);
		} else if (dismiss.data?.removeSymbol) {
			this.removeStockFromWatchlist(symbolIdentification, watchlistId);
		}
	}

	async addSymbolToWatchlist(symbol: string): Promise<void> {
		if (this.userStorageService.user.stockWatchlist.length === 0) {
			const confirmation = await DialogService.presentAlertConfirm(`You have not created your watchlist yet. Do you with to create one ?`);
			if (confirmation) {
				await this.createWatchlist();
			} else {
				return; // refused to create watchlist
			}
		}

		const watchlists = this.userStorageService.user.stockWatchlist;

		let watchlistId;
		let watchlistName;

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
			watchlistName = watchlists.find((watchlist) => watchlist.id === watchlistId)?.name;
		}

		if (watchlistId) {
			await this.graphqlWatchlistService.addSymbolToWatchlist(watchlistId, symbol).toPromise();
			await DialogService.presentToast(`Symbol ${symbol} has been added into watchlist ${watchlistName}`);
		}
	}

	async createWatchlist() {
		const name = await DialogService.presentInlineInputPopOver('Watchlist name');

		if (name) {
			await this.graphqlWatchlistService.createWatchList(name).toPromise();
			DialogService.presentToast(`Watchlist ${name} has been created`);
		}
	}

	async removeStockFromWatchlist(data: SymbolIdentification, documentId: string) {
		const watchlistName = this.userStorageService.user.stockWatchlist.find((s) => s.id === documentId).name;
		await this.graphqlWatchlistService.removeStockFromWatchlist(documentId, data.symbol).toPromise();
		await DialogService.presentToast(`Symbol deleted from watchlist: ${watchlistName}`);
	}

	async deleteWatchlist(input: StStockWatchInputlistIdentifier) {
		await this.graphqlWatchlistService.deleteUserWatchlist(input.id).toPromise();
		await DialogService.presentToast(`Watchlist ${input.additionalData} has been removed`);
	}

	async renameWatchlist(input: StStockWatchInputlistIdentifier) {
		await this.graphqlWatchlistService.renameStockWatchlist(input.id, input.additionalData).toPromise();
		await DialogService.presentToast('Watchlist has been renamed');
	}
}
