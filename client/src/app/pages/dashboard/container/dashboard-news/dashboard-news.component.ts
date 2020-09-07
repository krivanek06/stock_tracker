import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {NewsArticle} from '../../../../features/stock-data-feature/model/newsModel';
import {SearchDataApiService} from '../../../../api/search-data-api.service';

@Component({
    selector: 'app-dashboard-news',
    templateUrl: './dashboard-news.component.html',
    styleUrls: ['./dashboard-news.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardNewsComponent implements OnInit {
    newsArticles$: Observable<NewsArticle[]>;

    constructor(private searchDataApiService: SearchDataApiService) {
    }

    ngOnInit() {
        this.newsArticles$ = this.searchDataApiService.getMarketNew();
        this.newsArticles$.subscribe(x => console.log({x}));
    }

}
