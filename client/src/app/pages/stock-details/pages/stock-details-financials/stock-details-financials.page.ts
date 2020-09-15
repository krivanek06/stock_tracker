import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-stock-details-financials',
  templateUrl: './stock-details-financials.page.html',
  styleUrls: ['./stock-details-financials.page.scss'],
})
export class StockDetailsFinancialsPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const symbol = this.route.snapshot.queryParamMap.get('symbol')
    console.log('symbol', symbol)
  }

}
