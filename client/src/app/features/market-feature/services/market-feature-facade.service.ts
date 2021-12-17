import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FinancialChartModalComponent, SymbolIdentification } from '@shared';
import { MarketChartBuilderComponent } from '../entry-components';

@Injectable({
	providedIn: 'root',
})
export class MarketFeatureFacadeService {
	constructor(private dialog: MatDialog) {}

	async showFinancialChart(symbolIdentification: SymbolIdentification, logoUrl: string | undefined, isCrypto: boolean) {
		this.dialog.open(FinancialChartModalComponent, {
			data: {
				symbolIdentification,
				logoUrl,
				isCrypto,
			},
			panelClass: 'g-mat-dialog',
		});
	}

	async showMarketChartBuilder(documentKey: string) {
		this.dialog.open(MarketChartBuilderComponent, {
			data: { documentKey },
			panelClass: 'g-mat-dialog-big',
			maxWidth: '100vw',
			minWidth: '60vw',
		});
	}
}
