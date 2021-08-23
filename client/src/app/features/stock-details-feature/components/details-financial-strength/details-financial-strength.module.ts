import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsFinancialStrengthComponent} from "./details-financial-strength.component";
import {NumberFormatterPipeModule} from "@shared";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [DetailsFinancialStrengthComponent],
  imports: [
    CommonModule,
    NumberFormatterPipeModule,
    IonicModule
  ],
  exports: [DetailsFinancialStrengthComponent]
})
export class DetailsFinancialStrengthModule { }
