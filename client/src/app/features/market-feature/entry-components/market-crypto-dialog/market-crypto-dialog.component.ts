import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SymbolIdentification } from '@shared';

@Component({
	selector: 'app-market-crypto-dialog',
	templateUrl: './market-crypto-dialog.component.html',
	styleUrls: ['./market-crypto-dialog.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketCryptoDialogComponent implements OnInit {
	constructor(
		private dialogRef: MatDialogRef<MarketCryptoDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: { symbolIdentification: SymbolIdentification; logoUrl: string }
	) {}

	ngOnInit() {}

	closeDialog() {
		this.dialogRef.close();
	}
}
