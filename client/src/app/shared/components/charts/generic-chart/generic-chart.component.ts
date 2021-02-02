import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ChartType} from '../../../models/sharedModel';

import * as Highcharts from 'highcharts/highstock';
import highcharts3D from 'highcharts/highcharts-3d';
import {stFormatLargeNumber} from '../../../utils/shared-functions.functions';

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
    @Input() enableLegendTogging = false;
    @Input() showTooltip = true;
    @Input() showDataLabel = false;
    @Input() categories: string[];
    @Input() enable3D = false;
    @Input() isPercentage = false;
    @Input() showYAxis = true;
    @Input() showXAxis = true;

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
            this.chartOptions.xAxis.type = 'category';
            this.chartOptions.xAxis.labels.rotation = -30;
        } else if (this.chartType === ChartType.bar) {
            this.chartOptions.xAxis.type = 'category';
        } else if (this.chartType === ChartType.areaChange) {
            this.initAreaChange();
        } else if (this.chartType === ChartType.pie) {
            this.initPieChart();
        }

        if (this.categories) {
            this.initCategories();
        }

        if (this.isPercentage) {
            this.chartOptions.tooltip = {
                ...this.chartOptions.tooltip,
                headerFormat: '',
                pointFormat: '<span style="color:{point.color};">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
            };
            if (this.showDataLabel) {
                this.chartOptions.plotOptions.series.dataLabels.format = '{point.y:.1f}%';
            }
        } else {
            this.chartOptions.plotOptions.column.tooltip = {
                ...this.chartOptions.plotOptions.column.tooltip,
                pointFormatter: function() {
                    const value = stFormatLargeNumber(this.y);
                    return `<p><span style="color: ${this.color}; font-weight: bold">● ${this.series.name}: </span><span>${value}</span></p><br/>`;
                }
            };
        }

    }

    ngOnInit() {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }

    private initCategories() {
        this.chartOptions.plotOptions.series.dataLabels.enabled = false;
        this.chartOptions.xAxis.categories = this.categories;
        this.chartOptions.xAxis.type = 'category';
        this.chartOptions.xAxis.labels.rotation = -30;
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
                    rotation: 0,
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
                backgroundColor: '#232323',
                style: {
                    fontSize: '12px',
                    color: '#D9D8D8',
                },
                shared: true,
                valueDecimals: 2
            },
            rangeSelector: {
                enabled: false
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
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
                        enabled: this.showDataLabel,
                        format: undefined
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
                    depth: 35,
                    size: this.heightPx - 100,
                    dataLabels: {
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
                }
            },
            series: this.series,
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

    private initPieChart() {
        if (this.showDataLabel) {
            return;
        }
        this.chartOptions.legend.labelFormatter = function() {
            const value = this.percentage.toFixed(2);
            return '<span style="color:' + this.color + '">' + this.name + ': </span>(<b>' + value + '%)<br/>';
        };
    }
}
