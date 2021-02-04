import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MARKET_PAGE_ENUM, MARKET_PAGE_PATH} from './model/market.model';
import {Router} from '@angular/router';

@Component({
    selector: 'app-market',
    templateUrl: './market.page.html',
    styleUrls: ['./market.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketPage implements OnInit {
    segmentValue = MARKET_PAGE_ENUM.dailyChange;

    MARKET_PAGE_PATH = MARKET_PAGE_PATH;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    segmentChanged(event: CustomEvent) {
        this.router.navigate([`menu/market/${event.detail.value}`]);
    }
}
