import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {StockFundamentalsApiService} from '../../api/stock-fundamentals-api.service';
import {EarningsCalendar} from '../../features/stock-data-feature/model/chartDataModel';
import {SearchDataApiService} from '../../api/search-data-api.service';
import {NewsArticle} from '../../features/stock-data-feature/model/newsModel';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

    earnings$: Observable<EarningsCalendar[]>;
    newsArticles$: Observable<NewsArticle[]>;

    constructor(
        private searchDataApiService: SearchDataApiService
    ) {
    }

    ngOnInit(): void {

        this.newsArticles$ = this.searchDataApiService.getMarketNew();
        this.newsArticles$.subscribe(x => console.log({x}))

    }

}
