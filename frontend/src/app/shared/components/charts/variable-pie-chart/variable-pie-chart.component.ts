import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import Variablepie from "highcharts/modules/variable-pie";
import HighchartsMore from "highcharts/highcharts-more";

Variablepie(Highcharts);
HighchartsMore(Highcharts);
@Component({
  selector: 'app-variable-pie-chart',
  templateUrl: './variable-pie-chart.component.html',
  styleUrls: ['./variable-pie-chart.component.scss'],
})
export class VariablePieChartComponent implements OnInit, OnChanges {

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
        backgroundColor: 'transparent',
        type: 'variablepie'
      },
      title: {
        text: this.title,
      },
      tooltip: {
        headerFormat: null,
        backgroundColor: '#232323',
        style: {
          fontSize: '14px',
          color: '#D9D8D8',
        },
       // shared: true,
        pointFormat: '<span style="color:{point.color}; font-weight: bold">\u25CF {point.name}</span><br/>' +
                    'Amount: <b>{point.y} ({point.percentage:.1f} %)</b><br/>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        variablepie: {
         // allowPointSelect: true,
          cursor: 'pointer',
          // colors: [, ''],
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>',
            style: {
              fontSize: '13px',
              color: '#e5e5e5',
            },
            filter: {
              property: 'percentage',
              operator: '>',
              value: 4
            }
          }
        }
      },
      series: [{
        minPointSize: 10,
        innerSize: '20%',
        name: 'Share',
        data: this.data,
      }],
      credits: {
        enabled: false
      },

    };
  }

}
