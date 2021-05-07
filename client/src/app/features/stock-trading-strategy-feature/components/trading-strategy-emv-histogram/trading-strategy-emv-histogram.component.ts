import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ChartType} from '@shared';
import {StTradingStrategyData} from '@core';

import * as Highcharts from 'highcharts/highstock';
import HC_histogram from 'highcharts/modules/histogram-bellcurve';

HC_histogram(Highcharts);

@Component({
    selector: 'app-trading-strategy-emv-histogram',
    templateUrl: './trading-strategy-emv-histogram.component.html',
    styleUrls: ['./trading-strategy-emv-histogram.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradingStrategyEMVHistogramComponent implements OnInit {
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

    private initChart() {
        this.chartOptions = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: ChartType.histogram,
                backgroundColor: 'transparent',
                panning: {
                    enable: true
                }
            },
            title: {
                text: 'Extended market verification histogram',
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
                labels: {
                    rotation: 0,
                    style: {
                        font: '10px Trebuchet MS, Verdana, sans-serif'
                    }
                },
                plotLines: [{
                    color: '#FF0000',
                    width: 3,
                    value: this.data.series[0].data[this.data.series[0].data.length - 1],
                    zIndex: 100
                }]
            },
            subtitle: false,
            scrollbar: {
                enabled: false,
            },
            credits: {
                enabled: false
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
                valueDecimals: 2,
                headerFormat: '<p style="color:#909592; font-size: 12px">50 day SMA change</p><br/>',
                pointFormatter: function() {
                    const numberOfChange = this.y;
                    const fromChange = this.x;
                    const toChange = this.x2;
                    return `${numberOfChange} changes, between ${fromChange}% - ${toChange}%`;
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
            series: [
                {
                    type: 'histogram',
                    xAxis: 0,
                    yAxis: 0,
                    baseSeries: 1,
                    showInLegend: false
                },
                {
                    type: 'line',
                    data: this.data.series[0].data,
                    id: '1',
                    visible: false,
                    showInLegend: false
                }
            ]
        };
    }

}
