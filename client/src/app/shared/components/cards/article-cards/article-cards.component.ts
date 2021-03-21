import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {NewsArticle} from '@core';


@Component({
    selector: 'app-article-cards',
    templateUrl: './article-cards.component.html',
    styleUrls: ['./article-cards.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleCardsComponent implements OnInit {
    @Input() article: NewsArticle;

    constructor() {
    }

    ngOnInit() {
    }
}
