import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GenericChartComponent} from "./generic-chart.component";
import {HighchartsChartModule} from "highcharts-angular";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [GenericChartComponent],
  imports: [
    CommonModule,
    HighchartsChartModule,
    IonicModule
  ],
  exports: [GenericChartComponent]
})
export class GenericChartModule { }
