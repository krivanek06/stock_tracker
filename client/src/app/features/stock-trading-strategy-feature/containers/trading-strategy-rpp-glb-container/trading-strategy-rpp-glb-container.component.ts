import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {GraphqlQueryService, GraphqlTradingStrategyService, StMarketSymbolHistoricalChartData, StTradingStrategyData} from '@core';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-trading-strategy-rpp-glb-container',
    templateUrl: './trading-strategy-rpp-glb-container.component.html',
    styleUrls: ['./trading-strategy-rpp-glb-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradingStrategyRppGlbContainerComponent implements OnInit {
    @Input() symbol: string;
    @Input() heightPx = 400;

    resistancePivotPoints$: Observable<StTradingStrategyData>;
    greenLineBreakout$: Observable<StTradingStrategyData>;
    historical5yData$: Observable<StMarketSymbolHistoricalChartData>;

    constructor(private graphqlTradingStrategyService: GraphqlTradingStrategyService,
                private graphqlQueryService: GraphqlQueryService) {
    }

    ngOnInit() {
        this.resistancePivotPoints$ = this.graphqlTradingStrategyService.queryStTradingStrategyDataRPP(this.symbol);
        this.greenLineBreakout$ = this.graphqlTradingStrategyService.queryStTradingStrategyDataGLB(this.symbol);
        this.historical5yData$ = this.graphqlQueryService.queryStMarketSymbolHistoricalChartData(this.symbol, '5y');
    }

}
