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


    Highcharts: typeof Highcharts = Highcharts;
    chart;
    updateFromInput = true;
    chartCallback;
    chartOptions: any = {}; //  : Highcharts.Options


    private balance: number;
    private increase: number;
    private data = [];

    constructor() {
        const self = this;

        this.chartCallback = (chart) => {
            self.chart = chart;

            setTimeout(() => {
                console.log('Pie chart callback function', chart.series[0].data);
                let centerY = chart.series[0].center[1],
                    titleHeight = parseInt(chart.title.styles.fontSize);
                const percentageIncrease = roundNumber(100 * (this.balance - STARTING_PORTFOLIO) / STARTING_PORTFOLIO)

                const text1 = `$${stFormatLargeNumber(this.balance)}`;
                const text2 = `${percentageIncrease}%  <ion-icon name="trending-up-outline" class="st-price-icon ion-hide-sm-down"></ion-icon>`;

                chart.setTitle({
                    y: centerY + titleHeight / 2 + 10,
                    text: `<div>${text1}<br>${text2}</div>`,
                    useHTML: true
                });
            }, 1000);
        };
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('changes', changes);
        this.calculateIncrease();
        this.initChart();
    }

    private calculateIncrease() {
        this.balance = this.stPortfolioSnapshots ?
            this.stPortfolioSnapshots.portfolioCash + this.stPortfolioSnapshots.portfolioInvested : this.portfolioInvested + this.portfolioCash;
        //this.increase = roundNumber(100 * (this.balance - STARTING_PORTFOLIO) / STARTING_PORTFOLIO);
        this.increase = this.balance - STARTING_PORTFOLIO;
        console.log(this.balance, this.increase);

        this.data = this.increase > 0 ? [['Balance', this.balance], ['Profit', this.increase]] : [['Balance', this.balance]];
    }

    private initChart() {
        this.chartOptions = {
            chart: {
                type: 'pie',
                backgroundColor: 'transparent',
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                panning: {
                    enable: true
                },
                options3d: {
                    enabled: true,
                    alpha: 15,
                    beta: 0
                }
            },
            plotOptions: {
                pie: {
                    innerSize: '55%',
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
                text: 'Portfolio increase',
                align: 'center',
                verticalAlign: 'top',
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
