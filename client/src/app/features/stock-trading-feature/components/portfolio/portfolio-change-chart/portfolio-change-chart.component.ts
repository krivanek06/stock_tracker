import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { StPortfolioSnapshot } from '@core';
import { ChartType, stFormatLargeNumber } from '@shared';
import * as Highcharts from 'highcharts';
import NoDataToDisplay from 'highcharts/modules/no-data-to-display';
NoDataToDisplay(Highcharts);

@Component({
	selector: 'app-portfolio-change-chart',
	templateUrl: './portfolio-change-chart.component.html',
	styleUrls: ['./portfolio-change-chart.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioChangeChartComponent implements OnInit, OnChanges {
	@Input() stPortfolioSnapshots: StPortfolioSnapshot[] = [];
	@Input() heightPx = 350;
	Highcharts: typeof Highcharts = Highcharts;
	chart: any;
	updateFromInput = true;
	chartCallback: any;
	chartOptions: any = {}; //  : Highcharts.Options
	private data: any[] = [];

	constructor() {
		const self = this;

		this.chartCallback = (chart: any) => {
			self.chart = chart;
		};
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.calculatePortfolioChange();
		this.initChart();
	}

	ngOnInit() {
		setTimeout(() => {
			window.dispatchEvent(new Event('resize'));
		}, 300);
	}

	private calculatePortfolioChange() {
		this.data = [];
		for (let i = 1; i < this.stPortfolioSnapshots.length; i++) {
			const current = this.stPortfolioSnapshots[i].portfolioCash + this.stPortfolioSnapshots[i].portfolioInvested;
			const before = this.stPortfolioSnapshots[i - 1].portfolioCash + this.stPortfolioSnapshots[i - 1].portfolioInvested;

			this.data.push([Date.parse(this.stPortfolioSnapshots[i].date), current - before, (current / 100) * before]);
		}
	}

	private initChart() {
		this.chartOptions = {
			chart: {
				type: ChartType.area,
				backgroundColor: 'transparent',
				panning: {
					enable: true,
				},
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
					style: {
						font: '10px Trebuchet MS, Verdana, sans-serif',
					},
				},
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
						color: '#a4a4a4',
						fontSize: '10px',
					},
				},
			},
			title: {
				text: 'Portfolio change',
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
				enabled: false,
			},
			plotOptions: {
				area: {
					marker: {
						enabled: true,
						radius: 3,
					},
					lineWidth: 4,
					states: {
						hover: {
							lineWidth: 5,
						},
					},
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
					const isPositive = that.y >= 0;
					const color = isPositive ? '#0d920d' : '#bf0000';
					const label = isPositive ? 'Profit' : 'Loss';
					const value = stFormatLargeNumber(that.y);
					return `<span style="font-weight: bold; color: ${color}">● ${label}: </span><span>$${value} </span><br/>`;
				},
			},
			series: [
				{
					zoneAxis: 'y',
					zones: [
						{
							value: 0,
							//color: '#FF0000',
							color: {
								linearGradient: { x1: 0, x2: 0, y1: 1, y2: 0 },
								stops: [
									[0, '#bf0000'],
									[1, 'transparent'],
								],
							},
						},
						{
							//color: '#0d920d'
							color: {
								linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
								stops: [
									[0, '#0d920d'],
									[1, 'transparent'],
								],
							},
						},
					],
					data: this.data,
				},
			],
		};
	}
}
