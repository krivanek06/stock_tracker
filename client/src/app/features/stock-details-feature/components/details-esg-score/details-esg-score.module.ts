import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PriceCompareItemModule } from '@shared';
import { DetailsEsgScoreComponent } from './details-esg-score.component';

@NgModule({
	declarations: [DetailsEsgScoreComponent],
	imports: [CommonModule, PriceCompareItemModule],
	exports: [DetailsEsgScoreComponent],
})
export class DetailsEsgScoreModule {}
