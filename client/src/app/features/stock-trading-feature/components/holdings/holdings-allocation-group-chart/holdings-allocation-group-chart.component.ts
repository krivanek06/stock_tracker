import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StGroupHoldings } from '@core';
import { ChartType, stFormatLargeNumber } from '@shared';
import * as Highcharts from 'highcharts';

interface StGroupHoldingsHelper {
	numberOfUsers: number;
	totalValue: number;
	symbol: string;
}

@Component({
	selector: 'app-holdings-allocation-group-chart',
	templateUrl: './holdings-allocation-group-chart.component.html',
	styleUrls: ['./holdings-allocation-group-chart.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HoldingsAllocationGroupChartComponent implements OnInit {
	@Input() holdings: StGroupHoldings[] = [];
	@Input() heightPx = 350;
	@Input() showTitle = false;

	Highcharts: typeof Highcharts = Highcharts;
	chart;
	updateFromInput = true;
	chartCallback;
	chartOptions: any = {}; //  : Highcharts.Options
	private data: StGroupHoldingsHelper[] = [];

	constructor() {
		const self = this;

		this.chartCallback = (chart) => {
			self.chart = chart;
		};
	}

	ngOnInit() {
		this.data = this.holdings.map((h) => {
			return {
				symbol: h.holding.symbol,
				numberOfUsers: h.numberOfUsers,
				totalValue: h.holding.breakEvenPrice * h.holding.units,
			};
		});
		// .sort((a, b) => b.totalValue - a.totalValue)

		this.initChart();
	}

	private initChart() {
		this.chartOptions = {
			chart: {
				backgroundColor: 'transparent',
				panning: {
					enable: true,
				},
			},
			noData: {
				style: {
					fontWeight: 'bold',
					fontSize: '15px',
					color: '#868686',
				},
			},
			yAxis: [
				{
					title: {
						text: 'Number of users',
						style: {
							color: '#6076e7',
						},
					},
					opposite: true,
					gridLineWidth: 1,
					gridLineColor: '#66666655',
					minorGridLineWidth: 0,
					visible: true,
					labels: {
						style: {
							font: '10px Trebuchet MS, Verdana, sans-serif',
						},
					},
				},
				{
					title: {
						text: 'Value',
						style: {
							color: '#3dd0d7',
						},
					},
					opposite: false,
					gridLineWidth: 1,
					gridLineColor: '#66666655',
					minorGridLineWidth: 0,
					visible: true,
					labels: {
						style: {
							font: '10px Trebuchet MS, Verdana, sans-serif',
						},
					},
				},
			],
			xAxis: {
				categories: this.data.map((d) => d.symbol),
				labels: {
					enabled: true,
				},
			},
			title: {
				text: this.showTitle ? 'Holdings allocation' : '',
				align: 'left',
				x: 30,
				style: {
					color: '#acacac',
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
				enabled: false,
				align: 'left',
				verticalAlign: 'top',
				symbolPadding: 0,
				symbolWidth: 0,
				symbolHeight: 0,
				itemStyle: {
					cursor: 'default',
					textOverflow: null,
				},
				squareSymbol: false,
				useHTML: true,
				x: 30,
				labelFormatter: function () {
					const spans = this.userOptions.data
						.map((d) => {
							return `<span style="color: ${d.color}; margin-right: 16px; font-size: 12px">● ${d.name}</span>`;
						})
						.join(' ');
					return spans;
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
					const color = this.series.color;
					const label = this.series.name;
					const value = label === 'Value' ? '$' + stFormatLargeNumber(this.y) : this.y;
					return `<span style="font-weight: bold; color: ${color}">● ${label}: </span><span>${value} </span><br/>`;
				},
			},
			plotOptions: {
				series: {
					events: {
						legendItemClick: function (e) {
							e.preventDefault(); // disable legend click
						},
					},
				},
			},
			series: [
				{
					name: 'Value',
					type: ChartType.column,
					color: '#3dd0d7',
					yAxis: 1,
					data: this.data.map((d, index) => {
						return { name: d.symbol, y: d.totalValue, color: Highcharts.getOptions().colors[index % 9] };
					}),
				},
				{
					name: 'Number of users',
					type: ChartType.spline,
					color: '#6076e7',
					showInLegend: false,
					data: this.data.map((d) => d.numberOfUsers),
				},
			],
		};
	}
}
