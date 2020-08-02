import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {WatchlistPage} from './watchlist.page';
import {StockWatchlistModule} from '../../features/stock-watchlist-feature/stock-watchlist.module';
import {SharedModule} from '../../shared/shared.module';
import {WatchlistTablesContainerComponent} from './container/watchlist-tables-container/watchlist-tables-container.component';

const routes: Routes = [
    {
        path: '',
        component: WatchlistPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        StockWatchlistModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        WatchlistPage,
        WatchlistTablesContainerComponent
    ]
})
export class WatchlistPageModule {
}
