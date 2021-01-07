import {NgModule} from '@angular/core';
import {TransactionsTableComponent} from './components/transactions-table/transactions-table.component';
import {PortfolioGrowthComponent} from './components/portfolio-growth/portfolio-growth.component';
import {PortfolioChangeComponent} from './components/portfolio-change/portfolio-change.component';
import {HoldingsTableComponent} from './components/holdings-table/holdings-table.component';
import {SharedModule} from '../../shared/shared.module';
import {HoldingsTableBodyItemComponent} from './components/holdings-table-body-item/holdings-table-body-item.component';
import {StockDetailsFeatureModule} from '../stock-details-feature/stock-details-feature.module';
import {TradeConfirmationPopOverComponent} from './entry-components/trade-confirmation-pop-over/trade-confirmation-pop-over.component';
import {TransactionsChartComponent} from './components/transactions-chart/transactions-chart.component';


@NgModule({
    declarations: [
        TransactionsTableComponent,
        PortfolioGrowthComponent,
        PortfolioChangeComponent,
        HoldingsTableComponent,
        HoldingsTableBodyItemComponent,
        TradeConfirmationPopOverComponent,
        TransactionsChartComponent
    ],
    imports: [
        SharedModule,
        StockDetailsFeatureModule
    ],
    exports: [
        TransactionsTableComponent,
        PortfolioGrowthComponent,
        PortfolioChangeComponent,
        HoldingsTableComponent,
        TradeConfirmationPopOverComponent,
        TransactionsChartComponent

    ]
})
export class TradingFeatureModule {
}
