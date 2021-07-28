import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {GraphqlQueryService, StMarketDailyOverview, StMarketEtfDocument} from '@core';
import {MarketFeatureFacadeService} from '@market-feature';
import {ChartType, SymbolIdentification} from '@shared';

@Component({
    selector: 'app-market-etf',
    templateUrl: './market-etf.component.html',
    styleUrls: ['./market-etf.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketEtfComponent implements OnInit {
    marketDailyOverview$: Observable<StMarketDailyOverview>;
    etfDocument$: Observable<StMarketEtfDocument>;

    ChartType = ChartType;

    constructor(private graphqlQueryService: GraphqlQueryService,
                private marketPageFacadeService: MarketFeatureFacadeService) {
    }

    ngOnInit() {
        this.marketDailyOverview$ = this.graphqlQueryService.queryMarketDailyOverview();
        this.etfDocument$ = this.graphqlQueryService.queryEtfDocument('SPY');


        this.etfDocument$.subscribe(r => console.log('etf', r));
    }

    etfClicked(symbolIdentification: SymbolIdentification) {

    }
}
