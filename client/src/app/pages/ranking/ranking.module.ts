import { NgModule } from '@angular/core';
import { RankingPage } from './ranking.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: RankingPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RankingPage]
})
export class RankingPageModule {}
