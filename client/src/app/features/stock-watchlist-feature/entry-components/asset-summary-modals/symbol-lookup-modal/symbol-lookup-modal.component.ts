import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Summary, SymbolStorageService, UserStorageService } from '@core';
import { DialogService, SymbolIdentification } from '@shared';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { AssetSummaryModalBase } from '../asset-summary-modal-base.directive';

@Component({
	selector: 'app-symbol-lookup-modal',
	templateUrl: './symbol-lookup-modal.component.html',
	styleUrls: ['./symbol-lookup-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SymbolLookupModalComponent extends AssetSummaryModalBase<SymbolLookupModalComponent> implements OnInit {
	stockSummary$!: Observable<Summary | null>;

	constructor(
		private symbolStorageService: SymbolStorageService,
		public dialogRef: MatDialogRef<SymbolLookupModalComponent>,
		userStorageService: UserStorageService,
		cd: ChangeDetectorRef,
		@Inject(MAT_DIALOG_DATA) public data: { symbolIdentification: SymbolIdentification; watchlistId: string; showAddToWatchlistOption: boolean }
	) {
		super(userStorageService, cd, dialogRef, data);
	}

	ngOnInit() {
		super.ngOnInit();
		this.stockSummary$ = this.symbolStorageService.getStockSummary(this.data.symbolIdentification.symbol);
		this.stockSummary$.subscribe(console.log);
	}

	redirectToDetails() {
		this.dialogRef.close({ redirect: true });
	}

	reloadStockDetails() {
		this.stockSummary$ = this.symbolStorageService.reloadStockDetails(this.data.symbolIdentification.symbol);
		this.stockSummary$
			.pipe(first())
			.subscribe(() => DialogService.showNotificationBar(`Data for symbol ${this.data.symbolIdentification.symbol} has been reloaded`));
	}
}
