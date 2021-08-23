import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MarketChartBuilderComponent} from "./market-chart-builder.component";
import {GenericChartModule} from "@shared";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [MarketChartBuilderComponent],
  imports: [
    CommonModule,
    GenericChartModule,
    IonicModule
  ],
  exports: [MarketChartBuilderComponent]
})
export class MarketChartBuilderModule { }
