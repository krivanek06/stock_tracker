import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stock-price-range-card',
  templateUrl: './stock-price-range-card.component.html',
  styleUrls: ['./stock-price-range-card.component.scss'],
})
export class StockPriceRangeCardComponent implements OnInit {
  @Input() priceRangeFirst: number;
  @Input() priceRangeLast: number;

  constructor() { }

  ngOnInit() {}

}
