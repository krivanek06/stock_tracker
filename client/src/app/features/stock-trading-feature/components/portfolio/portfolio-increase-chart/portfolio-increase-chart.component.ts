import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { StPortfolioSnapshotStarted } from '@core';
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
	@Input() stStartedPortfolioSnapshots: StPortfolioSnapshotStarted;
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
		const startedBalance = this.stStartedPortfolioSnapshots.portfolioCash + this.stStartedPortfolioSnapshots.portfolioInvested;
		const currentBalance = this.portfolioCash + this.portfolioInvested;
		//this.increase = roundNumber(100 * (this.balance - STARTING_PORTFOLIO) / STARTING_PORTFOLIO);
		const increase = currentBalance - startedBalance;

		this.data =
			increase > 0
				? [
						['Balance', currentBalance],
						['Profit', increase],
				  ]
				: [['Balance', currentBalance]];

		const percentageIncrease = roundNumber((100 * (currentBalance - startedBalance)) / startedBalance);
		const color = percentageIncrease ? '#199419' : '#711205';
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
					colors: ['#1c7da2', '#6bed31'],
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
