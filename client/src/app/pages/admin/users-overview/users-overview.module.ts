import { NgModule } from '@angular/core';
import { UsersOverviewPage } from './users-overview.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared';
import {AccountFeatureModule} from '@account-feature';
import {AdminFeatureModule} from '../../../features/admin-feature/admin-feature.module';


const routes: Routes = [
  {
    path: '',
    component: UsersOverviewPage
  }
];


@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        AccountFeatureModule,
        AdminFeatureModule
    ],
  declarations: [UsersOverviewPage]
})
export class UsersOverviewPageModule {}
