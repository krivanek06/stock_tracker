import {Component, Input, OnInit} from '@angular/core';
import {IncomeStatement} from '../../../model/stockDetails';

@Component({
  selector: 'app-details-income-statement-card',
  templateUrl: './details-income-statement-card.component.html',
  styleUrls: ['./details-income-statement-card.component.scss'],
})
export class DetailsIncomeStatementCardComponent implements OnInit {
  @Input() incomeStatement: IncomeStatement;

  constructor() { }

  ngOnInit() {}

}
