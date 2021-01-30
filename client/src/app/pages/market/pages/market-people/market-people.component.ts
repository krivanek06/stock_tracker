import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {StMarketOverviewPartialData} from '../../../../api/customGraphql.service';
import {MarketService} from '../../../../features/market-feature/services/market.service';

@Component({
    selector: 'app-market-people',
    templateUrl: './market-people.component.html',
    styleUrls: ['./market-people.component.scss'],
})
export class MarketPeopleComponent implements OnInit {
    marketOverview$: Observable<StMarketOverviewPartialData>;

    chartHeight = 185;

    constructor(private marketService: MarketService) {
    }

    ngOnInit() {
        this.marketOverview$ = this.marketService.queryStMarketHistoryOverview();
    }

}
