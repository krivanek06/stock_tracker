import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as Highcharts from 'highcharts/highstock';

@Component({
    selector: 'app-line-chart',
    templateUrl: './line-chart.component.html',
    styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit, OnChanges {

    @Input() series: any[];
    @Input() timestamp: any[];
    @Input() heightPx = 400;

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
        this.timestamp = this.timestamp.map(value => value * 1000);

        // zip timestamp and data into one array
        const zip = (arr1, arr2) => arr1.map((k, i) => [k, arr2[i]]);
        this.series = this.series.map(data => {
            return {name: data.name, data: zip(this.timestamp, data.data), tooltip: {valueDecimals: 2}};
        });

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
                type: 'line',
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
            }
          },
            title: false,

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
                title: false
            },
            xAxis: {
                // categories: this.timestamp,
                type: 'datetime',
                dateTimeLabelFormats: {
                    day: '%e of %b'
                }
            },
            /*responsive: {
                rules: [{
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'top'
                        }
                    }
                }]
            },*/
            rangeSelector: {
                enabled: false
            },
            series: this.series,
        };
    }

}
