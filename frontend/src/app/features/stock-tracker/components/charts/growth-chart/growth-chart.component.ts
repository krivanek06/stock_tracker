import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

import * as Highcharts from 'highcharts/highstock';
import HighchartsMoreModule from 'highcharts/highcharts-more';
import {GrowthEstimatesPercent} from '../../../model/stockDetails';

HighchartsMoreModule(Highcharts);

@Component({
  selector: 'app-growth-chart',
  templateUrl: './growth-chart.component.html',
  styleUrls: ['./growth-chart.component.scss'],
})
export class GrowthChartComponent implements OnInit, OnChanges {
  @Input() growthEst: GrowthEstimatesPercent;


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
    console.log('GrowthChartComponent', this.growthEst);
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
      yAxis: {
        gridLineWidth: 0,
        minorGridLineWidth: 0,
        title: {
          text: null
        }
      },
      tooltip: {
        headerFormat: null,
        backgroundColor: '#232323',
        style: {
          fontSize: '14px',
          color: '#D9D8D8',
        },
        pointFormat: '{series.name}: {point.y}<br/>',
        shared: true
      },
      xAxis: {
        categories: ['Past five years to next', 'Current quarter to next', 'Current year to next'],
        gridLineWidth: 0,
        minorGridLineWidth: 0,
        title: {
          text: null
        }
      },
      point: {
        events: {
          legendItemClick: () => {
            return false; // <== returning false will cancel the default action
          }
        }
      },
      allowPointSelect: false,
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Current growth',
        data: !this.growthEst ? [] : [this.growthEst.fiveYear.current, this.growthEst.quarter.current, this.growthEst.year.current]
      }, {
        name: 'Next growth',
        data: !this.growthEst ? [] : [this.growthEst.fiveYear.next, this.growthEst.quarter.next, this.growthEst.year.next]
      }]
    };
  }

}
