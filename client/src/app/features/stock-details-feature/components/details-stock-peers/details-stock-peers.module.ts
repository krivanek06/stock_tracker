import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { DefaultImgDirectiveModule, ListSkeletonModule, NumberFormatterPipeModule, PriceCompareItemModule, TableHighLowRangeModule } from '@shared';
import { DetailsStockPeersComponent } from './details-stock-peers.component';

@NgModule({
	declarations: [DetailsStockPeersComponent],
	imports: [
		CommonModule,
		MatTableModule,
		PriceCompareItemModule,
		DefaultImgDirectiveModule,
		NumberFormatterPipeModule,
		TableHighLowRangeModule,
		ListSkeletonModule,
	],
	exports: [DetailsStockPeersComponent],
})
export class DetailsStockPeersModule {}
