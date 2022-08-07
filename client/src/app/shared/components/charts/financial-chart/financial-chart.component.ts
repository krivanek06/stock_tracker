import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import { stFormatDateWithHours } from '../../../utils';

// import HC_exporting from 'highcharts/modules/exporting';
/*
HIndicatorsAll(Highcharts);
HDragPanes(Highcharts);
HAnnotationsAdvanced(Highcharts);
HPriceIndicator(Highcharts);
HFullScreen(Highcharts);
HStockTools(Highcharts);
HighchartsMoreModule(Highcharts);*/

// HC_exporting(Highcharts)

@Component({
	selector: 'app-financial-chart',
	templateUrl: './financial-chart.component.html',
	styleUrls: ['./financial-chart.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinancialChartComponent implements OnInit, OnChanges {
	@Output() priceRangeEmitter: EventEmitter<number[]> = new EventEmitter<number[]>();

	@Input() price!: any[][];
	@Input() volume!: any[][];
	@Input() height = 350;
	@Input() showYAxis = true;
	@Input() financialChart!: boolean;

	// Define chart options
	Highcharts: typeof Highcharts = Highcharts;
	chart: any;
	updateFromInput = true;
	chartCallback: any;
	chartOptions = {}; //  : Highcharts.Options
	constructor() {
		// save chart into varaible
		const self = this;

		this.chartCallback = (chart: any) => {
			self.chart = chart;
		};
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (!!this.price && this.price.length > 0) {
			this.chartOptions = {};
			this.recalculatePriceRange(this.price);
			this.initChartSharedOptions();
			if (this.financialChart) {
				this.initFinancialChart();
			} else {
				this.initNonFinancialChart();
			}
		}
	}

	ngOnInit() {
		setTimeout(() => {
			window.dispatchEvent(new Event('resize'));
		}, 300);
	}

	recalculatePriceRange(priceRange: number[][] | number[]) {
		const start = priceRange[0];
		const end = priceRange[priceRange.length - 1];

		if (typeof start === 'number' && typeof end === 'number') {
			this.priceRangeEmitter.emit([start, end]);
		} else if (start instanceof Array) {
			const lastIndex = start.length - 1;
			const startingPrice = start[lastIndex];
			const endingPrice = (end as number[])[lastIndex];
			this.priceRangeEmitter.emit([startingPrice, endingPrice]);
		}
	}

	private initNonFinancialChart() {
		this.chartOptions = {
			...this.chartOptions,
			series: [
				{
					name: 'price',
					type: 'area',
					data: this.price,
					tooltip: {
						valueDecimals: 2,
					},
					fillColor: {
						linearGradient: {
							x1: 0,
							y1: 0,
							x2: 0,
							y2: 1,
						},
						stops: [
							[0, (Highcharts.getOptions().colors as any[])[0]],
							[
								1,
								Highcharts.color((Highcharts.getOptions().colors as any[])[0])
									.setOpacity(0)
									.get('rgba'),
							],
						],
					},
					threshold: null,
				},
			],
			yAxis: {
				crosshair: {
					label: {
						backgroundColor: '#232323',
						enabled: true, // shows pointed data on Y axis
					},
				},
				title: {
					text: '',
				},
				gridLineWidth: 1,
				gridLineColor: '#66666655',
				tickPixelInterval: 45,
				allowDecimals: true,
				opposite: false,
			},
		};
	}

	private initFinancialChart() {
		this.chartOptions = {
			...this.chartOptions,
			series: [
				{
					data: this.price,
					type: 'candlestick',
					yAxis: 0,
					name: 'price',
					tooltip: {
						valueDecimals: 2,
					},
				},
				{
					type: 'column',
					yAxis: 1,
					data: this.volume,
					color: '#f08800',
					name: 'volume',
				},
			],
			yAxis: [
				{
					crosshair: {
						label: {
							backgroundColor: '#232323',
							enabled: true, // shows pointed data on Y axis
						},
					},
					title: {
						text: '',
					},
					gridLineWidth: 1,
					//minorTickInterval: 'auto',
					gridLineColor: '#66666655',
					tickPixelInterval: 45,
					minorGridLineWidth: 0,
					allowDecimals: true,
					height: '75%',
					resize: {
						enabled: true,
					},
					startOnTick: true,
					endOnTick: true,
					opposite: false,
					visible: this.showYAxis,
					// min: 0
				},
				{
					title: {
						text: '',
					},
					gridLineWidth: 0,
					top: '75%',
					height: '25%',
					offset: 0,
					startOnTick: true,
					endOnTick: true,
					visible: true,
				},
			],
		};
	}

	private initChartSharedOptions() {
		this.chartOptions = {
			chart: {
				backgroundColor: 'transparent',
				panning: {
					enable: true,
				},
			},
			scrollbar: {
				enabled: false,
			},
			credits: {
				enabled: false,
			},
			legend: { enabled: false },
			plotOptions: {
				candlestick: {
					color: 'red',
					upColor: 'green',
				},
			},
			series: [],
			rangeSelector: {
				buttonTheme: {
					visibility: 'hidden',
				},
				labelStyle: {
					visibility: 'hidden',
				},
				enabled: false,
				inputEnabled: false,
			},
			navigator: {
				enabled: true, // show range selector
			},
			tooltip: {
				borderWidth: 1,
				padding: 11,
				// headerFormat: null,
				backgroundColor: '#232323',
				style: {
					fontSize: '12px',
					color: '#D9D8D8',
				},
				formatter: function () {
					const that = this as any;
					const formattedDate = stFormatDateWithHours(new Date(that.x));

					// No volume
					if (that.points?.length === 1) {
						const color = that.points[0].color;
						const price = Math.round(that.points[0].y * 100) / 100;
						return `<span style="color: #707070">${formattedDate}</span><br/>
                                <b style="color: ${color}">● Price: </b>$${price}`;
					}

					// volume + price
					const open = that.points[0].point.open;
					const closed = Math.round(that.points[0].point.close * 100) / 100;
					const closedDiff = Math.round((closed - open) * 100) / 100;
					const closedText = closedDiff > 0 ? '  +$' + closedDiff : '  -$' + Math.abs(closedDiff);
					const closedColor = open > closed ? 'red' : 'green';

					let volume = that.points[1].y;
					let counter = 0;
					while (volume > 1000) {
						volume = volume / 1000;
						counter += 1;
					}
					volume = Math.round(volume * 100) / 100;
					const volumeText = volume + ['', 'k', 'mil.', 'b'][counter];

					return `<span style="color: #707070">${formattedDate}</span> <br/>
                            <b style="color: ${closedColor}">● Price: </b>$${closed}  <span style="color: ${closedColor}">${closedText}</span><br/>
                            <b style="color: #f08800">● Volume: </b>${volumeText}`;
				},
				shared: true,
				xDateFormat: '%d-%m-%Y',
				valueDecimals: 2,
				positioner: function (width: any, height: any, point: any) {
					const position = {
						x: 0, // point.series.chart.plotLeft
						y: 0, // point.series.yAxis.top - chart.plotTop - 30 volume
					};
					return position;
				},
			},
			xAxis: {
				// type: 'datetime',
				range: 'max',
				labels: {
					enabled: true,
					style: {
						font: '10px Trebuchet MS, Verdana, sans-serif',
					},
				},
				events: {
					afterSetExtremes: (e: any) => this.recalculatePriceRange(e.target.series[0].processedYData),
				},
			},
			yAxis: [],
			responsive: {
				rules: [
					{
						condition: {
							maxWidth: 800,
						},
						chartOptions: {
							rangeSelector: {
								inputEnabled: false,
							},
						},
					},
				],
			},
		};
	}
}
