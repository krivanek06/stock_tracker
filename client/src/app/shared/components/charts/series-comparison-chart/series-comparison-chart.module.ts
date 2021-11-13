import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import { SeriesComparisonChartComponent } from './series-comparison-chart.component';

@NgModule({
	declarations: [SeriesComparisonChartComponent],
	imports: [CommonModule, HighchartsChartModule],
	exports: [SeriesComparisonChartComponent],
})
export class SeriesComparisonChartModule {}
