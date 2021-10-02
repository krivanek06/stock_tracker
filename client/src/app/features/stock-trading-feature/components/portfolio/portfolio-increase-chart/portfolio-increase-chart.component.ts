import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { STARTING_PORTFOLIO } from '@core';
import { roundNumber, stFormatLargeNumber } from '@shared';
import * as Highcharts from 'highcharts';
import highcharts3D from 'highcharts/highcharts-3d';

highcharts3D(Highcharts);

@Component({
	selector: 'app-portfolio-increase-chart',
	templateUrl: './portfolio-increase-chart.component.html',
	styleUrls: ['./portfolio-increase-chart.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioIncreaseChartComponent implements OnInit, OnChanges {
	@Input() stStartedPortfoliobalance: number = STARTING_PORTFOLIO;
	@Input() portfolioInvested: number;
	@Input() portfolioCash: number;
	@Input() heightPx = 350;

	Highcharts: typeof Highcharts = Highcharts;
	chart;
	updateFromInput = true;
	chartCallback;
	chartOptions: any = {}; //  : Highcharts.Options

	private data = [];
	private displayTitle: string;

	constructor() {
		const self = this;

		this.chartCallback = (chart) => {
			self.chart = chart;
		};
	}

	ngOnInit() {}

	ngOnChanges(changes: SimpleChanges): void {
		this.calculateIncrease();
		this.initChart();
	}

	private calculateIncrease() {
		const currentBalance = this.portfolioCash + this.portfolioInvested;
		//this.increase = roundNumber(100 * (this.balance - STARTING_PORTFOLIO) / STARTING_PORTFOLIO);
		const increase = currentBalance - this.stStartedPortfoliobalance;

		this.data =
			increase > 0
				? [
						['Started balance', this.stStartedPortfoliobalance],
						['Profit', increase],
				  ]
				: [['Balance', currentBalance]];

		const percentageIncrease = roundNumber((100 * (currentBalance - this.stStartedPortfoliobalance)) / this.stStartedPortfoliobalance);

		const color = percentageIncrease > 0 ? '#199419' : '#d21414';
		this.displayTitle = `
            <span style="font-size: 16px; color: #f0f0f0;">$${stFormatLargeNumber(currentBalance)}</span><br/>
            <span style="color: ${color}">${stFormatLargeNumber(percentageIncrease)}%</span>
        `;
	}

	private initChart() {
		this.chartOptions = {
			chart: {
				type: 'pie',
				backgroundColor: 'transparent',
				options3d: {
					enabled: true,
					alpha: 15,
					beta: 0,
				},
			},
			plotOptions: {
				pie: {
					innerSize: '70%',
					colors: ['#2cabd6', '#6bed31'],
					depth: 35,
					size: this.heightPx - 50,
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
						enabled: false,
					},
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
				valueDecimals: 2,
				headerFormat: null,
				pointFormatter: function () {
					const name = this.name;
					const value = stFormatLargeNumber(this.y);
					return `<span style="font-weight: bold; color: ${this.color}">● ${name}: </span><span>$${value} </span><br/>`;
				},
			},
			title: {
				text: this.displayTitle,
				align: 'center',
				verticalAlign: 'middle',
				useHtml: true,
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
			series: [
				{
					data: this.data,
				},
			],
		};
	}
}
