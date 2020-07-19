import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StockDetailsPage } from './stock-details.page';
import {StockTrackerModule} from '../../features/stock-tracker/stock-tracker.module';
import {SharedModule} from '../../shared/shared.module';
import {OverviewWithChartContainerComponent} from './container/overview-with-chart-container/overview-with-chart-container.component';

const routes: Routes = [
  {
    path: '',
    component: StockDetailsPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        StockTrackerModule,
        SharedModule
    ],
  declarations: [
      StockDetailsPage,
      OverviewWithChartContainerComponent
  ]
})
export class StockDetailsPageModule {}
