import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NumberFormatterPipeModule, PriceChangeItemModule, PriceCompareItemModule, RecommendationDirectiveModule } from '@shared';
import { DetailsStockSummaryComponent } from './details-stock-summary.component';

@NgModule({
	declarations: [DetailsStockSummaryComponent],
	imports: [
		CommonModule,
		NumberFormatterPipeModule,
		PriceCompareItemModule,
		PriceChangeItemModule,
		RecommendationDirectiveModule,
		MatIconModule,
		MatTooltipModule,
		MatButtonModule,
	],
	exports: [DetailsStockSummaryComponent],
})
export class DetailsStockSummaryModule {}
