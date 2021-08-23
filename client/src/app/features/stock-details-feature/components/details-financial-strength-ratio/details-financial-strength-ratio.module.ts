import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsFinancialStrengthRatioComponent} from "./details-financial-strength-ratio.component";
import {NumberFormatterPipeModule} from "@shared";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [DetailsFinancialStrengthRatioComponent],
  imports: [
    CommonModule,
    NumberFormatterPipeModule,
    IonicModule
  ],
  exports: [DetailsFinancialStrengthRatioComponent]
})
export class DetailsFinancialStrengthRatioModule { }
