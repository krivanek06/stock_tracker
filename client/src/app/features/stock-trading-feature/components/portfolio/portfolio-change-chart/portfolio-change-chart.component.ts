import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {StPortfolio, StPortfolioWeeklyChange} from '../../../../../api/customGraphql.service';

import * as Highcharts from 'highcharts/highstock';
import {stFormatLargeNumber} from '../../../../../shared/utils/shared-functions.functions';

@Component({
    selector: 'app-portfolio-change-chart',
    templateUrl: './portfolio-change-chart.component.html',
    styleUrls: ['./portfolio-change-chart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioChangeChartComponent implements OnInit, OnChanges {

    @Input() stPortfolios: StPortfolio[];
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
                gridLineColor: '#66666655',
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
                type: 'datetime',
                dateTimeLabelFormats: {
                    day: '%e of %b'
                },
                labels: {
                    style: {
                        fontSize: '10px'
                    }
                },
            },
            title: {
                text: 'Portfolio change',
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
                enabled: false,
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
                    const isPositive = this.y >= 0;
                    const color = isPositive ? '#0d920d' : '#bf0000';
                    const label = isPositive ? 'Gains' : 'Loses';
                    const value = stFormatLargeNumber(this.y);
                    return `<span style="font-weight: bold; color: ${color}">● Weekly ${label}: </span><span>$${value} </span><br/>`;
                }
            },
            series: [{
                zoneAxis: 'y',
                zones: [{
                    value: 0,
                    //color: '#FF0000',
                    color: {
                        linearGradient: { x1: 0, x2: 0, y1: 1, y2: 0 },
                        stops: [
                            [0, '#bf0000'],
                            [1, 'transparent']
                        ]
                    }
                }, {
                    //color: '#0d920d'
                    color: {
                        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                        stops: [
                            [0, '#0d920d'],
                            [1, 'transparent']
                        ]
                    }
                }],
                data: (() => {
                    return this.stPortfolios.map(point => [
                        Date.parse(point.date),
                        point.portfolioWeeklyGrowth,
                        {change: point.portfolioWeeklyChange}
                    ]);
                })()
            }]
        };
    }

}
