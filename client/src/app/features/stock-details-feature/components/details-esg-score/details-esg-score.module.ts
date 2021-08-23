import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsEsgScoreComponent} from "./details-esg-score.component";
import {IonicModule} from "@ionic/angular";
import {PriceCompareItemModule} from "@shared";



@NgModule({
  declarations: [DetailsEsgScoreComponent],
  imports: [
    CommonModule,
    IonicModule,
    PriceCompareItemModule
  ],
  exports: [DetailsEsgScoreComponent]
})
export class DetailsEsgScoreModule { }
