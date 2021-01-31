import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {MarketChartComponent} from './components/market-chart/market-chart.component';
import {MarketTopTableComponent} from './components/market-top-table/market-top-table.component';
import {MarketEarningsTableComponent} from './components/market-earnings-table/market-earnings-table.component';
import {MarketEventsSelectorComponent} from './components/market-events-selector/market-events-selector.component';
import {MarketEarningsModalComponent} from './entry-components/market-earnings-modal/market-earnings-modal.component';



@NgModule({
    declarations: [
        MarketChartComponent,
        MarketTopTableComponent,
        MarketEarningsTableComponent,
        MarketEventsSelectorComponent,
        MarketEarningsModalComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        MarketChartComponent,
        MarketTopTableComponent,
        MarketEarningsTableComponent,
        MarketEventsSelectorComponent,
        MarketEarningsModalComponent
    ]
})
export class MarketFeatureModule { }
