import {NgModule} from '@angular/core';
import {MenuHeaderComponent} from './menu-header/menu-header.component';
import {SharedModule} from '@shared';
import {StockWatchlistModule} from '@stock-watchlist-feature';


@NgModule({
    declarations: [
        MenuHeaderComponent
    ],
    imports: [
        SharedModule,
        StockWatchlistModule
    ],
    exports: [
        MenuHeaderComponent
    ]
})
export class PagesSharedModule {
}
