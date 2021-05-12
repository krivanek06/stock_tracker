import {NgModule} from '@angular/core';
import {TransactionsChartComponent, TransactionsTableComponent} from './components/transactions';
import {
    PortfolioChangeChartComponent,
    PortfolioChangeComponent,
    PortfolioGrowthChartComponent,
    PortfolioStateComponent
} from './components/portfolio';
import {HoldingsAllocationChartComponent, HoldingsTableBodyItemComponent, HoldingsTableComponent} from './components/holdings';
import {SharedModule} from '@shared';
import {TradeConfirmationPopOverComponent} from './entry-components';
import {TradingFeatureFacadeService} from './services';
import {PortfolioChangePipe} from './pipes';


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
        PortfolioChangePipe
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
        HoldingsAllocationChartComponent
    ],
    providers: [TradingFeatureFacadeService]
})
export class StockTradingFeatureModule {
}
