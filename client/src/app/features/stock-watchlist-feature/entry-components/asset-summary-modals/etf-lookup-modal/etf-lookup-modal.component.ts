import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EtfDetails, GraphqlQueryService, UserStorageService } from '@core';
import { DialogService, SymbolIdentification } from '@shared';
import { first, Observable } from 'rxjs';
import { AssetSummaryModalBase } from '../asset-summary-modal-base.directive';

@Component({
	selector: 'app-etf-lookup-modal',
	templateUrl: './etf-lookup-modal.component.html',
	styleUrls: ['./etf-lookup-modal.component.scss'],
	//changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EtfLookupModalComponent extends AssetSummaryModalBase<EtfLookupModalComponent> implements OnInit {
	etfDetails$!: Observable<EtfDetails>;

	constructor(
		private graphqlQueryService: GraphqlQueryService,
		public dialogRef: MatDialogRef<EtfLookupModalComponent>,
		userStorageService: UserStorageService,
		cd: ChangeDetectorRef,
		@Inject(MAT_DIALOG_DATA) public data: { symbolIdentification: SymbolIdentification; watchlistId: string; showAddToWatchlistOption: boolean }
	) {
		super(userStorageService, cd, dialogRef, data);
	}

	ngOnInit() {
		super.ngOnInit();
		this.etfDetails$ = this.graphqlQueryService.queryEtfDetails(this.data.symbolIdentification.symbol);
		this.checkIfDetailsExists();
	}

	private checkIfDetailsExists() {
		this.etfDetails$.pipe(first()).subscribe((details) => {
			if (!details) {
				DialogService.showNotificationBar(`Could not find details for symbol ${this.data.symbolIdentification.symbol}`, 'error');
			}
		});
	}
}
