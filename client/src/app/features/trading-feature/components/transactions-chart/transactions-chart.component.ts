import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {StPortfolioWeeklyChange} from '../../../../api/customGraphql.service';

import * as Highcharts from 'highcharts/highstock';

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
        console.log(this.stPortfolioWeeklyChanges);
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
                type: 'column',
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
                labels: {
                    style: {
                        color: '#cecece',
                        font: '10px Trebuchet MS, Verdana, sans-serif'
                    }
                },
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: {
                    day: '%e of %b'
                }
            },
            title: {
                text: '',
                align: 'left',
                style: {
                    color: '#bababa'
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
            /*accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },*/
            /*tooltip: {
                outside: true,
                borderWidth: 1,
                backgroundColor: '#232323',
                style: {
                    fontSize: '12px',
                    color: '#D9D8D8',
                },
                shared: true,
                valueDecimals: 2
            },*/
            tooltip: {
                padding: 11,
                enabled: true,
                backgroundColor: '#232323',
                style: {
                    fontSize: '14px',
                    color: '#D9D8D8',
                },
                shared: true,
                headerFormat: '<p style="color:#909592; font-size: 12px">{point.key}</p><br/>',
                pointFormatter: function() {
                    return `<p><span style="color: ${this.series.color}; font-weight: bold">● ${this.series.name}: </span><span>$${this.y}</span></p><br/>`;
                }
            },


            /*rangeSelector: {
                enabled: false
            },*/
            series: [{
                color: '#0d920d',
                name: 'Buy',
                data: (() => {
                    return this.stPortfolioWeeklyChanges.map(point => [Date.parse(point.date), point.transactionsBuy.total]);
                })()
            }, {
                color: '#ff1010',
                name: 'Sell',
                data: (() => {
                    return this.stPortfolioWeeklyChanges.map(point => [Date.parse(point.date), point.transactionsSell.total]);
                })()
            }]
        };
    }

}
