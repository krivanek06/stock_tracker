import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
	DefaultImgDirectiveModule,
	ListSkeletonModule,
	NumberFormatterPipeModule,
	PriceChangeItemModule,
	PriceCompareItemModule,
	TableHighLowRangeModule,
	TruncateModule,
} from '@shared';
import { MarketCompanyQuotesTableComponent } from './market-company-quotes-table.component';

@NgModule({
	declarations: [MarketCompanyQuotesTableComponent],
	imports: [
		CommonModule,
		TableHighLowRangeModule,
		PriceChangeItemModule,
		PriceCompareItemModule,
		NumberFormatterPipeModule,
		ListSkeletonModule,
		DefaultImgDirectiveModule,
		MatTableModule,
		MatTooltipModule,
		TruncateModule,
	],
	exports: [MarketCompanyQuotesTableComponent],
})
export class MarketCompanyQuotesTableModule {}
