import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PortfolioGrowthChartComponent} from "./portfolio-growth-chart.component";
import {HighchartsChartModule} from "highcharts-angular";



@NgModule({
  declarations: [PortfolioGrowthChartComponent],
  imports: [
    CommonModule,
    HighchartsChartModule
  ],
  exports: [PortfolioGrowthChartComponent]
})
export class PortfolioGrowthChartModule { }
