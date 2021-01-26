import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ChartType} from '../../../models/sharedModel';

import * as Highcharts from 'highcharts/highstock';
import highcharts3D from 'highcharts/highcharts-3d';

highcharts3D(Highcharts);

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
    @Input() chartTitlePosition = 'left';
    @Input() showTimelineSlider = false;
    @Input() showYAxis = false;
    @Input() showXAxis = true;
    @Input() enableLegendTogging = false;
    @Input() showTooltip = true;
    @Input() showDataLabel = false;
    @Input() categories: string[];
    @Input() enable3D = false;

    Highcharts: typeof Highcharts = Highcharts;
    chart;
    updateFromInput = false;
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

        if (this.chartType === ChartType.column) {
            this.initColumnChart();
        }
        if (this.chartType === ChartType.bar) {
            this.initBarChart();
        }
        if (this.chartType === ChartType.areaChange) {
            this.initAreaChange();
        }
        if (this.chartType === ChartType.pieSemiCircle) {
            this.initSemiCirclePieChart();
        }
        if (this.chartType === ChartType.pie) {
            this.initPieChart();
        }

        if (this.categories) {
            this.chartOptions.xAxis.categories = this.categories;
            this.chartOptions.plotOptions.series.dataLabels.enabled = false;
            this.chartOptions = {
                ...this.chartOptions,
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
            };
        }

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
                type: this.chartType === ChartType.areaChange ? ChartType.areaspline : this.chartType,
                backgroundColor: 'transparent',
                panning: {
                    enable: true
                },
                options3d: {
                    enabled: this.enable3D,
                    alpha: 45,
                    beta: 0
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
                visible: this.showYAxis,
                labels: {
                    style: {
                        font: '10px Trebuchet MS, Verdana, sans-serif'
                    }
                },
            },
            xAxis: {
                visible: this.showXAxis,
                type: 'datetime',
                dateTimeLabelFormats: {
                    day: '%e of %b'
                },
                labels: {
                    style: {
                        font: '10px Trebuchet MS, Verdana, sans-serif'
                    }
                }
            },
            title: {
                text: this.chartTitle,
                align: this.chartTitlePosition,
                style: {
                    color: '#bababa',
                    fontSize: '13px'
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
                padding: 11,
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
            plotOptions: {
                series: {
                    headerFormat: null,
                    style: {
                        fontSize: '12px',
                        color: '#D9D8D8',
                    },
                    enableMouseTracking: this.showTooltip,
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
                    allowPointSelect: false,
                    //cursor: 'normal',
                    depth: 35,
                    size: this.heightPx - 100,
                    dataLabels: {
                        color: '#c3c3c3',
                        enabled: this.showDataLabel,
                        style: {
                            fontSize: '12px',
                            width: '80px'
                        },
                        format: '<span style="color: {point.color}">{point.name}</span><br>{point.percentage:.1f} %',
                        //distance: -25,
                        filter: {
                            property: 'percentage',
                            operator: '>',
                            value: 4
                        }
                    },
                    tooltip: {
                        headerFormat: null,
                        style: {
                            fontSize: '12px',
                            color: '#D9D8D8',
                        },
                        pointFormat: '<span style="color:{point.color}; font-weight: bold">{point.name}</span> :<b>{point.percentage:.1f} %</b><br/>'
                    },
                    colors: Highcharts.map(Highcharts.getOptions().colors, function(color) {
                        return {
                            radialGradient: {
                                cx: 0.5,
                                cy: 0.3,
                                r: 0.1
                            },
                            stops: [
                                [0, color],
                                [1, Highcharts.color(color).brighten(-0.20).get('rgb')] // darken
                            ]
                        };
                    }),
                },
                areaspline: {
                    threshold: null
                },
                line: {
                    marker: {
                        enabled: false
                    },
                    tooltip: {
                        style: {
                            fontSize: '12px',
                            color: '#D9D8D8',
                        },
                        pointFormat: '<span style="color:{point.color}; font-weight: bold">{series.name}</span> :<b>{point.y:.2f}</b><br/>'
                    }
                }
            },
            series: this.series,
        };
    }

    private initSemiCirclePieChart() {
        this.chartOptions = {
            ...this.chartOptions,
            title: {
                ...this.chartOptions.title,
                align: 'center',
                verticalAlign: 'middle',
                y: 50
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: false,
                    },
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '75%'],
                    size: '100%'
                }
            },
            series: [{
                type: 'pie',
                innerSize: '65%',
                enableMouseTracking: false,
                data: this.series
            }],
            colors: Highcharts.map(Highcharts.getOptions().colors, function(color) {
                return {
                    radialGradient: {
                        cx: 0.5,
                        cy: 0.3,
                        r: 0.1
                    },
                    stops: [
                        [0, color],
                        [1, Highcharts.color(color).brighten(-0.5).get('rgb')] // darken
                    ]
                };
            })
        };
    }

    private initAreaChange() {
        const data = this.series[0].data as number[];
        const oldestData = data[0] as number;
        const newestData = data[data.length - 1] as number;
        const color = oldestData > newestData ? '#ff1010' : '#0d920d';

        this.chartOptions = {
            ...this.chartOptions,
            type: ChartType.areaspline,
            plotOptions: {
                ...this.chartOptions.plotOptions,
                areaspline: {
                    ...this.chartOptions.plotOptions.area,
                    lineColor: color,
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, color],
                            [1, 'rgb(15 26 69)']
                        ]
                    }
                }
            },
        };
    }

    private initBarChart() {
        this.chartOptions = {
            ...this.chartOptions,
            xAxis: {
                type: 'category',
                labels: {
                    style: {
                        font: '10px Trebuchet MS, Verdana, sans-serif'
                    }
                },
            },
            plotOptions: {
                ...this.chartOptions.plotOptions,
                series: {
                    ...this.chartOptions.plotOptions.series,
                    borderWidth: 0,
                    dataLabels: {
                        color: '#cecece',
                        enabled: true,
                        format: '{point.y:.1f}%'
                    }
                },
            },
            tooltip: {
                ...this.chartOptions.tooltip,
                pointFormat: '<span style="color:{point.color}; font-weight: bold">{point.name}</span> : <b>{point.y:.2f}%</b><br/>'
            }
        };
    }

    private initColumnChart() {
        this.chartOptions = {
            ...this.chartOptions,
            xAxis: {
                type: 'category',
                labels: {
                    rotation: -30,
                    style: {
                        font: '10px Trebuchet MS, Verdana, sans-serif'
                    }
                },
            },
            plotOptions: {
                ...this.chartOptions.plotOptions,
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                },
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
                ...this.chartOptions.tooltip,
                pointFormat: '<b style="color:{point.color};">{point.name}</b> : <b>{point.y:.2f}%</b><br/>'
            },
        };

    }

    private initPieChart() {
        if (this.showDataLabel) {
            return;
        }
        this.chartOptions = {
            ...this.chartOptions,
            legend: {
                ...this.chartOptions.legend,
                enabled: true,
                labelFormatter: function() {
                    const value = this.percentage.toFixed(2);
                    return '<span style="color:' + this.color + '">' + this.name + ': </span>(<b>' + value + '%)<br/>';
                }
            },
        };
    }
}
