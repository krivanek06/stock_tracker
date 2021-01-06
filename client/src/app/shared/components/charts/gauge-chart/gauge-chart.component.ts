import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import * as Highcharts from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);


@Component({
    selector: 'app-gauge-chart',
    templateUrl: './gauge-chart.component.html',
    styleUrls: ['./gauge-chart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GaugeChartComponent implements OnInit, OnChanges {
    @Input() startingPoint: number;
    @Input() endingPoint: number;
    @Input() currentPoint: number;
    @Input() displayValue: any;
    @Input() height = 350;
    @Input() tooltipName = 'Current value';


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
    }

    ngOnInit() {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }


    initChart() {
        this.chartOptions = {
            chart: {
                backgroundColor: 'transparent',
                type: 'solidgauge'
            },

            title: null,
            pane: {
                center: ['50%', '85%'],
                size: '140%',
                startAngle: -90,
                endAngle: 90,
                background: {
                    backgroundColor:
                        Highcharts.defaultOptions.legend.backgroundColor || '#FFF',
                    innerRadius: '60%',
                    outerRadius: '100%',
                    shape: 'arc'
                }
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: true,
                headerFormat: null,
                backgroundColor: '#232323',
                style: {
                    fontSize: '14px',
                    color: '#D9D8D8',
                },
                shared: true,
                formatter: (tooltip) => {
                    return `<span style="color: #008F88; font-weight: bold">${this.tooltipName}</span> : <b>${this.displayValue}%</b>`;
                }
            },

            // the value axis
            yAxis: {
                min: this.startingPoint,
                max: this.endingPoint,
                stops: [
                    [0.1, '#DF5353'], // red
                    [0.25, '#FF6600'], // orange
                    [0.50, '#DDDF0D'], // yellow
                    [0.70, '#99FF33'], // light green
                    [0.85, '#55BF3B'] // green
                ],
                lineWidth: 0,
                tickWidth: 0,
                minorTickInterval: null,
                tickAmount: 2,
                title: {
                    y: -70,
                    text: null // speed
                },
                labels: {
                    y: 16
                }
            },
            credits: {
                enabled: false
            },

            series: [{
                name: null,
                data: [this.currentPoint],
                dataLabels: {
                    formatter: (tooltip) => {
                        return `<span style="color: grey; font-size: 14px">${this.displayValue}%</span>`;
                    }
                    /* format:
                         '<div styles="text-align:center">' +
                         '<span styles="font-size:20px">y</span><br/>'+
                         '</div>'*/
                },
                tooltip: {
                    valueSuffix: null, // km/h
                }
            }],

            plotOptions: {
                solidgauge: {
                    dataLabels: {
                        y: 5,
                        borderWidth: 0,
                        useHTML: true
                    }
                }
            }
        };
    }

}
