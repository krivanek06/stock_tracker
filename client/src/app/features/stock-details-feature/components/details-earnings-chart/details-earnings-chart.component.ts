import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import * as Highcharts from 'highcharts/highstock';
import HighchartsMoreModule from 'highcharts/highcharts-more';
import {EarningsChart} from '@core';

HighchartsMoreModule(Highcharts);

interface DetailsEarnings {
    value: number;
    color: string;
}

@Component({
    selector: 'app-details-earnings-chart',
    templateUrl: './details-earnings-chart.component.html',
    styleUrls: ['./details-earnings-chart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsEarningsChartComponent implements OnInit, OnChanges {
    @Input() earnings: EarningsChart;


    private earnignsDates: string[] = [];
    private actualEarnings: DetailsEarnings[] = [];
    private estimatedEarnings: number[] = [];

    // chart options
    Highcharts: typeof Highcharts = Highcharts;
    chart;
    updateFromInput = false;
    chartCallback;
    chartOptions = {}; //  : Highcharts.Options
    constructor() {
        const self = this;

        this.chartCallback = (chart) => {
            self.chart = chart;
        };
    }


    ngOnChanges(changes: SimpleChanges): void {
        if (this.earnings) {
            this.earnignsDates = [...this.earnings.quarterly.map(data => data.date),
                this.earnings.currentQuarterEstimateDate + this.earnings.currentQuarterEstimateYear];

            for (let i = 0; i < this.earnings.quarterly.length; i++) {
                this.actualEarnings = [...this.actualEarnings, {
                    value: this.earnings.quarterly[i].actual,
                    color: this.earnings.quarterly[i].actual > this.earnings.quarterly[i].estimate ? 'green' : 'red'
                }];
            }
            this.estimatedEarnings = [...this.earnings.quarterly.map(data => data.estimate), this.earnings.currentQuarterEstimate];
        }

        this.initChart();


        setTimeout(() => {
            if (!!this.chart) {
                this.chart.reflow();
            }
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }


    ngOnInit() {
        this.initChart();
    }


    initChart() {
        this.chartOptions = {
            chart: {
                type: 'bubble',
                backgroundColor: 'transparent',
            },
            title: {
                text: '',
                align: 'left',
                style: {
                    color: '#bababa',
                    fontSize: '12px'
                }
            },
            credits: {
                enabled: false
            },
            tooltip: {
                padding: 11,
                outside: true,
                borderWidth: 1,
                enabled: true,
                backgroundColor: '#232323',
                style: {
                    fontSize: '12px',
                    color: '#D9D8D8',
                },
                shared: false,
                headerFormat: '<p style="color:#909592; font-size: 12px">{point.x}</p><br/>',
                pointFormatter: function() {
                    return `<p><span style="color: ${this.color}; font-weight: bold">● Earnings ${this.series.name.toLowerCase()}: </span><span>${this.y}</span></p><br/>`;
                },
            },
            legend: {
                enabled: false,
                itemStyle: {
                    color: '#8f8f8f',
                },
            },
            xAxis: {
                labels: {
                    rotation: -20,
                    enabled: true,
                    style: {
                        font: '10px Trebuchet MS, Verdana, sans-serif'
                    }
                },
                categories: this.earnignsDates,
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
                        fontSize: '10px'
                    }
                },
            },
            series: [{
                name: 'Expected',
                data: this.estimatedEarnings.map(y => {
                    return {y, z: 5, name: 'Expected', color: '#499d89'};
                }),
                marker: {
                    fillColor: '#9d9d9d'
                }
            }, {
                name: 'Actual',
                data: this.actualEarnings.map(x => {
                    return {y: x.value, z: 5, name: 'Actual', color: x.color};
                })
            }
            ]
        };
    }
}
