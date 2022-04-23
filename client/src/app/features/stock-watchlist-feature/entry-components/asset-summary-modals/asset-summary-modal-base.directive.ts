import { ChangeDetectorRef, Directive, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StUserPublicData, UserStorageService } from '@core';
import { Confirmable, SymbolIdentification } from '@shared';
import { Observable } from 'rxjs';

@Directive()
export abstract class AssetSummaryModalBase<T> implements OnInit {
	user$!: Observable<StUserPublicData>;
	isAdmin$!: Observable<boolean>;

	isSymbolInWatchlist = false;

	constructor(
		private userStorageService: UserStorageService,
		private cd: ChangeDetectorRef,
		public dialogRef: MatDialogRef<T>,
		@Inject(MAT_DIALOG_DATA) public data: { symbolIdentification: SymbolIdentification; watchlistId: string; showAddToWatchlistOption: boolean }
	) {}

	ngOnInit() {
		this.user$ = this.userStorageService.getUser();
		this.isAdmin$ = this.userStorageService.isAdmin();
		this.checkIfSymbolIsInWatchlist(); // checked if opened symbol is in my watchlist
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
