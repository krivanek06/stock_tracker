import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDashboardComponent } from './view/page-dashboard/page-dashboard.component';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [
    PageDashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class StockTrackerModule { }
