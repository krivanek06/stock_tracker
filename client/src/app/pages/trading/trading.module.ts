import {NgModule} from '@angular/core';
import {TradingPage} from './trading.page';
import {RouterModule, Routes} from '@angular/router';
import {HoldingsTableModule, PortfolioStateModule, TradeConfirmationPopOverModule} from "@stock-trading-feature";
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";
import {MenuHeaderModule} from "@pages-shared";
import {
    FinancialChartContainerModule,
    GenericCardModule,
    GenericListModule,
    HeaderModule,
    StockSummaryContainerModule
} from "@shared";
import {DetailsStockSuggestionChangeModule, StockSearchModule} from "@stock-details-feature";

const routes: Routes = [
    {
        path: '',
        component: TradingPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        TradeConfirmationPopOverModule,
        IonicModule,
        MenuHeaderModule,
        HeaderModule,
        StockSearchModule,
        PortfolioStateModule,
        FinancialChartContainerModule,
        GenericListModule,
        GenericCardModule,
        StockSummaryContainerModule,
        HoldingsTableModule,
        DetailsStockSuggestionChangeModule
    ],
    declarations: [TradingPage]
})
export class TradingPageModule {
}
