import { Component, OnInit, Input } from '@angular/core';
import {NewsArticle} from '../../../model/newsModel';
import {StockArticle} from '../../../model/stockDetails';

@Component({
  selector: 'app-article-cards',
  templateUrl: './article-cards.component.html',
  styleUrls: ['./article-cards.component.scss'],
})
export class ArticleCardsComponent implements OnInit {
  @Input() article: StockArticle;

  constructor() {}

  ngOnInit() {}
}
