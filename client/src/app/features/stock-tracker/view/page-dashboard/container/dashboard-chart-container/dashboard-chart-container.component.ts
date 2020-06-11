import {Component, Input, OnInit} from '@angular/core';
import {interval, Observable} from 'rxjs';
import {IChartData} from '../../../../model/chartModel';
import {StockApiService} from '../../../../api/stock-api.service';


@Component({
  selector: 'app-dashboard-chart-container',
  templateUrl: './dashboard-chart-container.component.html',
  styleUrls: ['./dashboard-chart-container.component.scss']
})
export class DashboardChartContainerComponent implements OnInit {
  @Input() name: string;
  @Input() symbol: string;

  chartData$: Observable<IChartData>;

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
