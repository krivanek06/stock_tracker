import {NgModule} from '@angular/core';
import {TransactionsChartComponent, TransactionsTableComponent} from './components/transactions';
import {
    PortfolioChangeChartComponent,
    PortfolioChangeComponent,
    PortfolioGrowthChartComponent,
    PortfolioIncreaseChartComponent,
    PortfolioStateComponent
} from './components/portfolio';
import {HoldingsAllocationChartComponent, HoldingsTableBodyItemComponent, HoldingsTableComponent} from './components/holdings';
import {SharedModule} from '@shared';
import {TradeConfirmationPopOverComponent} from './entry-components';


@NgModule({
    declarations: [
        TransactionsTableComponent,
        PortfolioChangeComponent,
        HoldingsTableComponent,
        HoldingsTableBodyItemComponent,
        TradeConfirmationPopOverComponent,
        TransactionsChartComponent,
        PortfolioChangeChartComponent,
        PortfolioGrowthChartComponent,
        PortfolioStateComponent,
        HoldingsAllocationChartComponent,
        PortfolioIncreaseChartComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        TransactionsTableComponent,
        PortfolioChangeComponent,
        HoldingsTableComponent,
        TradeConfirmationPopOverComponent,
        TransactionsChartComponent,
        PortfolioChangeChartComponent,
        PortfolioGrowthChartComponent,
        PortfolioStateComponent,
        HoldingsAllocationChartComponent,
        PortfolioIncreaseChartComponent
    ]
})
export class StockTradingFeatureModule {
}
