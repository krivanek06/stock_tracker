import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PieChartWrapperComponent} from "./pie-chart-wrapper.component";
import {GenericChartModule} from "../generic-chart/generic-chart.module";



@NgModule({
  declarations: [PieChartWrapperComponent],
  imports: [
    CommonModule,
    GenericChartModule
  ],
  exports: [PieChartWrapperComponent]
})
export class PieChartWrapperModule { }
