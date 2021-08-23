import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WatchlistPage} from './watchlist.page';
import {IonicModule} from "@ionic/angular";
import {MenuHeaderModule} from "@pages-shared";
import {GenericCardModule, GenericListModule, HeaderModule} from "@shared";
import {WatchlistTableModule} from "@stock-watchlist-feature";

const routes: Routes = [
    {
        path: '',
        component: WatchlistPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        IonicModule,
        MenuHeaderModule,
        HeaderModule,
        GenericListModule,
        GenericCardModule,
        WatchlistTableModule,
    ],
    declarations: [
        WatchlistPage
    ]
})
export class WatchlistPageModule {
}
