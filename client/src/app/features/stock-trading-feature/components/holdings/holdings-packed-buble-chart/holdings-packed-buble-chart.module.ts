import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import { HoldingsPackedBubleChartComponent } from './holdings-packed-buble-chart.component';

@NgModule({
	declarations: [HoldingsPackedBubleChartComponent],
	imports: [CommonModule, HighchartsChartModule],
	exports: [HoldingsPackedBubleChartComponent],
})
export class HoldingsPackedBubleChartModule {}
