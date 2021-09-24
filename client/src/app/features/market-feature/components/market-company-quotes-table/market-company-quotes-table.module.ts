import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {
	DefaultImgDirectiveModule,
	ListSkeletonModule,
	NumberFormatterPipeModule,
	PriceChangeItemModule,
	PriceCompareItemModule,
	TableHighLowRangeModule,
} from '@shared';
import { MarketCompanyQuotesTableComponent } from './market-company-quotes-table.component';

@NgModule({
	declarations: [MarketCompanyQuotesTableComponent],
	imports: [
		CommonModule,
		IonicModule,
		TableHighLowRangeModule,
		PriceChangeItemModule,
		PriceCompareItemModule,
		NumberFormatterPipeModule,
		ListSkeletonModule,
		DefaultImgDirectiveModule,
	],
	exports: [MarketCompanyQuotesTableComponent],
})
export class MarketCompanyQuotesTableModule {}
