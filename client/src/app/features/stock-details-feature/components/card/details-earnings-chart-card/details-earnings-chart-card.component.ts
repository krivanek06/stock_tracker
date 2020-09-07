import {AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import * as Highcharts from 'highcharts/highstock';
import HighchartsMoreModule from 'highcharts/highcharts-more';
import {Earnings} from '../../../model/stockDetails';

HighchartsMoreModule(Highcharts);

@Component({
    selector: 'app-details-earnings-chart-card',
    templateUrl: './details-earnings-chart-card.component.html',
    styleUrls: ['./details-earnings-chart-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsEarningsChartCardComponent implements OnInit, OnChanges {
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
                    fontSize: '14px',
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
                categories: !this.earnings ? [] : this.earnings.dates,
            },

            yAxis: {
                startOnTick: false,
                endOnTick: false,
                title: {
                    text: null
                },
            },
            series: [{
                data: !this.earnings ? [] : this.earnings.epsEst.map(x => ['Earnings expected', x, 2]),
                marker: {
                    fillColor: {
                        radialGradient: {cx: 0.2, cy: 0.3, r: 0.7},
                        stops: [
                            [0, 'rgba(255,255,255,0.65)'],
                            [1, 'rgba(255,255,255,0.65)']
                        ]
                    }
                }
            }, {
                data: !this.earnings ? [] : this.earnings.epsActual.map(x => ['Earnings actual', x, 2]),
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
