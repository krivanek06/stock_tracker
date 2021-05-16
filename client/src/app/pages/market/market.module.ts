import {NgModule} from '@angular/core';
import {MarketPage} from './market.page';
import {SharedModule} from '@shared';
import {RouterModule, Routes} from '@angular/router';
import {MarketOverviewComponent} from './pages/market-overview/market-overview.component';
import {MarketFeatureModule} from '@market-feature';
import {MarketDailyChangeComponent} from './pages/market-daily-change/market-daily-change.component';
import {MarketCryptoComponent} from './pages/market-crypto/market-crypto.component';
import {MarketPageFacadeService} from './services/market-page-facade.service';
import {PagesSharedModule} from '@pages-shared';
import {StockWatchlistModule} from '@stock-watchlist-feature';

const routes: Routes = [
    {
        path: '',
        component: MarketPage,
        pathMatch: 'full',
        /*children: [
            {
                path: '',
                redirectTo: 'daily-change',
                pathMatch: 'full'
            },
            {
                path: 'daily-change',
                component: MarketDailyChangeComponent
            },
            {
                path: 'overview',
                component: MarketOverviewComponent
            },
            {
                path: 'crypto',
                component: MarketCryptoComponent
            }
        ]*/
    }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        MarketFeatureModule,
        PagesSharedModule,
        StockWatchlistModule
    ],
    declarations: [
        MarketPage,
        MarketOverviewComponent,
        MarketDailyChangeComponent,
        MarketCryptoComponent
    ],
    providers: [
        MarketPageFacadeService
    ]
})
export class MarketPageModule {
}
