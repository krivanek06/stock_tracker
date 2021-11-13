import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import NoDataToDisplay from 'highcharts/modules/no-data-to-display';
import { ChartType, GenericChartSeries } from '../../../models';

NoDataToDisplay(Highcharts);

@Component({
	selector: 'app-series-comparison-chart',
	templateUrl: './series-comparison-chart.component.html',
	styleUrls: ['./series-comparison-chart.component.scss'],
})
export class SeriesComparisonChartComponent implements OnInit {
	@Input() series: GenericChartSeries[];
	@Input() heightPx = 400;
	@Input() title: string = 'Chart comparison';
	@Input() additionalStyle: string = '';

	Highcharts: typeof Highcharts = Highcharts;
	chart;
	updateFromInput = true;
	chartCallback;
	chartOptions: any = {}; //  : Highcharts.Options
	constructor() {
		const self = this;

		this.chartCallback = (chart) => {
			self.chart = chart; // new Highcharts.Chart(this.chartOptions); //chart;
		};
	}

	ngOnInit(): void {
		this.initChart();
		setTimeout(() => {
			window.dispatchEvent(new Event('resize'));
		}, 300);
	}

	private initChart() {
		this.chartOptions = {
			chart: {
				type: ChartType.line,
				backgroundColor: 'transparent',
				panning: {
					enable: true,
				},
			},
			rangeSelector: {
				selected: 4,
			},
			yAxis: {
				title: false,
				startOnTick: false,
				endOnTick: false,
				opposite: false,
				gridLineWidth: 1,
				gridLineColor: '#66666655',
				minorTickInterval: 'auto',
				tickPixelInterval: 40,
				minorGridLineWidth: 0,
				visible: true,
				labels: {
					formatter: function () {
						return (this.value > 0 ? ' + ' : '') + this.value + '%';
					},
					style: {
						font: '10px Trebuchet MS, Verdana, sans-serif',
					},
				},
				plotLines: [
					{
						value: 0,
						width: 2,
						color: 'silver',
					},
				],
			},
			noData: {
				style: {
					fontWeight: 'bold',
					fontSize: '15px',
					color: '#868686',
				},
			},
			xAxis: {
				type: 'datetime',
				dateTimeLabelFormats: {
					day: '%e of %b',
				},
				labels: {
					style: {
						fontSize: '10px',
					},
				},
			},
			title: {
				text: this.title,
				align: 'left',
				style: {
					color: '#bababa',
					fontSize: '12px',
				},
			},
			subtitle: false,
			scrollbar: {
				enabled: false,
			},
			credits: {
				enabled: false,
			},
			legend: {
				enabled: true,
				floating: true,
				verticalAlign: 'top',
				align: 'right',
				y: -8,
				itemStyle: {
					color: '#acacac',
					cursor: 'pointer',
					fontSize: '12px',
				},
				itemHoverStyle: {
					color: '#484d55',
				},
				itemHiddenStyle: {
					color: '#282828',
				},
				labelFormatter: function () {
					return `<span style="color: ${this.color};">${this.name}</span>`;
				},
			},
			plotOptions: {
				series: {
					compare: 'percent',
					showInNavigator: true,
				},
			},
			tooltip: {
				padding: 11,
				enabled: true,
				backgroundColor: '#232323',
				xDateFormat: '%A, %b %e, %Y',
				style: {
					fontSize: '12px',
					color: '#D9D8D8',
				},
				pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
				valueDecimals: 2,
				split: true,
			},
			series: this.series,
		};
	}
}
