import {NgModule} from '@angular/core';
import {MenuHeaderComponent} from './menu-header/menu-header.component';
import {SharedModule} from '@shared';
import {StockWatchlistModule} from '@stock-watchlist-feature';
import {PageGridLayoutComponent} from './page-grid-layout/page-grid-layout.component';


@NgModule({
    declarations: [
        MenuHeaderComponent,
        PageGridLayoutComponent
    ],
    imports: [
        SharedModule,
        StockWatchlistModule
    ],
    exports: [
        MenuHeaderComponent,
        PageGridLayoutComponent
    ]
})
export class PagesSharedModule {
}
