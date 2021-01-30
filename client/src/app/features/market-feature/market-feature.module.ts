import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {MarketChartComponent} from './components/market-chart/market-chart.component';
import {MarketTopTableComponent} from './components/market-top-table/market-top-table.component';



@NgModule({
    declarations: [
        MarketChartComponent,
        MarketTopTableComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        MarketChartComponent,
        MarketTopTableComponent
    ]
})
export class MarketFeatureModule { }
