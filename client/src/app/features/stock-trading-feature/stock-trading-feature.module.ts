import {NgModule} from '@angular/core';
import {TransactionsChartComponent, TransactionsTableComponent} from './components/transactions';
import {
    PortfolioChangeChartComponent,
    PortfolioChangeComponent,
    PortfolioGrowthChartComponent,
    PortfolioStateComponent
} from './components/portfolio';
import {HoldingsAllocationChartComponent, HoldingsTableBodyItemComponent, HoldingsTableComponent} from './components/holdings';
import {SharedModule} from '../../shared/shared.module';
import {StockDetailsFeatureModule} from '../stock-details-feature/stock-details-feature.module';
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
        HoldingsAllocationChartComponent
    ],
    imports: [
        SharedModule,
        StockDetailsFeatureModule
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
        HoldingsAllocationChartComponent
    ]
})
export class StockTradingFeatureModule {
}
