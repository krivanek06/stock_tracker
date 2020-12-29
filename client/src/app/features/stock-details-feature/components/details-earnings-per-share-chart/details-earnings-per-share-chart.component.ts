import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges
} from '@angular/core';

import * as Highcharts from 'highcharts/highstock';
import HighchartsMoreModule from 'highcharts/highcharts-more';
import {EarningsChart} from '../../../../api/customGraphql.service';

HighchartsMoreModule(Highcharts);

interface DetailsEarnings {
    value: number;
    color: string;
}

@Component({
    selector: 'app-details-earnings-per-share-chart',
    templateUrl: './details-earnings-per-share-chart.component.html',
    styleUrls: ['./details-earnings-per-share-chart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsEarningsPerShareChartComponent implements OnInit, OnChanges {
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
            //this.actualEarnings = this.earnings.quarterly.map(data => data.actual);

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
                text: null
            },
            credits: {
                enabled: false
            },
            tooltip: {
                borderWidth: 1,
                shadow: true,
                useHTML: true,
                pointFormat: null,
                headerFormat: '<b>{point.x}</br> <span style="color:#008F88">{point.key}</span> : {point.y}</b>',
                backgroundColor: '#232323',
                style: {
                    fontSize: '13px',
                    color: '#D9D8D8',
                },
                shared: true
            },
            legend: {
                enabled: false,
                itemStyle: {
                    color: '#8f8f8f',
                },
            },
            xAxis: {
                labels: {
                    enabled: true,
                    style: {
                        color: '#cecece',
                        font: '12px Trebuchet MS, Verdana, sans-serif'
                    }
                },
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                categories: this.earnignsDates,
            },
            yAxis: {
                startOnTick: false,
                endOnTick: false,
                title: {
                    text: null
                },
                gridLineWidth: 1,
                minorTickInterval: 'auto',
                tickPixelInterval: 45,
                minorGridLineWidth: 0,
                labels: {
                    style: {
                        color: '#cecece',
                        font: '10px Trebuchet MS, Verdana, sans-serif'
                    }
                },
            },
            series: [{
                data: this.estimatedEarnings.map(y => {
                    return {y, z: 5, name: 'Earnings expected'};
                }),
                marker: {
                    fillColor: '#9d9d9d'
                }
            }, {
                data: this.actualEarnings.map(x => {
                    return {y: x.value, z: 5, name: 'Earnings actual', color: x.color};
                })
            }
            ]
        };
    }
}
