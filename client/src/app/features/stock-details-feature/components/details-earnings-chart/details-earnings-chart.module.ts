import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsEarningsChartComponent} from "./details-earnings-chart.component";
import {HighchartsChartModule} from "highcharts-angular";



@NgModule({
  declarations: [DetailsEarningsChartComponent],
  imports: [
    CommonModule,
    HighchartsChartModule
  ],
  exports: [DetailsEarningsChartComponent]
})
export class DetailsEarningsChartModule { }
