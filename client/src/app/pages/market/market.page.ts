import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MARKET_PAGE_ENUM, MARKET_PAGE_PATH} from './model/market.model';

@Component({
    selector: 'app-market',
    templateUrl: './market.page.html',
    styleUrls: ['./market.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketPage implements OnInit {
    MARKET_PAGE_PATH = MARKET_PAGE_PATH;

    constructor() {
    }

    ngOnInit() {
    }


}
