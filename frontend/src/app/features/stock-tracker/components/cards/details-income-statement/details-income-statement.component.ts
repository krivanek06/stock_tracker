import {Component, Input, OnInit} from '@angular/core';
import {IncomeStatement} from '../../../model/stockDetails';

@Component({
  selector: 'app-details-income-statement',
  templateUrl: './details-income-statement.component.html',
  styleUrls: ['./details-income-statement.component.scss'],
})
export class DetailsIncomeStatementComponent implements OnInit {
  @Input() incomeStatement: IncomeStatement;

  constructor() { }

  ngOnInit() {}

}
