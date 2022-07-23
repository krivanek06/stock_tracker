import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { IonicModule } from '@ionic/angular';
import {
	DefaultImgDirectiveModule,
	ListSkeletonModule,
	NumberFormatterPipeModule,
	PriceCompareItemModule,
	SplitPipeModule,
	TableHighLowRangeModule,
} from '@shared';
import { MarketTopTableCryptoComponent } from './market-top-table-crypto.component';

@NgModule({
	declarations: [MarketTopTableCryptoComponent],
	imports: [
		CommonModule,
		IonicModule,
		PriceCompareItemModule,
		NumberFormatterPipeModule,
		SplitPipeModule,
		TableHighLowRangeModule,
		DefaultImgDirectiveModule,
		ListSkeletonModule,
		MatTableModule,
	],
	exports: [MarketTopTableCryptoComponent],
})
export class MarketTopTableCryptoModule {}
