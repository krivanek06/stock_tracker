import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StTradingStrategyData, SymbolHistoricalPrices} from '@core';
import {ChartType} from '@shared';
import * as Highcharts from 'highcharts/highstock';

@Component({
    selector: 'app-trading-strategy-rpp-glb',
    templateUrl: './trading-strategy-rpp-glb.component.html',
    styleUrls: ['./trading-strategy-rpp-glb.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradingStrategyRppGlbComponent implements OnInit {

    @Input() heightPx = 400;
    @Input() dataRPP: StTradingStrategyData;
    @Input() dataGLB: StTradingStrategyData;
    @Input() historicalChartData: SymbolHistoricalPrices;

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
        this.addFlags();
    }

    private addFlags() {
        const zip = (a, b) => a.map((k, i) => [k, b[i]]);
        const rppFlags = zip(this.dataRPP.timestamp, this.dataRPP.series[0].data);
        const glbFlags = zip(this.dataGLB.timestamp, this.dataGLB.series[0].data);
        const names = ['Green line breakout', 'Resistance pivot point'];

        Array(glbFlags, rppFlags).forEach((data, i) => {
            this.chartOptions.series.push({
                type: 'scatter',
                data: data,
                name: names[i],
                color: Highcharts.getOptions().colors[i + 2]
            });
        });
    }

    private initChart() {
        this.chartOptions = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: ChartType.line,
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
                text: '',
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
                dateTimeLabelFormats: {
                    day: '%e of %b'
                },
                labels: {
                    rotation: 0,
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
                    return `<p><span style="color: ${this.color}; font-weight: bold">● ${this.series.name}: </span>${this.y}</p><br/>`;
                }
            },
            plotOptions: {
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
            series: [{
                name: 'price',
                data: this.historicalChartData.price,
            }]
        };
    }
}
