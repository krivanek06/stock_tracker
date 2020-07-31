import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WatchlistPage } from './watchlist.page';
import {StockWatchlistModule} from '../../features/stock-watchlist-feature/stock-watchlist.module';

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
    RouterModule.forChild(routes)
  ],
  declarations: [WatchlistPage]
})
export class WatchlistPageModule {}
