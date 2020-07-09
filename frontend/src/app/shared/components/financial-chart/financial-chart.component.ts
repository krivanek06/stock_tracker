import {
    Component,
    Input,
    OnInit,
    Output, EventEmitter,
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
import {PriceRangeData} from '../../model/chartModel';

// import HC_exporting from 'highcharts/modules/exporting';

HIndicatorsAll(Highcharts);
HDragPanes(Highcharts);
HAnnotationsAdvanced(Highcharts);
HPriceIndicator(Highcharts);
HFullScreen(Highcharts);
HStockTools(Highcharts);

// HC_exporting(Highcharts)

@Component({
    selector: 'app-financial-chart',
    templateUrl: './financial-chart.component.html',
    styleUrls: ['./financial-chart.component.scss'],
})
export class FinancialChartComponent implements OnInit {
    @Output() priceRangeEmitter: EventEmitter<PriceRangeData> = new EventEmitter<PriceRangeData>();

    @Input() price: any[];
    @Input() volume: any[];


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
            console.log('chartCallback', chart);
            self.chart = chart;
        };
    }

    // update by new data to corresponding timeline
    loadIntervalData(period: string) {
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

    ngOnInit() {
        this.initChart(this.price, this.volume);

        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }

    updateChart() {
        this.chart.series[0].setData(this.price);
        this.chart.series[1].setData(this.volume);
    }

    recalculatePriceRange(priceRange: number[]) {
        this.priceRangeEmitter.emit({priceRangeFirst: priceRange[0], priceRangeLast: priceRange[priceRange.length - 1]});
    }


    initChart(price, volume) {
        this.chartOptions = {
            chart: {
                backgroundColor: 'transparent',
                height: 500,
            },
            scrollbar: {
                enabled: false,
            },
            legend: {enabled: true},
            plotOptions: {series: {dataLabels: {enabled: false}}},
            series: [
                {
                    data: price,
                    color: '#144BFF',
                    name: 'price',
                },
                {
                    type: 'column',
                    yAxis: 1,
                    data: volume,
                    color: '#EE0DB2',
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
                backgroundColor: '#fff',
                borderWidth: 1,
                shadow: true,
                useHTML: true,
                style: {
                    color: '#5485aa',
                },
            },
            xAxis: {
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
