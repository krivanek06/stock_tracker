import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-stock-details-financial-ratios',
  templateUrl: './stock-details-financial-ratios.component.html',
  styleUrls: ['./stock-details-financial-ratios.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockDetailsFinancialRatiosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
