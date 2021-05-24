import {Component, OnInit} from '@angular/core';
import {
    GraphqlQueryService,
    GraphqlTradingStrategyService,
    StMarketSymbolHistoricalChartData,
    StockDetails,
    StTradingStrategyData,
    SymbolStorageService
} from '@core';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-stock-details-strategies',
    templateUrl: './stock-details-strategies.component.html',
    styleUrls: ['./stock-details-strategies.component.scss'],
})
export class StockDetailsStrategiesComponent implements OnInit {
    stockDetails$: Observable<StockDetails>;

    // strategies
    resistancePivotPoints$: Observable<StTradingStrategyData>;
    greenLineBreakout$: Observable<StTradingStrategyData>;
    historical5yData$: Observable<StMarketSymbolHistoricalChartData>;
    riskManagementCalculator$: Observable<StTradingStrategyData>;
    extendedMarketVerification$: Observable<StTradingStrategyData>;
    redWhiteBlue$: Observable<StTradingStrategyData>;

    constructor(private symbolStorageService: SymbolStorageService,
                private graphqlTradingStrategyService: GraphqlTradingStrategyService,
                private graphqlQueryService: GraphqlQueryService,
    ) {
    }

    ngOnInit() {
        const activeSymbol = this.symbolStorageService.activeSymbol;

        this.stockDetails$ = this.symbolStorageService.getStockDetails();

        this.resistancePivotPoints$ = this.graphqlTradingStrategyService.queryStTradingStrategyDataRPP(activeSymbol);
        this.greenLineBreakout$ = this.graphqlTradingStrategyService.queryStTradingStrategyDataGLB(activeSymbol);
        this.historical5yData$ = this.graphqlQueryService.queryStMarketSymbolHistoricalChartData(activeSymbol, '5y');
        this.riskManagementCalculator$ = this.graphqlTradingStrategyService.queryStTradingStrategyDataRMC(activeSymbol);
        this.extendedMarketVerification$ = this.graphqlTradingStrategyService.queryStTradingStrategyDataEMV(activeSymbol);
        this.redWhiteBlue$ = this.graphqlTradingStrategyService.queryStTradingStrategyDataRWB(activeSymbol);
    }

}
