import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IonicModule } from '@ionic/angular';
import { FinancialChartContainerModule, GenericListModule, StockSummaryContainerModule } from '@shared';
import { SymbolLookupModalComponent } from './symbol-lookup-modal.component';

@NgModule({
	declarations: [SymbolLookupModalComponent],
	imports: [
		CommonModule,
		IonicModule,
		MatTooltipModule,
		FinancialChartContainerModule,
		GenericListModule,
		StockSummaryContainerModule,
		MatDialogModule,
	],
})
export class SymbolLookupModalModule {}
