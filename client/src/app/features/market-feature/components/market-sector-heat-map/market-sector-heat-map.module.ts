import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MarketSectorHeatMapComponent} from "./market-sector-heat-map.component";
import {HighchartsChartModule} from "highcharts-angular";



@NgModule({
  declarations: [MarketSectorHeatMapComponent],
  imports: [
    CommonModule,
    HighchartsChartModule
  ],
  exports: [MarketSectorHeatMapComponent]
})
export class MarketSectorHeatMapModule { }
