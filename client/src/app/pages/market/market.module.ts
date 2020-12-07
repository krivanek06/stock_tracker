import { NgModule } from '@angular/core';
import { MarketPage } from './market.page';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MarketPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MarketPage]
})
export class MarketPageModule {}
