import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RangeRatingSliderComponent} from "./range-rating-slider.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [RangeRatingSliderComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [RangeRatingSliderComponent]
})
export class RangeRatingSliderModule { }
