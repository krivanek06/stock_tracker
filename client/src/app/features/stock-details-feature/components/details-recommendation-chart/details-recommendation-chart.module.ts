import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsRecommendationChartComponent} from "./details-recommendation-chart.component";
import {HighchartsChartModule} from "highcharts-angular";



@NgModule({
  declarations: [DetailsRecommendationChartComponent],
  imports: [
    CommonModule,
    HighchartsChartModule
  ],
  exports: [DetailsRecommendationChartComponent]
})
export class DetailsRecommendationChartModule { }
