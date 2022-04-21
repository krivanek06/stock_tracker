import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { DefaultImgDirectiveModule, ListSkeletonModule, PriceCompareItemModule, RecommendationDirectiveModule } from '@shared';
import { HoldingsTableComponent } from './holdings-table.component';

@NgModule({
	declarations: [HoldingsTableComponent],
	imports: [
		CommonModule,
		MatTableModule,
		DefaultImgDirectiveModule,
		PriceCompareItemModule,
		RecommendationDirectiveModule,
		ListSkeletonModule,
		MatButtonModule,
	],
	exports: [HoldingsTableComponent],
})
export class HoldingsTableModule {}
