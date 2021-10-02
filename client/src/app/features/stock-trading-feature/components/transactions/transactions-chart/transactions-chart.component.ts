import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { StTransactionSnapshot } from '@core';
import { stFormatLargeNumber } from '@shared';
import * as Highcharts from 'highcharts/highstock';
import NoDataToDisplay from 'highcharts/modules/no-data-to-display';
NoDataToDisplay(Highcharts);

@Component({
	selector: 'app-transactions-chart',
	templateUrl: './transactions-chart.component.html',
	styleUrls: ['./transactions-chart.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsChartComponent implements OnInit, OnChanges {
	@Input() stTransactionSnapshots: StTransactionSnapshot[];
	@Input() heightPx = 350;

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

	ngOnChanges(changes: SimpleChanges): void {
		this.initChart();
	}

	ngOnInit() {
		setTimeout(() => {
			window.dispatchEvent(new Event('resize'));
		}, 300);
	}

	private initChart() {
		this.chartOptions = {
			chart: {
				/*plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,*/
				type: 'area',
				backgroundColor: 'transparent',
				panning: {
					enable: true,
				},
			},
			yAxis: [
				{
					startOnTick: false,
					endOnTick: false,
					title: false,
					opposite: false,
					gridLineWidth: 1,
					minorTickInterval: 'auto',
					tickPixelInterval: 40,
					minorGridLineWidth: 0,
					visible: true,
					gridLineColor: '#66666655',
					labels: {
						style: {
							fontSize: '10px',
						},
					},
				},
				{
					title: false,
					startOnTick: false,
					endOnTick: false,

					opposite: true,
					gridLineWidth: 1,
					minorTickInterval: 'auto',
					tickPixelInterval: 40,
					minorGridLineWidth: 0,
					visible: true,
					gridLineColor: '#66666655',
					labels: {
						format: '{value:.2f}',
						style: {
							fontSize: '10px',
						},
					},
				},
			],
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
						font: '10px Trebuchet MS, Verdana, sans-serif',
					},
				},
			},
			title: {
				text: 'Transaction records',
				y: 35,
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
				verticalAlign: 'top',
				align: 'right',
				y: -8,
				itemStyle: {
					color: '#acacac',
					cursor: 'pointer',
					fontSize: '12px',
				},
				itemHoverStyle: {
					color: '#241eaa',
				},
				itemHiddenStyle: {
					color: '#494949',
				},
				labelFormatter: function () {
					return `<span style="color: ${this.color};">${this.name}</span>`;
				},
			},
			tooltip: {
				padding: 11,
				enabled: true,
				backgroundColor: '#232323',
				style: {
					fontSize: '12px',
					color: '#D9D8D8',
				},
				shared: true,
				headerFormat: '<p style="color:#909592; font-size: 12px">{point.key}</p><br/>',
				pointFormatter: function () {
					const value = stFormatLargeNumber(this.y);
					return `<p><span style="color: ${this.series.color}; font-weight: bold">● ${this.series.name}: </span><span>$${value}</span></p><br/>`;
				},
			},
			plotOptions: {
				area: {
					marker: {
						radius: 2,
					},
					lineWidth: 1,
					states: {
						hover: {
							lineWidth: 1,
						},
					},
					threshold: null,
				},
			},
			series: [
				{
					color: '#f77e0a',
					fillColor: {
						linearGradient: {
							x1: 1,
							y1: 0,
							x2: 0,
							y2: 1,
						},
						stops: [
							[0, '#f77e0a'],
							[1, 'transparent'],
						],
					},
					name: 'Transaction buys',
					data: (() => {
						return this.stTransactionSnapshots.map((point) => [Date.parse(point.date), point.transactionsBuy]);
					})(),
				},
				{
					color: '#dd1ec2',
					fillColor: {
						linearGradient: {
							x1: 1,
							y1: 0,
							x2: 0,
							y2: 1,
						},
						stops: [
							[0, '#dd1ec2'],
							[1, 'transparent'],
						],
					},
					name: 'Transaction sells',
					data: (() => {
						return this.stTransactionSnapshots.map((point) => [Date.parse(point.date), point.transactionsSell]);
					})(),
				},
				{
					name: 'Transaction fees',
					type: 'spline',
					yAxis: 1,
					data: (() => {
						return this.stTransactionSnapshots.map((point) => [Date.parse(point.date), point.transactionFees]);
					})(),
				},
			],
		};
	}
}
