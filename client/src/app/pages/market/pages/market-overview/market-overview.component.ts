import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MarketService} from '../../../../features/market-feature/services/market.service';
import {StMarketOverviewPartialData} from '../../../../api/customGraphql.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-market-overview',
    templateUrl: './market-overview.component.html',
    styleUrls: ['./market-overview.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketOverviewComponent implements OnInit {
    marketOverview$: Observable<StMarketOverviewPartialData>;

    chartHeight = 185;

    constructor(private marketService: MarketService) {
    }

    ngOnInit() {
        this.marketOverview$ = this.marketService.queryStMarketHistoryOverview();
    }

}
