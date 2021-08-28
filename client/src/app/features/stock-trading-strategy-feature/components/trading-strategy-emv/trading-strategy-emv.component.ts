import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StTradingStrategyData } from '@core';
import { ChartType, LodashService } from '@shared';
import * as Highcharts from 'highcharts/highstock';

@Component({
	selector: 'app-trading-strategy-emv',
	templateUrl: './trading-strategy-emv.component.html',
	styleUrls: ['./trading-strategy-emv.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TradingStrategyEmvComponent implements OnInit {
	@Input() heightPx = 400;
	@Input() data: StTradingStrategyData;

	Highcharts: typeof Highcharts = Highcharts;
	chart;
	updateFromInput = true;
	chartCallback;
	chartOptions: any = {}; //  : Highcharts.Options
	constructor() {
		const self = this;

		this.chartCallback = (chart) => {
			self.chart = chart;
		};
	}

	ngOnInit() {
		this.initChart();
	}

	private initChart() {
		this.chartOptions = {
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false,
				type: ChartType.line,
				backgroundColor: 'transparent',
				panning: {
					enable: true,
				},
			},
			title: {
				text: '',
				align: 'left',
				style: {
					color: '#bababa',
					fontSize: '12px',
				},
			},
			yAxis: {
				title: false,
				startOnTick: false,
				endOnTick: false,
				gridLineColor: '#66666655',
				opposite: false,
				gridLineWidth: 1,
				minorTickInterval: 'auto',
				tickPixelInterval: 40,
				minorGridLineWidth: 0,
				visible: true,
				labels: {
					style: {
						font: '10px Trebuchet MS, Verdana, sans-serif',
					},
				},
				plotLines: [
					{
						color: '#FF0000',
						width: 2,
						value: 10,
						zIndex: 100,
					},
				],
			},
			xAxis: {
				visible: true,
				type: 'datetime',
				categories: LodashService.takeRight(this.data.timestamp, 300),
				labels: {
					rotation: -10,
					format: '{value:%b %Y}',
					style: {
						font: '10px Trebuchet MS, Verdana, sans-serif',
					},
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
				enabled: false,
			},
			tooltip: {
				outside: true,
				borderWidth: 1,
				padding: 11,
				backgroundColor: '#232323',
				style: {
					fontSize: '12px',
					color: '#D9D8D8',
				},
				shared: true,
				valueDecimals: 2,
				headerFormat: '<p style="color:#909592; font-size: 12px">50 day SMA change</p><br/>',
				pointFormatter: function () {
					const date = new Date(this.category);
					const month = date.toLocaleString('en', { month: 'long' });
					const formattedDate = `${month} ${date.getDate()}, ${date.getFullYear()}`;

					const value = this.y;

					return `${formattedDate}: ${value}`;
				},
			},
			plotOptions: {
				series: {
					headerFormat: null,
					style: {
						fontSize: '12px',
						color: '#D9D8D8',
					},
					borderWidth: 0,
					dataLabels: {
						color: '#cecece',
						enabled: false,
						format: undefined,
					},
					enableMouseTracking: true,
				},
			},
			series: [
				{
					data: LodashService.takeRight(this.data.series[0].data, 300),
					name: this.data.series[0].name,
				},
			],
		};
	}
}
