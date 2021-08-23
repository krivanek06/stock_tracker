import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PortfolioChangeChartComponent} from "./portfolio-change-chart.component";
import {HighchartsChartModule} from "highcharts-angular";



@NgModule({
  declarations: [PortfolioChangeChartComponent],
  imports: [
    CommonModule,
    HighchartsChartModule
  ],
  exports: [PortfolioChangeChartComponent]
})
export class PortfolioChangeChartModule { }
