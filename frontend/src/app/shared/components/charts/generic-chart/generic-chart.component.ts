import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as Highcharts from 'highcharts/highstock';

@Component({
    selector: 'app-generic-chart',
    templateUrl: './generic-chart.component.html',
    styleUrls: ['./generic-chart.component.scss'],
})
export class GenericChartComponent implements OnInit, OnChanges {

    @Input() series: any[]; // y-axis
    // @Input() timestamp: any[]; // x-axis
    @Input() heightPx = 400;
    @Input() chartType = 'line';
    @Input() showLegend = false;
    @Input() chartTitle: string;

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
        /*this.timestamp = this.timestamp.map(value => value * 1000);

        // zip timestamp and data into one array
        const zip = (arr1, arr2) => arr1.map((k, i) => [k, arr2[i]]);
        this.series = this.series.map(data => {
            return {name: data.name, data: zip(this.timestamp, data.data), tooltip: {valueDecimals: 2}};
        });*/

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
                type: this.chartType,
                backgroundColor: 'transparent',
                panning: {
                    enable: true
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
                },
                areaspline: {
                    threshold: null
                },
                line: {
                    marker: {
                        enabled: false
                    }
                }
            },
            title: {
                text: this.chartTitle,
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
                enabled: this.showLegend,
                itemStyle: {
                    color: '#acacac'
                }
            },
            tooltip: {
                outside: true,
                borderWidth: 1,
                // headerFormat: '<span>Date: { point.x } </span><br/>',
                backgroundColor: '#232323',
                style: {
                    fontSize: '11px',
                    color: '#D9D8D8',
                },
                shared: true,
                // pointFormat: '<span style="color:{point.color}; font-weight: bold">{series.name}</span> :<b>{point.y:.2f}</b><br/>'
            },

            yAxis: {
                title: false,
                startOnTick: false,
                endOnTick: false,
            },
            xAxis: {
                // categories: this.timestamp,
                type: 'datetime',
                dateTimeLabelFormats: {
                    day: '%e of %b'
                }
            },
            rangeSelector: {
                enabled: false
            },
            series: this.series,
        };
    }

}
