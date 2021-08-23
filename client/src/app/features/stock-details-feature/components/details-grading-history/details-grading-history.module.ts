import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsGradingHistoryComponent} from "./details-grading-history.component";
import {IonicModule} from "@ionic/angular";
import {RelativeTimePipeModule} from "@shared";



@NgModule({
  declarations: [DetailsGradingHistoryComponent],
  imports: [
    CommonModule,
    IonicModule,
    RelativeTimePipeModule
  ],
  exports: [DetailsGradingHistoryComponent]
})
export class DetailsGradingHistoryModule { }
