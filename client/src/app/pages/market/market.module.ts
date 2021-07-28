import {NgModule} from '@angular/core';
import {MarketPage} from './market.page';
import {SharedModule} from '@shared';
import {RouterModule, Routes} from '@angular/router';
import {MarketOverviewComponent} from './pages/market-overview/market-overview.component';
import {MarketFeatureModule, MarketOverviewPreloadGuard} from '@market-feature';
import {MarketTopStocksComponent} from './pages/market-top-stocks/market-top-stocks.component';
import {MarketCryptoComponent} from './pages/market-crypto/market-crypto.component';
import {PagesSharedModule} from '@pages-shared';
import {StockWatchlistModule} from '@stock-watchlist-feature';
import {MarketDailyChangeComponent} from './pages/market-daily-change/market-daily-change.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MarketEtfComponent} from './pages/market-etf/market-etf.component';

const routes: Routes = [
    {
        path: '',
        component: MarketPage,
        pathMatch: 'full',
        resolve: [MarketOverviewPreloadGuard]
    }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        MarketFeatureModule,
        PagesSharedModule,
        StockWatchlistModule,
        MatExpansionModule
    ],
    declarations: [
        MarketPage,
        MarketOverviewComponent,
        MarketTopStocksComponent,
        MarketCryptoComponent,
        MarketDailyChangeComponent,
        MarketEtfComponent
    ]
})
export class MarketPageModule {
}
