import {Component, Input, OnInit} from '@angular/core';
import {NewsArticle} from '../../model/newsModel';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article: NewsArticle;

  constructor() { }

  ngOnInit() {}

}
