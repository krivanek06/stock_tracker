import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { StockDetails, StUserPublicData, SymbolStorageService, SymbolType, UserStorageService } from '@core';
import { ModalController, NavParams } from '@ionic/angular';
import { Confirmable, DialogService, SymbolIdentification } from '@shared';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Component({
	selector: 'app-symbol-lookup-modal',
	templateUrl: './symbol-lookup-modal.component.html',
	styleUrls: ['./symbol-lookup-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SymbolLookupModalComponent implements OnInit {
	symbolIdentification: SymbolIdentification;
	watchlistId: string;
	showAddToWatchlistOption = true;
	isSymbolInWatchlist = false;
	showSpinner = true;

	SymbolType = SymbolType;

	stockDetails$: Observable<StockDetails>;
	symbolType$: Observable<SymbolType>;
	user$: Observable<StUserPublicData>;
	isAdmin$: Observable<boolean>;

	constructor(
		private navParams: NavParams,
		private symbolStorageService: SymbolStorageService,
		private userStorageService: UserStorageService,
		private cd: ChangeDetectorRef,
		private modalController: ModalController
	) {}

	ngOnInit() {
		this.symbolIdentification = this.navParams.get('symbolIdentification');
		this.watchlistId = this.navParams.get('watchlistId');
		this.showAddToWatchlistOption = this.navParams.get('showAddToWatchlistOption');

		this.stockDetails$ = this.symbolStorageService.getStockDetails(this.symbolIdentification.symbol);
		this.symbolType$ = this.stockDetails$.pipe(map((x) => x.summary.symbolType));
		this.user$ = this.userStorageService.getUser();
		this.isAdmin$ = this.userStorageService.isAdmin();
		this.checkIfSymbolIsInWatchlist(); // checked if opened symbol is in my watchlist
		this.checkIfDetailsExists();
	}

	dismissModal() {
		this.modalController.dismiss();
	}

	redirectToDetails() {
		this.modalController.dismiss({ redirect: true });
	}

	addSymbolToWatchlist() {
		this.modalController.dismiss({ addSymbol: true });
	}

	@Confirmable('Please confirm removing symbol from watchlist')
	removeSymbolFromWatchlist() {
		this.modalController.dismiss({ removeSymbol: true });
	}

	reloadStockDetails() {
		this.stockDetails$ = this.symbolStorageService.reloadStockDetails(this.symbolIdentification.symbol);
		this.stockDetails$.pipe(first()).subscribe((res) => DialogService.presentToast(`Data for symbol ${res.id} has been reloaded`));
	}

	private checkIfDetailsExists() {
		this.stockDetails$.pipe(first()).subscribe((details) => {
			this.showSpinner = false;
			if (!details) {
				DialogService.presentErrorToast(`Could not find details for symbol ${this.symbolIdentification.symbol}`);
			}
		});
	}

	private checkIfSymbolIsInWatchlist() {
		if (this.watchlistId) {
			const watchlist = this.userStorageService.user.stockWatchlist.find((s) => s.id === this.watchlistId);
			if (watchlist) {
				this.isSymbolInWatchlist = watchlist.summaries.map((s) => s.symbol).includes(this.symbolIdentification.symbol);
				this.cd.detectChanges();
			}
		}
	}
}
