import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Series } from '@core';
import highcharts3D from 'highcharts/highcharts-3d';
import * as Highcharts from 'highcharts/highstock';
import NoDataToDisplay from 'highcharts/modules/no-data-to-display';
import { ChartType, GenericChartSeries, GenericChartSeriesData } from '../../../models';
import { stFormatLargeNumber } from '../../../utils';

NoDataToDisplay(Highcharts);
highcharts3D(Highcharts);

@Component({
	selector: 'app-generic-chart',
	templateUrl: './generic-chart.component.html',
	styleUrls: ['./generic-chart.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenericChartComponent implements OnInit, OnChanges {
	@Output() expandEmitter: EventEmitter<any> = new EventEmitter<any>();

	@Input() series!: GenericChartSeries[] | Series[]; // y-axis
	@Input() heightPx = 400;
	@Input() chartType: ChartType = ChartType.line;
	@Input() chartTitle = '';
	@Input() chartTitlePosition = 'left';
	@Input() showTimelineSlider = false;
	@Input() showTooltip = true;
	@Input() showDataLabel = false;
	@Input() categories: string[] = [];
	@Input() timestamp: number[] = [];
	@Input() enable3D = false;
	@Input() isPercentage?: boolean = false;
	@Input() showYAxis = true;
	@Input() showXAxis = true;
	@Input() sharedTooltip = true;
	@Input() additionalStyle: string = '';
	@Input() showCategoryNameWithValue = false;
	@Input() showCategoryNameWithValueDollar = false;

	// legend
	@Input() showLegend = false;
	@Input() enableLegendTogging = false;
	@Input() showLegendLatestValue = false;
	@Input() legendAlign: 'left' | 'center' | 'right' = 'left';
	@Input() legentLayout: 'vertical' | 'horizontal' = 'horizontal';
	@Input() legendVerticalAlign: 'top' | 'middle' | 'bottom' = 'top';
	@Input() floatingLegend = false;

	@Input() showExpandableButton = false;
	@Input() addFancyColoring = false;

	Highcharts: typeof Highcharts = Highcharts;
	chart: any;
	updateFromInput = true;
	chartCallback: any;
	chartOptions: any = {}; //  : Highcharts.Options
	constructor() {
		const self = this;

		this.chartCallback = (chart: any) => {
			self.chart = chart; // new Highcharts.Chart(this.chartOptions); //chart;
		};
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (this.addFancyColoring) {
			this.fancyColoring();
		}
		if (this.isPercentage) {
			this.series = this.series.map((s) => {
				if (!s || s.data.length === 0) {
					return s;
				}
				if (Number.isNaN(Number(s.data[0]))) {
					return {
						...s,
						data: s.data.map((d: any) => {
							return { ...d, y: d.y * 100 };
						}),
					};
				}
				return { ...s, data: s.data.map(d => !!d && typeof d === 'number' ? d * 100 : d) };

			});
			console.log(this.series)
		}

		this.initChart();

		// legend formatting
		if (this.showLegendLatestValue) {
			this.chartOptions.legend = {
				...this.chartOptions.legend,
				labelFormatter: function () {
					const value = stFormatLargeNumber(this.yData[this.yData.length - 1]);
					return '<span style="color:' + this.color + '">' + this.name + ': </span><b>' + value;
				},
			};
		}

		if (this.floatingLegend) {
			this.chartOptions.legend.floating = true;
			this.chartOptions.legend.layout = 'vertical';
			this.chartOptions.legend.x = -150;
			this.chartOptions.legend.y = 10;
			this.chartOptions.legend.align = 'center';
			this.chartOptions.legend.verticalAlign = 'middle';
		}

		if (this.chartType === ChartType.column) {
			this.chartOptions.xAxis.type = 'category';
			this.chartOptions.xAxis.labels.rotation = -20;
		} else if (this.chartType === ChartType.bar) {
			this.chartOptions.xAxis.type = 'category';
		} else if (this.chartType === ChartType.areaChange) {
			this.initAreaChange();
		} else if (this.chartType === ChartType.pie) {
			this.initPieChart();
			return;
		}

		if (this.categories.length > 0) {
			this.initCategories();
		}

		if (this.timestamp.length > 0) {
			this.initTimestamp();
		}

		if (this.isPercentage) {
			this.chartOptions.tooltip = {
				...this.chartOptions.tooltip,
				//headerFormat: '',
				pointFormat: '<span style="color:{point.color};">{point.name}</span>: <b>{point.y:.2f}%</b><br/>',
				pointFormatter: function () {
					const value = stFormatLargeNumber(this.y);
					const name = this.series.name; // this.point.name
					return `<span style="color:${this.color};">${name}</span>: <b>${value}%</b><br/>`
				}
			};
			if (this.showDataLabel) {
				this.chartOptions.plotOptions.series.dataLabels.format = '{point.y:.1f}%';
			}
		} else {
			if (this.chartType !== ChartType.bar) {
				this.chartOptions.tooltip = {
					...this.chartOptions.tooltip,
					pointFormatter: function () {
						const value = stFormatLargeNumber(this.y);
						return `<p><span style="color: ${this.color}; font-weight: bold">● ${this.series.name}: </span><span>${value}</span></p><br/>`;
					},
				};
			}
		}

		if (this.showCategoryNameWithValue) {
			const dollar = this.showCategoryNameWithValueDollar;
			const isPercentage = this.isPercentage;
			// tooltip
			this.chartOptions.tooltip = {
				...this.chartOptions.tooltip,
				headerFormat: '',
				pointFormatter: function () {
					const value = stFormatLargeNumber(this.y, false, dollar);
					const valueFormat = isPercentage ? `${value}%` : value;
					return `<p><span style="color: ${this.color}; font-weight: bold">● ${this.name}: </span><span>${valueFormat}</span></p><br/>`;
				},
			};
			const data = this.series[0].data as any as GenericChartSeriesData[];
			this.chartOptions.xAxis.categories = data.map((d) => d.name);
		}
	}

	ngOnInit() {
		setTimeout(() => {
			window.dispatchEvent(new Event('resize'));
		}, 300);
	}

	expand() {
		this.expandEmitter.emit();
	}

	private initCategories() {
		this.chartOptions.plotOptions.series.dataLabels.enabled = false;
		this.chartOptions.xAxis.categories = this.categories;
		this.chartOptions.xAxis.type = 'category';
		this.chartOptions.xAxis.labels.rotation = -20;
	}

	private initTimestamp() {
		this.chartOptions.plotOptions.series.dataLabels.enabled = false;
		this.chartOptions.xAxis.categories = this.timestamp;
		this.chartOptions.xAxis.type = 'datetime';
		this.chartOptions.xAxis.labels.rotation = -20;
		/*this.chartOptions.xAxis.labels.formatter = function() {
			return Highcharts.dateFormat('%d.%m.%Y', this.value);
		}*/
		this.chartOptions.xAxis.labels.format = '{value:%e %b %Y}';
	}

	private initChart() {
		this.chartOptions = {
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false,
				type: this.chartType === ChartType.areaChange ? ChartType.areaspline : this.chartType,
				backgroundColor: 'transparent',
				panning: {
					enable: true,
				},
				options3d: {
					enabled: this.enable3D,
					alpha: 45,
					beta: 0,
				},
			},
			navigator: {
				enabled: this.showTimelineSlider,
				xAxis: {
					labels: {
						formatter: function () {
							return '';
						},
					},
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
				visible: this.showYAxis,
				labels: {
					style: {
						font: '10px Trebuchet MS, Verdana, sans-serif',
					},
				},
			},
			xAxis: {
				visible: this.showXAxis,
				type: 'datetime',
				dateTimeLabelFormats: {
					day: '%e of %b',
				},
				labels: {
					rotation: 0,
					style: {
						font: '10px Trebuchet MS, Verdana, sans-serif',
					},
				},
			},
			title: {
				text: this.chartTitle,
				align: this.chartTitlePosition,
				style: {
					color: '#bababa',
					fontSize: '13px',
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
				enabled: this.showLegend,
				itemStyle: {
					color: '#acacac',
					cursor: this.enableLegendTogging ? 'pointer' : 'default',
				},
				itemHoverStyle: {
					color: this.enableLegendTogging ? '#241eaa' : '#acacac',
				},
				itemHiddenStyle: {
					color: this.enableLegendTogging ? '#494949' : '#acacac',
				},
				verticalAlign: this.legendVerticalAlign,
				align: this.legendAlign,
				layout: this.legentLayout,
			},
			accessibility: {
				point: {
					valueSuffix: '%',
				},
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
				shared: this.sharedTooltip,
				valueDecimals: 2,
				//headerFormat: '<p style="color:#909592; font-size: 12px">{point.x}</p><br/>',
			},
			rangeSelector: {
				enabled: false,
			},
			plotOptions: {
				line: {
					marker: {
						radius: 3,
					},
					lineWidth: 2,
					states: {
						hover: {
							lineWidth: 2,
						},
					},
					threshold: null,
				},
				column: {
					pointPadding: 0.2,
				},
				series: {
					headerFormat: null,
					style: {
						fontSize: '12px',
						color: '#D9D8D8',
					},
					borderWidth: 0,
					dataLabels: {
						color: '#cecece',
						enabled: this.showDataLabel,
						format: undefined,
					},
					enableMouseTracking: this.showTooltip,
					events: {
						legendItemClick: (e: any) => {
							if (!this.enableLegendTogging) {
								e.preventDefault(); // prevent toggling series visibility
							}
						},
					},
				},
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
				bar: {
					dataLabels: {
						enabled: true,
					},
					tooltip: {
						headerFormat: '',
						pointFormat: this.isPercentage
							? `<span style="color:{point.color};">{point.name}</span>: <b>{point.y:.2f}%</b><br/>`
							: '<span style="color:{point.color};">{point.name}</span>: <b>{point.y}</b><br/>',
					},
				},
				pie: {
					showInLegend: this.showLegend,
					allowPointSelect: false,
					depth: 35,
					minSize: 90,
					tooltip: {
						headerFormat: null,
						style: {
							fontSize: '12px',
							color: '#D9D8D8',
						},
						pointFormat: '<span style="color:{point.color}; font-weight: bold">{point.name}</span> :<b>{point.percentage:.1f} %</b><br/>',
					},
					dataLabels: {
						style: {
							fontSize: '12px',
							width: '90px',
						},
						format: '<span style="color: {point.color}">{point.name}</span><br>{point.percentage:.1f} %',
						//distance: -25,
						filter: {
							property: 'percentage',
							operator: '>',
							value: 4,
						},
					},
					colors: Highcharts.map(Highcharts.getOptions().colors as any[], function (color: any) {
						return {
							radialGradient: {
								cx: 0.5,
								cy: 0.3,
								r: 0.1,
							},
							stops: [
								[0, color],
								[1, Highcharts.color(color).brighten(-0.2).get('rgb')], // darken
							],
						};
					}),
				},
				areaspline: {
					threshold: null,
				},
			},
			series: this.series,
		};
	}

	private initAreaChange() {
		const data = this.series[0].data as number[];
		const oldestData = data[0] as number;
		const newestData = data[data.length - 1] as number;
		const color = oldestData > newestData ? '#ff1010' : '#0d920d';

		this.chartOptions = {
			...this.chartOptions,
			type: ChartType.areaspline,
			plotOptions: {
				...this.chartOptions.plotOptions,
				areaspline: {
					...this.chartOptions.plotOptions.area,
					lineColor: color,
					fillColor: {
						linearGradient: {
							x1: 0,
							y1: 0,
							x2: 0,
							y2: 1,
						},
						stops: [
							[0, color],
							[1, 'rgb(15 26 69)'],
						],
					},
				},
			},
		};
	}

	private initPieChart() {
		if (this.showDataLabel) {
			return;
		}
		this.chartOptions.legend.labelFormatter = function () {
			const value = this.percentage.toFixed(2);
			return '<span style="color:' + this.color + '">' + this.name + ': </span>(<b>' + value + '%)<br/>';
		};
	}

	private fancyColoring() {
		let count = 0;
		this.series = this.series.map((s) => {
			const data: GenericChartSeries = {
				name: s.name,
				data: s.data,
				color: {
					linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
					stops: [
						[0, (Highcharts.getOptions().colors as any[])[(count % 5) + 2]], // '#25aedd'
						[1, (Highcharts.getOptions().colors as any[])[count % 10]],
					],
				},
			} as GenericChartSeries;
			count += 1;
			return data;
		});
	}
}
