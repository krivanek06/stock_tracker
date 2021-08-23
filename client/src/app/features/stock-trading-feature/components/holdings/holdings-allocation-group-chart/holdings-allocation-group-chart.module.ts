import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HoldingsAllocationGroupChartComponent} from "./holdings-allocation-group-chart.component";
import {HighchartsChartModule} from "highcharts-angular";



@NgModule({
  declarations: [HoldingsAllocationGroupChartComponent],
  imports: [
    CommonModule,
    HighchartsChartModule
  ],
  exports: [HoldingsAllocationGroupChartComponent]
})
export class HoldingsAllocationGroupChartModule { }
