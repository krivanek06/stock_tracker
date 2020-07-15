import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import * as Highcharts from 'highcharts/highstock';
import HighchartsMoreModule from 'highcharts/highcharts-more';
import {Earnings} from '../../../model/stockDetails';

HighchartsMoreModule(Highcharts);

@Component({
    selector: 'app-earnings-chart',
    templateUrl: './earnings-chart.component.html',
    styleUrls: ['./earnings-chart.component.scss'],
})
export class EarningsChartComponent implements OnInit, OnChanges {
    @Input() earnings: Earnings;


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
        console.log('EarningsChartComponent', this.earnings);
        this.initChart();
        /*setTimeout(() => {
            this.chart.reflow();
        }, 300);*/

        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }


    ngOnInit() {
        /*    setTimeout(() => {
                window.dispatchEvent(new Event('resize'));
            }, 300);*/
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
                backgroundColor: '#fff',
                borderWidth: 1,
                shadow: true,
                useHTML: true,
                shared: true,
                pointFormat: null,
                headerFormat: '<b>{point.key} : {point.y}</b>',
                style: {
                    color: '#5485aa',
                },
            },
            legend: {
                enabled: false
            },
            xAxis: {
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                categories: !this.earnings ? [] : this.earnings.dates,
            },

            yAxis: {
                startOnTick: false,
                endOnTick: false,
                labels: {
                    enabled: true
                },
                title: {
                    text: null
                },
            },
            series: [{
                data: !this.earnings ? [] : this.earnings.epsEst.map(x => ['Earnings expected', x, 5]),
                marker: {
                    fillColor: {
                        radialGradient: {cx: 0.4, cy: 0.3, r: 0.7},
                        stops: [
                            [0, 'rgba(255,255,255,0.65)'],
                            [1, 'rgba(255,255,255,0.65)']
                        ]
                    }
                }
            }, {
                data: !this.earnings ? [] : this.earnings.epsActual.map(x => ['Earnings actual', x, 5]),
                marker: {
                    fillColor: {
                        radialGradient: {cx: 0.4, cy: 0.3, r: 0.7},
                        stops: [
                            [0, 'rgba(255,255,255,0.5)'],
                            [1, 'rgba(0,20,82,0.37048322747067575)']
                        ]
                    }
                }
            }
            ]
        };
    }

}
