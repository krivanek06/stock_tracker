import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {DashboardPage} from './dashboard.page';
import {StockWatchlistModule} from '../../features/stock-watchlist-feature/stock-watchlist.module';
import {AppRoutingModule} from '../../app-routing.module';
import {SharedModule} from 'src/app/shared/shared.module';
import {DashboardNewsContainerComponent} from './container/dashboard-news-container/dashboard-news-container.component';
import {DashboardTopTableContainerComponent} from './container/dashboard-top-table-container/dashboard-top-table-container.component';
import {StockTrackerFeatureModule} from '../../features/stock-tracker-feature/stock-tracker-feature.module';

const routes: Routes = [
    {
        path: '',
        component: DashboardPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        StockWatchlistModule,
        SharedModule,
        RouterModule.forChild(routes),
        StockTrackerFeatureModule
    ],
    declarations: [
        DashboardPage,
        DashboardTopTableContainerComponent,
        DashboardNewsContainerComponent,
    ]
})
export class DashboardPageModule {
}
