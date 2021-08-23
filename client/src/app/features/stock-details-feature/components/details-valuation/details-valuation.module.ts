import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsValuationComponent} from "./details-valuation.component";
import {IonicModule} from "@ionic/angular";
import {NumberFormatterPipeModule} from "@shared";



@NgModule({
  declarations: [DetailsValuationComponent],
  imports: [
    CommonModule,
    IonicModule,
    NumberFormatterPipeModule
  ],
  exports: [DetailsValuationComponent]
})
export class DetailsValuationModule { }
