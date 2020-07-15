import {Component, Input, OnInit} from '@angular/core';
import {MoneyInfo} from '../../../model/stockDetails';

@Component({
  selector: 'app-details-money-info',
  templateUrl: './details-money-info.component.html',
  styleUrls: ['./details-money-info.component.scss'],
})
export class DetailsMoneyInfoComponent implements OnInit {
  @Input() moneyInfo: MoneyInfo;

  constructor() { }

  ngOnInit() {}

}
