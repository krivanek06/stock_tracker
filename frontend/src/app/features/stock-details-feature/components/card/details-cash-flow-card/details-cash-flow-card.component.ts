import {Component, Input, OnInit} from '@angular/core';
import {CashFlow} from '../../../model/stockDetails';

@Component({
  selector: 'app-details-cash-flow-card',
  templateUrl: './details-cash-flow-card.component.html',
  styleUrls: ['./details-cash-flow-card.component.scss'],
})
export class DetailsCashFlowCardComponent implements OnInit {
  @Input() cashflow: CashFlow;
  constructor() { }

  ngOnInit() {}

}
