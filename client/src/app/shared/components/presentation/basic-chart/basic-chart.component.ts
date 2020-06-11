import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {Color, Label, ThemeService} from 'ng2-charts';

@Component({
  selector: 'app-basic-chart',
  templateUrl: './basic-chart.component.html',
  styleUrls: ['./basic-chart.component.scss']
})
export class BasicChartComponent implements OnInit {
  // Set true to show legends
  @Input() lineChartLegend = true;

  // Define type of chart
  @Input() lineChartType = 'line';

  // font color will be white
  @Input() darkMode = true;

  // Array of different segments in chart -> {data: data, label: label}
  @Input() lineChartData: ChartDataSets[];

  // Labels shown on the x-axis
  @Input() lineChartLabels: Label[];

  @Input() height = '300px';
  @Input() width = '100%';


  // Define chart options
  lineChartOptions: ChartOptions = {
    responsive: true,
  };

  constructor() {
  }

  // Define colors of chart segments
  lineChartColors: Color[] = [
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
    }
  ];


  ngOnInit(): void {
    if (this.darkMode) {
      this.applyDarkMode();
    }

  }


  applyDarkMode(): void {
    this.lineChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        labels: {fontColor: 'white'},
      },
      tooltips: {
        bodyFontSize: 15,
        mode: 'index',
        intersect: false,
        titleMarginBottom: 10,
        xPadding: 15,
        yPadding: 15,
      },
      hover: {
        mode: 'index',
        intersect: false
      },
      scales: {
        xAxes: [{
          display: false,
          ticks: {
            fontColor: 'white',
            autoSkip: true

          },
          gridLines: {
            color: 'rgba(255,255,255,0.1)',
            offsetGridLines: true
          }
        }],
        yAxes: [{
          ticks: {fontColor: 'white'},
          gridLines: {color: 'rgba(255,255,255,0.1)'}
        }]
      }
    };
  }

}
