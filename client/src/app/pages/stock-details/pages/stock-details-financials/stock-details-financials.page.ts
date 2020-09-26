import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stock-details-financials',
  templateUrl: './stock-details-financials.page.html',
  styleUrls: ['./stock-details-financials.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockDetailsFinancialsPage implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
