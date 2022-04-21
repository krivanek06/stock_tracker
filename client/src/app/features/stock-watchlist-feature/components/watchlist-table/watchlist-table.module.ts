import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {
	DefaultImgDirectiveModule,
	ListSkeletonModule,
	NumberFormatterPipeModule,
	PriceChangeItemModule,
	PriceCompareItemModule,
	RecommendationDirectiveModule,
	TableHighLowRangeModule,
} from '@shared';
import { WatchlistTableComponent } from './watchlist-table.component';

@NgModule({
	declarations: [WatchlistTableComponent],
	imports: [
		CommonModule,
		MatTableModule,
		DefaultImgDirectiveModule,
		PriceCompareItemModule,
		NumberFormatterPipeModule,
		TableHighLowRangeModule,
		RecommendationDirectiveModule,
		ListSkeletonModule,
		PriceChangeItemModule,
	],
	exports: [WatchlistTableComponent],
})
export class WatchlistTableModule {}
