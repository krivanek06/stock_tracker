import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {DashboardPage} from './dashboard.page';
import {StockWatchlistModule} from '../../features/stock-watchlist-feature/stock-watchlist.module';
import {SharedModule} from 'src/app/shared/shared.module';
import {StockDataFeatureModule} from '../../features/stock-data-feature/stock-data-feature.module';
import {DashboardChartsContainerComponent} from './container/dashboard-charts-container/dashboard-charts-container.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        StockWatchlistModule,
        SharedModule,
        RouterModule.forChild(routes),
        StockDataFeatureModule
    ],
    declarations: [
        DashboardPage,
        DashboardChartsContainerComponent
    ]
})
export class DashboardPageModule {
}
