import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PortfolioIncreaseChartComponent} from "./portfolio-increase-chart.component";
import {HighchartsChartModule} from "highcharts-angular";



@NgModule({
  declarations: [PortfolioIncreaseChartComponent],
  imports: [
    CommonModule,
    HighchartsChartModule
  ],
  exports: [PortfolioIncreaseChartComponent]
})
export class PortfolioIncreaseChartModule { }
