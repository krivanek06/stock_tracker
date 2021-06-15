import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {GroupDetailsComponent} from '../../group-details.component';
import {GroupDetailsOverviewComponent} from './group-details-overview.component';
import {SharedModule} from '@shared';
import {GroupFeatureModule} from '@group-feature';
import {StockTradingFeatureModule} from '@stock-trading-feature';

const routes: Routes = [
  {
    path: '',
    component: GroupDetailsOverviewComponent
  },
];

@NgModule({
  declarations: [
    GroupDetailsOverviewComponent
  ],
  imports: [
    SharedModule,
    GroupFeatureModule,
    RouterModule.forChild(routes),
    StockTradingFeatureModule,
  ]
})
export class GroupDetailsOverviewModule { }
