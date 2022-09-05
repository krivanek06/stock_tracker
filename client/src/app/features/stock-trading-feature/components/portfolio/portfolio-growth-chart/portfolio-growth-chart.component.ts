import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { StPortfolioSnapshot } from '@core';
import { BREAK_POINTS, stFormatLargeNumber } from '@shared';
import * as Highcharts from 'highcharts';
import NoDataToDisplay from 'highcharts/modules/no-data-to-display';
NoDataToDisplay(Highcharts);

@Component({
	selector: 'app-portfolio-growth-chart',
	templateUrl: './portfolio-growth-chart.component.html',
	styleUrls: ['./portfolio-growth-chart.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioGrowthChartComponent implements OnInit, OnChanges {
	@Input() stPortfolioSnapshots: StPortfolioSnapshot[] = [];
	@Input() heightPx = 350;

	Highcharts: typeof Highcharts = Highcharts;
	chart: any;
	updateFromInput = true;
	chartCallback: any;
	chartOptions: any = {}; //  : Highcharts.Options
	constructor(private breakpointObserver: BreakpointObserver) {
		const self = this;

		this.chartCallback = (chart: any) => {
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

		this.breakpointObserver.observe([BREAK_POINTS.SM_DOWN]).subscribe((x) => {
			this.initChart(!x.matches);
		});
	}

	private initChart(showTitle = true) {
		this.chartOptions = {
			chart: {
				type: 'area',
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
			yAxis: {
				title: false,
				startOnTick: false,
				endOnTick: false,
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
			xAxis: {
				type: 'datetime',
				dateTimeLabelFormats: {
					day: '%e of %b',
				},
				labels: {
					style: {
						color: '#a4a4a4',
						font: '10px Trebuchet MS, Verdana, sans-serif',
					},
				},
			},
			title: {
				text: showTitle ? 'Portfolio growth' : 'Portfolio',
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
					const that = this as any;
					return `<span style="color: ${that.color};">${that.name}</span>`;
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
				shared: true,
				headerFormat: '<p style="color:#909592; font-size: 12px">{point.key}</p><br/>',
				pointFormatter: function () {
					const that = this as any;
					const value = stFormatLargeNumber(that.y);
					return `<p><span style="color: ${
						that.series.color
					}; font-weight: bold">● Portfolio ${that.series.name.toLowerCase()}: </span><span>$${value}</span></p><br/>`;
				},
			},
			plotOptions: {
				area: {
					marker: {
						enabled: true,
						radius: 3,
					},
					lineWidth: 2,
					states: {
						hover: {
							lineWidth: 4,
						},
					},
					threshold: null,
				},
			},
			series: [
				{
					color: '#00c4dd',
					fillColor: {
						linearGradient: {
							x1: 1,
							y1: 0,
							x2: 0,
							y2: 1,
						},
						stops: [
							[0, '#25aedd'],
							[1, 'transparent'],
						],
					},
					name: 'Balance',
					data: (() => {
						return this.stPortfolioSnapshots.map((point) => [Date.parse(point.date), point.portfolioCash + point.portfolioInvested]);
					})(),
				},
				{
					color: '#6b00fa',
					fillColor: {
						linearGradient: {
							x1: 1,
							y1: 0,
							x2: 0,
							y2: 1,
						},
						stops: [
							[0, '#7666fa'],
							[1, 'transparent'],
						],
					},
					name: 'Invested',
					data: (() => {
						return this.stPortfolioSnapshots.map((point) => [Date.parse(point.date), point.portfolioInvested]);
					})(),
				},
				{
					color: '#f24f18',
					fillColor: {
						linearGradient: {
							x1: 1,
							y1: 0,
							x2: 0,
							y2: 1,
						},
						stops: [
							[0, '#d35431'],
							[1, 'transparent'],
						],
					},
					name: 'Cash',
					data: (() => {
						return this.stPortfolioSnapshots.map((point) => [Date.parse(point.date), point.portfolioCash]);
					})(),
				},
			],
		};
	}
}
