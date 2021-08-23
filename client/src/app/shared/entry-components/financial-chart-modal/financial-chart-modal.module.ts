import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FinancialChartModalComponent} from "./financial-chart-modal.component";
import {FinancialChartContainerModule} from "../../containers";
import {IonicModule} from "@ionic/angular";


@NgModule({
    declarations: [FinancialChartModalComponent],
    imports: [
        CommonModule,
        FinancialChartContainerModule,
        IonicModule
    ],
    exports: [FinancialChartModalComponent]
})
export class FinancialChartModalModule {
}
