import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import * as Highcharts from 'highcharts/highstock';
//import HighchartsMoreModule from 'highcharts/highcharts-more';
import {Recommendations} from '@core';

//HighchartsMoreModule(Highcharts);

@Component({
    selector: 'app-details-recommendation-chart',
    templateUrl: './details-recommendation-chart.component.html',
    styleUrls: ['./details-recommendation-chart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsRecommendationChartComponent implements OnInit, OnChanges {
    @Input() recommendations: Recommendations[];

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
                text: '',
                align: 'left',
                style: {
                    color: '#bababa',
                    fontSize: '12px'
                }
            },
            xAxis: {
                labels: {
                    rotation: -20,
                    style: {
                        font: '10px Trebuchet MS, Verdana, sans-serif'
                    }
                },
                categories: !this.recommendations ? [] : this.recommendations.map(rec => new Date(rec.period).toString().split(' ')[1])
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
                visible: true,
                min: 0,
                gridLineColor: '#66666655',
                labels: {
                    style: {
                        fontSize: '10px'
                    }
                },
            },
            legend: {
                itemStyle: {
                    color: '#8f8f8f',
                },
                itemHoverStyle: {
                    color: '#b8b8b8'
                }
            },
            tooltip: {
                headerFormat: null,
                backgroundColor: '#232323',
                style: {
                    fontSize: '12px',
                    color: '#D9D8D8',
                },
                pointFormat: '<span style="font-size: 14px; color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
                shared: true
            },
            plotOptions: {
                column: {
                    stacking: 'normal'
                }
            },
            point: {
                events: {
                    legendItemClick: () => {
                        return false; // <== returning false will cancel the default action
                    }
                }
            },
            credits: {
                enabled: false
            },
            allowPointSelect: false,
            series: [
                {
                    name: 'Strong Buy',
                    color: '#008F88',
                    data: !this.recommendations ? [] : this.recommendations.map(rec => rec.strongBuy)
                },
                {
                    name: 'Buy',
                    color: '#0d920d',
                    data: !this.recommendations ? [] : this.recommendations.map(rec => rec.buy)
                },
                {
                    name: 'Hold',
                    color: '#a17a2a',
                    data: !this.recommendations ? [] : this.recommendations.map(rec => rec.hold)
                },
                {
                    name: 'Sell',
                    color: '#a81806',
                    data: !this.recommendations ? [] : this.recommendations.map(rec => rec.sell)
                },
                {
                    name: 'Strong sell',
                    color: '#711205',
                    data: !this.recommendations ? [] : this.recommendations.map(rec => rec.strongSell)
                }

            ]
        };
    }
}











