import {Component, Input, OnInit} from '@angular/core';
import {BalanceSheet} from '../../../model/stockDetails';

@Component({
  selector: 'app-details-balance-sheet',
  templateUrl: './details-balance-sheet.component.html',
  styleUrls: ['./details-balance-sheet.component.scss'],
})
export class DetailsBalanceSheetComponent implements OnInit {
  @Input() balanceSheet: BalanceSheet;

  constructor() { }

  ngOnInit() {}



}
