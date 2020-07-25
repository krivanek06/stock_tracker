import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as Highcharts from 'highcharts/highstock';

@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit, OnChanges {

    @Input() title: string;
    @Input() data: any[];
    @Input() heightPx = 350;

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
                type: 'column',
                backgroundColor: 'transparent',
            },
            title: {
                text: this.title
            },
          credits: {
            enabled: false
          },
            accessibility: {
                announceNewData: {
                    enabled: true
                }
            },
            xAxis: {
                type: 'category',
                labels: {
                    style: {
                        color: '#cecece',
                        font: '12px Trebuchet MS, Verdana, sans-serif'
                    }
                },
            },
            yAxis: {
                title: {
                    text: null,
                }

            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        color: '#cecece',
                        enabled: true,
                        format: '{point.y:.1f}%'
                    }
                }
            },

            tooltip: {
                headerFormat: null,
                backgroundColor: '#232323',
                style: {
                    fontSize: '14px',
                    color: '#D9D8D8',
                },
                shared: true,
                pointFormat: '<span style="color:{point.color}; font-weight: bold">{point.name}</span> :<b>{point.y:.2f}%</b><br/>'
            },

            series: [
                {
                    colorByPoint: true,
                    data: this.data,
                }
            ],
        };
    }


}
