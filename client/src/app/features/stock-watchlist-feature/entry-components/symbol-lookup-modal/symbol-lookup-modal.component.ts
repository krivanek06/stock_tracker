import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StockDetails, StUserPublicData, SymbolStorageService, SymbolType, UserStorageService } from '@core';
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
	isSymbolInWatchlist = false;
	showSpinner = true;

	SymbolType = SymbolType;

	stockDetails$!: Observable<StockDetails | null>;
	symbolType$!: Observable<SymbolType | null>;
	user$!: Observable<StUserPublicData>;
	isAdmin$!: Observable<boolean>;

	constructor(
		private symbolStorageService: SymbolStorageService,
		private userStorageService: UserStorageService,
		private cd: ChangeDetectorRef,
		private dialogRef: MatDialogRef<SymbolLookupModalComponent>,
		@Inject(MAT_DIALOG_DATA) public data: { symbolIdentification: SymbolIdentification; watchlistId: string; showAddToWatchlistOption: boolean }
	) {}

	ngOnInit() {
		this.stockDetails$ = this.symbolStorageService.getStockDetails(this.data.symbolIdentification.symbol);
		this.symbolType$ = this.stockDetails$.pipe(map((x) => x?.summary?.symbolType || null));
		this.user$ = this.userStorageService.getUser();
		this.isAdmin$ = this.userStorageService.isAdmin();
		this.checkIfSymbolIsInWatchlist(); // checked if opened symbol is in my watchlist
		this.checkIfDetailsExists();

		// this.stockDetails$.subscribe(console.log);
	}

	dismissModal() {
		this.dialogRef.close();
	}

	redirectToDetails() {
		this.dialogRef.close({ redirect: true });
	}

	addSymbolToWatchlist() {
		this.dialogRef.close({ addSymbol: true });
	}

	@Confirmable('Please confirm removing symbol from watchlist')
	removeSymbolFromWatchlist() {
		this.dialogRef.close({ removeSymbol: true });
	}

	reloadStockDetails() {
		this.stockDetails$ = this.symbolStorageService.reloadStockDetails(this.data.symbolIdentification.symbol);
		this.stockDetails$
			.pipe(first())
			.subscribe(() => DialogService.showNotificationBar(`Data for symbol ${this.data.symbolIdentification.symbol} has been reloaded`));
	}

	private checkIfDetailsExists() {
		this.stockDetails$.pipe(first()).subscribe((details) => {
			this.showSpinner = false;
			if (!details) {
				DialogService.showNotificationBar(`Could not find details for symbol ${this.data.symbolIdentification.symbol}`, 'error');
			}
		});
	}

	private checkIfSymbolIsInWatchlist() {
		if (this.data.watchlistId) {
			const watchlist = this.userStorageService.user.stockWatchlist.find((s) => s.id === this.data.watchlistId);
			if (watchlist) {
				this.isSymbolInWatchlist = watchlist.summaries.map((s) => s.symbol).includes(this.data.symbolIdentification.symbol);
				this.cd.detectChanges();
			}
		}
	}
}
