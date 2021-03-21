import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {MarketTopTableStocksComponent} from './components';
import {MarketEarningsTableComponent} from './components';
import {MarketEventsSelectorComponent} from './components';
import {MarketEarningsModalComponent} from './entry-components';
import {MarketTopTableCryptoComponent} from './components';
import {MarketChartBuilderComponent} from './entry-components';


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
