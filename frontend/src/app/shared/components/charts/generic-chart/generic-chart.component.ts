import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import {ChartDataArray} from '../../../../features/stock-data-feature/model/chartDataModel';
import {ChartType} from '../../../models/sharedModel';


@Component({
    selector: 'app-generic-chart',
    templateUrl: './generic-chart.component.html',
    styleUrls: ['./generic-chart.component.scss'],
})
export class GenericChartComponent implements OnInit, OnChanges {

    @Input() series: any[]; // y-axis
    @Input() heightPx = 400;
    @Input() chartType: ChartType = ChartType.line;
    @Input() showLegend = false;
    @Input() chartTitle: string;
    @Input() showTimelineSlider = false;

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

    addData(chartData: ChartDataArray): void {
        this.chart.addSeries(chartData);
        // this.chart.redraw();
    }

    ngOnChanges(changes: SimpleChanges): void {

        this.initChart();

        if (this.chartType === ChartType.column) {
            this.initColumnChart();
        }
        /*if (this.chartType === ChartType.variablepie) {
            this.initVariablePieChart();
        }*/
    }

    ngOnInit() {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);


    }


    private initChart() {
        this.chartOptions = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: this.chartType,
                backgroundColor: 'transparent',
                panning: {
                    enable: true
                }
            },
            yAxis: {
                title: false,
                startOnTick: false,
                endOnTick: false,
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: {
                    day: '%e of %b'
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
                pie: {
                    showInLegend: this.showLegend,
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '', // <b>{point.name}</b><br>{point.percentage:.1f} %
                        distance: -50,
                        filter: {
                            property: 'percentage',
                            operator: '>',
                            value: 4
                        }
                    },
                    tooltip: {
                        headerFormat: null,
                        pointFormat: '<span style="color:{point.color}; font-weight: bold">{point.name}</span> :<b>{point.percentage:.1f} %</b><br/>'
                    },
                },
                areaspline: {
                    threshold: null
                },
                line: {
                    marker: {
                        enabled: false
                    },
                    tooltip: {
                        pointFormat: '<span style="color:{point.color}; font-weight: bold">{series.name}</span> :<b>{point.y:.2f}</b><br/>'
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
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            tooltip: {
                outside: true,
                borderWidth: 1,
                // headerFormat: '<span>Date: { point.x } </span><br/>',
                backgroundColor: '#232323',
                style: {
                    fontSize: '12px',
                    color: '#D9D8D8',
                },
                shared: true,
                // pointFormat: '<span style="color:{point.color}; font-weight: bold">{series.name}</span> :<b>{point.y:.2f}</b><br/>'
            },


            rangeSelector: {
                enabled: false
            },
            series: this.series,
        };
    }

    /* private initVariablePieChart() {
         this.chartOptions = {
             ...this.chartOptions,
             tooltip: {
                 headerFormat: null,
                 backgroundColor: '#232323',
                 style: {
                     fontSize: '14px',
                     color: '#D9D8D8',
                 },
                 // shared: true,
                 pointFormat: '<span style="color:{point.color}; font-weight: bold">\u25CF {point.name}</span><br/>' +
                     'Amount: <b>{point.y} ({point.percentage:.1f} %)</b><br/>'
             },
             accessibility: {
                 point: {
                     valueSuffix: '%'
                 }
             },
             plotOptions: {
                 variablepie: {
                     // allowPointSelect: true,
                     cursor: 'pointer',
                     // colors: [, ''],
                     dataLabels: {
                         enabled: true,
                         format: '<b>{point.name}</b>',
                         style: {
                             fontSize: '13px',
                             color: '#e5e5e5',
                         },
                         filter: {
                             property: 'percentage',
                             operator: '>',
                             value: 4
                         }
                     }
                 }
             },
         };
     }*/

    private initColumnChart() {
        this.chartOptions = {
            ...this.chartOptions,
            xAxis: {
                type: 'category',
                labels: {
                    style: {
                        color: '#cecece',
                        font: '12px Trebuchet MS, Verdana, sans-serif'
                    }
                },
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
        };

    }

}
