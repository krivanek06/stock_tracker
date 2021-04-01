import {NgModule} from '@angular/core';
import {SharedModule} from '@shared';
import {
    MarketEarningsTableComponent,
    MarketEventsSelectorComponent,
    MarketTopTableCryptoComponent,
    MarketTopTableStocksComponent
} from './components';
import {MarketChartBuilderComponent, MarketEarningsModalComponent} from './entry-components';


@NgModule({
    declarations: [
        MarketTopTableStocksComponent,
        MarketEarningsTableComponent,
        MarketEventsSelectorComponent,
        MarketEarningsModalComponent,
        MarketTopTableCryptoComponent,
        MarketChartBuilderComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        MarketTopTableStocksComponent,
        MarketEarningsTableComponent,
        MarketEventsSelectorComponent,
        MarketEarningsModalComponent,
        MarketTopTableCryptoComponent,
        MarketChartBuilderComponent
    ]
})
export class MarketFeatureModule {
}
