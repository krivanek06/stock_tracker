import { NgModule } from '@angular/core';
import { TradingPage } from './trading.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {TradingFeatureModule} from '../../features/trading-feature/trading-feature.module';
import {StockDetailsFeatureModule} from '../../features/stock-details-feature/stock-details-feature.module';
import {StockWatchlistModule} from '../../features/stock-watchlist-feature/stock-watchlist.module';

const routes: Routes = [
  {
    path: '',
    component: TradingPage
  }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        TradingFeatureModule,
        StockDetailsFeatureModule,
        StockWatchlistModule
    ],
  declarations: [TradingPage]
})
export class TradingPageModule {}
