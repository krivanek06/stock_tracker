import {NgModule} from '@angular/core';
import {StockDetailsFinancialComponent} from './stock-details-financial.component';
import {FinancialReportsContainerComponent, FinancialStatementsContainerComponent} from './containers';
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";
import {DetailsStatementSheetModule} from "@stock-details-feature";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
    {
        path: '',
        component: StockDetailsFinancialComponent,
    }
]

@NgModule({
    declarations: [
        StockDetailsFinancialComponent,
        FinancialStatementsContainerComponent,
        FinancialReportsContainerComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        DetailsStatementSheetModule,
        RouterModule.forChild(routes),
    ]
})
export class StockDetailsFinancialModule {
}
