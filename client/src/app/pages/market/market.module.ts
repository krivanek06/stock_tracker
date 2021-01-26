import {NgModule} from '@angular/core';
import {MarketPage} from './market.page';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {MarketOverviewComponent} from './pages/market-overview/market-overview.component';
import {MarketFeatureModule} from '../../features/market-feature/market-feature.module';

const routes: Routes = [
    {
        path: '',
        component: MarketPage,
        children: [
            {
                path: '',
                redirectTo: 'overview',
                pathMatch: 'full'
            },
            {
                path: 'overview',
                component: MarketOverviewComponent
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
        MarketOverviewComponent
    ]
})
export class MarketPageModule {
}
