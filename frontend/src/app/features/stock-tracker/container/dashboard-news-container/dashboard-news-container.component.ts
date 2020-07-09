import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {NewsArticle} from '../../model/newsModel';
import {StockApiService} from '../../endpoints/stock-api.service';

@Component({
  selector: 'app-dashboard-news-container',
  templateUrl: './dashboard-news-container.component.html',
  styleUrls: ['./dashboard-news-container.component.scss'],
})
export class DashboardNewsContainerComponent implements OnInit {
  articles$: Observable<NewsArticle[]>;
  constructor( private stockAPI: StockApiService,) { }

  ngOnInit() {
    this.articles$ = this.stockAPI.getMarketNew();
  }

}
