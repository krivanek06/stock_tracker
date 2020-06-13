import {Component, Inject, Input, OnInit} from '@angular/core';
import {interval, Observable} from 'rxjs';
import {ChartDataIdentification, TimelineChartData} from '../../model/chartModel';
import {StockApiService} from '../../api/stock-api.service';
import {Color} from 'ng2-charts';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-timeline-chart-container',
  templateUrl: './timeline-chart.component.html',
  styleUrls: ['./timeline-chart.component.scss']
})
export class TimelineChartComponent implements OnInit {
  @Input() name: string;
  @Input() symbol: string;

  chartData$: Observable<TimelineChartData>;

  lineChartColors: Color[] = [
    {backgroundColor: 'rgba(255,0,0,0.3)', borderColor: 'red'},
    {backgroundColor: 'rgba(0,255,0,0.3)', borderColor: 'green'}
  ];

  constructor(private stockAPI: StockApiService) {
  }

  ngOnInit(): void {
    this.updateChart('1d');

    /*setInterval( () => {
      this.updateChart('1d');
    } , 1000);*/
  }

  updateChart(period: string) {
    this.chartData$ = this.stockAPI.getChartDataForSymbol(this.symbol, period);
  }

}


/* timeline chart component in modal */
@Component({
  selector: 'app-timeline-chart-container-dialog',
  template: `
    <style>
      ::ng-deep.mat-dialog-container {
        background-color: #212121 !important;
      }

      mat-dialog-content {
        padding: 20px 24px;
      }
    </style>

    <mat-dialog-content>
      <app-timeline-chart-container
        [symbol]="data.symbol"
        [name]="data.name">
      </app-timeline-chart-container>
    </mat-dialog-content>
  `,
})
export class TimelineChartContainerDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ChartDataIdentification) {
  }

  ngOnInit(): void {
  }

}

