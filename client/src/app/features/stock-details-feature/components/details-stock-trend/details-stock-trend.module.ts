import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DetailsStockTrendComponent } from './details-stock-trend.component';

@NgModule({
	declarations: [DetailsStockTrendComponent],
	imports: [CommonModule, MatIconModule],
	exports: [DetailsStockTrendComponent],
})
export class DetailsStockTrendModule {}
