import {Component, Input, OnInit} from '@angular/core';
import {NewsArticle} from '../../model/newsModel';

@Component({
  selector: 'app-market-article',
  templateUrl: './market-article.component.html',
  styleUrls: ['./market-article.component.scss']
})
export class MarketArticleComponent implements OnInit {
  @Input() article: NewsArticle;

  constructor() { }

  ngOnInit(): void {
  }

}
