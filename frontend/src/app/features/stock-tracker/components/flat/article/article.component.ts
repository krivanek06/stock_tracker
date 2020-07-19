import {Component, Input, OnInit} from '@angular/core';
import {StockArticle} from '../../../model/stockDetails';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article: StockArticle;

  constructor() { }

  ngOnInit() {}

}
