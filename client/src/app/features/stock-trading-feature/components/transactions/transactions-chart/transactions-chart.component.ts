import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {StPortfolioWeeklyChange} from '@core';

import * as Highcharts from 'highcharts/highstock';
import {stFormatLargeNumber} from '@shared';

@Component({
    selector: 'app-transactions-chart',
    templateUrl: './transactions-chart.component.html',
    styleUrls: ['./transactions-chart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsChartComponent implements OnInit, OnChanges {
    @Input() stPortfolioWeeklyChanges: StPortfolioWeeklyChange[];
    @Input() heightPx = 350;

    Highcharts: typeof Highcharts = Highcharts;
    chart;
    updateFromInput = true;
    chartCallback;
    chartOptions: any = {}; //  : Highcharts.Options
    constructor() {
        const self = this;

        this.chartCallback = (chart) => {
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
    }

    private initChart() {
        this.chartOptions = {
            chart: {
                /*plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,*/
                type: 'area',
                backgroundColor: 'transparent',
                panning: {
                    enable: true
                }
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
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: {
                    day: '%e of %b'
                },
                labels: {
                    style: {
                        font: '10px Trebuchet MS, Verdana, sans-serif'
                    }
                },
            },
            title: {
                text: 'Weekly transactions',
                align: 'left',
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
                enabled: true,
                verticalAlign: 'top',
                align: 'right',
                y: -8,
                itemStyle: {
                    color: '#acacac',
                    cursor: 'pointer'
                },
                itemHoverStyle: {
                    color: '#241eaa'
                },
                itemHiddenStyle: {
                    color: '#494949'
                }
            },
            tooltip: {
                padding: 11,
                enabled: true,
                backgroundColor: '#232323',
                style: {
                    fontSize: '12px',
                    color: '#D9D8D8',
                },
                shared: true,
                headerFormat: '<p style="color:#909592; font-size: 12px">{point.key}</p><br/>',
                pointFormatter: function() {
                    const value = stFormatLargeNumber(this.y);
                    return `<p><span style="color: ${this.series.color}; font-weight: bold">● Weekly ${this.series.name.toLowerCase()}: </span><span>$${value}</span></p><br/>`;
                }
            },
            plotOptions: {
                area: {
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
            series: [{
                color: '#f77e0a',
                fillColor: {
                    linearGradient: {
                        x1: 1,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, '#f77e0a'],
                        [1, 'transparent']
                    ]
                },
                name: 'Total buys',
                data: (() => {
                    return this.stPortfolioWeeklyChanges.map(point => [Date.parse(point.date), point.transactionsBuy.total]);
                })()
            }, {
                color: '#dd1ec2',
                fillColor: {
                    linearGradient: {
                        x1: 1,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, '#dd1ec2'],
                        [1, 'transparent']
                    ]
                },
                name: 'Total sells',
                data: (() => {
                    return this.stPortfolioWeeklyChanges.map(point => [Date.parse(point.date), point.transactionsSell.total]);
                })()
            }]
        };
    }

}
