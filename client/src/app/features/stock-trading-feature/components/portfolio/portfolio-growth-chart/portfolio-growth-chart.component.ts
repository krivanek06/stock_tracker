import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {StPortfolio, StPortfolioWeeklyChange} from '../../../../../api/customGraphql.service';
import * as Highcharts from 'highcharts/highstock';

@Component({
    selector: 'app-portfolio-growth-chart',
    templateUrl: './portfolio-growth-chart.component.html',
    styleUrls: ['./portfolio-growth-chart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioGrowthChartComponent implements OnInit, OnChanges {

    @Input() stPortfolio: StPortfolio[];
    @Input() heightPx = 350;

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
        this.initChart();
    }

    ngOnInit() {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }

    private initChart() {
        this.chartOptions = {
            chart: {
                type: 'area',
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
                visible: true,
                gridLineColor: '#66666655',
                labels: {
                    style: {
                        fontSize: '10px'
                    }
                },
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: {
                    day: '%e of %b'
                },
                labels: {
                    style: {
                        font: '10px Trebuchet MS, Verdana, sans-serif'
                    }
                },
            },
            title: {
                text: 'Portfolio growth',
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
                enabled: true,
                floating: true,
                verticalAlign: 'top',
                align: 'right',
                y: -8,
                itemStyle: {
                    color: '#acacac',
                    cursor: 'pointer',
                    fontSize: '12px'
                },
                itemHoverStyle: {
                    color: '#484d55'
                },
                itemHiddenStyle: {
                    color: '#282828'
                }
            },
            tooltip: {
                padding: 11,
                enabled: true,
                backgroundColor: '#232323',
                style: {
                    fontSize: '12px',
                    color: '#D9D8D8',
                },
                shared: true,
                headerFormat: '<p style="color:#909592; font-size: 12px">{point.key}</p><br/>',
                pointFormatter: function() {
                    return `<p><span style="color: ${this.series.color}; font-weight: bold">● Portfolio ${this.series.name.toLowerCase()}: </span><span>$${this.y}</span></p><br/>`;
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
                }
            },
            series: [{
                color: '#00c4dd',
                fillColor: {
                    linearGradient: {
                        x1: 1,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, '#25aedd'],
                        [1, 'transparent']
                    ]
                },
                name: 'Total',
                data: (() => {
                    return this.stPortfolio.map(point => [Date.parse(point.date), point.portfolioCash + point.portfolioInvested]);
                })()
            }, {
                color: '#6b00fa',
                fillColor: {
                    linearGradient: {
                        x1: 1,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, '#7666fa'],
                        [1, 'transparent']
                    ]
                },
                name: 'Invested',
                data: (() => {
                    return this.stPortfolio.map(point => [Date.parse(point.date), point.portfolioInvested]);
                })()
            }, {
                color: '#f24f18',
                fillColor: {
                    linearGradient: {
                        x1: 1,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, '#d35431'],
                        [1, 'transparent']
                    ]
                },
                name: 'Cash',
                data: (() => {
                    return this.stPortfolio.map(point => [Date.parse(point.date), point.portfolioCash]);
                })()
            }]
        };
    }

}
