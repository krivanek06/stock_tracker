import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StfmSectorPerformance} from '@core';
import * as Highcharts from 'highcharts/highstock';
import {TreeMapData} from '@shared';
import More from 'highcharts/highcharts-more';
import Tree from 'highcharts/modules/treemap';
import Heatmap from 'highcharts/modules/heatmap';

More(Highcharts);
Tree(Highcharts);
Heatmap(Highcharts);

@Component({
    selector: 'app-market-sector-heat-map',
    templateUrl: './market-sector-heat-map.component.html',
    styleUrls: ['./market-sector-heat-map.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketSectorHeatMapComponent implements OnInit {

    @Input() heightPx = 400;
    @Input() sectorPerformance: StfmSectorPerformance[] = [];

    treeMapData: TreeMapData[] = [];

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

    ngOnInit() {
        this.treeMapData = this.sectorPerformance.map(sector => {
            // console.log(parseFloat(sector.changesPercentage));
            const valueData = parseFloat(sector.changesPercentage);
            return {name: `${sector.sector} ${valueData}%`, value: valueData, colorValue: valueData} as TreeMapData;
        }).sort((a, b) => a.value - b.value);
        this.initChart();
    }

    private initChart() {
        this.chartOptions = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                backgroundColor: 'transparent',
                panning: {
                    enable: true
                }
            },
            title: {
                text: ''
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            colorAxis: {
                minColor: '#ff0d21',
                maxColor: '#2cda0b'
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
                useHTML: true,
                valueDecimals: 2,
                pointFormatter: function() {
                    // console.log(this);
                    const name = this.name.split(' ')[0];
                    return `${name}: <span style="color: ${this.color}">${this.value}</span>%`;
                }
            },
            series: [{
                type: 'treemap',
                data: this.treeMapData,
                dataLabels: {
                    style: {
                        fontSize: '14px'
                    }
                }
            }]
        };
    }

}
