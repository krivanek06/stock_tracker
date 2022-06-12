import { Component, Input, OnInit } from '@angular/core';
import { StHolding } from '@core';
import { ChartType, GenericChartSeries, GenericChartSeriesData, stFormatLargeNumber } from '@shared';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';

HighchartsMore(Highcharts);

@Component({
	selector: 'app-holdings-packed-buble-chart',
	templateUrl: './holdings-packed-buble-chart.component.html',
	styleUrls: ['./holdings-packed-buble-chart.component.scss'],
})
export class HoldingsPackedBubleChartComponent implements OnInit {
	@Input() holdings: StHolding[] = [];
	@Input() heightPx = 350;

	Highcharts: typeof Highcharts = Highcharts;
	chart: any;
	updateFromInput = true;
	chartCallback: any;
	chartOptions: any = {}; //  : Highcharts.Options

	constructor() {
		const self = this;

		this.chartCallback = (chart: any) => {
			self.chart = chart;
		};
	}

	ngOnInit(): void {
		const series = this.transformData();
		this.initChart(series);
	}

	private transformData(): GenericChartSeries[] {
		const accumulator: { [key: string]: GenericChartSeries } = {};

		this.holdings.forEach((h) => {
			const sector = h?.summary?.sector || h.summary.symbolType || 'Unknown category';

			// no key yet
			if (!(sector in accumulator)) {
				accumulator[sector] = { type: ChartType.packedbubble, name: sector, data: [] as GenericChartSeriesData[] } as GenericChartSeries;
			}

			// add data
			const data = { name: h.symbol, value: h.units * h.breakEvenPrice, y: null } as GenericChartSeriesData;
			accumulator[sector].data.push(data as any);
		});

		return Object.values(accumulator);
	}

	private initChart(series: GenericChartSeries[]) {
		this.chartOptions = {
			chart: {
				type: ChartType.packedbubble,
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
			title: {
				text: 'Holdings sector division',
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
					const that = this as any;
					const spans = that.userOptions.data
						.map((d: any) => {
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
				headerFormat: '<p style="color:#909592; font-size: 13px; font-weight: bold;">{series.name}</p><br/>',
				pointFormatter: function () {
					const that = this as any;
					const color = that.series.color;
					const label = that.name;
					const value = '$' + stFormatLargeNumber(that.y);
					return `<span style="font-weight: bold; color: ${color}">● ${label}: </span><span>${value} </span><br/>`;
				},
			},
			plotOptions: {
				packedbubble: {
					minSize: '35%',
					maxSize: '130%',
					zMin: 0,
					zMax: 1000,
					layoutAlgorithm: {
						splitSeries: false,
						gravitationalConstant: 0.001,
						seriesInteraction: true,
						dragBetweenSeries: true,
						parentNodeLimit: true,
					},
					dataLabels: {
						enabled: true,
						format: '{point.name}',

						style: {
							color: 'black',
							textOutline: 'none',
							fontWeight: 'normal',
						},
					},
				},
			},
			series: series,
		};
	}
}
