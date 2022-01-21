import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stock-details-valuation',
  templateUrl: './stock-details-valuation.component.html',
  styleUrls: ['./stock-details-valuation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockDetailsValuationComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
