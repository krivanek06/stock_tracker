import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FinancialChartContainerModule, GenericListModule, LoaderWrapperModule } from '@shared';
import { DetailsStockSummaryModule } from '@stock-details-feature';
import { SymbolLookupModalComponent } from './symbol-lookup-modal.component';

@NgModule({
	declarations: [SymbolLookupModalComponent],
	imports: [
		CommonModule,
		MatTooltipModule,
		FinancialChartContainerModule,
		GenericListModule,
		DetailsStockSummaryModule,
		MatDialogModule,
		MatButtonModule,
		MatIconModule,
		LoaderWrapperModule,
	],
})
export class SymbolLookupModalModule {}
