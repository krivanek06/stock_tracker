import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stock-price-card',
  templateUrl: './stock-price-card.component.html',
  styleUrls: ['./stock-price-card.component.scss'],
})
export class StockPriceCardComponent implements OnInit {
  @Input() image = 'assets/computer.png';
  @Input() name: string;
  @Input() price: number;

  constructor() { }

  ngOnInit() {}

}
