import {Component, Input, OnInit} from '@angular/core';
import {NewsArticle} from '../../model/newsModel';

@Component({
  selector: 'app-news-articles-container',
  templateUrl: './news-articles-container.component.html',
  styleUrls: ['./news-articles-container.component.scss'],
})
export class NewsArticlesContainerComponent implements OnInit {
  @Input() newsArticles: NewsArticle[];
  constructor() { }

  ngOnInit() {}

}
