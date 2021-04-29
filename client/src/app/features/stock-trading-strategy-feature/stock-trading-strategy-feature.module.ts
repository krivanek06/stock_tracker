import {NgModule} from '@angular/core';
import {SharedModule} from '@shared';
import {
    TradingStrategyEmvComponent,
    TradingStrategyEMVHistogramComponent,
    TradingStrategyRmcComponent,
    TradingStrategyRppGlbComponent,
    TradingStrategyRwbComponent
} from './components';
import {
    TradingStrategyEmvContainerComponent,
    TradingStrategyEmvHistogramContainerComponent,
    TradingStrategyRmcContainerComponent,
    TradingStrategyRppGlbContainerComponent,
    TradingStrategyRwbContainerComponent
} from './containers';


@NgModule({
    declarations: [
        TradingStrategyEMVHistogramComponent,
        TradingStrategyEmvComponent,
        TradingStrategyRwbComponent,
        TradingStrategyRppGlbComponent,
        TradingStrategyRwbContainerComponent,
        TradingStrategyRppGlbContainerComponent,
        TradingStrategyEmvHistogramContainerComponent,
        TradingStrategyEmvContainerComponent,
        TradingStrategyRmcComponent,
        TradingStrategyRmcContainerComponent
    ],
    exports: [
        TradingStrategyRwbContainerComponent,
        TradingStrategyRppGlbContainerComponent,
        TradingStrategyEmvHistogramContainerComponent,
        TradingStrategyEmvContainerComponent,
        TradingStrategyRmcContainerComponent
    ],
    imports: [
        SharedModule
    ]
})
export class StockTradingStrategyFeatureModule {
}
