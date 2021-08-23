import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FinancialChartComponent} from "./financial-chart.component";
import {HighchartsChartModule} from "highcharts-angular";



@NgModule({
  declarations: [FinancialChartComponent],
  imports: [
    CommonModule,
    HighchartsChartModule
  ],
  exports: [FinancialChartComponent]
})
export class FinancialChartModule { }
