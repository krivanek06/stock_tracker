import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {TopStockTableData, TopTableData} from '../../../../model/tableModel';
import {StockApiService} from '../../../../api/stock-api.service';

@Component({
  selector: 'app-dashboard-top-table-container',
  templateUrl: './dashboard-top-table-container.component.html',
  styleUrls: ['./dashboard-top-table-container.component.scss']
})
export class DashboardTopTableContainerComponent implements OnInit {
  getTopActive$: Observable<TopStockTableData[]>;
  getTopGains$: Observable<TopStockTableData[]>;
  getTopLosers$: Observable<TopStockTableData[]>;

  constructor(private stockAPI: StockApiService) {
  }

  ngOnInit(): void {
    this.getTopActive$ = this.stockAPI.getTopActive();
    this.getTopGains$ = this.stockAPI.getTopGains();
    this.getTopLosers$ = this.stockAPI.getTopLosers();
  }

}
