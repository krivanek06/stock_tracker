import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GaugeChartComponent} from "./gauge-chart.component";
import {HighchartsChartModule} from "highcharts-angular";



@NgModule({
  declarations: [GaugeChartComponent],
  imports: [
    CommonModule,
    HighchartsChartModule
  ],
  exports: [GaugeChartComponent]
})
export class GaugeChartModule { }
