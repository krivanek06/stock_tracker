import {NgModule} from '@angular/core';
import {SharedModule} from '@shared';
import {
    TradingStrategyEmvComponent,
    TradingStrategyEMVHistogramComponent,
    TradingStrategyRmcComponent,
    TradingStrategyRppGlbComponent,
    TradingStrategyRwbComponent
} from './components';


@NgModule({
    declarations: [
        TradingStrategyEMVHistogramComponent,
        TradingStrategyEmvComponent,
        TradingStrategyRwbComponent,
        TradingStrategyRppGlbComponent,
        TradingStrategyRmcComponent,
    ],
    exports: [
        TradingStrategyEMVHistogramComponent,
        TradingStrategyEmvComponent,
        TradingStrategyRwbComponent,
        TradingStrategyRppGlbComponent,
        TradingStrategyRmcComponent,
    ],
    imports: [
        SharedModule
    ]
})
export class StockTradingStrategyFeatureModule {
}
