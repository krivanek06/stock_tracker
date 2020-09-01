import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import {ChartDataArray} from '../../../models/chartDataModel';
import {ChartType} from '../../../models/sharedModel';


@Component({
    selector: 'app-generic-chart',
    templateUrl: './generic-chart.component.html',
    styleUrls: ['./generic-chart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericChartComponent implements OnInit, OnChanges {

    @Input() series: any[]; // y-axis
    @Input() heightPx = 400;
    @Input() chartType: ChartType = ChartType.line;
    @Input() showLegend = false;
    @Input() chartTitle: string;
    @Input() showTimelineSlider = false;
    @Input() showYAxis = false;
    @Input() enableLegendTogging = false;

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

                opposite: false,
                gridLineWidth: 1,
                minorTickInterval: 'auto',
                tickPixelInterval: 40,
                minorGridLineWidth: 0,
                visible: this.showYAxis
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: {
                    day: '%e of %b'
                }
            },
            plotOptions: {
                series: {
                    events: {
                        legendItemClick: (e) => {
                            if (!this.enableLegendTogging) {
                                e.preventDefault(); // prevent toggling series visibility
                            }
                        },
                    },
                },
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
                    color: '#acacac',
                    cursor: this.enableLegendTogging ? 'pointer' : 'default',
                },
                itemHoverStyle: {
                    color: this.enableLegendTogging ? '#241eaa' : '#acacac'
                },
                itemHiddenStyle: {
                    color: this.enableLegendTogging ? '#494949' : '#acacac'
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
                valueDecimals: 2
                // pointFormat: '<span style="color:{point.color}; font-weight: bold">{series.name}</span> :<b>{point.y:.2f}</b><br/>'
            },


            rangeSelector: {
                enabled: false
            },
            series: this.series,
        };
    }

    private initColumnChart() {
        this.chartOptions = {
            ...this.chartOptions,
            xAxis: {
                type: 'category',
                labels: {
                    style: {
                        color: '#cecece',
                        font: '11px Trebuchet MS, Verdana, sans-serif'
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
                pointFormat: '<span style="color:{point.color}; font-weight: bold">{point.name}</span> : <b>{point.y:.2f}%</b><br/>'
            },
        };

    }

}
