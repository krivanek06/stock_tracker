import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {MarketChartComponent} from './components/market-chart/market-chart.component';



@NgModule({
    declarations: [
        MarketChartComponent
    ],
    exports: [
        MarketChartComponent
    ],
    imports: [
        SharedModule
    ]
})
export class MarketFeatureModule { }
