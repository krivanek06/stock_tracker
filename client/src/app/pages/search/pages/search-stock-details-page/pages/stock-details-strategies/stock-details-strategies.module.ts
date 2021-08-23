import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StockDetailsStrategiesComponent} from "./stock-details-strategies.component";
import {IonicModule} from "@ionic/angular";
import {FinancialChartContainerModule, GenericCardModule} from "@shared";
import {StockTradingStrategyFeatureModule} from "@stock-trading-strategy-feature";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    {
        path: '',
        component: StockDetailsStrategiesComponent,
    }
]


@NgModule({
    declarations: [StockDetailsStrategiesComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        IonicModule,
        GenericCardModule,
        FinancialChartContainerModule,
        StockTradingStrategyFeatureModule
    ],
    exports: [StockDetailsStrategiesComponent]
})
export class StockDetailsStrategiesModule {
}
