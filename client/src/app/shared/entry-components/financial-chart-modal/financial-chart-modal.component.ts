import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SymbolIdentification } from '../../models';

@Component({
	selector: 'app-financial-chart-modal',
	templateUrl: './financial-chart-modal.component.html',
	styleUrls: ['./financial-chart-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinancialChartModalComponent implements OnInit {
	constructor(
		private dialogRef: MatDialogRef<FinancialChartModalComponent>,
		@Inject(MAT_DIALOG_DATA) public data: { symbolIdentification: SymbolIdentification; logoUrl: string; isCrypto: boolean }
	) {}

	ngOnInit() {}

	dismissModal() {
		this.dialogRef.close();
	}
}
