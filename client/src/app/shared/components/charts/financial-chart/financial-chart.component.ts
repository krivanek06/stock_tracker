import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
} from '@angular/core';

import * as Highcharts from 'highcharts/highstock';
import HIndicatorsAll from 'highcharts/indicators/indicators-all';
import HDragPanes from 'highcharts/modules/drag-panes';
import HAnnotationsAdvanced from 'highcharts/modules/annotations-advanced';
import HPriceIndicator from 'highcharts/modules/price-indicator';
import HFullScreen from 'highcharts/modules/full-screen';
import HStockTools from 'highcharts/modules/stock-tools';
import HighchartsMoreModule from 'highcharts/highcharts-more';

// import HC_exporting from 'highcharts/modules/exporting';
/*
HIndicatorsAll(Highcharts);
HDragPanes(Highcharts);
HAnnotationsAdvanced(Highcharts);
HPriceIndicator(Highcharts);
HFullScreen(Highcharts);
HStockTools(Highcharts);
HighchartsMoreModule(Highcharts);*/

// HC_exporting(Highcharts)

@Component({
    selector: 'app-financial-chart',
    templateUrl: './financial-chart.component.html',
    styleUrls: ['./financial-chart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinancialChartComponent implements OnInit, OnChanges {
    @Output() priceRangeEmitter: EventEmitter<number[]> = new EventEmitter<number[]>();

    @Input() price: any[][];
    @Input() volume: any[];
    @Input() height = 350;
    @Input() showYAxis = false;

    // Define chart options
    Highcharts: typeof Highcharts = Highcharts;
    chart;
    updateFromInput = true;
    chartCallback;
    chartOptions = {}; //  : Highcharts.Options
    constructor() {
        // save chart into varaible
        const self = this;

        this.chartCallback = (chart) => {
            self.chart = chart;
        };
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!!this.price && this.price.length > 0) {
            this.recalculatePriceRange(this.price);
            this.initChart();
        }
    }

    ngOnInit() {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }

    recalculatePriceRange(priceRange: number[][]) {
        const lastIndex = priceRange[0].length - 1;
        const startingPrice = priceRange[0][lastIndex];
        const endingPrice = priceRange[priceRange.length - 1][lastIndex];
        this.priceRangeEmitter.emit([startingPrice, endingPrice]);
    }

    private initChart() {
        this.chartOptions = {
            chart: {
                backgroundColor: 'transparent',
                panning: {
                    enable: true
                }
            },
            scrollbar: {
                enabled: false,
            },
            credits: {
                enabled: false
            },
            legend: {enabled: false},
            plotOptions: {
                candlestick: {
                    color: 'red',
                    upColor: 'green',
                },
                /*areaspline: {
                    threshold: null
                }*/
            },
            series: [
                {
                    data: this.price,
                    type: 'candlestick',
                    yAxis: 0,
                    name: 'price',
                },
                {
                    type: 'column',
                    yAxis: 1,
                    data: this.volume,
                    color: '#f08800',
                    name: 'volume',
                },
            ],
            rangeSelector: {
                buttonTheme: {
                    visibility: 'hidden',
                },
                labelStyle: {
                    visibility: 'hidden',
                },
                inputEnabled: false,
            },
            navigator: {
                enabled: true // show range selector
            },
            tooltip: {
                borderWidth: 1,
                padding: 11,
                // headerFormat: null,
                backgroundColor: '#232323',
                style: {
                    fontSize: '12px',
                    color: '#D9D8D8',
                },
                formatter: function() {
                    const open = this.points[0].point.open;
                    // closed
                    const closed = this.points[0].point.close;
                    const closedDiff = Math.round((closed - open) * 100) / 100;
                    const closedText = closedDiff > 0 ? '  +$' + closedDiff : '  -$' + Math.abs(closedDiff);
                    const closedColor = open > closed ? 'red' : 'green';

                    // volume
                    let volume = this.points[1].y;
                    let counter = 0;
                    while (volume > 1000) {
                        volume = volume / 1000;
                        counter += 1;
                    }
                    volume = Math.round(volume * 100) / 100;
                    const volumeText = volume + ['', 'k', 'mil.', 'b'][counter];


                    return `<b style="color: #b1b0b0">Open:</b> $${open} <br/>
                            <b style="color: ${closedColor}">Closed:</b> $${closed}  <span style="color: ${closedColor}">${closedText}</span><br/>
                            <b style="color: #f08800">Volume:</b> ${volumeText}`;
                },
                shared: true,
                xDateFormat: '%d-%m-%Y',
                valueDecimals: 2,
                positioner: function(width, height, point) {
                    const position = {
                        x: 0, // point.series.chart.plotLeft
                        y: 0  // point.series.yAxis.top - chart.plotTop - 30 volume
                    };
                    return position;
                }
                //  pointFormat: '<span style="color:{point.color}; font-weight: bold">{series.name}</span> :<b>{point.y:.2f}</b><br/>'
            },
            xAxis: {
                // type: 'datetime',
                range: 'max',
                labels: {
                    enabled: true,
                    style: {
                        font: '10px Trebuchet MS, Verdana, sans-serif'
                    }
                },
                events: {
                    afterSetExtremes: (e) =>
                        this.recalculatePriceRange(e.target.series[0].processedYData),
                },
            },
            yAxis: [
                {
                    crosshair: {
                        label: {
                            backgroundColor: '#232323',
                            enabled: true   // shows pointed data on Y axis
                        }
                    },
                    title: {
                        text: ''
                    },
                    gridLineWidth: 1,
                    //minorTickInterval: 'auto',
                    gridLineColor: '#66666655',
                    tickPixelInterval: 45,
                    minorGridLineWidth: 0,
                    allowDecimals: true,
                    height: '75%',
                    resize: {
                        enabled: true,
                    },
                    startOnTick: true,
                    endOnTick: true,
                    opposite: false,
                    visible: this.showYAxis
                    // min: 0
                },
                {
                    title: {
                        text: ''
                    },
                    gridLineWidth: 0,
                    top: '75%',
                    height: '25%',
                    offset: 0,
                    startOnTick: true,
                    endOnTick: true,
                    visible: true
                },
            ],
            responsive: {
                rules: [
                    {
                        condition: {
                            maxWidth: 800
                        },
                        chartOptions: {
                            rangeSelector: {
                                inputEnabled: false
                            }
                        }
                    }
                ]
            }
        };
    }
}
