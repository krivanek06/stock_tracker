import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TransactionsChartComponent} from "./transactions-chart.component";
import {HighchartsChartModule} from "highcharts-angular";



@NgModule({
  declarations: [TransactionsChartComponent],
  imports: [
    CommonModule,
    HighchartsChartModule
  ],
  exports: [TransactionsChartComponent]
})
export class TransactionsChartModule { }
