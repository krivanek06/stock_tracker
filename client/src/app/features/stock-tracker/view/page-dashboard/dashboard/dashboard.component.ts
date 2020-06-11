import {Component, OnInit} from '@angular/core';
import {StockApiService} from '../../../api/stock-api.service';
import {Observable} from 'rxjs';
import {IChartData} from '../../../model/chartModel';
import {TopStockTableData} from '../../../model/tableModel';
import {MarketNews} from '../../../model/newsModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  articles$: Observable<MarketNews>;
  constructor(private stockAPI: StockApiService) {
  }

  ngOnInit(): void {
    this.articles$ = this.stockAPI.getMarketNew();
    this.articles$.subscribe(x => console.log('x', x) )
  }

}
