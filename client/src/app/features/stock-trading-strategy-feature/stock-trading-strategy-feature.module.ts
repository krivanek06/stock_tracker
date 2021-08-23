import {NgModule} from '@angular/core';
import {
    TradingStrategyEmvComponent,
    TradingStrategyEMVHistogramComponent,
    TradingStrategyRmcComponent,
    TradingStrategyRppGlbComponent,
    TradingStrategyRwbComponent
} from './components';
import {HighchartsChartModule} from "highcharts-angular";
import {IonicModule} from "@ionic/angular";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";


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
        HighchartsChartModule,
        IonicModule,
        ReactiveFormsModule,
        CommonModule
    ]
})
export class StockTradingStrategyFeatureModule {
}
