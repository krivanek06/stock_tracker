import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FinancialChartModule, PriceChangeItemModule} from "../../components";
import {IonicModule} from "@ionic/angular";
import {FinancialChartContainerComponent} from "./financial-chart-container.component";


@NgModule({
    declarations: [FinancialChartContainerComponent],
    imports: [
        CommonModule,
        IonicModule,
        PriceChangeItemModule,
        FinancialChartModule
    ],
    exports: [FinancialChartContainerComponent]
})
export class FinancialChartContainerModule {
}
