import {
    Component,
    Input,
    OnInit,
    Output, EventEmitter, SimpleChanges, OnChanges,
} from '@angular/core';

import * as Highcharts from 'highcharts/highstock';
import HIndicatorsAll from 'highcharts/indicators/indicators-all';
import HDragPanes from 'highcharts/modules/drag-panes';
import HAnnotationsAdvanced from 'highcharts/modules/annotations-advanced';
import HPriceIndicator from 'highcharts/modules/price-indicator';
import HFullScreen from 'highcharts/modules/full-screen';
import HStockTools from 'highcharts/modules/stock-tools';
import HighchartsMoreModule from 'highcharts/highcharts-more';
import NetworkgraphModule from 'highcharts/modules/networkgraph';
import {PriceRangeData} from '../../../models/chartModel';

// import HC_exporting from 'highcharts/modules/exporting';

HIndicatorsAll(Highcharts);
HDragPanes(Highcharts);
HAnnotationsAdvanced(Highcharts);
HPriceIndicator(Highcharts);
HFullScreen(Highcharts);
HStockTools(Highcharts);
HighchartsMoreModule(Highcharts);

// HC_exporting(Highcharts)

@Component({
    selector: 'app-financial-chart',
    templateUrl: './financial-chart.component.html',
    styleUrls: ['./financial-chart.component.scss'],
})
export class FinancialChartComponent implements OnInit, OnChanges {
    @Output() selectedPeriodEmitter: EventEmitter<string> = new EventEmitter<string>();

    @Input() price: any[];
    @Input() volume: any[];
    @Input() height = 350;

    startingPrice: number;
    endingPrice: number;

    selectedPeriod = '1y';


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


    loadIntervalData(period: string) {
        this.selectedPeriod = period;
        this.selectedPeriodEmitter.emit(this.selectedPeriod);
    }

    // update by new data to corresponding timeline
    ___loadIntervalData(period: string) {
        /* this.selectedPeriod = period;
         console.log(this.selectedPeriod);
         this.chart.showLoading("Loading data from server...");
         this.stockAPI
           .getChartDataForSymbol(this.symbol, this.selectedPeriod)
           .pipe(takeUntil(this.destroy$))
           .subscribe((res) => {
             this.chart.series[0].setData(res.price);
             this.chart.series[1].setData(res.volume);
             this.chart.hideLoading();
           });*/
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.initChart();
    }

    ngOnInit() {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }

    recalculatePriceRange(priceRange: number[]) {
        this.startingPrice = priceRange[0];
        this.endingPrice = priceRange[priceRange.length - 1];
    }


    initChart() {
        this.chartOptions = {
            chart: {
                backgroundColor: 'transparent',
                type: 'area', // area
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
                area: {
                    fillColor: {
                        linearGradient: {x1: 0, x2: 0, y1: 0, y2: 1},
                        stops: [
                            [0, 'rgba(232,0,24,1)'],
                            [1, 'rgba(0,20,82,0.37048322747067575)']
                        ]
                    },
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
            series: [
                {
                    data: this.price,
                    color: 'rgba(232,0,24,1)',
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
            tooltip: {
                borderWidth: 1,
                headerFormat: null,
                backgroundColor: '#232323',
                style: {
                    fontSize: '14px',
                    color: '#D9D8D8',
                },
                shared: true,
                pointFormat: '<span style="color:{point.color}; font-weight: bold">{series.name}</span> :<b>{point.y:.2f}</b><br/>'
              /*  pointFormat: '<span style="font-weight: bold; color:{series.color};">{point.name}</span> :<b>{point.y:.2f}</b>'*/
            },
            xAxis: {
                labels: {
                    enabled: true,
                    style: {
                        color: '#cecece',
                        font: '12px Trebuchet MS, Verdana, sans-serif'
                    }
                },
                events: {
                    afterSetExtremes: (e) =>
                        this.recalculatePriceRange(e.target.series[0].processedYData),
                },
                minRange: 3600 * 1000, // one hour
            },
            yAxis: [
                {
                    title: false,
                    gridLineWidth: 0,
                    minorGridLineWidth: 0,
                    allowDecimals: true,
                    labels: {
                        align: 'left',
                    },
                    height: '75%',
                    resize: {
                        enabled: true,
                    },
                },
                {
                    title: false,
                    gridLineWidth: 0,
                    labels: {
                        align: 'left',
                    },
                    top: '75%',
                    height: '25%',
                    offset: 0,
                },
            ],
        };
    }
}
