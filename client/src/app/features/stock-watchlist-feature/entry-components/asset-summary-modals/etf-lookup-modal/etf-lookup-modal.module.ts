import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FinancialChartContainerModule, GenericListModule, LoaderWrapperModule } from '@shared';
import { DetailsStockSummaryModule } from '@stock-details-feature';
import { EtfLookupModalComponent } from './etf-lookup-modal.component';

@NgModule({
	declarations: [EtfLookupModalComponent],
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
export class EtfLookupModalModule {}
