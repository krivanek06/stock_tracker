import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {StMarketChartData} from '../../../../api/customGraphql.service';
import * as Highcharts from 'highcharts/highstock';
import {ChartSeriesData} from '../../../../shared/models/chartDataModel';

@Component({
    selector: 'app-market-chart',
    templateUrl: './market-chart.component.html',
    styleUrls: ['./market-chart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketChartComponent implements OnInit, OnChanges {
    @Input() marketChartData: StMarketChartData;
    @Input() timestamp: number[];
    @Input() chartTitle: string;
    @Input() heightPx = 300;
    @Input() enableLegendClick = false;

    private chartSeries: ChartSeriesData[] = [];

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
        console.log('changes MarketChartComponent', changes);
    }

    ngOnInit() {
        this.initChartSeries();
        this.initChart();
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }

    private initChartSeries() {
        let count = 0;
        this.chartSeries = this.marketChartData.result.map(res => {
            const data: ChartSeriesData = {
                name: res.name,
                data: res.data,
                color: {
                    linearGradient: {x1: 0, x2: 0, y1: 0, y2: 1},
                    stops: [
                        [0, Highcharts.getOptions().colors[(count % 5) + 2]], // '#25aedd'
                        [1, Highcharts.getOptions().colors[count % 10]]
                    ]
                }
            };
            count += 1;
            return data;
        });
    }

    private initChart() {
        this.chartOptions = {
            chart: {
                type: 'line',
                backgroundColor: 'transparent',
                panning: {
                    enable: true
                }
            },
            yAxis: {
                title: false,
                visible: true,
                gridLineColor: '#66666655',
                labels: {
                    style: {
                        fontSize: '10px'
                    }
                },
            },
            navigator: {
                enabled: false // show range selector
            },
            xAxis: {
                type: 'category',
                categories: this.timestamp,
                labels: {
                    rotation: -20,
                    format: '{value:%e %b}',
                    style: {
                        font: '10px Trebuchet MS, Verdana, sans-serif'
                    }
                },
            },
            title: {
                text: '',
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
                itemStyle: {
                    color: '#acacac',
                    cursor: this.enableLegendClick ? 'pointer' : 'default',
                },
                itemHoverStyle: {
                    color: this.enableLegendClick ? '#241eaa' : '#acacac'
                },
                itemHiddenStyle: {
                    color: this.enableLegendClick ? '#494949' : '#acacac'
                },
                enabled: true,
                verticalAlign: 'top',
                align: 'left',
                x: -20,
                labelFormatter: function() {
                    const value = this.yData[this.yData.length - 1];
                    return '<span style="color:' + this.color + '">● ' + this.name + ': </span><b>' + value;
                }
            },
            tooltip: {
                padding: 11,
                enabled: true,
                valueDecimals: 2,
                backgroundColor: '#232323',
                style: {
                    fontSize: '12px',
                    color: '#D9D8D8',
                },
                shared: true,
                headerFormat: '<p style="color:#909592; font-size: 12px">{point.key:%e %B %Y}, {point.key:%A}</p><br/>',
                pointFormatter: function() {
                    return `<p><span style="color: ${this.series.color}; font-weight: bold">● ${this.series.name}: </span><span>${this.y}</span></p><br/>`;
                }
            },
            plotOptions: {
                line: {
                    marker: {
                        enabled: false,
                    },
                    lineWidth: 3,
                    threshold: null
                },
                series: {
                    events: {
                        legendItemClick: (e) => {
                            if (!this.enableLegendClick) {
                                e.preventDefault(); // prevent toggling series visibility
                            }
                        },
                    }
                }
            },
            allowPointSelect: this.enableLegendClick,
            series: this.chartSeries
        };
    }

}
