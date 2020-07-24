import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import * as Highcharts from 'highcharts/highstock';
import HighchartsMoreModule from 'highcharts/highcharts-more';
import {Recommendations} from '../../../model/stockDetails';

HighchartsMoreModule(Highcharts);

@Component({
    selector: 'app-recommendation-chart',
    templateUrl: './recommendation-chart.component.html',
    styleUrls: ['./recommendation-chart.component.scss'],
})
export class RecommendationChartComponent implements OnInit, OnChanges {
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
                text: null
            },
            xAxis: {
                labels: {
                    style: {
                        color: '#cecece',
                        font: '12px Trebuchet MS, Verdana, sans-serif'
                    }
                },
                categories: !this.recommendations ? [] : this.recommendations.map(rec => new  Date (rec.period).toString().split(' ')[1])
            },
            yAxis: {
                min: 0,
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                title: {
                    text: null
                }
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
                    fontSize: '14px',
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
                    color: '#00C073',
                    data: !this.recommendations ? [] : this.recommendations.map(rec => rec.buy)
                },
                {
                    name: 'Hold',
                    color: '#FFDC48',
                    data: !this.recommendations ? [] : this.recommendations.map(rec => rec.hold)
                },
                {
                    name: 'Sell',
                    color: '#FFA33E',
                    data: !this.recommendations ? [] : this.recommendations.map(rec => rec.sell)
                },
                {
                    name: 'Strong sell',
                    color: '#FF333A',
                    data: !this.recommendations ? [] : this.recommendations.map(rec => rec.strongSell)
                }

            ]
        };
    }
}











