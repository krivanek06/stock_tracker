import {Component, Input, OnInit} from '@angular/core';
import {CashFlow} from '../../../model/stockDetails';

@Component({
  selector: 'app-details-cash-flow',
  templateUrl: './details-cash-flow.component.html',
  styleUrls: ['./details-cash-flow.component.scss'],
})
export class DetailsCashFlowComponent implements OnInit {
  @Input() cashflow: CashFlow;
  constructor() { }

  ngOnInit() {}

}
