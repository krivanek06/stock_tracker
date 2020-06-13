import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {TimelineChartComponent, TimelineChartContainerDialogComponent} from './container/timeline-chart-container/timeline-chart.component';
import { TopTableComponent } from './components/top-table/top-table.component';
import { DashboardTopTableContainerComponent } from './container/dashboard-top-table-container/dashboard-top-table-container.component';
import { MarketArticleComponent } from './components/market-article/market-article.component';
import {StoreModule} from '@ngrx/store';

import * as fromStockTracker from './store/stockWatchlist.reducer';
import {EffectsModule} from '@ngrx/effects';
import {StockTrackerEffects} from './store/stockWatchlist.effects';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  declarations: [
    DashboardComponent,
    TimelineChartComponent,
    TopTableComponent,
    DashboardTopTableContainerComponent,
    MarketArticleComponent,
    TimelineChartContainerDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([StockTrackerEffects]),
    StoreModule.forFeature('stockTracker', fromStockTracker.reducer)
  ],
  entryComponents: [
    TimelineChartContainerDialogComponent
  ]
})
export class StockTrackerModule { }
