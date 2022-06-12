import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MarketChartBuilderComponent } from '../entry-components';

@Injectable({
	providedIn: 'root',
})
export class MarketFeatureFacadeService {
	constructor(private dialog: MatDialog) {}

	async showMarketChartBuilder(documentKey: string) {
		this.dialog.open(MarketChartBuilderComponent, {
			data: { documentKey },
			panelClass: 'g-mat-dialog-big',
			maxWidth: '100vw',
			minWidth: '60vw',
		});
	}
}
