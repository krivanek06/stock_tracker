import {Component, OnInit} from '@angular/core';
import {MARKET_PAGE_ENUM} from './model/market.model';

@Component({
    selector: 'app-market',
    templateUrl: './market.page.html',
    styleUrls: ['./market.page.scss'],
})
export class MarketPage implements OnInit {
    segmentValue = MARKET_PAGE_ENUM.overview;

    MARKET_PAGE_ENUM = MARKET_PAGE_ENUM;

    constructor() {
    }

    ngOnInit() {
    }

    segmentChanged(event: CustomEvent) {
        console.log('event', event);
    }
}
