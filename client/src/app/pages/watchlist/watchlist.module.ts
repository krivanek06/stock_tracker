import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {WatchlistPage} from './watchlist.page';
import {StockWatchlistModule} from '../../features/stock-watchlist-feature/stock-watchlist.module';
import {SharedModule} from '../../shared/shared.module';

const routes: Routes = [
    {
        path: '',
        component: WatchlistPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        StockWatchlistModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        WatchlistPage
    ]
})
export class WatchlistPageModule {
}
