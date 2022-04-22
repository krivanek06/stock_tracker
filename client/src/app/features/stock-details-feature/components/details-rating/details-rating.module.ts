import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RecommendationDirectiveModule } from '@shared';
import { DetailsRatingComponent } from './details-rating.component';

@NgModule({
	declarations: [DetailsRatingComponent],
	imports: [CommonModule, RecommendationDirectiveModule],
	exports: [DetailsRatingComponent],
})
export class DetailsRatingModule {}
