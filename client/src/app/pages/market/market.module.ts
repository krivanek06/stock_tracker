import {NgModule} from '@angular/core';
import {MarketPage} from './market.page';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {MarketOverviewComponent} from './pages/market-overview/market-overview.component';
import {MarketFeatureModule} from '../../features/market-feature/market-feature.module';
import {MarketDailyChangeComponent} from './pages/market-daily-change/market-daily-change.component';
import {MarketCryptoComponent} from './pages/market-crypto/market-crypto.component';

const routes: Routes = [
    {
        path: '',
        component: MarketPage,
        children: [
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
        ]
    }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        MarketFeatureModule
    ],
    declarations: [
        MarketPage,
        MarketOverviewComponent,
        MarketDailyChangeComponent,
        MarketCryptoComponent
    ]
})
export class MarketPageModule {
}
