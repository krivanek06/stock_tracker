import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as Highcharts from 'highcharts/highstock';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit, OnChanges {
  @Input() title: string;
  @Input() data: any[];
  @Input() height = 350;

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
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        backgroundColor: 'transparent',
        type: 'pie'
      },
      title: {
        text: this.title,
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          colors: ['#2FA811', '#B60808'],
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
            distance: -50,
            filter: {
              property: 'percentage',
              operator: '>',
              value: 4
            }
          }
        }
      },
      series: [{
        name: 'Share',
        data: this.data,
      }],
      credits: {
        enabled: false
      },

    };
  }

}
