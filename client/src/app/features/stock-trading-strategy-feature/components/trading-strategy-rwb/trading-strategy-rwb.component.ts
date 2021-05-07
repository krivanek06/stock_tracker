import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StTradingStrategyData} from '@core';

import * as Highcharts from 'highcharts/highstock';
import {ChartType} from '@shared';

@Component({
    selector: 'app-trading-strategy-rwb',
    templateUrl: './trading-strategy-rwb.component.html',
    styleUrls: ['./trading-strategy-rwb.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradingStrategyRwbComponent implements OnInit {
    @Input() heightPx = 400;
    @Input() data: StTradingStrategyData;

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


    ngOnInit() {
        this.initChart();
    }

    initChart() {
        this.chartOptions = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: ChartType.spline,
                backgroundColor: 'transparent',
                panning: {
                    enable: true
                }
            },
            navigator: {
                enabled: true,
                xAxis: {
                    labels: {
                        formatter: function() {
                            return '';
                        }
                    }
                }
            },
            title: {
                text: 'Red white blue',
                align: 'left',
                style: {
                    color: '#bababa',
                    fontSize: '12px'
                }
            },
            yAxis: {
                title: false,
                startOnTick: false,
                endOnTick: false,
                gridLineColor: '#66666655',
                opposite: false,
                gridLineWidth: 1,
                minorTickInterval: 'auto',
                tickPixelInterval: 40,
                minorGridLineWidth: 0,
                visible: true,
                labels: {
                    style: {
                        font: '10px Trebuchet MS, Verdana, sans-serif'
                    }
                },
            },
            xAxis: {
                visible: true,
                type: 'datetime',
                categories: this.data.timestamp,
                labels: {
                    rotation: -10,
                    format: '{value:%b %Y}',
                    style: {
                        font: '10px Trebuchet MS, Verdana, sans-serif'
                    }
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
                },
                verticalAlign: 'top',
                align: 'left',
                x: -20
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
                shared: true,
                xDateFormat: '%d.%m.%Y',
                valueDecimals: 2,
                pointFormatter: function() {
                    return `<p style="font-size: 11px"><span style="color: ${this.color}; font-weight: bold">● ${this.series.name}: </span>${this.y}</p><br/>`;
                }
            },
            plotOptions: {
                histogram: {
                    binWidth: 0.85
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
                        format: undefined
                    },
                    enableMouseTracking: true
                }
            },
            series: this.data.series
        };
    }

}
