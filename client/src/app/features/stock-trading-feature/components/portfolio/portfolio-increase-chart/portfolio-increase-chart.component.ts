import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {StPortfolioSnapshot} from '@core';
import * as Highcharts from 'highcharts';
import {roundNumber, stFormatLargeNumber} from '@shared';
import {STARTING_PORTFOLIO} from '../../../models';
import highcharts3D from 'highcharts/highcharts-3d';

highcharts3D(Highcharts);


@Component({
    selector: 'app-portfolio-increase-chart',
    templateUrl: './portfolio-increase-chart.component.html',
    styleUrls: ['./portfolio-increase-chart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioIncreaseChartComponent implements OnInit, OnChanges {
    @Input() stPortfolioSnapshots: StPortfolioSnapshot;
    @Input() portfolioInvested: number;
    @Input() portfolioCash: number;
    @Input() heightPx = 350;
    @Input() startingBalance = STARTING_PORTFOLIO;


    Highcharts: typeof Highcharts = Highcharts;
    chart;
    updateFromInput = true;
    chartCallback;
    chartOptions: any = {}; //  : Highcharts.Options


    private balance: number;
    private increase: number;
    private data = [];
    private displayTitle: string;

    constructor() {
        const self = this;

        this.chartCallback = (chart) => {
            self.chart = chart;
        };
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.calculateIncrease();
        this.initChart();
    }

    private calculateIncrease() {
        this.balance = this.stPortfolioSnapshots ?
            this.stPortfolioSnapshots.portfolioCash + this.stPortfolioSnapshots.portfolioInvested : this.portfolioInvested + this.portfolioCash;
        //this.increase = roundNumber(100 * (this.balance - STARTING_PORTFOLIO) / STARTING_PORTFOLIO);
        this.increase = this.balance - this.startingBalance;

        this.data = this.increase > 0 ? [['Balance', this.balance], ['Profit', this.increase]] : [['Balance', this.balance]];

        const percentageIncrease = roundNumber(100 * (this.balance - this.startingBalance) / this.startingBalance);
        const color = percentageIncrease ? '#199419' : '#711205';
        this.displayTitle = `
            <span style="font-size: 16px; color: #f0f0f0;">$${stFormatLargeNumber(this.balance)}</span><br/>
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
                    beta: 0
                }
            },
            plotOptions: {
                pie: {
                    innerSize: '70%',
                    colors: [
                        '#1c7da2',
                        '#6bed31',
                    ],
                    depth: 35,
                    size: this.heightPx - 50
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
                        enabled: false
                    },
                }
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
                valueDecimals: 2
            },
            title: {
                text: this.displayTitle,
                align: 'center',
                verticalAlign: 'middle',
                useHtml: true,
                style: {
                    color: '#bababa',
                    fontSize: '12px'
                }
            },
            subtitle: false,
            scrollbar: {
                enabled: false,
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false,
            },
            series: [{
                data: this.data
            }]
        };
    }


}
