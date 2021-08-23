import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsRatingComponent} from "./details-rating.component";
import {IonicModule} from "@ionic/angular";
import {RecommendationDirectiveModule} from "@shared";



@NgModule({
  declarations: [DetailsRatingComponent],
  imports: [
    CommonModule,
    IonicModule,
    RecommendationDirectiveModule
  ],
  exports: [DetailsRatingComponent]
})
export class DetailsRatingModule { }
