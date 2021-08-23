import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HoldingsToSectorChartSeriesPipe} from "./holdings-to-sector-chart-series.pipe";



@NgModule({
  declarations: [HoldingsToSectorChartSeriesPipe],
  exports: [HoldingsToSectorChartSeriesPipe]
})
export class HoldingsToSectorChartSeriesPipeModule { }
