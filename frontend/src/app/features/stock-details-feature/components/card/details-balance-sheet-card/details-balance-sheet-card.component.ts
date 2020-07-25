import {Component, Input, OnInit} from '@angular/core';
import {BalanceSheet} from '../../../model/stockDetails';

@Component({
  selector: 'app-details-balance-sheet-card',
  templateUrl: './details-balance-sheet-card.component.html',
  styleUrls: ['./details-balance-sheet-card.component.scss'],
})
export class DetailsBalanceSheetCardComponent implements OnInit {
  @Input() balanceSheet: BalanceSheet;

  constructor() { }

  ngOnInit() {}



}