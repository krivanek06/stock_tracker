import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {MarketChartComponent} from './components/market-chart/market-chart.component';
import {MarketTopTableStocksComponent} from './components/market-top-table-stocks/market-top-table-stocks.component';
import {MarketEarningsTableComponent} from './components/market-earnings-table/market-earnings-table.component';
import {MarketEventsSelectorComponent} from './components/market-events-selector/market-events-selector.component';
import {MarketEarningsModalComponent} from './entry-components/market-earnings-modal/market-earnings-modal.component';
import {MarketTopTableCryptoComponent} from './components/market-top-table-crypto/market-top-table-crypto.component';



@NgModule({
    declarations: [
        MarketChartComponent,
        MarketTopTableStocksComponent,
        MarketEarningsTableComponent,
        MarketEventsSelectorComponent,
        MarketEarningsModalComponent,
        MarketTopTableCryptoComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        MarketChartComponent,
        MarketTopTableStocksComponent,
        MarketEarningsTableComponent,
        MarketEventsSelectorComponent,
        MarketEarningsModalComponent,
        MarketTopTableCryptoComponent
    ]
})
export class MarketFeatureModule { }
